---
id: "sales-operations-and-approvals"
title: "Sales Operations & Approvals"
summary: "Solution approvals. Change orders. Clean revenue."
sensitivity: "internal"
reference_files:
  - label: "Approval Overview and Training Guide — 07/25"
    sharepoint_url: "https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Approval%20Overview%20and%20Training%20Guide%20-%200725.pdf?csf=1&web=1&e=qy6LaI"
  - label: "Pre-Approved Order Process Quick Reference Guide — 07/23"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/SalesforceRoadmap/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FSalesforceRoadmap%2FShared%20Documents%2FGeneral%2F2025%20Salesforce%20Training%20Guides%20%28Legacy%20BAU%20org%29%2FPre-Approved%20Order%20Process%20Quick%20Reference%20Guide%20-%200723.pdf&parent=%2Fsites%2FSalesforceRoadmap%2FShared%20Documents%2FGeneral%2F2025%20Salesforce%20Training%20Guides%20%28Legacy%20BAU%20org%29"
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
video_sections:
  - heading: "Pre-Approved Order Process — quick reference"
    intro: Short checklist for when straightforward fiber can skip the standard approval chain—read this before you promise a “fast path.”
    body: |
      Open the **[Pre-Approved Order Process Quick Reference Guide — 07/23](https://gpcom.sharepoint.com/sites/SalesforceRoadmap/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FSalesforceRoadmap%2FShared%20Documents%2FGeneral%2F2025%20Salesforce%20Training%20Guides%20%28Legacy%20BAU%20org%29%2FPre-Approved%20Order%20Process%20Quick%20Reference%20Guide%20-%200723.pdf&parent=%2Fsites%2FSalesforceRoadmap%2FShared%20Documents%2FGeneral%2F2025%20Salesforce%20Training%20Guides%20%28Legacy%20BAU%20org%29)** and walk it in order: **Design**-stage GPC Solution, **36+** month term, **MRC per Solution Site** at or above the floor in the live matrix (training examples often cite **$150**—verify the current number), **Build** or **On-Net** fiber only, and **no** promotional credits or contract buyouts unless the published rules explicitly allow them.

      Pair it with the **Approval Requirements Matrix** card next—this PDF is the narrative checklist; the matrix is where **product exclusions** and approver lanes are spelled out.
  - heading: "Approval Requirements Matrix — v5.5"
    intro: The live routing table—who approves what, thresholds, and which products are allowed on Pre-Approved vs standard paths.
    body: |
      Keep **[Approval Requirements Matrix v5.5 — 07/25](https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Approval%20Requirements%20Matrix%20v5.5%20-%200725.pdf?csf=1&web=1&e=h64jqJ)** open whenever you ask, “Can this go Pre-Approved?” **SD-WAN, Managed Wi‑Fi, Business Security, colocation, dark fiber, wireless broadband**, and other matrix-flagged products **do not** use the fiber fast path—use **Product Manager** or **BSOL** routing per the matrix instead of assuming a shortcut.

      When the deal mixes excluded products with fiber, default to **standard** approvals until the record matches what the matrix shows.
five_minute_summary: |
  - **The Approval Process:** Reviewers evaluate site-level services, products, and quote math—not just the headline total. Track progress via the Approval History on the GPC Solution.
  - **Handling Changes:** Use Change Orders only for pre-billing adjustments. Once billing has started, use the MAC (Move-Add-Change) process for partial updates or Disconnect for full removals.
  - **Manual Validation:** Checking "Request Manual Validation" skips automated routing and forces every department to review. Use this sparingly.
  - **Pre-Approved Fast Track:** Straightforward fiber can skip standard approvals when you meet **every** rule in the **Pre-Approved quick reference** and the live **Approval Requirements Matrix** (term, MRC per site, fiber type, build constraints, exclusions). Use the **two training cards** under this summary as your starting point, then validate on SharePoint.

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
---

## Overview

Winning the deal means nothing if the **GPC Solution** cannot clear **approvals** and **costing**.

- **Approvals** — Reviewers judge **site-level** services, products, and **quote math** before delivery—not a headline total.
- **Change order vs MAC vs disconnect** — Billing status picks the tool. Wrong path = stalled installs and revenue fights.
- **Costing routing** — Automation and **Manual Validation** route dollars to the right reviewers; learn the rules before you submit.

Pick the path that matches **where the deal is in billing**, then keep the record clean enough for someone else to approve it.

---

## Key Guidelines

1. **Check the Billing Status:** This determines your path. Pre-billing changes use the Change Order process. Post-billing partial changes require a MAC (Move-Add-Change). Full removals are Disconnects.
2. **Verify Site-Level Data:** Reviewers validate site-level completeness, not just the headline MRC. Ensure each Solution Site has the correct services and products attached.
3. **Check the Math:** Mismatches between line items and totals stall approvals and delay projects.
4. **Include the GPC Solution ID:** Every form and required attachment must carry the GPC Solution ID. Missing IDs cause booking delays post-approval.
5. **Use Manual Validation Sparingly:** Checking "Request Manual Validation" skips automation and routes the deal to every participating department. Only check it when human review is genuinely required.

---

## Common Pitfalls

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

::: flip ["I'll just submit a change order—the customer wants to adjust services."]
First ask: has billing started? If yes, a change order is not the right tool. Partial in-life changes → MAC; full removal → Disconnect.
:::

::: flip ["The approval is stuck—I'll fix it in a side channel with the reviewer."]
Check Approval History for the current step and assignee. Escalate through Sales Management or the SF team—not Slack or email outside the record.
:::

::: flip ["I checked Manual Validation to be safe."]
Manual Validation skips automation and routes to every participating department. Only check it when you genuinely need human review—not as a default.
:::

::: flip ["New and Existing services on the same site will just pick the faster path."]
New + Existing on one site always routes via the New path. Know the rules before building the Solution Site.
:::

::: flip ["The quote in my email matches intent—that's enough for approval."]
Reviewers validate **line items, totals, and site-level attachment** on the GPC Solution. Fix the record so quote math and services match what you're asking reviewers to approve.
:::

::: flip ["Site-level detail is busywork—the headline MRC is what counts."]
Incomplete Solution Sites—missing services or products on a site—stall approvals and delay projects. Reviewers check site-level completeness, not just the rollup.
:::

</div>

---

## Process Deep Dive [deep]

**Source:** Ground truth is always the **dated PDFs** in **Module Reference Files**—especially **Approval Overview**, **Pre-Approved Order Process Quick Reference**, **Approval Requirements Matrix**, **Change Order**, **MAC**, and **Costing Routing**. The **training cards** above walk the Pre-Approved + Matrix pair; this section lines up **standard approvals**, **change orders**, **costing**, and **Pre-Approved** so you know which PDF to open first.

**Standard approval flow (most deals):**
- Work from **GPC Solution → Approval History** → Approve / Reject / Reassign / Recall; add comments
- Reviewers judge **site-level** services, products, **quote math**, and record hygiene (Solution Services on sites, products on services, quote line sanity)
- Typical lanes: **Product Management** (product rules), **Sales Management** (financials / judgment), **Salesforce** team (routing and workflow issues)
- Stuck? Read **Approval History** for step and assignee; escalate through **Sales Management** or the **SF** team—not side channels

**Change order (narrow definition):**
- **When:** Contract change **after Closed/Won** and **before billing starts**; Solution should be **Booked**, not **Billed**
- **Motion:** Conga Change Order template from the GPC Solution → complete sites/changes → **GPC Solution ID** on every form → signatures → upload → email package to Sales Manager (when required), **PMO**, **SF Administrator**, **CRC**
- **After submit:** SF Admin booking adjustment; PMO project; CRC billing
- **Watch:** If site stage is **Pending Billing** or **7–10 Day Order**, Admin may need **PMO/CRC** sign-off before booking changes—don’t assume it’s instant

**Costing routing (rules of thumb):**
- **New + Existing** on one site → **New** path
- **Request Manual Validation** checked → automation off → **every** participating department reviews manually

**Pre-submission checklist (any path):**
Right object, real sites/services/products, quote math ties to the story, attachments + **GPC Solution IDs** on forms, and **Request Manual Validation** only when you truly need human eyes on every department.

**Pre-Approved fiber (how it connects):**
Think of it as a **narrow gate** on top of everything above—not a different product family.

1. **Read order:** **[Pre-Approved Order Process Quick Reference — 07/23](https://gpcom.sharepoint.com/sites/SalesforceRoadmap/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FSalesforceRoadmap%2FShared%20Documents%2FGeneral%2F2025%20Salesforce%20Training%20Guides%20%28Legacy%20BAU%20org%29%2FPre-Approved%20Order%20Process%20Quick%20Reference%20Guide%20-%200723.pdf&parent=%2Fsites%2FSalesforceRoadmap%2FShared%20Documents%2FGeneral%2F2025%20Salesforce%20Training%20Guides%20%28Legacy%20BAU%20org%29)** first (what “clean fiber” looks like), then **[Approval Requirements Matrix v5.5 — 07/25](https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Approval%20Requirements%20Matrix%20v5.5%20-%200725.pdf?csf=1&web=1&e=h64jqJ)** (thresholds, approvers, **exclusions**). If either doc says no, you’re back on **standard** approvals.
2. **Deal shape:** **Design**-stage GPC Solution, **36+** month term, **MRC per Solution Site** at or above the floor in the **current** matrix (examples in training often use **$150**—confirm the live number), **Build** or **On-Net** fiber—not Copper/Coax—and **no** promo credits or contract buyouts unless the published rules explicitly allow them.
3. **Field reality:** Fiber reach, distance, and easement rules in the guides still apply—if the guide blocks a route type (railroads, certain streets, easements, building penetrations, etc.), Pre-Approved is **not** a workaround.
4. **Products:** **Colocation, SD-WAN, wireless broadband, GPC Managed Wi‑Fi, on-prem PBX, Business Security, dark fiber**, and **anything else the matrix lists** stay off the fast path—route **Product Manager** / **BSOL** per the matrix, not Pre-Approved.
5. **Unsure?** Build the record for **standard** routing and let leadership confirm; the quick reference is short precisely so you can self-check before you commit to a timeline.
