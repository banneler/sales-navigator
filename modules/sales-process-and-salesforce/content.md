---
id: "sales-process-and-salesforce"
title: "Sales Process & Salesforce"
summary: "How GPC runs deals in Salesforce: from leads and conversion through opportunities, GPC Solutions, approvals, and contracting with DocuSign. Drawn from Salesforce 101, the leads conversion quick reference, and the Salesforce\u2013DocuSign integration guide\u2014plus where to find weekly tips and video walkthroughs."
sensitivity: "public"
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
