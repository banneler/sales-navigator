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
  - **Why OBRs:** Strategic accounts deserve **one credible story** in the room—how footprint, billing, performance, and roadmap connect—not a collage of orphan spreadsheets and slides.
  - **Sales** sets the bar: relationship ownership, audited sites and services, and a readiness handoff the rest of the org can run with (not a "dump it over the fence" moment).
  - **Engineering and NOC** anchor **what's actually built and how it behaves**; **finance / billing** keeps the money picture aligned with reality so you're not arguing two different truths with the customer.
  - **Marketing** steps in **after** that scrub: design and narrative so an executive leaves with something they can hold—not a rescue mission piecing together raw CID exports.
  - **The through-line is partnership.** Clean handoffs mean no fire drills; messy handoffs mean the customer feels our chaos. The sections and SOP below spell out *how* we keep the chain intact.

knowledge_checks:
  - question: "How many business days does the OBR cycle run, from initiation through the meeting itself?"
    options:
      - "14 business days"
      - "21 business days"
      - "30 business days"
    correct_index: 1
    explanation: "The SOP defines a 21-business-day cycle, ending with the OBR Meeting on Day 21."

  - question: "\"Zero Fire Drills\" is one of the OBR's three Success Criteria. What does it mean operationally?"
    options:
      - "No support tickets can be open on the customer's circuits during OBR week."
      - "The OBR meeting cannot be rescheduled."
      - "Every asset is ready and handed to Marketing by Business Day 14."
    correct_index: 2
    explanation: "\"Zero Fire Drills\" is the SOP's name for the Business Day 14 handoff milestone—seven business days before the meeting, Marketing has everything they need."

  - question: "Marketing will not begin design until the \"Single Packet\" handoff arrives. What must that single email contain?"
    options:
      - "A raw export from the billing platform plus a verbal walkthrough."
      - "A calendar invite for the OBR meeting and the customer's logo."
      - "The completed OBR Sales Readiness Form (with scrubbed data tables) and the finalized Visio diagram (verified)."
    correct_index: 2
    explanation: "Marketing requires one packet, audited and complete. Sending pieces separately—or sending raw data—violates the Single Packet rule and stops the design clock."

  - question: "The SOP enforces a \"No Raw Dump\" rule. What is the stated rationale?"
    options:
      - "Raw billing data violates customer NDAs."
      - "Marketing is for design, not data entry or CID deciphering. Sales owns the scrub."
      - "The Visio software cannot ingest raw exports."
    correct_index: 1
    explanation: "Verbatim from §3 of the SOP—Sales must scrub and audit data before handoff. Marketing receives audited, plain-English data, not internal catalog soup."

  - question: "When you audit billing during OBR prep, the SOP names two specific \"sales levers\" the slick should surface. Which pair?"
    options:
      - "\"Discount\" and \"Bundle\""
      - "\"Modernization\" and \"Performance Spotlight\""
      - "\"Renewal\" and \"Cross-sell\""
    correct_index: 1
    explanation: "Strategic Billing on the slick features the \"Modernization\" lever (e.g., upgrade an aging tier) and the \"Performance Spotlight\" lever (showcase services performing well). Surface both."

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

<div class="obr-slick-sample-wrap">
<img src="assets/obr/obr-slick-sample.jpg" alt="Sample OBR slick: Network Agility and Roadmap spread (trifold-style layout with billing snapshot, maps, and performance check-in)" width="1024" height="602" loading="lazy" decoding="async" />
</div>

## Success Criteria

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

## Data Hygiene & the Single Packet

### The "No Raw Dump" rule

Sales must scrub and audit all data before handoff. **Marketing is for design, not data entry or CID deciphering.** Translate internal catalog codes into plain-English service descriptions (e.g., `100M Fiber DIA`).

### Proactive billing wins

Audit for address, tier, and MRC errors early. Presenting an internal fix during the OBR proves proactive account management—surface the correction on the slick under the **Modernization** lever instead of quietly burying it.

### The Single Packet handoff

Marketing will not begin design until **one email** contains **both** of the following:

1. The completed **OBR Sales Readiness Form** (with scrubbed data tables).
2. The finalized **Visio diagram** (verified).

Partial sends do not start the clock.
