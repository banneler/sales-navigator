#!/usr/bin/env python3
"""Compare PDF embedded text vs OCR on raster PNGs for GPC training corpus.

Helps validate docs/gpc-training-corpus-canonical-text.md: embedded extraction
often loses table structure; OCR recovers more surface text but introduces
errors ($ vs S, merged cells as run-on lines).

Requires: pip install easyocr numpy\<2 Pillow  (see scripts/requirements-ocr-validation.txt)
First run downloads EasyOCR model weights (~100MB).

Example:
  python3 scripts/validate_gpc_extract_vs_ocr.py \\
    --report docs/gpc-training-corpus-ocr-validation.md \\
    --limit 80
"""
from __future__ import annotations

import argparse
import json
import re
import sys
import tempfile
import time
from dataclasses import dataclass, asdict
from difflib import SequenceMatcher
from pathlib import Path

try:
    import fitz  # PyMuPDF
except ImportError:
    print("Install PyMuPDF: pip install pymupdf", file=sys.stderr)
    sys.exit(1)

try:
    import easyocr
    from PIL import Image
except ImportError:
    print(
        "Install OCR deps: pip install easyocr 'numpy<2' Pillow\n"
        "  (see scripts/requirements-ocr-validation.txt)",
        file=sys.stderr,
    )
    sys.exit(1)

DEFAULT_PDF_ROOT = Path("/Users/ba/Desktop/GPC Training Material")
DEFAULT_IMG_ROOT = Path("/Users/ba/Desktop/GPC Training Material - page images")
LOW_TEXT_RE = re.compile(
    r"^- (.+\.pdf) p\.(\d+) \((\d+) chars\)\s*$", re.MULTILINE
)


def norm(s: str) -> str:
    return " ".join(s.lower().split())


def similarity(a: str, b: str) -> float:
    na, nb = norm(a), norm(b)
    if not na and not nb:
        return 1.0
    if not na or not nb:
        return 0.0
    return SequenceMatcher(None, na, nb).ratio()


def iter_page_pngs(img_root: Path) -> list[tuple[str, Path, int]]:
    """(relpath_folder, png_path, page_num) sorted."""
    out: list[tuple[str, Path, int]] = []
    for png in sorted(img_root.rglob("page-*.png")):
        parent = png.parent.relative_to(img_root).as_posix()
        m = re.match(r"page-(\d+)\.png$", png.name, re.I)
        if not m:
            continue
        out.append((parent, png, int(m.group(1))))
    return out


def parse_low_text_pages(canonical_md: Path) -> list[tuple[str, int]]:
    text = canonical_md.read_text(encoding="utf-8", errors="replace")
    found: list[tuple[str, int]] = []
    for m in LOW_TEXT_RE.finditer(text):
        rel = m.group(1)
        if rel.endswith(".pdf"):
            rel = rel[: -len(".pdf")]
        found.append((rel, int(m.group(2))))
    return found


def extra_table_candidates(img_root: Path) -> list[tuple[str, int]]:
    """Extra (folder_relpath_under_img_root, 1-based page) for known table-heavy assets."""
    candidates: list[tuple[str, int]] = [
        ("extracted/OneDrive_1_4-10-2026 (3)/Approval Requirements Matrix v5.5 - 0725", 1),
        ("extracted/OneDrive_1_4-10-2026 (4)/Business Security/Pricing Sheet - Sales R5", 1),
        ("extracted/OneDrive_1_4-10-2026 (4)/DIA & SIA/202507 - DIA Pricebook Final Enterprise", 1),
        ("extracted/OneDrive_1_4-10-2026 (3)/Costing Routing Quick Reference Guide - 1123", 1),
        ("extracted/OneDrive_1_4-10-2026 (3)/Move-Add-Change Processes - Sales Team - 1123", 3),
        (
            "extracted/OneDrive_1_4-10-2026 (4)/Managed Network Security/SD-WAN or Network Security Fee Schedule",
            1,
        ),
        ("extracted/OneDrive_1_4-10-2026 (3)/Salesforce 101 Manual - 0422", 5),
        ("extracted/OneDrive_1_4-10-2026 (3)/Salesforce 101 Manual - 0422", 12),
    ]
    return [(f, p) for f, p in candidates if (img_root / f).is_dir()]


@dataclass
class Row:
    pdf_rel: str
    page: int
    png_rel: str
    embed_chars: int
    ocr_chars: int
    similarity: float
    ocr_seconds: float
    notes: str


def ocr_png(reader: easyocr.Reader, png: Path, max_width: int) -> tuple[str, float]:
    import os

    t0 = time.time()
    im = Image.open(png).convert("RGB")
    w, h = im.size
    if w > max_width:
        nw = max_width
        nh = int(h * (nw / w))
        im = im.resize((nw, nh), Image.Resampling.LANCZOS)
    fd, tmp = tempfile.mkstemp(suffix=".png")
    os.close(fd)
    ocr_elapsed = 0.0
    try:
        im.save(tmp)
        t0 = time.time()
        chunks = reader.readtext(tmp, detail=0, paragraph=True)
        ocr_elapsed = time.time() - t0
    finally:
        try:
            Path(tmp).unlink(missing_ok=True)
        except OSError:
            pass
    if isinstance(chunks, str):
        text = chunks
    else:
        text = "\n".join(chunks)
    return text, ocr_elapsed


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--pdf-root", type=Path, default=DEFAULT_PDF_ROOT)
    ap.add_argument("--img-root", type=Path, default=DEFAULT_IMG_ROOT)
    ap.add_argument(
        "--canonical",
        type=Path,
        default=Path("docs/gpc-training-corpus-canonical-text.md"),
        help="Parse low-text page list from <details> section",
    )
    ap.add_argument("--report", type=Path, default=Path("docs/gpc-training-corpus-ocr-validation.md"))
    ap.add_argument("--jsonl", type=Path, default=None, help="Optional raw rows JSONL")
    ap.add_argument("--limit", type=int, default=75, help="Max pages to OCR")
    ap.add_argument("--max-width", type=int, default=1000, help="Resize width before OCR (speed)")
    args = ap.parse_args()

    pdf_root = args.pdf_root.expanduser().resolve()
    img_root = args.img_root.expanduser().resolve()
    canonical = args.canonical.expanduser()
    if not canonical.is_file():
        canonical = (Path(__file__).resolve().parents[1] / args.canonical).resolve()

    worklist: list[tuple[str, int]] = []
    if canonical.is_file():
        worklist.extend(parse_low_text_pages(canonical))
    worklist.extend(extra_table_candidates(img_root))

    # Dedupe preserving order
    seen: set[tuple[str, int]] = set()
    uniq: list[tuple[str, int]] = []
    for folder, page in worklist:
        key = (folder, page)
        if key in seen:
            continue
        seen.add(key)
        uniq.append((folder, page))
    worklist = uniq[: args.limit]

    png_index = {(a, c): b for a, b, c in iter_page_pngs(img_root)}

    print("Initializing EasyOCR (first run downloads models)...", file=sys.stderr)
    t_reader = time.time()
    reader = easyocr.Reader(["en"], gpu=False, verbose=False)
    print(f"Reader ready in {time.time() - t_reader:.1f}s", file=sys.stderr)

    rows: list[Row] = []
    for folder, page in worklist:
        png = png_index.get((folder, page))
        pdf_path = pdf_root / f"{folder}.pdf"
        if png is None or not png.is_file():
            rows.append(
                Row(
                    pdf_rel=f"{folder}.pdf",
                    page=page,
                    png_rel="(missing png)",
                    embed_chars=-1,
                    ocr_chars=-1,
                    similarity=0.0,
                    ocr_seconds=0.0,
                    notes="PNG not found in index",
                )
            )
            continue
        if not pdf_path.is_file():
            rows.append(
                Row(
                    pdf_rel=f"{folder}.pdf",
                    page=page,
                    png_rel=png.relative_to(img_root).as_posix(),
                    embed_chars=-1,
                    ocr_chars=-1,
                    similarity=0.0,
                    ocr_seconds=0.0,
                    notes="PDF not found",
                )
            )
            continue

        doc = fitz.open(pdf_path)
        if page < 1 or page > len(doc):
            doc.close()
            rows.append(
                Row(
                    pdf_rel=f"{folder}.pdf",
                    page=page,
                    png_rel=png.relative_to(img_root).as_posix(),
                    embed_chars=-1,
                    ocr_chars=-1,
                    similarity=0.0,
                    ocr_seconds=0.0,
                    notes="page out of range",
                )
            )
            continue
        embed = (doc[page - 1].get_text("text") or "").strip()
        doc.close()
        ocr_text, ocr_s = ocr_png(reader, png, args.max_width)
        ocr_t = ocr_text.strip()
        sim = similarity(embed, ocr_t)
        ec, oc = len(embed), len(ocr_t)
        notes = []
        if ec < 80 and oc > ec * 2:
            notes.append("OCR >> embed (likely table/visual page)")
        elif ec > 400 and oc < ec * 0.4:
            notes.append("OCR << embed (check resize/OCR miss)")
        elif sim < 0.35 and ec > 50 and oc > 50:
            notes.append("low string similarity (ordering/format drift)")
        if not notes:
            notes.append("—")
        rows.append(
            Row(
                pdf_rel=f"{folder}.pdf",
                page=page,
                png_rel=png.relative_to(img_root).as_posix(),
                embed_chars=ec,
                ocr_chars=oc,
                similarity=round(sim, 3),
                ocr_seconds=round(ocr_s, 2),
                notes="; ".join(notes),
            )
        )
        print(f"OK {folder} p{page} embed={ec} ocr={oc} sim={sim:.2f}", file=sys.stderr)

    # Report
    args.report.parent.mkdir(parents=True, exist_ok=True)
    lines: list[str] = []
    lines.append("# GPC training corpus — OCR vs embedded text validation\n")
    lines.append(
        "This report compares **PyMuPDF embedded text** (same source as "
        "[`gpc-training-corpus-canonical-text.md`](gpc-training-corpus-canonical-text.md)) "
        "to **EasyOCR** on **200 DPI PNGs** (resized for speed). "
        "Goal: surface where the canonical extract is **thin or structurally wrong** "
        "while the slide/PDF is still readable visually.\n"
    )
    lines.append("## Method\n")
    lines.append("| Step | Detail |")
    lines.append("|------|--------|")
    lines.append(f"| PDF text | `page.get_text(\"text\")` via PyMuPDF |")
    lines.append(f"| OCR | EasyOCR `en`, image max width **{args.max_width}px** |")
    lines.append(f"| Sample | Up to **{args.limit}** pages: canonical **low-text** list + table-heavy extras |")
    lines.append(f"| Similarity | `difflib.SequenceMatcher` on whitespace-normalized lowercase strings |")
    lines.append("")
    lines.append("## Results summary\n")
    ocr_gt_embed = sum(1 for r in rows if r.embed_chars >= 0 and r.ocr_chars > r.embed_chars * 1.5)
    low_sim = sum(1 for r in rows if r.similarity < 0.35 and r.embed_chars > 40 and r.ocr_chars > 40)
    embed_gt_ocr = sum(
        1
        for r in rows
        if r.embed_chars > 100 and r.ocr_chars >= 0 and r.embed_chars > r.ocr_chars * 3
    )
    lines.append(f"- **Pages in sample:** {len(rows)}")
    lines.append(
        f"- **OCR materially longer than embed (>1.5×):** {ocr_gt_embed} "
        "(often **visual / table** pages where plain `get_text` is thin or wrong)"
    )
    lines.append(
        f"- **Embed much longer than OCR (>3×, embed >100 chars):** {embed_gt_ocr} "
        "(often **dense digital pricebooks** at small point sizes — OCR at resized PNG **under-reads**; trust embed for *tokens* but not *columns*)"
    )
    lines.append(
        f"- **Both verbose but similarity <0.35:** {low_sim} "
        "(same material, **different reading order** — classic for tables in both pipelines)"
    )
    lines.append("")
    lines.append("### What this means for the canonical markdown\n")
    lines.append(
        "[`gpc-training-corpus-canonical-text.md`](gpc-training-corpus-canonical-text.md) is **not** a layout-faithful "
        "transcription: it is a **flattened text stream** per page. For **approval matrices, fee grids, and MAC flowcharts**, "
        "character counts may look healthy while **structure is wrong** — compare **Approval Requirements Matrix** and "
        "**Costing Routing** rows below (high chars, **near-zero similarity**). For **RAG**, consider **hybrid** chunks: "
        "embed text + caption referencing `page-NNN.png`, or **table-aware** PDF parsing for critical docs.\n"
    )
    lines.append("")
    lines.append("## Per-page metrics\n")
    lines.append(
        "| PDF (relative) | Page | embed chars | OCR chars | ratio OCR/embed | similarity | OCR s | Notes |"
    )
    lines.append("|----------------|-----:|------------:|----------:|----------------:|-----------:|------:|-------|")
    for r in rows:
        ratio = ""
        if r.embed_chars and r.embed_chars > 0 and r.ocr_chars >= 0:
            ratio = f"{r.ocr_chars / r.embed_chars:.2f}"
        elif r.embed_chars == 0 and r.ocr_chars > 0:
            ratio = "inf"
        lines.append(
            f"| `{r.pdf_rel}` | {r.page} | {r.embed_chars} | {r.ocr_chars} | {ratio} | "
            f"{r.similarity} | {r.ocr_seconds} | {r.notes} |"
        )
    lines.append("")
    lines.append("## Interpretation for curriculum / RAG\n")
    lines.append(
        "1. **Pricing matrices, approval grids, fee schedules:** embedded text is often a **single stream** "
        "(columns lost); OCR may **reorder** or **merge** cells. Neither gives **reliable column semantics** — "
        "use **table-aware** tools (pdfplumber, Camelot, etc.) or treat the **PNG/PDF** as the authority for layout.\n"
    )
    lines.append(
        "2. **Dense digital pricebooks (small type):** embedded extract can have **very high** character counts while "
        "OCR on a **downscaled** PNG captures only headers — do **not** conclude “OCR failed” without re-running at "
        "**full resolution** or trusting the PDF text layer for lexical coverage.\n"
    )
    lines.append(
        "3. **Decks with full-bleed graphics:** embedded extract can be **near-empty** while OCR still finds "
        "headlines — useful for **spot checks** and snippet retrieval; keep PNGs as evidence.\n"
    )
    lines.append(
        "4. **OCR noise:** `$` vs `S`, stray punctuation, and `%` — do not treat OCR as ground truth for **numbers** "
        "without human QA.\n"
    )
    lines.append("")
    lines.append(
        "## Re-run\n\n"
        "```bash\n"
        "python3 scripts/validate_gpc_extract_vs_ocr.py --report docs/gpc-training-corpus-ocr-validation.md "
        "--limit 100\n"
        "```\n"
    )

    args.report.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {args.report}", file=sys.stderr)

    if args.jsonl:
        args.jsonl.parent.mkdir(parents=True, exist_ok=True)
        with args.jsonl.open("w", encoding="utf-8") as f:
            for r in rows:
                f.write(json.dumps(asdict(r)) + "\n")


if __name__ == "__main__":
    main()
