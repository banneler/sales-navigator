---
id: "operational-business-reviews"
title: "Operational Business Reviews"
summary: "21-day cycle. Day-14 handoff. Single Packet. No Raw Dump."
sensitivity: "internal"
reference_files:
  - label: 'Operational Business Reviews — SOP & Sales Readiness Form (SharePoint)'
    sharepoint_url: "https://gpcom.sharepoint.com/:f:/r/sites/gpcSales/Sales%20Process/Operational%20Business%20Review%20-%20OBR?csf=1&web=1&e=EbAsNB"
discovery_questions:
  - When was the last time you walked your strategic accounts through their full network footprint, billing structure, and 12-month performance picture in a single conversation?
  - 'How do you currently surface contract expirations and renewal sync windows on your top accounts—before the customer''s procurement team asks?'
  - When something goes wrong at a strategic account, how does your team translate raw NOC ticket history into something the customer's executive sponsor can act on?
  - Which of your top accounts has billing or service-address data that has not been audited for accuracy in the last twelve months?
  - 'If your customer''s exec sponsor walked into the room tomorrow asking "what is next on the roadmap with GPC," how confident are you in the answer—on paper?'
five_minute_summary: |
  - **The Slick is the deliverable.** A front/back trifold insert with four components: **Network Design** (Current vs. Future State Visio, verified against billing), **Strategic Billing** (totals + expirations, surfaced through the "Modernization" and "Performance Spotlight" levers), **NOC History & Feedback Loop** (12-month performance snapshot + partnership feedback), and **Strategic Roadmap** (planned upgrades, renewal sync, GPC solution highlights).
  - **The 21-business-day cycle with named owners.** Day 1: Account Rep schedules. Days 2–4: Account Rep audits locations and addresses. Days 5–14: **Jerry Ehrenberg** drives the Network Design (10 days, kicked off with a 15-minute call). Days 10–14: **Jill / NOC** generate billing and NOC data (5 days, overlapping). Days 15–19: **Sarah** formats and brands the slick (5 days, with Account Team Final Review). Days 19–21: Sarah and the Account Rep handle print, pickup, and trifold insertion. **Day 21 is the OBR Meeting.**
  - **Success Criteria—the three numbers to memorize.** *Zero Fire Drills* (every asset handed to Marketing by **Business Day 14**), *100% Accuracy* (billing locations and network diagrams synchronized), and *Client Value* (customer leaves with a clear understanding of network health and the roadmap).
  - **The "No Raw Dump" Rule.** Sales must scrub and audit all data before handoff. **Marketing is for design, not data entry or CID deciphering.** Translate internal catalog codes into plain-English service descriptions (e.g., `100M Fiber DIA`).
  - **The "Single Packet" Handoff.** Marketing will not start design until one email lands containing **both** the completed **OBR Sales Readiness Form** (with scrubbed data tables) **and** the finalized **Visio diagram**. Anything less stops the clock.
  - **The Sales Readiness Form is the Source of Truth.** Complete it early. It locks in the strategic copy for Marketing, carries all audited billing/NOC data, and feeds the trifold's narrative.

knowledge_checks:
  - question: How many business days does the OBR cycle run, from initiation through the meeting itself?
    options:
      - 21 business days
      - 14 business days
      - 30 business days
    correct_index: 0
    explanation: 'The SOP defines a 21-business-day cycle, ending with the OBR Meeting on Day 21.'
  - question: '"Zero Fire Drills" is one of the OBR''s three Success Criteria. What does it mean operationally?'
    options:
      - Every asset is ready and handed to Marketing by Business Day 14.
      - No support tickets can be open on the customer's circuits during OBR week.
      - The OBR meeting cannot be rescheduled.
    correct_index: 0
    explanation: '"Zero Fire Drills" is the SOP''s name for the Business Day 14 handoff milestone—seven business days before the meeting, Marketing has everything they need.'
  - question: Marketing will not begin design until the "Single Packet" handoff arrives. What must that single email contain?
    options:
      - The completed OBR Sales Readiness Form (with scrubbed data tables) and the finalized Visio diagram (verified).
      - A raw export from the billing platform plus a verbal walkthrough.
      - A calendar invite for the OBR meeting and the customer's logo.
    correct_index: 0
    explanation: 'Marketing requires one packet, audited and complete. Sending pieces separately—or sending raw data—violates the Single Packet rule and stops the design clock.'
  - question: 'The SOP enforces a "No Raw Dump" rule. What is the stated rationale?'
    options:
      - Marketing is for design, not data entry or CID deciphering. Sales owns the scrub.
      - Raw billing data violates customer NDAs.
      - The Visio software cannot ingest raw exports.
    correct_index: 0
    explanation: 'Verbatim from §3 of the SOP—Sales must scrub and audit data before handoff. Marketing receives audited, plain-English data, not internal catalog soup.'
  - question: 'When you audit billing during OBR prep, the SOP names two specific "sales levers" the slick should surface. Which pair?'
    options:
      - '"Modernization" and "Performance Spotlight"'
      - '"Discount" and "Bundle"'
      - '"Renewal" and "Cross-sell"'
    correct_index: 0
    explanation: 'Strategic Billing on the slick features the "Modernization" lever (e.g., upgrade an aging tier) and the "Performance Spotlight" lever (showcase services performing well). Surface both.'

scenarios:
  - title: The 5-Day Promise
    situation: |
      An account rep promises the customer a **printed OBR deck in five business days**. Delivery points to the **21-business-day SOP**.
    choices:
      - label: Tell the customer five days is the standard.
        feedback: 'The SOP cycle is 21 business days for a reason—Design (Jerry, 10 days), Data Collection (Jill / NOC, 5 days), Marketing Design (Sarah, 5 days), and Final Prep (3 days). A five-day promise breaks the Zero-Fire-Drills criterion before the cycle even starts.'
      - label: Reset expectations to the 21-business-day cycle (or document a leadership-approved exception path) before committing a date.
        feedback: '**Correct.** The SOP exists so Sales, Engineering, NOC, and Marketing all quote the same timeline. Exceptions go through your manager, not the customer-facing meeting date.'
      - label: Skip the Marketing Design phase to save time and hand the rep an unbranded slick.
        feedback: 'Skipping the Marketing Design phase strips the slick of the Final Review step and the brand consistency that makes the trifold readable. Use a documented fast-track only.'
  - title: The Raw-Dump Reflex
    situation: |
      Friday afternoon. The OBR meeting is fourteen business days out. The rep has just exported the customer's billing detail to a CSV, attached it to an email titled "Billing for [Customer]," and is about to add Sarah to the To: line.
    choices:
      - label: Hit send—Marketing can sort the spreadsheet on Monday.
        feedback: 'That is the **Raw Dump** the SOP exists to prevent. Marketing is for design, not data entry. The slick comes back wrong, or it comes back late.'
      - label: 'Pause. Complete the Sales Readiness Form, translate catalog codes to plain English, attach the finalized Visio diagram, and send **one email** containing the Single Packet.'
        feedback: '**Correct.** Sales owns the scrub. One packet, one email, complete data—Marketing starts the design clock immediately.'
      - label: Send the CSV now and the Visio later when it is ready.
        feedback: 'Two emails is not a Single Packet. Marketing will not begin design until the complete packet arrives—any partial send stops the clock and risks the Day 14 handoff.'
  - title: The Modernization Lever
    situation: |
      During the billing audit for a Strategic account, the rep discovers the customer has been paying for a **100M Fiber DIA** circuit at a site that was upgraded to **1G** last year but never re-tiered in billing.
    choices:
      - label: Quietly fix the billing internally before the OBR so it does not come up.
        feedback: 'Half right. Fix it, yes—but the SOP says to **surface** the proactive fix during the OBR. "Presenting an internal fix during the OBR proves proactive account management." Hiding it forfeits the trust dividend.'
      - label: 'Surface it on the slick under **Strategic Billing** as a Modernization lever: "Tier corrected from 100M to 1G; back-credit applied; current rate aligned with as-deployed service."'
        feedback: '**Correct.** This is exactly the Modernization lever the SOP calls out. Catching the error early **and** showing the work converts an awkward audit moment into a trust-building one.'
      - label: Tell the customer about it verbally in the meeting but leave it off the slick.
        feedback: 'Verbal-only loses the receipts. The trifold is the takeaway—if it is not on the slick, it did not happen.'

roleplay:
  persona: VP of IT at a ~$40M regional logistics company; long-time GPC strategic customer with six locations and a mixed DIA / SIA / SD-WAN footprint.
  scenario: The CFO is now copy-on every contract renewal and pushing back on "what are we actually getting." The VP of IT wants to defend the relationship at the next quarterly check-in but is buried in tickets and has no consolidated view of network health, billing, or roadmap.
  goal: 'Use the OBR as the answer. Walk the VP through what the slick will contain (Network Design / Strategic Billing / NOC History / Strategic Roadmap), the 21-business-day cycle, and the Sales Readiness Form data you need from their side. Set the meeting date and lock the Day 14 handoff backwards from there.'

---

## Why OBRs matter

Operational Business Reviews turn **network reality, financial signals, and partnership history** into a single executive conversation that the customer's CFO *and* VP-IT can both act on. Reps win when the **prep process is predictable**—this module trains the SOP, not just the slide deck.

## The OBR Slick — what we deliver

The deliverable is a **front/back trifold insert** ("the Slick") with four components:

1. **Network Design:** High-fidelity "Current vs. Future State" Visio, verified against billing data.
2. **Strategic Billing:** Totals and expirations, featuring the **"Modernization"** and **"Performance Spotlight"** levers.
3. **NOC History & Feedback Loop:** 12-month performance snapshot and holistic partnership feedback loop.
4. **Strategic Roadmap:** Planned upgrades, upcoming renewal sync, and GPC solution highlights.

## Success Criteria — memorize the three

- **Zero Fire Drills** — every asset is ready and handed to Marketing by **Business Day 14**.
- **100% Accuracy** — billing locations and network diagrams are fully synchronized.
- **Client Value** — the customer leaves the meeting with a clear understanding of their network health and our roadmap.

## The 21-business-day OBR cycle

![OBR process: 21-business-day strategic cycle (reference Gantt)](assets/gantt/obr-21-day-cycle.png)

| Phase | Interval | Owner | Action |
|---|---|---|---|
| **Initiation** | Day 1 | Account Rep | Schedule the OBR. |
| **Data Recon** | 3 days | Account Rep | Audit of locations, addresses, and upgrades. |
| **Design Phase** | 10 days | **Jerry Ehrenberg** | Network Design (with kickoff call). |
| **Data Collection** | 5 days | **Jill / NOC** | Billing & NOC data generation. |
| **Marketing Design** | 5 days | **Sarah** → Account Team Final Review | Professional formatting and branding. |
| **Final Prep** | 3 days | Sarah → Account Rep | Printing, pickup, and trifold insertion. |
| **The Meeting** | **Day 21** | Account Team | OBR Meeting. |

**Why 21 business days, not 26?** If you add the phase slices naively—**3 + 10 + 5 + 5 + 3**—you get **26** business days. The SOP still lands on **21** because **Network Design** (10 days) and **Billing / NOC data collection** (5 days) **overlap** during Days 5–14. Teaching reps *why* the overlap exists is how you stop the *"just promise two weeks"* fire drill before it starts.

**Why Day 14 is the hinge:** Marketing Design + Final Prep take seven business days. Miss the Day 14 handoff and you compress design and print into a fire drill—the opposite of the Zero-Fire-Drills criterion.

## Data Hygiene & the Single Packet

**The "No Raw Dump" Rule.** Sales must scrub and audit all data before handoff. **Marketing is for design, not data entry or CID deciphering.** Translate internal catalog codes into plain-English service descriptions (e.g., `100M Fiber DIA`).

**Proactive Billing Wins.** Audit for address, tier, and MRC errors early. **Presenting an internal fix during the OBR proves proactive account management**—surface the correction on the slick under the Modernization lever instead of quietly burying it.

**The Single Packet Handoff.** Marketing will not begin design until **one email** lands containing:

1. The completed **OBR Sales Readiness Form** (with scrubbed data tables).
2. The finalized **Visio Diagram** (verified).

Partial sends do not start the clock.

## Communication templates — subject-line discipline

The SOP ships four kickoff templates. Use the subject-line pattern verbatim—it is the operating signal that the cycle is on rails.

- **Design Request → Jerry Ehrenberg.** *Subject:* `OBR Design Request: [Customer Name] | DUE: 10 Business Days from Today`. Include known active locations and a 15-minute kickoff calendar hold.
- **Billing Request → Billing Team.** *Subject:* `OBR Billing Request: [Customer Name] | DUE: 5 Business Days from Today`. Ask for location-specific totals, product/service breakouts, and contract expiration dates.
- **Performance Request → NOC.** *Subject:* `OBR Performance Request: [Customer Name] | DUE: 5 Business Days from Today`. Ask for a 12-month ticket history snapshot (total volume, incident duration, services impacted, high-level resolution summaries) against the known CIDs and service addresses.
- **Final Assets → Sarah.** *Subject:* `OBR FINAL ASSETS: [Customer Name] | Review Requested: [5 Business Days from Today]`. Include the audited Sales Readiness Form (strategic copy + data) and the finalized Visio. The slick goes to proof when Sarah signs off.
