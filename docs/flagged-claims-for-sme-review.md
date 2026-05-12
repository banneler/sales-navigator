# Flagged Claims — SME Review Queue

> **Purpose.** This file inventories **concrete-but-uncited claims** across the Sales Navigator module corpus. Each item is a stat, model number, percentage, trademark, or comparative claim that *appears in a module body* but does **not** have an explicit anchor in a parsed corpus PDF.
>
> **Disposition options** for each item:
>
> 1. **Cite** — point at an internal source PDF (SOP / battlecard / plan sheet / partner FAQ) and keep the claim as-is.
> 2. **Reword** — soften the claim to neutral language that doesn't depend on the specific number.
> 3. **Strike** — remove the claim entirely from the module.
>
> This is **not** a hallucination list. Many of these claims may be true and supported by partner FAQs, internal SLA agreements, carrier-network terms, or analyst reports that we simply haven't parsed into the corpus yet. The fix is to **source them or soften them**, not to assume they're wrong.

---

## Open items

### `product-uc-voice-and-collaboration`

| # | Claim | Location(s) in module | Likely source | Suggested disposition |
|---|---|---|---|---|
| UC-01 | **`99.999%` uptime SLA** | Coffee Summary (line 33); Scenario "The Microsoft Native Trap" (line 94); At-a-glance (line 114); Elevator Pitch (line 124) | Partner (Intermedia) SLA documentation — not in current corpus | **Cite** — verify the SLA wording against the partner contract; if the contract guarantees `99.999%`, drop a `[per Intermedia SLA — see partner FAQ]` anchor in the body. If only marketing language, **reword** to "carrier-grade uptime backed by Intermedia's published SLA." |
| UC-02 | **`100+ business voice features`** | At-a-glance (line 114) | Aggregate of the four UC Plan Sheets — defensible but not explicitly cited | **Cite** — point at the plan-sheets in `reference_files` (Pass 1) so the feature count gains explicit provenance. Alternatively **reword** to "the full PBX feature set is laid out per tier in the plan sheets — see Resources." |
| UC-03 | **`~6% of Microsoft Teams users actually use Teams Phone`** | Technical Deep Dive — "The Teams Embedded Advantage" (line 152) | Likely an Intermedia partner-FAQ statistic; could also trace to Microsoft's own user-adoption disclosures or a third-party analyst report | **Cite** the original source (analyst / Microsoft / Intermedia FAQ). If unsourceable, **reword** to "the vast majority of Teams users never adopt Teams Phone — its license cost and limited PBX feature set keep adoption low." |

### `product-cloud-wifi-and-backup`

| # | Claim | Location(s) | Likely source | Suggested disposition |
|---|---|---|---|---|
| CWB-01 | **`~12 GB/day` deprioritization threshold** | Technical Deep Dive — backup objection-card (line 151) | Verizon/AT&T MVNO terms (Kajeet wholesale contract — Kajeet is verified at `gpc-training-corpus-structured.md:2276-2284` as our LTE carrier partner, but the specific 12 GB/day tier is not in the parsed corpus) | **Cite** the partner-network-terms document if available. Otherwise **reword** to "wireless carriers apply data-prioritization tiers — heavy daily usage during failover slows down once the tier threshold is hit; design accordingly." |
| CWB-02 | **`up to ~100 Mbps and higher` typical throughput** | Technical Deep Dive — wireless broadband caveat (line 159) | `GPC Wireless Internet 5G Product Launch.pdf` (parsed) and/or `5G Wireless Internet Broadband Product Sheet 042426.pdf` (in `~/Downloads`, not yet in the rasterized tree) | **Cite** — spot-check the Product Launch deck for the verbatim throughput language; anchor with `[per 5G Product Launch deck, slide N]`. Then move the Broadband Product Sheet into the corpus so the Pass 1 reference link can resolve. |

### Cross-module — pricing scrub follow-up

The Pass 2 strike of customer-facing list prices (commit `cc6c75f`) cleared the major offenders, but the following acceptable references remain in module body text — these are **policy thresholds, not product prices**, and per the resolved Pass-2 question they should stay:

- `sales-operations-and-approvals`: `$50k / $500k` approval bands, `$150+` fiber MRC threshold, `≤$30 MRC` commission rule
- `operational-business-reviews`: `~$40M regional logistics company` (roleplay persona size — narrative context, not a product price)

These do **not** need flagging. Documenting here so the next reviewer knows they were considered and intentionally retained.

---

## Resolved items

*(none yet — items move down here once cited, reworded, or struck)*

---

## Maintenance

- New flagged claims discovered during Pass 5 acceptance runs land in **Open items** above.
- When a claim is resolved (cited, reworded, or struck), move the row from Open to Resolved and reference the resolving commit hash.
- Pass 1 deep-linking will let several of these resolve naturally (UC-02 in particular will auto-resolve once the four UC Plan Sheets are deep-linked in `reference_files`).
