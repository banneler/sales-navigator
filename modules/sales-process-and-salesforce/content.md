---
id: "sales-process-and-salesforce"
title: "Sales Process & Salesforce"
summary: "How GPC runs deals in Salesforce: from leads and conversion through opportunities, GPC Solutions, approvals, and contracting with DocuSign. Drawn from Salesforce 101, the leads conversion quick reference, and the Salesforce\u2013DocuSign integration guide\u2014plus where to find weekly tips and video walkthroughs."
sensitivity: "public"
reference_files: []
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

Leads are prospects who showed interest or came from a campaign; reps or Home Office can enter them. When a lead is ready for a quote or pricing, convert the lead to an opportunity, which also creates the account (and contact as part of conversion). The Salesforce 101 sales cycle describes phases under the opportunity: solution design where sales works with other departments, then building the GPC Solution—sales enters the site address, service, and product details so the right groups (for example OSP, COE, Off-Net, IPE, BSOL) can assess build and install costs. Costing and approval may require product managers, sales managers, the CRO, or the COO depending on the deal. Contracting is where sales reviews and sends the agreement to the customer and adjusts as needed. Closed/Won moves the business forward; a project is created for each solution site in the GPC Solution, and that project phase continues outside this 101 overview (see Salesforce 201). For closed/lost, do not delete records in Salesforce—the opportunity may return later.

For converting a lead: open the assigned lead from the notification email, use Convert Lead, and on the conversion screen choose an existing account or create new, existing contact or create new, and almost always create a new opportunity (including for employee business lead referrals). Rare exceptions to reusing an opportunity should be cleared with your sales manager or Salesforce admin. Do not check “Don’t create an opportunity upon conversion” in normal circumstances. Name the opportunity so it reflects this specific selling situation. After conversion, open the new opportunity from the confirmation screen. If the lead came from the employee business lead referral or partner referral program, verify referral fields on the opportunity (lead source, referred by, or partner referral fields as applicable) and keep the referrer updated on status and eligibility—relationship building and accurate referral data matter for those programs.

**Sources:**
- **Converting Leads to an Opportunity Quick Reference Guide** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Converting Leads to an Opportunity Quick Reference Guide - 1123.pdf`
- **Salesforce 101 Manual** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Salesforce 101 Manual - 0422.pdf`

## Hygiene and working the record every day

Keep accounts and contacts clean: contacts belong to an account, and you can relate one contact to multiple accounts instead of duplicating people. Use the Tasks tab to see actions you logged and what to complete—useful for organizing what to do each day. On list views, pin the view you rely on so it opens by default until cache or cookies reset; customize tab order in the app so the objects you use most are easy to reach. Use Home dashboards and the refresh control so charts reflect current data. Universal Search helps you find any record containing your term. For opportunities that do not win, leave the data in place per process guidance.

The GPC Sales app tabs described in Salesforce 101 include Leads, Accounts, Contacts, Opportunities, Parent Opportunities (multi-party deals), GPC Solutions (quote status and approvals), Solution Sites (costing by site), Projects (after a solution is closed/won), Reports, Dashboards, Products, and Tasks—know which tab answers which question before you customize your navigation.

**Sources:**
- **Salesforce 101 Manual** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Salesforce 101 Manual - 0422.pdf`

## DocuSign touchpoints from Salesforce

The integration lets sales send documents for signature without leaving Salesforce; it does not replace your underlying business process—it is for convenience. Anyone who receives a document should exist in Salesforce as a contact on the relevant account; contact roles can help. DocuSign accounts are provisioned by IT; whether the integration is enabled for a user is managed in Salesforce by the Salesforce team—use the Service Desk for DocuSign account problems.

On the GPC Solution, set the Contract Signer field to the contact who will sign the contract (search by name in the lookup). Best practice is to add the contract signer when you first create the solution; adding it later may not behave the same across stages, and you cannot add contract signer while the solution is in Approval Pending. Continue the sales process until you are ready to send. From Conga Files, pick the template as usual; you may save a merged copy as a Salesforce File (Save a Copy → Merge and Download), return to the GPC Solution, then use Send to DocuSign in the action row. The first time, complete DocuSign authorization (login, allow access, use custom domain gpcom when prompted). Choose whether the document is the Conga output as-is or upload an edited file; any Terms and Conditions changes go through Legal. Add or verify recipients (each must be a Salesforce contact), adjust email subject and body, set reminders and envelope expiration if needed, place required fields for each signer, then send and monitor notifications as the envelope progresses.

**Sources:**
- **Salesforce & DocuSign Integration Training Guide** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Salesforce & DocuSign Integration Training Guide - 0623.pdf`

## Weekly habits and deep dives

Each week, read Salesforce Success Tips in the Salesforce Users team General channel—posts there update weekly. Keep tasks and opportunities current so dashboards and handoffs stay trustworthy. Block time to clear follow-ups on active opportunities, referral updates for program leads, and GPC Solution stages that need costing or approval attention. Pair this module with Salesforce 101 and 201 courses and quick references in GPCU and Teams as listed in the manual’s additional resources when you need the next level of detail.

For proposal generation aligned to enterprise deals, watch the intro video on the enterprise proposal workflow. The Salesforce Training Videos folder groups walkthroughs for Salesforce 101 sections, creating a GPC Solution, and multi-site GPC Solutions—use them as structured practice after reading the PDFs.

**Sources:**
- **GPC Enterprise Proposal Generator - Intro Video** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (2)/GPC Enterprise Proposal Generator - Intro Video.mp4`
- **Salesforce Training Videos (folder)** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)/Salesforce Training Videos`
- **Full SF training pack folder (PDFs and videos)** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (3)`

## Media (optional)

*Guidde (reserved):* Suggested Guidde walkthroughs: convert a lead and verify referral fields; pin list views and task follow-up; Conga merge to Salesforce File and Send to DocuSign with contract signer set.

- **Watch 1st - 101, Section 1 and 2** — *URL TBD*
- **Watch 2nd - Section 3 pt 1** — *URL TBD*
- **Watch 3rd - Section 3, pt 2** — *URL TBD*
- **Watch 4th - Section 4** — *URL TBD*
- **Watch 5th - Section 4 - Sales Cycle** — *URL TBD*
- **Watch 6th - Section 5 intro** — *URL TBD*
- **Watch 7th - Section 5 - additional resources** — *URL TBD*
- **Creating a GPC Solution Video 2.2023** — *URL TBD*
- **Creating a Multi-Site GPC Solution Video 2.2023** — *URL TBD*
