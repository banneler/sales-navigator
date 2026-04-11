#!/usr/bin/env python3
"""Extract plain text from PDFs for training-content authoring. Requires: pip install pypdf (project venv)."""
from __future__ import annotations

import argparse
import sys
from pathlib import Path

try:
    from pypdf import PdfReader
except ImportError:
    print("Install pypdf: python3 -m venv .venv && .venv/bin/pip install pypdf", file=sys.stderr)
    sys.exit(1)


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("pdf_path", type=Path)
    p.add_argument("--max-pages", type=int, default=35, help="Max pages to extract (default 35)")
    p.add_argument("--start", type=int, default=0, help="0-based start page")
    args = p.parse_args()

    path = args.pdf_path.expanduser()
    if not path.is_file():
        print(f"Not found: {path}", file=sys.stderr)
        sys.exit(1)

    reader = PdfReader(str(path))
    n = len(reader.pages)
    start = min(args.start, max(n - 1, 0))
    end = min(start + args.max_pages, n)
    chunks: list[str] = []
    for i in range(start, end):
        t = reader.pages[i].extract_text() or ""
        chunks.append(f"\n--- page {i + 1} ---\n{t}")
    sys.stdout.write("".join(chunks))


if __name__ == "__main__":
    main()
