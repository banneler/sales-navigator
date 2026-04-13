---
id: "sales-rules-of-engagement"
title: "Sales Rules of Engagement"
summary: "Salesforce as system of record: search-before-create, 61/121 idle windows (general accounts), 5-day assigned inbound clock, Strategic/E‑Rate rules, transfers via leadership."
sensitivity: "public"
five_minute_summary: |
  - Search before creating accounts/contacts; SF is the system of record.
  - General: Prospect **61+** / Customer **121+** days idle → others may work; Strategic & E‑Rate/USAC differ.
  - **Assigned inbound:** first contact + Salesforce log within **5 business days** (not the self-sourced clock).
  - Transfers: align with owner → manager + sales leadership **in writing**—never reassign alone.

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
    sharepoint_url: "https://gpcom.sharepoint.com/:b:/r/sites/gpcSales/ROE/Sales%20Rules%20of%20Engagement%20(ROE)%20-%20Revised%20August%202025.pdf?csf=1&web=1&e=7aw2jN"

roleplay:
  persona: "Competitive Account Executive, 18 months in"
  scenario: "Spots a promising Customer account in Salesforce that hasn't had any logged activity in 135 days. Wants to start working it immediately and is considering reassigning it to themselves to lock it in before a peer notices."
  goal: "Understand the 121-day Customer idle window, but reinforce that the right path is to contact the listed owner first and follow the written transfer process through leadership—not a unilateral Salesforce reassignment."
---

## Elevator Pitch

The Rules of Engagement exist to protect everyone's pipeline and keep Salesforce trustworthy as the **system of record**. Three principles cover 90% of situations: **search before you create** (one entity, one account); **log meaningful activity** (Salesforce activity, not just email sent); and **transfer through leadership in writing** (never reassign unilaterally). Strategic and E-Rate accounts follow different rules. Know the windows, own your activity log, and disputes get resolved cleanly.

---

## Discovery Questions

*(For internal compliance reviews and coaching conversations)*

1. **Did you search Salesforce before creating this account or contact?** — Duplicate accounts are the most common ROE violation and the hardest to unwind.
2. **When was the last meaningful logged activity on this account—call, meeting, task—logged directly in Salesforce?** — Email in your sent folder does not count.
3. **Is this account on the Strategic list or an E-Rate/USAC-funded entity?** — If yes, the general 61/121 idle-window rules do not apply. Confirm with leadership.
4. **If you want to transfer this account, have you aligned with the current owner and started the written approval path through your manager?** — Reassigning in Salesforce first is a landmine.
5. **For an assigned inbound lead, how many business days has it been since assignment, and is first contact logged in Salesforce?** — The 5-day clock is non-negotiable for assigned inbound.

---

## Objection Handling

*(Common ROE misconceptions and how to address them)*

| Misconception | Correct Position |
| --- | --- |
| **"I emailed them twice—that counts as logged activity."** | Email in your sent folder is not a Salesforce log. Activity must be logged as a task, call, meeting, or email on the record in Salesforce. |
| **"The account is 130 days idle—I can just start working it."** | Even when an idle window may allow outreach, best practice is to contact the listed owner first. For a formal transfer, use the written path through your manager and sales leadership. |
| **"I saw the account was idle so I reassigned it to myself in Salesforce."** | Unilateral reassignment is a landmine under the ROE. Align with the current owner → written path through manager + sales leadership. Never reassign first. |
| **"That school district runs the 61/121 rules—I checked."** | E-Rate and USAC-funded entities follow Strategic-style treatment regardless of whether they appear on the list (with documented exceptions like ENA Indiana → Out-State Team). Confirm with leadership. |
| **"I found the Strategic list on a rep's shared folder."** | The authoritative list lives on the official Sales SharePoint repository. Informal spreadsheets and screenshots don't count. |

---

## Technical Deep Dive [deep]

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
