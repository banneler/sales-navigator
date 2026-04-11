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

Approvals run from the GPC Solution in Salesforce. In Related List Quick Links, open Approval History, then choose Approve, Reject, Reassign, or Recall, add comments, and confirm—notification emails go to the assigned recipients automatically.

Leadership review is not limited to a single metric. Expect scrutiny of record quality: each Solution Site should have Solution Services (except A Locations), each Service should carry Products (product count on the related lists is the quick check), and Quote Lines should reconcile discounts with Regular Unit Price, Customer Unit Price, and totals—quantity may require manual math because columns are tight.

Financial and deal-health criteria called out in training include: Payback Months (Net Investment ÷ Gross Margin) versus term, new vs renewal context, and MTD/QTD/YTD payback posture; Net Investment (build, equipment, CAC-style costs—generally excluding labor); manual Product Discount outside standard tier/EVPL rules; Churn as the percent drop from existing MRC to proposed MRC; and Unfavorable Investment when Gross Margin ≤ $0 and Net Contract Value < $0. Non-Salesforce factors also matter: strategic fit, adjacent opportunity, competitiveness, distance from fiber, and Parent Opportunity context.

Know who to ask: Product Management for product-specific approval rules, Sales Management for judgment on decisions, and the Salesforce team for workflow or system issues. On mobile (iPhone or Android), use the notification bell or the approval email link, review Details (View More as needed), return to Approval History, pick the action, enter comments, and confirm—same outcome as desktop.

**Sources:**
- **Approval Overview and Training Guide - 0725** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Approval Overview and Training Guide - 0725.pdf`
- **Approval Requirements Matrix v5.5 - 0725** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Approval Requirements Matrix v5.5 - 0725.pdf`

## Change orders

Treat “change order” as a narrow window: the customer changes the contract after Closed/Won but before billing has started. If billing has already started and only part of the contract changes, that is Move/Add/Change (different process). Removing everything before billing is a Cancellation; removing everything after billing is a Disconnect—use those processes instead.

 Preconditions: GPC Solution must be Closed/Won, Booked, and not Billed—change orders cannot run once Billed is set.

 Motion: (1) If the change is significant for MRC, payback, or cost, notify your Sales Manager early. (2) From the GPC Solution, use Conga Files → Change Order template → Preview to validate the right solution and layout. (3) Enable editing: complete Solution Site affected, description, and specific changes; for new products, paste the correct Salesforce Product link for that Solution Site’s Market Group so MCOS/NCOS stay accurate. Do not delete the GPC Solution number from the form—it helps SF Admin, PMO, and CRC. (4) Obtain customer signature (and yours), upload the signed PDF to the GPC Solution, then email the completed form plus the GPC Solution link to Sales Manager (if step 1 applied), PMO, Salesforce Administrator, and CRC.

 After submission: Salesforce Administration performs the booking adjustment; PMO updates the project; CRC handles billing impacts. If the Solution Site project stage is “Pending Billing” or “7-10 Day Order,” Salesforce Admin must get PMO/CRC approval before executing the booking adjustment.

**Sources:**
- **Change Order Process - Sales Team - 0325** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Change Order Process - Sales Team - 0325.pdf`

## Costing / routing

Costing Routing drives which organizations estimate or validate spend for each Solution Site based on Site Type, Services, and Products, layered with Salesforce automation—some paths show estimates for speed, others pull data supplied by departments. This is an overview: a given site may follow a different combination than another.

 If Request Manual Validation is checked on the Solution Site, automation is skipped and each participating department must review.

 Rules of thumb from the quick reference: Solution Sites tied to a Zone Parent Opportunity may bypass automation; Reusable is not allowed when a Zone Parent is in play. Strategic Build flags when GPS falls inside preloaded boundaries, triggering Individual Drop Cost and Individual Equipment Cost systematically. If both New and Existing services are selected on one site, routing follows the New path. Multiple services on one site follow the path that requires the deepest review. OSP Automated Costing uses system estimates that OSP may override. Reusable lets OSP and Network Engineering complete routing automatically when eligibility criteria are met (see the Reusable matrix in the PDF). Wholesale bulk imports use a separate bulk-site routing pattern.

 For edge cases (especially customer moves and New vs Existing), Business Customer Care can help interpret the right service classification.

**Sources:**
- **Costing Routing Quick Reference Guide - 1123** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Costing Routing Quick Reference Guide - 1123.pdf`

## Partner, MAC, disconnect, and OBR pointers

Partner: for Enterprise referral mechanics and eligibility, use the Partner Referral Program quick reference—keep partner-specific pricing and rules inside approved channels.

 MAC vs disconnect: after billing starts, partial in-life changes follow Move-Add-Change; removing all services post-billing follows Disconnection. Those are distinct from the pre-billing Change Order and Cancellation paths above. A separate Customer Move procedure PDF also lives under the extracted (2) library for relocation scenarios.

 OBR: Operational Business Review readiness (forms and SOP) remains under the OneDrive (2) OBR folder—use for account planning cadence with ops leadership, not as a substitute for SF approval or costing routing.

**Sources:**
- **Partner Referral Program Quick Reference (Enterprise Sales) - 1223** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Partner Referral Program Quick Reference Guide - Enterprise Sales Only - 1223.pdf`
- **Move-Add-Change Processes - Sales Team - 1123** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Move-Add-Change Processes - Sales Team - 1123.pdf`
- **Disconnection Process - Sales Team - 1022** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Disconnection Process - Sales Team - 1022.pdf`
- **Customer Move Process / Procedure** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (2)/Customer Move Process.Procedure.pdf`
- **GPC training library — OneDrive extract (2) root** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (2)/`
- **Operational Business Review (OBR) folder** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (2)/Operational Business Review - OBR/`
- **OBR Sales Readiness Form - Fillable** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (2)/Operational Business Review - OBR/OBR Sales Readiness Form - Fillable.pdf`
- **OBR SOP v1.2** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (2)/Operational Business Review - OBR/OBR SOP v1.2.pdf`
- **GPC training library — OneDrive extract (3) root** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/`

## Media (optional)

*Guidde (reserved):* Guidde idea: walk through Approval History actions on a sample GPC Solution, then show Conga Change Order vs where MAC/Disconnect PDFs apply.
