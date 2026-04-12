---
id: "sales-rules-of-engagement"
title: "Sales Rules of Engagement"
summary: "Official GPC sales governance: Salesforce as system of record, account ownership and activity windows for general vs strategic accounts, inbound lead follow-up, and how to request transfers or escalate edge cases."
sensitivity: "public"
five_minute_summary: |
  - Salesforce is the system of record; search before you create accounts or contacts to avoid duplicates and ownership fights.
  - General accounts have activity windows (e.g. customer 121+ days, prospect 61+ days) so idle records can be worked by others; Strategic Accounts and E-Rate/USAC entities follow different rules.
  - Inbound leads assigned by sales or marketing must get first contact **and** a logged touch within 5 business days or they may be reassigned (not the same clock as self-sourced prospecting).
  - Transfers and edge cases go through your manager and sales leadership in writing after you align with the current owner—do not reassign unilaterally.

knowledge_checks:
  - question: "Before creating a new account or contact in Salesforce, what should you do first?"
    options:
      - "Search Salesforce by name and address to avoid duplicates"
      - "Create the account and merge duplicates later"
      - "Ask IT to pre-approve every new record"
    correct_index: 0
    explanation: "The ROE requires searching first so one entity maps to one account and contacts are not duplicated across records."

  - question: "For an inbound lead assigned by sales or marketing, within how many business days should first contact be made and logged?"
    options:
      - "5 business days"
      - "60 calendar days"
      - "121 business days"
    correct_index: 0
    explanation: "Assigned inbound leads can be reassigned if first contact is not made and logged within five business days; that rule does not apply to self-sourced leads."

  - question: "Who ultimately maintains and communicates changes to the official Strategic Accounts list?"
    options:
      - "Sales Managers and the VP of Sales"
      - "Individual account executives only"
      - "The Salesforce admin team alone"
    correct_index: 0
    explanation: "Strategic list changes are owned by Sales Managers and the VP of Sales and are communicated from the official repository—informal lists are not authoritative."

  - question: "For a general (non-strategic) Customer account with no logged activity, after roughly how many days may others work the account per typical ROE windows?"
    options:
      - "121+ days"
      - "61+ days"
      - "5 business days"
    correct_index: 0
    explanation: "General Customer accounts with no logged activity for 121+ days may be worked by others; Prospect windows use a shorter inactivity threshold (61+ days)."

  - question: "For a general Prospect account with no logged activity, which window typically applies before others may work it?"
    options:
      - "61+ days without activity"
      - "121+ days without activity"
      - "Only after the fiscal year ends"
    correct_index: 0
    explanation: "Prospect accounts on general (non-strategic) paths follow the 61+ day inactivity window described in the ROE, distinct from the Customer 121+ day window."

  - question: "Does the five-business-day first-contact rule for assigned inbound leads apply the same way to leads you self-source through prospecting?"
    options:
      - "No; that clock is specific to sales- or marketing-assigned inbound leads"
      - "Yes; every lead type uses the same five-business-day clock"
      - "Self-sourced leads have a 121-day clock instead"
    correct_index: 0
    explanation: "The five-business-day expectation applies to inbound leads assigned by sales or marketing; it is not the same rule as for self-sourced prospecting."

  - question: "When you want to transfer an account to another rep, what does the ROE expect before leadership approval?"
    options:
      - "Align with the current owner and involve your manager and sales leadership in writing"
      - "Reassign the account in Salesforce first, then notify the prior owner"
      - "Post in a team chat only; no written approval is needed"
    correct_index: 0
    explanation: "Transfers require alignment with the incumbent owner and written approval through your manager and sales leadership—do not reassign unilaterally."

  - question: "Are E-Rate and USAC-funded entities treated like ordinary general accounts for the 61/121-day activity rules?"
    options:
      - "No; they follow Strategic-style treatment regardless of list inclusion (with noted exceptions)"
      - "Yes; they always follow the same 61/121 rules as any Prospect or Customer"
      - "They are excluded from Salesforce entirely"
    correct_index: 0
    explanation: "E-Rate and USAC-funded entities are called out as Strategic for ROE purposes regardless of list inclusion, subject to any documented exceptions."

  - question: "If Salesforce is the system of record for ownership disputes, what should strong reps prioritize alongside outreach?"
    options:
      - "Data quality, timely logging, and consistent meaningful activity"
      - "Keeping deals only in email to avoid clutter"
      - "Deleting old tasks so the record looks inactive"
    correct_index: 0
    explanation: "Leadership uses Salesforce to resolve conflicts; accurate records and logged activity make the ROE fair and enforceable."

  - question: "Where should you look for the authoritative Strategic Accounts list rather than informal spreadsheets?"
    options:
      - "The official Sales SharePoint repository referenced in the ROE"
      - "Any rep’s personal bookmark folder"
      - "Only the footer of customer emails"
    correct_index: 0
    explanation: "The ROE points to the official repository on Sales SharePoint; informal lists are not authoritative."

scenarios:
  - title: "Working a customer account with no logged activity for 130 days"
    situation: |
      You found a **Customer** account that shows no logged activity for more than 121 days. The account is **not** on the Strategic Accounts list and is not an E-Rate/USAC-funded entity called out in the ROE. You want to start outreach this week.
    choices:
      - label: "Start calling and emailing without contacting the listed owner first."
        feedback: "Even when windows may allow working the record, reach out to the listed owner first—relationships and context prevent conflict; leadership uses Salesforce to resolve disputes."

      - label: "Coordinate with the current owner or follow ROE transfer steps before treating the account as yours."
        feedback: "Correct. Align with the owner or use approved transfer/escalation paths; do not reassign or bypass collaboration when ownership is unclear."

  - title: "Inbound lead from marketing sits untouched"
    situation: |
      Marketing assigned you an inbound lead on Monday. It is now the following Tuesday—six business days later—and you have not logged any contact in Salesforce. Another rep asks to work it.
    choices:
      - label: "The lead is still exclusively yours because you were busy; notes in email count as logged activity."
        feedback: "Notes alone do not replace logged activity in Salesforce for ROE purposes; assigned inbound leads have a five business day expectation for first contact and logging."

      - label: "Expect the lead may be reassigned per ROE; log first contact immediately going forward and clarify with your manager if it was already moved."
        feedback: "Right. First contact must be made and logged within five business days for assigned inbound leads; after that window, reassignment is allowed under the ROE."

reference_files:
  - label: "Sales Rules of Engagement (ROE) — Revised August 2025"
    sharepoint_url: "https://gpcom.sharepoint.com/:b:/r/sites/gpcSales/ROE/Sales%20Rules%20of%20Engagement%20(ROE)%20-%20Revised%20August%202025.pdf?csf=1&web=1&e=7aw2jN"
---

## Purpose

The Rules of Engagement (ROE) set shared expectations for how reps work accounts in Salesforce: one entity, one account; clear ownership; fewer duplicate records and fewer “who owns this?” fights. **Salesforce is the system of record**—leadership uses it to resolve disputes, so **data quality and timely logging** matter as much as outreach.

The ROE covers most day-to-day situations. **Edge cases** go to sales management. The policy evolves—**know the revision date** on the official PDF and use **Sales Resources / Module Reference Files** for the current document. The **Strategic Accounts list** lives in the official **Sales SharePoint** repository (not informal spreadsheets).

### At a glance

- **Why it exists:** Fair, predictable rules so everyone knows how accounts move and when others can engage.
- **Your job:** Search before you create, log real activity, and use approved paths for transfers—not silent reassignments.
- **Where to look:** Official ROE PDF (sidebar / Sales Resources) + authoritative SharePoint lists—not someone’s bookmark or screenshot.

### Talk track

- *“We run off Salesforce so ownership is clear; I’m logging this touch so the record matches what we discussed.”*

### Landmines

- Treating email or Teams as “good enough” when the ROE expects a **Salesforce-logged** touch.
- Acting on a **rumor** about who owns a Strategic or E-Rate account instead of the **official** list and ROE.
- **Reassigning or working around** the listed owner to “move faster.”

### When to escalate

- Any situation where the ROE **doesn’t clearly fit** the facts—get a management decision instead of guessing.
- **Strategic list** adds/removes/clarifications—route through **your manager** and **Sales Managers / VP of Sales**, not informal channels.

---

## At a glance (clocks & logging)

Use this as a **cheat sheet** on calls; full detail stays in the **ROE PDF** (Sales Resources / sidebar).

### Logged activity (what counts)

- **Logged activity** = outreach captured **in Salesforce** (calls, tasks, meetings, emails logged to the record) so leadership can **see** it.
- **Email or Teams alone** does **not** replace a log when the ROE expects a logged touch.
- **Notes without real outreach** do not “protect” a record on their own—pair notes with **meaningful contact** and a **cadence** that keeps you out of idle windows.

### General accounts (not Strategic, not on the E‑Rate / USAC path)

- **Prospect:** after **61+** days with no qualifying logged activity, others may work the record.
- **Customer:** after **121+** days with no qualifying logged activity, others may work the record.

### Assigned inbound leads (sales or marketing)

- **First contact** and a **logged touch** within **5 business days**.
- **Not** the same clock as **self-sourced** prospecting—don’t mix the two rules.

### Cadence & intel

- Keep a **rhythm** of meaningful touches so you are **not** drifting into 61/121-day idle territory.
- Keep **current intel** (projects, contract timing, stakeholders)—stale records invite confusion and conflict.

### Talk track

- *“I’m tracking to our ROE—logged this in Salesforce so there’s a clear history if anyone else touches the account.”*
- *“That inbound came in through marketing/sales assignment; I’m on the five-business-day first-contact clock.”*

### Landmines

- Changing **Account Owner** in Salesforce **without** aligning with the listed owner and the **written** manager / leadership path.
- Trusting a **personal** Strategic list—only the **official Sales SharePoint** list tied to the ROE counts.
- Confusing **self-sourced** prospecting with **assigned inbound** lead rules.
- Assuming **busy** excuses matter—the ROE is about **logged** activity in Salesforce for assigned inbound.

### When to escalate

- You are **past** the five-business-day window on an assigned inbound and need clarity on **reassignment** or **recovery**—talk to **your manager** with facts from Salesforce.
- Disputes about **what counted** as logged activity—bring **your manager** and **Salesforce history**, not a thread of opinions.

---

## Rules & boundaries

### Search before you create (accounts & contacts)

- **Search Salesforce** by name and address **before** creating accounts or contacts.
- **Do not** open a second account for the same entity.
- **Do not** add a contact whose email already exists on another record—**coordinate** with the owning rep.
- Goal: **one entity → one account**, contacts **deduplicated** across the system.

**At a glance**

- Search first; merge drama later is expensive for everyone.
- When in doubt, **talk to the listed owner** before you create.

**Talk track**

- *“I searched Salesforce first—want to make sure I’m not duplicating your account before I add anything.”*

**Landmines**

- “I’ll create it now and **merge later**” when the ROE expects **prevention**, not cleanup.
- Splitting the same customer across **two accounts** to avoid a conversation.

### Transfers between reps

- **Talk to the current owner first.**
- Once aligned, get approval **in writing** through **your manager** and **sales leadership**—**do not** reassign unilaterally in Salesforce.

**At a glance**

- Alignment → written approval → clean transfer.
- No **surprise** owner changes.

**Talk track**

- *“I’ve aligned with [owner]; we’re asking leadership for a formal transfer so Salesforce matches what we agreed.”*

**Landmines**

- Reassigning in Salesforce to **force** a conversation.
- **Team chat** or verbal “yeah, take it” **without** the written path the ROE expects.

**When to escalate**

- Incumbent **won’t engage** or disputes facts—bring **your manager** with a concise timeline and Salesforce evidence.

### General (non-strategic) accounts — activity windows

- **Customer:** no logged activity for **121+** days → others may work the record (per ROE).
- **Prospect:** no logged activity for **61+** days → others may work the record (per ROE).
- **Notes alone** do not replace **consistent contact**—aim for **meaningful** touches on a cadence that beats the windows (e.g. **at least every ~60 days** for prospects alongside current intel).

**At a glance**

- **61** = Prospect idle window; **121** = Customer idle window—**general** path only.
- **Intel + outreach** beats **notes-only** “protection.”

**Talk track**

- *“Even if the window might allow outreach, I’m looping in the listed owner first—relationship and context matter.”*

**Landmines**

- **Blitzing** the account **without** a courtesy ping to the **listed owner**—even when the window might allow outreach, you still risk a fight.

**When to escalate**

- You and another rep **both** have legitimate history—**your manager** uses Salesforce to sort it **fairly**.

### Inbound leads (assigned by sales or marketing)

- **First contact** must be made **and logged** within **5 business days** or the lead may be **reassigned** (per ROE).
- That rule does **not** apply the same way to **self-sourced** prospecting—different clock, different context.

**At a glance**

- **5 business days** = **assigned inbound**; log in Salesforce.
- **Self-sourced** ≠ automatic five-day rule.

**Talk track**

- *“I’m treating this assigned lead with priority—first touch and a Salesforce log inside five business days.”*

**Landmines**

- “I was busy” **without** a log—leadership looks at **Salesforce**, not your calendar story alone.
- Counting **email in your Sent folder** as the system of record.

**When to escalate**

- Lead was **reassigned** while you were covering a valid exception (PTO with notice, etc.)—document and route through **your manager** **early**.

### Strategic Accounts (official list)

- Accounts on the **official Strategic** list are protected by **assignment**, **not** by the general **61/121** activity rules in the same way.
- **Strategic list changes** are owned by **Sales Managers** and the **VP of Sales** and communicated from the **official repository** on **Sales SharePoint**—**informal lists are not authoritative**.

**At a glance**

- Strategic = **named assignment** and leadership-approved list mechanics—not “I haven’t called in 70 days so it’s open.”
- Go to **SharePoint** for the real list.

**Talk track**

- *“Strategic coverage follows the official list and leadership direction—I’m not improvising off a side spreadsheet.”*

**Landmines**

- Using a **downloaded** list from six months ago.
- **Lobbying** peers to “trade” Strategic accounts outside the approved process.

**When to escalate**

- Account **should** be Strategic (or should **not**)—proposal goes through **Sales Managers / VP of Sales**, with **your manager** in the loop.

### E-Rate, USAC-funded entities, and the ENA exception

- **E-Rate** and **USAC-funded** entities (e.g. schools, libraries, hospitals—per ROE) are treated as **Strategic for ROE purposes** **regardless** of list inclusion, **subject to documented exceptions**.
- **Exception called out in ROE:** **ENA (Education Networks of America) in Indiana** stays with the **Out-State Team**.

**At a glance**

- Default: **Strategic-style** treatment for these entities—not the generic 61/121 path.
- **Know the ENA carve-out** so you don’t mis-route Indiana ENA.

**Talk track**

- *“E-Rate / USAC entities follow our Strategic-style ROE treatment—I’m confirming coverage with the right team before I engage.”*

**Landmines**

- Applying **61/121** to an entity that is **E-Rate / USAC** when the ROE says otherwise.
- Ignoring the **ENA / Indiana / Out-State** nuance.

**When to escalate**

- **Coverage** or **funding** status is unclear—**your manager** + **sales leadership** with **Salesforce** and **program** facts, not guesses.

---

## Escalation

### At a glance

- **Transfers:** incumbent alignment first, then **written** path through **your manager** and **sales leadership**—**never** unilateral reassignment.
- **Gray areas (~20% of cases):** ROE doesn’t clearly fit → **sales management** decides—don’t freelance policy.
- **Strategic list:** changes go through **Sales Managers** and **VP of Sales** from the **official SharePoint** source—**not** Slack polls.
- **Cross-team friction** on ownership or E-Rate / USAC coverage: resolve with **leadership** using **Salesforce history** as evidence.

### Talk track

- *“I’m escalating with my manager with dates and Salesforce activity so leadership can rule quickly.”*

### Landmines

- **“I’ll just take it in Salesforce and apologize later.”**
- **Escalating without facts**—no dates, no tasks, no account timeline.

### When to escalate (quick list)

- Proposed **transfer** where owners **disagree** on facts or customer relationship.
- **Strategic** or **E-Rate / USAC** boundary disputes.
- **Repeated** duplicate-account or ownership issues in the same territory—pattern, not one-off venting.
- Anything that could become a **customer-visible** conflict if you wing it.

---

## What good looks like

### Habits

- **Search** before you create; **one account per entity**; **clean contacts**.
- **Log** meaningful activity on a rhythm that **beats** idle windows for general accounts.
- On **assigned inbound**, **first touch + log** inside **five business days**.
- For **Strategic** and **E-Rate / USAC**, respect **named assignment** and **team boundaries** (including the **ENA** exception).

### Relationships

- Even when a record looks **“open”** by the numbers, **reach out to the listed owner** before you flood the account—**context** prevents fights and protects the customer experience.

### Salesforce hygiene

- **Accurate** stage, **next steps**, and **contact data**—leadership can only enforce what they can **see**.
- Strong hygiene makes the ROE **fair** for **everyone**, not just the loudest rep on the thread.

### Talk track

- *“I run my book so Salesforce tells the truth—makes it easier for all of us when leadership has to decide.”*

---

## Media (optional) [deep]

*Guidde (reserved):* Optional walkthrough—search before account create, log first contact on assigned inbound leads within five business days, and when to ping the **current owner** vs **your manager / leadership** for transfers or Strategic-list questions.
