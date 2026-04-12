---
id: "sales-operations-and-approvals"
title: "Sales Operations & Approvals"
summary: "Internal playbook for when GPC Solutions hit approval, how change orders differ from MAC/disconnect/cancel paths, and how costing routing behaves at the Solution Site level. Pair with the Approval Requirements Matrix, PMO/SF Admin/CRC handoffs, and OBR materials in the cited folders."
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
  - Approvals run from the **GPC Solution** via **Approval History** (Approve, Reject, Reassign, Recall); expect leadership to scrutinize site-level services, products, and quote math—not a single headline number.
  - **Change orders** are only for contract changes after Closed/Won but **before billing starts**; after billing, partial changes use MAC and full removal uses Disconnect—different playbooks.
  - **Costing Routing** at the Solution Site depends on site type, services, products, and automation; **Request Manual Validation** skips automation and forces departmental review.
  - Partner, MAC/Disconnect, Customer Move, and **OBR** materials answer adjacent questions—do not substitute OBR readiness for Salesforce approval or costing rules.

knowledge_checks:
  - question: "When is a 'change order' appropriate in the narrow sense used here?"
    options:
      - "After Closed/Won and before billing has started"
      - "Any time the customer changes their mind, including after billing"
      - "Only before the GPC Solution is approved the first time"
    correct_index: 0
    explanation: "Change orders apply when the customer changes the contract after Closed/Won but before billing starts; post-billing partial changes follow MAC, and other paths use Cancellation or Disconnect as applicable."

  - question: "What does checking Request Manual Validation on a Solution Site do to costing routing?"
    options:
      - "Skips automation so each participating department must review"
      - "Speeds up routing by accepting all system estimates"
      - "Removes the need for Solution Services on the site"
    correct_index: 0
    explanation: "Manual validation bypasses automation and requires participating departments to review—use when the scenario needs human validation."

  - question: "After you submit a signed change order package, who typically performs the booking adjustment in Salesforce?"
    options:
      - "Salesforce Administration"
      - "The account executive alone"
      - "The customer via self-service"
    correct_index: 0
    explanation: "Salesforce Administration performs the booking adjustment; PMO updates the project and CRC handles billing impacts per the change order process."

  - question: "From the GPC Solution, where do you run Approve, Reject, Reassign, or Recall actions?"
    options:
      - "Approval History on the GPC Solution record"
      - "Only the Leads tab"
      - "Only the customer’s email inbox"
    correct_index: 0
    explanation: "Approvals are executed from the GPC Solution via Approval History; notifications support mobile and desktop review."

  - question: "If billing has already started and the customer wants a partial in-life contract change, which path applies instead of a pre-billing change order?"
    options:
      - "Move-Add-Change (MAC) materials and process"
      - "The same Conga change order template used before billing"
      - "Only the Cancellation playbook"
    correct_index: 0
    explanation: "After billing, partial changes follow MAC; narrow change orders apply before billing starts."

  - question: "If the customer wants all services removed after billing has started, what family of process should you use rather than MAC for partial tweaks?"
    options:
      - "Disconnection process materials"
      - "Pre-billing Cancellation only"
      - "A new lead record with no opportunity"
    correct_index: 0
    explanation: "Full removal post-billing follows Disconnection; MAC covers partial in-life changes."

  - question: "When multiple services are selected on one Solution Site, how does costing routing typically consolidate paths?"
    options:
      - "It follows the path that requires the deepest review"
      - "Each service is ignored if another is cheaper"
      - "Routing always picks the fastest automated estimate only"
    correct_index: 0
    explanation: "Multiple services on a site follow the deepest-review path per the costing routing overview."

  - question: "If both New and Existing services are selected on one site, which routing path applies per common rules of thumb?"
    options:
      - "The New service path"
      - "The Existing path only"
      - "No routing runs until the customer sends a fax"
    correct_index: 0
    explanation: "When New and Existing are both in play on one site, routing follows the New path."

  - question: "For change order submissions, which groups are typically in the loop alongside Sales Management when required?"
    options:
      - "PMO, Salesforce Administration, and CRC"
      - "Only the customer’s legal counsel"
      - "Only product marketing"
    correct_index: 0
    explanation: "Completed packages route to PMO, Salesforce Administration, and CRC for project, booking, and billing impacts."

  - question: "What is OBR readiness material intended for relative to Salesforce approvals and costing?"
    options:
      - "Account planning cadence with ops leadership—not a substitute for SF approval or costing rules"
      - "Replacing Approval History entirely"
      - "Automating all Solution Site costing without review"
    correct_index: 0
    explanation: "OBR supports operational business review preparation; it does not replace GPC Solution approvals or costing routing discipline."

scenarios:
  - title: "Customer wants pricing changes after billing started"
    situation: |
      A deal is **Closed/Won** and **billing has started**. The customer now wants to change MRC on **part** of the contract—not remove all services.
    choices:
      - label: "Use the pre-billing Change Order Conga path from the GPC Solution."
        feedback: "Wrong path. Change orders are for before billing; after billing starts, partial in-life changes follow Move-Add-Change, not the narrow change-order window."

      - label: "Follow Move-Add-Change (MAC) process materials—not the pre-billing change order template."
        feedback: "Correct. Post-billing partial changes use MAC; change orders apply only before billing for that narrow scenario."

  - title: "Deepest review path on a multi-service site"
    situation: |
      One Solution Site has **multiple services** selected. Automation would normally route costing, and you are deciding how departments engage.
    choices:
      - label: "Routing follows the path that requires the deepest review when multiple services apply."
        feedback: "Correct. Multiple services on one site follow the path requiring the deepest review, per the costing routing overview."

      - label: "Each service is costed in parallel with no consolidation rule."
        feedback: "Incorrect. The quick reference calls out that multiple services follow the path requiring the deepest review—not independent parallel paths with no rule."
---

## Approvals overview

- Approvals run from the **GPC Solution** in Salesforce—not from a random email thread. In **Related List Quick Links**, open **Approval History**, then use **Approve**, **Reject**, **Reassign**, or **Recall**, add clear comments, and confirm. Notification emails go to the assigned recipients automatically.
- **What reviewers actually look at:** leadership review is not a single headline number. Expect scrutiny of **site-level** services, products, and quote math, plus whether the story on the record matches the customer situation.
- **Record hygiene they will check:** each **Solution Site** should have **Solution Services** (except **A Locations** where that exception applies). Each **Service** should carry **Products** (product counts on related lists are a quick sanity check). On **Quote Lines**, discounts should reconcile with **Regular Unit Price**, **Customer Unit Price**, and totals—**quantity** may need manual math because columns are tight on screen.
- **Financial and deal-health signals** called out in training include: **Payback Months** (Net Investment ÷ Gross Margin) versus **term**; **new vs renewal** context; **MTD/QTD/YTD** payback posture; **Net Investment** (build, equipment, CAC-style costs—generally excluding labor); **manual Product Discount** outside standard tier/EVPL rules; **Churn** as the percent drop from existing MRC to proposed MRC; and **Unfavorable Investment** when Gross Margin ≤ $0 and Net Contract Value < $0.
- **Beyond the numbers:** strategic fit, adjacent opportunity, competitiveness, distance from fiber, and **Parent Opportunity** context still matter—approvals are judgment calls, not only a calculator output.

### Who to ask (approvals and systems)

- **Product Management:** product-specific approval rules, product behavior, and what belongs on the quote versus what does not.
- **Sales Management:** judgment calls on the deal, escalation when MRC/payback/cost swings are material, and when to pause before you burn cycles downstream.
- **Salesforce team:** workflow glitches, why an approval route looks wrong, and system issues that block Approve/Reject/Reassign/Recall from completing.
- **Do not substitute OBR prep** (see below) for getting the GPC Solution right or for following costing routing rules—different purpose.

### Mobile approvals

- On **iPhone** or **Android**, use the **notification bell** or the **approval email** link, open **Details** (use **View More** when needed), return to **Approval History**, pick the action, enter comments, and confirm—the outcome matches desktop.

### What to expect (timing and follow-up)

- **No fixed “hours to approve” promise in this module**—speed depends on approver availability, deal complexity, and how complete the record is on first submission.
- **Expect** notification-driven back-and-forth: you may get questions via approval comments or email; answer in-thread with specifics so the next reviewer does not start cold.
- **If something stalls**, confirm you are on the **GPC Solution**, check **Approval History** for the current step and assignee, then escalate through **Sales Management** or the **Salesforce team** for routing issues—avoid side-channel guesses.

## Before you submit (checklist)

Use this whether you are chasing **GPC Solution approval**, a **change order** package, or a **costing-heavy** site—clean inputs reduce rework.

- **Right object, right stage:** you are working from the **GPC Solution** (and relevant **Solution Sites**) as training describes—not a one-off spreadsheet version of the deal.
- **Sites and services:** each site has the services you are actually selling; nothing is “placeholder” that you intend to fix after approval.
- **Products and links:** services that need products have them; for change orders involving new products, you have the correct **Salesforce Product** link for that site’s **Market Group** so MCOS/NCOS stay accurate.
- **Quote integrity:** quote lines, discounts, and math tie out; you can explain any manual discount or non-standard structure.
- **Story matches the record:** payback posture, churn, net investment, and strategic context in training align with what leadership will see in Salesforce.
- **Attachments and identifiers:** signed documents are uploaded where required; **GPC Solution** identifiers stay on forms that rely on them so **Salesforce Administration**, **PMO**, and **CRC** can match work to the right record.
- **Routing flags:** if you used **Request Manual Validation** or have **Zone Parent** / **New + Existing** combinations, you know **why** routing will look heavier—and you have not promised the customer an automated path that training rules out.

## Change orders

- **Definition (narrow):** a **change order** here means the customer changes the contract **after Closed/Won** but **before billing has started**. Keep that window straight—it drives which template and which groups touch the work.
- **If billing already started and only part of the contract changes:** that is **Move-Add-Change (MAC)**—not this change-order path.
- **If the customer removes everything before billing:** use the **Cancellation** process, not a change order.
- **If the customer removes everything after billing:** use **Disconnection**—not MAC for “small tweaks,” and not the pre-billing change-order template.

### Preconditions

- GPC Solution must be **Closed/Won**, **Booked**, and **not Billed**—change orders **cannot** run once **Billed** is set.

### Motion (what you do)

- **Early heads-up:** if the change is significant for **MRC**, **payback**, or **cost**, notify your **Sales Manager** before you polish paperwork nobody can approve.
- **Conga:** from the GPC Solution, **Conga Files → Change Order template → Preview** to validate you have the right solution and layout.
- **Edit carefully:** complete **Solution Site** affected, **description**, and **specific changes**; for new products, paste the correct **Salesforce Product** link for that Solution Site’s **Market Group** so MCOS/NCOS stay accurate.
- **Do not strip identifiers:** do **not** delete the **GPC Solution** number from the form—it helps **Salesforce Administration**, **PMO**, and **CRC** tie documents to Salesforce.
- **Signatures and routing:** obtain **customer** signature (and **yours**), upload the signed PDF to the GPC Solution, then email the completed form plus the **GPC Solution link** to **Sales Manager** (when step one applied), **PMO**, **Salesforce Administrator**, and **CRC**.

### After submission (who does what)

- **Salesforce Administration** performs the **booking adjustment**.
- **PMO** updates the **project**.
- **CRC** handles **billing** impacts.
- **Extra gate:** if the Solution Site project stage is **“Pending Billing”** or **“7-10 Day Order,”** **Salesforce Admin** must get **PMO/CRC** approval before executing the booking adjustment—do not assume “submit” equals “instant booking change.”

### What to expect (change-order follow-through)

- **Handoffs are sequential by design:** booking, project, and billing each have their own checks; **same-day completion is not guaranteed** and depends on package quality, stage gates, and group workload.
- **You own clarity:** incomplete packages or ambiguous site scope tend to bounce—use the checklist above and the **Change Order Process** PDF in **Module Reference Files** for the authoritative sequence.

## Costing / routing

- **What it is:** **Costing Routing** decides which organizations **estimate** or **validate** spend for each **Solution Site**, using **Site Type**, **Services**, and **Products**, plus **Salesforce automation**. Some paths show **estimates** for speed; others pull **department-supplied** data. Treat this section as an **overview**—your site mix can differ from another rep’s.
- **Why it matters to you:** routing drives **how long** validation takes and **who** must touch the site before you promise install or margin to the customer—especially when automation is off or multiple services stack.

### Request Manual Validation

- If **Request Manual Validation** is checked on the **Solution Site**, **automation is skipped** and **each participating department** must review. Use it when the scenario truly needs human eyes—not as a shortcut past customer discovery.

### Rules of thumb (quick reference)

- **Zone Parent Opportunity:** Solution Sites may **bypass automation**; **Reusable** is **not** allowed when a **Zone Parent** is in play.
- **Strategic Build:** when GPS falls inside preloaded boundaries, **Individual Drop Cost** and **Individual Equipment Cost** run systematically.
- **New + Existing** on one site: routing follows the **New** path.
- **Multiple services** on one site: routing follows the path that requires the **deepest review**—not the lightest common denominator.
- **OSP Automated Costing:** system estimates that **OSP** may override.
- **Reusable:** **OSP** and **Network Engineering** can complete routing automatically when **eligibility** criteria are met—see the **Reusable** matrix in the **Costing Routing** PDF.
- **Wholesale bulk imports:** separate **bulk-site** routing pattern from standard retail-style entry.

### Who to ask (routing edge cases)

- **Business Customer Care:** especially **customer moves** and **New vs Existing** classification questions when you are unsure which service bucket is honest on the record.
- **Network / OSP / Engineering stakeholders:** when **Reusable**, **OSP Automated Costing**, or **Strategic Build** behavior looks wrong relative to the PDF matrices—bring **Solution Site** context and what you promised the customer.

**At a glance (scan before you click)**

- **Request Manual Validation** → automation off; each participating department reviews.
- **Zone Parent** on the opportunity → Solution Sites may bypass automation; **Reusable** is **not** allowed with a Zone Parent.
- **New + Existing** on the same site → routing follows **New**.
- **Multiple services** on one site → expect the **deepest** review path.
- Full matrices → **Costing Routing** PDF in **Module Reference Files** (sidebar).

### What to expect (routing and validation)

- **Deeper paths take longer**—multiple services, manual validation, or exceptions from the matrices expand the number of hands on the estimate.
- **Automation is not a promise** of instant approval of the deal; it is a routing shortcut when **eligibility** and **data quality** hold. If fields or site facts are wrong, downstream teams may **re-open** or **re-route**—fix upstream to avoid churn.

## OBR (Operational Business Review)

- **What OBR is for:** **Operational Business Review** readiness—forms, cadence, and **account planning** with **ops leadership**. It helps you tell a coherent operational story about the account and priorities.
- **What OBR is not:** a substitute for **GPC Solution** approval discipline, **Approval History** actions, or **costing routing** rules. Doing OBR prep does not “check the box” on Salesforce approvals or manual validation.
- **Where to get assets:** use **Sales Resources**, your **ops contact**, and current **OBR** materials from approved channels—avoid one-off copies with stale fields or old owners.
- **Who to ask:** your **Sales Manager** or **ops leadership** contact for **cadence** and **which** OBR package to use for a given account; **Salesforce team** only if a system link or report access blocks you from completing an internal template.

## Partner, MAC, disconnect, and related pointers

- **Partner:** for **Enterprise referral** mechanics and eligibility, use the **Partner Referral Program** quick reference—keep partner-specific pricing and rules inside **approved** channels.
- **MAC vs disconnect:** after billing starts, **partial** in-life changes follow **Move-Add-Change**; **removing all services** post-billing follows **Disconnection**. Those paths are distinct from the pre-billing **Change Order** and **Cancellation** routes above.
- **Customer Move:** has its own procedure—use the **training library** linked from **Sales Resources** / **PMO** materials rather than informal summaries.

## Media (optional) [deep]

*Guidde (reserved):* Guidde idea: walk through Approval History actions on a sample GPC Solution, then show Conga Change Order vs where MAC/Disconnect PDFs apply.
