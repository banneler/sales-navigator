#!/usr/bin/env python3
"""
Emit training-assets-manifest.json listing every image under Proposal_Assets/training/from-pdfs.
Run after adding PDF extracts: python scripts/build_training_assets_manifest.py
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
ROOT = REPO / "Proposal_Assets" / "training" / "from-pdfs"
EXT = {".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"}


def main() -> None:
    if not ROOT.is_dir():
        print(f"Missing folder: {ROOT}", file=sys.stderr)
        raise SystemExit(1)

    paths: list[str] = []
    for p in sorted(ROOT.rglob("*")):
        if p.is_file() and p.suffix.lower() in EXT:
            rel = p.relative_to(REPO).as_posix()
            paths.append(rel)

    out = REPO / "training-assets-manifest.json"
    payload = {"version": 1, "root": "Proposal_Assets/training/from-pdfs", "images": paths}
    out.write_text(json.dumps(payload, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {len(paths)} paths -> {out}", file=sys.stderr)


if __name__ == "__main__":
    main()
