---
id: "sales-operations-and-approvals"
title: "Sales Operations & Approvals"
summary: "GPC Solution approvals (Approval History), pre-billing change orders vs MAC/disconnect post-billing, Solution Site costing routing, manual validation. PDFs in Module Reference Files."
sensitivity: "internal"
reference_files:
  - label: "Approval Overview and Training Guide — 07/25"
    sharepoint_url: "https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Approval%20Overview%20and%20Training%20Guide%20-%200725.pdf?csf=1&web=1&e=qy6LaI"
  - label: "Approval Requirements Matrix v5.5 — 07/25"
    sharepoint_url: "https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Approval%20Requirements%20Matrix%20v5.5%20-%200725.pdf?csf=1&web=1&e=h64jqJ"
  - label: "Change Order Process — Sales Team — 03/25"
    sharepoint_url: "https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Change%20Order%20Process%20-%20Sales%20Team%20-%200325.pdf?csf=1&web=1&e=STAe3w"
  - label: "Costing Routing Quick Reference Guide — 11/23"
    sharepoint_url: "https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Costing%20Routing%20Quick%20Reference%20Guide%20-%201123.pdf?csf=1&web=1&e=Ta1aBx"
  - label: "Move-Add-Change Processes — Sales Team — 11/23"
    sharepoint_url: "https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Move-Add-Change%20Processes%20-%20Sales%20Team%20-%201123.pdf?csf=1&web=1&e=zURGTj"
  - label: "Salesforce Roadmap — shared link"
    sharepoint_url: "https://gpcom.sharepoint.com/:b:/s/SalesforceRoadmap/IQCEYPLtQTCVS7H8aEnrSTrLARzxb0p97NTo17Rj8DeB_gg?e=RyiZUS"
five_minute_summary: |
  - **GPC Solution → Approval History:** Approve / Reject / Reassign / Recall; reviewers look at **sites, services, products, quote math**—not one headline number.
  - **Change order (narrow):** after **Closed/Won**, **before billing**. After billing: **partial** changes → **MAC**; **full removal** → **Disconnect**—not the pre-billing change-order template.
  - **Request Manual Validation** on a Solution Site skips automation → each participating department reviews.
  - **OBR** materials = account/ops cadence—not a substitute for SF approval or costing rules.

knowledge_checks:
  - question: "When is a 'change order' appropriate in the narrow sense used here?"
    options:
      - "After Closed/Won and before billing has started"
      - "Any time the customer changes their mind, including after billing"
      - "Only before the GPC Solution is approved the first time"
    correct_index: 0
    explanation: "Pre-billing contract change only; post-billing MAC/disconnect/cancel paths differ."

  - question: "What does checking Request Manual Validation on a Solution Site do to costing routing?"
    options:
      - "Skips automation so each participating department must review"
      - "Speeds up routing by accepting all system estimates"
      - "Removes the need for Solution Services on the site"
    correct_index: 0
    explanation: "Forces manual departmental review."

  - question: "After you submit a signed change order package, who typically performs the booking adjustment in Salesforce?"
    options:
      - "Salesforce Administration"
      - "The account executive alone"
      - "The customer via self-service"
    correct_index: 0
    explanation: "SF Admin booking; PMO project; CRC billing—per change order process."

  - question: "From the GPC Solution, where do you run Approve, Reject, Reassign, or Recall actions?"
    options:
      - "Approval History on the GPC Solution record"
      - "Only the Leads tab"
      - "Only the customer's email inbox"
    correct_index: 0
    explanation: "Approval History on the GPC Solution."

  - question: "If billing has already started and the customer wants a partial in-life contract change, which path applies instead of a pre-billing change order?"
    options:
      - "Move-Add-Change (MAC) materials and process"
      - "The same Conga change order template used before billing"
      - "Only the Cancellation playbook"
    correct_index: 0
    explanation: "After billing, partial changes follow MAC."

  - question: "If the customer wants all services removed after billing has started, what family of process should you use rather than MAC for partial tweaks?"
    options:
      - "Disconnection process materials"
      - "Pre-billing Cancellation only"
      - "A new lead record with no opportunity"
    correct_index: 0
    explanation: "Full removal post-billing → Disconnection."

  - question: "When multiple services are selected on one Solution Site, how does costing routing typically consolidate paths?"
    options:
      - "It follows the path that requires the deepest review"
      - "Each service is ignored if another is cheaper"
      - "Routing always picks the fastest automated estimate only"
    correct_index: 0
    explanation: "Deepest-review path when multiple services apply."

  - question: "If both New and Existing services are selected on one site, which routing path applies per common rules of thumb?"
    options:
      - "The New service path"
      - "The Existing path only"
      - "No routing runs until the customer sends a fax"
    correct_index: 0
    explanation: "New + Existing on one site → **New** path."

  - question: "For change order submissions, which groups are typically in the loop alongside Sales Management when required?"
    options:
      - "PMO, Salesforce Administration, and CRC"
      - "Only the customer's legal counsel"
      - "Only product marketing"
    correct_index: 0
    explanation: "PMO, SF Admin, CRC for project, booking, billing."

  - question: "What is OBR readiness material intended for relative to Salesforce approvals and costing?"
    options:
      - "Account planning cadence with ops leadership—not a substitute for SF approval or costing rules"
      - "Replacing Approval History entirely"
      - "Automating all Solution Site costing without review"
    correct_index: 0
    explanation: "OBR ≠ approval or costing; different purpose."

scenarios:
  - title: "Customer wants pricing changes after billing started"
    situation: |
      **Closed/Won** and **billing started**. Customer wants to change MRC on **part** of the contract—not remove all services.
    choices:
      - label: "Use the pre-billing Change Order Conga path from the GPC Solution."
        feedback: "Wrong. Pre-billing change orders only; post-billing partial → MAC."

      - label: "Follow Move-Add-Change (MAC) process materials—not the pre-billing change order template."
        feedback: "Correct."

  - title: "Deepest review path on a multi-service site"
    situation: |
      One Solution Site has **multiple services** selected.
    choices:
      - label: "Routing follows the path that requires the deepest review when multiple services apply."
        feedback: "Correct."

      - label: "Each service is costed in parallel with no consolidation rule."
        feedback: "Incorrect—deepest-review path applies."

roleplay:
  persona: "New Account Executive, 60 days in"
  scenario: "A customer signed last month (Closed/Won, billing started). They now want to swap one service for a different product. The AE is about to use the Conga Change Order template from the GPC Solution, thinking that's the right path."
  goal: "Identify that the correct process after billing has started is MAC (Move-Add-Change)—not the pre-billing change order—and route to the right materials before taking any action in Salesforce."
---

## Elevator Pitch

Getting a deal right in Salesforce is as important as winning it. The **approval process** exists to catch errors before orders go to delivery—reviewers check site-level services, products, and quote math. The **change order vs MAC vs disconnect** distinction prevents billing errors, stalled installs, and customer escalations. **Costing routing** ensures the right teams estimate and validate spend. Know which path to use at each stage, and your deals will move cleanly from approval to revenue.

---

## Discovery Questions

*(For internal use in deal reviews and pre-submission checklists)*

1. **Is the GPC Solution Booked or Billed?** — Determines whether a change order, MAC, or disconnect process applies.
2. **Does each Solution Site have the correct services and products attached?** — Reviewers validate site-level completeness, not just headline MRC.
3. **Does the quote math tie out?** — Mismatches between line items and totals stall approvals and delay projects.
4. **Have all required attachments been uploaded and does each form carry the GPC Solution ID?** — Missing IDs cause booking delays post-approval.
5. **Is Request Manual Validation checked only when human review is genuinely needed?** — Checking it unnecessarily slows costing routing for every participating department.

---

## Objection Handling

*(Common internal misconceptions and how to correct them)*

| Misconception | Correct Path |
| --- | --- |
| **"I'll just submit a change order—the customer wants to adjust services."** | First ask: has billing started? If yes, a change order is not the right tool. Partial in-life changes → MAC; full removal → Disconnect. |
| **"The approval is stuck—I'll fix it in a side channel with the reviewer."** | Check Approval History for the current step and assignee. Escalate through Sales Management or the SF team—not Slack or email outside the record. |
| **"I checked Manual Validation to be safe."** | Manual Validation skips automation and routes to every participating department. Only check it when you genuinely need human review—not as a default. |
| **"OBR is part of the approval process."** | OBR is an account/ops planning cadence—completely separate from GPC Solution approvals and costing routing. Don't substitute one for the other. |
| **"New and Existing services on the same site will just pick the faster path."** | New + Existing on one site always routes via the New path. Know the rules before building the Solution Site. |

---

## Technical Deep Dive [deep]

**Approval flow:**
- Work from **GPC Solution → Approval History** → Approve / Reject / Reassign / Recall; add comments
- Reviewers judge: site-level services, products, quote math, record hygiene (Solution Services on sites, products on services, quote line sanity)
- Who reviews: Product Management (product rules); Sales Management (judgment, escalation); Salesforce team (routing/workflow bugs)
- Mobile: same actions available from approval notifications/email links
- Stalls: check Approval History for step/assignee; escalate via Sales Management or SF team

**Change order (narrow definition):**
- When: contract change **after Closed/Won** and **before billing starts**; Solution must be Booked, not Billed
- Not: post-billing partial change → **MAC**; pre-billing full removal → **Cancellation**; post-billing full removal → **Disconnect**
- Motion: Conga Change Order template from GPC Solution → complete sites/changes → keep GPC Solution ID on forms → signatures → upload → email package to Sales Manager (when required), PMO, SF Administrator, CRC
- After submit: SF Admin booking adjustment; PMO project; CRC billing
- Note: if site stage is Pending Billing or 7–10 Day Order, Admin may need PMO/CRC approval before booking change—not instant

**Costing routing rules of thumb:**
- Zone Parent → sites may bypass automation; Reusable not allowed with Zone Parent
- New + Existing on one site → **New** path
- Multiple services on one site → **deepest review** path
- Reusable / OSP matrices → see Costing Routing PDF
- Request Manual Validation = skip automation → every participating department reviews manually

**Pre-submission checklist:**
Right object, real sites/services/products, quote math ties, story matches payback/churn context, attachments + GPC Solution IDs on forms, Request Manual Validation only when human review is really needed.

::: accordion Approval Flow & History
How approvals route through the GPC Solution and where to find Approval History.

*Collateral image — coming soon*

*Collateral image — coming soon*
:::

::: accordion Change Order Process
Pre-billing change order workflow — from Conga template through SF Admin booking adjustment.

*Collateral image — coming soon*
:::

::: accordion Costing Routing Reference
How costing routing selects review paths based on site type, services, and products.

*Collateral image — coming soon*
:::
