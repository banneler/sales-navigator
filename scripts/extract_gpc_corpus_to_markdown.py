#!/usr/bin/env python3
"""Extract plain text from every PDF under the GPC training tree into one markdown file.

Uses PyMuPDF (same stack as rasterize_pdf_tree.py). Mirrors paths used for page images:
  src/dir/Name.pdf  →  page images at dst/dir/Name/page-NNN.png

Low-text pages are flagged in-document and summarized in the front matter.
"""
from __future__ import annotations

import argparse
import hashlib
import sys
from datetime import datetime, timezone
from pathlib import Path

try:
    import fitz  # PyMuPDF
except ImportError:
    print("Install PyMuPDF: python3 -m pip install pymupdf", file=sys.stderr)
    sys.exit(1)

DEFAULT_SRC = Path("/Users/ba/Desktop/GPC Training Material")
DEFAULT_PAGE_IMAGES = Path("/Users/ba/Desktop/GPC Training Material - page images")


def iter_pdfs(root: Path) -> list[Path]:
    return sorted(p for p in root.rglob("*.pdf") if p.is_file())


def escape_md_fence(s: str) -> str:
    """Avoid accidentally closing a markdown fence."""
    return s.replace("```", "`\u200b``")


def pdf_anchor(rel_posix: str) -> str:
    return "p-" + hashlib.sha256(rel_posix.encode()).hexdigest()[:16]


def page_text(doc: fitz.Document, i: int) -> str:
    page = doc.load_page(i)
    return page.get_text("text") or ""


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--src", type=Path, default=DEFAULT_SRC)
    ap.add_argument(
        "--page-images-root",
        type=Path,
        default=DEFAULT_PAGE_IMAGES,
        help="Root for page-NNN.png paths cited in output",
    )
    ap.add_argument("-o", "--output", type=Path, required=True)
    ap.add_argument(
        "--min-chars",
        type=int,
        default=40,
        help="Pages with fewer non-whitespace chars get a low-text note",
    )
    args = ap.parse_args()

    src = args.src.expanduser().resolve()
    if not src.is_dir():
        print(f"Source not found: {src}", file=sys.stderr)
        sys.exit(1)

    pdfs = iter_pdfs(src)
    out = args.output.expanduser().resolve()
    out.parent.mkdir(parents=True, exist_ok=True)

    low_text_hits: list[str] = []
    errors: list[str] = []
    total_pages = 0

    lines: list[str] = []
    gen = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")

    lines.append("# GPC training corpus — canonical text extraction\n")
    lines.append(
        "This file is **machine-extracted** plain text from every PDF under the GPC training tree. "
        "Use it as the canonical textual compilation for curriculum, front matter, search, and RAG. "
        "Graphics, tables, and handwritten content may not fully appear here; see page PNGs when needed.\n"
    )
    lines.append(
        "**Structural bible** (module IDs, teaching order, duplicates, gaps): "
        "[`gpc-training-content-bible.md`](gpc-training-content-bible.md).\n"
    )
    lines.append("## Document metadata\n")
    lines.append(f"| Field | Value |")
    lines.append(f"|-------|-------|")
    lines.append(f"| Generated (UTC) | {gen} |")
    lines.append(f"| Source PDF root | `{src}` |")
    lines.append(f"| Page image root (reference) | `{args.page_images_root}` |")
    lines.append(f"| PDF count | {len(pdfs)} |")
    lines.append(f"| Extraction | PyMuPDF `page.get_text(\"text\")` |")
    lines.append(f"| Low-text threshold | {args.min_chars} non-whitespace characters |")
    lines.append("")
    lines.append("## Table of contents (PDF paths)\n")
    for pdf in pdfs:
        rel_posix = pdf.relative_to(src).as_posix()
        lines.append(f"- [{rel_posix}](#{pdf_anchor(rel_posix)})")
    lines.append("\n---\n")
    lines.append("## Extracted content\n")

    for pdf in pdfs:
        rel = pdf.relative_to(src)
        rel_posix = rel.as_posix()
        stem_folder = rel.with_suffix("").as_posix()
        img_base = args.page_images_root / stem_folder
        aid = pdf_anchor(rel_posix)

        lines.append(f'\n<a id="{aid}"></a>\n')
        lines.append(f"\n### `{rel_posix}`\n")
        lines.append(f"- **PDF:** `{src / rel_posix}`")
        lines.append(f"- **Page images folder:** `{img_base}`\n")

        try:
            doc = fitz.open(pdf)
        except Exception as e:  # noqa: BLE001
            errors.append(f"{rel_posix}: {e}")
            lines.append(f"*Error opening PDF: {e}*\n")
            continue

        n = len(doc)
        total_pages += n
        lines.append(f"**Page count:** {n}\n")

        for i in range(n):
            text = page_text(doc, i)
            stripped = "".join(text.split())
            low = len(stripped) < args.min_chars
            pnum = i + 1
            width = max(3, len(str(n)))
            png_name = f"page-{pnum:0{width}d}.png"
            lines.append(f"#### Page {pnum} / {n} — `{png_name}`\n")
            if low:
                low_text_hits.append(f"{rel_posix} p.{pnum} ({len(stripped)} chars)")
                lines.append(
                    f"> **Note:** Minimal extractable text on this page "
                    f"({len(stripped)} non-whitespace characters). "
                    f"Review `{img_base / png_name}` for layout, charts, or scans.\n"
                )
            body = text.strip()
            if body:
                lines.append("```text")
                lines.append(escape_md_fence(body))
                lines.append("```\n")
            else:
                lines.append("*[No text extracted — likely image-only or empty page]*\n")

        doc.close()

    # Prepend summary stats after first heading block — actually insert after metadata table
    summary_lines = [
        "",
        "### Extraction summary",
        "",
        f"| Total pages processed | {total_pages} |",
        f"| PDFs with open errors | {len(errors)} |",
        f"| Low-text pages (< {args.min_chars} chars) | {len(low_text_hits)} |",
        "",
    ]
    if errors:
        summary_lines.append("**Open errors:**")
        for e in errors:
            summary_lines.append(f"- {e}")
        summary_lines.append("")
    if low_text_hits:
        summary_lines.append("<details><summary>Low-text pages (expand)</summary>\n")
        for h in low_text_hits:
            summary_lines.append(f"- {h}")
        summary_lines.append("</details>\n")

    # Insert summary after line that ends metadata table (after min-chars row)
    insert_at = None
    for i, line in enumerate(lines):
        if line.startswith("| Low-text threshold"):
            insert_at = i + 2  # after blank line following table
            break
    if insert_at is not None:
        lines[insert_at:insert_at] = summary_lines

    out.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {out} ({len(pdfs)} PDFs, {total_pages} pages)", file=sys.stderr)


if __name__ == "__main__":
    main()
