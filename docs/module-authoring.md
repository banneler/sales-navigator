# Module authoring (`content.md`)

## Collapsed sections (`[deep]`)

Append **`[deep]`** to an H2 line to render that section **collapsed by default** (expand to read). Use for long policy, internal pricing notes, or anything that shouldn’t block a quick read.

```markdown
## Section title [deep]
```

Case-insensitive. The UI shows **Section title** only (marker stripped). **Guardrail:** if the module has **only one** `##`, `[deep]` is ignored so the page never opens empty.

Everything else in the pipeline—five-minute summary, scenarios, knowledge checks, references—is unchanged by `[deep]`.

## Accordion shortcode (`::: accordion`)

Use a **fenced shortcode** (processed before Markdown) to embed a native `<details>` / `<summary>` block with styling and a chevron. **Nested accordions are supported** (inner blocks close before outer).

**Syntax** — title in square brackets on the opener line; body is normal Markdown (lists, images, headings, etc.); closing fence on its own line at **column 0** (do not indent the closing `:::` or it will not match).

```markdown
::: accordion [Optional label]
Body markdown here. Images work, for example:

![Example](Proposal_Assets/GPC-White-1-1.webp)
:::
```

**Guardrails**

- The closing line must be exactly `:::` (optional spaces after the third colon only). Indented lines like `    :::` are ignored so fenced code blocks are less likely to break parsing.
- Do not put `]` inside the title; keep titles short for the summary row.

## App behavior (not authoring)

**Fiber path** (header): full-screen progress map; manifest order; `localStorage` `sn:module-visited:v1`. Unrelated to `[deep]`.

## Handouts

Interactive content lives in `content.md`. PDFs build from `handouts/source/*.md`; `[deep]` in handout source is optional—print may differ.
