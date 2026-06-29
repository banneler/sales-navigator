---
id: "sales-rules-of-engagement"

title: "Sales Rules of Engagement"

summary: "Pipeline protection. Idle windows. Account ownership."

sensitivity: "public"

sales_trio_hide_overview: true

five_minute_summary: |
  - **One source of truth:** Salesforce is the official system of record for account disputes. Search by address and name before creating records, and keep activity on the account.
  - **Idle windows:** For general accounts, no logged Salesforce touch—task, call, meeting, or email on the account record—can open a path for another rep to work the account. Communicate with the current owner before engaging.
    - **Prospect:** 61+ days.
    - **Customer:** 121+ days.
    - **Stay active before the window opens:** Prospects need logged contact at least every ~60 days. A note or project flag helps the record, but it does not protect ownership by itself.
    - **Strategic list & USAC/E-Rate:** These are protected by assignment, not the 61/121-day activity rules. If you are not on the Strategic Accounts team, assume general rules unless leadership confirms coverage. **Named carve-out:** **ENA (Education Networks of America) in Indiana** stays with the **Out-State Team** per the ROE.
  - **The 5-business-day inbound clock:** Leads assigned by sales or marketing leadership can be reassigned if first contact is not made and logged within five business days. Self-sourced prospecting leads do not use this clock.
  - **Transfers and edge cases:** Never self-reassign. Align with the current owner, then email your manager and sales leadership. Anything that does not fit the ROE cleanly goes to sales management.

knowledge_checks:
  - question: "Before creating a new account in Salesforce, what is the mandatory first step?"
    options:
      - "Create the account immediately so you can log your notes, then ask Ops to merge duplicates later."
      - "Search Salesforce by name and address to ensure it doesn't already exist."
      - "Check ZoomInfo, and if the data looks clean, automatically import it as a new record."
    correct_index: 1
    explanation: "Search first by name and address. One entity should have one account record, because duplicates create ownership disputes and messy data."

  - question: "Marketing assigns you an inbound lead. How long do you have to make first contact and log it?"
    options:
      - "5 calendar days."
      - "14 days, since it takes time to properly research the account before reaching out."
      - "5 business days."
    correct_index: 2
    explanation: "You have five business days for assigned inbound leads. If initial contact is not made and logged in Salesforce by then, the lead can be reassigned."

  - question: "Who holds the authoritative list of Strategic Accounts?"
    options:
      - "The Account Executive who last worked the deal and kept personal notes."
      - "Sales Managers and the VP of Sales, using the official Sales SharePoint repository."
      - "Any rep can tag an account Strategic when projected MRC clears the threshold."
    correct_index: 1
    explanation: "Only Sales Managers and the VP of Sales maintain the official Strategic list. Informal spreadsheets or personal tags don't count."

  - question: "For a general Customer account (non-strategic), how many days of zero logged activity must pass before the ROE window opens?"
    options:
      - "90 days."
      - "121+ days."
      - "365 days."
    correct_index: 1
    explanation: "A general Customer account opens after 121+ days with no logged Salesforce task, call, meeting, or email on the account record. Even then, use the transfer path before working the account."

  - question: "For a general Prospect account, how many days of zero logged activity must pass before the ROE window opens?"
    options:
      - "30 days."
      - "61+ days."
      - "90 days."
    correct_index: 1
    explanation: "A general Prospect account opens after 61+ days with no logged Salesforce task, call, meeting, or email on the account record. The rule protects active prospecting while giving inactive accounts a path forward."

  - question: "A rep adds a detailed Chatter note about a Q3 construction project, but there has been no logged call, meeting, task, or email in 58 days. Is the Prospect account protected?"
    options:
      - "Yes. Any detailed note protects the account because it shows intent."
      - "No. Notes help the record, but logged contact is what protects activity under the ROE."
      - "Only if the note includes expected MRC."
    correct_index: 1
    explanation: "The notation trap is treating account intel like account activity. Notes and project flags are useful, but they do not replace logged contact on the Salesforce record."

  - question: "Does the strict five-business-day clock apply to leads you prospect and self-source?"
    options:
      - "Yes; every lead type uses the same five-business-day clock to maintain pipeline velocity."
      - "No; that clock is specific to sales- or marketing-assigned inbound leads."
      - "Self-sourced leads actually must be converted within 48 hours."
    correct_index: 1
    explanation: "The five-day clock only applies to assigned inbound leads, not your own self-sourced prospecting."

  - question: "You've noticed an account is past its idle window and you want to work it. What is the approved transfer process?"
    options:
      - "Change the owner to yourself, then notify the prior owner and your manager afterward."
      - "Ask leadership to review the idle account without first contacting the current owner."
      - "Align with the current owner, then email your manager and sales leadership for transfer approval."
    correct_index: 2
    explanation: "Never reassign an account unilaterally. Align with the current owner, then get manager and sales leadership approval."

  - question: "How are USAC-funded entities treated under the rules of engagement?"
    options:
      - "They follow the exact same 61/121 rules as any standard general Prospect or Customer."
      - "They are exempt from Salesforce tracking entirely."
      - "They receive Strategic-style treatment, with the ENA in Indiana exception."
    correct_index: 2
    explanation: "Entities that use or are eligible for USAC/E-Rate funding get Strategic-style protection per the ROE, even when they are not on the standard list. Verify with leadership before you work the account; ENA in Indiana stays with the Out-State Team."

  - question: "When leadership is settling an account ownership dispute, what record carries the weight?"
    options:
      - "Your Outlook 'Sent' folder showing you emailed the prospect."
      - "Logged activity and clean data in Salesforce."
      - "A verbal conversation you had with the customer at a trade show."
    correct_index: 1
    explanation: "Salesforce is the official system of record for account disputes. Keep activity and account history there."

scenarios:

  - title: "The 130-Day Ghost Town"

    situation: |

      You find a general Customer account with 130 days of no logged activity. You want to reach out today. What's your move?

    choices:

      - label: "The 121-day window is open. Start outreach immediately so you can begin working the account."

        feedback: "Not yet. The account may be open by the numbers, but the ROE still points you toward communicating with the current owner before engaging."

      - label: "Ping the current owner first. If you align (or they ghost you), escalate through the ROE transfer steps with leadership before dialing."

        feedback: "Correct. The idle window creates a path to work the account, not permission to bypass the owner. Align first, then use the approved transfer path."

  - title: "The 'Sent Folder' Defense"

    situation: |

      Marketing assigns you an inbound lead on Monday. Next Tuesday, another rep flags that it has zero Salesforce activity and asks leadership for it. You argue, "But I emailed them twice from my inbox!"

    choices:

      - label: "Forward your sent emails to leadership as proof you are actively working the lead."

        feedback: "That will not protect the lead. Assigned inbound leads require initial contact to be made and logged in Salesforce within five business days, or the lead can be reassigned."

      - label: "Own the miss, log the history, and treat it as a Salesforce discipline lesson instead of arguing from your Sent folder."

        feedback: "Correct. Assigned inbound leads require first contact to be made and logged in Salesforce within five business days. Outlook alone does not reset the clock, so get the touch onto the record and let leadership apply the ROE."

reference_files:

  - label: "Sales Rules of Engagement (ROE) — Revised August 2025"

    sharepoint_url: "https://gpcom.sharepoint.com/sites/gpcSales/ROE/Forms/AllItems.aspx?npsAction=createList"
---

## Overview

ROE exists to protect active work and make account ownership clear. Whether you are on the Strategic Accounts Team or working a general patch, **Salesforce** is the system of record.

- **Search before you create** — Check Salesforce by address and name. One entity should have one account record.

- **Log it or lose it** — Tasks, calls, meetings, and emails belong **on the Salesforce record**.

- **Transfer through leadership** — Never self-reassign. Discuss the move with the current owner, then route through **manager + sales leadership** (per ROE). If the owner does not respond, document the outreach and escalate instead of changing ownership yourself.

**General** accounts use the **61+** day Prospect and **121+** day Customer idle rules. **Strategic** accounts and **USAC/E-Rate** entities are protected by assignment. **Exception:** ENA (Education Networks of America) in **Indiana** → **Out-State Team** (per ROE).

---

## Key Guidelines

1. **Search before creating:** Search Salesforce by address and name before adding records. Do not create a second account for an existing entity.

2. **Coordinate before adding contacts:** Do not add a contact with an email address that already exists in Salesforce. Coordinate with the current account owner.

3. **Log the work:** Tasks, calls, meetings, and emails must live on the Salesforce record. Salesforce is what leadership uses to arbitrate account disputes.

4. **Respect idle windows:** Prospect accounts open after **61+** days with no logged Salesforce task, call, meeting, or email; Customer accounts after **121+**. Even when the window is open, communicate with the current owner before engaging.

5. **Avoid the notation trap:** Notes, Chatter updates, construction intel, and contract dates improve the record, but they do not protect ownership unless there is logged contact on the account.

6. **Transfer through leadership:** Never reassign an account in Salesforce unilaterally. Connect with the current owner; once agreed, email your manager and sales leadership for approval and transfer (per ROE). If the owner does not respond within a reasonable window, document the outreach and escalate.

7. **Assigned inbound leads:** Five business days to make first contact **and** log it in Salesforce. That clock does **not** apply to self-sourced prospecting leads.

---

## Common Landmines

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

::: flip ["I emailed them twice—that counts as activity."]

**The Sent Folder Gap:** Emailing from Outlook is not enough. Activity needs to be logged as a task, call, meeting, or email on the Salesforce record.

:::

::: flip ["The account is 130 days idle—I can just start working it."]

**The Owner Bypass:** The window may be open, but the ROE still calls out communication with the current owner as best practice. If you need a formal transfer, follow the ROE path: align with the owner, then email your manager and sales leadership. If the owner does not respond, document your outreach and escalate.

::::

:::: flip ["I left a detailed note—that keeps the account mine."]

**The Notation Trap:** Notes and project flags help the next rep understand the account, but they do not reset the idle clock. Protect the account with logged contact: task, call, meeting, or email on the Salesforce record.

:::

::: flip ["I saw the account was idle, so I just reassigned it to myself."]

**The Rogue Reassignment:** Do not change ownership in Salesforce on your own. Align with the current owner, then email your manager and sales leadership for approval.

:::

::: flip ["That school district falls under the 61/121 day rules."]

**The USAC Trap:** Entities that use or are eligible for USAC/E-Rate funding are treated as Strategic Accounts, even if they are not explicitly on the named list. **ENA in Indiana** is the named exception; it stays with the **Out-State Team**.

:::

::: flip ["It's an inbound lead—I'll get to it when my week clears up."]

**The 5-Day Clock:** For assigned inbound leads, initial contact must be made and logged in Salesforce within 5 business days. Miss that window and the lead can be reassigned.

:::

::: flip ["I'll spin up a new account record so I don't have to chase the current owner."]

**The Duplicate Account:** Creating a parallel account to bypass ownership breaks the ROE. Search first. If you need access, use the proper transfer path.

:::

</div>

---

## Process Deep Dive [deep]

**Source:** This section summarizes the **Sales Rules of Engagement (ROE) — Revised August 2025** PDF linked under **Module Reference Files**. If leadership publishes a newer ROE, follow that document—not this page.

### General guidelines and Salesforce (all reps)

- Salesforce is the official system of record for arbitrating account disputes.

- Before creating accounts or contacts: search by address and name; do not open a second account for an existing entity; do not add a contact whose email already exists elsewhere without coordinating with that account owner.

- **The 80/20 rule:** Most situations (~**80%**) fit the ROE as written. The rest are edge cases: ownership disputes, Strategic vs. general boundaries, USAC/E-Rate questions, or anything that does not match the PDF cleanly. Those go to **sales management case by case**.

### General accounts (non-Strategic)

Applies to accounts not on the official Strategic Accounts list.

| Topic | Rule (per ROE) |
| --- | --- |
| Customer | Customer status, no logged Salesforce task, call, meeting, or email for 121+ days: others may work the account. Best practice: talk to the current owner before engaging, even if the record looks open by the numbers. |
| Prospect | Prospect status, no logged Salesforce task, call, meeting, or email for 61+ days: others may work the account. Keep relevant information on the record, such as construction projects or contract dates. Notation alone is not enough; the ROE calls for consistent contact at least every 60 days. |
| Inbound leads | Assigned by sales or marketing leadership: first contact made and logged within 5 business days, or the lead may be reassigned. Does not apply to self-generated prospecting leads. |
| Self-sourced | Not subject to the 5-business-day inbound clock. |

### Strategic accounts

Applies to the Strategic Accounts team and the official named account list.

- Listed Strategic accounts are protected by assignment, not by the general 61/121-day rules above.

- The list is dynamic. Sales Managers and the VP of Sales manage and communicate changes. The official list is maintained separately from this narrative and lives in the ROE repository on Sales SharePoint—not informal spreadsheets.

### USAC / E-Rate program entities (per ROE)

Schools, libraries, hospitals, and similar entities that currently use or are eligible for USAC and/or E-Rate funding are treated as Strategic Accounts for ROE purposes, whether or not they appear on the named list.

- Exception (per ROE): ENA (Education Networks of America) in Indiana stays with the Out-State Team.

- If you are unsure whether coverage applies, confirm with leadership—do not assume the casual 61/121 general-account path.

### Account transfers

To move an account from another sales representative:

1. Connect with the current owner and reach agreement on the move.

2. Once agreed, email your manager and sales leadership for approval and transfer (per ROE).

If the owner does not respond within a reasonable window (for example, 3–5 business days) or disagrees, document your outreach in Salesforce and escalate to your manager with dates. Do not self-reassign or change ownership unilaterally in Salesforce to force a deal.

### When to escalate

Use sales management (with Salesforce history as your evidence) when:

- The situation is an edge case or does not fit the ROE cleanly (~20% of cases).

- You have a transfer dispute or unclear ownership.

- The current owner does not respond to a transfer request, or the owner disagrees with your read of the ROE.

- The boundary is unclear: 

    - Strategic vs general account

    - USAC/E-Rate eligibility vs standard 61/121 rules.

- You see a repeat duplicate-account pattern.

Patterns that undermine the ROE:

- Changing the account owner in Salesforce without the ROE transfer path.

- No logged touch on an assigned inbound lead within 5 business days.

- Claiming Strategic or USAC/E-Rate treatment without confirming against the official list or with leadership.

- Relying on unofficial Strategic lists instead of the SharePoint ROE repository.
