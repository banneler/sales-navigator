#!/usr/bin/env python3
"""
Batch-run extract_images_from_pdf on every PDF under a training materials root.

Default root: ~/Documents/GPC Training Material
Default output (under repo): Proposal_Assets/training/from-pdfs/<mirrored-slug-path>/images/

Usage (from repo root):
  source .venv/bin/activate && pip install -r scripts/requirements.txt
  python scripts/batch_extract_training_pdfs.py
  python scripts/batch_extract_training_pdfs.py --root "/path/to/GPC Training Material"
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

# Repo root = parent of scripts/
REPO_ROOT = Path(__file__).resolve().parent.parent
_SCRIPTS = Path(__file__).resolve().parent
if str(_SCRIPTS) not in sys.path:
    sys.path.insert(0, str(_SCRIPTS))

DEFAULT_TRAINING_ROOT = Path.home() / "Documents" / "GPC Training Material"
DEFAULT_OUT_ROOT = REPO_ROOT / "Proposal_Assets" / "training" / "from-pdfs"

from extract_pdf_images import extract_images_from_pdf, slug  # noqa: E402


def main() -> None:
    ap = argparse.ArgumentParser(description="Extract images from all PDFs under a folder.")
    ap.add_argument(
        "--root",
        type=Path,
        default=DEFAULT_TRAINING_ROOT,
        help=f"Training materials root (default: {DEFAULT_TRAINING_ROOT})",
    )
    ap.add_argument(
        "--out-root",
        type=Path,
        default=DEFAULT_OUT_ROOT,
        help=f"Output root inside repo (default: {DEFAULT_OUT_ROOT})",
    )
    ap.add_argument("--max-per-page", type=int, default=12)
    ap.add_argument("--min-pixels", type=int, default=9000)
    ap.add_argument(
        "--dry-run",
        action="store_true",
        help="List PDFs only",
    )
    args = ap.parse_args()

    root = args.root.expanduser().resolve()
    if not root.is_dir():
        print(f"Not a directory: {root}", file=sys.stderr)
        raise SystemExit(2)

    out_root = args.out_root.expanduser().resolve()
    pdfs = sorted(root.rglob("*.pdf"))
    print(f"Found {len(pdfs)} PDF(s) under {root}", file=sys.stderr)

    if args.dry_run:
        for p in pdfs:
            print(p)
        return

    total_images = 0
    ok = 0
    failed: list[tuple[Path, str]] = []

    for pdf_path in pdfs:
        rel = pdf_path.relative_to(root)
        parts = [slug(x) for x in rel.parent.parts] + [slug(rel.stem)]
        out_dir = out_root.joinpath(*parts) / "images"
        prefix = slug(rel.stem)

        try:
            n = extract_images_from_pdf(
                pdf_path,
                out_dir,
                prefix,
                max_per_page=args.max_per_page,
                min_pixels=args.min_pixels,
            )
            total_images += n
            ok += 1
            print(f"OK {n:4d}  {rel}", file=sys.stderr)
        except Exception as e:
            failed.append((pdf_path, str(e)))
            print(f"ERR      {rel}: {e}", file=sys.stderr)

    print(
        f"\nDone: {ok}/{len(pdfs)} PDFs, {total_images} image file(s) -> {out_root}",
        file=sys.stderr,
    )
    if failed:
        print(f"Failed: {len(failed)}", file=sys.stderr)
        for p, err in failed[:20]:
            print(f"  {p}: {err}", file=sys.stderr)
        if len(failed) > 20:
            print(f"  ... and {len(failed) - 20} more", file=sys.stderr)


if __name__ == "__main__":
    main()
