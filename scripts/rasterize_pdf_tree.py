#!/usr/bin/env python3
"""Rasterize every PDF under a source tree into PNGs, mirroring relative paths.

Requires: pip install pymupdf (see scripts/requirements.txt).

Each input ``dir/name.pdf`` becomes ``out_root/dir/name/page-001.png``, etc.
"""
from __future__ import annotations

import argparse
import sys
from pathlib import Path

try:
    import fitz  # PyMuPDF
except ImportError:
    print(
        "Install PyMuPDF: python3 -m pip install pymupdf",
        file=sys.stderr,
    )
    sys.exit(1)


DEFAULT_SRC = Path("/Users/ba/Desktop/GPC Training Material")
DEFAULT_DST = Path("/Users/ba/Desktop/GPC Training Material - page images")


def iter_pdfs(root: Path) -> list[Path]:
    return sorted(
        p for p in root.rglob("*") if p.is_file() and p.suffix.lower() == ".pdf"
    )


def render_pdf(pdf_path: Path, out_dir: Path, dpi: int, force: bool) -> tuple[int, str | None]:
    out_dir.mkdir(parents=True, exist_ok=True)
    try:
        doc = fitz.open(pdf_path)
    except Exception as e:  # noqa: BLE001 — surface file errors cleanly
        return 0, str(e)

    n = len(doc)
    if n == 0:
        doc.close()
        return 0, "empty document"

    width = max(3, len(str(n)))
    zoom = dpi / 72.0
    mat = fitz.Matrix(zoom, zoom)

    for i in range(n):
        name = f"page-{i + 1:0{width}d}.png"
        dest = out_dir / name
        if not force and dest.is_file():
            continue
        page = doc.load_page(i)
        pix = page.get_pixmap(matrix=mat, alpha=False)
        pix.save(dest.as_posix())

    doc.close()
    return n, None


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument(
        "--src",
        type=Path,
        default=DEFAULT_SRC,
        help=f"Root folder to scan (default: {DEFAULT_SRC})",
    )
    ap.add_argument(
        "--dst",
        type=Path,
        default=DEFAULT_DST,
        help=f"Output root (default: {DEFAULT_DST})",
    )
    ap.add_argument(
        "--dpi",
        type=int,
        default=200,
        help="Rasterization resolution (default: 200)",
    )
    ap.add_argument(
        "--force",
        action="store_true",
        help="Re-render even if page PNGs already exist",
    )
    ap.add_argument(
        "--dry-run",
        action="store_true",
        help="List PDFs that would be processed, then exit",
    )
    args = ap.parse_args()

    src_root = args.src.expanduser().resolve()
    dst_root = args.dst.expanduser().resolve()

    if not src_root.is_dir():
        print(f"Source is not a directory: {src_root}", file=sys.stderr)
        sys.exit(1)

    pdfs = iter_pdfs(src_root)
    if args.dry_run:
        for p in pdfs:
            print(p)
        print(f"{len(pdfs)} PDF(s)", file=sys.stderr)
        return

    errors: list[tuple[Path, str]] = []
    total_pages = 0

    for pdf_path in pdfs:
        rel = pdf_path.relative_to(src_root)
        out_dir = dst_root / rel.parent / rel.stem
        pages, err = render_pdf(pdf_path, out_dir, args.dpi, args.force)
        if err:
            errors.append((pdf_path, err))
        else:
            total_pages += pages

    print(f"Rendered {len(pdfs) - len(errors)} PDF(s), {total_pages} page(s) -> {dst_root}")
    if errors:
        print(f"{len(errors)} error(s):", file=sys.stderr)
        for path, msg in errors:
            print(f"  {path}: {msg}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
