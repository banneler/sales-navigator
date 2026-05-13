# Module content — light editorial pass policy

**Scope:** Edit **`modules/<id>/content.md`** (and any cited special paths). Regenerate `docs/sales-navigator-all-modules.md` with `node scripts/assemble-all-modules-md.mjs` after substantive copy changes. Do **not** treat the assembled doc as the source of truth.

**Goal:** Keep rep-facing copy **scannable** where that is intentional (Coffee Summary, cue-card bullets), while avoiding **stub sentences**, **run-ons**, and **telegram explanations** that fail as teaching text.

---

## 1. Knowledge check `explanation`

Every `explanation` should read as a **complete thought**—not a mnemonic fragment.

**Rules**

- **Minimum length:** Aim for **two short sentences** or **one sentence with ~15+ words**, unless the correct answer is trivially self-explanatory (rare).
- **Always answer “because”:** State **why** the right option is correct, or **what goes wrong** with a tempting wrong choice. Avoid naked verdicts (“Correct.” as the only teaching line belongs in scenario feedback labels, not KC explanations).
- **No pure shorthand lines** unless paired with a plain-English follow-up, e.g. avoid standalone *“Align SKU to uptime.”* Prefer *“Match the DDoS SKU to the customer’s real uptime need—on-demand mitigation is only during business hours on that product, so overnight risk has to be explicit.”*
- **Symbols and arrows:** Use **sparingly** inside explanations. If you use `→`, `≠`, or a formula-style line, add one normal sentence that says the same thing in words.

**Acceptable “tight but complete” example**

> *“On-demand DDoS mitigation on that SKU runs on a weekday business-hours window, not 24×7. If they need always-on mitigation, the proactive tier is the right conversation before signature.”*

---

## 2. Knowledge check `options`

- Keep **parallel structure** (all questions, all statements, or all imperatives—pick one per question).
- **Length:** Roughly balanced across the three options so the longest answer is not always the giveaway (unless teaching that point).

---

## 3. Scenario `feedback`

- **Wrong choices:** One or two sentences: what broke, what to do instead, optional “why.”
- **Right choices:** At least **“Correct.” plus one teaching clause**, unless the situation paragraph already spells out the lesson—then **“Correct — …”** with a short reminder is enough.
- Avoid **fragment-only** feedback (`"Map lines to SKUs."`) unless the module is explicitly a **drill deck** and the situation already contains the full reasoning (prefer expanding per §1 spirit).

---

## 4. `five_minute_summary` (Coffee Summary)

- **Bullets may stay short** (title + one line). Prefer **one clear sentence per bullet** over a chain of clauses.
- **Limit** to **one em dash** per bullet where possible; if you need more, split into two bullets or one short paragraph in the body section instead.
- **Equation-style lines** (`X = …`) are allowed **if** the next bullet or the same bullet finishes the thought in plain language for new reps.

---

## 5. `## Overview` / `## At a glance`

- **Default:** Prefer **one bridging paragraph** (2–4 sentences), then bullets if needed.
- **Label : gloss** bullets are allowed for **sales-trio** or ops workflow modules **if** the page also has a **one-sentence “in plain terms”** intro above them, **or** if **Coffee Summary** already states the same story in full sentences (pick one place to carry the burden—avoid **two** all-fragment surfaces in a row).
- If a tab is **hidden** by front matter (`sales_trio_hide_*`), ensure **visible** sections are not redundant **and** not only fragments.

---

## 6. Run-on control (body copy, flip cards, deep dives)

- **Target:** Roughly **25–35 words per sentence** on average; flag anything **over ~45 words** unless it is a defined legal/SOP quote.
- **Fix pattern:** Split at **“and/but/so/because”** joints, or after **one complete idea** before **“—”** second ideas.
- **Stacks of proper nouns or acronyms:** Break into two sentences or use a short **second sentence** that defines the tradeoff in plain English.

---

## 7. “Field reference” blocks (e.g. competitive quick hits)

- **Staccato cue-card lines are OK** when labeled as **quick hits**, **talking points**, or **before you open the card**.
- Add a **single line of context** at the top: *“Use as memory prompts—not a script.”* if the section is otherwise bullets only.

---

## 8. Front matter and markdown hygiene

- **`summary:`** One line in the UI; **three-beat fragments** are fine (`A. B. C.`). Prefer **real words** over opaque abbreviations (spell out once on first use in body if the abbreviation is not universal).
- **`roleplay`:** Use valid YAML indentation—**`goal:`** must be **nested under `roleplay:`**, not a stray markdown `##` heading (broken assembly reads like “broken English” in the consolidated export).
- **`discovery_questions`:** Use a **consistent** list style (quoted strings or plain scalars); each item should be a **full question** where possible.

---

## 9. When *not* to apply this pass

- **Tables, manifests, link labels, video titles:** Don’t inflate.
- **Knowledge artifact quotes** pulled verbatim from PDFs: Tag as such; don’t rewrite policy text without source review.
- **Getting started** humor / tour copy: Light touch only—preserve tone.

---

## 10. Ready-to-ship checklist (author)

- [ ] Every KC `explanation` teaches **why** (§1).
- [ ] No **only** fragment explanations in non-drill modules (§1).
- [ ] Overview / At a glance has **at least one** full-sentence bridge where fragments dominate (§5).
- [ ] No sentence in customer-facing narrative **requires** three reads to parse (§6).
- [ ] YAML structure validates; **no `##` headings inside YAML blocks** (§8).
- [ ] Regenerated `docs/sales-navigator-all-modules.md` if reviewers read the bundle.

---

## Suggested pass order (repo)

1. **Modules with shortest KC explanations** (e.g. Security & SD-WAN, Competitive Positioning)—highest learner impact.
2. **Sales trio overviews** that are label-only with no bridge.
3. **Product** deep dives with stacked mega-sentences (optional polish).
