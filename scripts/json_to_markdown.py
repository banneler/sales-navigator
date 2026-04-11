#!/usr/bin/env python3
"""One-time: convert modules/*/content.json to content.md with YAML front matter."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def escape_yaml_scalar(s: str) -> str:
    s = s.replace("\r\n", "\n")
    if "\n" in s or ":" in s or s.strip() != s or s.startswith(('"', "'", "-", " ")):
        # literal block
        lines = s.split("\n")
        inner = "\n".join(lines)
        return "|\n  " + inner.replace("\n", "\n  ")
    return json.dumps(s, ensure_ascii=False)


def section_to_md(sec: dict) -> str:
    h = sec.get("heading", "Section").strip()
    body = (sec.get("body") or "").strip()
    parts = [f"## {h}", "", body, ""]
    resources = sec.get("resources") or []
    if resources:
        parts.append("**Sources:**")
        for r in resources:
            label = r.get("label", "").strip()
            p = r.get("path", "").strip()
            u = r.get("url", "").strip()
            line = f"- **{label}**"
            if p:
                line += f" — `{p}`"
            if u:
                line += f" — [link]({u})"
            parts.append(line)
        parts.append("")
    return "\n".join(parts)


def convert(data: dict) -> str:
    fm = {
        "id": data["id"],
        "title": data["title"],
        "summary": data.get("summary", ""),
        "sensitivity": data.get("sensitivity", "public"),
    }
    lines = ["---"]
    lines.append(f"id: {json.dumps(fm['id'])}")
    lines.append(f"title: {json.dumps(fm['title'])}")
    summary = fm["summary"]
    if "\n" in summary:
        lines.append("summary: |")
        for line in summary.split("\n"):
            lines.append(f"  {line}")
    else:
        lines.append(f"summary: {json.dumps(summary)}")
    lines.append(f"sensitivity: {json.dumps(fm['sensitivity'])}")
    lines.append("---")
    lines.append("")

    for sec in data.get("sections", []):
        lines.append(section_to_md(sec))

    media = data.get("media") or {}
    videos = media.get("videos") or []
    worksheets = media.get("worksheets") or []
    guidde = media.get("guidde") or {}

    if videos or worksheets or (guidde.get("notes") or guidde.get("embedUrl")):
        lines.append("## Media (optional)")
        lines.append("")
        if guidde.get("notes"):
            lines.append(f"*Guidde (reserved):* {guidde['notes']}")
            lines.append("")
        if videos:
            for v in videos:
                t = v.get("title", "Video")
                u = v.get("url") or ""
                lines.append(f"- **{t}**" + (f" — {u}" if u else " — *URL TBD*"))
            lines.append("")
        if worksheets:
            for w in worksheets:
                t = w.get("title", "Worksheet")
                u = w.get("url") or ""
                lines.append(f"- **{t}**" + (f" — {u}" if u else ""))
            lines.append("")

    return "\n".join(lines).rstrip() + "\n"


def main() -> None:
    for json_path in sorted(ROOT.glob("modules/*/content.json")):
        data = json.loads(json_path.read_text(encoding="utf-8"))
        md = convert(data)
        out = json_path.with_name("content.md")
        out.write_text(md, encoding="utf-8")
        print("Wrote", out.relative_to(ROOT))


if __name__ == "__main__":
    main()
