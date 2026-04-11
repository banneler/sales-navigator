#!/usr/bin/env python3
"""
Remove obvious junk from Proposal_Assets/training/from-pdfs without a vision API:

  1) Near-duplicates: same perceptual hash → keep one file per hash, delete the rest.
  2) tiny glyphs: min(width,height) below threshold.
  3) small area: width*height below threshold (icons, bullets).
  4) extreme slivers: max(w/h, h/w) above threshold (1-pixel-tall strips, etc.).

Default: dry-run (prints only). Use --apply to delete files, then run:
  python scripts/build_training_assets_manifest.py

Requires: pip install pillow imagehash
"""

from __future__ import annotations

import argparse
import sys
from collections import Counter, defaultdict
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
ROOT = REPO / "Proposal_Assets" / "training" / "from-pdfs"
EXT = {".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp"}

try:
    from PIL import Image
except ImportError:
    print("Install Pillow: pip install pillow", file=sys.stderr)
    raise SystemExit(1)

try:
    import imagehash
except ImportError:
    print("Install imagehash: pip install imagehash", file=sys.stderr)
    raise SystemExit(1)


def iter_images(base: Path):
    for p in sorted(base.rglob("*")):
        if p.is_file() and p.suffix.lower() in EXT:
            yield p


def classify(path: Path, args) -> tuple[str | None, str]:
    """
    Returns (reason_to_delete or None, detail).
    """
    try:
        size_b = path.stat().st_size
    except OSError as e:
        return "stat", str(e)

    try:
        with Image.open(path) as im:
            im = im.convert("RGB")
            w, h = im.size
    except Exception as e:
        return "unreadable", str(e)

    area = w * h
    mn = min(w, h)
    mx = max(w, h)
    aspect = mx / mn if mn > 0 else 999

    if mn < args.min_side:
        return "tiny_side", f"{w}x{h}"
    if area < args.min_area:
        return "small_area", f"{w}x{h} area={area}"
    if aspect > args.max_aspect:
        return "sliver", f"{w}x{h} aspect={aspect:.1f}"
    if size_b < args.min_file_bytes:
        return "tiny_file", f"{size_b}b"

    return None, f"{w}x{h}"


def phash(path: Path) -> str | None:
    try:
        with Image.open(path) as im:
            im = im.convert("RGB")
            return str(imagehash.phash(im, hash_size=16))
    except Exception:
        return None


def main() -> None:
    ap = argparse.ArgumentParser(description="Prune junk / duplicate training images.")
    ap.add_argument("--root", type=Path, default=ROOT, help="from-pdfs root")
    ap.add_argument("--apply", action="store_true", help="Actually delete files (default dry-run)")
    ap.add_argument("--no-dedupe", action="store_true", help="Skip duplicate detection")
    ap.add_argument(
        "--duplicates-only",
        action="store_true",
        help="Only remove perceptual duplicates (skip size/aspect heuristics)",
    )
    ap.add_argument("--min-side", type=int, default=28, help="Delete if min(w,h) < this (default 28)")
    ap.add_argument("--min-area", type=int, default=10000, help="Delete if w*h < this (default 10000)")
    ap.add_argument("--max-aspect", type=float, default=45.0, help="Delete if max(w/h,h/w) > this (default 45)")
    ap.add_argument("--min-file-bytes", type=int, default=800, help="Delete if file smaller than this (default 800)")
    args = ap.parse_args()

    root = args.root.expanduser().resolve()
    if not root.is_dir():
        print(f"Not found: {root}", file=sys.stderr)
        raise SystemExit(2)

    paths = list(iter_images(root))
    print(f"Scanning {len(paths)} image(s) under {root}", file=sys.stderr)

    to_delete: list[tuple[Path, str, str]] = []

    if not args.duplicates_only:
        for p in paths:
            reason, detail = classify(p, args)
            if reason:
                to_delete.append((p, reason, detail))

    # Duplicates: same phash
    if not args.no_dedupe:
        by_hash: dict[str, list[Path]] = defaultdict(list)
        for p in paths:
            h = phash(p)
            if h:
                by_hash[h].append(p)
        for h, group in by_hash.items():
            if len(group) <= 1:
                continue
            group.sort(key=lambda x: x.as_posix())
            keeper = group[0]
            for dup in group[1:]:
                to_delete.append((dup, "duplicate", f"same as {keeper.relative_to(REPO)}"))

    # unique paths (last reason wins if duplicate)
    seen: set[Path] = set()
    unique_delete: list[tuple[Path, str, str]] = []
    for p, reason, detail in to_delete:
        if p in seen:
            continue
        seen.add(p)
        unique_delete.append((p, reason, detail))

    by_reason = Counter(r for _, r, _ in unique_delete)
    print(f"\nWould delete: {len(unique_delete)} file(s) — by reason: {dict(by_reason)}", file=sys.stderr)
    for p, reason, detail in unique_delete:
        rel = p.relative_to(REPO).as_posix()
        print(f"  [{reason}] {rel}  ({detail})")

    if not args.apply:
        print("\nDry-run only. Re-run with --apply to delete.", file=sys.stderr)
        return

    removed = 0
    for p, _, _ in unique_delete:
        try:
            p.unlink()
            removed += 1
        except OSError as e:
            print(f"Failed: {p}: {e}", file=sys.stderr)
    print(f"\nRemoved {removed} file(s).", file=sys.stderr)
    print("Run: python scripts/build_training_assets_manifest.py", file=sys.stderr)


if __name__ == "__main__":
    main()
