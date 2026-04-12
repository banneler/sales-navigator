# Module authoring (`content.md`)

## Collapsed sections (`[deep]`)

Append **`[deep]`** to an H2 line to render that section **collapsed by default** (expand to read). Use for long policy, internal pricing notes, or anything that shouldn’t block a quick read.

```markdown
## Section title [deep]
```

Case-insensitive. The UI shows **Section title** only (marker stripped). **Guardrail:** if the module has **only one** `##`, `[deep]` is ignored so the page never opens empty.

Everything else in the pipeline—five-minute summary, scenarios, knowledge checks, references—is unchanged by `[deep]`.

## App behavior (not authoring)

**Fiber path** (header): full-screen progress map; manifest order; `localStorage` `sn:module-visited:v1`. Unrelated to `[deep]`.

## Handouts

Interactive content lives in `content.md`. PDFs build from `handouts/source/*.md`; `[deep]` in handout source is optional—print may differ.
