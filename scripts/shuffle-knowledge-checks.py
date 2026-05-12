#!/usr/bin/env python3
"""
Vary knowledge-check correct answer positions (A/B/C) without rewriting other YAML.

Run from repo root: python3 scripts/shuffle-knowledge-checks.py
Then: npm run docs:assemble-modules
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
MODULES = ROOT / "modules"

TARGET_INDICES = [1, 2, 0, 2, 1, 0, 0, 1, 2, 2, 0, 1]


def split_front_matter(raw: str) -> tuple[str, str] | None:
    if not raw.startswith("---"):
        return None
    rest = raw[3:].lstrip("\n")
    sep = "\n---\n"
    idx = rest.find(sep)
    if idx == -1:
        return None
    return rest[:idx], rest[idx + len(sep) :]


def fmt_scalar(s: str) -> str:
    """Single-line YAML-safe double-quoted scalars (PyYAML dump can emit multi-line blobs)."""
    return json.dumps(s, ensure_ascii=False)


def reorder_three_options(opts: list[str], old_i: int, new_i: int) -> tuple[list[str], int]:
    if len(opts) != 3 or old_i not in (0, 1, 2) or new_i not in (0, 1, 2):
        raise ValueError("expected 3 string options and indices 0–2")
    correct_val = opts[old_i]
    wrongs = [opts[j] for j in range(3) if j != old_i]
    out: list[str | None] = [None, None, None]
    out[new_i] = correct_val
    wi = 0
    for j in range(3):
        if j == new_i:
            continue
        out[j] = wrongs[wi]
        wi += 1
    return [x for x in out if x is not None], new_i


def shuffle_kc_items(items: list[dict], counter: list[int]) -> bool:
    changed = False
    for item in items:
        opts = item.get("options")
        old = item.get("correct_index")
        if (
            not isinstance(opts, list)
            or len(opts) != 3
            or not isinstance(old, int)
            or old not in (0, 1, 2)
        ):
            continue
        if any(not isinstance(o, str) for o in opts):
            continue
        i = counter[0]
        counter[0] += 1
        want = TARGET_INDICES[i % len(TARGET_INDICES)]
        if want == old:
            want = (old + 1) % 3
        new_opts, new_idx = reorder_three_options(opts, old, want)
        item["options"] = new_opts
        item["correct_index"] = new_idx
        changed = True
    return changed


def emit_knowledge_checks_yaml(items: list[dict]) -> str:
    lines: list[str] = ["knowledge_checks:"]
    for item in items:
        lines.append(f"  - question: {fmt_scalar(item['question'])}")
        lines.append("    options:")
        for o in item["options"]:
            lines.append(f"      - {fmt_scalar(o)}")
        lines.append(f"    correct_index: {item['correct_index']}")
        lines.append(f"    explanation: {fmt_scalar(item['explanation'])}")
        if item.get("source") is not None:
            lines.append(f"    source: {fmt_scalar(item['source'])}")
        lines.append("")
    return "\n".join(lines).rstrip() + "\n"


def patch_module_kc(md_path: Path, counter: list[int]) -> bool:
    raw = md_path.read_text(encoding="utf-8")
    parts = split_front_matter(raw)
    if not parts:
        return False
    fm, body = parts
    meta = yaml.safe_load(fm)
    if not isinstance(meta, dict):
        return False
    kcs = meta.get("knowledge_checks")
    if not isinstance(kcs, list):
        return False
    if not shuffle_kc_items(kcs, counter):
        return False
    new_kc_block = emit_knowledge_checks_yaml(kcs)
    m = re.search(r"^knowledge_checks:\n", fm, re.MULTILINE)
    if not m:
        print(f"skip (no knowledge_checks in text): {md_path}", file=sys.stderr)
        return False
    kc_header_end = m.end()
    rest = fm[kc_header_end:]
    end_m = re.search(r"^scenarios:\s*$", rest, re.MULTILINE)
    if not end_m:
        print(f"skip (no scenarios anchor): {md_path}", file=sys.stderr)
        return False
    # rest starts at kc_header_end; scenarios offset is end_m.start() within rest
    scenarios_start = kc_header_end + end_m.start()
    new_fm = fm[: m.start()] + new_kc_block + "\n" + fm[scenarios_start:]
    out = "---\n" + new_fm.rstrip("\n") + "\n---\n" + body
    md_path.write_text(out, encoding="utf-8")
    print(f"updated: {md_path.relative_to(ROOT)}", file=sys.stderr)
    return True


def emit_getting_started_demo_kc(kc: dict) -> str:
    lines = [
        "  knowledge_check:",
        f"    question: {fmt_scalar(kc['question'])}",
        "    options:",
    ]
    for o in kc["options"]:
        lines.append(f"      - label: {fmt_scalar(o['label'])}")
        lines.append(f"        correct: {str(bool(o['correct'])).lower()}")
    for key in (
        "incorrect_feedback",
        "affirmation_primary",
        "affirmation_secondary",
        "hint",
    ):
        if key in kc:
            lines.append(f"    {key}: {fmt_scalar(kc[key])}")
    return "\n".join(lines) + "\n"


def patch_getting_started(md_path: Path, counter: list[int]) -> bool:
    raw = md_path.read_text(encoding="utf-8")
    parts = split_front_matter(raw)
    if not parts:
        return False
    fm, body = parts
    meta = yaml.safe_load(fm)
    demo = meta.get("getting_started_demo") if isinstance(meta, dict) else None
    kc = demo.get("knowledge_check") if isinstance(demo, dict) else None
    if not isinstance(kc, dict) or "options" not in kc:
        return False
    opts = kc["options"]
    if not isinstance(opts, list) or len(opts) != 3:
        return False
    old_i = next(i for i, o in enumerate(opts) if o.get("correct") is True)
    i = counter[0]
    counter[0] += 1
    want = TARGET_INDICES[i % len(TARGET_INDICES)]
    if want == old_i:
        want = (old_i + 1) % 3
    labels = [o["label"] for o in opts]
    new_labels, new_idx = reorder_three_options(labels, old_i, want)
    kc["options"] = [
        {"label": new_labels[j], "correct": j == new_idx} for j in range(3)
    ]

    m = re.search(r"^  knowledge_check:\n", fm, re.MULTILINE)
    if not m:
        return False
    start = m.start()
    new_block = emit_getting_started_demo_kc(kc)
    new_fm = fm[:start] + new_block.rstrip() + "\n"
    out = "---\n" + new_fm.rstrip("\n") + "\n---\n" + body
    md_path.write_text(out, encoding="utf-8")
    print(f"updated: {md_path.relative_to(ROOT)} (getting_started demo KC)", file=sys.stderr)
    return True


def main() -> None:
    counter = [0]
    n = 0
    order_paths = sorted(d / "content.md" for d in MODULES.iterdir() if d.is_dir())
    for p in order_paths:
        if not p.exists():
            continue
        if p.parent.name == "getting-started":
            if patch_getting_started(p, counter):
                n += 1
            continue
        if patch_module_kc(p, counter):
            n += 1
    print(f"Done. Files modified: {n}", file=sys.stderr)


if __name__ == "__main__":
    main()
