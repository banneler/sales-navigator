---
id: "sales-rules-of-engagement"
title: "Sales Rules of Engagement"
summary: "Pipeline protection. Idle windows. Account ownership."
sensitivity: "public"
five_minute_summary: |
  **One Source of Truth:** Salesforce isn't just paperwork; it's how you protect your commission. Search before you create. Duplicate accounts cause costly ownership disputes.

  **Squatter's Rights Don't Exist:** If you aren't working an account, you don't own it. Prospects open up to the floor after 61 days of dead air. Customers at 121. Strategic and USAC accounts have their own strict rules—know them.

  **The 5-Day Inbound Clock:** Handed a warm inbound lead? You have five business days to make contact and log it in Salesforce. This is non-negotiable. Log it, or lose it.

  **No Cowboy Transfers:** You never reassign an account to yourself unilaterally. Connect with the current owner; once agreed, email your manager and sales leadership for approval and transfer (per ROE).

knowledge_checks:
  - question: "Before creating a new account or contact in Salesforce, what should you do first?"
    options:
      - "Search Salesforce by name and address to avoid duplicates"
      - "Create the account and merge duplicates later"
      - "Ask IT to pre-approve every new record"
    correct_index: 0
    explanation: "Search first—one entity, one account."

  - question: "For an inbound lead assigned by sales or marketing, within how many business days should first contact be made and logged?"
    options:
      - "5 business days"
      - "60 calendar days"
      - "121 business days"
    correct_index: 0
    explanation: "Five business days for assigned inbound; not the same as self-sourced leads."

  - question: "Who ultimately maintains and communicates changes to the official Strategic Accounts list?"
    options:
      - "Sales Managers and the VP of Sales"
      - "Individual account executives only"
      - "The Salesforce admin team alone"
    correct_index: 0
    explanation: "Sales Managers and VP Sales; official repository only."

  - question: "For a general (non-strategic) Customer account with no logged activity, after roughly how many days may others work the account per typical ROE windows?"
    options:
      - "121+ days"
      - "61+ days"
      - "5 business days"
    correct_index: 0
    explanation: "121+ days idle for Customer on the general path."

  - question: "For a general Prospect account with no logged activity, which window typically applies before others may work it?"
    options:
      - "61+ days without activity"
      - "121+ days without activity"
      - "Only after the fiscal year ends"
    correct_index: 0
    explanation: "61+ days for Prospect on the general path."

  - question: "Does the five-business-day first-contact rule for assigned inbound leads apply the same way to leads you self-source through prospecting?"
    options:
      - "No; that clock is specific to sales- or marketing-assigned inbound leads"
      - "Yes; every lead type uses the same five-business-day clock"
      - "Self-sourced leads have a 121-day clock instead"
    correct_index: 0
    explanation: "Five days applies to assigned inbound only."

  - question: "When you want to transfer an account to another rep, what does the ROE expect before leadership approval?"
    options:
      - "Connect with the current owner; once agreed, email your manager and sales leadership for approval and transfer"
      - "Reassign the account in Salesforce first, then notify the prior owner"
      - "Post in a team chat only; no manager or sales leadership involvement is needed"
    correct_index: 0
    explanation: "Per ROE: agree with the incumbent, then email your manager and sales leadership for approval and transfer."

  - question: "Are USAC-funded entities treated like ordinary general accounts for the 61/121-day activity rules?"
    options:
      - "No; they follow Strategic-style treatment regardless of list inclusion (with noted exceptions)"
      - "Yes; they always follow the same 61/121 rules as any Prospect or Customer"
      - "They are excluded from Salesforce entirely"
    correct_index: 0
    explanation: "Strategic-style per ROE; see documented exceptions."

  - question: "If Salesforce is the system of record for ownership disputes, what should strong reps prioritize alongside outreach?"
    options:
      - "Data quality, timely logging, and consistent meaningful activity"
      - "Keeping deals only in email to avoid clutter"
      - "Deleting old tasks so the record looks inactive"
    correct_index: 0
    explanation: "Logged activity and clean data—leadership resolves from SF."

  - question: "Where should you look for the authoritative Strategic Accounts list rather than informal spreadsheets?"
    options:
      - "The official Sales SharePoint repository referenced in the ROE"
      - "Any rep's personal bookmark folder"
      - "Only the footer of customer emails"
    correct_index: 0
    explanation: "Official Sales SharePoint—informal lists don't count."

scenarios:
  - title: "The 130-Day Ghost Town"
    situation: |
      You find a juicy Customer account. It's not Strategic, not USAC-funded. The current owner hasn't logged a single activity in 130 days. You want to reach out today. What's your move?
    choices:
      - label: "It's past 121 days. The window is open. Start dialing and emailing immediately."
        feedback: "Rookie move. Yes, the window is technically open, but blasting an email without warning creates internal friction. Reach the listed owner first."

      - label: "Coordinate with the current owner. If they are unresponsive, follow the ROE transfer steps through leadership before claiming it."
        feedback: "Correct. Protect your reputation internally. Align with the owner or use the approved transfer paths."

  - title: "The 'Sent Folder' Defense"
    situation: |
      Marketing hands you a hot inbound lead on Monday. By next Tuesday (Day 6), another hungry rep notices it has zero Salesforce activity and asks leadership to reassign it. You argue, "But I emailed them twice from Outlook!"
    choices:
      - label: "You keep the lead. Emailing from Outlook proves you are working it."
        feedback: "Dead wrong. The 'Sent' folder doesn't pay out. Assigned inbound leads require a Salesforce log within five business days. You lose the lead."

      - label: "The lead is gone. You must log the activity in Salesforce within 5 business days, period."
        feedback: "Correct. Salesforce is the system of record. If it's not logged there, it didn't happen."

reference_files:
  - label: "Sales Rules of Engagement (ROE) — Revised August 2025"
    sharepoint_url: "https://gpcom.sharepoint.com/:b:/r/sites/gpcSales/ROE/Sales%20Rules%20of%20Engagement%20(ROE)%20-%20Revised%20August%2025.pdf?csf=1&web=1&e=7aw2jN"
---

## Overview

**The Reality Check**

The Rules of Engagement exist for one reason: to protect everyone’s pipeline and maintain clear boundaries across the team. Salesforce is the undisputed system of record.

**The Core Mandates**

- **Search before you create:** One entity, one account. Duplicates are a nightmare to untangle and create ownership disputes.
- **Log it or lose it:** Tasks, calls, meetings, or emails must live on the Salesforce record. Your Outlook Sent folder is irrelevant in an ownership dispute.
- **Transfer through leadership:** Never reassign an account unilaterally. Connect with the current owner first; once agreed, involve your manager and sales leadership per ROE.

Strategic and USAC accounts are different beasts entirely. Know the idle windows (Prospect **61+** days, Customer **121+** days), keep your activity log bulletproof, and let the data do the talking.

---

## Key Guidelines

1. **Search before creating:** One entity, one account. Duplicates are a nightmare to untangle and create ownership disputes. Always search Salesforce before adding records.
2. **Log it or lose it:** Tasks, calls, meetings, or emails must live on the Salesforce record. Your Outlook Sent folder does not count in an ownership dispute.
3. **Respect idle windows:** Prospect accounts open after **61+** days of no qualifying logged activity; Customer accounts after **121+**. Even when the window is open, reach the listed owner first—no cowboy grabs.
4. **Transfer through leadership:** Never reassign an account in Salesforce unilaterally. Connect with the current owner; once agreed, email your manager and sales leadership for approval and transfer (per ROE).
5. **Assigned inbound leads:** Five business days to make first contact **and** log it in Salesforce. Non-negotiable. That clock does **not** apply the same way to self-sourced leads.

---

## Common Pitfalls

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

::: flip ["I emailed them twice—that counts as activity."]
**The 'Sent Folder' Delusion:** Emailing from Outlook does not protect your account. If it is not logged as a task, call, meeting, or email on the actual record in Salesforce, leadership considers the account abandoned.
:::

::: flip ["The account is 130 days idle—I can just start working it."]
**The Cowboy Grab:** Yes, the window is technically open. No, you don't just start blasting emails. Call the listed owner first. If you need a formal transfer, follow ROE: agree with the owner, then email your manager and sales leadership.
:::

::: flip ["I saw the account was idle, so I just reassigned it to myself."]
**The Rogue Reassignment:** Unilateral owner changes in Salesforce are a massive ROE violation. Align with the current owner, then email your manager and sales leadership for approval—never reassign yourself first.
:::

::: flip ["That school district falls under the 61/121 day rules."]
**The USAC Trap:** USAC-funded entities follow Strategic-style treatment, even if they aren't explicitly on the list. Confirm coverage with leadership before assuming they are fair game.
:::

::: flip ["It's an inbound lead—I'll get to it when my week clears up."]
**The 5-Day Clock:** You have exactly 5 business days to make first contact and log it in Salesforce. That clock is non-negotiable for assigned inbound leads. Drag your feet, and it gets re-routed.
:::

::: flip ["I'll spin up a new account record so I don't have to chase the current owner."]
**The Duplicate Disaster:** Creating parallel accounts to bypass ownership is a landmine. Search first. If you need access, use the proper transfer path. Duplicates ruin reporting and cause massive commission headaches.
:::

</div>

---

## Process Deep Dive [deep]

*This section tracks the official ROE PDF (Revised August 2025). If anything conflicts, the PDF and SharePoint materials win.*

### General guidelines and Salesforce (all reps)

- **Source of truth:** Salesforce is the official system of record and is used to **arbitrate account disputes**.
- **Before creating accounts or contacts:** Search Salesforce by **address and name** to prevent duplicates. Do **not** open a second account record for an existing entity. Do **not** add a contact whose email already exists on another record—**coordinate with the current account owner**.
- **Evolving rules:** These rules are designed to cover the **majority of situations (~80%)**. Unique scenarios are handled **case by case** by **sales management**—do not improvise policy outside that path.

### General accounts (non-Strategic)

*Applies to accounts **not** on the official Strategic Accounts list.*

| Topic | Rule (per ROE) |
| --- | --- |
| **Customer** | With **Customer** status: no **logged activity** for **121+** days → account may be worked by another rep. **Best practice:** communicate with the **current account owner before engaging**, even when the record appears open by the numbers. |
| **Prospect** | With **Prospect** status: no **logged activity** for **61+** days → account may be worked by another rep. Keep the record updated with **relevant intel** (e.g. construction, contract timing). **Notation alone does not protect an account**—you need **consistent contact** (at minimum about **every 60 days**) alongside current information. |
| **Inbound leads** | Assigned by **sales or marketing leadership:** initial **contact** must be **made and logged** within **5 business days** or the lead may be **reassigned**. This rule does **not** apply to leads you **self-generate** through prospecting. |
| **Self-sourced** | **Not** subject to the assigned-inbound 5-business-day clock. |

### Strategic accounts

*Applies to the Strategic Accounts team and the **official, named** account list.*

- **Protection model:** Accounts on the official Strategic Accounts list are **protected by assignment**, **not** by the general **61/121-day** activity rules above.
- **Official list:** The list is **dynamic** and changes when leadership updates it. **All changes** are **managed and communicated** by **Sales Managers** and the **VP of Sales**. The authoritative list is **maintained and distributed separately** from the ROE narrative—housed in the **ROE repository** on **Sales SharePoint** (not informal spreadsheets).

### USAC / E-Rate program entities (per ROE)

Entities—including **schools, libraries, and hospitals**—that **currently use or are eligible for** **USAC** and/or **E-Rate** funding are treated as **Strategic Accounts** for ROE purposes **whether or not** they appear on the named list.

- **Documented exception:** **ENA (Education Networks of America)** based in **Indiana** remains with the **Out-State Team** (per ROE).
- If coverage is unclear, **confirm with leadership**—do **not** apply the casual **61/121** general-account rules by assumption.

### Account transfers

To move an account from another sales representative:

1. **Connect with the current owner** and reach agreement on the move.
2. **Once agreed**, **email your manager and sales leadership** for **approval and transfer** (per ROE).

- **Never** change ownership **unilaterally** in Salesforce to force a deal.
- **Never** rely on **rumor** or informal agreement in place of that path.

### When to escalate (ties to the rules above)

- **Ambiguous or edge-case facts** (~20% of situations), **transfer disputes**, **Strategic vs general vs USAC/E-Rate boundaries**, or **repeat duplicate-account patterns** → work through **sales management** with **Salesforce history** as evidence—not Slack polls or side deals.
- **Violations** that undermine the ROE: unilateral owner changes; **no logged touch** on **assigned inbound** within **5 business days**; claiming Strategic/USAC coverage without confirming the official list or leadership; using **unofficial** Strategic lists instead of **Sales SharePoint**.
