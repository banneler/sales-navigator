---
id: "sales-process-and-salesforce"
title: "Sales Process & Salesforce"
summary: "Deal progression. Clean pipelines. DocuSign workflows."
sensitivity: "public"
reference_files:
  - label: "Salesforce Roadmap — 2025 training guides (main folder)"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/SalesforceRoadmap/Shared%20Documents/Forms/AllItems.aspx?csf=1&web=1&e=aa3Qzz&siteid=%7B3120FC34%2D7B32%2D4627%2DA6C3%2DDE1832FB7356%7D&webid=%7B1830E200%2D0828%2D45CE%2DB4F7%2D42BEE33B3084%7D&uniqueid=%7BE2E5E4EB%2DEAAF%2D4DEC%2D9003%2DB9CB553BFC5A%7D&FolderCTID=0x012000DFABF9A88316F24FA8D2F7A3EAC4739E&id=%2Fsites%2FSalesforceRoadmap%2FShared%20Documents%2FGeneral%2F2025%20Salesforce%20Training%20Guides%20%28Legacy%20BAU%20org%29"
video_carousel_intro: "Same playlist Sales Support uses for onboarding: seven 101 clips in order, then the two GPC Solution builds. Separate callout: signing in to the Salesforce app now goes through Okta (YubiKey no longer applies to Salesforce)—that is production login, not something extra you do just to play these videos."
video_carousel:
  - title: "Salesforce 101 — Watch 1st, Sections 1 and 2"
    src: "assets/training/salesforce/sf101-01-sections-1-and-2.mp4"
  - title: "Salesforce 101 — Watch 2nd, Section 3 part 1"
    src: "assets/training/salesforce/sf101-02-section-3-pt1.mp4"
  - title: "Salesforce 101 — Watch 3rd, Section 3 part 2"
    src: "assets/training/salesforce/sf101-03-section-3-pt2.mp4"
  - title: "Salesforce 101 — Watch 4th, Section 4"
    src: "assets/training/salesforce/sf101-04-section-4.mp4"
  - title: "Salesforce 101 — Watch 5th, Section 4 sales cycle"
    src: "assets/training/salesforce/sf101-05-section-4-sales-cycle.mp4"
  - title: "Salesforce 101 — Watch 6th, Section 5 intro"
    src: "assets/training/salesforce/sf101-06-section-5-intro.mp4"
  - title: "Salesforce 101 — Watch 7th, Section 5 additional resources"
    src: "assets/training/salesforce/sf101-07-section-5-additional-resources.mp4"
  - title: "Creating a GPC Solution (training video)"
    src: "assets/training/salesforce/sf-gpc-solution-video-2023.mp4"
  - title: "Creating a multi-site GPC Solution (training video)"
    src: "assets/training/salesforce/sf-gpc-multisite-solution-video-2023.mp4"
five_minute_summary: |
  - **Start with the clips:** Training videos below—101 in watch order, then GPC Solution and multi-site.
    - **Salesforce login:** Watch out for the update—**Salesforce now uses Okta** (YubiKey no longer applies to signing in to the Salesforce app).
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

**2026 onboarding (Sales Support):** Run the **Training videos** in order—Salesforce **101** (Watch 1st through 7th), then **Creating a GPC Solution** and **Creating a multi-site GPC Solution**. **Salesforce login** changed: use **Okta** to open the Salesforce org (**YubiKey** is no longer used for that app—the clips themselves don’t require a separate login flow). **Salesforce admin:** **Fritz Antoine**, salesforceadministrator@gpcom.com. Keep live deals in Salesforce—not in email or spreadsheets alone. **PDFs, decks, and job aids** are linked in **Process Deep Dive** below; the **Salesforce Roadmap** training folder is also one click away under **Module Reference Files**.

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

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

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

::: flip ["Close date is flexible—stage and amount are what matter."]
Stage, amount, and close date should move together and reflect a forecast you'd defend. Stale dates break leadership views and downstream planning.
:::

::: flip ["I'll run my follow-ups from notes—I'll update Salesforce when the deal heats up."]
Tasks, list views, and Home dashboards are the hygiene habit—if activity isn't on the record, handoffs and approvals break for everyone who touches the deal after you.
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

**Sales Support collateral (SharePoint)** — use alongside the videos when you need the written path:

- **Approvals:** [Approval overview & training guide (PDF)](https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Approval%20Overview%20and%20Training%20Guide%20-%200725.pdf?csf=1&web=1&e=0e227N) · [Approval requirements matrix v5.5 (PDF)](https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Approval%20Requirements%20Matrix%20v5.5%20-%200725.pdf?csf=1&web=1&e=2c4K38)
- **Cycle & process:** [Salesforce hierarchy & cycle overview (PPTX)](https://gpcom.sharepoint.com/:p:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Salesforce%20Hierarchy%20%26%20Cycle%20Overview%20Demo%20template%20-%200723.pptx?d=wc0563555f48e4c22bd45fdeaf0e36c77&csf=1&web=1&e=Osb5bj) · [Which process do I use — flow chart & quick job aid (PDF)](https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Which%20Process%20Do%20I%20Use%20Flow%20Chart%20and%20Quick%20Job%20Aid%20-%200922.pdf?csf=1&web=1&e=EIZhnU)
- **Sites & changes:** [Solution site type — quick reference (PDF)](https://gpcom.sharepoint.com/:b:/s/SalesforceRoadmap/IQCK0LjJijwfTJmWzw5CEn7bAU_ivZaWfl7Hvq7Q1CF7lDw?e=7Ey9Tm) · [Move–add–change processes — Sales Team (PDF)](https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Move-Add-Change%20Processes%20-%20Sales%20Team%20-%201123.pdf?csf=1&web=1&e=vu44zS) · [Change order process — Sales Team (PDF)](https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Change%20Order%20Process%20-%20Sales%20Team%20-%200325.pdf?csf=1&web=1&e=FEPLBC)
- **Broader enablement:** [Sales Resources — GPC Sales hub](https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx)

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
