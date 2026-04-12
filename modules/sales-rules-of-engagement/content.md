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
      - "Any rep’s personal bookmark folder"
      - "Only the footer of customer emails"
    correct_index: 0
    explanation: "Official Sales SharePoint—informal lists don’t count."

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
---

## What the ROE is

**Salesforce = system of record** for ownership and disputes—log real touches (calls/tasks/meetings/email **on the record**). Email/Teams alone doesn’t replace a required log.

**Source of truth:** ROE PDF (Sales Resources / sidebar) + **Strategic** list on **Sales SharePoint**—not screenshots or side spreadsheets. Note **revision date** on the PDF.

| Topic | Rule (typical general path) |
|-------|-------------------------------|
| Prospect idle | **61+** days no qualifying logged activity → others may work |
| Customer idle | **121+** days → others may work |
| Assigned inbound | First contact **and** Salesforce log within **5 business days** |
| Self-sourced | **Not** the inbound 5-day clock |

**Strategic** accounts: assignment + official list mechanics—not the generic 61/121 path. **E‑Rate / USAC-funded** entities: **Strategic-style** per ROE regardless of list, except documented exceptions (**e.g. ENA Indiana → Out-State Team**).

**Transfers:** talk to current owner → **written** path through **your manager** and sales leadership. **Never** reassign unilaterally.

**Landmines:** unilateral owner changes; rumor-based Strategic/E‑Rate ownership; “I was busy” with no SF log on assigned inbound.

---

## Rules (by topic)

**Search before create** — One entity → one account; dedupe contacts. *“I searched SF first so we don’t duplicate.”*

**Transfers** — Alignment → written approval. **Don’t** reassign in SF to force a deal.

**General 61/121** — Even when a window might allow outreach, **ping the listed owner** first when relationship/context matter.

**Inbound assigned** — 5 business days to contact + log. Sent email folder ≠ system of record.

**Strategic** — Sales Managers + VP Sales own list changes on **official SharePoint**.

**E‑Rate / USAC** — Don’t apply casual 61/121; confirm coverage with leadership if unclear.

---

## Escalate

ROE doesn’t fit the facts; transfer dispute; Strategic or E‑Rate boundary; repeat duplicate-account pattern → **manager** + **Salesforce timeline**, not Slack polls or side deals.

---

## Habits & hygiene [deep]

- Search first; cadence that beats idle windows for general accounts.
- Accurate stage, next steps, contacts—leadership only sees what’s in SF.
- *Optional Guidde:* search-before-create, inbound 5-day logging, owner vs leadership paths for transfers / Strategic.
