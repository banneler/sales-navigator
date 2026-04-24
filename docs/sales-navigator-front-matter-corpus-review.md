# Sales Navigator — front matter review (corpus-informed)

**Inputs:** `docs/gpc-training-corpus-canonical-text.md`, `docs/gpc-training-corpus-structured.md`, `docs/gpc-training-corpus-structured.jsonl`, `docs/gpc-training-content-bible.md`, `docs/gpc-training-corpus-ocr-validation.md`, and all `modules/*/content.md` YAML front matter.

**Goal:** Actionable upgrades so module metadata, summaries, references, and assessments align with governed training sources and support a world-class learner experience.

**Executive read (after 5 honing passes):** The app’s **sales trio + sales ops** modules are already strong versus the corpus; the biggest lift is **deep linking** (Salesforce job aids, OBR PDFs, tier-1 product sheets) and **assessment parity** (ABM, OBR, iTV). **Structured corpus** should be the authority for **table-shaped policy** when tightening Coffee Summary bullets and video tab prose. Treat **hub-only `reference_files`** as technical debt for product modules—world-class means **named sources** per topic.

---

## Pass 1 — Baseline inventory

### Corpus ↔ app coverage

| Module (`id`) | Corpus signal (bible §3) | `reference_files` today | Gap (first pass) |
|---------------|-------------------------|-------------------------|------------------|
| `sales-rules-of-engagement` | ROE PDF; partner/referral | ROE SharePoint link | Corpus notes thin/excerpt ROE raster; verify PDF parity with SharePoint |
| `sales-process-and-salesforce` | SF 101, leads, DocuSign, dashboards | Salesforce Roadmap folder | No deep links to job aids named in corpus (assigning leads, forecasting, etc.) |
| `sales-operations-and-approvals` | Approvals, matrix, MAC, costing, NISC | Strong set of PDF links | Optional: Disconnect, Dark Fiber, NISC/iVUE overview, Partner Referral |
| `portfolio-and-business-capabilities` | Business capability deck | Sales Resources hub only | Add explicit **Business Capability Presentation** link if stable URL exists |
| `product-connectivity` | DIA/SIA/Ethernet/fiber/off-net | Hub link | Add 1–2 anchor PDFs (DIA vs SIA, fiber vs 5G) per corpus |
| `product-security-and-sd-wan` | SD-WAN, MNS, DDoS | Hub link | Same: link tier-1 datasheets / fee schedule with INTERNAL handling |
| `product-cloud-wifi-and-backup` | Wi‑Fi, 5G backup, cloud connect | Hub link | Link Cloud Connect + 5G product sheet if URLs stable |
| `product-itv` | iTV sheet | Hub link | Direct iTV product sheet link |
| `product-uc-voice-and-collaboration` | UC, Teams, CC | Hub link | Deep links to plan sheets / Teams datasheet where governed |
| `competitive-positioning` | Battlecards | Hub (battle cards) | Map named cards from corpus to anchor links |
| `account-based-marketing` | No dedicated corpus folder | None | Content is Gantt/Constellation narrative — add `reference_files: []` or internal playbook link |
| `operational-business-reviews` | OBR SOP, readiness form | None | Add OBR PDF links from corpus alignment |
| `map-book` / `getting-started` | Map book absent in corpus; SF 101 optional | N/A (`content.md` absent) | Document in handouts / `content.json`; optional pointer to SF module |

### Knowledge check counts vs enrichment rule

Per `.cursor/rules/module-content-enrichment.mdc`, target **~10** `knowledge_checks` per module.

| Module | Count | Note |
|--------|------:|------|
| `product-uc-voice-and-collaboration` | 15 | Consider pruning or splitting difficulty — avoid fatigue |
| `product-itv` | 4 | **Expand** toward ~10 |
| `account-based-marketing` | 3 | **Expand** |
| `operational-business-reviews` | 3 | **Expand** |
| Most others | 10 | On target |

### YAML / structural flags

- **`account-based-marketing`:** Front matter opens with `---`, a blank line, then `id:` — risk of parser inconsistency; should be contiguous YAML after opening `---`.

### Per-module front matter snapshot (quick read)

| Module | `summary` | Notable front-matter features |
|--------|-----------|--------------------------------|
| `sales-rules-of-engagement` | Tight | `sales_trio_hide_overview`, 10 KCs, ROE reference |
| `sales-process-and-salesforce` | Tight | `sales_trio_guidelines_only`, flow stepper, coaches, rich `video_sections` |
| `sales-operations-and-approvals` | Tight | `sales_trio_hide_deep_dive`, tabbed video sections, 7 reference PDFs |
| `portfolio-and-business-capabilities` | Strong | `discovery_questions`, `roleplay`, hub link |
| Product modules (×5) | Strong | `discovery_questions`, `roleplay` (most), **hub-only** references |
| `competitive-positioning` | Strong | Anchored hub sections for battle cards |
| `account-based-marketing` | Strong narrative | Thin KCs, **no** `reference_files`, YAML gap |
| `operational-business-reviews` | Strong | Thin KCs, **no** `reference_files` |

---

## Pass 2 — Prioritize by learner impact

**P0 (trust & compliance):** Approvals, pricing, ROE authority — ensure `reference_files` and Coffee Summary numbers match **structured corpus** + SharePoint (matrix payback rows, discount caps, investment thresholds).

**P1 (onboarding completion):** Salesforce module — add labeled links to the same job aids reps see in **Salesforce 101** and GPC Solution training (corpus folder `extracted/... (3)/`).

**P2 (depth & parity):** Product modules — move from generic Sales Resources hub to **2–4 canonical PDFs** per module to reduce “link soup.”

**P3 (assessment parity):** Bring ABM, OBR, iTV knowledge checks to ~10; consider trimming UC if UX testing shows drop-off.

---

## Pass 3 — Evidence-backed suggestions (corpus paths)

Use these as QA anchors when editing front matter. In-repo docs use the same **relative paths** as `/Users/ba/Desktop/GPC Training Material/` (see bible appendix).

| Suggestion | Evidence |
|------------|----------|
| Verify ROE idle windows & USAC language | `Sales Rules of Engagement (ROE) - Revised August 2025 (1).pdf` in corpus; **bible §8** flags possible 1-page raster — reconcile with SharePoint canonical PDF |
| Validate approval $ thresholds & discount stairs | `extracted/OneDrive_1_4-10-2026 (3)/Approval Requirements Matrix v5.5 - 0725.pdf` — **Tables (detected)** in `gpc-training-corpus-structured.md` |
| Pre-approved fiber checklist vs tabs | Pair `Pre-Approved Order Process Quick Reference Guide - 0723` + matrix tables in structured extract |
| Add SF job aid links to `reference_files` or `video_sections` bodies | `Salesforce 101 Manual - 0422`, `Salesforce & DocuSign Integration Training Guide - 0623`, `Converting Leads to an Opportunity Quick Reference Guide - 1123`, `Forecasting Quick Reference Job Aid - 0622`, `Dashboards Quick Reference Guide - Sales - 0224`, `Parent Opportunity Process Training Guide - 0822` — all under `extracted/... (3)/` per bible §4.1 |
| OBR module `reference_files` | `extracted/... (2)/Operational Business Review - OBR/OBR SOP v1.2.pdf`, `.../OBR Sales Readiness Form - Fillable.pdf`, `Customer Move Process.Procedure.pdf` |
| Partner referral (enterprise) | `Partner Referral Program Quick Reference Guide - Enterprise Sales Only - 1223.pdf` — consider ROE-adjacent link if not in ROE module |
| Portfolio “capability deck” | Root `Business Capability Presentation.pdf` — add if governance approves a stable SharePoint URL |
| Connectivity collateral | `extracted/... (1)/Internet/DIA Product Sheet 120424.pdf`, `DIA vs SIA Comparison 110424.pdf`, `Fiber Delivery/Fiber vs Starlink Battlecard`, `Cloud Connect/Cloud Connect 011725` |
| UC / CC | `Unified Communications/` tree in corpus (plan sheets, Teams datasheet, contact center) — pick 3–4 governed links |
| Competitive | Root battlecards + `extracted/... (1)/` product battlecards — align **labels** in UI with file names reps search for |

---

## Pass 4 — “World-class” product criteria (weighted scorecard)

Use as a release gate for vNext. **Weight** = relative impact on trust and completion.

| Criterion | Wt | Definition | Current rough read |
|-----------|---:|------------|-------------------|
| **Source traceability** | 3 | Every numeric policy has a labeled `reference_files` or governed inline link | Ops **strong**; product modules **hub-only** |
| **Structural QA** | 3 | Table policies cross-checked with `gpc-training-corpus-structured.md` (not flat canonical alone) | Process started via OCR validation doc |
| **Assessment depth** | 2 | ~10 discriminating KCs/module; scenarios cover failure modes | **ABM, OBR, iTV** under target |
| **Cognitive load** | 1 | Coffee Summary + steppers; avoid duplicate prose across tabs/deep dive | Sales trio **good** |
| **Sensitivity & gating** | 2 | `sensitivity` matches collateral; internal pricing not in `public` summaries | Spot-check iTV, connectivity pricing language |
| **Welcome journey** | 1 | Getting started + map book + first three modules clear | **Non-`content.md`** — handoff risk |

**Target:** Average “maturity” 4/5 on traceability + structural QA before calling the release “world-class.”

---

## Pass 5 — Roadmap, anti-patterns, and success metrics

### 30 / 60 / 90-day roadmap

| Horizon | Deliverables |
|---------|----------------|
| **30 days** | Fix ABM YAML; add OBR `reference_files` + 7 more KCs; add 4–6 Salesforce deep links; ROE PDF parity check vs SharePoint; run structured-vs-front-matter diff for **approval matrix** dollar bands |
| **60 days** | Each product module: **≥2 non-hub** `reference_files`; iTV → ~10 KCs; portfolio → Business Capability link if URL stable; competitive labels ↔ corpus file names |
| **90 days** | Optional: enrich `gpc-training-corpus-structured.jsonl` with `module_id`; pilot in-app search chunks from structured JSONL; UX test UC KC length; map-book/getting-started single onboarding path documented |

### Anti-patterns to avoid

- **Hub-only references** for SKUs reps price weekly — they will grep email instead of the app.
- **Typing matrix numbers from memory** in Coffee Summary — always trace to structured table or PDF.
- **Duplicating** the full matrix in markdown when `video_sections` already summarize — link + 3 bullets max; details belong in PDF + structured extract QA.
- **Flat canonical** as sole QA source for tables — use structured doc or original PDF.

### Success metrics (leading indicators)

| Metric | Target |
|--------|--------|
| Modules with **≥2** specific `reference_files` (not hub-only) | 10/12 `content.md` modules |
| Modules with **9–11** knowledge checks | ≥10/12 |
| Policy numerics with explicit source link in sales-ops + ROE | 100% |
| Learner time-to-first-reference (instrumented) | TBD baseline → ↓ after deep links |

### Consolidated checklist (P0–P3 merged)

1. **P0:** ABM YAML fix; ROE source parity; approval thresholds QA vs structured matrix; sensitivity review for pricing mentions.
2. **P1:** Salesforce + OBR reference depth; SF summary bullets traced to job aids.
3. **P2:** Product module specific PDFs; portfolio capability deck link; competitive name alignment.
4. **P3:** UC KC right-sizing; JSONL `module_id` metadata; welcome/map narrative cohesion.

---

## Revision log (5 honing passes)

| Pass | What changed |
|------|----------------|
| **1** | Module–corpus matrix, KC counts, YAML flag |
| **2** | P0–P3 priorities, per-module snapshot table |
| **3** | Concrete PDF paths + bible cross-references |
| **4** | Weighted world-class scorecard |
| **5** | 30/60/90 roadmap, anti-patterns, metrics, merged checklist |

---

*Generated for sales-navigator. Re-run when `modules/*/content.md` or the GPC corpus is refreshed.*

