---
id: "sales-process-and-salesforce"
title: "Sales Process & Salesforce"
summary: "How GPC runs deals in Salesforce: from leads and conversion through opportunities, GPC Solutions, approvals, and contracting with DocuSign. Drawn from Salesforce 101, the leads conversion quick reference, and the Salesforce\u2013DocuSign integration guide\u2014plus where to find weekly tips and video walkthroughs."
sensitivity: "public"
reference_files:
  - label: "Sales Resources (enablement hub)"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx"
five_minute_summary: |
  - Leads capture early interest; when you are ready to quote, **Convert Lead** creates or links the account, contact, and (usually) a new opportunity—exceptions need manager or admin alignment.
  - Opportunities move through solution design, **GPC Solution** build and costing, approvals, then contracting; Closed/Won spawns projects per solution site; do not delete Closed/Lost history.
  - Daily hygiene (tasks, pinned list views, clean contacts, Home dashboards) keeps handoffs and reporting trustworthy; Universal Search helps you find records quickly.
  - DocuSign sends from Salesforce for convenience: set **Contract Signer** on the GPC Solution early, use Conga then **Send to DocuSign**, and keep recipients as Salesforce contacts.

knowledge_checks:
  - question: "When converting a lead in normal circumstances, what should you almost always do?"
    options:
      - "Create a new opportunity as part of conversion"
      - "Check 'Do not create an opportunity upon conversion'"
      - "Delete the lead record after conversion"
    correct_index: 0
    explanation: "Standard practice is to create a new opportunity when converting; skipping opportunity creation is for rare exceptions cleared with sales management or the admin."

  - question: "For DocuSign from a GPC Solution, when is it problematic to add or rely on the Contract Signer field?"
    options:
      - "When the solution is already in Approval Pending (and adding late can behave differently by stage)"
      - "Only when the customer uses Gmail"
      - "Never; Contract Signer is optional for every stage"
    correct_index: 0
    explanation: "Best practice is to set Contract Signer when you create the solution; you cannot add contract signer while the solution is in Approval Pending, and late adds may not behave the same."

  - question: "After an opportunity is Closed/Lost, what does process guidance say about the Salesforce record?"
    options:
      - "Leave the data in place; the opportunity may return later"
      - "Delete the opportunity to keep the pipeline clean"
      - "Archive it outside Salesforce only"
    correct_index: 0
    explanation: "Closed/lost opportunities should not be deleted—history and context matter if the deal revives."

  - question: "Who should clear rare exceptions where you skip creating an opportunity on lead conversion?"
    options:
      - "Your sales manager or Salesforce admin"
      - "Only the customer’s IT department"
      - "No one; reps decide alone"
    correct_index: 0
    explanation: "Skipping opportunity creation is for unusual cases aligned with sales management or the Salesforce administrator."

  - question: "For employee business lead referral opportunities after conversion, what should you verify and maintain?"
    options:
      - "Referral fields on the opportunity and communication with the referrer on status and eligibility"
      - "Only the opportunity name; referral data is optional"
      - "Delete referral fields to protect privacy"
    correct_index: 0
    explanation: "Referral program integrity depends on accurate referral fields and keeping the referrer informed."

  - question: "What is a practical daily habit for working your book in Salesforce per Salesforce 101-style guidance?"
    options:
      - "Use Tasks, pinned list views, and Home dashboards to keep follow-ups and reporting current"
      - "Avoid list views so no one sees your pipeline"
      - "Rely only on paper notes outside Salesforce"
    correct_index: 0
    explanation: "Daily hygiene with tasks, views, and dashboards keeps handoffs and leadership reporting trustworthy."

  - question: "Before Send to DocuSign from a GPC Solution, where should signers exist in Salesforce?"
    options:
      - "As contacts on the relevant account (roles can help)"
      - "Only as leads that are never converted"
      - "Only in an external spreadsheet"
    correct_index: 0
    explanation: "Recipients should be Salesforce contacts tied to the account; the integration assumes proper contact records."

  - question: "When merging a Conga document and sending for signature, what is the recommended early step on the GPC Solution?"
    options:
      - "Set Contract Signer when you create or early in the solution lifecycle"
      - "Wait until Closed/Won to pick any signer"
      - "Skip Conga and email a blank PDF"
    correct_index: 0
    explanation: "Set Contract Signer early; late changes behave differently by stage and Approval Pending blocks adding the field."

  - question: "What does Universal Search help you do in the GPC Sales experience?"
    options:
      - "Find records containing your search term across objects"
      - "Replace approval workflows automatically"
      - "Delete closed opportunities in bulk"
    correct_index: 0
    explanation: "Universal Search helps locate records quickly; it supports hygiene and navigation, not bulk destructive actions."

  - question: "After Closed/Won on an opportunity, what typically happens in the solution lifecycle per Salesforce 101?"
    options:
      - "A project is created for each solution site in the GPC Solution"
      - "The GPC Solution is deleted to save space"
      - "All contacts are removed from the account"
    correct_index: 0
    explanation: "Closed/Won advances delivery: projects spin up per solution site as described in the sales-cycle overview."

scenarios:
  - title: "Employee business lead referral after conversion"
    situation: |
      You converted a lead that came through the employee business lead referral program. The new opportunity is open and you are updating stages.
    choices:
      - label: "Skip referral fields; they are only for reporting to HR."
        feedback: "Wrong. Verify referral fields on the opportunity (lead source, referred by, or partner referral fields as applicable) and keep the referrer updated on status and eligibility."

      - label: "Verify referral fields on the opportunity and keep the referrer informed on status and eligibility."
        feedback: "Correct. Referral data and communication protect the program and the relationship."

  - title: "First DocuSign envelope from Conga"
    situation: |
      You merged a Conga document and want to send it for signature from the GPC Solution. The Contract Signer lookup was never populated and the solution is now **Approval Pending**.
    choices:
      - label: "Add Contract Signer now and send immediately."
        feedback: "You cannot add Contract Signer while the solution is in Approval Pending; you need to address stage/signing workflow per training rather than forcing the field in that state."

      - label: "Pause and fix stage/signing prerequisites per the DocuSign integration guide (e.g. Contract Signer timing) before sending."
        feedback: "Right. Set Contract Signer early in the lifecycle; Approval Pending blocks adding Contract Signer, so align with process before Send to DocuSign."
---
## Lead and opportunity lifecycle

- **Leads** capture early interest (campaigns, inbound, referrals). Enter them promptly so history and routing stay clear.
- **Convert to opportunity** when you are ready to quote, price, or formally pursue the deal—not when you “might” get back to someone someday.
- Conversion usually **creates or links the account and contact** and **creates a new opportunity**. That is the default path; exceptions need alignment (see below).
- The **opportunity** is where stages, value, next steps, and handoffs live for leadership and delivery. Name it so anyone can tell what is being sold and to whom.

### Stages (what “good” looks like)

- **Early**: Problem, budget signal, decision process sketched; account/contact correct; lead source and referral fields complete if applicable.
- **Solution design**: You are aligning technical and commercial shape with the customer and internal teams (network, security, voice, etc., as the deal requires).
- **GPC Solution / CPQ work**: Sites, products, services, and costing are built in Salesforce so the right groups can price, approve, and document what was sold.
- **Approvals**: Submitted when the package is real—numbers, scope, and exceptions are defensible. Avoid “approve twice because we changed the deal after submission.”
- **Contracting**: Conga output, terms alignment, DocuSign when used—**Contract Signer** and recipients are set **early**, not at the last second.
- **Closed/Won**: Triggers downstream work (e.g., projects per solution site). **Do not delete** history.
- **Closed/Lost**: Capture **why** (competitor, timing, budget, no decision). **Do not delete** the opportunity—deals come back; history matters.

### Lead conversion—standard vs exceptions

- Open the lead from workflow (e.g., notification), use **Convert Lead**, and on the conversion screen pick **account** (existing or new), **contact** (existing or new), and **almost always create a new opportunity**—including employee business lead referrals when that is the selling motion.
- **Rare exceptions** (reuse an existing opportunity, or skip opportunity creation) must be cleared with **sales management** or the **Salesforce admin**. Do not use “Don’t create an opportunity upon conversion” for convenience.
- **Employee / partner referrals**: After conversion, **verify referral fields** on the opportunity (lead source, referred by, partner referral fields as applicable) and **keep the referrer informed** on status and eligibility. Program integrity depends on it.

**Where to read more**

- **Converting Leads** quick reference and **Salesforce 101**: **Sales Resources** (sidebar link in this module) or **GPCU**—same material as onboarding; ask Sales Ops if you need a direct link.
- Bookmark what you use often; avoid saving stuff only on one laptop or a personal folder other people cannot reach.

## Discovery (quick checklist)

Use this so opportunities, GPC Solutions, and forecasts reflect reality—not optimism.

- **Customer & scope**: Legal name, sites/locations, what they buy today, what is in/out of scope for this deal.
- **Pain & success**: What breaks if they do nothing? What does “go-live success” mean for them?
- **Decision process**: Economic buyer, technical approvers, procurement/legal timing, who can sign.
- **Commercial**: Budget band or approval path, contract term, auto-renew or not, anything nonstandard (credits, SLAs, build timelines).
- **Competition & status**: Incumbent, RFP or informal, your differentiators tied to their words (not generic slides).
- **Next step**: Owner, date, and what “done” looks like—log it as a **Task** on the opportunity.

If you cannot answer most of these, your stage and forecast are probably ahead of the customer.

## Hygiene, forecasting, and CPQ / Salesforce expectations

### Daily / weekly hygiene

- **Tasks**: Log follow-ups you actually intend to do; clear or reschedule instead of letting them rot. Your book is in **Tasks**, not in your head.
- **List views**: Pin the views you live in (My Opportunities, My Approvals, etc.) so you land on reality every login.
- **Contacts**: Keep contacts on the right **account**; relate people across accounts instead of cloning contacts. Bad contact data breaks Conga, DocuSign routing, and handoffs.
- **Home / dashboards**: Refresh when you need leadership-ready numbers; stale charts usually mean stale opportunity fields.
- **Universal Search**: Find accounts, opportunities, and contacts fast—especially when a customer name is fuzzy or shared across regions.

### Forecasting discipline

- **Commit** only what you would defend on a live call with your manager: signed path, stakeholder alignment, and a dated next step.
- **Stage, amount, and close date** should move together. If the deal slipped, update **close date** and **next step** the same day you learn—not at month-end panic.
- **Risk flags**: Competitor wins, procurement delays, technical blockers—note them in the record (fields or activity) so Sales Ops and leadership are not surprised in QBRs.
- **Pipeline hygiene**: Close or re-age stale opps; **do not delete** closed/lost—capture outcome and learn.

### CPQ / GPC Solution expectations (Salesforce is the system of record)

- **GPC Solution** is where quoting, costing, approvals, and contracting tie together. If it is not in Salesforce, it did not happen for reporting and delivery.
- Build **solution sites** and line items so costing and approvals match what you will contract. Half-built solutions create emergency approvals and bad customer experience.
- **Approvals**: Submit when the package is coherent. Rework costs time with approvers and can miss customer deadlines.
- **Contract Signer** on the GPC Solution: set when you create the solution or **early** in the lifecycle. Late adds behave differently by stage, and **Approval Pending** blocks adding Contract Signer—plan ahead.
- **DocuSign from Salesforce**: Signers should be **Contacts** on the account; use contact roles where helpful. Conga merge → save as needed → **Send to DocuSign** from the GPC Solution when the business process says it is time—not as a substitute for approvals or Legal on nonstandard terms.

**Where to read more**

- Tab list and daily habits: **Salesforce 101** in **Sales Resources** / GPCU.
- **Salesforce & DocuSign Integration** guide: **Sales Resources** / GPCU (search “DocuSign”).

## Handoffs (sales → delivery, partners, and leadership)

- **Before you promise dates**: Align with solution design and costing so **install intervals** and **dependencies** in the GPC Solution match what you told the customer.
- **At Closed/Won**: Ensure **sites, products, and contacts** are complete; downstream teams often inherit what you leave in the record.
- **Internal threads**: Use **Tasks** and clear **activity** notes (what changed, who owns the next step). Avoid “called customer” with no outcome.
- **Referral / partner deals**: Confirm referral fields still accurate at handoff; loop the referrer when status changes materially.
- **DocuSign / Conga**: If Legal or Deal Desk touched the package, say so in the file or activity so delivery does not work off the wrong revision.

## Common Salesforce mistakes (avoid these)

- Converting a lead **without** creating an opportunity (normal deals)—then wondering why pipeline and reporting are wrong.
- **Duplicate contacts** across accounts instead of relationships—breaks signing and reporting.
- **Stale close dates** and **stages** that do not match the customer conversation—forecast surprises everyone.
- **GPC Solutions** submitted for approval with **incomplete sites/lines**—drives rework and customer delay.
- **Contract Signer** left blank until **Approval Pending**—then you cannot fix it in that state; you have to unwind stage/workflow per training.
- **Deleting** Closed/Lost opportunities—throws away context when the deal revives.
- **Recipients for DocuSign** who are not **Contacts** on the account—integration and audit trail suffer.
- **Side-system tracking** (spreadsheet-only pipeline) that never makes it to Salesforce—leadership and support teams cannot help what they cannot see.

## DocuSign touchpoints from Salesforce

- The integration is for **sending for signature from Salesforce**; it does not replace approvals, Legal review on nonstandard terms, or your manager’s judgment.
- **Contacts**: Anyone signing or receiving should exist as a **Contact** on the relevant account; roles help when there are many stakeholders.
- **IT / provisioning**: DocuSign accounts are provisioned by IT; whether the integration is on for you is managed in Salesforce—use the **Service Desk** for access issues.

### GPC Solution → Conga → DocuSign (happy path)

- Set **Contract Signer** to the contact who will sign (lookup by name)—**when you create the solution or early**. You **cannot** add Contract Signer while the solution is in **Approval Pending**; late adds may not behave the same across stages.
- Continue the sales process until sending is appropriate. From **Conga Files**, run the template; you may **Save a Copy** (Merge and Download) to Salesforce Files, return to the **GPC Solution**, then **Send to DocuSign** from the action row.
- First-time send: complete **DocuSign authorization** (login, allow access, use the **gpcom** custom domain when prompted).
- Choose Conga output as-is or upload an edited file; **Terms and Conditions** changes go through **Legal**.
- **Recipients** must be Salesforce contacts; adjust email subject/body; set reminders/expiry if needed; place signature fields; send and monitor status.

**Where to read more**

- **Salesforce & DocuSign Integration** guide: **Sales Resources** / GPCU (search “DocuSign”).

## Weekly habits and deep dives [deep]

- Read **Salesforce Success Tips** in the **Salesforce Users** team **General** channel—content updates weekly.
- Block time to: clear **Tasks**, refresh **stages/dates** on active opps, update **referral** deals, and advance **GPC Solutions** stuck in costing or approval.
- Pair this module with **Salesforce 101** and **201** and the quick references in GPCU when you need the next level of detail.

For **enterprise proposal** motions, watch the intro video on the enterprise proposal workflow. The **Salesforce Training Videos** folder groups walkthroughs for 101 sections, creating a GPC Solution, and multi-site solutions—use them as structured practice after reading the PDFs.

**Where to read more**

- **Salesforce Success Tips:** **Salesforce Users** team → **General** (weekly posts).
- **Enterprise proposal** intro and **Salesforce Training Videos**: **Sales Resources** / enablement—not a private “Documents” folder only on your machine.
- **Salesforce 201** and quick references in GPCU when you outgrow 101.

## Media (optional) [deep]

- **Guidde** (when published): lead conversion + referral fields; pinned views + tasks; Conga → Salesforce File → DocuSign with **Contract Signer** set early—ask enablement for links.
- **Video playlist:** 101 walkthroughs and **GPC Solution** / multi-site videos are updated on **Sales Resources**; take the playlist from there instead of stale bookmarks.
