# Content reconciliation — recon & strategy

**Author:** Sales-enablement review (50-year telecom-veteran lens), Sales-Navigator content audit.
**Scope:** Recon and strategy *only*. No copy is being rewritten in this pass. Page structure, UI, and component patterns stay untouched.
**Guiding-light modules (do not overhaul):** `getting-started`, `sales-process-and-salesforce`, `sales-rules-of-engagement`. These three set the voice, source-citation, and KC-density bar that the rest of the catalog should rise to meet.

---

## 1. Source-of-truth inventory

What we already have on disk — and what each artifact is *good for* vs *bad for*.

### 1.1 Raw source material (off-repo, on `~/Desktop`)

| Layer | Path | Count | Notes |
|------|------|------|------|
| **PDF tree (canonical originals)** | `/Users/ba/Desktop/GPC Training Material/` | 135 PDFs | The single physical source-of-truth. Mix of battlecards (root), structured exports (`extracted/OneDrive_*`), and `Product Training/` decks. Some are partner-supplied (Intermedia/UC, VeloCloud/SD-WAN); flag for "approved external wording" before lifting verbatim. |
| **Page-image tree (mirrored raster)** | `/Users/ba/Desktop/GPC Training Material - page images/` | 737 PNGs at 200 DPI | Mirrors the PDF tree (`dir/Name.pdf → dir/Name/page-001.png`). Built via `scripts/rasterize_pdf_tree.py`. Use for human/vision review and OCR validation — not citation. |
| **Out-of-tree SOPs (Downloads)** | `/Users/ba/Downloads/ABM SOP.pdf` | 1 (so far) | **ABM SOP is not** in the corpus folder. User-provided. Treat as authoritative for `account-based-marketing` and migrate into the training tree before next raster run (open question §5). |

### 1.2 In-repo derivatives (parsing & analysis layer)

| Artifact | Path | Created by | What it is | When to trust it |
|----------|------|------------|-----------|------------------|
| **Content bible** | `docs/gpc-training-content-bible.md` | Hand-curated + parallel review | Topic map, module alignment, glossary, teaching-order graph, dup/gap log | Inventory + governance only — *not* a copy source |
| **Canonical flat text** | `docs/gpc-training-corpus-canonical-text.md` (737 pages, ~36k lines) | `scripts/extract_gpc_corpus_to_markdown.py` (PyMuPDF `get_text("text")`) | Concatenated embedded text, anchor per PDF, low-text page log | Grep + RAG seed. **Loses table layout** — never lift price tables / approval matrices straight from this file |
| **Structured (layout-aware) extract** | `docs/gpc-training-corpus-structured.md` + `.jsonl` (~22k md lines / 737 jsonl) | `scripts/extract_gpc_corpus_structured.py` (PyMuPDF `find_tables()` + `to_markdown()`, body blocks ordered) | Tables as md grids, body as spatial paragraphs, per-page anchors | **The right citation source** for policy/price/approval grids — use first; fall back to flat text only for narrative pages |
| **OCR validation report** | `docs/gpc-training-corpus-ocr-validation.md` | `scripts/validate_gpc_extract_vs_ocr.py` (EasyOCR vs embedded text, sampled pages) | Per-page similarity, low-text page flags, "embed better / OCR better" notes | Decide which pages need *manual* transcription (graphic-heavy slides, pricebook scans) |
| **Front-matter audit (prior pass)** | `docs/sales-navigator-front-matter-corpus-review.md` | Hand-curated review | Module coverage matrix, KC counts, YAML hygiene, 30/60/90-day roadmap | Starting point for this plan — already names many of the gaps below |

### 1.3 Pipelines (scripts in `scripts/`)

| Script | Purpose | Status | Usage |
|--------|---------|--------|-------|
| `rasterize_pdf_tree.py` | PDF → PNG (200 DPI mirrored tree) | Stable | Re-run when PDFs change |
| `extract_gpc_corpus_to_markdown.py` | PDF → flat md (anchors per doc) | Stable | Regen flat text after raster refresh |
| `extract_gpc_corpus_structured.py` | PDF → tables-as-md + body blocks (md + jsonl) | Stable | **Primary** source for table-shaped content |
| `validate_gpc_extract_vs_ocr.py` | EasyOCR vs embed sampling, discrepancy report | Stable (needs `numpy<2`) | Run after structured pass; flag pages for manual transcription |
| `extract_pdf_text.py`, `extract_intermedia_uc.py`, `json_to_markdown.py` | Older one-shot helpers (single PDF extract; UC PPTX+PDF; legacy `content.json → content.md` migration) | Legacy | Reference only; superseded by the three above |

**Conclusion of §1:** The plumbing is solid. We have a layered evidence chain — PDF → page image → flat text → structured (tables + body) → audit reports. We do not need a new pipeline; we need a reconciliation *protocol* that uses these consistently.

---

## 2. Guiding-light pattern (what "rock solid" looks like)

Reverse-engineering the three modules the user calls trustworthy gives us the bar.

| Pattern | `sales-rules-of-engagement` | `sales-process-and-salesforce` | `getting-started` |
|---------|------------------------------|--------------------------------|-------------------|
| **Source citation in `reference_files`** | Single deep link to the **ROE PDF** itself | **Salesforce Roadmap folder** (deep link) + named PDFs deep-linked inline | N/A — UI tour |
| **Voice** | Imperatives + named landmines ("**Search before you create**", "**Log it or lose it**", "**Sent-Folder Defense**") | Coach names (**Amy**, **Fritz**), live-session callouts ("**30 minutes** live with **Amy**"), verbatim flow ("**Okta** now — YubiKey no longer applies") | Light, welcoming, first-person plural ("We're genuinely happy you chose…") |
| **Scenarios** | Named, concrete: "**130-Day Ghost Town**", "**Sent-Folder Defense**"; flavor without losing the rule | Tied to actual SF mechanics (DocuSign Contract Signer, lead conversion) | Anchored in the actual app behavior (e.g. SharePoint vs broadcast email) |
| **KC density / quality** | **10** KCs that *each* cite a specific number (61/121/5) or named rule | Realistic mix; references specific PDFs in explanations | N/A (uses scenario drill) |
| **Body voice** | Short imperative `## Key Guidelines` + named **Common Pitfalls** flip-cards | Coach photos, flow stepper, video sections; "**5-minute summary**" reads like a checklist not prose | Mirrors what a buddy would say walking you through the tool |

**The lift across the rest of the catalog is not a rewrite — it's three small movements:**

1. **Cite the actual PDF** (not just a hub) wherever a specific number or rule lives.
2. **Name the landmine / shortcut** ("Cowboy Grab", "5-Day Clock") so the lesson sticks.
3. **Make KCs answerable from a specific document line** — never from generic platitude.

---

## 3. Module-by-module reconciliation map

**Confidence scale:** 🟢 ready to ship (guiding-light) · 🟡 small gap (1–3 targeted edits) · 🟠 medium gap (5–10 edits + source-link work) · 🔴 needs SOP-grounded rewrite of specific sections (still bounded — no full re-author)

Each row pins the **primary source(s)** we already have parsed in `gpc-training-corpus-structured.md` (where applicable). "Anchor" refers to the `### \`...\`` heading in that file.

| Module | Confidence | Primary source(s) on disk | Biggest content-delivery gap (humanist read) | Recommended targeted lift |
|--------|------------|---------------------------|------------------------------------------------|---------------------------|
| `getting-started` | 🟢 | UI tour (no PDF) | Light copy refresh on Coffee Summary bullets if voice drifts | None this pass |
| `sales-rules-of-engagement` | 🟢 | `Sales Rules of Engagement (ROE) - Revised August 2025 (1).pdf` (linked) | Verify the **1-page raster** isn't an excerpt — full ROE may have more sub-rules | Confirm full ROE PDF page count; if longer than 1 page, re-raster and spot-check rule changes |
| `sales-process-and-salesforce` | 🟢 | `Salesforce 101 Manual - 0422.pdf`, `Salesforce & DocuSign Integration Training Guide - 0623.pdf`, all `extracted/(3)/*` job aids | Already deep-linked; one or two coach quotes could humanize KC explanations | Optional — leave as-is this pass |
| `sales-operations-and-approvals` | 🟡 | `Approval Overview and Training Guide - 0725.pdf`, `Approval Requirements Matrix v5.5 - 0725.pdf`, `Pre-Approved Order Process Quick Reference Guide - 0723.pdf`, `Change Order Process - Sales Team - 0325.pdf`, `Move-Add-Change Processes - Sales Team - 1123.pdf`, `Costing Routing Quick Reference Guide - 1123.pdf` | Body copy is *strong*; only optional add: surface **Disconnection Process** and **Dark Fiber Quick Reference** which exist in corpus but are not cited | Add 2 references; consider one named landmine ("Manual-Validation Trap") flip card |
| `competitive-positioning` | 🟠 | `Fiber vs Starlink Battlecard.pdf`, `Ethernet Battle Card FINAL.pdf`, `GPC SD-WAN Battle Card FINAL.pdf`, `Cox Acquisition Battle Card v2.pdf`, `Omaha Metro competitive battle card v3.pdf`, `UC Competitor Battle Card 031226.pdf`, `Managed Firewall Battlecard FINAL.pdf`, `GPC Managed WIFI Battle Card.pdf`, `GPC Cloud Connect Battle Card 050321.pdf`, `Battlecard - 5G Wireless Backup.pdf` | `reference_files` only points at the **hub**; the 10 named battlecards above are all parsed and ready to deep-link individually | Replace the two hub-only refs with a named list keyed to module accordions; verify each "Counter with" row in the Tech Deep-Dive table is supported by the corresponding battlecard's structured text |
| `portfolio-and-business-capabilities` | 🟠 | `Business Capability Presentation.pdf` | Body claims (Midwest IP reach, Tier-1/IX, fiber-first) are *plausible but uncited* — they live in the Business Capability deck per the bible, but the deck itself isn't deep-linked | Add **Business Capability Presentation** as a named reference; pull 1–2 verbatim phrases from the deck into the Elevator Pitch so it stops sounding like consultant prose |
| `product-connectivity` | 🟠 | `DIA Product Sheet 120424.pdf`, `SIA product sheet 120324.pdf`, `DIA vs SIA Comparison 110424.pdf`, `Managed Ethernet Product Sheet 060625.pdf`, `Ethernet CoS Data sheet 2025.pdf`, `Fiber vs Starlink Battlecard.pdf`, `Fiber vs 5G one sheet 2025 072125.pdf`, `2025 Fiber over Cable Modem.pdf` | The **"2 Gbps / 100 Gbps" comparison numbers** and **DIA pricing ($354 / $547 / $860 / $1,060)** need provenance — currently inline without citing the SIA/DIA comparison sheet or SD-WAN training internal pricing source | Add 4 named references; either (a) cite the comparison-sheet page anchor next to the throughput numbers, or (b) move pricing to a clearly internal-only callout that links the source PDF |
| `product-security-and-sd-wan` | 🟠 | `Managed Firewall data sheet 032026.pdf`, `Managed Network Security data sheet 062025.pdf`, `DDoS Product Sheet 012025.pdf`, `DDoS Reporting Terms 011725.pdf`, `SD-WAN Product Sheet 2024.pdf`, `2024 SD-WAN Brief - Retail.pdf`, `2024 SD-WAN Brief - Healthcare.pdf`, `2024 SD-WAN Brief - Financial Services.pdf`, `Sales Training - DDoS Product 2023 Update.pdf`, `SD-WAN & Managed Security with Configure 08-01-2024.pdf` | The **"Gartner has ranked VMware VeloCloud at the top of the leader quadrant"** line in objection handling is a **classic hallucination-suspect** — verify against the SD-WAN battlecard / brief before keeping. The **DDoS on-demand weekdays 8–17** window should cite **`DDoS Reporting Terms 011725.pdf`** explicitly | Verify the Gartner line; replace `reference_files` hub with 4–6 named PDFs; add inline citation next to DDoS window claim |
| `product-cloud-wifi-and-backup` | 🟠 | `Cloud Connect 011725.pdf`, `Managed Wi-Fi datasheet 070725.pdf`, `Small Business Wi-Fi with WorkPass datasheet.pdf`, `Network Monitoring Portal Product Sheet.pdf`, `GPC Wireless Internet 5G Product Launch.pdf`, `5G Wireless Internet Backup Product Sheet 103025.pdf` *(in Downloads — not yet rasterized)*, `5G Wireless Internet Broadband Product Sheet 042426.pdf` *(in Downloads)* | Several **concrete-but-uncited claims** in the Deep Dive: `$45 / $68 / $175 MRC`, `~8h battery`, `Cradlepoint X20`, `Verizon + AT&T dual SIM`, deprioritization tiers (`>12 GB → 50 Mbps` etc.), `Kajeet Sentinel`, **AWS / Azure / Google / Omaha-Chicago-Denver** metro list. Several of these likely come from the 5G product-launch deck (parsed) but `Kajeet Sentinel` does not appear anywhere in the corpus | Add 4 named references; spot-check each concrete number against the structured extract anchor (page-by-page); **flag `Kajeet Sentinel` for SME review** (likely needs replacement or source) |
| `product-uc-voice-and-collaboration` | 🟢 (Pass 3+4 done 2026-05-11: 7 KCs; plan-ladder + License Blender landed) | `UC Enterprise Plan Sheet 091125.pdf`, `UC Pro Plan Sheet 091125.pdf`, `UC Essentials Plan Sheet 091125.pdf`, `UC Express Plan Sheet 091125.pdf`, `Contact Center datasheet 050925.pdf`, `Internal ONLY - Ascend Sales Kick Off_Master (1).pdf`, `Internal ONLY - GPC UC SKO June 6 - Steven.pdf`, `Internal ONLY - CCaaS Sales Training - Tips Targets.pdf`, `Internal ONLY - UC IPN-OffNet Product Training - April 10, 2025.pdf` | Longest module; heavy partner-collateral blend (BYOC / IPN / Embedded). Remaining concrete-but-uncited claims for Pass 2 flagged-claims log: `Triple Guard Security™`, `~6% of Teams users actually use Teams Phone`, `100+ voice features`, `SMS in Teams mobile not available yet`. (`99.999%`, plan-tier storage 5/50/200 GB, video-participant 25/100/200, CRM list, and Call Center features are now PDF-anchored via the plan sheets.) | **Remaining**: Pass 1 — deep-link the 4 UC plan sheets + Contact Center datasheet (need SharePoint URLs); Pass 2 — log the partner-collateral claims above for SME review |
| `product-itv` | 🟡 (4 KCs — under target) | `GPC iTV Product Sheet 2024.pdf` | Body voice is good and honest; only gap is `reference_files` is hub-only despite a parsed product sheet existing | Add deep link to `GPC iTV Product Sheet 2024.pdf`; expand KCs from 4 → 5–8 (toward the floor of the 5–10 range, since iTV is a single-product module) using direct collateral lines (STB footnote, single-bill model, lineup-by-market, Internet dependency) |
| `account-based-marketing` | 🔴 (recently SOP-aligned but still partial) | `/Users/ba/Downloads/ABM SOP.pdf` *(out of corpus tree — author **Bryan Anneler**, v1.0, 1.22.26)* | Current copy is correct on **cadence facts** (18 touches / 90 days / 3 touches per target per 2 weeks / 1 marketing touch per 30 days / +1 on Door Pull / Master Tracking Spreadsheet). It **omits** four pillars that an SOP-trained rep would expect: **(a) "Rolling Three" pipeline** (3 active + 3 on-deck, immediate backfill); **(b) Staggered 30-day kickoff** (Account A/B/C in months 1/2/3); **(c) Target-tier hierarchy** (Manager + Director/VP + Executive — min 3, ideal 5, "cannot all be Executive"); **(d) Kickoff stakeholders + Sales Readiness Checklist** (Account Intel / Status / Current Services / Location Scope / Prospecting History / Target List). It also adopts a slightly consultant-y narrative voice ("**Coach them to stay on-sequence…**") that doesn't match the ROE/SF voice | (1) Move ABM SOP into the training tree so it shows in corpus; (2) Add it to `reference_files`; (3) Recompose Coffee Summary + body around the **four pillars above**; (4) Lift one or two SOP phrases verbatim ("Rolling Three", "Door Pull", "high-touch, 90-day coordinated effort"); (5) Expand KCs from 3 into the 5–10 range (rolling-three, target tier hierarchy, kickoff readiness, etc.) |
| `operational-business-reviews` | 🔴 | `OBR SOP v1.2.pdf` (anchor in structured md, ~line 15415), `OBR Sales Readiness Form - Fillable.pdf` | Current copy gets the **21-business-day cycle** and **Day-14 handoff** right but loses the SOP's actual operating model: **OBR "Slick"** (trifold front/back insert) with its **4 components** (Network Design / Strategic Billing / NOC History + Feedback Loop / Strategic Roadmap), **Success Criteria** (Zero Fire Drills · 100% Accuracy · Client Value), **No Raw Dump rule**, **Single Packet Handoff**, named owners (**Pete** = design, **Jill / NOC** = data, **Sarah** = marketing, **Account Rep / Account Team**), and the **four communication templates** with concrete subject lines. `reference_files` is **empty** — the SOP itself is not linked. KCs are 3 (target 5–10; SOP-tight, ship in the lower half). | Same shape as ABM: (1) Add `reference_files` for OBR SOP + Sales Readiness Form; (2) Restructure body around **Slick + Success Criteria + No Raw Dump + Single Packet** without changing the page's existing sections; (3) Lift named phases & owners directly; (4) Expand KCs into the 5–10 range grounded in the SOP table |

**Cross-cutting observations**

- **The single biggest trust signal everyone is missing is named-source citation.** Eight of twelve modules point only at hub URLs. Every concrete claim in those modules reads as plausible — but unverifiable to a new AE — *because the file backing the claim is sitting in the corpus already parsed*.
- **Hallucination risk is concentrated in two places:** (a) **specific numbers** lifted into prose without an anchor (UC `99.999%`, `200 GB`, `J.D. Power 7×`; Security `$481/mo`; Cloud/Wi-Fi `$68 MRC`, `Kajeet Sentinel`, metro list); (b) **policy/process names** the SOP uses verbatim that the module paraphrased away ("Rolling Three" became "ABM master tracking spreadsheet"; "OBR Slick" became "OBR meeting deck").
- **Voice drift is small and consistent.** Where the guiding lights use *imperatives + named pitfalls*, the weaker modules slide toward *consultant prose*. The fix is wording, not architecture. (E.g., ABM scenario coaching line "*Coach them to stay on-sequence unless leadership documents an exception, so air cover and reporting stay intact.*" → ROE-style "*The Cowboy Sequence-Skip: stay on the sequence; documented exception goes through your manager — silent skips break marketing's air cover.*")

---

## 4. Proposed reconciliation plan (recon-and-strategy, not rewrite)

Five small, sequenced passes. Each pass is **bounded to a single concern** so a reviewer can read the diff in minutes. No page-structure changes; no UI changes; no new modules.

### Pass 0 — Move ABM SOP into the corpus (housekeeping)

- Copy `/Users/ba/Downloads/ABM SOP.pdf` → `/Users/ba/Desktop/GPC Training Material/extracted/.../ABM SOP v1.0.pdf` (folder TBD with user).
- Re-run `rasterize_pdf_tree.py` → re-run `extract_gpc_corpus_to_markdown.py` + `extract_gpc_corpus_structured.py`.
- The ABM SOP becomes a citable anchor in `gpc-training-corpus-structured.md`.

**Output:** ABM has a real corpus anchor. No module edits yet.

### Pass 1 — Source-linkage debt (high-leverage, low-risk)

Per-module `reference_files` audit. For each of the 8 hub-only modules, propose **2–4 named PDF deep links** that already exist in the corpus, with the structured-extract anchor cited in the PR description. **Order of attack:**

1. `account-based-marketing` (add ABM SOP)
2. `operational-business-reviews` (add OBR SOP + Sales Readiness Form)
3. `product-itv` (add iTV Product Sheet 2024)
4. `competitive-positioning` (add 4–6 named battlecards)
5. `product-connectivity` (add DIA/SIA comparison + Managed Ethernet sheet + Fiber-vs-Starlink + Fiber-vs-5G)
6. `product-security-and-sd-wan` (add SD-WAN sheet + MNS + Managed Firewall + DDoS sheet + DDoS Reporting Terms)
7. `product-cloud-wifi-and-backup` (add Cloud Connect + Managed Wi-Fi + 5G Product Launch)
8. `product-uc-voice-and-collaboration` (add 4 UC plan sheets + Contact Center datasheet)
9. `portfolio-and-business-capabilities` (add Business Capability Presentation)

**Output:** Every concrete claim has a paper trail. No body copy changed yet.

### Pass 2 — Hallucination triage (targeted line-level)

Per module, list every **uncited numeric or named-product claim** in the body. Then for each one:

- **Verified** in the structured corpus → leave alone (or add an inline anchor for the bold few that matter most).
- **Plausible but unanchored** → mark with a TODO comment in a side doc (not in `content.md` — keep page clean) and queue for SME confirmation.
- **Not found in corpus** → flag explicitly; either replace with a generally-true statement or remove.

**Specific lines flagged today** (sample, not exhaustive):

- `product-cloud-wifi-and-backup` Deep Dive: `Kajeet Sentinel`, `Cradlepoint X20`, metro list `Omaha, Chicago, Denver`, `>12 GB / >20 GB / >30 GB` deprioritization tiers.
- `product-security-and-sd-wan` Objection: "**Gartner has ranked VMware VeloCloud at the top of the leader quadrant**" — verify against current battlecard wording before keeping.
- `product-uc-voice-and-collaboration` Objection: "**J.D. Power 7×**" trust line — likely partner-collateral statistic; confirm against the partner FAQ before quoting externally.
- `product-connectivity` Deep Dive: `~$354 / $547 / $860 / $1,060/mo list` DIA pricing referenced as "internal SD-WAN training doc" — name the doc explicitly.

**Output:** A short *flagged-claims* log (separate file, not in modules) for SME pass.

### Pass 3 — Voice-tightening on the four 🔴/🟠 leaders (ABM, OBR, UC, Cloud-Wi-Fi-Backup)

For each, **one-page editorial pass** that:

- Lifts 1–3 phrases **verbatim** from the source (ABM: "Rolling Three", "Door Pull"; OBR: "Slick", "No Raw Dump", "Single Packet").
- Names 1–2 landmines/shortcuts the way ROE does ("Sent-Folder Defense", "Cowboy Grab" — ABM equivalent: "All-Executive Mix", "Silent Skip"; OBR equivalent: "Raw-Dump Handoff", "Late Slick").
- Rewrites Coffee Summary bullets so each one *answers a question a rep asks on day 1* (e.g., ABM: "How many can I run at once?" → "Three active + three on-deck — Rolling Three").

No section additions, no removals. Just sentence-level voice work.

**Output:** Each of these four modules reads in the ROE/SF voice without a structural change.

### Pass 4 — Knowledge-check parity

- Bring each module's `knowledge_checks` into the **5–10 range**, letting the source material set the count (rule updated 2026-05-11). A tight SOP earns 5; a multi-plan product family earns closer to 10. Every KC should be answerable from a specific line in the cited source.
- Concrete targets after the 2026-05-11 baseline shift:
  - **ABM** — shipped at **5** (SOP-tight; commit `7d3e5bf`).
  - **OBR** — shipped at **5** (SOP-tight; commit `7d3e5bf`).
  - **iTV** — currently 4; expand to **5–8** using direct collateral lines.
  - **UC** — landed at **7** after the 2026-05-11 expansion (was 3 at the start of this commit; the earlier de-fluff pass had already pruned from 15). Plan-tier discovery, UC-Pro Call Center vs dedicated CCaaS, video participant ceiling, and SE-escalation triggers (IPN/IVR/CRM-CTI) were added, all grounded in the four UC plan sheets + Contact Center datasheet.
  - **cloud-wifi-and-backup** — currently **6** (already in range; no action unless trimming sharpens further).
- Confirm every other module's KC explanations cite the document, not generic prose.

**Output:** Catalog-wide KC density inside the 5–10 range, with provable explanations and each question grounded in a specific source-document line.

### Pass 5 — Acceptance loop (lightweight)

- One acceptance review pass per module after edits land, against this checklist:
  1. ☐ Every Coffee Summary bullet maps to a specific line in `reference_files`.
  2. ☐ Every body-section claim that names a number or product is anchored or generalized.
  3. ☐ At least one named landmine/shortcut exists in scenarios or pitfall flips.
  4. ☐ KC count is in [8, 12] and each explanation cites the source doc.
  5. ☐ Voice spot-check: read first three Coffee Summary bullets — do they sound like ROE/SF?

**Output:** A "world-class" pass mark per module that we can carry forward in commit messages.

---

## 5. Open questions — *resolved 2026-05-11*

1. **ABM SOP placement →** **Link only**, do not move the PDF into the corpus tree. Use the SharePoint folder: `https://gpcom.sharepoint.com/:f:/r/sites/gpcSales/Sales%20Process/Account%20Based%20Marketing%20-%20ABM`. Action: add to `account-based-marketing/content.md` `reference_files` (Pass 1).
2. **Full ROE PDF →** ROE is genuinely **1 page**. No re-raster needed. Module stays 🟢.
3. **Hallucination-suspect lines → strike all three:**
    - `product-cloud-wifi-and-backup`: remove **Kajeet Sentinel** reference.
    - `product-security-and-sd-wan`: remove the **Gartner / VMware VeloCloud "leader quadrant"** claim.
    - `product-uc-voice-and-collaboration`: remove **"J.D. Power 7×"** trust line.
4. **Pricing visibility → no pricing in Sales Navigator pages.** We can *speak to* pricing in prose and *link the protected SharePoint PDF* in the resources section; we do not embed list rates. Action: scrub the three pricing blocks in `product-connectivity` (DIA list), `product-security-and-sd-wan` (SD-WAN/SIA/DIA grid), and `product-cloud-wifi-and-backup` (LTE/5G/Broadband MRC + objection-card `$68/month` line). Internal-policy thresholds in `sales-operations-and-approvals` (e.g. `$50k`/`$500k` *approval bands*, `$150+` *fiber MRC threshold*, `≤$30 MRC` *commission rule*) are **governance numbers, not product prices** — leave in place.
5. **UC branding hierarchy →** **GPC UC** is the approved external brand. **Ascend** is the application name sold under that umbrella (safe to mention). **Unite** is the same thing sold direct by Intermedia (internal context only — do not lead with externally). Action: tighten the UC module's "naming noise" / brand line in Pass 3 to match.

---

## 6. Anti-patterns to actively avoid in this work

- **Do not** restructure pages. Sections like `## At a glance`, `::: elevator`, `::: flip`, `## Technical Deep Dive [deep]`, and discovery-game iframes stay put.
- **Do not** import the entire SOP table verbatim into `content.md`. The whole point of the structured corpus is that the SOP lives *next to* the module, not *inside* it.
- **Do not** chase 100% provenance on every adjective. A "fiber-first access" line is fine without a footnote; a "**$68/mo MRC**" line is not.
- **Do not** delete partner claims that pass legal — flag them with `[verify-partner-wording]` in PR notes and move on.

---

## 7. Suggested first commit (after user signs off on §5)

`docs(reconciliation): inventory + step plan; no module edits yet` — this document only. Everything else lands in subsequent, scope-bounded commits in the Pass-0 → Pass-5 sequence above.
