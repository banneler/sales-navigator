---
id: "sales-rules-of-engagement"

title: "Sales Rules of Engagement"

summary: "Pipeline protection. Idle windows. Account ownership."

sensitivity: "public"

sales_trio_hide_overview: true

five_minute_summary: |
  - **One source of truth:** Search before you create. Duplicates drive ownership wars. Salesforce is how leadership settles who owns an account (and who gets the commission).
  - **Idle windows:** On the general path, if there is no qualifying logged activity for the periods below, others may work the account. But don't be a cowboy—always reach out to the listed owner first before you pounce.
    - **Prospect:** 61+ days.
    - **Customer:** 121+ days.
    - **Strategic list & USAC/E-Rate:** The 61/121 clocks do not apply here—assume Strategic-style coverage and confirm with leadership before you work the account. **Named carve-out:** **ENA (Education Networks of America) in Indiana** stays with the **Out-State Team** per the ROE—not the usual USAC/Strategic path.
  - **The 5-day inbound clock:** Assigned an inbound lead by sales or marketing? You have exactly five business days to make first contact and log it in Salesforce. Miss it, and it gets reassigned. (Note: Self-sourced leads do not use this clock).
  - **Transfers:** Never play admin and reassign an account to yourself. Talk to the incumbent owner, get aligned, and then email your manager and sales leadership for the official sign-off.

knowledge_checks:
  - question: "Before creating a new account or contact in Salesforce, what is the mandatory first step?"
    options:
      - "Create the account immediately so you can log your notes, then ask Ops to merge duplicates later."
      - "Search Salesforce by name and address to ensure it doesn't already exist."
      - "Check ZoomInfo, and if the data looks clean, automatically import it as a new record."
    correct_index: 1
    explanation: "Search first. One entity, one account. Duplicates create massive commission headaches down the road."

  - question: "Marketing assigns you a hot inbound lead. How long do you have to make first contact and log it?"
    options:
      - "5 calendar days."
      - "14 days, since it takes time to properly research the account before reaching out."
      - "5 business days."
    correct_index: 2
    explanation: "You have exactly five business days for assigned inbound leads. If it isn't logged in Salesforce by then, it can be pulled."

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
    explanation: "A general Customer account opens after 121+ days with no qualifying logged activity. Even then, use the transfer path instead of grabbing the account cold."

  - question: "For a general Prospect account, how many days of zero logged activity must pass before the ROE window opens?"
    options:
      - "30 days."
      - "61+ days."
      - "90 days."
    correct_index: 1
    explanation: "A general Prospect account opens after 61+ days with no qualifying logged activity. The rule protects active prospecting while giving abandoned accounts a path forward."

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
    explanation: "Never reassign an account unilaterally. Get incumbent agreement, then get leadership's blessing."

  - question: "How are USAC-funded entities treated under the rules of engagement?"
    options:
      - "They follow the exact same 61/121 rules as any standard general Prospect or Customer."
      - "They are exempt from Salesforce tracking entirely."
      - "They receive Strategic-style treatment, with named exceptions like ENA in Indiana."
    correct_index: 2
    explanation: "USAC entities get Strategic-style protection per the ROE, even when they are not on the standard list. Verify with leadership before you work the account."

  - question: "When leadership is settling an account ownership dispute, what is the ONLY evidence that matters?"
    options:
      - "Your Outlook 'Sent' folder showing you emailed the prospect."
      - "Logged activity and clean data in Salesforce."
      - "A verbal conversation you had with the customer at a trade show."
    correct_index: 1
    explanation: "Salesforce is the system of record. If it's not logged there, it didn't happen."

scenarios:

  - title: "The 130-Day Ghost Town"

    situation: |

      You find a juicy general Customer account. It's day 130 of zero logged activity. You want to reach out today. What's your move?

    choices:

      - label: "The 121-day window is wide open. Send a cold outreach sequence immediately so you get your foot in the door."

        feedback: "Slow down. Yes, it's open by the numbers, but a blind outreach burns internal bridges. Don't be a cowboy."

      - label: "Ping the current owner first. If you align (or they ghost you), escalate through the ROE transfer steps with leadership before dialing."

        feedback: "Correct. The idle window creates a path to work the account, not permission to ambush the owner. Align first, then use the approved transfer path."

  - title: "The 'Sent Folder' Defense"

    situation: |

      Marketing assigns you a hot inbound lead on Monday. Next Tuesday (Day 6), a hungry rep flags that it has zero Salesforce activity and asks leadership for it. You argue, "But I emailed them twice from my inbox!"

    choices:

      - label: "Forward your sent emails to leadership as proof you are actively working the lead."

        feedback: "Dead wrong. The 'Sent' folder doesn't pay commissions. Assigned inbound leads require a Salesforce log within five business days. The lead gets reassigned."

      - label: "Admit defeat. You failed to log the activity in Salesforce within 5 business days, so the lead is gone."

        feedback: "Correct. Salesforce is the system of record, so the email only counts when it is logged. Log it or lose it."

reference_files:

  - label: "Sales Rules of Engagement (ROE) — Revised August 2025"

    sharepoint_url: "https://gpcom.sharepoint.com/:b:/r/sites/gpcSales/ROE/Sales%20Rules%20of%20Engagement%20(ROE)%20-%20Revised%20August%2025.pdf?csf=1&web=1&e=7aw2jN"
---

## Overview

ROE exists to **protect pipelines** and **draw clean lines** on who works whom. Whether you are on the Strategic Accounts Team or working a general patch, **Salesforce** is the system of record—full stop.

- **Search before you create** — One entity, one account. Duplicates waste time and invite disputes.

- **Log it or lose it** — Tasks, calls, meetings, emails belong **on the record**. Outlook does not count in an ownership fight.

- **Transfer through leadership** — Never self-reassign. Agree with the incumbent, then route through **manager + sales leadership** (per ROE).

**General** accounts: **61+** (Prospect) / **121+** (Customer) idle rules. **Strategic** list and **USAC/E-Rate** coverage are stricter—confirm before you chase the logo. **Exception:** ENA (Education Networks of America) in **Indiana** → **Out-State Team** (per ROE).

---

## Key Guidelines

1. **Search before creating:** One entity, one account. Duplicates are a nightmare to untangle and create ownership disputes. Always search Salesforce before adding records.

2. **Log it or lose it:** Tasks, calls, meetings, or emails must live on the Salesforce record. Your Outlook Sent folder does not count in an ownership dispute.

3. **Respect idle windows:** Prospect accounts open after **61+** days of no qualifying logged activity; Customer accounts after **121+**. Even when the window is open, reach the listed owner first—no cowboy grabs.

4. **Transfer through leadership:** Never reassign an account in Salesforce unilaterally. Connect with the current owner; once agreed, email your manager and sales leadership for approval and transfer (per ROE).

5. **Assigned inbound leads:** Five business days to make first contact **and** log it in Salesforce. Non-negotiable. That clock does **not** apply the same way to self-sourced leads.

---

## Common Landmines

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

**The USAC Trap:** USAC-funded entities follow Strategic-style treatment, even if they aren't explicitly on the list. Confirm coverage with leadership before assuming they are fair game. **ENA in Indiana** is the named exception—it stays with the **Out-State Team**.

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

**Source:** This section summarizes the **Sales Rules of Engagement (ROE) — Revised August 2025** PDF linked under **Module Reference Files**. If leadership publishes a newer ROE, follow that document—not this page.

### General guidelines and Salesforce (all reps)

- Salesforce is the official system of record for arbitrating account disputes.

- Before creating accounts or contacts: search by address and name; do not open a second account for an existing entity; do not add a contact whose email already exists elsewhere without coordinating with that account owner.

- **The 80/20 rule:** Most situations (~**80%**) fit the ROE as written. The rest are edge cases—unique ownership disputes, fuzzy Strategic vs. general boundaries, USAC/E-Rate questions, or anything that feels like *"this doesn't quite match the PDF."* Those go to **sales management case by case**. Do not improvise policy on your own and do not play lawyer with the ROE.

### General accounts (non-Strategic)

Applies to accounts not on the official Strategic Accounts list.

| Topic | Rule (per ROE) |
| --- | --- |
| Customer | Customer status, no logged activity for 121+ days: others may work the account. Best practice: talk to the current owner before engaging, even if the record looks open by the numbers. |
| Prospect | Prospect status, no logged activity for 61+ days: others may work the account. Keep relevant intel on the record (projects, contract timing). Notation alone is not enough—you need consistent contact (about every 60 days minimum) plus current information. |
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

Do not change ownership unilaterally in Salesforce to force a deal.

### When to escalate

Use sales management (with Salesforce history as your evidence) when:

- The situation is an edge case or does not fit the ROE cleanly (~20% of cases).

- You have a transfer dispute or unclear ownership.

- The boundary is unclear: 

    - Strategic vs general account

    - USAC/E-Rate eligibility vs standard 61/121 rules.

- You see a repeat duplicate-account pattern.

Patterns that undermine the ROE:

- Changing the account owner in Salesforce without the ROE transfer path.

- No logged touch on an assigned inbound lead within 5 business days.

- Claiming Strategic or USAC/E-Rate treatment without confirming against the official list or with leadership.

- Relying on unofficial Strategic lists instead of the SharePoint ROE repository.
