# Current vs. Proposed Content — A Sales Enablement Walkthrough

> **Framing.** Two contrasting training/onboarding artifacts for the same 14-module Sales Navigator. I'm reading them as a Sales Enablement lead, not a developer. The question I'm answering is *"if I could take the best of both, what would the ideal page look like?"* — and where each version is already winning, so we don't pave over hard-won detail in the rebuild.
>
> The two artifacts I'm comparing:
>
> - **Current** — the shipped `modules/*/content.md` corpus that's live in the Sales Navigator today.
> - **Proposed** — the blank-slate, source-grounded design from `docs/proposed-content-from-source-v2.md`.
>
> One disclaimer up front: **two modules (Getting Started and Map Book) don't have a `content.md` file in the current build.** They're rendered through JS components, so the "content" comparison for those two is more about *whether the proposed content layer should exist at all*, and if so, what shape.

---

## What each artifact is *for*, in one breath

- **The current corpus is a working sales tool.** It's been shaped by real conversations, real customer objections, and real commission disputes. You can hear the operator's voice in it — Pete vs. Jerry Ehrenberg, the License Blender, the Static-IP Trap, "temporary wireless is non-commissionable." It's tightly bounded, opinionated, and shows its operational scars.
- **The proposed corpus is a source-faithful re-derivation.** It's what the content would look like if a careful editor read all 135 PDFs plus the ABM SOP and wrote out everything the source actually teaches. It's exhaustive, citation-tagged, and reads like a well-organized field reference.

Both are valuable. Neither one *replaces* the other. The hybrid play is to **keep the current's voice and operational scars as the chassis, and layer the proposed's source-faithful depth in as the reference / deep-dive material** — so reps get the punchy, opinionated front page when they're prepping for a call, and the comprehensive source-grounded body when they need to actually study.

---

## Cross-cutting observations

Six patterns emerge when I read these side-by-side:

### 1. Voice — the current wins, by a lot

The current corpus has a *narrator*. It talks to reps the way a tenured manager talks to a new hire over coffee:

- *"Don't be a cowboy."*
- *"The 'Sent Folder' Defense."*
- *"Slow down. Yes, it's open by the numbers, but a blind outreach burns internal bridges."*
- *"Stop selling SKUs."*
- *"You just lost all your leverage. You are now playing their game."*
- *"Throwing bandwidth at a latency problem doesn't work."*

The proposed has competent expository prose but reads more like a vendor's product datasheet:

- *"DIA carries an SLA backed by the NOC."*
- *"The competitive answer is almost always the same shape."*
- *"GPC UC is the approved external brand."*

Both are accurate. The current's voice is what makes reps actually retain the content. **Voice is a load-bearing wall — don't let the rebuild knock it down.**

### 2. Named landmines — both have them; the current is richer than I first credited

When I wrote the proposed document I formalized "Named Landmines" as if it were a new framing. Reading the current carefully, **it already does this — often better, with more cultural texture.** The current's named pitfalls:

| Module | Current's named landmines |
| --- | --- |
| Sales ROE | The Cowboy Grab · The Sent Folder Delusion · The Rogue Reassignment · The USAC Trap · The 5-Day Clock · The Duplicate Disaster |
| Sales Process | The 11th Hour Signer · The 'I'll skip creating the opportunity' trap · The closed/lost deletion |
| Sales Ops & Approvals | The Pre-Install Pivot · The Orphaned Document · The MAC Mistake · The slow lane (Manual Validation) |
| Portfolio | The Commodity Trap · The single-throat-to-choke flip · The "too small for an enterprise stack" flip |
| Connectivity | The SIA Squeeze · The Starlink speed-test trap · The VPN-over-Internet objection |
| Security/SD-WAN | The "we manage our own Cisco gear" objection · The "our current solution works fine" trap · The NGFW-included assumption |
| Cloud/Wi-Fi/Backup | The Jittery Cloud · The Fiber-Island Bridge · The Static-IP Trap |
| UC | The Microsoft Native Trap · The License Blender · The plan-tier landmine (defaulting to Enterprise) |
| Competitive | The "fiber is fiber" speed-test argument · The Starlink rural-clinic reframe · The "national carrier is cheaper" CFO ask |
| ABM | Skipping ahead in the ABM sequence · The All-Exec Stack · The Empty Bench |
| OBR | The 5-Day Promise · The Raw-Dump Reflex · The Modernization Lever |

**Recommendation:** The "Named Landmine" framing is fine to apply consistently, but recognize that the current is already doing it. The proposed's contribution here is **mostly additive examples**, not a structural innovation.

### 3. Discovery questions — close to a wash; current is slightly more customer-language

Both have ~5 discovery questions per module (where they exist). The current's questions tend to be in the customer's language:

- *"If your primary internet connection drops at 2:00 PM on a Tuesday, what exactly happens to your operations and revenue?"*
- *"Are your employees complaining about dead zones or slow connections in specific parts of the building?"*
- *"What happens to your customer experience if there is a 500-millisecond delay on your voice and video calls?"*

The proposed's questions sometimes drift into rep-language (self-checking):

- *"Does this account meet the Strategic threshold to justify a 90-day ABM cycle..."*
- *"Have I completed all six Sales Readiness Checklist items..."*

Both are useful but they're doing different work. The current's questions are **conversation starters**; the proposed's questions are **rep self-audit prompts.** A well-built module probably wants both — clearly labeled.

### 4. Knowledge Checks — proposed is more numerous and source-tagged; current is more conversational

The proposed averages 7-10 KCs per module; the current averages 5-9. The proposed's KCs are uniformly tagged back to source PDF pages (e.g., *"(source: Business Capability Presentation, page 3)"*), which is a **governance superpower** even if learners never see those tags. It means an editor can audit every claim back to its anchor.

The current's KCs are less consistently sourced but have more personality (*"The 'Sent Folder' Defense"* as a question framing, etc.).

**Recommendation:** Adopt source-tagging as a **production discipline** (tag in front matter even if not rendered), keep the current's conversational tone for learner-facing answer explanations.

### 5. Roleplay specs — the current has them, the proposed doesn't surface them

Every current product module has a structured `roleplay` block:

```yaml
roleplay:
  persona: IT Manager at a healthcare clinic network
  scenario: Had a fiber outage last month...
  goal: 'Position 5G backup as a managed, automatic failover...'
```

The proposed treats roleplay as out-of-scope (since it's a UX feature). But the *content* in those roleplay blocks — the personas, the scenarios, the explicit goals — is some of the strongest narrative content in the current corpus. Reps don't get that anywhere else. **Keep the roleplay blocks; they're load-bearing content, not structural fluff.**

### 6. Tables, plan ladders, and reference grids — proposed is the clear winner

The proposed leans heavily on tables and structured reference grids:

- The full SIA vs. DIA comparison grid
- The UC plan ladder (Resource Line → Express → Essentials → Pro → Enterprise)
- The Fortinet platform tier table (FG-30G / 50G / 70G / 90G / 100F / 120G / 400F)
- The 5G Backup throttling table (12 GB / 20 GB / 30 GB → 50 / 25 / 3 Mbps)
- The OBR 21-business-day phase table with named owners
- The Approval Matrix Payback × Term grid

The current has *some* tables, but more often opts for narrative bullets. **The proposed's tables are the single most reusable artifact in the rebuild.** A rep needing to look something up mid-call can find a table 5× faster than the same content in prose. **Port the proposed's tables wholesale into the current's deep-dive sections.**

### 7. What current has that proposed doesn't

Three structural elements the proposed deliberately skipped that are content-bearing in the current and shouldn't be lost:

- **Elevator pitch blocks** (`::: elevator [Elevator Pitch]`). One-paragraph, customer-facing pitch in the rep's voice. These are *content* — keep them.
- **Flip cards in Common Pitfalls / Objection Handling sections** (`::: flip [...]`). Two-sided objection-response cards. These are *content* — keep them, even though the UX is structural.
- **Reference files arrays** with verbatim SharePoint URLs. The current's links are more developed than the proposed's. **Keep current's link inventory.**

---

## Module-by-module walkthrough

Each section follows the same shape: **Snapshot · Keep from current · Swap in from proposed · New elements to consider · My hybrid recommendation.**

---

### Module 1: Getting Started

**Snapshot.** Current: a JS-rendered welcome page that does **two jobs at once** — it's a playful welcome for brand-new team members *and* a working demo of the site's UI patterns (Coffee Summary, KCs, flip cards, the visual vocabulary reps will see for the next 13 modules). No `content.md` file. Proposed: a full content module (At a Glance + portfolio walk + four reasons + how-to-use-this-Navigator + KCs + scenarios) built as if the page were a standard product module.

**Preservation directive (locked).** When we port Getting Started to a `content.md` that matches the rest of the site's structure, **the existing demo-of-the-site + playful-welcome content stays intact**. The port is a **structural alignment**, not a content rewrite. Whatever the JS component renders today — the welcome tone, the UI-pattern showcase, the Coffee Summary frame — that's the page's reason for existing on a new hire's first day. Don't sand it down to look like the product modules.

**Keep from current.** All of it. The welcome voice, the playful framing, every UI-pattern demonstration the page uses to introduce reps to the Navigator's vocabulary (Coffee Summary, flip cards, KCs, scenarios). The Coffee Summary specifically is referenced everywhere else in the suite and is a brand-defining moment — keep it in its current form, not reformatted as a generic "At a Glance" block.

**Swap in from proposed.** Effectively nothing structural. The proposed's wholesale shape (At a Glance + portfolio walk + four reasons + decision tree + KCs + scenarios) treats Getting Started as if it were a 14th product module. **It isn't.** It's the front door. The job of the port is to give the front door the same *file shape* as the other modules so editors aren't context-switching — not to retrofit a different page's content into it.

**New elements to consider — additive only, not displacing the welcome.** Two pieces from the proposed are genuinely useful *if* they can sit alongside (not replace) the existing welcome content:

1. The **"Where do I go next?" wayfinding** — a brief, opinionated route through the other 13 modules based on role/immediate need. This is meaningful net-new content for a Day-1 rep who finishes the welcome and asks *"ok, now what?"* It's the natural exit ramp out of Getting Started.
2. The **portfolio-in-deck-order one-glance grid** as an optional "things you'll learn about" preview. Strictly preview / teaser, not a content section that competes with Module 5.

Both belong **below** the welcome content, not in place of it.

**Hybrid recommendation.** Port the current JS-rendered welcome content into `getting-started/content.md` **verbatim** — preserving the demo-of-the-site role and the playful welcome tone exactly as it reads today. The file just needs to *match the front-matter shape* of every other module (`id`, `title`, `summary`, `five_minute_summary` carrying the Coffee Summary, etc.) so the editor and renderer pipelines treat it consistently. Optionally append the wayfinding "where to go next" block from the proposed as a *footer* to the page, clearly separated from the welcome. **The welcome is the chassis here, not the Coffee-Summary-plus-KC pattern.**

---

### Module 2: Sales Rules of Engagement

**Snapshot.** Current is *strong* — strong voice, 9 KCs, 2 named scenarios with cultural texture ("The 130-Day Ghost Town", "The Sent Folder Defense"), 6 named pitfalls. Proposed is a clean source-faithful re-derivation of the 1-page ROE PDF.

**Keep from current.** Everything that's already there. The voice is best-in-class. *"Don't be a cowboy"*, the 5-day inbound clock framing, "Search before you create" — all stays. The 6 flip-card pitfalls especially.

**Swap in from proposed.** Two small additions:

1. The explicit **ENA (Education Networks of America, Indiana)** exception under the USAC/E-Rate Strategic carve-out. The current mentions "with noted exceptions" but doesn't name ENA. The proposed names it. **Adding the name makes the carve-out actionable.**
2. The **"~80% of cases fit the ROE; the other 20% goes to sales management"** framing. The current implies this; the proposed states it. Helpful for reps deciding whether to escalate.

**New elements to consider.** None significant.

**Hybrid recommendation.** Current stays as the chassis. Surgical edits: add ENA exception by name, add the 80/20 framing line.

---

### Module 3: Sales Process & Salesforce

**Snapshot.** Current is **substantially more developed** than proposed: named coaches (Amy Wettering, Fritz Antoine) with photos and emails, structured video sections walking through the actual Salesforce training videos, Check-In 1 / GPC Solution / multi-site flow, Conga/DocuSign specifics, "five_minute_flow" stepper. Proposed gives a cleaner Lead-to-Change-Order narrative pulling from the QRG corpus.

**Keep from current.** Everything. The named coaches with contact info, the video sections, the five-minute flow stepper, the Closed/Won → projects → Change Order / MAC distinction. This is *the* module a new hire grinds through in their first week — the depth is the point.

**Swap in from proposed.** The proposed's nine-Contact-Role enumeration (Sales' Main Contact, Influencer, Decision Maker, Project Contact, Billing Contact, Property Manager, General Contractor, IT/Technical, Phone System Contact, Agent, Business User, Other) with the explicit *"Project Contact + Billing Contact + Property Manager are required on every Closed-Won Solution"* rule. The current covers this less crisply.

**New elements to consider.** The proposed's Costing Routing distinction (New vs. Existing Services, Strategic Build, Zone Parent, Reusable) is **the single biggest content gap in the current** — Costing Routing barely shows up. A rep dealing with multi-site costing fails today because the current doesn't teach it; the proposed does. **Strong candidate to port over.**

**Hybrid recommendation.** Current stays as chassis. Add a "Contact Roles" sub-section borrowing the proposed's 9-role enumeration. Add a new **"Costing Routing & Reusable Matrix"** sub-section using the proposed's content nearly verbatim.

---

### Module 4: Sales Operations & Approvals

**Snapshot.** Both are strong. Current has a beautifully structured tabbed view (Pre-Approved Fiber / Approval Requirements Matrix / Change Order vs MAC) and operational depth (the $150 MRC floor, 500-feet rule, Zip 68102 exclusion, the fiber-cannot-cross-railroads constraint). Proposed has a cleaner Payback × Term ladder.

**Keep from current.** The tabbed Pre-Approved / Matrix / Change-Order structure is excellent UX *and* excellent content. Keep it. The operational footnotes ($150 MRC, 500 ft, Zip 68102, fiber-crossing rules) are field-tested wisdom that doesn't exist in the proposed.

**Swap in from proposed.** The full **Payback Months × Contract Term** auto-approve table (0-23 mo → 1, 24-35 mo → 12, etc., all the way to 120+ mo → 44). The current implies this scaling; the proposed lays out the full grid. **Adopt the table verbatim.**

**New elements to consider.**

- The proposed's explicit **"Dark Fiber always requires Manager + CRO regardless"** rule is highlighted more clearly than in the current.
- The proposed's call-out that **"Strategic Build bypasses Payback Months entirely"** is in both — but the proposed states it as a clean rule, the current buries it in prose.

**Hybrid recommendation.** Current stays as chassis. Port the Payback × Term grid table. Pull Dark Fiber and Strategic Build bypass rules into a "Two universal rules" callout box.

---

### Module 5: Portfolio & Business Capabilities

**Snapshot.** Current is **richer** — five-minute summary in opinionated voice, discovery questions, named scenarios, an embedded **Discovery Run game** (iframe to `portfolio-level-1`), and a Skeptical-CFO roleplay. Proposed has more thorough deck content — every product in deck order, full Cox battle-card data, the four "why GPC" reasons spelled out.

**Keep from current.** All of it. The **"Stop selling SKUs"** framing, the **"Commodity Trap" scenario**, the **Skeptical-CFO roleplay**, the embedded Discovery Run game. This module is the *philosophy* gate before the product modules; the current's voice does that work.

**Swap in from proposed.** Two specific additions:

1. **The 10-product portfolio table** (in deck order, with the one-line value prop for each). The current names the products but doesn't lay them out as a quick-reference grid.
2. **The Cox battle-card comparison table** (GPC vs. Cox: delivery method, symmetrical speeds, auto-renewals, install fees, activation fees). This is reused in Module 11 — bring it forward here as the proof point for "why GPC over a national cable carrier."

**New elements to consider.** The **video-testimonial QR code** the deck offers. The proposed mentions it; the current doesn't surface it. **Customer-facing meetings benefit from a "scan to watch other customers say it" moment** — this is a small addition with high in-meeting leverage.

**Hybrid recommendation.** Current stays as chassis. Add the portfolio grid + Cox comparison table + QR-code call-out.

---

### Module 6: Connectivity & Access

**Snapshot.** Current is concise and roleplay-rich; proposed is more comprehensive (full DIA vs. SIA grid, Wave specs, 8-page Starlink card walkthrough with latency-requirements table).

**Keep from current.** The **SIA Squeeze scenario**, the **Skeptical IT Director roleplay**, the embedded **Discovery Galaxy** game iframe, the **objection cards** ("DIA is too expensive", "Starlink gets 150 Mbps", "We use VPNs over our internet"). The voice and the game UX are doing the work here.

**Swap in from proposed.** Three table additions:

1. The **full DIA vs. SIA comparison grid** (delivery methods, bandwidth model, speeds, static IPs, DDoS, latency, support tier, access diversity). This is the single most useful artifact for a rep deciding which product to quote.
2. The **fiber-vs-Starlink latency requirements** table (Video Calls <50 ms, VoIP <150 ms, POS <100 ms, etc., with Fiber 5–15 ms vs. Starlink 21–30 ms). Concrete numbers reps can quote in-call.
3. The **fiber vs. 5G capability split table** (which technology wins on which dimension). Useful for the inevitable "why not just 5G?" objection.

**New elements to consider.**

- The proposed's **E-Line / E-LAN structural breakdown** (EPL, EVPL, EP-LAN, EVP-LAN) is more crisp than the current's. Multi-site Ethernet reps will use this.
- The proposed's **"DIA fiber-only / SIA supports fiber+copper+coax"** distinction is more explicit than in current. Worth surfacing — it's a deal-breaker question on some Ethernet RFPs.

**Hybrid recommendation.** Current stays as chassis. Port the three tables into the Technical Deep Dive. Add the E-Line / E-LAN subsection.

---

### Module 7: Security & SD-WAN

**Snapshot.** Current is strong on operational nuance (NGFW optional add-on, BGP/ASN SE handoff, MNS umbrella positioning, proactive vs. on-demand DDoS mitigation windows). Proposed has the Fortinet platform tier table and the 60% public-broadband savings stat.

**Keep from current.** The voice (*"We put policy on the pipe"*), the **"on-demand DDoS is fine, we're not a target"** objection card, the **NGFW-is-optional** warning, the BGP/ASN SE-engagement rule, the **MNS umbrella vs. Managed Firewall alone** distinction. The Skeptical IT Director (regional bank, 12 branches) roleplay is excellent.

**Swap in from proposed.** Three additions:

1. The **Fortinet platform tier table** (FG-30G / 50G / 70G / 90G / 100F / 120G / 400F with firewall and IPS throughput per model). Reps scoping a Managed Firewall deal will use this every time.
2. The **60% public-broadband savings** stat from the Investment Advisory Services SD-WAN use case. Concrete, sourced, and quotable.
3. The **proactive vs. on-demand DDoS side-by-side table** (with the explicit "weekdays 8 am – 5 pm" mitigation window on On-Demand). The current describes this in prose; the table makes it instantly scannable.

**New elements to consider.** The **Managed Network Security six-component breakdown** (Managed Firewall + Firewall Management + Firewall Plus with SIEM + Assessments + Vulnerability Scanning + Managed Email Security) is in both, but the proposed lays it out crisper as a 6-row reference. Worth porting.

**Hybrid recommendation.** Current stays as chassis. Add three tables to the Technical Deep Dive (Fortinet tiers, DDoS Proactive vs. On-Demand, MNS components). Add the 60% savings stat as a customer-facing proof point.

---

### Module 8: Cloud, Wi-Fi & Backup

**Snapshot.** Current is **the strongest module in the entire suite**, full stop. It has operational depth nothing else matches: Cradlepoint X20-5G hardware, Kajeet underlay, the static-IP DHCP gotcha during failover, "in-territory only", "attaches only to SIA/DIA/SD-WAN — never standalone", **temporary wireless is non-commissionable** (the commission rule that determines real-world pipeline planning), the new video carousel for the 5G launch deck, Plume WorkPass distinction from enterprise Wi-Fi. Proposed has the throttling table at higher precision.

**Keep from current.** Everything. This module is the bar the rest of the suite should be measured against. The Jittery Cloud scenario, the Fiber-Island Bridge scenario, the Static-IP Trap scenario, the healthcare-IT-manager roleplay, the video carousel, the explicit commission rule on temporary wireless. **Do not touch this module's voice or scenarios.**

**Swap in from proposed.** One specific addition: the **full Backup throttling table** in cleaner tabular form (12 GB → 50 Mbps, 20 GB → 25 Mbps, 30 GB → 3 Mbps). The current has the 12-GB throttle in prose; lay it out as a 3-row table so reps can quote the cap honestly to a customer setting expectations.

**New elements to consider.** The proposed's explicit **AT&T-tested 239 Mbps down / 22 Mbps up** vs. **Verizon rate-limited to 100 Mbps** stat. Real numbers. Current doesn't surface these. Useful for setting honest expectations with customers asking "how fast is 5G actually?"

**Hybrid recommendation.** Surgical edits only. Add the throttling table. Add the AT&T/Verizon-specific throughput stats. **Do not rewrite this module — it is the gold standard.**

---

### Module 9: GPC iTV

**Snapshot.** Both modest. Current does a nice job of qualifying the access path (don't sell iTV to a non-GPC-Internet customer) and the lineup-is-market-dependent QR-code nuance. Proposed adds a couple of small landmines.

**Keep from current.** The roleplay (frugal retail owner / coffee shop / two screens), the "competitor ISP" scenario, the lineup QR-code handling, the qualification of *who provides Internet today*. The voice is good.

**Swap in from proposed.** The **"No Equipment Promise" landmine** — the explicit reminder that some setups need set-top boxes at a low monthly rate. Current mentions this; proposed names it as a pitfall framing. Useful.

**New elements to consider.** Honestly, this is the lightest module in either version because the source is one product sheet. There's not much to do here. The module could probably stay as-is.

**Hybrid recommendation.** Current stays. Optional small edit: add "No Equipment Promise" landmine framing.

---

### Module 10: UC, Voice & Collaboration

**Snapshot.** Current is **significantly more developed** than proposed. Brand hierarchy (GPC UC / Ascend / Unite) is in current, with the Intermedia footnote. The License Blender scenario distinguishes Embedded UC vs. Ascend with Teams (Direct Routing) — *that distinction does not exist in the proposed at all*, and it's the single most important UC nuance for new reps to internalize. The current also has the IPN/OffNet porting + CRM CTI SE handoff rule (porting under active carrier contract). 5-video carousel. The plan-tier-vs-workload table is in current.

**Keep from current.** Everything. Especially:

- **The License Blender scenario** (Embedded UC vs. Ascend with Teams with explicit MS-Teams-Phone-license-required distinction).
- **The brand hierarchy** (GPC UC / Ascend / Unite, with the "don't lead with Unite externally" rule).
- **The plan-ladder-vs-workload table** (Express / Essentials / Pro / Enterprise with "lead with when..." column).
- **The IPN/OffNet porting + CRM CTI SE handoff rule.**
- **The Microsoft Native Trap scenario.**
- **The video carousel** (5 videos: Premises to UC, Microsoft Teams, Desktop app, Mobile app, Work better wherever).

**Swap in from proposed.** Three additions:

1. The **Resource Line tier** — the current's plan ladder has 4 tiers (Express → Enterprise). The proposed's adds Resource Line as a 5th tier at the bottom (1 concurrent endpoint, no apps, for standalone resource lines / front-desk / lobby phones). **This is a real licensing tier that the current omits.** Worth adding.
2. The **CC Pro vs. CC Elite feature breakdown** (Pro = baseline omnichannel; Elite adds outbound dialer, supervisor barge-in, geo-routing, queued callback, etc.). Current treats CCaaS as a single concept; proposed distinguishes the two tiers crisply.
3. The **Yealink phone hardware ladder** (T53W Basic / T54W Intermediate / T57W Advanced with display + line-key specs). Current has no phone hardware in the module; proposed adds the ladder.

**New elements to consider.** The proposed's **UC for Teams feature-comparison table** (Teams alone vs. Teams + UC) is a great in-meeting artifact when a Teams-Phone-curious prospect asks "what do I lose with $10/user Teams Phone?" The current alludes to this; the proposed lays it out as a table.

**Hybrid recommendation.** Current stays as chassis. Add Resource Line as 5th tier, port the CC Pro vs. CC Elite breakdown into the Technical Deep Dive, add the Yealink phone hardware ladder. Optionally add the UC for Teams feature-comparison table for customer meetings.

---

### Module 11: Competitive Positioning

**Snapshot.** Current uses a **battle-card image library** rendered as tabs — a strong UX move that surfaces the actual battle-card visuals reps already know. Proposed is a written index synthesizing the "How We Win" pattern across all 11 cards.

**Keep from current.** The **image library tabs** for both Product and Competitor battle cards. The **Discovery Galaxy game**. The strong meta-framework ("discover first, then map proof to pain"). The Starlink-vs-fiber rural clinic scenario. The roleplay (Entrenched IT Manager with the renewal-price-drop ask). The 5 flip cards in Objection Handling. The **"Disengage signals"** call-out at the bottom (bad-faith trash talk, pure price auction, design questions past your lane).

**Swap in from proposed.** Four cross-card additions that don't appear in the current's image library because they're textual narrative, not card content:

1. **The Cox-Charter-Spectrum acquisition framing** — "use as context, not FUD." Specific guidance on what *kind* of conversation to have when Cox is the incumbent.
2. **The T-Mobile / Metronet acquisition nuance** — "residential goes under T-Mobile brand, B2B stays Metronet; could mean instability." Specific Omaha-territory ammunition.
3. **The Allo-leases-from-GPC** factoid — "Allo doesn't fully own their network; they lease fiber from GPC and others." A single line that flips the local-network conversation.
4. **The 100% referenceable customer base** claim from the Omaha Metro card — *"We have a diverse, 100% referenceable customer base."* This is the single most reusable line in the competitive corpus and isn't surfaced in current.

**New elements to consider.**

- The proposed's grouping by **competitive context** (national carrier conversations vs. Omaha Metro upstarts vs. unique alternatives like Verizon/AT&T direct) is a useful **mental model** for which battle card to grab when. Could become a one-screen "decision tree" sub-section.
- The proposed's **service-consolidation framing** for the Managed Firewall battle card ("the win isn't 'we're better at firewalls than your MSP'; it's fewer vendors, single bill, single POC, 24/7 SOC") — current has this conceptually but doesn't surface it as the named pivot move.

**Hybrid recommendation.** Current's image library stays as the front door. Add a **"How We Win — by competitor"** field-reference section below the image library, porting the 4 specific factoids above. Optionally add a one-screen decision tree mapping competitor → which battle card to grab.

---

### Module 12: Account Based Marketing

**Snapshot.** Both source-faithful to the 3-page ABM SOP. Current has the better roleplay scenario (the Sales Manager 1:1 gatekeeping test where the rep has to defend their Rolling Three math, target stack, and Sales Readiness Checklist on demand). Proposed is marginally more § -by-§ structured.

**Keep from current.** The roleplay (it's outstanding — the Sales Manager gatekeeping the slot is the single most realistic ABM coaching moment in the corpus). The named scenarios (Skipping ahead, The All-Exec Stack, The Empty Bench). The discovery questions (which are rep self-audit prompts — appropriate for ABM specifically).

**Swap in from proposed.** Two minor additions:

1. The proposed's **"Door Pull Collaboration Trigger"** — Marketing increases touchpoints by +1 specifically *because* Sales is doing a physical Door Pull. Current mentions Door Pulls but doesn't make the +1 trigger as crisp.
2. The proposed's explicit **"Master Tracking Spreadsheet: View Only for general stakeholders; Edit Access for Marketing and Sales Leadership only"** access-permissions call-out. Current implies this; proposed states it.

**New elements to consider.** None major.

**Hybrid recommendation.** Current stays as chassis. Two surgical line edits per above.

---

### Module 13: Operational Business Reviews

**Snapshot.** Both source-faithful to OBR SOP v1.2. Current has the embedded Gantt image (`assets/gantt/obr-21-day-cycle.png`), the explicit "Pete vs. Jerry Ehrenberg" swap (per user's earlier direction), the "Day 14 is the hinge" framing, and four named email templates with subject-line discipline. Proposed has the same content but is more linear.

**Keep from current.** Everything. The Gantt image embed, the Jerry Ehrenberg swap, the four email templates with verbatim subject-line patterns (`OBR Design Request: [Customer Name] | DUE: 10 Business Days from Today`), the three success criteria framing, the Sales Readiness Form data structure callout, the Modernization Lever scenario, the Raw-Dump Reflex scenario. The VP-of-IT-at-a-$40M-regional-logistics-company roleplay is good.

**Swap in from proposed.** One nuance: the proposed's explicit note that **"3 + 10 + 5 + 5 + 3 = 26 business days, with overlap reducing to 21"** — i.e., Network Design and Data Collection run in *parallel*, not sequentially. The current's table implies this; the proposed makes the math explicit. Useful for reps explaining the timeline to a customer who pushes for a 2-week meeting.

**New elements to consider.** None significant.

**Hybrid recommendation.** Current stays as chassis. Add the timeline math note (3+10+5+5+3 = 26, overlap brings to 21).

---

### Module 14: Executive Map Book

**Snapshot.** Current: a self-contained navigation surface — a separate web app that was already built and embedded into the Sales Navigator as an onboarding resource. No `content.md` file. Proposed: a synthesis-layer content module pulling top-tier executive-facing claims from across the corpus.

**Decision (locked).** The Map Book is **a navigation surface only** at this time. The proposed content layer is **shelved**, not adopted — the priority is making the other 13 modules rock-solid before spending cycles on Map Book content revisions.

**What this means for the rebuild.**

- **No `map-book/content.md` is created.** The JS-rendered navigation surface stays exactly as it is.
- **The proposed synthesis-layer content does not get ported wholesale.** The genuinely portable pieces from it (the four-reason "why GPC" framing, the network-scale claim, the portfolio-in-deck-order grid, the third-party validation roll-up) are re-homed into **Module 1 (Getting Started)** and **Module 5 (Portfolio & Business Capabilities)** as part of those modules' rebuilds. That's already covered in their rows above — no separate work item here.
- **The synthesis module from `proposed-content-from-source-v2.md` for Map Book stays in the proposed doc as reference**, not as a build target.

**Future-state note (parked, not actioned).** Worth keeping on the radar for a later phase: HUD-style learning elements specifically for **transport / Layer 2 / IP** concepts inside the Map Book navigation experience — teaching the network architecture *while* a rep navigates the map. Not a current scope item, but capturing it here so the idea doesn't get lost when the other 13 are rock-solid.

**Hybrid recommendation.** No action on Map Book in this pass. Re-evaluate after the other 13 modules ship the hybrid edits in this document.

---

## At-a-glance hybrid plan (the one-page summary)

| Module | Take from current | Take from proposed | Net result |
| --- | --- | --- | --- |
| 1. Getting Started | **All of it** — playful welcome + demo-of-the-site UI-pattern showcase + Coffee Summary tone, **preserved verbatim** | Optional appended footer: "where to go next" wayfinding + portfolio-in-deck-order teaser grid | Structural port only — match the front-matter shape of other modules; do **not** rewrite the welcome content |
| 2. Sales ROE | Voice + 9 KCs + scenarios + 6 named pitfalls | ENA exception by name; 80/20 framing | Surgical edits only |
| 3. Sales Process & SF | Named coaches + video sections + Conga/DocuSign flow | 9-role Contact Roles enum + Costing Routing & Reusable section | Add 1-2 sections; keep chassis |
| 4. Sales Ops & Approvals | Tabbed Pre-Approved / Matrix / Change-Order + operational footnotes | Payback × Term grid table; Dark Fiber + Strategic Build rule callouts | Port table + 2 rule callouts |
| 5. Portfolio | Voice + scenarios + Discovery Run game + roleplay | 10-product grid + Cox comparison table + video-testimonial QR | Add tables + QR call-out |
| 6. Connectivity & Access | Voice + roleplay + Discovery Galaxy + objection cards | DIA-vs-SIA grid, Starlink latency table, 5G-vs-fiber split, E-Line/E-LAN breakdown | Port 3 tables + E-Line section |
| 7. Security & SD-WAN | Voice + operational nuance (NGFW optional, BGP/ASN SE) + IT-Director roleplay | Fortinet platform tier table; DDoS Proactive vs. On-Demand table; MNS 6-component breakdown; 60% savings stat | Port 3 tables + 1 proof point |
| 8. Cloud, Wi-Fi & Backup | **All of it** — gold-standard module | Throttling table at higher precision; AT&T/Verizon-specific throughputs | Surgical edits only |
| 9. GPC iTV | Voice + roleplay + ISP qualification | "No Equipment Promise" landmine framing | Optional minor edit |
| 10. UC, Voice & Collab | Brand hierarchy + License Blender + IPN/CRM CTI rule + video carousel + plan-ladder-vs-workload table | Resource Line tier; CC Pro vs. CC Elite breakdown; Yealink phone ladder; UC-for-Teams comparison table | Add 4 missing pieces |
| 11. Competitive Positioning | Image library + game + framework + Disengage signals | Cox-Charter-Spectrum framing; T-Mobile/Metronet nuance; Allo-leases-from-GPC; 100% referenceable claim; decision tree | Image library stays; add field-reference section below |
| 12. ABM | Roleplay + scenarios + discovery questions | Door Pull +1 trigger explicit; Master Spreadsheet access permissions | Surgical edits only |
| 13. OBR | Gantt + Jerry Ehrenberg + email templates + roleplay | Timeline math note (26 → 21 with overlap) | Surgical edit only |
| 14. Executive Map Book | JS navigation surface as-is | — (proposed content shelved; portable pieces re-homed into Modules 1 + 5) | **No revisions this pass.** Re-evaluate after other 13 ship. Future-state idea parked: HUD-style transport/L2/IP learning layer. |

---

## What I'd build next, if it were up to me

If I were running this rebuild as Sales Enablement, here's the sequence:

1. **Map Book stays as-is.** Decision locked — it's a navigation surface only, no content revisions this pass. Future HUD-style transport/L2/IP learning layer is parked for a later phase. The other 13 modules get the resources.
2. **Tables first, voice second.** The proposed's tables are the highest-leverage portable artifact. Port them into the current's existing Technical Deep Dive sections module-by-module. This alone is probably a half-day of editing.
3. **Adopt source-tagging as a back-of-house discipline.** Every KC in every module gets a hidden `source:` tag pointing at the PDF and page. Learners never see it; editors get an audit trail. Pulls directly from the proposed's structure.
4. **Three small content gaps to close:**
    - Costing Routing & Reusable matrix in Module 3 (currently absent in the current).
    - Resource Line as a 5th UC plan tier in Module 10 (currently missing).
    - The "service consolidation" framing for Managed Firewall in Module 11 (currently implicit).
5. **Leave Module 8 alone.** It's the model.
6. **Voice review pass.** Once tables and gaps are in, do one read-through with the current's voice as the target. Strip any imported language that sounds like a datasheet.
7. **Optional: rename "Common Pitfalls" / "Named Landmines" to one consistent term across all modules.** Pick whichever the team prefers; just stop having three names for the same thing.

The goal is the same product the current already has — but with the proposed's source-faithful depth available *underneath* it, so an editor can audit any claim back to its origin PDF, and a curious rep can dig into the technical detail without leaving the page.

---

## One last note on the "would you re-run this from scratch?" question

If a hiring manager handed me both documents and said "pick one," I'd pick the **current** every time — and then patch the gaps from the proposed. The current was built by someone who has watched real reps lose real deals, and that voice is unfakeable. The proposed reads like a competent product manager who read every PDF carefully. Both are useful. The current is the foundation; the proposed is the editorial input.

The good news: every recommendation in this document is **additive**, not destructive. There is no module where the proposed should fully replace the current. The rebuild is a sharpening pass, not a tear-down.

