# Module authoring (`content.md`)

## Standardized Module Structure (Micro-Learning)
To ensure all modules focus purely on sales execution, follow this strict structure for the main content body (after the YAML frontmatter):

0. **At a glance (product-style modules):** Optional but recommended for **Product** category modules (and similar narrative modules such as Competitive Positioning). Add `## At a glance` immediately after the front matter closing `---` and **before** the elevator block. Write it like a **mini battle card**: concrete **qualifiers, stack order, landmines, handoffs, and proof artifacts** for *this* offer—pulled from the module’s own summary, elevator, and deep content. Do **not** use it to narrate the UI (avoid “read the Coffee Summary then open the elevator”) unless a single clause ties a specific decision to a bullet. Goal: substance between the summary card and the interactive sections, in the same spirit as the sales-trio **Overview** tab but product-specific.

1. **Elevator Pitch:** A concise, punchy summary of the product/solution and its core value proposition.
2. **Discovery Questions:** 3-5 high-impact questions to ask the customer to uncover pain points and qualify the opportunity. For prose, you can still use a `## Discovery Questions` section in the markdown body where it fits the narrative.
3. **Objection Handling:** Common customer pushbacks and how to pivot or reframe the conversation.
4. **Technical Deep Dive `[deep]`:** All technical specifications, speeds, feeds, and granular details must be placed in a collapsed `[deep]` section or an accordion.

**Sales trio modules** (`sales-rules-of-engagement`, `sales-process-and-salesforce`, `sales-operations-and-approvals`) use `## Overview`, `## Key Guidelines`, and `## Common Pitfalls` as tabs instead—do not duplicate `## At a glance` there unless you intentionally want an extra section before the trio (not standard).

## Collapsed sections (`[deep]`)

Append **`[deep]`** to an H2 line to render that section **collapsed by default** (expand to read). Use for long policy, internal pricing notes, or anything that shouldn’t block a quick read.

```markdown
## Section title [deep]
```

Case-insensitive. The UI shows **Section title** only (marker stripped). **Guardrail:** if the module has **only one** `##`, `[deep]` is ignored so the page never opens empty.

Everything else in the pipeline—Coffee Summary, scenarios, knowledge checks, references—is unchanged by `[deep]`.

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

## Elevator pitch reveal (`::: elevator`)

Use a **fenced shortcode** for a high-stakes elevator pitch: animated doors, floor label, and cinematic reveal of the pitch copy. **Nested shortcodes** in the body are supported (same closing rules as accordion).

**Syntax** — floor name in square brackets on the opener line; body is normal Markdown; closing fence on its own line at **column 0**.

```markdown
## 

::: elevator [Elevator Pitch]
**Your one-liner** — value, differentiation, and ask.

Supporting line if needed.
:::
```

Use an **empty `##` line** (`##` plus a space, nothing else) when you want the section **without** a duplicate heading—the floor plate already shows the title.

**Interaction** — Click the **door frame / panels** to open or close the reveal. Links inside the pitch behave normally (they do not toggle the doors).

**Guardrails**

- The closing line must be exactly `:::` (optional spaces after the third colon only).
- Do not put `]` inside the floor label if you need a bracket in the title; keep labels short.
- The H2 opener must include whitespace after `##` (e.g. `## `) so the parser treats it as a heading line.

## Discovery embed games (`discovery_questions` in YAML)

The **Discovery Run** (platformer), **Discovery Galaxy** (shooter), and **Discovery Break** (brick breaker) games load their five in-game prompts from the **host module’s** YAML front matter—not from hardcoded JavaScript.

**Front matter** — add a top-level list with **exactly five** strings (current game mechanics require this count):

```yaml
discovery_questions:
  - "First open-ended discovery prompt…"
  - "…"
  - "…"
  - "…"
  - "Fifth prompt…"
```

**Iframe** — point the game at your module’s `id` (same value as `id:` in the front matter):

```html
<iframe
  src="games/portfolio-level-1/index.html?embed=1&module=your-module-id"
  …
></iframe>
```

Use `games/galactica-1/index.html` or `games/brick-breaker-1/index.html` instead of `portfolio-level-1` when embedding those templates. The `module=` query parameter is **required** for discovery text to load (`../../modules/<id>/content.md` is fetched from the browser).

**Operational notes**

- Serve the app from a **local web server** (same as module `content.md` loading); `file://` may block `fetch`.
- If the list is missing, not an array, or not exactly five entries, the game shows an error on the start screen and keeps **START** disabled.

## App behavior (not authoring)

**Fiber path** (header): full-screen progress map; manifest order; `localStorage` `sn:module-visited:v1`. Unrelated to `[deep]`.

## Handouts

Interactive content lives in `content.md`. PDFs build from `handouts/source/*.md`; `[deep]` in handout source is optional—print may differ.
