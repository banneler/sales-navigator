# Module authoring (`content.md`)

## Optional collapsed sections (`[deep]`)

Append **`[deep]`** to any H2 heading line to render that section **collapsed by default** in Sales-Navigator (expand to read). Use this for optional media notes, internal pricing references, long policy detail, or anything that should not block the “scan and go” path.

**Syntax (exact):**

```markdown
## Section title [deep]
```

- The suffix is case-insensitive (`[Deep]`, `[DEEP]` are equivalent).
- The UI shows **only** “Section title” (the marker is stripped).
- **Guardrail:** If the module body has **only one** `##` section, `[deep]` is **ignored** so the page never opens with all content hidden.

Sections without `[deep]` stay full-height cards as before. The **five-minute summary**, YAML scenarios, knowledge checks, and reference files are unchanged.

## Fiber path map

The main app header includes **Fiber path** — a full-screen progress map (modules in manifest order). It uses `localStorage` to remember which modules you have opened at least once (`sn:module-visited:v1`). It is independent of `[deep]` sections.

## Handouts

Module `content.md` is for the interactive app. PDF handouts are built from `handouts/source/*.md` separately; use the same `[deep]` convention there only if you want it documented in source—print behavior may differ.
