#!/usr/bin/env python3
"""
Extract embedded raster images from PDFs into a Sales-Navigator module folder.

Your training PDFs (e.g. under ~/Documents/GPC Training Material/) usually contain
diagrams and product shots. This writes PNG files you can reference from content.md:

  ![DIA vs SIA comparison](images/dia-vs-sia-p1-img0.png)

Usage:
  pip install pymupdf   # or: pip install -r scripts/requirements.txt
  python scripts/extract_pdf_images.py \\
    --pdf "/path/to/DIA vs SIA Comparison.pdf" \\
    --out modules/product-connectivity/images \\
    --prefix dia-vs-sia

  python scripts/extract_pdf_images.py --pdf report.pdf --out Proposal_Assets/training/foo

If --out is missing, creates images/ next to the PDF.
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

try:
    import fitz  # PyMuPDF
except ImportError as e:
    print("Install PyMuPDF: pip install pymupdf", file=sys.stderr)
    raise SystemExit(1) from e


def slug(s: str) -> str:
    s = s.lower().strip()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    return s.strip("-") or "image"


def extract_images_from_pdf(
    pdf_path: Path,
    out_dir: Path,
    prefix: str | None = None,
    *,
    max_per_page: int = 12,
    min_pixels: int = 9000,
) -> int:
    """Write images under out_dir. Returns count extracted."""
    pdf_path = pdf_path.expanduser().resolve()
    if not pdf_path.is_file():
        raise FileNotFoundError(pdf_path)

    out_dir = out_dir.expanduser().resolve()
    prefix = prefix or slug(pdf_path.stem)
    out_dir.mkdir(parents=True, exist_ok=True)

    doc = fitz.open(pdf_path)
    total = 0
    try:
        for page_index in range(len(doc)):
            page = doc[page_index]
            image_list = page.get_images(full=True)
            for img_index, img in enumerate(image_list[:max_per_page]):
                xref = img[0]
                try:
                    base = doc.extract_image(xref)
                except Exception:
                    continue
                w, h = base.get("width", 0), base.get("height", 0)
                if w * h < min_pixels:
                    continue
                name = f"{prefix}-p{page_index + 1}-img{img_index}.{base['ext']}"
                path = out_dir / name
                path.write_bytes(base["image"])
                total += 1
    finally:
        doc.close()
    return total


def main() -> None:
    ap = argparse.ArgumentParser(description="Extract images from PDF pages.")
    ap.add_argument("--pdf", required=True, type=Path, help="Path to a .pdf file")
    ap.add_argument(
        "--out",
        type=Path,
        default=None,
        help="Output directory (default: <pdf-stem>/images next to PDF, or ./images)",
    )
    ap.add_argument(
        "--prefix",
        default="",
        help="Filename prefix for extracted files (default: PDF filename stem)",
    )
    ap.add_argument(
        "--max-per-page",
        type=int,
        default=12,
        help="Max images to extract per page (skip tiny icons)",
    )
    ap.add_argument(
        "--min-pixels",
        type=int,
        default=9000,
        help="Skip images with fewer pixels than this (filters tiny UI glyphs)",
    )
    args = ap.parse_args()

    pdf_path = args.pdf.expanduser().resolve()
    if not pdf_path.is_file():
        print(f"Not found: {pdf_path}", file=sys.stderr)
        raise SystemExit(2)

    out_dir = args.out
    if out_dir is None:
        out_dir = pdf_path.parent / pdf_path.stem / "images"
    else:
        out_dir = out_dir.expanduser().resolve()

    prefix = args.prefix or slug(pdf_path.stem)
    n = extract_images_from_pdf(
        pdf_path,
        out_dir,
        prefix,
        max_per_page=args.max_per_page,
        min_pixels=args.min_pixels,
    )
    print(f"Extracted {n} image(s) -> {out_dir}", file=sys.stderr)


if __name__ == "__main__":
    main()
