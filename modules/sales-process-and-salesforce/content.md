---
id: "sales-process-and-salesforce"
title: "Sales Process & Salesforce"
summary: "Leads → convert → opportunities → GPC Solutions → approvals → Conga/DocuSign. SF 101, lead conversion ref, DocuSign integration in Sales Resources."
sensitivity: "public"
reference_files:
  - label: "Sales Resources (enablement hub)"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx"
five_minute_summary: |
  - **Convert Lead** when ready to quote—usually creates account, contact, **new opportunity** (exceptions: manager/admin).
  - Stages: discovery → GPC Solution / CPQ → approvals → contract; **Closed/Won** → projects per site; **never delete** Closed/Lost history.
  - Hygiene: Tasks, pinned views, clean contacts, Home dashboards; **Universal Search** for fast lookup.
  - **Contract Signer** on GPC Solution **early**; **Send to DocuSign** after Conga; signers = **Contacts** on the account.

knowledge_checks:
  - question: "When converting a lead in normal circumstances, what should you almost always do?"
    options:
      - "Create a new opportunity as part of conversion"
      - "Check 'Do not create an opportunity upon conversion'"
      - "Delete the lead record after conversion"
    correct_index: 0
    explanation: "Default = new opportunity; skipping needs manager/admin approval."

  - question: "For DocuSign from a GPC Solution, when is it problematic to add or rely on the Contract Signer field?"
    options:
      - "When the solution is already in Approval Pending (and adding late can behave differently by stage)"
      - "Only when the customer uses Gmail"
      - "Never; Contract Signer is optional for every stage"
    correct_index: 0
    explanation: "Set Contract Signer early; **Approval Pending** blocks adding it."

  - question: "After an opportunity is Closed/Lost, what does process guidance say about the Salesforce record?"
    options:
      - "Leave the data in place; the opportunity may return later"
      - "Delete the opportunity to keep the pipeline clean"
      - "Archive it outside Salesforce only"
    correct_index: 0
    explanation: "Don’t delete—history matters."

  - question: "Who should clear rare exceptions where you skip creating an opportunity on lead conversion?"
    options:
      - "Your sales manager or Salesforce admin"
      - "Only the customer’s IT department"
      - "No one; reps decide alone"
    correct_index: 0
    explanation: "Manager or admin for exceptions."

  - question: "For employee business lead referral opportunities after conversion, what should you verify and maintain?"
    options:
      - "Referral fields on the opportunity and communication with the referrer on status and eligibility"
      - "Only the opportunity name; referral data is optional"
      - "Delete referral fields to protect privacy"
    correct_index: 0
    explanation: "Referral fields + referrer updates."

  - question: "What is a practical daily habit for working your book in Salesforce per Salesforce 101-style guidance?"
    options:
      - "Use Tasks, pinned list views, and Home dashboards to keep follow-ups and reporting current"
      - "Avoid list views so no one sees your pipeline"
      - "Rely only on paper notes outside Salesforce"
    correct_index: 0
    explanation: "Tasks, views, dashboards."

  - question: "Before Send to DocuSign from a GPC Solution, where should signers exist in Salesforce?"
    options:
      - "As contacts on the relevant account (roles can help)"
      - "Only as leads that are never converted"
      - "Only in an external spreadsheet"
    correct_index: 0
    explanation: "Contacts on the account."

  - question: "When merging a Conga document and sending for signature, what is the recommended early step on the GPC Solution?"
    options:
      - "Set Contract Signer when you create or early in the solution lifecycle"
      - "Wait until Closed/Won to pick any signer"
      - "Skip Conga and email a blank PDF"
    correct_index: 0
    explanation: "Contract Signer early."

  - question: "What does Universal Search help you do in the GPC Sales experience?"
    options:
      - "Find records containing your search term across objects"
      - "Replace approval workflows automatically"
      - "Delete closed opportunities in bulk"
    correct_index: 0
    explanation: "Cross-object search."

  - question: "After Closed/Won on an opportunity, what typically happens in the solution lifecycle per Salesforce 101?"
    options:
      - "A project is created for each solution site in the GPC Solution"
      - "The GPC Solution is deleted to save space"
      - "All contacts are removed from the account"
    correct_index: 0
    explanation: "Projects per solution site."

scenarios:
  - title: "Employee business lead referral after conversion"
    situation: |
      Converted employee referral lead; opportunity open.
    choices:
      - label: "Skip referral fields; they are only for reporting to HR."
        feedback: "Wrong—keep referral fields and referrer updated."

      - label: "Verify referral fields on the opportunity and keep the referrer informed on status and eligibility."
        feedback: "Correct."

  - title: "First DocuSign envelope from Conga"
    situation: |
      Conga merge ready; **Contract Signer** never set; solution **Approval Pending**.
    choices:
      - label: "Add Contract Signer now and send immediately."
        feedback: "You can’t add Contract Signer in Approval Pending—fix stage/workflow first."

      - label: "Pause and fix stage/signing prerequisites per the DocuSign integration guide (e.g. Contract Signer timing) before sending."
        feedback: "Correct."
---

## Lifecycle

**Leads** → **Convert** when quoting (default: new account/contact/opportunity). **Exceptions** (skip opportunity) = manager or admin only.

**Opportunity:** stages, value, next steps. **Closed/Won** → projects per site. **Closed/Lost** → capture why; **do not delete**.

**Referral programs:** after conversion, **referral fields** accurate + **referrer** informed.

**Read more:** Converting Leads ref, **Salesforce 101**—**Sales Resources** / GPCU.

::: accordion Lead Conversion Quick Reference
Converting a lead creates the account, contact, and opportunity in one step.

![Lead conversion](Proposal_Assets/training/from-pdfs/extracted/onedrive-1-4-10-2026-3/converting-leads-to-an-opportunity-quick-reference-guide-1123/images/converting-leads-to-an-opportunity-quick-reference-guide-1123-p2-img0.png)

![Opportunities view](Proposal_Assets/training/from-pdfs/extracted/onedrive-1-4-10-2026-3/salesforce-101-manual-0422/images/salesforce-101-manual-0422-p7-img0.png)
:::

---

## Discovery (quick)

Customer/scope, pain/success, decision process, commercial, competition, **next step** as a **Task**. If you can’t answer most of these, stage/forecast is probably ahead of the customer.

---

## Hygiene & CPQ

**Daily:** Tasks you’ll do; pinned views; contacts on right **account**; Home dashboards fresh; **Universal Search**.

**Forecast:** Commit what you’d defend; **stage, amount, close date** move together; note risks on the record.

**GPC Solution:** Sites/lines complete before approval; **Contract Signer early**; **DocuSign** recipients = **Contacts**; Conga → Send to DocuSign when process allows—not a substitute for approvals/Legal.

::: accordion Salesforce Home & Dashboards
Use the Salesforce Home page and dashboards to keep your pipeline and follow-ups current.

![Salesforce Home](Proposal_Assets/training/from-pdfs/extracted/onedrive-1-4-10-2026-3/salesforce-101-manual-0422/images/salesforce-101-manual-0422-p3-img1.png)

![Dashboards](Proposal_Assets/training/from-pdfs/extracted/onedrive-1-4-10-2026-3/dashboards-quick-reference-guide-sales-0224/images/dashboards-quick-reference-guide-sales-0224-p1-img0.png)
:::

---

## DocuSign from Salesforce

Set **Contract Signer** early (**not** in **Approval Pending**). Conga → **Send to DocuSign**; recipients = Contacts; first-time DocuSign auth may be required. **Terms** changes → Legal.

**Read:** Salesforce & DocuSign Integration—**Sales Resources** / GPCU.

::: accordion DocuSign Integration Reference
Setting up Contract Signer and sending envelopes from Salesforce via Conga.

![DocuSign integration](Proposal_Assets/training/from-pdfs/extracted/onedrive-1-4-10-2026-3/salesforce-docusign-integration-training-guide-0623/images/salesforce-docusign-integration-training-guide-0623-p4-img0.png)
:::

---

## Handoffs & mistakes

**Handoffs:** Complete sites/products/contacts at Closed/Won; **Tasks** + clear activity notes; referral fields still accurate.

**Avoid:** Converting without opportunity (normal deals); duplicate contacts; stale close dates; incomplete GPC Solutions for approval; **Contract Signer** blank until Approval Pending; deleting Closed/Lost; signers not Contacts; spreadsheet-only pipeline.

---

## Weekly deep dives [deep]

**Salesforce Success Tips**—Salesforce Users team **General** (weekly). Block time: Tasks, stages/dates, referral deals, stuck GPC Solutions. **Salesforce 201**, training videos, enterprise proposal intro—**Sales Resources**.

## Media (optional) [deep]

*Guidde:* conversion + referral fields; pinned views; Conga → File → DocuSign with Contract Signer set early.
