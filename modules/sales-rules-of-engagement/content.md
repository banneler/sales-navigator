---
id: "sales-rules-of-engagement"
title: "Sales Rules of Engagement"
summary: "Salesforce as system of record: search-before-create, 61/121 idle windows (general accounts), 5-day assigned inbound clock, Strategic/E‑Rate rules, transfers via leadership."
sensitivity: "public"
five_minute_summary: |
  - **Search Before Creating:** Salesforce is the system of record. Always search for existing accounts and contacts before creating new ones to prevent duplicates.
  - **Idle Windows:** Prospect accounts open up after 61 days of no logged activity, while Customer accounts open after 121 days. Strategic and E-Rate accounts have strict exceptions.
  - **Assigned Inbound Leads:** You must make first contact and log it in Salesforce within 5 business days. This is non-negotiable.
  - **Account Transfers:** Never reassign an account unilaterally. Align with the current owner first, then secure written approval from sales leadership.

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
      - "Align with the current owner and involve your manager and sales leadership in writing"
      - "Reassign the account in Salesforce first, then notify the prior owner"
      - "Post in a team chat only; no written approval is needed"
    correct_index: 0
    explanation: "Align with owner, then written leadership approval."

  - question: "Are E-Rate and USAC-funded entities treated like ordinary general accounts for the 61/121-day activity rules?"
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
  - title: "Working a customer account with no logged activity for 130 days"
    situation: |
      **Customer** account, **not** Strategic, not E‑Rate/USAC per ROE. No logged activity **130** days. You want outreach this week.
    choices:
      - label: "Start calling without contacting the listed owner first."
        feedback: "Reach the listed owner first—reduces conflict even when windows may allow outreach."

      - label: "Coordinate with the current owner or follow ROE transfer steps before treating the account as yours."
        feedback: "Correct. Align or use approved transfer paths."

  - title: "Inbound lead from marketing sits untouched"
    situation: |
      Marketing assigned the lead Monday. Following Tuesday = **six** business days later—no Salesforce contact logged. Another rep wants it.
    choices:
      - label: "Still yours—email notes count as logged activity."
        feedback: "Assigned inbound needs a Salesforce log within five business days."

      - label: "Lead may be reassigned; log going forward and check with your manager if it moved."
        feedback: "Correct—five business days for first contact + log."

reference_files:
  - label: "Sales Rules of Engagement (ROE) — Revised August 2025"
    sharepoint_url: "https://gpcom.sharepoint.com/:b:/r/sites/gpcSales/ROE/Sales%20Rules%20of%20Engagement%20(ROE)%20-%20Revised%20August%2025.pdf?csf=1&web=1&e=7aw2jN"
---

## Overview

The Rules of Engagement protect everyone’s pipeline and keep Salesforce trustworthy as the **system of record**.

**Core principles** (most day-to-day situations):

- **Search before you create** — one entity, one account; always search Salesforce before adding records.
- **Log meaningful activity** — tasks, calls, meetings, or emails **on the Salesforce record** (email in your Sent folder does not count).
- **Transfer through leadership in writing** — never reassign an account unilaterally.

Strategic and **E-Rate** accounts follow different rules. Know the **idle windows** (Prospect **61+** days, Customer **121+** days), keep your activity log current, and resolve disputes with Salesforce as the source of truth.

---

## Key Guidelines

1. **Search before creating:** Duplicate accounts are the most common ROE violation and the hardest to unwind. Always search Salesforce before creating a new account or contact.
2. **Log meaningful activity:** Email in your sent folder does not count. Activity must be logged as a task, call, meeting, or email on the record in Salesforce.
3. **Respect idle windows:** Prospect accounts are idle after 61+ days; Customer accounts after 121+ days. Even then, contact the listed owner first.
4. **Follow transfer protocols:** Never reassign an account in Salesforce unilaterally. Align with the current owner, then get written approval through your manager and sales leadership.
5. **Assigned inbound leads:** You have 5 business days to make first contact *and* log it in Salesforce. This is non-negotiable.

---

## Common Pitfalls

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

::: flip ["I emailed them twice—that counts as logged activity."]
Email in your sent folder is not a Salesforce log. Activity must be logged as a task, call, meeting, or email on the record in Salesforce.
:::

::: flip ["The account is 130 days idle—I can just start working it."]
Even when an idle window may allow outreach, best practice is to contact the listed owner first. For a formal transfer, use the written path through your manager and sales leadership.
:::

::: flip ["I saw the account was idle so I reassigned it to myself in Salesforce."]
Unilateral reassignment is a landmine under the ROE. Align with the current owner → written path through manager + sales leadership. Never reassign first.
:::

::: flip ["That school district runs the 61/121 rules—I checked."]
E-Rate and USAC-funded entities follow Strategic-style treatment regardless of whether they appear on the list. Confirm with leadership.
:::

::: flip ["Assigned inbound lead—I have a couple of weeks before first contact."]
You have **5 business days** to make first contact **and** log it in Salesforce. That clock is non-negotiable for assigned inbound leads.
:::

::: flip ["I'll spin up a new account so I don't have to chase the listed owner."]
Duplicates are the hardest ROE problem to unwind. Search first; if you need access, use the transfer path—never create a parallel account to bypass ownership.
:::

</div>

---

## Process Deep Dive [deep]

**ROE table (general path):**

| Topic | Rule |
| --- | --- |
| Prospect idle | **61+** days no qualifying logged activity → others may work |
| Customer idle | **121+** days → others may work |
| Assigned inbound | First contact **and** Salesforce log within **5 business days** |
| Self-sourced | **Not** the inbound 5-day clock |

**Strategic accounts:**
- Assignment + official list mechanics—not the generic 61/121 path
- Sales Managers and VP Sales own list changes on official Sales SharePoint
- Do not apply casual idle-window rules to Strategic accounts

**E-Rate / USAC-funded entities:**
- Strategic-style treatment regardless of list inclusion
- Documented exceptions exist (e.g., ENA Indiana → Out-State Team)
- Confirm coverage with leadership if unclear—don't apply casual 61/121

**Transfers:**
- Path: talk to current owner → written approval → your manager → sales leadership
- Never reassign in Salesforce to force a deal
- Never based on rumor or informal agreement

**Landmines:**
- Unilateral owner changes in Salesforce
- Rumor-based Strategic or E-Rate ownership claims
- "I was busy" with no Salesforce log on assigned inbound
- Using informal spreadsheets as the Strategic accounts source of truth

**Escalation path:**
- ROE doesn't fit the facts; transfer dispute; Strategic or E-Rate boundary; repeat duplicate-account pattern → manager + Salesforce timeline, not Slack polls or side deals

::: accordion ROE Overview Reference
Rules of engagement at a glance — ownership, idle windows, and escalation paths.

*Collateral image — coming soon*
:::

::: accordion Activity Tracking in Salesforce
Logged activity is what counts for idle-window calculations — calls, tasks, meetings, and emails on the record.

*Collateral image — coming soon*
:::

::: accordion Idle Window Reference
General account idle windows — 61 days for Prospects, 121 days for Customers.

*Collateral image — coming soon*
:::
