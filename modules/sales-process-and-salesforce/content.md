---
id: "sales-process-and-salesforce"
title: "Sales Process & Salesforce"
summary: "Leads → convert → opportunities → GPC Solutions → approvals → Conga/DocuSign. SF 101, lead conversion ref, DocuSign integration in Sales Resources."
sensitivity: "public"
reference_files:
  - label: "Sales Resources (enablement hub)"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx"
five_minute_summary: |
  - **Lead Conversion:** Convert leads only when they are ready for a quote. This should default to creating a new opportunity, account, and contact.
  - **Pipeline Management:** Keep stages accurate to the buying process. Never delete Closed/Lost opportunities, as that history is critical for forecasting and analysis.
  - **DocuSign Workflows:** Set the Contract Signer early on the GPC Solution. Ensure all signers exist as Contacts in Salesforce before sending the envelope.
  - **Data Hygiene:** Keep your pipeline clean by logging tasks, maintaining accurate close dates, and using the Salesforce Home dashboards to track follow-ups.

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
    explanation: "Don't delete—history matters."

  - question: "Who should clear rare exceptions where you skip creating an opportunity on lead conversion?"
    options:
      - "Your sales manager or Salesforce admin"
      - "Only the customer's IT department"
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
        feedback: "You can't add Contract Signer in Approval Pending—fix stage/workflow first."

      - label: "Pause and fix stage/signing prerequisites per the DocuSign integration guide (e.g. Contract Signer timing) before sending."
        feedback: "Correct."
---

## Overview

Salesforce is GPC’s **system of record for every deal**—from first contact to installed revenue.

**The happy path**

1. Convert leads when you’re ready to quote — **default: create the opportunity** (exceptions need manager/admin approval).
2. Build the **GPC Solution** → run **approvals** → **Conga** merge → **DocuSign**.

**Why the rules matter:** skipping steps—no opportunity on conversion, deleting **Closed/Lost**, late **Contract Signer**, signers only in a spreadsheet—breaks approvals, billing, and commissions. Clean data in, clean revenue out.

---

## Key Guidelines

1. **Always search first:** Duplicates cause ownership disputes and data quality problems. Search Salesforce before converting a lead.
2. **Convert to Opportunity:** The default is always to create an opportunity upon conversion. Exceptions require manager or admin approval.
3. **Accurate Pipeline Stages:** Stage, amount, and close date should move together and reflect reality you'd defend to leadership. Inflated stages distort the forecast.
4. **Set Contract Signer early:** Missing signers block DocuSign. Set the Contract Signer when you create the GPC Solution, well before it reaches Approval Pending.
5. **Contacts must exist in Salesforce:** DocuSign recipients must be Contacts on the account before sending. You cannot send an envelope to an email address that isn't attached to a Contact record.

---

## Common Pitfalls

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">

::: flip ["I'll skip creating the opportunity on conversion—less work."]
Default is always create the opportunity. Exceptions require manager or admin approval. Skipping on your own causes reporting gaps and approval issues.
:::

::: flip ["I deleted the Closed/Lost record to clean up my pipeline."]
Never delete Closed/Lost opportunities. The history matters for forecasting, win/loss analysis, and potential re-engagement.
:::

::: flip ["I'll add the Contract Signer right before I send to DocuSign."]
Set Contract Signer when you create the GPC Solution or early in its lifecycle. Adding it during Approval Pending behaves differently and can block the envelope.
:::

::: flip ["My signers are saved in a spreadsheet—I'll add them to Salesforce later."]
DocuSign recipients must be Contacts on the account before sending. Contacts not in Salesforce = envelope can't be sent.
:::

</div>

---

## Process Deep Dive [deep]

**Lifecycle flow:**
1. **Leads** → Convert when ready to quote. Default: creates account + contact + new opportunity. Exception (skip opportunity): manager or admin only.
2. **Opportunity:** stages, value, next steps. Closed/Won → projects per site. Closed/Lost → capture why; do not delete.
3. **Referral programs:** after conversion, referral fields accurate + referrer informed on status and eligibility.
4. **GPC Solution / CPQ:** Sites/lines complete before approval; Contract Signer early; DocuSign recipients = Contacts.
5. **Conga → Send to DocuSign:** only when process allows—not a substitute for approvals/Legal. Terms changes → Legal.

**Salesforce hygiene habits:**
- **Daily:** Tasks you'll do; pinned views; contacts on right account; Home dashboards fresh; Universal Search
- **Forecast:** Commit what you'd defend; stage + amount + close date move together; note risks on the record
- **GPC Solution:** complete before approval; Contract Signer set early; all recipients are Contacts

**DocuSign from Salesforce:**
- Set Contract Signer early (not in Approval Pending)
- Conga → Send to DocuSign; recipients = Contacts
- First-time DocuSign auth may be required
- Terms changes → Legal before sending

**After Closed/Won:** a project is created for each Solution Site. Complete sites/products/contacts at Closed/Won; Tasks + clear activity notes; referral fields still accurate.

**Avoid:** converting without opportunity (normal deals); duplicate contacts; stale close dates; incomplete GPC Solutions for approval; Contract Signer blank until Approval Pending; deleting Closed/Lost; signers not Contacts; spreadsheet-only pipeline.

::: accordion Lead Conversion Quick Reference
Converting a lead creates the account, contact, and opportunity in one step.

*Collateral image — coming soon*

*Collateral image — coming soon*
:::

::: accordion Salesforce Home & Dashboards
Use the Salesforce Home page and dashboards to keep your pipeline and follow-ups current.

*Collateral image — coming soon*

*Collateral image — coming soon*
:::

::: accordion DocuSign Integration Reference
Setting up Contract Signer and sending envelopes from Salesforce via Conga.

*Collateral image — coming soon*
:::
