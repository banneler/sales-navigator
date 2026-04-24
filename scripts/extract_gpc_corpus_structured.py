#!/usr/bin/env python3
"""Layout-aware extraction for the GPC training PDF tree.

Produces markdown that separates:
  - **Tables** — PyMuPDF ``Page.find_tables()`` + ``Table.to_markdown()`` (grid structure)
  - **Body text** — text blocks from ``get_text("dict")``, sorted in reading order, with
    blocks whose bbox falls inside a detected table omitted (avoids duplicating table cells)

The flat file from ``extract_gpc_corpus_to_markdown.py`` remains useful for grep and simple RAG;
this file is better for **policies, matrices, and price grids**.

Requires: pymupdf (see scripts/requirements.txt)

Example:
  python3 scripts/extract_gpc_corpus_structured.py \\
    -o docs/gpc-training-corpus-structured.md
  python3 scripts/extract_gpc_corpus_structured.py --jsonl docs/gpc-training-corpus-structured.jsonl
"""
from __future__ import annotations

import argparse
import hashlib
import json
import sys
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

try:
    import fitz  # PyMuPDF
except ImportError:
    print("Install PyMuPDF: python3 -m pip install pymupdf", file=sys.stderr)
    sys.exit(1)

DEFAULT_SRC = Path("/Users/ba/Desktop/GPC Training Material")
DEFAULT_PAGE_IMAGES = Path("/Users/ba/Desktop/GPC Training Material - page images")


def iter_pdfs(root: Path) -> list[Path]:
    return sorted(p for p in root.rglob("*.pdf") if p.is_file())


def pdf_anchor(rel_posix: str) -> str:
    return "p-" + hashlib.sha256(rel_posix.encode()).hexdigest()[:16]


def bbox_center(b: tuple[float, float, float, float]) -> tuple[float, float]:
    x0, y0, x1, y1 = b
    return ((x0 + x1) / 2, (y0 + y1) / 2)


def point_in_bbox(pt: tuple[float, float], box: tuple[float, float, float, float]) -> bool:
    x, y = pt
    x0, y0, x1, y1 = box
    return x0 <= x <= x1 and y0 <= y <= y1


def text_blocks_from_dict(
    d: dict[str, Any],
    table_bboxes: list[tuple[float, float, float, float]],
) -> list[str]:
    """Reading-order paragraphs; drop blocks whose center lies inside a table bbox."""
    out: list[tuple[tuple[float, float], str]] = []
    for b in d.get("blocks", []):
        if b.get("type") != 0:
            continue
        bbox = tuple(b["bbox"])
        cx, cy = bbox_center(bbox)
        if any(point_in_bbox((cx, cy), tb) for tb in table_bboxes):
            continue
        parts: list[str] = []
        for line in b.get("lines", []):
            for span in line.get("spans", []):
                t = span.get("text") or ""
                if t:
                    parts.append(t)
        text = " ".join(parts).strip()
        if text:
            out.append(((bbox[1], bbox[0]), text))
    out.sort(key=lambda x: x[0])
    return [t for _, t in out]


def tables_from_page(page: fitz.Page) -> tuple[list[tuple[float, float, float, float]], list[str]]:
    bboxes: list[tuple[float, float, float, float]] = []
    mds: list[str] = []
    try:
        finder = page.find_tables()
    except Exception:  # noqa: BLE001
        return bboxes, mds
    for i, t in enumerate(finder.tables or []):
        try:
            bb = tuple(t.bbox)
            bboxes.append(bb)
            md = t.to_markdown()
            if md and md.strip():
                mds.append(md.strip())
        except Exception:  # noqa: BLE001
            continue
    return bboxes, mds


@dataclass
class PageStruct:
    pdf_rel: str
    page: int
    page_count: int
    png_folder_rel: str
    tables_md: list[str]
    body_paragraphs: list[str]


def structure_page(
    pdf_rel: str,
    page_idx: int,
    page_count: int,
    png_folder_rel: str,
    page: fitz.Page,
) -> PageStruct:
    d = page.get_text("dict")
    table_bboxes, tables_md = tables_from_page(page)
    body = text_blocks_from_dict(d, table_bboxes)
    return PageStruct(
        pdf_rel=pdf_rel,
        page=page_idx + 1,
        page_count=page_count,
        png_folder_rel=png_folder_rel,
        tables_md=tables_md,
        body_paragraphs=body,
    )


def page_to_markdown(ps: PageStruct, width: int) -> str:
    p = ps.page
    n = ps.page_count
    name = f"page-{p:0{width}d}.png"
    lines: list[str] = []
    lines.append(f"#### Page {p} / {n} — `{name}`\n")
    if ps.tables_md:
        lines.append("##### Tables (detected)\n")
        for i, tm in enumerate(ps.tables_md, 1):
            lines.append(f"###### Table {i}\n")
            lines.append(tm)
            lines.append("")
    else:
        lines.append("##### Tables (detected)\n")
        lines.append("*None detected on this page.*\n")
    lines.append("##### Body text (outside table regions)\n")
    if ps.body_paragraphs:
        for para in ps.body_paragraphs:
            lines.append(para)
            lines.append("")
    else:
        lines.append("*No non-table text blocks (page may be image-only or table-only).*\n")
    return "\n".join(lines)


def page_to_json_dict(ps: PageStruct, width: int) -> dict[str, Any]:
    return {
        "pdf": ps.pdf_rel,
        "page": ps.page,
        "page_count": ps.page_count,
        "page_image": f"{ps.png_folder_rel}/{f'page-{ps.page:0{width}d}.png'}",
        "tables_markdown": ps.tables_md,
        "body_paragraphs": ps.body_paragraphs,
    }


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--src", type=Path, default=DEFAULT_SRC)
    ap.add_argument(
        "--page-images-root",
        type=Path,
        default=DEFAULT_PAGE_IMAGES,
        help="Used only for path references in output",
    )
    ap.add_argument(
        "-o",
        "--output-md",
        type=Path,
        default=Path("docs/gpc-training-corpus-structured.md"),
    )
    ap.add_argument(
        "--jsonl",
        type=Path,
        default=None,
        help="Optional JSONL (one object per page)",
    )
    args = ap.parse_args()

    src = args.src.expanduser().resolve()
    if not src.is_dir():
        print(f"Source not found: {src}", file=sys.stderr)
        sys.exit(1)

    pdfs = iter_pdfs(src)
    gen = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")

    md_lines: list[str] = []
    md_lines.append("# GPC training corpus — structured extraction\n")
    md_lines.append(
        "Tables use **PyMuPDF** ``find_tables()`` and ``to_markdown()``; body text uses **spatial text blocks** "
        "with overlaps removed so table cells are not duplicated. "
        "For flat per-page blobs see [`gpc-training-corpus-canonical-text.md`](gpc-training-corpus-canonical-text.md). "
        "For OCR spot-checks see [`gpc-training-corpus-ocr-validation.md`](gpc-training-corpus-ocr-validation.md).\n"
    )
    md_lines.append("## Document metadata\n")
    md_lines.append("| Field | Value |")
    md_lines.append("|-------|-------|")
    md_lines.append(f"| Generated (UTC) | {gen} |")
    md_lines.append(f"| Source PDF root | `{src}` |")
    md_lines.append(f"| Page image root (reference) | `{args.page_images_root}` |")
    md_lines.append(f"| PDF count | {len(pdfs)} |")
    md_lines.append("")

    md_lines.append("## Table of contents (PDF paths)\n")
    for pdf in pdfs:
        rel_posix = pdf.relative_to(src).as_posix()
        md_lines.append(f"- [{rel_posix}](#{pdf_anchor(rel_posix)})")
    md_lines.append("\n---\n## Extracted content\n")

    jsonl_f = args.jsonl.expanduser().resolve() if args.jsonl else None
    if jsonl_f:
        jsonl_f.parent.mkdir(parents=True, exist_ok=True)
        jf = jsonl_f.open("w", encoding="utf-8")
    else:
        jf = None

    for pdf in pdfs:
        rel = pdf.relative_to(src)
        rel_posix = rel.as_posix()
        stem_folder = rel.with_suffix("").as_posix()
        png_base = args.page_images_root / stem_folder
        aid = pdf_anchor(rel_posix)

        md_lines.append(f'\n<a id="{aid}"></a>\n')
        md_lines.append(f"### `{rel_posix}`\n")
        md_lines.append(f"- **PDF:** `{src / rel_posix}`")
        md_lines.append(f"- **Page images folder:** `{png_base}`\n")

        try:
            doc = fitz.open(pdf)
        except Exception as e:  # noqa: BLE001
            md_lines.append(f"*Error opening PDF: {e}*\n")
            continue

        n = len(doc)
        w = max(3, len(str(n)))
        md_lines.append(f"**Page count:** {n}\n")

        for i in range(n):
            page = doc.load_page(i)
            ps = structure_page(rel_posix, i, n, stem_folder, page)
            md_lines.append(page_to_markdown(ps, w))
            if jf:
                jf.write(json.dumps(page_to_json_dict(ps, w), ensure_ascii=False) + "\n")

        doc.close()

    if jf:
        jf.close()

    out_md = args.output_md.expanduser().resolve()
    out_md.parent.mkdir(parents=True, exist_ok=True)
    out_md.write_text("\n".join(md_lines), encoding="utf-8")
    print(f"Wrote {out_md}", file=sys.stderr)
    if jsonl_f:
        print(f"Wrote {jsonl_f}", file=sys.stderr)


if __name__ == "__main__":
    main()
