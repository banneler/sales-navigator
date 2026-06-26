#!/usr/bin/env python3
"""Extract plain text from ZoomInfo PDFs in .zoominfo-corpus for Router / docs."""
from __future__ import annotations

import json
import re
from pathlib import Path

try:
    import fitz
except ImportError:
    raise SystemExit("Install PyMuPDF: python3 -m pip install pymupdf")

ROOT = Path(__file__).resolve().parents[1]
CORPUS = ROOT / ".zoominfo-corpus"


def main() -> None:
    pdfs = sorted(CORPUS.glob("*.pdf"))
    if not pdfs:
        raise SystemExit(f"No PDFs in {CORPUS} — run: npm run sp:fetch-zoominfo")

    items = []
    md_lines = ["# ZoomInfo training corpus", ""]

    for pdf in pdfs:
        doc = fitz.open(pdf)
        page_count = len(doc)
        text = "\n".join(page.get_text() for page in doc).strip()
        doc.close()
        items.append({"file": pdf.name, "pages": page_count, "chars": len(text), "text": text})

        md_lines.append(f"## {pdf.name} ({page_count} pages)")
        md_lines.append("")
        md_lines.append(text)
        md_lines.append("")

    (CORPUS / "extracted.json").write_text(json.dumps(items, indent=2), encoding="utf-8")
    (CORPUS / "extracted.md").write_text("\n".join(md_lines).strip() + "\n", encoding="utf-8")
    print(f"Wrote {CORPUS / 'extracted.md'} ({len(items)} PDFs)")


if __name__ == "__main__":
    main()
