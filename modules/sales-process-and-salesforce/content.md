---
id: "sales-process-and-salesforce"
title: "Salesforce"
summary: "Pipeline hygiene. Approvals. Clean handoffs."
sensitivity: "internal"
sales_trio_guidelines_only: true
reference_files:
  - label: "Salesforce Roadmap — 2025 training guides (main folder)"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/SalesforceRoadmap/Shared%20Documents/Forms/AllItems.aspx?csf=1&web=1&e=aa3Qzz&siteid=%7B3120FC34%2D7B32%2D4627%2DA6C3%2DDE1832FB7356%7D&webid=%7B1830E200%2D0828%2D45CE%2DB4F7%2D42BEE33B3084%7D&uniqueid=%7BE2E5E4EB%2DEAAF%2D4DEC%2D9003%2DB9CB553BFC5A%7D&FolderCTID=0x012000DFABF9A88316F24FA8D2F7A3EAC4739E&id=%2Fsites%2FSalesforceRoadmap%2FShared%20Documents%2FGeneral%2F2025%20Salesforce%20Training%20Guides%20%28Legacy%20BAU%20org%29"
video_sections:
  - heading: "Salesforce 101"
    items:
      - title: "Getting Started"
        src: "assets/training/salesforce/sf101-01-sections-1-and-2.mp4"
      - title: "Navigation & Records"
        src: "assets/training/salesforce/sf101-02-section-3-pt1.mp4"
      - title: "Navigation & Records — Part 2"
        src: "assets/training/salesforce/sf101-03-section-3-pt2.mp4"
      - title: "Core Concepts"
        src: "assets/training/salesforce/sf101-04-section-4.mp4"
      - title: "Sales Cycle"
        src: "assets/training/salesforce/sf101-05-section-4-sales-cycle.mp4"
      - title: "Additional Resources"
        src: "assets/training/salesforce/sf101-07-section-5-additional-resources.mp4"
  - heading: "Check In 1"
    body: |
      Short **15-minute** kickoff with **Sales Support** and your **Salesforce administrator** (**Fritz Antoine**, [salesforceadministrator@gpcom.com](mailto:salesforceadministrator@gpcom.com))—align on expectations, where to get help, and how this module fits live selling.

      Then **Amy** walks through **converting a lead** in Salesforce. Review the job aid first: [Converting Leads to an Opportunity — Quick Reference Guide (PDF)](https://gpcom.sharepoint.com/sites/SalesforceRoadmap/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FSalesforceRoadmap%2FShared%20Documents%2FGeneral%2F2025%20Salesforce%20Training%20Guides%20%28Legacy%20BAU%20org%29%2FConverting%20Leads%20to%20an%20Opportunity%20Quick%20Reference%20Guide%20%2D%201123%2Epdf&parent=%2Fsites%2FSalesforceRoadmap%2FShared%20Documents%2FGeneral%2F2025%20Salesforce%20Training%20Guides%20%28Legacy%20BAU%20org%29).
  - heading: "Creating a GPC Solution"
    items:
      - title: "Creating a GPC Solution"
        src: "assets/training/salesforce/sf-gpc-solution-video-2023.mp4"
  - heading: "Live session — GPC Solution with Amy (30 minutes)"
    body: |
      After the video, spend **30 minutes** live with **Amy** applying the GPC Solution workflow—questions, navigation, and how this ties to approvals and costing.
  - heading: "Creating a multi-site GPC Solution"
    items:
      - title: "Creating a multi-site GPC Solution"
        src: "assets/training/salesforce/sf-gpc-multisite-solution-video-2023.mp4"
  - heading: "Live session — Multi-site GPC Solution with Amy (30 minutes)"
    body: |
      After the video, **30 minutes** live with **Amy** on **multi-site** GPC Solutions. You will **work demo opportunities** during this session to practice the motion in Salesforce.
five_minute_flow:
  aria_label: "Salesforce onboarding order"
  steps:
    - title: "101"
      caption: "Self-paced videos"
    - title: "Check In 1"
      caption: "Kickoff + live lead demo"
    - title: "GPC Solution"
      caption: "Video → 30 min live"
    - title: "Multi-site"
      caption: "Video → 30 min live"
five_minute_summary: |
  - **Convert to Opportunity:** When converting an Employee Business Lead Referral, best practice is to create a new Opportunity. Use an existing Opportunity only in rare cases with your Sales Manager or Salesforce Admin.
  - **The Contract Signer:** Add the Contract Signer while you are creating the GPC Solution. Once the Solution is in Approval Pending, Salesforce will not let you add that field.
  - **DocuSign prep:** Any DocuSign recipient needs to be an existing Salesforce Contact before you send the document.
  - **Forecasting:** Forecast the GPC Solutions you are actively working, choose Forecasted / Upside / Committed based on confidence, and keep Close Date aligned to when you think the customer will sign.
  - **Contact Roles:** For each Closed-Won GPC Solution, provide Project Contact, Billing Contact, and Property Manager / On-Site Manager so PMO and Business Customer Care know who to contact.

your_coaches:
  coaches:
    - name: "Amy Wettering"
      email: "awettering@gpcom.com"
      role: "Sales Support"
      photo: "assets/training/salesforce/coaches/amy-wettering.png"
    - name: "Fritz Antoine"
      email: "salesforceadministrator@gpcom.com"
      role: "Salesforce Administrator"
      photo: "assets/training/salesforce/coaches/fritz-antoine.png"

knowledge_checks:
  - question: "You are converting an Employee Business Lead Referral. Do you create a new Opportunity?"
    options:
      - "No. Wait until they verbally commit so you don't clutter the pipeline."
      - "Yes. Best practice is to create a new Opportunity when converting this type of lead."
      - "No. Leave them as a Lead and set a reminder task for next week."
    correct_index: 1
    explanation: "The lead conversion QRG says to create a new Opportunity for Employee Business Lead Referrals in almost every case. Rare exceptions should go to your Sales Manager or Salesforce Admin."

  - question: "When is the correct time to assign the Contract Signer to the GPC Solution?"
    options:
      - "Right after the solution gets fully approved, just before you hit the Conga merge button."
      - "Early in the process, before the solution ever reaches Approval Pending."
      - "It doesn't matter, as long as it happens before the customer opens the email."
    correct_index: 1
    explanation: "The DocuSign integration guide says it is best practice to add the Contract Signer when creating the GPC Solution. You cannot add the Contract Signer while the Solution is in Approval Pending."

  - question: "You need the customer's CFO to sign the final agreement, but you've only been dealing with the IT Director. What must you do in Salesforce first?"
    options:
      - "Just type the CFO's email address manually into the DocuSign routing window."
      - "Send it to the IT Director and ask them to forward the DocuSign to the CFO."
      - "Create the CFO as a Contact on the Account record before sending the DocuSign."
    correct_index: 2
    explanation: "Any DocuSign recipient needs to be an existing Salesforce Contact before they can be selected as a recipient."

  - question: "You are about 75% sure a customer will choose a GPC Solution next month. Which forecast type should you use?"
    options:
      - "Forecasted."
      - "Upside."
      - "Committed."
    correct_index: 1
    explanation: "Use Upside when you are roughly 75% sure the customer will choose the GPC Solution next month or possibly this month. Use Committed closer to 90% confidence."
    source: "Forecasting Quick Reference Job Aid - 0622.pdf"

  - question: "Which Contact Roles does the Quick Reference Guide (QRG) ask you to provide for every Closed-Won GPC Solution?"
    options:
      - "Just the Decision Maker—everything else is optional."
      - "Project Contact, Billing Contact, and Property Manager / On-Site Manager."
      - "Sales' Main Contact and the Influencer. The project team figures the rest out post-close."
    correct_index: 1
    explanation: "The Contact Roles QRG asks you to provide Project Contact, Billing Contact, and Property Manager / On-Site Manager for each Closed-Won GPC Solution."
    source: "Contact Roles Quick Reference Guide - 1023.pdf"

  - question: "On the same Solution Site you've selected both New Services and Existing Services. Which costing routing path does Salesforce follow?"
    options:
      - "The Existing Services path."
      - "The New Services path."
      - "Both paths run in parallel and the system reconciles them at Close-Won."
    correct_index: 1
    explanation: "When New and Existing Services are both selected on the same Solution Site, costing follows the New Services path for department review."
    source: "Costing Routing Quick Reference Guide - 1123.pdf (Considerations)"

  - question: "A Solution Site is associated with a Zone Parent Opportunity. Can it use the Reusable flag for costing?"
    options:
      - "Yes—Reusable speeds up multi-site deals, so Zone Parent + Reusable is the recommended combination."
      - "No—Reusable is not allowed when a Solution Site is associated with a Zone Parent Opportunity."
      - "Only if the site is also flagged Strategic Build."
    correct_index: 1
    explanation: "Strategic Build, Zone Parent, and Reusable are independent flags. The QRG is explicit: Reusable is not allowed under a Zone Parent."
    source: "Costing Routing Quick Reference Guide - 1123.pdf (Considerations)"

  - question: "What conditions flag a Solution Site as Strategic Build?"
    options:
      - "Any deal over $50k MRC that needs extra construction or CFO review."
      - "Any deal attached to a Zone Parent Opportunity, regardless of location."
      - "The site falls inside pre-loaded Strategic Build geographic boundaries."
    correct_index: 2
    explanation: "Strategic Build is geographic, not financial or Zone Parent-driven. When the boundary triggers, Individual Drop Cost and Individual Equipment Cost apply systematically."
    source: "Costing Routing Quick Reference Guide - 1123.pdf (Considerations)"

scenarios:
  - title: "The 11th Hour Signer"
    situation: |
      You fought hard for a deal, got the verbal 'yes', and pushed the GPC Solution all the way through approvals. You go to generate the DocuSign envelope and realize the CEO needs to sign, but you never added them to the Solution.
    choices:
      - label: "Quickly type the CEO's name into the DocuSign recipient list and hit send."
        feedback: "That is not the right fix. The Contract Signer needs to be set on the GPC Solution before Approval Pending, and any DocuSign recipient needs to be an existing Salesforce Contact."

      - label: "Pull the Solution back, add the CEO as a Contact, set them as the Contract Signer, and re-route."
        feedback: "Correct. Next time, add the signer while you are creating the GPC Solution so the document step is cleaner."
---

## Overview

<!--
### System of record

Salesforce is GPC’s **system of record for every deal**—from first contact to installed revenue. Keep live opportunities and activity **in Salesforce**, not in email or spreadsheets alone.

### 2026 onboarding (Sales Support)

Work the **Coffee Summary** stepper and the **training blocks on this page** in order—the same sequence Sales Support uses (**101** → **Check In 1** → **GPC Solution** → **multi-site**). Don’t skip ahead unless leadership documents an exception.

- **Check In 1:** 15 minutes with Sales Support and **Fritz Antoine** (Salesforce administrator), then **Amy** walks **live lead conversion**. Skim the job aid first: [Converting Leads — quick reference (PDF)](https://gpcom.sharepoint.com/sites/SalesforceRoadmap/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FSalesforceRoadmap%2FShared%20Documents%2FGeneral%2F2025%20Salesforce%20Training%20Guides%20%28Legacy%20BAU%20org%29%2FConverting%20Leads%20to%20an%20Opportunity%20Quick%20Reference%20Guide%20%2D%201123%2Epdf&parent=%2Fsites%2FSalesforceRoadmap%2FShared%20Documents%2FGeneral%2F2025%20Salesforce%20Training%20Guides%20%28Legacy%20BAU%20org%29).
- **Sign-in:** **Okta** for the Salesforce app (YubiKey no longer applies here).
- **Admin contact:** **Fritz Antoine** — [salesforceadministrator@gpcom.com](mailto:salesforceadministrator@gpcom.com).
- **Written guides:** **Process Deep Dive** (below) links PDFs and job aids; the **Salesforce Roadmap** library is in **Module Reference Files**.

### Happy path

1. **Lead conversion** — When a lead is continuing in the Sales Cycle, convert it and create the Opportunity in almost every Employee Business Lead Referral case.
2. **Deal motion** — **GPC Solution** → **approvals** → **Conga** → **DocuSign**.

### Why the rules matter

Cutting corners—**no opportunity** on conversion, a late **Contract Signer**, signers that only live in a spreadsheet, or stale forecast dates—creates rework for Sales Support, PMO, Business Customer Care, and leadership.

---
-->

## Key Guidelines

1. **Search before you create:** Use Salesforce search and the conversion match prompts to avoid duplicate Accounts and Contacts.
2. **Convert to Opportunity:** When converting an Employee Business Lead Referral, best practice is to create a new Opportunity. Use an existing Opportunity only in rare cases with your Sales Manager or Salesforce Admin.
3. **Forecast accurately:** Forecast the GPC Solutions you are working, use Upside at roughly 75% confidence and Committed at roughly 90%, and keep Close Date aligned to the likely signature date.
4. **Set Contract Signer early:** Add the Contract Signer when you create the GPC Solution. You cannot add that field while the Solution is in Approval Pending.
5. **Contacts must exist in Salesforce:** DocuSign recipients must be Salesforce Contacts before you can select them as recipients.

---

## Common Landmines

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

::: flip ["I'll skip creating the opportunity on conversion—less work."]
For Employee Business Lead Referrals, best practice is to create a new Opportunity during conversion. Existing Opportunity is rare; check with your Sales Manager or Salesforce Admin first.
:::

::: flip ["I'll leave the Close Date alone until the customer signs."]
Update Close Date as the customer's timeline changes. Sales Leadership uses it to understand when the GPC Solution is likely to close.
:::

::: flip ["I'll add the Contract Signer right before I send to DocuSign."]
Set Contract Signer when you create the GPC Solution or early in its lifecycle. Once the Solution is in Approval Pending, you cannot add the Contract Signer.
:::

::: flip ["My signers are saved in a spreadsheet—I'll add them to Salesforce later."]
DocuSign recipients must be existing Salesforce Contacts before you send the document. Add the Contact first, then select them as a recipient.
:::

::: flip ["Close date is flexible—stage and amount are what matter."]
Close Date is part of the forecast. Use it to tell Sales Leadership when you think the GPC Solution will be Closed/Won.
:::

::: flip ["I'll forecast both GPC Solutions under the Parent Opportunity so the numbers roll up."]
Forecast only the GPC Solution you expect to sell. Forecasting both just because they sit under a Parent Opportunity inflates the Parent Opportunity numbers.
:::

</div>

---

## Process Deep Dive [deep]

### Contact Roles — who PMO needs

For every Closed-Won GPC Solution, the Contact Roles QRG asks you to provide **Project Contact**, **Billing Contact**, and **Property Manager / On-Site Manager**. Those roles tell PMO who to work with on installation, who Business Customer Care should contact for billing, and who can help with site access.

The full role list, from the Contact Roles QRG:

- **Sales' Main Contact** — the person you reach out to about the sale or contract.
- **Influencer** — encourages or recommends GPC to the Decision Maker.
- **Decision Maker** — signs the contract. May or may not be the owner.
- **Project Contact** — PMO's point of contact for installation. **Provide for every Closed-Won Solution.**
- **Billing Contact** — PMO and Business Customer Care's billing contact. **Provide for every Closed-Won Solution.**
- **Property Manager / On-Site Manager** — for site access. **Provide for every Closed-Won Solution.**
- **General Contractor** — only when construction is needed.
- **IT / Technical / Data Contact** — coordinates with the customer's IT contractor.
- **Phone System Contact** — coordinates Voice / phone-system installs (skip for UC-only deals).
- **Agent (Channel)** — Channel Sales only.
- **Business User** — the person actually using the service.
- **Other** — last resort, when nothing else fits.

**On the Contact record itself:** set **Status = Active** and populate **Preferred Contact Method** with the matching contact info. If a Contact leaves the company, update the Status to Inactive.

### Costing Routing & Reusable — what changes routing

Every Solution Site is routed for costing based on the **Services**, **Site Type**, and **Products** selected. Start with the New-vs-Existing distinction:

- **New Services** — Services that need a new install connection, or the customer is brand new to GPC.
- **Existing Services** — Services GPC already provides at the site; you're upgrading, downgrading, or adding features.

**Two rules to memorize.** Get either wrong and your costing path may not match the work the site needs:

1. **If New *and* Existing Services are both selected on the same Solution Site, routing follows the New Services path.**
2. **If multiple Services are selected on the same Site, routing follows the path of the Service that needs the deepest review.**

**Three flags can change the routing path.** They are **independent of each other**—don't assume Strategic Build implies Reusable, or that Zone Parent gates Strategic Build:

| Flag | What it does | When it applies |
| --- | --- | --- |
| **Strategic Build** | Individual Drop Cost and Individual Equipment Cost apply systematically. | Site's GPS coordinates fall within geographic boundaries pre-loaded into Salesforce. |
| **Zone Parent Opportunity** | Solution Sites under a Zone Parent may bypass automation in routing. | Multi-site deals with a parent Opportunity tying child Solutions together. |
| **Reusable** | OSP and Network Engineering complete the costing routing on the team's behalf via the Reusable matrix. | Specific criteria are met (see QRG). **Not allowed under a Zone Parent.** |

**Reusable and Zone Parent do not pair.** Reusable is not allowed when a Solution Site is associated with a Zone Parent Opportunity. Keep the flags separate: Strategic Build is geographic, Zone Parent is structural, and Reusable depends on the matrix criteria.

<!--
**Lifecycle flow:**
1. **Leads** → Convert when the lead is continuing in the Sales Cycle. Match to the right existing Account or Contact when Salesforce finds one; create new records when it does not.
2. **Opportunity:** for Employee Business Lead Referrals, create a new Opportunity in almost every case. Use an existing Opportunity only in rare cases with your Sales Manager or Salesforce Admin.
3. **Referral programs:** after conversion, verify referral fields and keep the referrer updated on status and payment eligibility.
4. **GPC Solution / CPQ:** build the Solution, add Contract Signer early, and keep DocuSign recipients as Salesforce Contacts.
5. **Conga → Send to DocuSign:** use the selected Conga document or upload the edited document when needed. Terms & Conditions edits belong with Legal.

**Salesforce hygiene habits:**
- **Search:** use Universal Search and conversion match prompts before creating duplicate records.
- **Forecast:** keep Forecasted / Upside / Committed and Close Date current as the customer's timeline changes.
- **GPC Solution:** set Contract Signer early; all DocuSign recipients must be Contacts.

**DocuSign from Salesforce:**
- Set Contract Signer early (not in Approval Pending)
- Conga → Send to DocuSign; recipients = Contacts
- First-time DocuSign auth may be required
- Terms changes → Legal before sending

**After Closed/Won:** Contact Roles matter. Provide Project Contact, Billing Contact, and Property Manager / On-Site Manager so the teams handling installation, billing, and access have the right names.

**Avoid:** converting Employee Business Lead Referrals without a new Opportunity unless your Sales Manager or Salesforce Admin confirms the exception; duplicate contacts; stale close dates; Contract Signer blank until Approval Pending; DocuSign recipients who are not Salesforce Contacts; forecasting both GPC Solutions under a Parent Opportunity just to roll up more dollars.

**Sales Support collateral (SharePoint)** — use alongside the videos when you need the written path:

- **Approvals:** [Approval overview & training guide (PDF)](https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Approval%20Overview%20and%20Training%20Guide%20-%200725.pdf?csf=1&web=1&e=0e227N) · [Approval requirements matrix v5.5 (PDF)](https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Approval%20Requirements%20Matrix%20v5.5%20-%200725.pdf?csf=1&web=1&e=2c4K38)
- **Cycle & process:** [Salesforce hierarchy & cycle overview (PPTX)](https://gpcom.sharepoint.com/:p:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Salesforce%20Hierarchy%20%26%20Cycle%20Overview%20Demo%20template%20-%200723.pptx?d=wc0563555f48e4c22bd45fdeaf0e36c77&csf=1&web=1&e=Osb5bj) · [Which process do I use — flow chart & quick job aid (PDF)](https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Which%20Process%20Do%20I%20Use%20Flow%20Chart%20and%20Quick%20Job%20Aid%20-%200922.pdf?csf=1&web=1&e=EIZhnU) · [Converting Leads to an Opportunity — quick reference (PDF)](https://gpcom.sharepoint.com/sites/SalesforceRoadmap/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FSalesforceRoadmap%2FShared%20Documents%2FGeneral%2F2025%20Salesforce%20Training%20Guides%20%28Legacy%20BAU%20org%29%2FConverting%20Leads%20to%20an%20Opportunity%20Quick%20Reference%20Guide%20%2D%201123%2Epdf&parent=%2Fsites%2FSalesforceRoadmap%2FShared%20Documents%2FGeneral%2F2025%20Salesforce%20Training%20Guides%20%28Legacy%20BAU%20org%29)
- **Sites & changes:** [Solution site type — quick reference (PDF)](https://gpcom.sharepoint.com/:b:/s/SalesforceRoadmap/IQCK0LjJijwfTJmWzw5CEn7bAU_ivZaWfl7Hvq7Q1CF7lDw?e=7Ey9Tm) · [Move–add–change processes — Sales Team (PDF)](https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Move-Add-Change%20Processes%20-%20Sales%20Team%20-%201123.pdf?csf=1&web=1&e=vu44zS) · [Change order process — Sales Team (PDF)](https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Change%20Order%20Process%20-%20Sales%20Team%20-%200325.pdf?csf=1&web=1&e=FEPLBC)
- **Broader enablement:** [Sales Resources — GPC Sales hub](https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx)

::: accordion Lead Conversion Quick Reference
Converting a lead creates the account, contact, and opportunity in one step.


:::

::: accordion Salesforce Home & Dashboards
Use the Salesforce Home page and dashboards to keep your pipeline and follow-ups current.


:::

::: accordion DocuSign Integration Reference
Setting up Contract Signer and sending envelopes from Salesforce via Conga.

:::
-->