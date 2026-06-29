# Sales-Navigator — consolidated module content

Single export in manifest order. **Canonical training source for each module is `modules/<id>/content.md`** (or the paths noted for special modules). Regenerate this file with `npm run docs:assemble-modules`. Verbatim sections are wrapped for Prettier so YAML indentation is preserved.

## Table of contents

- [Getting started (`getting-started`)](#getting-started-getting-started)
- [Sales Rules of Engagement (`sales-rules-of-engagement`)](#sales-rules-of-engagement-sales-rules-of-engagement)
- [Salesforce (`sales-process-and-salesforce`)](#salesforce-sales-process-and-salesforce)
- [Sales Operations & Approvals (`sales-operations-and-approvals`)](#sales-operations-approvals-sales-operations-and-approvals)
- [Portfolio & Business Capabilities (`portfolio-and-business-capabilities`)](#portfolio-business-capabilities-portfolio-and-business-capabilities)
- [Connectivity & Access (`product-connectivity`)](#connectivity-access-product-connectivity)
- [Security & SD-WAN (`product-security-and-sd-wan`)](#security-sd-wan-product-security-and-sd-wan)
- [Cloud, Wi-Fi, 5G (`product-cloud-wifi-and-backup`)](#cloud-wi-fi-5g-product-cloud-wifi-and-backup)
- [GPC iTV for Business (`product-itv`)](#gpc-itv-for-business-product-itv)
- [UC, Voice & Collaboration (`product-uc-voice-and-collaboration`)](#uc-voice-collaboration-product-uc-voice-and-collaboration)
- [Competitive Positioning (`competitive-positioning`)](#competitive-positioning-competitive-positioning)
- [GPC Sales SharePoint (`sales-sharepoint-hub`)](#gpc-sales-sharepoint-sales-sharepoint-hub)
- [ZoomInfo (`zoominfo-for-sales`)](#zoominfo-zoominfo-for-sales)
- [Proposal Generator (`enterprise-proposals`)](#proposal-generator-enterprise-proposals)
- [Account Based Marketing (`account-based-marketing`)](#account-based-marketing-account-based-marketing)
- [Operational Business Reviews (`operational-business-reviews`)](#operational-business-reviews-operational-business-reviews)
- [Executive Map Book (`map-book`)](#executive-map-book-map-book)

---

<a id="getting-started-getting-started"></a>

# Getting started (`getting-started`)

<!-- prettier-ignore-start -->
---
id: "getting-started"

title: "Getting started"

summary: "Quick tour of Sales-Navigator: how to use the hub, what to read first, and a sample practice prompt."

sensitivity: "public"

five_minute_summary: |
  Welcome to the team. Use Sales-Navigator as your first stop when you need a refresher, a customer-ready talk track, or the next best module to read.

  - Start with the Coffee Summary when you need the quick version, then use scenarios and module details when a deal needs more depth.
  - Keep the customer conversation practical: GPC positions reliable fiber connectivity, communications, security, cloud, backup, and managed services around real business needs.
  - You do not need every answer memorized. Know where to look, ask good questions, and bring in teammates when the opportunity needs another set of eyes.

# Tour sample content (read by the Getting started page only—not the standard module scenarios/KC renderer.)
getting_started_demo:
  scenario:
    title: "Start with the customer need"
    situation: |
      A multi-site business says its current network is hard to manage and does not scale well as locations change. What is the strongest first move?
    options:
      - label: "Lead with the lowest monthly price before learning what is breaking today."
        correct: false
      - label: "Ask about current business challenges, then connect the need to scalable, secure connectivity options."
        correct: true
      - label: "Assume one product fits every site because the customer has the same logo on each building."
        correct: false
    incorrect_feedback: "Not quite. The strongest opening is discovery first, then matching the customer to secure, scalable infrastructure."
    coach_note: "GPC's portfolio is broad; start with the customer's business problem so the recommendation feels built for them."
  knowledge_check:
    question: "Which GPC value point is supported in the Getting started source material?"
    options:
      - label: "GPC offers local support, 24/7 network monitoring, and flexible, scalable solutions."
        correct: true
      - label: "GPC only sells one internet product for every business customer."
        correct: false
      - label: "GPC's main advantage is avoiding discovery and quoting from memory."
        correct: false
    incorrect_feedback: "Close, but the source points to local support, 24/7 monitoring, experience, and flexible solutions."
    affirmation_primary: "Correct. Those are core reasons businesses choose GPC."
    affirmation_secondary: "Use those points as anchors, then tailor the conversation to the customer."
    hint: "Look for the broad value points in the source material."
---

## A note from the team

Dear teammate,

Welcome to Great Plains Communications. Whether you are new to telecom or have carried a bag for years, Sales-Navigator is here to make the ramp easier. Use it to get oriented, prepare for customer conversations, and find the right module when a deal gets specific.

Nobody expects you to know everything on day one. We do expect you to ask good questions, use the resources here, and reach out when a customer need deserves more depth. That is how we show up as a partner, not just another provider.

With appreciation,

**Your Sales Leader**

## Where to go next

- If you are learning the sales motion, start with **Sales Rules of Engagement** or **Salesforce** before going deep on products.
- If a customer conversation is coming up, use the product modules to connect business needs with the right part of the GPC portfolio.
- Use scenarios and knowledge checks as practice, not trivia. They are there to help you rehearse the choices you will make in the field.
<!-- prettier-ignore-end -->

---

<a id="sales-rules-of-engagement-sales-rules-of-engagement"></a>

# Sales Rules of Engagement (`sales-rules-of-engagement`)

<!-- prettier-ignore-start -->
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
<!-- prettier-ignore-end -->

---

<a id="salesforce-sales-process-and-salesforce"></a>

# Salesforce (`sales-process-and-salesforce`)

<!-- prettier-ignore-start -->
---
id: "sales-process-and-salesforce"
title: "Salesforce"
summary: "Pipeline hygiene. Approvals. Clean handoffs."
sensitivity: "internal"
sales_trio_guidelines_only: true
reference_files:
  - label: "Salesforce Roadmap — 2025 training guides (main folder)"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/SalesforceRoadmap/Shared%20Documents/Forms/AllItems.aspx?csf=1&web=1&e=aa3Qzz&siteid=%7B3120FC34%2D7B32%2D4627%2DA6C3%2DDE1832FB7356%7D&webid=%7B1830E200%2D0828%2D45CE%2DB4F7%2D42BEE33B3084%7D&uniqueid=%7BE2E5E4EB%2DEAAF%2D4DEC%2D9003%2DB9CB553BFC5A%7D&FolderCTID=0x012000DFABF9A88316F24FA8D2F7A3EAC4739E&id=%2Fsites%2FSalesforceRoadmap%2FShared%20Documents%2FGeneral%2F2025%20Salesforce%20Training%20Guides%20%28Legacy%20BAU%20org%29"
video_sections:
  - heading: "Salesforce 101"
    items:
      - title: "Getting Started"
        src: "assets/training/salesforce/sf101-01-sections-1-and-2.mp4"
      - title: "Navigation & Records"
        src: "assets/training/salesforce/sf101-02-section-3-pt1.mp4"
      - title: "Navigation & Records — Part 2"
        src: "assets/training/salesforce/sf101-03-section-3-pt2.mp4"
      - title: "Core Concepts"
        src: "assets/training/salesforce/sf101-04-section-4.mp4"
      - title: "Sales Cycle"
        src: "assets/training/salesforce/sf101-05-section-4-sales-cycle.mp4"
      - title: "Additional Resources"
        src: "assets/training/salesforce/sf101-07-section-5-additional-resources.mp4"
  - heading: "Check In 1"
    body: |
      Short **15-minute** kickoff with **Sales Support** and your **Salesforce administrator** (**Fritz Antoine**, [salesforceadministrator@gpcom.com](mailto:salesforceadministrator@gpcom.com))—align on expectations, where to get help, and how this module fits live selling.

      Then **Amy** walks through **converting a lead** in Salesforce. Review the job aid first: [Converting Leads to an Opportunity — Quick Reference Guide (PDF)](https://gpcom.sharepoint.com/sites/SalesforceRoadmap/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FSalesforceRoadmap%2FShared%20Documents%2FGeneral%2F2025%20Salesforce%20Training%20Guides%20%28Legacy%20BAU%20org%29%2FConverting%20Leads%20to%20an%20Opportunity%20Quick%20Reference%20Guide%20%2D%201123%2Epdf&parent=%2Fsites%2FSalesforceRoadmap%2FShared%20Documents%2FGeneral%2F2025%20Salesforce%20Training%20Guides%20%28Legacy%20BAU%20org%29).
  - heading: "Creating a GPC Solution"
    items:
      - title: "Creating a GPC Solution"
        src: "assets/training/salesforce/sf-gpc-solution-video-2023.mp4"
  - heading: "Live session — GPC Solution with Amy (30 minutes)"
    body: |
      After the video, spend **30 minutes** live with **Amy** applying the GPC Solution workflow—questions, navigation, and how this ties to approvals and costing.
  - heading: "Creating a multi-site GPC Solution"
    items:
      - title: "Creating a multi-site GPC Solution"
        src: "assets/training/salesforce/sf-gpc-multisite-solution-video-2023.mp4"
  - heading: "Live session — Multi-site GPC Solution with Amy (30 minutes)"
    body: |
      After the video, **30 minutes** live with **Amy** on **multi-site** GPC Solutions. You will **work demo opportunities** during this session to practice the motion in Salesforce.
five_minute_flow:
  aria_label: "Salesforce onboarding order"
  steps:
    - title: "101"
      caption: "Self-paced videos"
    - title: "Check In 1"
      caption: "Kickoff + live lead demo"
    - title: "GPC Solution"
      caption: "Video → 30 min live"
    - title: "Multi-site"
      caption: "Video → 30 min live"
five_minute_summary: |
  - **Convert to Opportunity:** When converting an Employee Business Lead Referral, best practice is to create a new Opportunity. Use an existing Opportunity only in rare cases with your Sales Manager or Salesforce Admin.
  - **The Contract Signer:** Add the Contract Signer while you are creating the GPC Solution. Once the Solution is in Approval Pending, Salesforce will not let you add that field.
  - **DocuSign prep:** Any DocuSign recipient needs to be an existing Salesforce Contact before you send the document.
  - **Forecasting:** Forecast the GPC Solutions you are actively working, choose Forecasted / Upside / Committed based on confidence, and keep Close Date aligned to when you think the customer will sign.
  - **Contact Roles:** For each Closed-Won GPC Solution, provide Project Contact, Billing Contact, and Property Manager / On-Site Manager so PMO and Business Customer Care know who to contact.

your_coaches:
  coaches:
    - name: "Amy Wettering"
      email: "awettering@gpcom.com"
      role: "Sales Support"
      photo: "assets/training/salesforce/coaches/amy-wettering.png"
    - name: "Fritz Antoine"
      email: "salesforceadministrator@gpcom.com"
      role: "Salesforce Administrator"
      photo: "assets/training/salesforce/coaches/fritz-antoine.png"

knowledge_checks:
  - question: "You are converting an Employee Business Lead Referral. Do you create a new Opportunity?"
    options:
      - "No. Wait until they verbally commit so you don't clutter the pipeline."
      - "Yes. Best practice is to create a new Opportunity when converting this type of lead."
      - "No. Leave them as a Lead and set a reminder task for next week."
    correct_index: 1
    explanation: "The lead conversion QRG says to create a new Opportunity for Employee Business Lead Referrals in almost every case. Rare exceptions should go to your Sales Manager or Salesforce Admin."

  - question: "When is the correct time to assign the Contract Signer to the GPC Solution?"
    options:
      - "Right after the solution gets fully approved, just before you hit the Conga merge button."
      - "Early in the process, before the solution ever reaches Approval Pending."
      - "It doesn't matter, as long as it happens before the customer opens the email."
    correct_index: 1
    explanation: "The DocuSign integration guide says it is best practice to add the Contract Signer when creating the GPC Solution. You cannot add the Contract Signer while the Solution is in Approval Pending."

  - question: "You need the customer's CFO to sign the final agreement, but you've only been dealing with the IT Director. What must you do in Salesforce first?"
    options:
      - "Just type the CFO's email address manually into the DocuSign routing window."
      - "Send it to the IT Director and ask them to forward the DocuSign to the CFO."
      - "Create the CFO as a Contact on the Account record before sending the DocuSign."
    correct_index: 2
    explanation: "Any DocuSign recipient needs to be an existing Salesforce Contact before they can be selected as a recipient."

  - question: "You are about 75% sure a customer will choose a GPC Solution next month. Which forecast type should you use?"
    options:
      - "Forecasted."
      - "Upside."
      - "Committed."
    correct_index: 1
    explanation: "Use Upside when you are roughly 75% sure the customer will choose the GPC Solution next month or possibly this month. Use Committed closer to 90% confidence."
    source: "Forecasting Quick Reference Job Aid - 0622.pdf"

  - question: "Which Contact Roles does the Quick Reference Guide (QRG) ask you to provide for every Closed-Won GPC Solution?"
    options:
      - "Just the Decision Maker—everything else is optional."
      - "Project Contact, Billing Contact, and Property Manager / On-Site Manager."
      - "Sales' Main Contact and the Influencer. The project team figures the rest out post-close."
    correct_index: 1
    explanation: "The Contact Roles QRG asks you to provide Project Contact, Billing Contact, and Property Manager / On-Site Manager for each Closed-Won GPC Solution."
    source: "Contact Roles Quick Reference Guide - 1023.pdf"

  - question: "On the same Solution Site you've selected both New Services and Existing Services. Which costing routing path does Salesforce follow?"
    options:
      - "The Existing Services path."
      - "The New Services path."
      - "Both paths run in parallel and the system reconciles them at Close-Won."
    correct_index: 1
    explanation: "When New and Existing Services are both selected on the same Solution Site, costing follows the New Services path for department review."
    source: "Costing Routing Quick Reference Guide - 1123.pdf (Considerations)"

  - question: "A Solution Site is associated with a Zone Parent Opportunity. Can it use the Reusable flag for costing?"
    options:
      - "Yes—Reusable speeds up multi-site deals, so Zone Parent + Reusable is the recommended combination."
      - "No—Reusable is not allowed when a Solution Site is associated with a Zone Parent Opportunity."
      - "Only if the site is also flagged Strategic Build."
    correct_index: 1
    explanation: "Strategic Build, Zone Parent, and Reusable are independent flags. The QRG is explicit: Reusable is not allowed under a Zone Parent."
    source: "Costing Routing Quick Reference Guide - 1123.pdf (Considerations)"

  - question: "What conditions flag a Solution Site as Strategic Build?"
    options:
      - "Any deal over $50k MRC that needs extra construction or CFO review."
      - "Any deal attached to a Zone Parent Opportunity, regardless of location."
      - "The site falls inside pre-loaded Strategic Build geographic boundaries."
    correct_index: 2
    explanation: "Strategic Build is geographic, not financial or Zone Parent-driven. When the boundary triggers, Individual Drop Cost and Individual Equipment Cost apply systematically."
    source: "Costing Routing Quick Reference Guide - 1123.pdf (Considerations)"

scenarios:
  - title: "The 11th Hour Signer"
    situation: |
      You fought hard for a deal, got the verbal 'yes', and pushed the GPC Solution all the way through approvals. You go to generate the DocuSign envelope and realize the CEO needs to sign, but you never added them to the Solution.
    choices:
      - label: "Quickly type the CEO's name into the DocuSign recipient list and hit send."
        feedback: "That is not the right fix. The Contract Signer needs to be set on the GPC Solution before Approval Pending, and any DocuSign recipient needs to be an existing Salesforce Contact."

      - label: "Pull the Solution back, add the CEO as a Contact, set them as the Contract Signer, and re-route."
        feedback: "Correct. Next time, add the signer while you are creating the GPC Solution so the document step is cleaner."
---

## Overview

<!--
### System of record

Salesforce is GPC’s **system of record for every deal**—from first contact to installed revenue. Keep live opportunities and activity **in Salesforce**, not in email or spreadsheets alone.

### 2026 onboarding (Sales Support)

Work the **Coffee Summary** stepper and the **training blocks on this page** in order—the same sequence Sales Support uses (**101** → **Check In 1** → **GPC Solution** → **multi-site**). Don’t skip ahead unless leadership documents an exception.

- **Check In 1:** 15 minutes with Sales Support and **Fritz Antoine** (Salesforce administrator), then **Amy** walks **live lead conversion**. Skim the job aid first: [Converting Leads — quick reference (PDF)](https://gpcom.sharepoint.com/sites/SalesforceRoadmap/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FSalesforceRoadmap%2FShared%20Documents%2FGeneral%2F2025%20Salesforce%20Training%20Guides%20%28Legacy%20BAU%20org%29%2FConverting%20Leads%20to%20an%20Opportunity%20Quick%20Reference%20Guide%20%2D%201123%2Epdf&parent=%2Fsites%2FSalesforceRoadmap%2FShared%20Documents%2FGeneral%2F2025%20Salesforce%20Training%20Guides%20%28Legacy%20BAU%20org%29).
- **Sign-in:** **Okta** for the Salesforce app (YubiKey no longer applies here).
- **Admin contact:** **Fritz Antoine** — [salesforceadministrator@gpcom.com](mailto:salesforceadministrator@gpcom.com).
- **Written guides:** **Process Deep Dive** (below) links PDFs and job aids; the **Salesforce Roadmap** library is in **Module Reference Files**.

### Happy path

1. **Lead conversion** — When a lead is continuing in the Sales Cycle, convert it and create the Opportunity in almost every Employee Business Lead Referral case.
2. **Deal motion** — **GPC Solution** → **approvals** → **Conga** → **DocuSign**.

### Why the rules matter

Cutting corners—**no opportunity** on conversion, a late **Contract Signer**, signers that only live in a spreadsheet, or stale forecast dates—creates rework for Sales Support, PMO, Business Customer Care, and leadership.

---
-->

## Key Guidelines

1. **Search before you create:** Use Salesforce search and the conversion match prompts to avoid duplicate Accounts and Contacts.
2. **Convert to Opportunity:** When converting an Employee Business Lead Referral, best practice is to create a new Opportunity. Use an existing Opportunity only in rare cases with your Sales Manager or Salesforce Admin.
3. **Forecast accurately:** Forecast the GPC Solutions you are working, use Upside at roughly 75% confidence and Committed at roughly 90%, and keep Close Date aligned to the likely signature date.
4. **Set Contract Signer early:** Add the Contract Signer when you create the GPC Solution. You cannot add that field while the Solution is in Approval Pending.
5. **Contacts must exist in Salesforce:** DocuSign recipients must be Salesforce Contacts before you can select them as recipients.

---

## Common Landmines

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

::: flip ["I'll skip creating the opportunity on conversion—less work."]
For Employee Business Lead Referrals, best practice is to create a new Opportunity during conversion. Existing Opportunity is rare; check with your Sales Manager or Salesforce Admin first.
:::

::: flip ["I'll leave the Close Date alone until the customer signs."]
Update Close Date as the customer's timeline changes. Sales Leadership uses it to understand when the GPC Solution is likely to close.
:::

::: flip ["I'll add the Contract Signer right before I send to DocuSign."]
Set Contract Signer when you create the GPC Solution or early in its lifecycle. Once the Solution is in Approval Pending, you cannot add the Contract Signer.
:::

::: flip ["My signers are saved in a spreadsheet—I'll add them to Salesforce later."]
DocuSign recipients must be existing Salesforce Contacts before you send the document. Add the Contact first, then select them as a recipient.
:::

::: flip ["Close date is flexible—stage and amount are what matter."]
Close Date is part of the forecast. Use it to tell Sales Leadership when you think the GPC Solution will be Closed/Won.
:::

::: flip ["I'll forecast both GPC Solutions under the Parent Opportunity so the numbers roll up."]
Forecast only the GPC Solution you expect to sell. Forecasting both just because they sit under a Parent Opportunity inflates the Parent Opportunity numbers.
:::

</div>

---

## Process Deep Dive [deep]

### Contact Roles — who PMO needs

For every Closed-Won GPC Solution, the Contact Roles QRG asks you to provide **Project Contact**, **Billing Contact**, and **Property Manager / On-Site Manager**. Those roles tell PMO who to work with on installation, who Business Customer Care should contact for billing, and who can help with site access.

The full role list, from the Contact Roles QRG:

- **Sales' Main Contact** — the person you reach out to about the sale or contract.
- **Influencer** — encourages or recommends GPC to the Decision Maker.
- **Decision Maker** — signs the contract. May or may not be the owner.
- **Project Contact** — PMO's point of contact for installation. **Provide for every Closed-Won Solution.**
- **Billing Contact** — PMO and Business Customer Care's billing contact. **Provide for every Closed-Won Solution.**
- **Property Manager / On-Site Manager** — for site access. **Provide for every Closed-Won Solution.**
- **General Contractor** — only when construction is needed.
- **IT / Technical / Data Contact** — coordinates with the customer's IT contractor.
- **Phone System Contact** — coordinates Voice / phone-system installs (skip for UC-only deals).
- **Agent (Channel)** — Channel Sales only.
- **Business User** — the person actually using the service.
- **Other** — last resort, when nothing else fits.

**On the Contact record itself:** set **Status = Active** and populate **Preferred Contact Method** with the matching contact info. If a Contact leaves the company, update the Status to Inactive.

### Costing Routing & Reusable — what changes routing

Every Solution Site is routed for costing based on the **Services**, **Site Type**, and **Products** selected. Start with the New-vs-Existing distinction:

- **New Services** — Services that need a new install connection, or the customer is brand new to GPC.
- **Existing Services** — Services GPC already provides at the site; you're upgrading, downgrading, or adding features.

**Two rules to memorize.** Get either wrong and your costing path may not match the work the site needs:

1. **If New *and* Existing Services are both selected on the same Solution Site, routing follows the New Services path.**
2. **If multiple Services are selected on the same Site, routing follows the path of the Service that needs the deepest review.**

**Three flags can change the routing path.** They are **independent of each other**—don't assume Strategic Build implies Reusable, or that Zone Parent gates Strategic Build:

| Flag | What it does | When it applies |
| --- | --- | --- |
| **Strategic Build** | Individual Drop Cost and Individual Equipment Cost apply systematically. | Site's GPS coordinates fall within geographic boundaries pre-loaded into Salesforce. |
| **Zone Parent Opportunity** | Solution Sites under a Zone Parent may bypass automation in routing. | Multi-site deals with a parent Opportunity tying child Solutions together. |
| **Reusable** | OSP and Network Engineering complete the costing routing on the team's behalf via the Reusable matrix. | Specific criteria are met (see QRG). **Not allowed under a Zone Parent.** |

**Reusable and Zone Parent do not pair.** Reusable is not allowed when a Solution Site is associated with a Zone Parent Opportunity. Keep the flags separate: Strategic Build is geographic, Zone Parent is structural, and Reusable depends on the matrix criteria.

<!--
**Lifecycle flow:**
1. **Leads** → Convert when the lead is continuing in the Sales Cycle. Match to the right existing Account or Contact when Salesforce finds one; create new records when it does not.
2. **Opportunity:** for Employee Business Lead Referrals, create a new Opportunity in almost every case. Use an existing Opportunity only in rare cases with your Sales Manager or Salesforce Admin.
3. **Referral programs:** after conversion, verify referral fields and keep the referrer updated on status and payment eligibility.
4. **GPC Solution / CPQ:** build the Solution, add Contract Signer early, and keep DocuSign recipients as Salesforce Contacts.
5. **Conga → Send to DocuSign:** use the selected Conga document or upload the edited document when needed. Terms & Conditions edits belong with Legal.

**Salesforce hygiene habits:**
- **Search:** use Universal Search and conversion match prompts before creating duplicate records.
- **Forecast:** keep Forecasted / Upside / Committed and Close Date current as the customer's timeline changes.
- **GPC Solution:** set Contract Signer early; all DocuSign recipients must be Contacts.

**DocuSign from Salesforce:**
- Set Contract Signer early (not in Approval Pending)
- Conga → Send to DocuSign; recipients = Contacts
- First-time DocuSign auth may be required
- Terms changes → Legal before sending

**After Closed/Won:** Contact Roles matter. Provide Project Contact, Billing Contact, and Property Manager / On-Site Manager so the teams handling installation, billing, and access have the right names.

**Avoid:** converting Employee Business Lead Referrals without a new Opportunity unless your Sales Manager or Salesforce Admin confirms the exception; duplicate contacts; stale close dates; Contract Signer blank until Approval Pending; DocuSign recipients who are not Salesforce Contacts; forecasting both GPC Solutions under a Parent Opportunity just to roll up more dollars.

**Sales Support collateral (SharePoint)** — use alongside the videos when you need the written path:

- **Approvals:** [Approval overview & training guide (PDF)](https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Approval%20Overview%20and%20Training%20Guide%20-%200725.pdf?csf=1&web=1&e=0e227N) · [Approval requirements matrix v5.5 (PDF)](https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Approval%20Requirements%20Matrix%20v5.5%20-%200725.pdf?csf=1&web=1&e=2c4K38)
- **Cycle & process:** [Salesforce hierarchy & cycle overview (PPTX)](https://gpcom.sharepoint.com/:p:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Salesforce%20Hierarchy%20%26%20Cycle%20Overview%20Demo%20template%20-%200723.pptx?d=wc0563555f48e4c22bd45fdeaf0e36c77&csf=1&web=1&e=Osb5bj) · [Which process do I use — flow chart & quick job aid (PDF)](https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Which%20Process%20Do%20I%20Use%20Flow%20Chart%20and%20Quick%20Job%20Aid%20-%200922.pdf?csf=1&web=1&e=EIZhnU) · [Converting Leads to an Opportunity — quick reference (PDF)](https://gpcom.sharepoint.com/sites/SalesforceRoadmap/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FSalesforceRoadmap%2FShared%20Documents%2FGeneral%2F2025%20Salesforce%20Training%20Guides%20%28Legacy%20BAU%20org%29%2FConverting%20Leads%20to%20an%20Opportunity%20Quick%20Reference%20Guide%20%2D%201123%2Epdf&parent=%2Fsites%2FSalesforceRoadmap%2FShared%20Documents%2FGeneral%2F2025%20Salesforce%20Training%20Guides%20%28Legacy%20BAU%20org%29)
- **Sites & changes:** [Solution site type — quick reference (PDF)](https://gpcom.sharepoint.com/:b:/s/SalesforceRoadmap/IQCK0LjJijwfTJmWzw5CEn7bAU_ivZaWfl7Hvq7Q1CF7lDw?e=7Ey9Tm) · [Move–add–change processes — Sales Team (PDF)](https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Move-Add-Change%20Processes%20-%20Sales%20Team%20-%201123.pdf?csf=1&web=1&e=vu44zS) · [Change order process — Sales Team (PDF)](https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Change%20Order%20Process%20-%20Sales%20Team%20-%200325.pdf?csf=1&web=1&e=FEPLBC)
- **Broader enablement:** [Sales Resources — GPC Sales hub](https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx)

::: accordion Lead Conversion Quick Reference
Converting a lead creates the account, contact, and opportunity in one step.


:::

::: accordion Salesforce Home & Dashboards
Use the Salesforce Home page and dashboards to keep your pipeline and follow-ups current.


:::

::: accordion DocuSign Integration Reference
Setting up Contract Signer and sending envelopes from Salesforce via Conga.

:::
-->
<!-- prettier-ignore-end -->

---

<a id="sales-operations-approvals-sales-operations-and-approvals"></a>

# Sales Operations & Approvals (`sales-operations-and-approvals`)

<!-- prettier-ignore-start -->
---
id: sales-operations-and-approvals
title: Sales Operations & Approvals
summary: GPC Solutions. Change Orders vs MACs.
sensitivity: internal
sales_trio_hide_deep_dive: true
video_sections_as_tabs: true
video_sections_tabs_aria_label: 'Pre-Approved, matrix, and change-order guides'
reference_files:
  - label: Approval Overview and Training Guide — 07/25
    sharepoint_url: 'https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Approval%20Overview%20and%20Training%20Guide%20-%200725.pdf?csf=1&web=1&e=qy6LaI'
  - label: Pre-Approved Order Process Quick Reference Guide — 07/23
    sharepoint_url: 'https://gpcom.sharepoint.com/sites/SalesforceRoadmap/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FSalesforceRoadmap%2FShared%20Documents%2FGeneral%2F2025%20Salesforce%20Training%20Guides%20%28Legacy%20BAU%20org%29%2FPre-Approved%20Order%20Process%20Quick%20Reference%20Guide%20-%200723.pdf&parent=%2Fsites%2FSalesforceRoadmap%2FShared%20Documents%2FGeneral%2F2025%20Salesforce%20Training%20Guides%20%28Legacy%20BAU%20org%29'
  - label: Approval Requirements Matrix v5.5 — 07/25
    sharepoint_url: 'https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Approval%20Requirements%20Matrix%20v5.5%20-%200725.pdf?csf=1&web=1&e=h64jqJ'
  - label: Change Order Process — Sales Team — 03/25
    sharepoint_url: 'https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Change%20Order%20Process%20-%20Sales%20Team%20-%200325.pdf?csf=1&web=1&e=STAe3w'
  - label: Costing Routing Quick Reference Guide — 11/23
    sharepoint_url: 'https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Costing%20Routing%20Quick%20Reference%20Guide%20-%201123.pdf?csf=1&web=1&e=Ta1aBx'
  - label: Move-Add-Change Processes — Sales Team — 11/23
    sharepoint_url: 'https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Move-Add-Change%20Processes%20-%20Sales%20Team%20-%201123.pdf?csf=1&web=1&e=zURGTj'
  - label: Salesforce Roadmap — shared link
    sharepoint_url: 'https://gpcom.sharepoint.com/:b:/s/SalesforceRoadmap/IQCEYPLtQTCVS7H8aEnrSTrLARzxb0p97NTo17Rj8DeB_gg?e=RyiZUS'
video_sections:
  - heading: Pre-Approved Fiber
    intro: 'The shortcut only applies when the deal is straightforward fiber. If any criterion fails, exit the shortcut and use the standard approval path.'
    body: |
      [Pre-Approved Order Process Quick Reference — 07/23](https://gpcom.sharepoint.com/sites/SalesforceRoadmap/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FSalesforceRoadmap%2FShared%20Documents%2FGeneral%2F2025%20Salesforce%20Training%20Guides%20%28Legacy%20BAU%20org%29%2FPre-Approved%20Order%20Process%20Quick%20Reference%20Guide%20-%200723.pdf&parent=%2Fsites%2FSalesforceRoadmap%2FShared%20Documents%2FGeneral%2F2025%20Salesforce%20Training%20Guides%20%28Legacy%20BAU%20org%29)

      Use the pre-approved path only when the deal stays inside a narrow lane:

      - Channel, Enterprise, or Wholesale AE. All other reps use the standard order path unless Sales Ops confirms eligibility.
      - 36-month term or longer
      - Build Fiber or On-Net Fiber sites only; no copper or coax
      - New logo, renewal, or upgrade
      - Zone Parent opportunity is Booked, In Progress, or Completed
      - No promos, free months, buyouts, or promotional credits

      Landmines:

      - MRC must be at least $150 per site.
      - Service must be within 500 feet of the fiber line, not just the vault.
      - The path cannot cross railroads, streets, grassy areas, or run through buildings.
      - Zip 68102 is excluded because of internal build/routing rules; use the standard order path if the site falls there.
      - Discounts max at 20% unless the term-based table allows more. For example, a 36-month term allows up to 27%; 27.01% no longer qualifies.
      - Excluded product lines include Colocation, SDWAN, Wireless Internet Broadband, GPC Managed Wi-Fi, On-Prem PBX, Business Security, and Dark Fiber.
      - If even one criterion fails, do not force the shortcut. Move to the Approval Requirements Matrix or the standard order path.
  - heading: Approval Requirements Matrix
    intro: 'Payback, discounts, and dollar thresholds live here.'
    body: |
      [Approval Requirements Matrix v5.5 — 07/25](https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Approval%20Requirements%20Matrix%20v5.5%20-%200725.pdf?csf=1&web=1&e=h64jqJ)

      Use the matrix when payback, discounting, churn, or net investment could push the deal out of the auto-approval lane.

      - Payback: auto-approval depends on contract term. If payback months exceed the limit for that term, manager approval is required.
      - Strategic Build: bypasses the matrix payback-month requirement.
      - Discount not tied to term: 20% or less can auto-approve; over 20% requires manager approval.
      - Discount tied to term: caps increase with longer terms. Examples: 24–35 months allows 22%, 36–47 months allows 27%, 48–59 months allows 29%, and 60+ months allows 31%.
      - Enterprise, Channel, and Wholesale use the same discount rules.

      **Payback Months — term-scaled auto-approve ladder** (above threshold → Manager review; full matrix in SharePoint):

      | Contract term (months) | Auto-approves if Payback Months ≤ |
      | --- | --- |
      | 0–23 | 1 |
      | 24–35 | 12 |
      | 36–47 | 18 |
      | 48–59 | 24 |
      | 60–71 | 30 |
      | 72–83 | 31 |
      | 84–95 | 33 |
      | 96–107 | 38 |
      | 108–119 | 40 |
      | 120+ | 44 |

      **Payback bypasses:** Strategic Build Solution Site Type bypasses Payback Months entirely. **Wholesale Bulk Process** is not evaluated against the Payback Months requirement.

      **Discount tied to term** (discountable-by-term products only; non-term-discountable products cap at **20%**):

      | Contract term (months) | Auto-approves if discount ≤ |
      | --- | --- |
      | 0–23 | 20% |
      | 24–35 | 22% |
      | 36–47 | 27% |
      | 48–59 | 29% |
      | 60+ | 31% |

      **Product-discount bypass:** Wholesale Bulk Process is not evaluated against the Product Discount requirement.

      Net investment approval bands stack. At $76k, Manager and CRO both apply; at $501k, Manager, CRO, CFO, and CEO all apply.

      | Net investment | Approval path |
      | --- | --- |
      | Under $50k | Auto-approval band |
      | $50k+ | Manager |
      | $75k+ | CRO |
      | $100k+ | CFO |
      | $500k+ | CEO |

      Other triggers:

      - Churn over 10% requires manager and CRO review.
      - Unfavorable investment always requires manager review.
      - Zone Parent opportunities evaluate Net Investment at the parent opportunity level, not one child site at a time.
      - Product line issues route to the Product Manager.
      - Dark fiber requires manager and CRO review.
  - heading: Costing Routing Paths
    intro: 'Costing routing is not the same thing as approval requirements. It determines which technical/costing team reviews the Solution Site.'
    body: |
      [Costing Routing Quick Reference Guide — 11/23](https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Costing%20Routing%20Quick%20Reference%20Guide%20-%201123.pdf?csf=1&web=1&e=Ta1aBx)

      ![Costing Routing Paths diagram showing how Solution Site Type, Services, and products route review](assets/sales-ops/costing-routing-paths.png)

      Use this as the rep translation of the QRG:

      - **Site Type starts the path.** Strategic Build, Build Fiber, All On-Net, and Off-Net do not route the same way.
      - **Services refine the path.** New service routing differs by SIA, DIA, Voice, Wave, Ethernet, SIP, UC, and other product combinations.
      - **Automation applies costs when the guide says it can.** Some paths complete systematically; others route to the corresponding department for review.
      - **New + Existing on one Solution Site follows New.** Do not assume mixed service selections split cleanly into two independent paths.
      - **Multiple services follow the deepest review.** If one selected service needs heavier review, that path drives the routing.
      - **Manual Validation skips automation.** Use it only when automated routing will not fit the site.
  - heading: Change Order vs MAC
    intro: 'How much is changing, and has billing started? That answer determines the workflow; the PDFs have every click and screenshot.'
    body: |
      [Change Order Process — Sales Team — 03/25](https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Change%20Order%20Process%20-%20Sales%20Team%20-%200325.pdf?csf=1&web=1&e=STAe3w) · [Move-Add-Change Processes — Sales Team — 11/23](https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Move-Add-Change%20Processes%20-%20Sales%20Team%20-%201123.pdf?csf=1&web=1&e=zURGTj)

      Start with one question: has billing started?

      | Situation | Use |
      | --- | --- |
      | Change part of a Closed/Won contract before billing | Change Order |
      | Change part of an active billing contract | MAC |
      | Move the customer to a new physical location | Customer Move procedure |
      | Remove all services before billing | Cancellation |
      | Remove all services after billing | Disconnect |

      Change Order path:

      1. Open the GPC Solution.
      2. Go to Conga Files → Change Order.
      3. Generate the Word document and describe the affected sites, the reason for the change, and the exact service changes.
      4. Keep the GPC Solution number on the document.
      5. Get signatures, upload the signed PDF, and email the signed PDF plus GPC Solution link to Sales Manager when required, PMO, Salesforce Administration, and CRC.

      Notify the Sales Manager early if the change is significant or has a meaningful impact on MRC, payback, or additional costs. PMO updates the project, Salesforce Administration makes the booking adjustment, and CRC handles billing changes.

      MAC path:

      Use a MAC when the service is already billing and the customer needs a move, add, or change on the live account. Most MAC scenarios require a new GPC Solution on the same opportunity; follow the MAC guide by scenario.

      Landmines:

      - Pending Billing or 7–10 Day Order can block Admin action until PMO or CRC weighs in. Flag that status in the Change Order email so nobody treats it like a routine booking adjustment.
      - Specific CRC/BCC add or change examples may go to businesscare@gpcom.com instead of being processed through Salesforce.
      - The MAC guide calls out no AE commission when those narrow CRC/BCC adds or changes are handled directly.
five_minute_summary: |
  - **Pick your lane first:** New deal → pre-approved fiber or Approval Requirements Matrix. Post-signature change → Change Order before billing, MAC after billing. Full removal → Cancellation before billing, Disconnect after billing.
  - **Approval triggers:** Discounting, product exceptions, payback, churn, CapEx / net investment, and unfavorable economics are why approvals exist. They protect margin, investment discipline, and operational promises.
  - **Approval History path:** GPC Solution → Related List Quick Links → Approval History → Approve / Reject / Reassign / Recall. Add comments so the next reviewer knows what changed.
  - Do not remove the GPC Solution number from the Change Order form, and include the Salesforce link when you email the signed package.
  - Change Orders are for post-signature changes before billing starts. MACs are for changes to active billing contracts.
  - Use Cancellation before billing when all services are coming out; use Disconnect after billing.
  - Request Manual Validation only for real exceptions. It bypasses automated routing and sends each department through review.
knowledge_checks:
  - question: "You just moved an opportunity to Closed Won, but the customer suddenly wants to upgrade their internet speed before the circuit is installed. What process do you use?"
    options:
      - "A Move-Add-Change (MAC). Any change to a signed contract requires a MAC."
      - "A Disconnect. You have to cancel the first order and write a brand new one."
      - "A Change Order. The deal is won, but billing hasn't started yet."
    correct_index: 2
    explanation: "Change Orders handle pre-billing modifications. MACs are only for live, billing circuits."

  - question: "When should you use the 'Request Manual Validation' button?"
    options:
      - "On every deal to ensure the engineering team double-checks your work."
      - "Only for genuine edge cases and exceptions that require a human to review the site build."
      - "Whenever you want to expedite the deal through the system."
    correct_index: 1
    explanation: "Manual validation bypasses automated routing and sends each department through review, so it should be reserved for genuine exceptions."

  - question: "You are completing a Change Order form after the customer changes part of a Closed/Won, not-yet-billed contract. What should stay on the form?"
    options:
      - "The VP of Sales' signature."
      - "The GPC Solution number."
      - "The customer's billing account number."
    correct_index: 1
    explanation: "The Change Order guide says not to remove the GPC Solution number because it helps Salesforce Admin, PMO, and CRC process the request behind the scenes."

  - question: "A deal has $76k in Net Investment. Which approval logic is correct?"
    options:
      - "Only CRO approval is needed because $76k falls in the CRO band."
      - "Manager and CRO both apply because Net Investment thresholds stack."
      - "No approval is needed if the customer signed a 60-month term."
    correct_index: 1
    explanation: "Net Investment thresholds are cumulative. At $76k, the deal has crossed both the $50k Manager threshold and the $75k CRO threshold."

  - question: "A 36-month opportunity has 16-month payback but a 29% term-based discount. What should you check?"
    options:
      - "Payback only. If one column passes, the whole deal auto-approves."
      - "Discount only. Payback does not matter once the customer signs 36 months."
      - "Both. A 36-month term allows payback up to 18 months but discount only up to 27% before approval is required."
    correct_index: 2
    explanation: "The matrix is not a one-column eyeball test. Payback, discount, churn, product rules, and investment thresholds each need their own check."

  - question: "Which product line always requires Manager and CRO review under the matrix?"
    options:
      - "Dark Fiber."
      - "Standard Internet Access."
      - "Managed Wi-Fi."
    correct_index: 0
    explanation: "Dark Fiber is an explicit matrix trigger for Manager and CRO review. Bring approval and technical resources in early."

  - question: "A customer wants to relocate an active billing service to a new physical address. Which lane should you use?"
    options:
      - "Customer Move procedure."
      - "Pre-approved fiber shortcut."
      - "Cancellation, because the old address is going away."
    correct_index: 0
    explanation: "Physical relocation is a Customer Move scenario. Do not force it into the narrow Change Order form or treat it as a full disconnect without checking the MAC/Customer Move guidance."

scenarios:
  - title: The Pre-Install Pivot
    situation: |
      Your customer signed a 36-month contract for a 1 Gig circuit. Two weeks before install, they acquire a new business and realize they need 2 Gigs instead. They haven't been billed yet.
    choices:
      - label: Submit a Move-Add-Change (MAC) ticket since they already signed the contract.
        feedback: 'Incorrect. MACs are only for active, billing services. You need to submit a pre-billing Change Order.'
      - label: Submit a pre-billing Change Order to modify the existing un-installed solution.
        feedback: Correct. This keeps the request in the pre-billing Change Order workflow instead of sending it through a post-billing MAC process.
  - title: The Two-Column Deal
    situation: |
      Your 36-month fiber deal has clean payback at 16 months, but the term-based discount is 29%. The rep says, "Payback is green, so approvals should auto-clear."
    choices:
      - label: Agree. Passing payback means the deal is clean.
        feedback: Incorrect. The matrix checks more than one column. A 36-month term supports payback up to 18 months, but term-based discount auto-approval stops at 27%.
      - label: Check each trigger separately and route approval for the discount exception.
        feedback: Correct. Payback can pass while discounting still needs review. Do not let one green column hide another exception.
  - title: The $501k Build
    situation: |
      A multi-site build rolls up to $501k Net Investment at the parent opportunity. The AE asks if CEO approval replaces the lower approvals.
    choices:
      - label: Route only to the CEO because the deal crossed the top threshold.
        feedback: Incorrect. Net Investment thresholds stack; the lower approval layers still apply.
      - label: Route Manager, CRO, CFO, and CEO because cumulative approval thresholds all apply.
        feedback: Correct. At $501k, the deal needs the full approval chain, and parent-level aggregation matters.
discovery_questions:
  - 'When a GPC Solution is in approval, how do you approve, reject, reassign, or recall—and who needs to act next?'
  - 'After Closed Won but before billing starts, what kind of change uses a Change Order versus a MAC?'
  - What should stay on the Change Order form, and what link belongs in the signed-package email?
  - When would you use Request Manual Validation—and when should you avoid it?
  - How do you handle a full disconnect versus a speed or service change on an already billing circuit?
---

## Overview

This module has two jobs. **Approval triggers** decide whether the business needs extra review because of discounting, product rules, payback, churn, CapEx / net investment, or unfavorable economics. **Process-flow triggers** decide what workflow to use when something changes, especially whether billing has started.

- GPC Solution: the core object where approvals, pricing, and technical scoping live.
- Approval Requirements Matrix: the business review lens for discounting, product, payback, churn, and investment thresholds.
- Costing Routing QRG: the routing lens for which technical/costing teams review a Solution Site.
- Change Order: a pre-billing modification, such as changing port speed before install.
- MAC: a Move-Add-Change on a live billing service.
- Manual Validation: an exception path that breaks automation. Use it sparingly.

---

## Key Guidelines

1. **Start with the lane:** New deal, post-signature change, live-service change, or full removal. The workflow changes based on that answer.

2. **Use Approval History on the GPC Solution:** Related List Quick Links → Approval History → Approve / Reject / Reassign / Recall. Add comments so the next person knows what changed.

3. **Pre-approved fiber is narrow:** Channel, Enterprise, and Wholesale AEs can use it only when every criterion passes. If one criterion fails, use the standard approval path.

4. **Matrix triggers stack:** Payback, discounts, churn, product rules, unfavorable investment, and Net Investment thresholds all stand on their own. A green payback column does not erase a discount or CapEx exception.

5. **Net Investment is cumulative:** $50k+ Manager, $75k+ CRO, $100k+ CFO, and $500k+ CEO approvals stack. Zone Parent opportunities should be evaluated at the parent level.

6. **Change Order vs MAC:** Change Order is post-signature before billing. MAC is for active billing services. Full removal before billing is Cancellation; full removal after billing is Disconnect.

7. **Manual Validation is an exception path:** It bypasses automated routing and sends departments through review. Use it when automation truly does not fit, not as a safety click.

---

## Common Landmines

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

::: flip ["I'll just click Manual Validation to make sure engineering looks at it."]
The slow lane: manual validation bypasses automated routing and sends each department through review. Use it only when the site truly needs manual review.
:::

::: flip ["I uploaded the signed form, they'll figure it out."]
The orphaned document: do not remove the GPC Solution number from the Change Order form, and include the Salesforce link when you email the signed package. That is how Salesforce Admin, PMO, and CRC stay tied to the right request.
:::

::: flip ["The customer signed, so I need to submit a MAC to change the order."]
The MAC mistake: MACs are for active accounts that have already started billing. If the service is not billing yet, use a Change Order so the request lands with the right team.
:::

:::: flip ["One matrix column is green, so the whole deal is approved."]
The one-column trap: payback, discounts, churn, product rules, and Net Investment each need their own check. One passing column does not erase another approval trigger.
::::

:::: flip ["Dark Fiber is just another fiber product, so the normal shortcut should work."]
The Dark Fiber exception: Dark Fiber requires Manager and CRO review and early Sales Engineering involvement. Do not push it through the pre-approved fiber shortcut.
::::

:::: flip ["The site is moving, so I'll just cancel the old service and start over."]
The move mismatch: a physical relocation belongs in the Customer Move procedure. Use Cancellation or Disconnect only when all services are actually coming out.
::::

</div>

---

## Process Deep Dive [deep]

Use the reference files as job aids once you know which lane you are in:

- Straightforward new fiber inside the pre-approved rules: start with the Pre-Approved Order Process guide.
- Payback, discount, churn, or net investment questions: open the Approval Requirements Matrix.
- Customer signed but billing has not started: use Change Order.
- Service is already billing: use MAC, Cancellation, or Disconnect based on what is changing.
- Site routing needs an exception review: consider Manual Validation, but expect automated routing to be bypassed.
<!-- prettier-ignore-end -->

---

<a id="portfolio-business-capabilities-portfolio-and-business-capabilities"></a>

# Portfolio & Business Capabilities (`portfolio-and-business-capabilities`)

<!-- prettier-ignore-start -->
---
id: portfolio-and-business-capabilities
title: Portfolio & Business Capabilities
summary: The GPC Stack. Midwest fiber. Selling outcomes.
sensitivity: public
reference_files:
  - label: Sales Resources (collateral hub)
    sharepoint_url: 'https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx'
video_sections:
  - heading: Business Performance with Fiber Connectivity
    intro: Use this capabilities presentation to get off price-per-meg and talk about what the network carries.
    items:
      - title: Accelerating Business Performance with Fiber Connectivity
        src: assets/capabilities/accelerating-business-performance-with-fiber-connectivity.mp4
        poster: assets/capabilities/accelerating-business-performance-with-fiber-connectivity.png
discovery_questions:
  - 'If your primary internet connection drops at 2:00 PM on a Tuesday, what exactly happens to your operations and revenue?'
  - 'Which of your daily applications are hosted on-premise, and which are in the cloud (AWS, Azure, O365)?'
  - 'Who is currently managing your edge security, and how long does it take them to respond to a ticket?'
  - 'As your business expands over the next two years, what is your biggest technology bottleneck?'
  - 'How many sites are in scope today, and who signs off when network, security, or voice designs change?'
five_minute_summary: |
  - **Lead with business impact:** Do not stop at speed and price. Find out what the connection supports and what downtime would disrupt.
  - **What we offer:** Fiber Internet, Managed Ethernet, SD-WAN, Wireless Internet Backup, Cloud Connect, Managed Firewall, video, Managed Wi-Fi, Unified Communications, and DDoS Protection.
  - **The portfolio story:** GPC helps customers build secure, flexible infrastructure that can scale as their business changes.
  - **The anchors:** Resilient Midwest IP reach, direct connections with Tier-1 providers and major Internet Exchanges, local support, and 24/7 network monitoring.
  - **Discovery drives design:** You cannot recommend the right mix until you know their critical apps, site count, cloud reliance, and uptime tolerance.
knowledge_checks:
  - question: "A prospect asks for your best price on a 500M circuit. What is your immediate next move?"
    options:
      - "Check the pricing tool and send a quick number before the prospect loses interest."
      - "Pivot to discovery: what runs over that circuit, and what breaks if it goes down?"
      - "Decline the price question and say GPC only competes on long-term value."
    correct_index: 1
    explanation: "A price-only answer keeps the deal in commodity territory. First learn what runs over the circuit and what downtime would cost."

  - question: "How should you position the GPC product portfolio to a new prospect?"
    options:
      - "As an à la carte menu where they can pick and choose the cheapest options."
      - "Lead with our most expensive SD-WAN solution to anchor the price high."
      - "As a layered system: access first, then resilience, security, cloud, Wi-Fi, UC, and video."
    correct_index: 2
    explanation: "Sell it as a stack: fiber first, then backup, security, cloud, Wi-Fi, UC, and video. Each layer only matters if access is solid."

  - question: "What are the core differentiators you should anchor your 'Why GPC' story on?"
    options:
      - "The fact that we are cheaper than the national cable providers."
      - "Resilient Midwest connectivity, local support, and 24/7 network monitoring."
      - "Our ability to offer month-to-month contracts with no commitment."
    correct_index: 1
    explanation: "Anchor on the strengths supported by the capability story: reliability, local support, scalable services, and 24/7 monitoring."

scenarios:
  - title: The Commodity Trap
    situation: |
      An IT Director tells you, "Look, fiber is fiber. Whoever gives me the cheapest 1 Gig dedicated circuit gets the business."
    choices:
      - label: 'Agree, and promise to go to your manager to get special pricing approved to win the logo.'
        feedback: 'That keeps the conversation centered on price alone. Before discounting, uncover what the circuit supports and what an outage would disrupt.'
      - label: 'Challenge the premise and re-anchor the discussion on uptime, support, and the cost of downtime.'
        feedback: Correct. Break them out of the commodity mindset and re-anchor on the cost of risk.
roleplay:
  persona: Skeptical CFO at a mid-size Midwest manufacturer
  scenario: Just sat through two carrier pitches that sounded identical. Asks point-blank why GPC is different before walking out of the room.
  goal: 'Deliver a one-sentence ''why GPC'' answer grounded in business impact, then walk through the GPC stack and offer the capability deck as a concrete next step.'
---

## At a glance

- **The Goal:** Stop letting the buyer treat you like a circuit vendor. Talk about what runs on the network and what downtime costs.
- **The Foundation:** GPC's resilient Midwest IP network, local support, and 24/7 network monitoring.
- **The Portfolio:** Fiber Internet, Managed Ethernet, SD-WAN, Wireless Internet Backup, Cloud Connect, Managed Firewall, video, Managed Wi-Fi, Unified Communications, and DDoS Protection.
- **The Value Add:** GPC brings more than a connection: a portfolio that can grow with the account, regional operating experience, and local teams who answer when something breaks.
- **The Handoff:** When discovery shows multi-site complexity, cloud-critical applications, or strict security needs, slow down and design the right mix instead of quoting a single product.

---

## Pitch

::: elevator [Elevator Pitch]
We are not just selling a pipe. Fiber gets you in the door; backup, firewall, cloud paths, Wi-Fi, voice, video, and DDoS protection are how you grow the account. The goal is simple: keep sites, apps, teams, and customers connected as the business grows.
:::

---

## Discovery Run

<div class="mt-4 rounded-2xl border border-emerald-200/80 overflow-hidden bg-slate-50 shadow-sm">
  <iframe
    src="games/portfolio-level-1/index.html?embed=1&module=portfolio-and-business-capabilities"
    title="Discovery Run — Level 1"
    loading="lazy"
    sandbox="allow-scripts allow-same-origin"
    style="width: 100%; border: 0; display: block; aspect-ratio: 16 / 10.5; height: auto; max-height: min(88vh, 44rem); background: #f1f5f9;"
  ></iframe>
</div>

---

## Objection Handling

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

::: flip ["Your competitor is offering the same speed for 20% less."]
Speed is only one part of the decision. Bring the buyer back to reliability, support, and what the connection carries: critical apps, cloud access, customers, and revenue. GPC's story is resilient Midwest connectivity backed by local support and 24/7 monitoring.
:::

::: flip ["We prefer to buy our network, security, and voice from different vendors."]
That can work, but it can also make growth and troubleshooting harder. GPC can bring connectivity, security, cloud access, Wi-Fi, UC, and video into one stack, so the customer knows who owns the fix.
:::

::: flip ["We are too small for an enterprise stack."]
Downtime hurts a small business the same way it hurts an enterprise—sometimes worse, because there is no bench. You do not need the whole stack on day one: start with dependable fiber and 5G backup, then layer security as you grow.
:::

</div>

---

## Portfolio quick reference — capabilities map

**Ten product lines from the capability deck:** Fiber Internet · Managed Ethernet · SD-WAN · Wireless Internet Backup · Cloud Connect · Managed Firewall · Video · Managed Wi‑Fi · Unified Communications · DDoS Protection. Connectivity comes first; the rest of the portfolio helps protect, connect, and improve the customer's daily operations.

Use this as the rep's mental map:

- **Access and transport:** Fiber Internet and Managed Ethernet connect the business across locations.
- **Resilience:** Wireless Internet Backup helps keep the business running with automatic failover, professional setup, and 24/7 support.
- **Cloud and site experience:** Cloud Connect gives customers a more predictable path to cloud providers; Managed Wi-Fi fixes dead zones and guest Wi-Fi headaches inside the building.
- **Security and WAN:** Managed Firewall, DDoS Protection, and SD-WAN help protect the network and improve performance.
- **Workforce and customer communications:** Unified Communications and video services support how employees, customers, and guests stay connected.

**Light positioning lens:** when a buyer pushes *speed-for-price*, pull the discussion back to total business fit:

- What applications, cloud services, payment systems, or customer experiences depend on this connection?
- Which sites need secure, scalable connectivity across locations?
- What happens operationally if the primary connection fails?
- Where would local support and 24/7 monitoring reduce risk for the customer?

**Do not race on sticker price alone.** Use the capability deck to show GPC as the local provider behind the circuit, the backup, the security layer, and the services riding above the network.
<!-- prettier-ignore-end -->

---

<a id="connectivity-access-product-connectivity"></a>

# Connectivity & Access (`product-connectivity`)

<!-- prettier-ignore-start -->
---
id: product-connectivity
title: Connectivity & Access
summary: Internet access. Transport. Layer 2 vs Layer 3. Dark Fiber.
sensitivity: internal
reference_files:
  - label: Product Collateral (connectivity & access)
    sharepoint_url: 'https://gpcom.sharepoint.com/sites/gpcSales/Product%20Collateral/Forms/AllItems.aspx?viewid=855b9d9a%2D724a%2D4ba1%2D876e%2D2325aaaf29e5'
discovery_questions:
  - 'Are your employees primarily downloading data, or are they constantly uploading large files to cloud servers?'
  - 'How many physical locations do you have, and do they need to share private data directly with each other?'
  - What happens to your customer experience when latency disrupts voice and video calls?
  - 'What are your most critical applications day to day, and how much upstream bandwidth do they require?'
  - 'How are sites connected today—shared broadband, MPLS, Ethernet, or SD-WAN—and when do those contracts renew?'
  - 'Is the customer asking for a managed service from GPC, or do they want to light and operate their own fiber electronics?'
five_minute_summary: |
  - **SIA vs DIA:** Standard Internet (SIA) is the cost-sensitive shared option, with symmetrical and asymmetrical speeds up to 2 Gbps. Dedicated Internet (DIA) is the better fit when the customer needs dedicated bandwidth, symmetrical speeds up to 100 Gbps, NOC support, and stronger service commitments.
  - **Transport vs. Internet:** Transport moves customer traffic privately between locations or networks. Internet access connects the customer to the public IP world.
  - **Layer 2 vs. Layer 3:** Layer 2 Ethernet feels like extending the customer’s LAN between sites. Layer 3/IP routes traffic between networks and is where internet service lives.
  - **Optical capacity:** Fiber optic transport and wavelength services are high-capacity optical paths for data centers, hubs, and heavy replication workloads—not the default branch-office answer.
  - **Dark Fiber:** Unlit fiber. The customer brings the electronics and lights the service; GPC provides the physical fiber path and maintenance model.
knowledge_checks:
  - question: "A regional accounting firm needs to reliably upload massive tax files to the cloud. Which access product do you pitch?"
    options:
      - "Standard Internet Access (SIA). It's cheaper and downstream speed is all that matters."
      - "Managed Ethernet. They should just build a private network to the cloud."
      - "Dedicated Internet Access (DIA). They need dedicated, symmetrical bandwidth for critical uploads."
    correct_index: 2
    explanation: "Heavy upload requirements and critical cloud apps point to DIA because it provides dedicated bandwidth, symmetrical speeds, and stronger service commitments."

  - question: "When is Managed Ethernet the correct solution?"
    options:
      - "When they want the fastest possible public internet connection."
      - "When a customer needs private, secure, site-to-site connectivity without hitting the public internet."
      - "When they have remote workers who need to VPN into the office."
    correct_index: 1
    explanation: "Ethernet is for private Layer 2 transport between physical locations."

  - question: "A customer wants two buildings to behave like they are on the same private network without sending traffic over the public internet. What product family are you likely discussing?"
    options:
      - "Layer 2 Ethernet transport."
      - "Standard Internet Access."
      - "Public Wi-Fi with a VPN client."
    correct_index: 0
    explanation: "Layer 2 Ethernet transport is for private site-to-site connectivity. Internet access is Layer 3/IP service to the public internet, even when it is delivered over fiber."

  - question: "A technical buyer asks for Dark Fiber. What are they really asking for?"
    options:
      - "A public internet service with extra DDoS protection."
      - "An unlit fiber path they will light with their own electronics."
      - "A managed Layer 3 routing service between all locations."
    correct_index: 1
    explanation: "Dark Fiber is not a lit service. The customer is responsible for the electronics and for lighting the service; GPC's role is the physical fiber path and the applicable maintenance arrangement."

  - question: "Which customer is the best fit for Wavelength services?"
    options:
      - "A small office that needs basic web browsing and email."
      - "A data center or enterprise location that needs dedicated, low-jitter Layer 1 transport at 10G, 100G, or 400G."
      - "A remote worker who needs a VPN client."
    correct_index: 1
    explanation: "Wavelength is optical point-to-point Layer 1 transport for data-intensive locations such as data centers, enterprise sites, and storage environments."

scenarios:
  - title: The SIA Squeeze
    situation: |
      A medium-sized logistics company is complaining about their current cable provider dropping VoIP calls. They want a quote for your cheapest internet option (SIA).
    choices:
      - label: Quote the SIA to win the business easily.
        feedback: 'You have not solved the stated problem. Public internet traffic can see variable packet loss, delay, and jitter, and that can disrupt real-time voice and video. Qualify the need for DIA or private transport before leading with the cheapest option.'
      - label: 'Explain the performance risk, then quote DIA if they need dedicated bandwidth, low latency, symmetrical speeds, and NOC-backed service commitments.'
        feedback: 'Correct. Solve the actual technical problem, not just the lowest-price request.'
roleplay:
  persona: Skeptical IT Director
  scenario: Complaining about VPN jitter and dropped calls over a competitor's shared broadband at three branch locations. Wants the cheapest fix to replace the competitor, and you need to determine whether to quote GPC's Standard Internet (SIA) or step them up to Dedicated Internet (DIA) for dedicated bandwidth and stronger service commitments.
  goal: 'Pivot from price to reliability—qualify the symmetry, latency, and site-to-site requirements for VoIP and cloud apps, then position DIA or Managed Ethernet when those requirements call for more than shared internet.'
---

## At a glance

- **SIA (Standard Internet):** Shared internet access with symmetrical and asymmetrical options up to 2 Gbps. Good when budget matters and the workload can tolerate best-effort performance objectives.
- **DIA (Dedicated Internet):** Dedicated, symmetrical internet up to 100 Gbps with NOC support, service commitments, static IPs, and available proactive DDoS monitoring and mitigation.
- **Ethernet:** Private Layer 2 transport for connecting customer locations without sending that traffic across the public internet.
- **Wavelength:** Dedicated Layer 1 optical transport from 10G to 400G for data centers, enterprise locations, and storage-heavy networks.
- **Dark Fiber:** Unlit fiber for sophisticated buyers who want to own the electronics and light the path themselves.
- **Pricing:** Keep your pricing internal. Always quote through the standard tools, never throw out "napkin math."

---

## Pitch

::: elevator [Elevator Pitch]
Before we quote access, let's pin down what breaks when upload chokes or a circuit drops. GPC can support cost-sensitive internet access, dedicated symmetrical internet for critical applications, private Ethernet between locations, and high-capacity optical transport for the largest data movement needs.
:::

---

## Discovery Galaxy

<div class="mt-4 rounded-2xl border border-emerald-200/80 overflow-hidden bg-slate-50 shadow-sm">
  <iframe
    src="games/galactica-1/index.html?embed=1&module=product-connectivity"
    title="Discovery Galaxy"
    loading="lazy"
    sandbox="allow-scripts allow-same-origin"
    style="width: 100%; border: 0; display: block; aspect-ratio: 16 / 10.5; height: auto; max-height: min(88vh, 44rem); background: #f1f5f9;"
  ></iframe>
</div>

---

## Objection Handling

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

::: flip ["DIA is too expensive, I just want the SIA."]
I understand the budget concern. Before we quote the lowest-cost option, let's look at what is causing the pain. If voice, video, cloud backups, or other critical apps need consistent upload, low latency, and dedicated bandwidth, DIA is the right SKU—not shared best-effort.
:::

::: flip ["I just need internet between my two offices."]
Clarify the word "internet." If they mean public web access at both locations, talk SIA or DIA. If they mean private traffic between sites, you are in a transport conversation.
:::

::: flip ["We use VPNs over our internet to connect our offices. Why buy Ethernet?"]
VPNs over public internet can still run into variable packet loss, delay, and jitter. Managed Ethernet gives those sites a private Layer 2 path, which is a better fit when the customer wants predictable site-to-site performance without sending branch traffic across the public internet.
:::

::: flip ["We want Dark Fiber, not a managed service."]
That is a different conversation. Dark Fiber means the customer lights the path with their own electronics, so qualify whether they have the technical team, route requirements, strand count, and maintenance expectations to own that responsibility.
:::

</div>

---

## Technical Deep Dive [deep]

**SIA vs DIA Qualifiers:**
- If voice, video, cloud backups, or business-critical SaaS depends on consistent upload and low latency, lead with **DIA**.
- Keep **SIA** in the conversation when cost is the top driver and the customer can live with shared access and best-effort performance objectives.

**SIA vs. DIA — side-by-side** (from the DIA vs SIA comparison sheet—SE/quoting for the customer-facing PDF):

| Feature | SIA — Standard Internet Access | DIA — Dedicated Internet Access |
| --- | --- | --- |
| Delivery methods | Fiber, copper, **and** coax | **Fiber only** |
| Bandwidth model | Shared | Dedicated |
| Speeds | Asymmetrical **and** symmetrical, up to 2 Gbps | **Symmetrical**, up to 100 Gbps |
| Static IPs | 1 included | **3 included** |
| DDoS protection | GPC network-level | **Customer-specific proactive monitoring + mitigation** |
| Latency | Standard latency, best-effort objectives | **Premium low-latency performance objectives** |
| Support tier | 24×7×365 Tier 1 Internet Service Center (ISC) | **24×7×365 NOC** for enhanced support and monitoring |
| Access diversity | Standard | Standard, with multiple diverse access options available |

**One sentence that captures the choice:** SIA is GPC's high-quality shared Internet—DIA is GPC's enterprise-grade dedicated Internet.

**Core definitions — the words reps need to hear clearly**

- **Transport:** A private connection that moves customer traffic between places—site to site, site to data center, or site to carrier/cloud handoff. The buyer is usually asking for control, privacy, performance, or predictable paths.
- **Fiber optic / optical:** The physical medium and optical service layer that carries light over glass. In sales language, use "fiber" for access conversations and "optical transport" or "wavelength" when the buyer needs very high-capacity point-to-point paths.
- **Dark Fiber:** Unlit fiber. GPC provides the physical fiber path; the customer supplies the optical electronics, lights the service, and owns the technical design above the strand. It is for sophisticated network teams, carriers, data centers, and large enterprises that want control over capacity and equipment—not a normal managed internet replacement.
- **Layer 2 Ethernet:** A private Ethernet service that extends the customer’s network between locations. The customer usually manages the IP addressing/routing above it, while GPC provides the Ethernet path.
- **Layer 3 / IP:** Routed networking. IP decides how packets move between networks; internet access is a Layer 3/IP service because traffic routes into the public internet.
- **Internet:** Public IP connectivity to the broader internet. SIA and DIA are internet access products, not private site-to-site transport.

**Ethernet service types — how the acronyms differ**

| Term | Plain-English meaning | Customer use case |
| --- | --- | --- |
| **E-Line** | Layer 2 point-to-point or point-to-multipoint Ethernet between customer locations | Connect HQ to a data center or major branch; support hub-and-spoke designs |
| **E-LAN** | Layer 2 multipoint-to-multipoint Ethernet with full mesh connectivity | Several sites need private any-to-any communication |
| **EPL** | Ethernet Private Line; point-to-point, port-based service where customer traffic is delivered with minimal modification | High-control, high-performance private connection |
| **EVPL** | Ethernet Virtual Private Line; point-to-point or point-to-multipoint VLAN-based service where GPC manages the VLANs | Multi-site or hub-and-spoke connectivity with VLAN-based separation |

**Dark Fiber sales guardrails:**

- Dark Fiber is **not a lit service**; the customer must add the electronics and light it themselves.
- There are two commercial paths: **Dark Fiber Lease** (5+ years, MRC, includes GPC maintaining the fiber) and **Dark Fiber IRU** (10+ years, NRC, with GPC fiber maintenance as a separate product).
- Collaborate with a Sales Engineer early. Sales submits a pricing request because Dark Fiber products are not pre-priced in the system.
- Get details before you promise anything: A location, Z location, route, fiber mileage, number of strands, customer requirements, and any route-specific requests.

**The rep translation:** if the customer is asking, "How do I get to the internet?" think SIA/DIA. If they are asking, "How do my locations talk privately?" think Ethernet/transport. If they are asking, "Can we light our own fiber?" think Dark Fiber plus SE validation. If they are asking, "How do I move huge volumes between hubs?" think optical/wavelength.

**Wavelength vs Ethernet:**
- Ethernet is the flexible Layer 2 answer for private customer-location connectivity, including point-to-point, point-to-multipoint, and multipoint designs.
- Wavelength is dedicated, non-shared Layer 1 optical transport from 10 Gbps to 400 Gbps for data-intensive locations such as data centers, enterprise sites, and storage environments. Do not pitch it as a normal branch internet replacement.
<!-- prettier-ignore-end -->

---

<a id="security-sd-wan-product-security-and-sd-wan"></a>

# Security & SD-WAN (`product-security-and-sd-wan`)

<!-- prettier-ignore-start -->
---
id: "product-security-and-sd-wan"
title: "Security & SD-WAN"
summary: "Threat protection. Resilient WAN. Managed operations."
sensitivity: "public"
reference_files:
  - label: "Product Collateral (security & SD-WAN)"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/gpcSales/Product%20Collateral/Forms/AllItems.aspx?viewid=855b9d9a%2D724a%2D4ba1%2D876e%2D2325aaaf29e5"
video_sections_as_tabs: true
video_sections_tabs_heading: "GPC Product Specifics"
video_sections_tabs_aria_label: "GPC security, DDoS, and SD-WAN product specifics"
video_sections_after_section: "At a glance"
video_sections:
  - heading: "Managed Network Security"
    intro: "The managed-security lane for customers who need monitoring, policy help, and security expertise around the network."
    body: |
      **GPC flavor:** Managed Network Security (MNS) is the broader service lane for customers who need managed firewall, firewall management, SIEM, assessments, vulnerability scanning, or email security support.

      - **Portfolio umbrella:** Use this lane when the customer needs an operating model, not only a device.
      - **Firewall Management:** GPC can manage and monitor customer-owned firewalls across leading vendors, with 24/7 SOC monitoring, alerting, management, and troubleshooting.
      - **Operational discipline:** The value is staff relief: fewer blind spots, cleaner policies, regular updates, and a clearer path when threats or compliance needs change.
      - **SOC-backed monitoring:** The collateral points to SOC 2-compliant operations and 24x7x365 monitoring for network and security services.

      **Value:** GPC extends the customer's IT/security team with monitoring, management, and practical security services around the network.
  - heading: "Managed Firewall"
    intro: "The GPC-provided Fortinet appliance path within the MNS family."
    body: |
      **GPC flavor:** Managed Firewall is the turnkey path where GPC provisions and manages the hardware at the edge.

      - **GPC-Provided Hardware:** Built around the FortiGate Next-Generation Firewall, standardized for high performance and SOC integration.
      - **The "One Provider" Benefit:** Consolidation of the circuit, the equipment, and the SOC support onto a single bill with no finger-pointing.
      - **Edge Control:** Best for customers who lack the IT staff or CapEx to own and support high-performance firewall hardware in-house.
      - **Proactive Management:** Includes professional configuration, software/firmware updates, patch management, and FortiGuard-backed threat protection.
  - heading: "DDoS Protection"
    intro: "Use this when availability is the risk: websites, public apps, customer portals, voice, or critical circuits."
    body: |
      - **Proactive (Always-On):** 24x7 automated monitoring, notifications, and mitigation for mission-critical services where downtime at any hour creates revenue or reputation risk.
      - **On-demand (Business Hours):** 24x7 monitoring and notifications, with mitigation available weekdays from 8 am to 5 pm and requested by the customer. Do not let the customer hear this as automated 24x7 mitigation.
      - **Portal and protection:** Current collateral calls out customer traffic analytics, bandwidth-based thresholds, 10 Mbps to 100 Gbps coverage, BGP FlowSpec, and TMS protection on the proactive service.
  - heading: "SD-WAN"
    intro: "Use this when the customer needs WAN control, app prioritization, visibility, and managed operations across locations."
    body: |
      **Visibility:** Use the Orchestrator for centralized configuration, monitoring, troubleshooting, and real-time application visibility. **Warning:** SD-WAN includes secure transport and edge capabilities, but advanced security features such as NGFW/IDS/IPS are optional and must be scoped explicitly.
discovery_questions:
  - "How many locations do you have, and which ones are on GPC fiber vs. other broadband or MPLS?"
  - "How are those locations connected today—VPN over shared Internet, MPLS, Ethernet? When does that contract expire?"
  - "What are your most important applications? Do you use SaaS like O365 or Salesforce, and are they hosted on-prem or in the cloud?"
  - "Have you experienced a security incident, ransomware event, or DDoS attack? Who manages your firewalls today?"
  - "Do you need 24/7 protection, or can your business afford to be offline if a DDoS attack hits on a weekend?"
  - "If a security alert triggers at 2:00 AM on a Saturday, who is responsible for triaging it, and do they have the tools to stop it immediately?"
five_minute_summary: |
  - **Security is risk reduction:** Customers buy managed security because outages, ransomware, bad firewall policy, and unmanaged edge devices create business risk—not because they love appliances.
  - **Firewall vs. security program:** A firewall controls traffic at the edge. A broader managed security program adds monitoring, policy management, visibility, assessment, and response discipline.
  - **DDoS is availability protection:** Distributed attacks try to overwhelm a public-facing service or circuit. The sales question is not "Do you have DDoS?"—it is "What happens if customers cannot reach you?"
  - **SD-WAN is control over the WAN:** It steers traffic across multiple access paths, prioritizes critical apps, improves visibility, and can reduce reliance on legacy private networks.

knowledge_checks:
  - question: "How does DDoS Protection proactive differ from on-demand for mitigation windows?"
    options:
      - "Both tiers provide the same 24×7 mitigation window, so price is the main difference."
      - "On-demand is the faster path when the customer wants automated overnight response."
      - "Proactive covers 24×7 mitigation; on-demand is limited to weekday business hours."
    correct_index: 2
    explanation: "On-demand is not 24×7 mitigation on that SKU. If the customer has overnight or weekend exposure, qualify the risk before they buy the cheaper tier."

  - question: "What customer problem usually makes SD-WAN worth discussing?"
    options:
      - "They have multiple sites, mixed access paths, or critical apps that need better routing and visibility."
      - "They need a faster public website but do not care how branch traffic is routed."
      - "They want a cheaper firewall but have no branch connectivity or application performance issue."
    correct_index: 0
    explanation: "SD-WAN is valuable when the customer needs control over how traffic moves across sites and access paths. The business story is uptime, app performance, and operational visibility."

  - question: "Why should reps be careful when a customer asks whether SD-WAN includes advanced security?"
    options:
      - "Every advanced security line in collateral is included in the base SKU."
      - "SD-WAN and security are related, but not every firewall or threat-prevention control is automatically included."
      - "Security features are irrelevant once the customer has multiple sites."
    correct_index: 1
    explanation: "SD-WAN and security overlap, but they are not the same thing. Confirm what security capabilities are included before the customer hears 'SD-WAN solves all firewall needs.'"

  - question: "What does a broader managed security conversation add beyond a firewall?"
    options:
      - "Monitoring, policy management, visibility, assessments, and response discipline around the customer's risk."
      - "A lower-cost firewall label with no change in monitoring or operational responsibility."
      - "A WAN replacement that removes the need to discuss security policy or incidents."
    correct_index: 0
    explanation: "A firewall is a control point; managed security is the operating model around risk. The more the customer lacks time, tools, or staff, the more that operating model matters."

  - question: "What is the sales value of a managed firewall?"
    options:
      - "It guarantees compliance certification by itself without any customer process change."
      - "It gives the customer a managed edge control with monitoring, policy support, and fewer break-fix burdens."
      - "It removes the need to ask about applications, users, locations, and risk."
    correct_index: 1
    explanation: "The value is not just the box. It is having a managed control point, visibility, and operational support so the customer is not alone when policy or threats change."

  - question: "When a customer wants always-on DDoS mitigation but selected on-demand for price, what should you do?"
    options:
      - "Tell them on-demand matches proactive timing so the lower price feels easier."
      - "Document the lower tier only after signature so the deal keeps moving."
      - "Explain the mitigation windows and align the SKU to the customer's uptime risk."
    correct_index: 2
    explanation: "Match the DDoS SKU to the customer's real uptime need. A cheaper tier can become expensive fast if an attack lands outside the covered window."

  - question: "For SD-WAN discovery, what should you clarify about security?"
    options:
      - "Assume every firewall and threat-prevention capability is included by default."
      - "Ignore security because SD-WAN is only about saving money on access."
      - "Clarify which security controls are included, optional, or better handled as a separate managed security scope."
    correct_index: 2
    explanation: "SD-WAN improves traffic steering and visibility, but security still needs scope. Clarifying controls keeps the design honest and prevents accidental overpromises."

  - question: "When should you bring in technical resources before the customer hears a firm design?"
    options:
      - "When the scope includes complex routing, high availability, security add-ons, compliance requirements, or high-scale needs."
      - "Never; sales owns firewall, routing, and compliance design without technical review."
      - "Only after signature, when the customer has already accepted the order."
    correct_index: 0
    explanation: "The collateral points to pre-sales technical consulting and managed design work for SD-WAN and security. Bring technical resources in before scope turns into a customer promise."

  - question: "What is sound positioning for the SD-WAN platform vs competitors?"
    options:
      - "Cite unverified spec-for-spec claims as facts."
      - "Promise feature parity with any competitor SD-WAN without review."
      - "Use GPC's managed operations, WAN-edge fit, and support story, then validate specific comparisons."
    correct_index: 2
    explanation: "The battle card positions GPC around a strong SD-WAN platform, nationwide reach, and personal local support. Keep competitor comparisons specific and verified."

  - question: "How should pricing examples and fee schedules be used?"
    options:
      - "Post them publicly on the customer website."
      - "Discard them; pricing is always verbal only."
      - "Use them as quoting inputs, then confirm current pricing through the approved quote path."
    correct_index: 2
    explanation: "Pricing examples and fee schedules are quoting inputs, not live customer promises. Confirm current pricing through the approved quote process."

scenarios:
  - title: "Customer wants '24/7 DDoS' but budgets for on-demand"
    situation: |
      Wants always-on mitigation; picked **on-demand** for price—set expectations pre-signature.
    choices:
      - label: "Tell them on-demand is the same as proactive for mitigation timing."
        feedback: "That creates a 24×7 expectation the SKU does not support. Clarify the mitigation windows and document what they actually bought."

      - label: "Explain proactive vs on-demand windows; align SKU to uptime needs."
        feedback: "Correct. Tie the SKU to the real risk window and make sure the customer understands what happens outside weekday business hours."

  - title: "RFP assumes full next-gen firewall in base SD-WAN"
    situation: |
      Procurement pasted IDS/IPS into RFP as included in base SD-WAN at one price.
    choices:
      - label: "Bid base SD-WAN and assume all security lines are included."
        feedback: "That turns an RFP assumption into your promise. Map each security line to base scope or add-on scope with technical and quoting support."

      - label: "Review optional NGFW/IDS lines, map RFP lines to quoted SKUs, and document what is in base vs add-on."
        feedback: "Correct. The win is a clean scope, not pretending every security feature is bundled into base SD-WAN."

roleplay:
  persona: "Skeptical IT Director at a regional bank with 12 branches"
  scenario: "Currently running MPLS between branches. Complaining about VPN jitter on shared broadband at smaller locations. Thinks SD-WAN is just 'expensive router software' and insists on managing their own Cisco gear."
  goal: "Qualify multi-site footprint and GPC fiber anchors, then pivot from DIY network management to GPC's fully managed SD-WAN—frame as operational savings, 24/7 NOC support, and cloud breakout improvement rather than a technology debate."
---

## At a glance

- **Managed security:** **Managed Network Security (MNS)** is the broader security-services lane: Managed Firewall, firewall management for customer-owned gear, SIEM, assessments, vulnerability scanning, and email security. **Managed Firewall** is the GPC-provided Fortinet path at the edge. Match the scope to the buyer's real need.
- **DDoS:** Availability protection for public-facing services and circuits. The key question is the cost of being unreachable during an attack.
- **SD-WAN:** A software-defined way to steer traffic, prioritize applications, and manage multiple access paths across sites.
- **Security scope:** SD-WAN, Managed Firewall, DDoS, and the broader **MNS** program solve related but different problems. Define the risk before naming the product.

---

## Pitch

::: elevator [Elevator Pitch]
We help customers keep the network available, controlled, and visible. Security protects the edge and reduces threat risk; SD-WAN makes the WAN easier to steer and manage. Outages and alerts get handled with a plan, not by the customer's IT person guessing at 2 a.m.
:::

---

## Discovery Break

<div class="mt-4 rounded-2xl border border-emerald-200/80 overflow-hidden bg-slate-50 shadow-sm">
  <iframe
    src="games/brick-breaker-1/index.html?embed=1&module=product-security-and-sd-wan"
    title="Discovery Break — Brick breaker"
    loading="lazy"
    sandbox="allow-scripts allow-same-origin"
    style="width: 100%; border: 0; display: block; aspect-ratio: 16 / 13; height: auto; max-height: min(88vh, 44rem); background: #f1f5f9;"
  ></iframe>
</div>

---

## Objection Handling

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

::: flip ["We manage our own Cisco gear."]
That's where MNS firewall management can fit. GPC can manage and monitor existing firewalls across leading vendors, giving you staff relief without forcing a hardware rip-and-replace conversation first.
:::

::: flip ["Our current solution works fine."]
Ask: do you have visibility into application performance across all sites? SD-WAN Orchestrator provides real-time views into access link performance and lets you prioritize critical apps—even over a single link.
:::

::: flip ["SD-WAN is too expensive."]
SD-WAN pricing is positioned between SIA and DIA in the training material, with Internet bandwidth purchased separately. The ROI story is replacing complex MPLS, reducing backhaul, improving app performance, and lowering day-to-day management burden. Confirm current pricing through the quote path.
:::

::: flip ["We only have sites in Nebraska."]
SD-WAN works over any transport—GPC fiber, cable, DSL, T1, or 4G/5G wireless. With at least one site on GPC fiber, all US locations including off-net branches can participate.
:::

::: flip ["The on-demand DDoS is fine—we're not a target."]
On-demand includes 24x7 monitoring and notifications, but mitigation is available weekdays from 8 am to 5 pm and must be requested. Let's align the SKU to your actual uptime risk.
:::

::: flip ["Is NGFW included in the base SD-WAN SKU?"]
No. Next-gen firewall and IDS/IPS are optional security features, not base SD-WAN. Scope them clearly so security expectations match what is actually on the order.
:::

</div>

---

## Technical Deep Dive [deep]

**Security — what it is in customer language**

Security is the discipline of reducing the chance that a bad event becomes a business outage, data loss, fraud event, or public embarrassment. The buyer usually feels it as "we do not have enough people watching this," "our firewall rules are a mess," "audit/compliance is getting harder," or "we cannot afford ransomware downtime."

**Firewall — the edge control point**

A firewall inspects and controls traffic moving in and out of the network. The value to the customer is policy control, segmentation, threat filtering, VPN access, logging, and fewer unmanaged changes at the edge. Managed firewall adds operational help: monitoring, policy support, and someone accountable when rules, threats, or locations change.

**Managed security — the operating model**

Managed security is broader than a firewall. It can include managing existing customer gear, monitoring logs, reviewing policy, scanning for vulnerabilities, assessing architecture, managed SIEM, and email security. Lead here when the buyer lacks time, tools, or staff to run security well.

**DDoS — availability protection**

A distributed denial-of-service attack tries to make an internet-facing service unreachable by flooding it with traffic. The customer impact is simple: customers cannot reach the site or app, and revenue or trust takes a hit. GPC's service uses customer-level monitoring thresholds, portal analytics, BGP FlowSpec, and, on the proactive tier, TMS protection. The key discovery question is, "What is the cost if this service is unavailable after hours?"

**SD-WAN — control over how traffic moves**

SD-WAN is not "a fancy router." It is software-defined control over WAN traffic: which apps get priority, which access path traffic uses, what happens when a circuit degrades, and how IT sees performance across sites. The value shows up as better app experience, faster issue isolation, easier branch management, and a path away from expensive legacy private networks.

**How the pieces relate**

| Customer pain | Conversation lane |
| --- | --- |
| "Need hardware + 24/7 management" | MNS -> Managed Firewall |
| "Have gear, need 24/7 monitoring" | MNS -> Firewall Management |
| "Site downtime = lost revenue" | DDoS (Proactive vs On-demand) |
| "Apps are slow between sites" | SD-WAN |

**Rep rule:** diagnose the risk first, then name the product. If you start with gear, the customer hears a SKU. If you start with business risk, the customer hears why it matters.
<!-- prettier-ignore-end -->

---

<a id="cloud-wi-fi-5g-product-cloud-wifi-and-backup"></a>

# Cloud, Wi-Fi, 5G (`product-cloud-wifi-and-backup`)

<!-- prettier-ignore-start -->
---
id: product-cloud-wifi-and-backup
title: 'Cloud, Wi-Fi, 5G'
summary: Cloud Connect. Managed Wi-Fi. 5G Wireless Backup & Broadband.
sensitivity: internal
reference_files:
  - label: 'Product Collateral (Cloud, Wi‑Fi, 5G)'
    sharepoint_url: 'https://gpcom.sharepoint.com/sites/gpcSales/Product%20Collateral/Forms/AllItems.aspx?viewid=855b9d9a%2D724a%2D4ba1%2D876e%2D2325aaaf29e5'
video_carousel:
  - title: 'GPC Cloud Connect — Overview'
    src: assets/cloud-wifi-5g/gpc-cloud-connect-overview.mp4
  - title: '5G Wireless Backup & Broadband — Product Launch'
    src: assets/wireless-backup/5g-wireless-product-launch.mp4
    poster: assets/wireless-backup/5g-wireless-product-launch.png
discovery_questions:
  - 'If the internet goes down, what happens to your point-of-sale system or cloud-based CRM?'
  - Are your employees complaining about dead zones or slow connections in specific parts of the building?
  - You mentioned moving your servers to AWS. How are you currently managing the latency and routing predictability to that environment?
  - Which cloud or SaaS workloads are most sensitive to jitter or latency—and how do you reach them from each site today?
  - 'Do you have a secondary path when fiber fails, and does it share trenches or poles with the primary circuit?'
  - When you stand up a new site, how long can you afford to wait for the fiber build before the location has to be open for business?
  - 'Are there locations on your footprint—seasonal, satellite, or rural—where fiber isn''t available today, and what are you running there now?'
five_minute_summary: |
  - **Field order:** Qualify the primary path first, attach resiliency second, then solve the local experience. Cloud Connect, Wi-Fi, Backup, and Broadband are different plays.
  - **Cloud Connect:** This is not more internet. It is private Layer 2 connectivity over GPC Ethernet into the cloud ecosystem, giving customers a more predictable path to providers like AWS, Azure, Google, Oracle, IBM, SAP, Nutanix, Salesforce, and Alibaba.
  - **Managed Wi-Fi:** We help own the last 10 feet of the experience. It is engineered around the site, with secure guest/private networks, access point options, installation through maintenance, and usage analytics. Do not quote AP counts from square footage alone.
  - **5G Wireless Backup:** The insurance policy *behind* primary fiber. It uses a professionally configured Cradlepoint router with automatic failover, automatic reversion, 24/7 NOC monitoring, app prioritization, and optional battery backup. Speeds and usage thresholds depend on the current product sheet and wireless conditions, so set expectations before signature.
  - **5G Wireless Broadband:** Cellular as the *primary* internet path. Two motions: (1) a temporary bridge while a fiber build is in flight, or (2) a permanent broadband plan where fiber is not the answer. The carrier hands out a DHCP IP, so anything hosted on prem will not be reachable from the internet. Temporary wireless service is **non-commissionable**; the customer starts billing at the contracted SIA/DIA rate once wireless is installed.
  - **The pitch order & ground rules:** Sell primary fiber first, attach 5G Backup for redundancy, and finish with Managed Wi-Fi for the localized experience. Use 5G Broadband to bridge a fiber install gap or to cover a site fiber can't reach. Wireless attaches to new or existing **SIA / DIA / SD-WAN** customers; do not sell outside GPC territory without approval. No SLAs: wireless is "best effort."
technical_deep_dive_tabs:
  aria_label: "Cloud, Wi-Fi, and 5G technical topics"
  intro: "Use the tabs as product lanes after the core sales story: cloud path, site Wi-Fi, outage backup, or temporary/permanent wireless broadband."
  tabs:
    - label: "Cloud Connect"
      body: |
        **What it is:** a private path from the GPC network to major cloud providers through an NNI (Network-to-Network Interface).

        - Bypasses the public internet for cloud workloads, which makes performance more predictable and mitigates jitter.
        - Best fit when the customer runs mission-critical workloads in AWS, Azure, Google Cloud, Oracle, IBM, SAP, Nutanix, Salesforce, Alibaba, or similar environments.
        - Requires both an Ethernet connection and at least one Cloud Connect product. GPC provides the connectivity, not the customer's cloud service.
        - This is not "more internet." It is a private cloud path layered on top of the access conversation.
    - label: "Managed Wi-Fi"
      body: |
        **What it is:** GPC-managed wireless coverage for the customer site, from installation and turn-up through maintenance.

        - Engineer the design around current and future needs; do not guess AP counts from square footage alone.
        - Position this as owning the last 10 feet of connectivity: secure guest/private networks, indoor and outdoor AP options, analytics, branded login capability, and a better user experience inside the building.
        - Good discovery sounds practical: "Do you have reliable coverage?", "Is the Wi-Fi secure?", and "Who manages it when users complain?"
    - label: "5G Backup"
      body: |
        **What it is:** automatic wireless failover behind the customer's primary GPC wireline circuit (SIA, DIA, or SD-WAN).

        - Uses Cradlepoint X20-5G CPE, or E100 LTE on the lower tier, installed and managed by GPC.
        - Cellular underlay is Verizon and/or AT&T through Kajeet; failover typically completes in about a minute.
        - Optional battery backup can provide up to 8 hours of power to the router during an outage.
        - It is "best effort" with no SLA. The goal is to keep doors open and registers ringing, not replace fiber during a multi-day outage.

        Usage tiers may reduce wireless throughput during extended failover. Use the current product sheet for the active thresholds; the table below is a training guide, not a customer-facing SLA.

        | Total monthly usage (current product sheet) | Speed after threshold |
        | --- | --- |
        | After **12 GB** | Up to **50 Mbps** |
        | After **20 GB** | Up to **25 Mbps** |
        | After **30 GB** | Up to **3 Mbps** |

        **Static IP gotcha:** static IPs work on the GPC landline side, but the carrier hands out a different DHCP IP during failover. If inbound services depend on a static IP, document that they break during the outage.
    - label: "5G Broadband"
      body: |
        **What it is:** cellular as the primary internet path, not a failover path.

        - Uses a professionally configured Cradlepoint router and wireless carrier service; managed by GPC.
        - **Temporary bridge:** wireless covers a new site that must open before the fiber build completes. When fiber turns up, the Cradlepoint re-roles as 5G Backup behind the new SIA/DIA circuit.
        - **Permanent broadband:** wireless is the long-term primary at sites where fiber is not available in footprint, including rural or hard-to-reach edges.
        - Current permanent Broadband pricing shows **25 Mbps** and **50 Mbps** plans. Bandwidth is still best effort, varies by location and time of day, and carrier priority-data thresholds can change by product sheet.
        - **No static IP:** the public IP comes from the carrier via DHCP, so on-prem hosted services are not reachable from the internet. If on-prem hosting is in scope, lead with SIA/DIA.
        - Temporary wireless service is **non-commissionable**; track the fiber install because the SIA/DIA sale is where the commission lands.
knowledge_checks:
  - question: "A prospect wants to know how much 15 Wi-Fi Access Points will cost for their new warehouse. What do you do?"
    options:
      - "Look at the pricing sheet for 15 APs and send them a rough estimate."
      - "Assume a warehouse needs double the APs and quote them 30 just to be safe."
      - "Pause the blind quote and get the site engineered before AP counts are final."
    correct_index: 2
    explanation: "Never guess on Wi-Fi. Coverage depends on the environment and the customer's needs, so engineer the design before quoting AP counts."

  - question: "What is the primary technical advantage of Cloud Connect over a standard Dedicated Internet Access (DIA) circuit?"
    options:
      - "Cloud Connect is significantly cheaper than DIA."
      - "Cloud Connect bypasses the public internet, reducing variable latency and jitter for cloud workloads."
      - "Cloud Connect provides built-in DDoS protection for their website."
    correct_index: 1
    explanation: "DIA still uses the public internet. Cloud Connect provides private Layer 2 connectivity into the cloud ecosystem."

  - question: "A customer says they don't need 5G Backup because they have a cheap coax cable connection from a competitor as their backup. What is your response?"
    options:
      - "Agree that cable is a fine backup and focus on selling the primary fiber."
      - "Point out that cable and fiber often share the same physical utility poles. If a truck hits the pole, both go down. 5G offers true path diversity."
      - "Offer to lower the price of our 5G Backup to beat the cable provider's price."
    correct_index: 1
    explanation: "Wired backups often share the same physical vulnerabilities (trenches, poles, building entry). Wireless provides actual physical diversity."

  - question: "A customer's new retail location goes live in 14 days, but the fiber build for that address won't be ready for 90. They're already a GPC SIA customer at their main office. What's the right play?"
    options:
      - "Use 5G Wireless Broadband as a temporary bridge, then convert it to Backup when fiber lights."
      - "Tell them to delay the store opening until the fiber circuit is installed."
      - "Make cellular the permanent primary path because it performs the same as fiber."
    correct_index: 0
    explanation: "Bridging a fiber install gap is the textbook temporary use case for Wireless Broadband. Same hardware re-roles as Backup once fiber turns up—remember the commission lands on the SIA/DIA, not the temporary bridge."

  - question: "A prospect wants to run a small ERP server on-premise and reach it from the public internet. They love the idea of 5G Wireless Broadband as their primary connection because it installs faster than fiber. Are they a fit?"
    options:
      - "Yes—Cradlepoint will port-forward a public IP through to the on-prem server."
      - "No—Wireless Broadband uses carrier DHCP, so inbound hosted services need SIA or DIA."
      - "Yes—you can request a static IP from the cellular carrier for an additional fee."
    correct_index: 1
    explanation: "Static IPs work on the GPC landline side only. Neither Backup (during failover) nor Broadband supports prem-hosted services reachable from the internet. If the customer hosts inbound services, lead with SIA/DIA."

  - question: "You close a 5G Wireless Broadband deal at a customer site that's still waiting on a fiber install. When do you get commissioned?"
    options:
      - "At install, like every other wireless circuit."
      - "At half the rate of a permanent wireless contract."
      - "When the SIA/DIA contract commissions after fiber lights and the wireless converts to Backup."
    correct_index: 2
    explanation: "Temporary wireless service is non-commissionable—a hard GPC business rule. Plan your pipeline accordingly and stay close to the fiber install date so the SIA/DIA commission actually lands."

scenarios:
  - title: The Jittery Cloud
    situation: |
      A financial firm moved their entire database to AWS. They have a 1 Gig DIA circuit, but they are complaining about random lag spikes during the afternoon that disrupt their trading software.
    choices:
      - label: Tell them to upgrade to a 2 Gig DIA circuit to power through the lag.
        feedback: Throwing bandwidth at a latency problem doesn't work. The issue is public internet routing. They need Cloud Connect.
      - label: Pitch Cloud Connect. Explain that jumping off the public internet and using a private cloud path can reduce routing jitter.
        feedback: Correct. Private paths make cloud performance more predictable. Match the tech to the problem.
  - title: The Fiber-Island Bridge
    situation: |
      A regional grocery chain is opening a 12,000-sq-ft satellite store on the edge of GPC's serviceable footprint. Go-live is 30 days out. The fiber build for that address has a 75-day engineering and trench window. They already have GPC DIA at HQ.
    choices:
      - label: Tell them to push the store opening—fiber is the only safe option, and a 45-day gap is the cost of doing business.
        feedback: Pushing a store opening for a 45-day fiber gap will torch the relationship. There is a faster, GPC-approved play.
      - label: 'Use 5G Wireless Broadband as a temporary bridge, then convert it to Backup behind the new wireline circuit.'
        feedback: 'Correct. Bridge the install gap with wireless, then convert to Backup at fiber turn-up. Two things to remember: the bridge period is non-commissionable (your commission lands on the SIA/DIA when fiber lights), and the store cannot host inbound services on the wireless DHCP IP during the bridge.'
      - label: Sell them a cheap consumer cellular hotspot as a stopgap and circle back when fiber's ready.
        feedback: 'Off-net and unmanaged—GPC has nothing to monitor or warranty, and you have no path to convert to Backup. That is the gap Wireless Broadband exists for: managed bridge now, then convert to Backup when fiber lands.'
  - title: The Static-IP Trap
    situation: |
      A small accounting firm wants to ditch their slow cable internet. They like the idea of 5G Wireless Broadband as a faster path than waiting for a fiber build. They also self-host a client portal on a server in their back office and need it reachable from the public internet.
    choices:
      - label: Sell the 5G Wireless Broadband and tell them you'll request a static IP from the carrier as a follow-up.
        feedback: Wireless Broadband uses carrier DHCP, so promising a static IP is a commitment you cannot deliver.
      - label: Walk back from Wireless Broadband. Position SIA or DIA as the right product because they need a static IP for inbound traffic to their on-prem portal—then attach 5G Backup for true path diversity.
        feedback: 'Correct. Static IP is a wireline-only feature in our portfolio. Lead with SIA/DIA when on-prem hosting is in scope, and use 5G as the redundancy layer.'
      - label: Sell them the Wireless Broadband anyway and have Cradlepoint port-forward through the carrier IP.
        feedback: Port-forwarding through a DHCP carrier IP is unreliable and unsupported as a managed deliverable. The right answer is a wireline circuit with a static IP.
roleplay:
  persona: IT Manager at a healthcare clinic network
  scenario: Had a fiber outage last month that took down patient scheduling and e-prescribing for four hours. Wants a solution but is skeptical of wireless backup speeds and worried about HIPAA data on a cellular network.
  goal: 'Position 5G backup as a managed, automatic failover solution with app prioritization and NOC monitoring—set honest speed/tier expectations while tying reliability to patient care continuity.'
---

## At a glance

- **Cloud Connect:** Private transport to hyperscalers (AWS, Azure, GCP). Bypasses public internet routing.
- **Managed Wi-Fi:** Fully managed edge. Engineer the design before quoting AP counts.
- **5G Wireless Backup:** Automatic failover for primary circuits. True physical diversity compared to a secondary wired connection.
- **5G Wireless Broadband:** Cellular as the *primary* internet path—either a temporary bridge while a fiber build runs, or the long-term answer where fiber isn't available. Attaches to new or existing SIA / DIA / SD-WAN customers; do not sell outside GPC territory without approval.

---

## Pitch

::: elevator [Elevator Pitch]
We make sure your team can actually reach the cloud without the public internet slowing them down. From private paths into AWS and Azure, to fully managed Wi-Fi in your office, right down to automatic 5G backup if a fiber line gets cut—we keep your critical apps running.
:::

---

## Discovery Run

<div class="rounded-2xl border border-emerald-200/80 overflow-hidden bg-slate-50 shadow-sm">
  <iframe
    src="games/portfolio-level-1/index.html?embed=1&module=product-cloud-wifi-and-backup"
    title="Discovery Run — Level 1"
    loading="lazy"
    sandbox="allow-scripts allow-same-origin"
    style="width: 100%; border: 0; display: block; aspect-ratio: 16 / 10.5; height: auto; max-height: min(88vh, 44rem); background: #f1f5f9;"
  ></iframe>
</div>

---

## Technical Deep Dive [deep]

Start with the sales sequence before the specs: qualify the primary path, decide whether resiliency, cloud performance, site experience, or a fiber timing gap is the pain, then use the tab that matches the customer problem.
<!-- prettier-ignore-end -->

---

<a id="gpc-itv-for-business-product-itv"></a>

# GPC iTV for Business (`product-itv`)

<!-- prettier-ignore-start -->
---
id: "product-itv"
title: "GPC iTV for Business"
summary: "Business streaming TV over GPC Internet—popular channels, Cloud DVR, Replay TV, and a single bill. Always verify channels via SharePoint."
sensitivity: "internal"
reference_files:
  - label: "GPC iTV collateral — SharePoint (source of truth)"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx"
discovery_questions:
  - "How many screens need TV, and what are the must-have channels for your staff or customers?"
  - "Who provides your internet right now? (iTV requires GPC Internet)."
  - "Are you open to a streaming app, or do your specific TVs require physical set-top boxes?"
  - "How many concurrent streams and how much Cloud DVR capacity should be quoted?"
  - "Is this for a lobby, waiting room, bar, restaurant, or another public viewing area?"
five_minute_summary: |
  - **What it is:** Streaming TV for business (Cloud DVR, Replay TV, HD channels) that rides directly over their **GPC Internet** connection.
  - **The Hook:** Lobby TVs, sports, local channels, and shared screens over the GPC Internet they already need. Verify the lineup before you promise a channel.
  - **The Caveat:** GPC iTV Essentials is the base package; every quote also needs the right stream count and DVR selection.
  - **The Golden Rule:** Do not promise a specific channel from memory. Use the QR code or SharePoint lineup tools before you quote.

knowledge_checks:
  - question: "What is the mandatory prerequisite for selling GPC iTV?"
    options:
      - "The customer must have or be purchasing GPC Internet."
      - "They must have a smart TV."
      - "They can use any ISP circuit if the bandwidth looks sufficient."
    correct_index: 0
    explanation: "iTV is delivered over the customer's GPC Internet connection. Qualify access first."

  - question: "How should you handle a customer demanding a specific channel guarantee?"
    options:
      - "Guarantee it to keep the deal moving."
      - "Use the public lineup/QR flows on SharePoint to verify market-specific availability."
      - "Rely on last year's channel deck if the package name sounds the same."
    correct_index: 1
    explanation: "Lineups are market-dependent. Always use official SharePoint tools."

  - question: "What must be selected with GPC iTV Essentials?"
    options:
      - "A stream count and a DVR product."
      - "A hosted voice seat and SD-WAN policy."
      - "Any ISP circuit with enough bandwidth."
    correct_index: 0
    explanation: "The pricing materials list Essentials as the base package and require a stream selection plus a DVR product."

  - question: "When is a set-top box part of the conversation?"
    options:
      - "Every iTV sale requires one box per TV."
      - "Some business or TV setups may require set-top boxes, available at a low monthly rate."
      - "Set-top boxes are only used for residential customers."
    correct_index: 1
    explanation: "The product sheet positions iTV as a streaming TV solution, with set-top boxes only when the business or TV setup requires them."

  - question: "What should you remember about discounting iTV?"
    options:
      - "Discount it like any other add-on."
      - "Only discount sports packages."
      - "The pricing sheets state that the product is not discountable."
    correct_index: 2
    explanation: "The East pricing sheets explicitly say GPC iTV is not discountable, so confirm current pricing guidance before making concessions."

scenarios:
  - title: "Waiting room TVs on a competitor ISP"
    situation: |
      A retail prospect wants GPC iTV for lobby screens but their internet is still with another carrier.
    choices:
      - label: "Sell iTV standalone."
        feedback: "iTV requires GPC Internet. Qualify the access path and sell the bundle."
      - label: "Pitch GPC Internet as the foundation, then layer on iTV."
        feedback: "**Good.** Match the architecture—access comes first."

roleplay:
  persona: "Frugal retail owner"
  scenario: "Has two screens in a coffee shop. Wants local channels, sports, and replay options but is worried about equipment fees."
  goal: "Pitch the streaming app, Cloud DVR, Replay TV, and the simplicity of a single GPC bill. Acknowledge that some TV setups may still require set-top boxes at a low monthly rate."
---

## At a glance

- **The Product:** Streaming TV for business (Channels, Cloud DVR, Replay TV) over **GPC Internet**.
- **The Hardware:** Streaming-first to save on equipment fees, but set-top boxes are available if the site requires them.
- **The Package Rule:** Essentials is the base package. Add the correct stream count, DVR option, and any channel package the customer qualifies for.
- **The Source of Truth:** Never guess the channel lineup or rate. Use **SharePoint** and the official QR codes before you quote.

---

## Pitch

::: elevator [Elevator Pitch]
GPC iTV brings local channels, sports, HD, Cloud DVR, and Replay TV to business screens over a GPC Internet connection. It rides the circuit they already need: one provider, one bill, and no channel promises until you verify the lineup.
:::

---

## Discovery Galaxy

<div class="mt-4 rounded-2xl border border-emerald-200/80 overflow-hidden bg-slate-50 shadow-sm">
  <iframe
    src="games/galactica-1/index.html?embed=1&module=product-itv"
    title="Discovery Galaxy"
    loading="lazy"
    sandbox="allow-scripts allow-same-origin"
    style="width: 100%; border: 0; display: block; aspect-ratio: 16 / 10.5; height: auto; max-height: min(88vh, 44rem); background: #f1f5f9;"
  ></iframe>
</div>

---

## Core Benefits

Keep the pitch simple. iTV is about a better business TV experience without overcomplicating the quote:

1. **Replay TV & Cloud DVR:** Useful for waiting rooms, lobbies, breakrooms, and other shared spaces where people come and go.
2. **Local & Sports Channels:** Local events, weather, popular channels, sports channels, and HD quality are the headline features. Always confirm the lineup first.
3. **Equipment Savings:** Lead with the streaming model. If the business or TV setup needs a set-top box, quote it at the current low monthly rate.
4. **The Single Bill:** TV can sit alongside other GPC services on one invoice.

## Packaging Notes

1. **Start with Essentials:** GPC iTV Essentials is required as the base package.
2. **Quote the add-ons deliberately:** The pricing sheets require a stream count and DVR product. Available stream counts run from 3 to 10, and DVR options range from 50 to 300 Cloud DVR hours.
3. **Use the right commercial package:** Bars, restaurants, and similar facilities may need Entertainment packages tied to seating area.
4. **Protect margin:** The pricing sheets call out iTV as not discountable. Verify current guidance before discussing exceptions.

## How to execute

1. **Qualify Access:** iTV is not a standalone product. If they don't have GPC Internet, you are selling a connectivity deal first.
2. **Build the Quote:** Start with Essentials, then add the stream count, Cloud DVR choice, and any channel package required for the use case.
3. **Don't Guess:** Do not promise specific channels from memory. Hand them the QR code or use the SharePoint lineup tool.
4. **Check the Hardware:** Ask what TVs they are using today so you know whether the streaming app is enough or set-top boxes should be included.
<!-- prettier-ignore-end -->

---

<a id="uc-voice-collaboration-product-uc-voice-and-collaboration"></a>

# UC, Voice & Collaboration (`product-uc-voice-and-collaboration`)

<!-- prettier-ignore-start -->
---
id: product-uc-voice-and-collaboration
title: 'UC, Voice & Collaboration'
summary: Cloud PBX. MS Teams integration. Contact Center.
sensitivity: internal
reference_files:
  - label: 'Product Collateral (UC, voice, contact center)'
    sharepoint_url: 'https://gpcom.sharepoint.com/sites/gpcSales/Product%20Collateral/Forms/AllItems.aspx?viewid=855b9d9a%2D724a%2D4ba1%2D876e%2D2325aaaf29e5'
discovery_questions:
  - How are your employees currently making external phone calls when they are working remotely?
  - 'You mentioned using Microsoft Teams. Which Microsoft voice licenses do you already have, and do users expect to place calls from Teams, the UC app, desk phones, or a mix?'
  - 'For your customer service team, do you have visibility into metrics like hold times, abandoned calls, and agent performance?'
  - Which CRM or service desk tools must voice and contact center data integrate with for screen pops and reporting?
  - 'If Microsoft 365 or Teams has an outage, how do you still need to reach customers and partners by phone?'
video_carousel:
  - title: Premises to UC
    src: assets/UC/prem-to-uc.mp4
    poster: assets/UC/prem-to-uc.png
  - title: Microsoft Teams
    src: assets/UC/teams.mp4
    poster: assets/UC/teams.png
  - title: Desktop app
    src: assets/UC/desktop-app.mp4
    poster: assets/UC/desktop-app.png
  - title: Mobile app
    src: assets/UC/mobile-app.mp4
    poster: assets/UC/mobile-app.png
  - title: Work better wherever
    src: assets/UC/work-better-wherever.mp4
    poster: assets/UC/work-better-wherever.png
five_minute_summary: |
  - **What you’re selling:** Cloud UC — cloud PBX, SMS/MMS, HD meetings, select AI-assisted features, and dependable call quality/uptime positioning. Confirm tier-specific AI and SLA language before quoting.
  - **Seat / plan ladder:** Match **workload**, not company size; tiers **mix per user**. Typical blend: lobby/resource lines + reception Express + floor Pro + HQ Enterprise.
    - **Resource Line** — one concurrent endpoint for a shared phone or common-area line.
    - **Express** — voice only.
    - **Essentials** — voice + video (25), AI recap, recording.
    - **Pro** — adds inbound call center features, CRM integrations, video (100).
    - **Enterprise** — Pro + video (200) + **200 GB** storage.
  - **Contact center:** **CCaaS** = omnichannel contact center (voice, chat, email, SMS/WhatsApp depending on tier/add-ons), licensed by **concurrent** agent seats. **UC Pro/Enterprise** already include strong **inbound** queue/supervisor tooling — CCaaS is the separate product when they need full contact-center scope.
  - **Microsoft Teams:** UC can add cloud PBX, SMS, and advanced calling into a Teams-centered environment. Do **not** guess the license path; the UC for Teams source calls out an **MSFT Phone System license per user**, and the **SE validates** the final Teams design.
  - **Legacy:** SIP/PRI still available; steer toward UCaaS over time.
knowledge_checks:
  - question: "A prospect wants external calling from Microsoft Teams and asks whether they can skip Microsoft Phone System licensing. What should you say?"
    options:
      - "Yes. GPC UC for Teams always avoids Microsoft Phone System licensing."
      - "No. The UC for Teams source calls out an MSFT Phone System license per user; validate the exact Teams design with the SE before quoting."
      - "Ignore the license question and quote UC first; Microsoft licensing is the customer's problem."
    correct_index: 1
    explanation: "The source-supported move is to avoid promising a license bypass. Teams voice design and licensing need SE validation before you quote or position savings."

  - question: "How is our Contact Center (CCaaS) product licensed?"
    options:
      - "Named user licensing. They pay a fee for every single employee in the company."
      - "Concurrent licensing. They pay for the maximum number of agents logged in simultaneously."
      - "Per-minute billing. They only pay for the time agents spend actively talking."
    correct_index: 1
    explanation: "Concurrent licensing is a massive cost-saver for businesses with shift workers or part-time agents."

  - question: "A customer experiences a complete Microsoft 365 outage and Teams goes down. What continuity point can you make for a UC + Teams customer?"
    options:
      - "Their phones go down completely until Microsoft fixes the issue."
      - "The UC mobile app can still be used for calls and SMS, keeping communication channels accessible while Teams is down."
      - "Calls are automatically forwarded to their personal cell phone voicemails."
    correct_index: 1
    explanation: "The source specifically positions the UC mobile app as a continuity path for calls and SMS if Teams goes down."

  - question: "A 12-person law firm wants UC. Mostly desk-phone client calls, occasional Zoom-style meetings with up to 8 people, no contact center. Which UC plan should you lead with?"
    options:
      - "UC Enterprise — clients deserve the top tier regardless of workload."
      - "UC Express — small firms only need voice, so video is overkill."
      - "UC Essentials — it covers voice and small meetings without paying for call-center features."
    correct_index: 2
    explanation: "Match the plan to the **workload**, not the company size. Essentials covers their video need (Express has no video) without paying for Pro/Enterprise call-center features they won't use."

  - question: "A prospect says \"we need a contact center.\" UC Pro already advertises Call Queueing, Agent Log-In/Out, Wallboards, and Supervisor Monitor/Whisper/Barge. Should you sell them UC Pro or the dedicated CCaaS add-on?"
    options:
      - "Scope the workload first. UC Pro can fit voice-only inbound queues; CCaaS fits omnichannel or advanced workflows."
      - "Default to CCaaS every time. It has more features, so it is always the safer quote."
      - "Default to UC Pro every time. Its call-center tools fully replace the dedicated CCaaS product."
    correct_index: 0
    explanation: "UC Pro/Enterprise's Call Center features are a fully usable inbound voice operation — perfect for a 10-seat help desk. CCaaS is the separate omnichannel product. Conflating the two at quote time creates an install fight; let the SE scope it."

  - question: "A 175-person company wants UC for their monthly all-hands video call. What is the minimum UC plan tier that supports the meeting size?"
    options:
      - "UC Enterprise — it supports the larger all-hands meeting size."
      - "UC Essentials — it includes video meetings, so it covers the all-hands."
      - "UC Pro — it is the right middle tier for larger meetings."
    correct_index: 0
    explanation: "The participant ceilings step **25 → 100 → 200** across Essentials / Pro / Enterprise. For a 175-person meeting, Enterprise is the floor."

  - question: "A prospect wants to port in 8 existing carrier DIDs that are still under contract with their current provider, plus a 4-level IVR menu with after-hours routing and a Salesforce screen-pop integration. What's the right next step?"
    options:
      - "Quote UC Pro and note the porting, IVR, and Salesforce items as standard features."
      - "Pause and bring in your Solutions Engineer before quoting the port, IVR, and CTI scope."
      - "Promise the full scope now, then let the SE refine the SOW after signature."
    correct_index: 1
    explanation: "The deep-dive rule already says \"Do not attempt to quote high-volume burst capacity or complex IVR routing on your own. Bring in your SE immediately.\" Extend that rule to **IPN/OffNet porting** (existing-carrier contract handoffs) and **CRM CTI integrations** (Salesforce/ServiceNow/Dynamics screen-pops). When you see any of the three, pause and pull in the SE."

  - question: "Name the five GPC UC plan tiers, lowest to highest."
    options:
      - "UC Lite → UC Standard → UC Plus → UC Pro → UC Enterprise."
      - "Resource Line → UC Express → UC Essentials → UC Pro → UC Enterprise."
      - "UC Express → UC Essentials → UC Pro → UC Enterprise → UC Enterprise+."
    correct_index: 1
    explanation: "Resource Line is the standalone-endpoint floor for shared or common-area phones. Everything above it scales by apps, video participants, storage, call-center features, and CRM integrations."
    source: "UC Plan Comparison - Internal use only 2026.pdf"

  - question: "Which CCaaS tier statement is safest from the current Contact Center plan comparison?"
    options:
      - "Both CC Pro and CC Elite use concurrent seats; several channel and advanced features vary by add-on, included status, or professional services."
      - "CC Elite is the only tier with supervisor monitor/whisper/barge, reporting, callback, surveys, or outbound dialing."
      - "CC Pro and UC Pro Advanced Hunt Groups are the same product, so quote whichever is cheaper."
    correct_index: 0
    explanation: "The table supports concurrent-seat licensing for both tiers and shows many core contact-center capabilities in both. Scope channels, add-ons, and professional-services items with the SE instead of assuming Elite-only features."
    source: "Contact Center datasheet 050925.pdf"

  - question: "A customer is replacing their front-desk receptionist's phone. They want a large color touch screen with on-screen line management. Which Yealink model do you spec?"
    options:
      - "T53W (Basic) — 3.7-inch graphical LCD, 8 line keys."
      - "T57W (Advanced) — 7-inch, 800×480 capacitive touch screen."
      - "T54W (Intermediate) — 4.3-inch color LCD, 10 line keys."
    correct_index: 1
    explanation: "Pick by **role**, not by what's cheapest. Front desk gets Advanced (T57W) because the receptionist needs a touch-screen line-management experience. Back-office workers who just answer their own line are well-served by the T53W Basic."
    source: "UC Phone Comparison sheet.pdf"

scenarios:
  - title: The Microsoft Native Trap
    situation: |
      An IT Director tells you, "We are just going to buy Microsoft's native calling plan. It's easier to keep everything with one vendor."
    choices:
      - label: Concede the point. Microsoft is too big to compete against for voice.
        feedback: 'You just lost the chance to test whether convenience is masking voice risk. Stay factual: routing, porting, support model, and uptime are still telecom decisions.'
      - label: 'Challenge the voice operations risk. Ask who supports ports, dropped calls, routing changes, and outages; then position the right GPC Teams path with SE validation.'
        feedback: Correct. Pivot away from software convenience and anchor on reliability, support, and the specific Teams motion the customer wants.
  - title: The License Blender
    situation: |
      You're in a Teams discovery meeting and pitch: "We put GPC's phone system inside Microsoft Teams, you don't need to worry about Microsoft Phone System licensing, and everyone will dial from Teams exactly like they do today." The IT director nods.
    choices:
      - label: Pitch landed clean. Send the quote.
        feedback: 'That pitch overreaches. The source supports UC for Teams, but it also calls out an MSFT Phone System license per user. The SE will have to walk back the licensing promise, which hurts trust.'
      - label: 'Pause before quoting: "Let me validate the Teams user experience and Microsoft licensing path with our SE before I price this."'
        feedback: 'Correct. Keep the value story on cloud PBX, SMS, routing, support, and the Teams-centered workflow, then let the SE validate the tenant and licensing.'
      - label: Promise both and let the SE sort it out in the SOW.
        feedback: 'Microsoft licensing is not a detail to clean up later. Validate it during discovery so the quote and SOW match the actual Teams design.'
roleplay:
  persona: Operations Manager at a 75-person professional services firm
  scenario: Stuck on an aging on-prem PBX that's out of warranty. The IT team uses Teams for chat and meetings but nobody can make external calls from it. Assumes replacing the PBX means buying new desk phones and a server.
  goal: 'Position GPC''s cloud UC as the modern replacement: no on-prem server, enterprise-grade PBX features, desktop/mobile apps, and a Teams-centered workflow when needed. Be clear that Microsoft Teams licensing and user experience require SE validation before quoting.'
---

## At a glance

- **UCaaS Platform:** Full PBX feature set varies by tier, with SMS/MMS, chat, HD meetings, and strong call-quality/uptime positioning. Confirm exact feature counts and SLA language before customer-facing use.
- **MS Teams Integration:** UC for Teams brings cloud PBX, SMS, and advanced calling into a Teams-centered workflow. The source calls out an MSFT Phone System license per user; SE validates licensing and design before you promise the experience.
- **Contact Center:** Omnichannel contact center for voice, chat, email, and SMS/WhatsApp depending on tier/add-ons. Licensed by concurrent seats.
- **AI Features:** AI Assistant, AI Call Recap, AI Meeting Recap, and AI Agent Evaluator can support productivity, summaries, sentiment/topic highlights, and coaching workflows on select tiers or add-ons. Scope before quoting.

---

## Pitch

::: elevator [Elevator Pitch]
We replace aging phone systems with a secure cloud platform for calling, SMS, meetings, and customer conversations. Whether your team works from Microsoft Teams, desk phones, or mobile apps, GPC UC gives them one managed communications experience without keeping an old PBX alive.
:::

---

## Discovery Break

<div class="mt-4 rounded-2xl border border-emerald-200/80 overflow-hidden bg-slate-50 shadow-sm">
  <iframe
    src="games/brick-breaker-1/index.html?embed=1&module=product-uc-voice-and-collaboration"
    title="Discovery Break — Brick breaker"
    loading="lazy"
    sandbox="allow-scripts allow-same-origin"
    style="width: 100%; border: 0; display: block; aspect-ratio: 16 / 13; height: auto; max-height: min(88vh, 44rem); background: #f1f5f9;"
  ></iframe>
</div>

---

## Technical Deep Dive [deep]

**Brand hierarchy you'll hear in the field**

- **GPC UC** — the approved external brand. This is what goes on customer-facing collateral, proposals, and slide titles.
- **Ascend** — the **application** name (desktop / mobile / Teams add-ins) we sell under the GPC UC umbrella. Safe to mention by name when you're describing the user experience ("the **Ascend** desktop app").
- **Unite** — the same application, sold direct by **Intermedia**. You will see it in partner collateral and FAQs. **Do not lead with "Unite" externally** — translate it to GPC UC / Ascend for the customer.

**Microsoft Teams positioning:**
- Many organizations already use Teams for chat, meetings, and files but still need enterprise-grade PBX features, SMS, desk phones, support, and call routing.
- UC for Teams brings GPC UC cloud PBX capabilities into that Teams-centered workflow.
- Do not promise a Microsoft licensing outcome from discovery alone. The UC for Teams source states an **MSFT Phone System license is required per user**, so the SE should validate the tenant, licensing, and user experience before you quote.

<div class="module-plan-ladder my-5 rounded-2xl border border-slate-200/90 bg-white shadow-sm shadow-slate-900/5 overflow-hidden">
<div class="module-plan-ladder-head border-b border-slate-200/80 bg-gradient-to-br from-slate-50 via-white to-violet-50/40 px-4 py-3.5">
<p class="m-0 text-sm font-bold tracking-tight text-slate-900">UC plan ladder — tier vs. workload</p>
<p class="m-0 mt-1.5 text-xs leading-relaxed text-slate-600">Match <strong>workload</strong> to tier; licenses <strong>mix per user</strong> on one account. Video caps step <strong>25 → 100 → 200</strong> across Essentials / Pro / Enterprise.</p>
</div>
<div class="module-plan-ladder-table-wrap overflow-x-auto p-2 sm:p-3">

| Tier | Voice | Video participants | Storage / user | Call Center features | CRM integrations | Lead with when… |
| --- | --- | --- | --- | --- | --- | --- |
| **Resource Line** | 1 concurrent endpoint (no apps) | — | — | — | — | Standalone resource lines — front-desk, lobby, conference-room, common-area phones; the line just needs to ring |
| **Express** | Unlimited | — (no video) | — | — | Active Directory, Chrome Click-to-Call | Reception desks, freelancers, dispatchers, scheduling-only roles |
| **Essentials** | Unlimited | 25 | 5 GB | — | — | Hybrid teams, customer support, sales on the go, MS 365 integration |
| **Pro** | Unlimited | 100 | 50 GB | Queueing, Wallboards, Supervisor Monitor/Whisper/Barge, End-to-End Encryption | Salesforce, ServiceNow, NetSuite, MS Dynamics, Sugar, Zoho, Zendesk | Inbound call-center workloads, high-volume sales/support, CRM-integrated desks |
| **Enterprise** | Unlimited | 200 | 200 GB | Pro + Smart Greetings + Additional Recording Storage | Same as Pro | Large all-hands, company-wide voice, town-hall meetings |

</div>
</div>

**Contact Center (CCaaS):**
- **UC Pro/Enterprise already include inbound Call Center features** — queueing, hunt groups, wallboards, and Supervisor Monitor/Whisper/Barge — enough to run a small/medium **voice-only** help desk. The dedicated **CCaaS** product is a separate SKU for **omnichannel** workloads (voice, chat, email, SMS/WhatsApp depending on tier/add-ons), advanced IVR, CRM/WFM integrations, and concurrent agent licensing. Don't conflate the two when scoping.
- Pre-built CRM integrations include Salesforce, Dynamics, Zendesk, and Slack; custom CRM work may require professional services.
- "Concurrent" means if they have 50 total employees, but only 10 answer phones at any given time, they only buy 10 licenses.
- Do not attempt to quote high-volume burst capacity, complex IVR routing, IPN/OffNet ports under an active carrier contract, or CRM CTI integrations on your own. Bring in your SE immediately.

**CC Pro vs. CC Elite — which tier fits:**

The dedicated CCaaS product ships in **two tiers**. Both are concurrent-seat licensed and can be sold with UC or standalone. The plan comparison shows core contact-center capabilities in both tiers, while several channels and advanced tools vary by add-on, included status, or professional services. Treat the table as a scoping guide, not a shortcut around SE review.

| Capability | CC Pro | CC Elite |
| --- | --- | --- |
| Concurrent-seat licensing | ✓ | ✓ |
| Inbound Voice Queues, ACD, customizable IVR | ✓ | ✓ |
| Pre-built CRM integrations (Salesforce, Dynamics, Zendesk, Slack) | ✓ | ✓ |
| Real-time + historical reporting, dashboards | ✓ | ✓ |
| Skill-Based Routing | ✓ | ✓ |
| Supervisor Monitor / Whisper / Barge-In | ✓ | ✓ |
| Outbound Voice + Outbound Dialer (scheduled power dialing) | ✓ | ✓ |
| Geo-Routing + Advanced Rules-Based Routing (Last Agent / Preferred Agent) | ✓ | ✓ |
| Queued Callback + Queued Voicemail | ✓ | ✓ |
| Real-Time Customizable Threshold Alerts | ✓ | ✓ |
| Post-Call Surveys + Call Scripting | ✓ | ✓ |
| Custom Agent Status + Elastic Demand Support | ✓ | ✓ |
| Chat Channel Queues | Add-on | Included |
| WhatsApp Channel Queues | Add-on | Included |
| Schedule Manager | Add-on | Included |
| Screen Recording | Add-on | Included |
| Custom WFM Integration | — | Professional Services |
| Speech Recognition Integration | — | Included |

**Add-ons / scoped items:** Email Channel Queues, Dynamic Notification (Voice/Email/SMS), AI Agent Evaluator, archiving, custom CRM integrations, and custom IVR/self-service integrations can add cost or professional-services scope. Validate the final channel mix before quoting.

**Pick CC Elite when** the requirements lean toward included chat/WhatsApp channels, Schedule Manager, Screen Recording, Custom WFM, Speech Recognition, or other advanced items shown above Pro in the comparison. **Don't conflate UC Pro's Advanced Hunt Groups with the CCaaS product** — UC Pro is light-call-center for voice-only; CC Pro/Elite is the real omnichannel CCaaS.
<!-- prettier-ignore-end -->

---

<a id="competitive-positioning-competitive-positioning"></a>

# Competitive Positioning (`competitive-positioning`)

<!-- prettier-ignore-start -->
---
id: "competitive-positioning"
title: "Competitive Positioning"
summary: "Discovery first. Facts over slogans."
sensitivity: "public"
reference_files:
  - label: "Product battle cards"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx#product-battle-cards"
  - label: "Competitive battle cards"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx#competitive-battle-cards"
video_sections_as_tabs: true
video_sections_tabs_aria_label: "Battle-card library"
video_sections:
  - heading: "Product Battle Cards"
    intro: "Use these as quick visual refreshers before calls. Open the approved SharePoint source when you need to forward or cite externally."
    image_library:
      - title: "5G Wireless Backup"
        pages:
          - src: "assets/battle-cards/product/battlecard---5g-wireless-backup/page-001.png"
      - title: "Ethernet Battle Card"
        pages:
          - src: "assets/battle-cards/product/ethernet-battle-card-final/page-001.png"
          - src: "assets/battle-cards/product/ethernet-battle-card-final/page-002.png"
      - title: "Cloud Connect Battle Card"
        pages:
          - src: "assets/battle-cards/product/gpc-cloud-connect-battle-card-050321/page-001.png"
          - src: "assets/battle-cards/product/gpc-cloud-connect-battle-card-050321/page-002.png"
      - title: "Managed Wi-Fi Battle Card"
        pages:
          - src: "assets/battle-cards/product/gpc-managed-wifi-battle-card/page-001.png"
          - src: "assets/battle-cards/product/gpc-managed-wifi-battle-card/page-002.png"
      - title: "SD-WAN Battle Card"
        pages:
          - src: "assets/battle-cards/product/gpc-sd-wan-battle-card-final/page-001.png"
          - src: "assets/battle-cards/product/gpc-sd-wan-battle-card-final/page-002.png"
      - title: "Managed Firewall Battle Card"
        pages:
          - src: "assets/battle-cards/product/managed-firewall-battlecard-final/page-001.png"
  - heading: "Competitor Battle Cards"
    intro: "Start with discovery, then use the card that matches the customer’s stated alternative or objection."
    image_library:
      - title: "Fiber vs Starlink"
        pages:
          - src: "assets/battle-cards/competitive/fiber-vs-starlink-battlecard/page-001.png"
          - src: "assets/battle-cards/competitive/fiber-vs-starlink-battlecard/page-002.png"
          - src: "assets/battle-cards/competitive/fiber-vs-starlink-battlecard/page-003.png"
          - src: "assets/battle-cards/competitive/fiber-vs-starlink-battlecard/page-004.png"
          - src: "assets/battle-cards/competitive/fiber-vs-starlink-battlecard/page-005.png"
          - src: "assets/battle-cards/competitive/fiber-vs-starlink-battlecard/page-006.png"
          - src: "assets/battle-cards/competitive/fiber-vs-starlink-battlecard/page-007.png"
          - src: "assets/battle-cards/competitive/fiber-vs-starlink-battlecard/page-008.png"
      - title: "Omaha Metro Competitive Battle Card"
        pages:
          - src: "assets/battle-cards/competitive/omaha-metro-competitive-battle-card-v3/page-001.png"
          - src: "assets/battle-cards/competitive/omaha-metro-competitive-battle-card-v3/page-002.png"
          - src: "assets/battle-cards/competitive/omaha-metro-competitive-battle-card-v3/page-003.png"
          - src: "assets/battle-cards/competitive/omaha-metro-competitive-battle-card-v3/page-004.png"
          - src: "assets/battle-cards/competitive/omaha-metro-competitive-battle-card-v3/page-005.png"
      - title: "UC Competitor Battle Card"
        pages:
          - src: "assets/battle-cards/competitive/uc-competitor-battle-card-031226/page-001.png"
discovery_questions:
  - "Who answers the phone if your primary circuit goes down, and how quickly can they respond?"
  - "Which applications break first if upload latency spikes or a circuit drops? What does an hour of downtime cost the business?"
  - "How are your locations connected today—VPN over shared broadband, MPLS, or Ethernet? When does that contract expire?"
  - "Are you running SaaS applications like O365, Salesforce, or cloud ERP? Where are those workloads hosted?"
  - "What does your current vendor do when there's a service issue—do they have local field technicians or is everything remote?"
five_minute_summary: |
  - **The Framework:** Start with the customer's sites, apps, and outage risk. Then map the competitor's pitch to sourced GPC proof: local support, NOC monitoring, redundancy, symmetrical fiber, or service consolidation.
  - **Avoid Landmines:** Do not use personal attacks, absolutes, or numbers from memory. Use the approved battle cards and keep claims tied to what the source actually says.
  - **Handling Objections:** Against satellite or price pressure, move the conversation from headline speed or monthly cost to uptime, latency, support, and what downtime does to the business.
  - **Using Tech Cards:** Lead with the pain, ask the qualifying questions on the card, and only then position the matching GPC solution.

knowledge_checks:
  - question: "Before positioning against a competitor's strength, what should you do first?"
    options:
      - "Run discovery on applications, sites, and outcomes so claims map to their stated needs"
      - "Lead with your best battle-card stat regardless of their stack"
      - "Assume their network is always inferior to yours"
    correct_index: 0
    explanation: "Run discovery on apps, sites, and outage risk first, then tie battle-card proof to what the customer already told you."

  - question: "Which behavior is a stated landmine to avoid?"
    options:
      - "Acknowledging where a competitor is legitimately strong"
      - "Quoting battle-card numbers from memory or turning them into guarantees"
      - "Using qualifying questions to earn a technical conversation"
    correct_index: 1
    explanation: "Use the approved cards and source context. A battle-card number is not the same thing as a contractual guarantee."

  - question: "What should competitor → GPC responses pair for each angle?"
    options:
      - "Only a slogan and no customer specifics"
      - "Personal attacks on the competitor's executives"
      - "Their pitch, the customer’s business risk, and proof GPC can support"
    correct_index: 2
    explanation: "Pair the competitor's pitch with the customer's business risk, then use sourced GPC proof instead of a tagline."

  - question: "Against fiber vs LEO satellite interest, what reframe beats a speed-test-only debate?"
    options:
      - "Monthly sticker price as the only decision factor"
      - "Reliability, latency, weather/obstruction risk, and operational support for business apps"
      - "Ignore their interest and refuse to discuss satellite"
    correct_index: 1
    explanation: "Reframe speed-test talk around uptime, latency, weather or obstruction risk, and what downtime does to the business."

  - question: "What does the framework say about personal disparagement of competitors?"
    options:
      - "Encourage it whenever you are behind on price"
      - "Avoid it—stay factual and customer-centric"
      - "Require it in every competitive meeting"
    correct_index: 1
    explanation: "Personal attacks are a landmine. Stay factual, customer-centric, and tied to the buyer's actual operating risk."

  - question: "For SD-WAN battle-card use, what must you verify before citing awards or ratings?"
    options:
      - "Nothing—repeat any headline from memory"
      - "Year and scope—confirm accuracy before external claims"
      - "Only the competitor's stock price"
    correct_index: 1
    explanation: "Confirm year and scope on the battle card before you cite awards, ratings, or numbers externally."

  - question: "What dimensions help compare operators during metro/local competition beyond headline price?"
    options:
      - "Headline monthly price and advertised download speed only"
      - "Consumer review themes that do not map to the buyer’s business sites"
      - "Install quality, support model, redundancy, fiber depth vs pocketed coverage, and rate stability"
    correct_index: 2
    explanation: "Compare install quality, support model, redundancy, fiber depth, and rate stability, not logo size or consumer-review noise."

  - question: "Per the Omaha Metro battle card, what is one structural weakness of Allo that GPC reps can lean into?"
    options:
      - "Allo is always the lowest-cost provider, so GPC should avoid the topic."
      - "Allo owns every route end to end, so support model is the only fair angle."
      - "Allo does not fully own their network — they lease fiber from GPC and others."
    correct_index: 2
    explanation: "Use this once in a head-to-head Allo conversation as a supporting line — never as your opening move. The factoid lands as gloating if it's how you open."
    source: "Omaha Metro competitive battle card v3.pdf (Allo section)"

  - question: "On a Managed Firewall opportunity, the customer says 'we already have someone doing this.' Per the Managed Firewall battle card, what's the right framing to lead with?"
    options:
      - "Aggressively detail every feature GPC's firewall has that the incumbent's doesn't."
      - "Service consolidation — fewer vendors, single bill, single point of contact, and SOC-backed monitoring. Don't try to win 'we're better at firewalls than your MSP.'"
      - "Drop the topic — if they already have a firewall vendor, the deal is dead."
    correct_index: 1
    explanation: "The Managed Firewall battle card explicitly names 'most customers already have firewalls from someone' as Challenge #1. The defensible pivot is operational simplicity, not feature combat."
    source: "Managed Firewall Battlecard FINAL.pdf (Challenge #1)"

  - question: "Per the Omaha Metro battle card, what is the T-Mobile / Metronet acquisition nuance reps should be ready to surface?"
    options:
      - "T-Mobile bought Metronet and rebranded the entire business under T-Mobile Fiber."
      - "T-Mobile bought Metronet; residential goes under T-Mobile brand, but B2B remains Metronet — 'could mean instability as the business side is still branded Metronet.'"
      - "T-Mobile sold Metronet to a private equity firm and exited the market."
    correct_index: 1
    explanation: "The split-brand outcome (residential → T-Mobile; B2B → Metronet) is the explicit nuance the card flags. Reps who don't know this miss the 'why is your B2B sales rep still saying Metronet?' opening."
    source: "Omaha Metro competitive battle card v3.pdf (Metronet section)"

scenarios:
  - title: "Starlink vs fiber at a rural clinic"
    situation: |
      Prospect loves **Starlink**; wants lowest cost for VPN + telehealth; asks for speed-test proof only.
    choices:
      - label: "Dismiss satellite and refuse to discuss their interest."
        feedback: "Acknowledge coverage; reframe to latency, weather, SLAs—fiber vs LEO section."

      - label: "Acknowledge LEO coverage; qualify latency-sensitive apps and weather risk; position fiber for predictable performance and local support."
        feedback: "Correct."

      - label: "Quote battle-card latency numbers as guaranteed contractual SLAs."
        feedback: "Confirm stats/scope before external claims—landmine."

  - title: "Competitor drops a low price in a multi-site deal"
    situation: |
      National entrant undercuts on headline price. CFO asks why pay more for GPC—in the room.
    choices:
      - label: "Attack the competitor's CEO and call their network unreliable."
        feedback: "Landmine: no personal disparagement."

      - label: "Tie to fit, reliability, local support, redundancy, TCO of downtime—only proof that matches discovery."
        feedback: "Correct."

      - label: "Match their price verbally to keep the meeting moving."
        feedback: "No improvised commercial commitments—reframe value; use channels."
---

## Positioning snapshot

::: elevator [Elevator Pitch]
If you're tired of national carriers treating you like an account number when things break, that's where we step in. We bring Midwest fiber, local support, and 24/7 NOC monitoring to the conversation. We do not need to win every price comparison; we need to prove why staying online matters.
:::


---

## Discovery Galaxy

<div class="mt-4 rounded-2xl border border-emerald-200/80 overflow-hidden bg-slate-50 shadow-sm">
  <iframe
    src="games/galactica-1/index.html?embed=1&module=competitive-positioning"
    title="Discovery Galaxy"
    loading="lazy"
    sandbox="allow-scripts allow-same-origin"
    style="width: 100%; border: 0; display: block; aspect-ratio: 16 / 10.5; height: auto; max-height: min(88vh, 44rem); background: #f1f5f9;"
  ></iframe>
</div>

---

## Objection Handling

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

::: flip ["The national carrier is cheaper."]
Tie to impact: cost of an hour down, support model, redundancy, and contract stability. Do not make pricing promises in the room.
:::

::: flip ["Starlink/satellite is good enough."]
Acknowledge coverage; pivot to latency, weather and obstruction risk, support, and predictable symmetrical paths for VoIP, POS, cloud, and telehealth.
:::

::: flip ["We already ran a speed test—your fiber looks the same."]
Speed tests measure a moment; position reliability, jitter, upload symmetry, and NOC response for business apps.
:::

::: flip ["I need to see the battle-card numbers."]
Share collateral through approved channels; verify year/scope before any external citation.
:::

::: flip ["Fiber is fiber—latency is the same everywhere."]
Differentiate last mile, routing, peering, and repair SLAs—map to **their** apps and what an hour of downtime costs, not generic speed claims.

:::

</div>

---

## How We Win - by competitor (field reference)

**Truth lives on the battle-card tabs above.** Use these quick hits to choose the right card, not as a replacement for it.

### National carriers

- **M&A (Cox / Charter / Spectrum):** Stability and continuity—**not** fear, uncertainty, and doubt (FUD) about the acquisition.
- **Scale:** Symmetrical fiber and local support vs. coax or mega-carrier story—then tie to **their** downtime and latency risk.

### Omaha metro

- **FiberFirst:** You = local execution, speed to build, tenure.
- **Metronet (T‑Mobile):** Residential vs B2B brand split; **buried fiber vs aerial**.
- **Allo:** Don’t fully own network (incl. lease from GPC)—**supporting line, never opener**.
- **Google Fiber:** Retail-style packaging vs. **your** business-grade stack + local support.

### Reference line (Omaha Metro)

**“We maintain reference customers across multiple verticals.”** Line up **1–2 named refs** in their vertical first before you say it in the room.

### Managed Firewall

They already have someone (Challenge #1). Sell **consolidation**: Internet, voice, SD-WAN, firewall, and network security on one bill through one provider.

### 5G Wireless Backup

Lead with **automatic failover**, critical-app prioritization, NOC monitoring, and best-signal provider selection across Verizon/AT&T-backed service. Card skews **small sites**; confirm fit before positioning it as a backup answer.
<!-- prettier-ignore-end -->

---

<a id="gpc-sales-sharepoint-sales-sharepoint-hub"></a>

# GPC Sales SharePoint (`sales-sharepoint-hub`)

<!-- prettier-ignore-start -->
---
id: "sales-sharepoint-hub"
title: "GPC Sales SharePoint"
summary: "Navigate gpcSales SharePoint: Sales home, Sales Resources, M&Ps, Sales Processes, and Rate Cards."
sensitivity: "internal"
reference_files:
  - label: "GPC Sales SharePoint"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/gpcSales"
five_minute_summary: |
  - **Sales home:** Main landing page — leadership updates, previous month results, quick links into the rest of the site.
  - **Sales Resources:** Collateral hub — battle cards, product sheets, competitive assets, and deep links by product family (long scroll).
  - **M&Ps:** Methods & Procedures — operational sales playbooks, process docs, and how-to guides for reps.
  - **Sales Processes:** Sales Process document library — customer forms, process guidelines, and motion-specific folders (ABM, OBR, etc.).
  - **Rate Cards:** Pricing and rate-card library — verify market-specific rates here before quoting.
video_sections_presentation: scroll_tour
video_sections_continuous: true
video_sections_tabs_aria_label: "SharePoint guided tour"
video_sections:
  - heading: "Sales home"
    intro: "Main landing page — leadership updates, previous month results, quick links into the rest of the site."
    scroll_tour:
      - heading: "Quick links"
        commentary: "Start on the Sales home page. The quick-link strip at the top is the fastest way into high-traffic folders without digging through navigation."
        src: "assets/sharepoint-hub/00-quick-links-tools-to-support-every-deal-00.png"
      - heading: "Monthly sales results"
        commentary: "Leadership posts previous-month results here. Scan this block at the start of the week so you know what numbers and themes leadership is tracking."
        src: "assets/sharepoint-hub/00-monthly-sales-results-01.png"
      - heading: "Sales events"
        commentary: "Sales events, deadlines, and field announcements show up on the home page — check here so you do not miss a SPIFF window or enablement session."
        src: "assets/sharepoint-hub/00-sales-events-02.png"
  - heading: "Sales Resources"
    intro: "Collateral hub — battle cards, product sheets, competitive assets, and deep links by product family (long scroll)."
    scroll_tour:
      - heading: "Quick links"
        commentary: "The blue quick-link tiles are the hub’s front door — jump straight to battle cards, collateral libraries, templates, and other tools reps use every day."
        src: "assets/sharepoint-hub/01-quick-links-tools-to-support-every-deal-00.png"
      - heading: "Proposal Engine"
        commentary: "Proposal Engine builds customer-ready proposals from approved content. Use this instead of rebuilding decks or copying old attachments."
        src: "assets/sharepoint-hub/01-proposal-engine-01.png"
      - heading: "Product Collateral"
        commentary: "Product Collateral is the document library for datasheets, one-pagers, and approved PDFs. Pull from here before sending anything external."
        src: "assets/sharepoint-hub/01-product-collateral-02.png"
      - heading: "Battle Cards"
        commentary: "Battle cards cover both product talk tracks and competitive responses. Review the relevant card before customer calls or RFP work."
        src: "assets/sharepoint-hub/01-battle-cards-03.png"
      - heading: "UC Demos"
        commentary: "UC Demos holds recorded walkthroughs and demo assets for voice and collaboration products — useful when you need a quick refresher."
        src: "assets/sharepoint-hub/01-uc-demos-04.png"
      - heading: "ZoomInfo Resources"
        commentary: "ZoomInfo Resources centralizes prospecting and account-intelligence links tied to your GPC workflow."
        src: "assets/sharepoint-hub/01-zoominfo-resources-05.png"
      - heading: "Product Training for Sales"
        commentary: "Product Training for Sales is the internal enablement shelf — videos and guides meant for reps, not customer-facing send-alongs."
        src: "assets/sharepoint-hub/01-product-training-for-sales-06.png"
  - heading: "M&Ps"
    intro: "Methods & Procedures — operational sales playbooks, process docs, and how-to guides for reps."
    scroll_tour:
      - heading: "Quick links"
        commentary: "Methods & Procedures pages also expose quick links when present — use them the same way as on Sales Resources."
        src: "assets/sharepoint-hub/02-quick-links-tools-to-support-every-deal-00.png"
      - heading: "M&Ps overview"
        commentary: "The M&Ps landing page links into Sales Processes, Rules of Engagement, and Training Resources — start here for operational how-tos."
        src: "assets/sharepoint-hub/02-m-ps-overview-01.png"
  - heading: "Sales Processes"
    intro: "Sales Process document library — customer forms, process guidelines, and motion-specific folders (ABM, OBR, etc.)."
    scroll_tour:
      - heading: "Sales Process library"
        commentary: "The Sales Process library is the repository for approved process documents, customer forms, and guidelines. Always pull from here — not local copies."
        src: "assets/sharepoint-hub/03-sales-process-library-00.png"
  - heading: "Rate Cards"
    intro: "Pricing and rate-card library — verify market-specific rates here before quoting."
    scroll_tour:
      - heading: "Rate Cards overview"
        commentary: "Rate Cards is the pricing authority on gpcSales. Open the live page whenever you quote — screenshots here are orientation only."
        src: "assets/sharepoint-hub/04-rate-cards-overview-00.png"
      - heading: "Retail Rate Cards"
        commentary: "Retail rate cards cover customer-facing pricing by market and product. Match the customer’s market before you build a solution or proposal."
        src: "assets/sharepoint-hub/04-retail-rate-cards-01.png"
knowledge_checks:
  - question: "Where should a rep look first for leadership results and monthly context?"
    options:
      - "Sales home on the gpcSales site"
      - "A personal email thread"
      - "The oldest saved PDF on their laptop"
    correct_index: 0
    explanation: "The Sales home page carries current leadership updates including previous month results."
  - question: "Which area is the best starting point for battle cards and product collateral?"
    options:
      - "Sales Resources"
      - "Rate Cards"
      - "M&Ps only"
    correct_index: 0
    explanation: "Sales Resources is the collateral hub; Rate Cards focus on pricing."
  - question: "Before quoting pricing, where should you verify rates?"
    options:
      - "Rate Cards (and approved quote tools)"
      - "Battle cards only"
      - "Generic industry averages"
    correct_index: 0
    explanation: "Rate Cards and the formal quote path are the pricing authority."
---


## Reference discipline

- Treat SharePoint as the **system of record** for customer-facing numbers and PDFs.
- Screenshots in this module are **orientation aids** — confirm against live pages before external use.
- When in doubt, ask Sales Support or your manager before improvising from an old deck.
<!-- prettier-ignore-end -->

---

<a id="zoominfo-zoominfo-for-sales"></a>

# ZoomInfo (`zoominfo-for-sales`)

<!-- prettier-ignore-start -->
---
id: "zoominfo-for-sales"
title: "ZoomInfo"
summary: "Territory lists. Intent signals. RFP scoops. Clean exports."
sensitivity: "internal"
sales_trio_guidelines_only: true
reference_files:
  - label: "ZoomInfo Resources — gpcSales library (all job aids)"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/gpcSales/ZoomInfo%20Resources/Forms/AllItems.aspx"
  - label: "ZoomInfo login"
    sharepoint_url: "https://app.zoominfo.com/#/apps/home-page"
five_minute_flow:
  aria_label: "ZoomInfo workflow order"
  steps:
    - title: "Setup"
      caption: "Exports + email alerts"
    - title: "Lists"
      caption: "CSV + target market"
    - title: "Advanced Search"
      caption: "Geo, industry, tech"
    - title: "Signals"
      caption: "Intent + WebSights"
    - title: "Scoops"
      caption: "RFP alerts"
video_sections_as_tabs: true
video_sections_tabs_aria_label: "ZoomInfo job aids"
video_sections:
  - heading: "Setup"
    intro: "Step-by-step guides (offline copies from SharePoint). Open the live PDF from the job aid index if you need the newest version."
    image_library:
      - title: "Personalizing Exported Data In ZoomInfo"
        pages:
          - src: "assets/zoominfo-training/personalizing-exported-data-in-zoominfo/page-001.png"
          - src: "assets/zoominfo-training/personalizing-exported-data-in-zoominfo/page-002.png"
          - src: "assets/zoominfo-training/personalizing-exported-data-in-zoominfo/page-003.png"
          - src: "assets/zoominfo-training/personalizing-exported-data-in-zoominfo/page-004.png"
      - title: "Updating Email Alerts In ZoomInfo"
        pages:
          - src: "assets/zoominfo-training/updating-email-alerts-in-zoominfo/page-001.png"
          - src: "assets/zoominfo-training/updating-email-alerts-in-zoominfo/page-002.png"
          - src: "assets/zoominfo-training/updating-email-alerts-in-zoominfo/page-003.png"
          - src: "assets/zoominfo-training/updating-email-alerts-in-zoominfo/page-004.png"
  - heading: "Lists & uploads"
    intro: "Step-by-step guides (offline copies from SharePoint). Open the live PDF from the job aid index if you need the newest version."
    image_library:
      - title: "Uploading CSV Lists To ZoomInfo"
        pages:
          - src: "assets/zoominfo-training/uploading-csv-lists-to-zoominfo/page-001.png"
          - src: "assets/zoominfo-training/uploading-csv-lists-to-zoominfo/page-002.png"
          - src: "assets/zoominfo-training/uploading-csv-lists-to-zoominfo/page-003.png"
          - src: "assets/zoominfo-training/uploading-csv-lists-to-zoominfo/page-004.png"
          - src: "assets/zoominfo-training/uploading-csv-lists-to-zoominfo/page-005.png"
      - title: "Upload A List And View Contacts 022626"
        pages:
          - src: "assets/zoominfo-training/upload-a-list-and-view-contacts-022626/page-001.png"
          - src: "assets/zoominfo-training/upload-a-list-and-view-contacts-022626/page-002.png"
          - src: "assets/zoominfo-training/upload-a-list-and-view-contacts-022626/page-003.png"
          - src: "assets/zoominfo-training/upload-a-list-and-view-contacts-022626/page-004.png"
          - src: "assets/zoominfo-training/upload-a-list-and-view-contacts-022626/page-005.png"
          - src: "assets/zoominfo-training/upload-a-list-and-view-contacts-022626/page-006.png"
          - src: "assets/zoominfo-training/upload-a-list-and-view-contacts-022626/page-007.png"
      - title: "Uploading Target Account List"
        pages:
          - src: "assets/zoominfo-training/uploading-target-account-list/page-001.png"
          - src: "assets/zoominfo-training/uploading-target-account-list/page-002.png"
          - src: "assets/zoominfo-training/uploading-target-account-list/page-003.png"
  - heading: "Advanced Search"
    intro: "Step-by-step guides (offline copies from SharePoint). Open the live PDF from the job aid index if you need the newest version."
    image_library:
      - title: "Searching For Companies Using Advanced Search"
        pages:
          - src: "assets/zoominfo-training/searching-for-companies-using-advanced-search/page-001.png"
          - src: "assets/zoominfo-training/searching-for-companies-using-advanced-search/page-002.png"
          - src: "assets/zoominfo-training/searching-for-companies-using-advanced-search/page-003.png"
          - src: "assets/zoominfo-training/searching-for-companies-using-advanced-search/page-004.png"
          - src: "assets/zoominfo-training/searching-for-companies-using-advanced-search/page-005.png"
          - src: "assets/zoominfo-training/searching-for-companies-using-advanced-search/page-006.png"
      - title: "Searching For Companies Using Specific Technologies"
        pages:
          - src: "assets/zoominfo-training/searching-for-companies-using-specific-technologies/page-001.png"
          - src: "assets/zoominfo-training/searching-for-companies-using-specific-technologies/page-002.png"
          - src: "assets/zoominfo-training/searching-for-companies-using-specific-technologies/page-003.png"
          - src: "assets/zoominfo-training/searching-for-companies-using-specific-technologies/page-004.png"
          - src: "assets/zoominfo-training/searching-for-companies-using-specific-technologies/page-005.png"
          - src: "assets/zoominfo-training/searching-for-companies-using-specific-technologies/page-006.png"
      - title: "Using Advanced Search To Identify Businesses On A Specific Street"
        pages:
          - src: "assets/zoominfo-training/using-advanced-search-to-identify-businesses-on-a-specific-street/page-001.png"
          - src: "assets/zoominfo-training/using-advanced-search-to-identify-businesses-on-a-specific-street/page-002.png"
          - src: "assets/zoominfo-training/using-advanced-search-to-identify-businesses-on-a-specific-street/page-003.png"
          - src: "assets/zoominfo-training/using-advanced-search-to-identify-businesses-on-a-specific-street/page-004.png"
      - title: "Using Advanced Search To Identify Businesses In A Specific Office Building"
        pages:
          - src: "assets/zoominfo-training/using-advanced-search-to-identify-businesses-in-a-specific-office-building/page-001.png"
          - src: "assets/zoominfo-training/using-advanced-search-to-identify-businesses-in-a-specific-office-building/page-002.png"
          - src: "assets/zoominfo-training/using-advanced-search-to-identify-businesses-in-a-specific-office-building/page-003.png"
          - src: "assets/zoominfo-training/using-advanced-search-to-identify-businesses-in-a-specific-office-building/page-004.png"
  - heading: "Signals"
    intro: "Step-by-step guides (offline copies from SharePoint). Open the live PDF from the job aid index if you need the newest version."
    image_library:
      - title: "Identifying UC Opportunities Using ZoomInfo Intent Signals"
        pages:
          - src: "assets/zoominfo-training/identifying-uc-opportunities-using-zoominfo-intent-signals/page-001.png"
          - src: "assets/zoominfo-training/identifying-uc-opportunities-using-zoominfo-intent-signals/page-002.png"
          - src: "assets/zoominfo-training/identifying-uc-opportunities-using-zoominfo-intent-signals/page-003.png"
          - src: "assets/zoominfo-training/identifying-uc-opportunities-using-zoominfo-intent-signals/page-004.png"
          - src: "assets/zoominfo-training/identifying-uc-opportunities-using-zoominfo-intent-signals/page-005.png"
          - src: "assets/zoominfo-training/identifying-uc-opportunities-using-zoominfo-intent-signals/page-006.png"
          - src: "assets/zoominfo-training/identifying-uc-opportunities-using-zoominfo-intent-signals/page-007.png"
      - title: "Identifying UC Opportunities Using ZoomInfo WebSights"
        pages:
          - src: "assets/zoominfo-training/identifying-uc-opportunities-using-zoominfo-websights/page-001.png"
          - src: "assets/zoominfo-training/identifying-uc-opportunities-using-zoominfo-websights/page-002.png"
          - src: "assets/zoominfo-training/identifying-uc-opportunities-using-zoominfo-websights/page-003.png"
          - src: "assets/zoominfo-training/identifying-uc-opportunities-using-zoominfo-websights/page-004.png"
          - src: "assets/zoominfo-training/identifying-uc-opportunities-using-zoominfo-websights/page-005.png"
          - src: "assets/zoominfo-training/identifying-uc-opportunities-using-zoominfo-websights/page-006.png"
          - src: "assets/zoominfo-training/identifying-uc-opportunities-using-zoominfo-websights/page-007.png"
      - title: "WebSights Filtering And Scrolling"
        pages:
          - src: "assets/zoominfo-training/websights-filtering-and-scrolling/page-001.png"
          - src: "assets/zoominfo-training/websights-filtering-and-scrolling/page-002.png"
          - src: "assets/zoominfo-training/websights-filtering-and-scrolling/page-003.png"
          - src: "assets/zoominfo-training/websights-filtering-and-scrolling/page-004.png"
          - src: "assets/zoominfo-training/websights-filtering-and-scrolling/page-005.png"
      - title: "Deleting And Resaving Intent Searches"
        pages:
          - src: "assets/zoominfo-training/deleting-and-resaving-intent-searches/page-001.png"
          - src: "assets/zoominfo-training/deleting-and-resaving-intent-searches/page-002.png"
          - src: "assets/zoominfo-training/deleting-and-resaving-intent-searches/page-003.png"
          - src: "assets/zoominfo-training/deleting-and-resaving-intent-searches/page-004.png"
          - src: "assets/zoominfo-training/deleting-and-resaving-intent-searches/page-005.png"
          - src: "assets/zoominfo-training/deleting-and-resaving-intent-searches/page-006.png"
          - src: "assets/zoominfo-training/deleting-and-resaving-intent-searches/page-007.png"
  - heading: "RFP Scoops"
    intro: "Step-by-step guides (offline copies from SharePoint). Open the live PDF from the job aid index if you need the newest version."
    image_library:
      - title: "Setting Up RFP Scoops Using Advanced Search"
        pages:
          - src: "assets/zoominfo-training/setting-up-rfp-scoops-using-advanced-search/page-001.png"
          - src: "assets/zoominfo-training/setting-up-rfp-scoops-using-advanced-search/page-002.png"
          - src: "assets/zoominfo-training/setting-up-rfp-scoops-using-advanced-search/page-003.png"
          - src: "assets/zoominfo-training/setting-up-rfp-scoops-using-advanced-search/page-004.png"
          - src: "assets/zoominfo-training/setting-up-rfp-scoops-using-advanced-search/page-005.png"
          - src: "assets/zoominfo-training/setting-up-rfp-scoops-using-advanced-search/page-006.png"
          - src: "assets/zoominfo-training/setting-up-rfp-scoops-using-advanced-search/page-007.png"
          - src: "assets/zoominfo-training/setting-up-rfp-scoops-using-advanced-search/page-008.png"
five_minute_summary: |
  - **ZoomInfo is a prospecting engine, not a CRM.** Use it to find accounts, spot buying signals, and build lists — then log real activity in **Salesforce** and follow **ROE** before you engage.
  - **Save every useful search.** Named **Save & Subscribe** searches (with alerts on) are how you keep territory work alive between call blocks — especially Intent, WebSights, Advanced Search, and RFP Scoops.
  - **Three motions reps use most:** (1) **Advanced Search** for geo/industry/tech lists, (2) **Intent + WebSights** for UC and product interest in your cities, (3) **Scoops** for RFP alerts in your patch.
  - **Lists matter twice:** upload CSVs to **Lists** for contact matching, and upload target markets under **Target Market Settings** so ZoomInfo knows your patch.
  - **Before you export:** personalize **Export to CSV** fields once in Settings so Salesforce imports stay clean. Tune **Email Alerts** to weekly if daily noise is drowning you out.
discovery_questions:
  - "Which cities and ZIP codes actually make up my patch — and do my saved ZoomInfo searches match that geography?"
  - "For UC motion: am I monitoring **Intent** (UCaaS/VoIP interest) and **WebSights** (visits to our unified-communications pages) in the same markets?"
  - "When a company hits my WebSights filter, which **pages** did they visit — and does that map to a product conversation I can tie to GPC?"
  - "For displacement: which legacy technologies (Avaya, etc.) should I filter for in **Advanced Search → Technologies** in my territory?"
  - "Before I export contacts, are my CSV columns mapped the way Salesforce expects — or will I create cleanup work for myself?"
  - "Do I have **RFP Scoops** saved for my states/ZIPs with IT, Operations, and Engineering departments included?"
knowledge_checks:
  - question: "You want automated alerts when companies in Elkhart, IN show interest in UCaaS. Which ZoomInfo area do you start in?"
    options:
      - "Advanced Search → Companies → Industry only"
      - "Signals → Intent, filter Telecom for UCaaS (and VoIP), set location, then Save & Subscribe"
      - "Lists → Upload CSV and wait for ZoomInfo to infer intent"
    correct_index: 1
    explanation: "The Intent Signals job aid walks through Signals → Intent, UCaaS under Telecom, location filter, and Save & Subscribe with alerts on."
    source: "Identifying UC Opportunities using ZoomInfo Intent Signals.pdf"

  - question: "You want to see which companies visited GPC's unified-communications web pages in Greensburg. What filter belongs in WebSights?"
    options:
      - "Industry = Healthcare only"
      - "Webpage URL includes business/unified-communications, plus city/state under Country, State or City"
      - "Scoops → Request for Proposal (RFP)"
    correct_index: 1
    explanation: "The WebSights UC guide filters by location and page URL (type unified → select business/unified-communications), then Save Search."
    source: "Identifying UC Opportunities Using ZoomInfo WebSights.pdf"

  - question: "You need weekly email when RFP-related scoops hit your Nebraska and Indiana territory. Where do you configure that?"
    options:
      - "Alerts → Email Alerts only (no search setup)"
      - "Advanced Search → Locations → Scoops → RFP topic → Save & Subscribe, include Scoops in notifications"
      - "Personal Settings → Export to CSV"
    correct_index: 1
    explanation: "The RFP Scoops guide uses Advanced Search, Locations, Scoops filters, RFP topic, relevant departments, then Save & Subscribe with Scoops notifications."
    source: "Setting Up RFP Scoops using Advanced Search.pdf"

  - question: "You are hunting Avaya-heavy accounts for a UC displacement conversation. Which Advanced Search path matches the job aid?"
    options:
      - "Intent → Saved Intent Searches only"
      - "Advanced Search → Locations → Technologies → search Avaya IP Office, Avaya Aura, Avaya Definity → Add Technologies"
      - "Target Market Settings → Upload list only"
    correct_index: 1
    explanation: "The Specific Technologies guide filters by location, opens Technologies, searches Avaya platforms, and adds them to the criteria."
    source: "Searching for Companies Using Specific Technologies.pdf"

  - question: "Exports keep landing in Salesforce with the wrong columns. What is the correct one-time fix in ZoomInfo?"
    options:
      - "Re-export until the columns look right"
      - "Initials → Settings → Customization → Export to CSV (and Company Search if needed) → Save"
      - "Delete the list and re-upload the CSV"
    correct_index: 1
    explanation: "Personalizing Exported Data walks through Settings → Customization → Export to CSV and optional Company Search customization."
    source: "Personalizing Exported Data in ZoomInfo.pdf"

  - question: "Daily ZoomInfo emails are too noisy. What does the email-alerts job aid recommend?"
    options:
      - "Turn off all alerts permanently"
      - "Alerts → Email Alerts → set Frequency to Weekly (hard-refresh the browser if changes do not stick)"
      - "Create a new ZoomInfo user account"
    correct_index: 1
    explanation: "Updating Email Alerts covers Alerts → Email Alerts → Weekly frequency, plus Cmd+Shift+R if the UI does not reflect the change."
    source: "Updating Email Alerts in ZoomInfo.pdf"

  - question: "You changed the city on an Intent search and the old results keep showing. What does the Intent maintenance guide say to do?"
    options:
      - "Delete the saved Intent search, rebuild location, Save & Subscribe with alerts on, and name it clearly"
      - "Export the old search to CSV and filter in Excel"
      - "Open a second ZoomInfo tab and ignore the saved search"
    correct_index: 0
    explanation: "Deleting and Resaving Intent Searches covers delete → rebuild location → Save & Subscribe → turn on alert notifications."
    source: "Deleting and Resaving Intent Searches.pdf"

  - question: "You uploaded a rep-provided CSV of target accounts. What is the difference between Lists upload and Target Market Settings upload?"
    options:
      - "They are the same screen with different names"
      - "Lists upload matches contacts for list work; Target Market Settings upload defines your patch for ZoomInfo market filtering"
      - "Target Market Settings is only for Marketing, not Sales"
    correct_index: 1
    explanation: "Uploading CSV Lists and Uploading Target Account List are separate flows — Lists for contact/list work, Target Market Settings for market definition."
    source: "Uploading CSV Lists to ZoomInfo.pdf; Uploading Target Account List.pdf"

scenarios:
  - title: "The firehose WebSights list"
    situation: |
      A rep saves a WebSights search for their entire state with **no page URL filter**. They get hundreds of companies and assume every hit is a UC lead.
    choices:
      - label: "Call every company on the list this week — volume wins."
        feedback: "Unfiltered WebSights is a starting point, not a dial list. Without page-level filters you cannot tie visits to a product story."
      - label: "Add page URL filters (e.g., unified-communications paths), tighten geography, save the search, and prioritize companies with repeated relevant visits."
        feedback: "**Good.** That matches the WebSights and UC WebSights job aids — filter, apply, save, revisit via My Searches."
      - label: "Turn off WebSights alerts and go back to cold calling only."
        feedback: "Alerts are useful when the search criteria are tight. Fix the filters before you mute the signal."

  - title: "The messy export"
    situation: |
      A rep exports 200 contacts from ZoomInfo into Salesforce. Ops sends the export back because phone numbers and titles landed in the wrong fields.
    choices:
      - label: "Fix it once in Settings → Customization → Export to CSV before the next export."
        feedback: "**Good.** Personalize export columns once, then re-export — the Personalizing Exported Data guide exists for exactly this."
      - label: "Manually re-key 200 records — it is faster than reading a job aid."
        feedback: "Manual re-keying is the expensive path. Five minutes in Export settings saves hours of cleanup."
      - label: "Ask Salesforce Admin to change field mappings to match whatever ZoomInfo exports today."
        feedback: "Salesforce mapping is not the first fix — ZoomInfo lets reps standardize export columns on the way out."

  - title: "RFP alert in the wrong tab"
    situation: |
      A rep wants RFP scoops for their ZIP codes but saved a **Companies-only** Advanced Search with industry filters. Nothing RFP-related shows up in alerts.
    choices:
      - label: "Switch to Advanced Search → Scoops, add RFP topic, set departments (IT, Operations, Engineering), Save & Subscribe with Scoops in notifications."
        feedback: "**Good.** RFP automation lives under Scoops, not a generic company industry search."
      - label: "Keep the company search and refresh the browser once a day."
        feedback: "Industry company searches and RFP Scoops are different objects in ZoomInfo — the Scoops tab is required."
      - label: "Post in chat asking if anyone else sees RFP alerts — maybe ZoomInfo is broken."
        feedback: "Check search type first. The RFP Scoops job aid is the authoritative setup path."

---

## Overview

ZoomInfo helps GPC reps **find the right accounts**, **spot timing signals**, and **build territory lists** — faster than manual research. It does **not** replace Salesforce for ownership, activity, or ROE compliance.

Treat ZoomInfo as four connected jobs:

1. **Setup** — exports and alerts configured once so daily use stays frictionless.
2. **Lists** — CSV uploads and target-market definition so your patch is explicit in the tool.
3. **Advanced Search** — geo, industry, technology, street, and building-level company discovery.
4. **Signals & Scoops** — Intent, WebSights, and RFP alerts that tell you *when* to reach out.

Video training (CoPilot sessions) lives on **Sales Resources** on SharePoint. This module covers the **written job aids** in the ZoomInfo Resources library.

## Key Guidelines

### Setup (do once)

- **Personalize exports:** Profile (initials) → **Settings** → **Customization** → **Export to CSV**. Set contact fields you need for Salesforce. Use **Company Search** customization if company columns matter too. Save.
- **Tune email alerts:** **Alerts** → **Email Alerts** → set **Frequency** (weekly is often enough). If the UI does not stick, hard-refresh (**Cmd+Shift+R** on Mac).

### Lists and target market

- **Upload a prospecting list:** **Lists** → **Upload Lists** → **Upload CSV** → map columns to ZoomInfo fields → **Submit** → **Open List** → **Open in Contact Search** when you need to work contacts.
- **Define your patch:** **Target Market Settings** → **Edit settings** → **Upload list** → **Upload CSV**. Use this when ZoomInfo should treat a file as your target market, not just a one-off list.

### Advanced Search — territory prospecting

- **City + industry lists:** **Advanced Search** → **Locations** (city/state or ZIP) → **Companies** → **Industry** → **Save & Subscribe** with a clear name (example: *Elkhart IN Healthcare Companies*) and notification frequency.
- **Technology displacement:** **Advanced Search** → **Locations** → **Technologies** → search platforms (job aid example: **Avaya IP Office**, **Avaya Aura**, **Avaya Definity**) → **Add Technologies**.
- **Street-level prospecting:** **Locations** → city, then **Street** (e.g., *Regency Pkwy*) → **Companies** for firms on that street.
- **Multi-tenant / building prospecting:** **Locations** → city, then **Street** with the **full building address** → **Companies** for tenants in that building.

### Signals — timing

- **UC Intent:** **Signals** → **Intent** → under **Telecom**, select **UCaaS** (job aid: keep **VoIP** selected too) → **Location** → **Save & Subscribe** with alerts on. Reopen via **Open Search** → **Saved Intent Searches**.
- **UC WebSights:** **Signals** → **WebSights** → filter **Country, State or City** → **Webpage(s) URL** → type *unified* → select **business/unified-communications** → **Apply Filters** → **Save Search**.
- **General WebSights review:** Filter left panel → **Apply Filters** after each change → click **Unique Visits** counts to see pages a company viewed → use arrow buttons to walk the list.

### Scoops — RFP automation

- **Advanced Search** → **Locations** (territory) → **Scoops** → **More scoops filters** → topic **Request for Proposal (RFP)** → departments such as **Information Technology**, **Operations**, **Engineering and Technical** → **Save & Subscribe** with a territory-clear name (example: *NE and IN RFP Scoops*) → include **Scoops** in notifications and set frequency.

### Maintain saved searches

- When geography or product focus changes, **delete and resave** Intent searches rather than stacking filters on a stale saved search. Turn **alert notifications** on when you resave.

## Common Landmines

::: flip ["The static Intent search"]
You moved territories but kept last year's Intent search. **Delete and resave** with the new location, clear naming, and alerts on — or you will chase intent in the wrong cities.
:::

::: flip ["WebSights without a page filter"]
State-wide WebSights with no URL filter produces noise, not UC pipeline. Filter to relevant **business/** pages (UC job aid: **business/unified-communications**).
:::

::: flip ["Export column chaos"]
Fix exports in **Settings → Customization** once. Do not make Salesforce absorb random CSV shapes every Friday.
:::

::: flip ["Lists vs Target Market confusion"]
Uploading the same CSV to **Lists** and **Target Market Settings** are different outcomes. Lists = work the contacts. Target Market = tell ZoomInfo your patch.
:::

::: flip ["Scoops saved as a company search"]
RFP automation requires the **Scoops** tab and RFP topic filters — a generic industry company search will not produce scoop alerts.
:::

::: flip ["Forgotten Save & Subscribe"]
A brilliant filter you never saved is a one-time stunt. **Save & Subscribe** with a name future-you will recognize.
:::

## Job aid index [deep]

Use the SharePoint library for screenshots and click-by-click steps. Each guide below maps to a PDF in **ZoomInfo Resources**.

| Topic | Job aid |
| --- | --- |
| Export columns | [Personalizing Exported Data in ZoomInfo](https://gpcom.sharepoint.com/sites/gpcSales/ZoomInfo%20Resources/Personalizing%20Exported%20Data%20in%20ZoomInfo.pdf) |
| Email alert frequency | [Updating Email Alerts in ZoomInfo](https://gpcom.sharepoint.com/sites/gpcSales/ZoomInfo%20Resources/Updating%20Email%20Alerts%20in%20ZoomInfo.pdf) |
| CSV list upload | [Uploading CSV Lists to ZoomInfo](https://gpcom.sharepoint.com/sites/gpcSales/ZoomInfo%20Resources/Uploading%20CSV%20Lists%20to%20ZoomInfo.pdf) |
| List upload + contact search | [Upload a List and View Contacts](https://gpcom.sharepoint.com/sites/gpcSales/ZoomInfo%20Resources/Upload%20a%20List%20and%20View%20Contacts%20022626.pdf) |
| Target market upload | [Uploading Target Account List](https://gpcom.sharepoint.com/sites/gpcSales/ZoomInfo%20Resources/Uploading%20Target%20Account%20List.pdf) |
| Intent search maintenance | [Deleting and Resaving Intent Searches](https://gpcom.sharepoint.com/sites/gpcSales/ZoomInfo%20Resources/Deleting%20and%20Resaving%20Intent%20Searches.pdf) |
| Advanced Search basics | [Searching for Companies Using Advanced Search](https://gpcom.sharepoint.com/sites/gpcSales/ZoomInfo%20Resources/Searching%20for%20Companies%20Using%20Advanced%20Search.pdf) |
| Technology filter | [Searching for Companies Using Specific Technologies](https://gpcom.sharepoint.com/sites/gpcSales/ZoomInfo%20Resources/Searching%20for%20Companies%20Using%20Specific%20Technologies.pdf) |
| Street filter | [Businesses on a Specific Street](https://gpcom.sharepoint.com/sites/gpcSales/ZoomInfo%20Resources/Using%20Advanced%20Search%20to%20Identify%20Businesses%20on%20a%20Specific%20Street.pdf) |
| Building filter | [Businesses in a Specific Office Building](https://gpcom.sharepoint.com/sites/gpcSales/ZoomInfo%20Resources/Using%20Advanced%20Search%20to%20Identify%20Businesses%20in%20a%20Specific%20Office%20Building.pdf) |
| UC Intent | [Identifying UC Opportunities using Intent Signals](https://gpcom.sharepoint.com/sites/gpcSales/ZoomInfo%20Resources/Identifying%20UC%20Opportunities%20using%20ZoomInfo%20Intent%20Signals.pdf) |
| UC WebSights | [Identifying UC Opportunities Using WebSights](https://gpcom.sharepoint.com/sites/gpcSales/ZoomInfo%20Resources/Identifying%20UC%20Opportunities%20Using%20ZoomInfo%20WebSights.pdf) |
| WebSights navigation | [WebSights Filtering and Scrolling](https://gpcom.sharepoint.com/sites/gpcSales/ZoomInfo%20Resources/WebSights%20Filtering%20and%20Scrolling.pdf) |
| RFP Scoops | [Setting Up RFP Scoops using Advanced Search](https://gpcom.sharepoint.com/sites/gpcSales/ZoomInfo%20Resources/Setting%20Up%20RFP%20Scoops%20using%20Advanced%20Search.pdf) |

**Live help on SharePoint:** Sales Resources also links **ZoomInfo Open Office Hours**, **ZI Copilot Knowledge Base**, and **ZoomInfo University** — use those when the job aid does not cover your question.
<!-- prettier-ignore-end -->

---

<a id="proposal-generator-enterprise-proposals"></a>

# Proposal Generator (`enterprise-proposals`)

<!-- prettier-ignore-start -->
---
id: "enterprise-proposals"
title: "Proposal Generator"
summary: "Assemble RFP PDFs. Import Salesforce pricing. Compile and ship."
sensitivity: "internal"
sales_trio_guidelines_only: true
reference_files:
  - label: "Proposal Generator (live app)"
    sharepoint_url: "https://enterprise-proposals.vercel.app"
  - label: "Salesforce report — Enterprise Proposals – Quick Import"
    sharepoint_url: "https://gpcom.lightning.force.com/lightning/r/Report/00OKZ000000HxGf2AK/view"
five_minute_flow:
  aria_label: "Proposal generator workflow"
  steps:
    - title: "Properties"
      caption: "Names, dates, module list"
    - title: "Cover & sections"
      caption: "Snippets, custom pages, refs"
    - title: "Pricing"
      caption: "CSV import or manual"
    - title: "Compile & PDF"
      caption: "Two-step generate"
    - title: "Save & proofing"
      caption: ".spec handoff"
five_minute_summary: |
  - **What it is:** The **Proposal Generator** builds customer-facing proposal PDFs in the browser — cover letter, stock GPC slides, pricing tables, references, and optional custom content — without stitching Word docs by hand.
  - **Start with properties:** RFP/proposal name, business name, and sales rep feed the title page and snippet tokens (`{RFP}`, `{BIZ}`). Names truncate at **33 characters** on the title slide.
  - **Structure the deck:** Use **Proposal Elements** to check sections on/off and **drag to reorder**. Orange-bordered items are editable (cover, custom pages, pricing, etc.); eye icons preview stock PDFs.
  - **Price it:** Import a **Salesforce CSV** from the *Enterprise Proposals – Quick Import* report (filter by Solution Number) or enter locations and product lines manually. Promotions, NRCs, and multiple pricing options are supported.
  - **Ship it:** **Save (.spec)** to resume work → **Compile Proposal** (validates) → **Generate PDF** (preview + download) → optional **Send for Proofing** email handoff. Replace every `[bracket placeholder]` before compile, generate, or proofing.
discovery_questions:
  - "Have I set RFP and business names before clicking cover-letter snippets that use `{RFP}` or `{BIZ}`?"
  - "Does my module list match the deal — stock slides only where they add value, custom pages where the RFP asks for narrative?"
  - "Is pricing sourced from the current Salesforce solution export, or do I need to manual-enter edge cases the CSV missed?"
  - "Did I replace every `[bracket]` instruction with customer-specific text before I compile?"
  - "If I am sending for proofing, is the `.spec` saved and are custom PDF uploads still attached locally (they are not stored inside the spec file)?"
  - "Do project start and completion dates on the properties panel match what I want on the Project Implementation Plan slide?"
video_sections_presentation: scroll_tour
video_sections_continuous: true
video_sections_tabs_aria_label: "Proposal generator tour"
video_sections:
  - heading: "Intro"
    intro: "Watch this first for a quick orientation to the Proposal Generator — then scroll through the step-by-step tour below."
    items:
      - title: "Proposal Generator intro"
        src: "assets/enterprise-proposals/intro-video.mp4"
  - heading: "Proposal Generator"
    intro: "Walk the app top to bottom — properties, content, pricing, compile, and handoff."
    scroll_tour:
      - heading: "Main layout"
        commentary: "The sidebar holds proposal properties, save/load/proofing actions, and the draggable module list. The main panel is where you edit cover letter, references, pricing, and optional sections. Save early — the header shows Unsaved changes when work is in progress."
        src: "assets/enterprise-proposals/01-main-layout.png"
      - heading: "Proposal elements"
        commentary: "Check sections on or off and drag to reorder the final PDF. Stock slides (Why GPC, NOC, DIA, SIA, etc.) can be previewed with the eye icon. Generated sections — cover letter, custom pages, pricing, references — have an orange accent bar."
        src: "assets/enterprise-proposals/02-module-list.png"
      - heading: "Cover letter & snippets"
        commentary: "Write the cover letter directly or click marketing snippets to insert approved paragraphs. Snippets that use `{RFP}` or `{BIZ}` need those fields filled in Proposal Properties first. The readiness checklist and proposal notes scratchpad are for you — they do not print in the PDF."
        src: "assets/enterprise-proposals/03-cover-letter.png"
      - heading: "Dynamic pricing"
        commentary: "Drop a Salesforce Details-only CSV into the bulk import zone or build locations and product lines by hand. Each pricing option can include multiple sites, contract term, promotions, and non-recurring charges (NRC). Use Add Another Pricing Option when the customer wants scenario comparisons."
        src: "assets/enterprise-proposals/04-pricing-engine.png"
      - heading: "Salesforce CSV export"
        commentary: "Open the Enterprise Proposals – Quick Import report, filter to your Solution Number, export Details only, then import the CSV here. Required columns include Product; Location is optional (defaults to Imported Location). Import replaces all locations in the first pricing option."
        src: "assets/enterprise-proposals/05-salesforce-import.png"
      - heading: "Save, load, proofing"
        commentary: "Save (.spec) downloads a JSON project file you can reload later with Load Project. Send for Proofing saves the spec and opens an email draft — attach the `.spec` file manually. Proofing is blocked while `[bracket placeholders]` remain in the document."
        src: "assets/enterprise-proposals/06-save-load-proofing.png"
      - heading: "Compile then generate"
        commentary: "The orange header button is a two-step process: Compile Proposal runs a hidden first pass to validate and prepare assets; when it finishes, the button becomes Generate PDF. Review in the preview modal, then download with your chosen filename."
        src: "assets/enterprise-proposals/07-compile-generate.png"
knowledge_checks:
  - question: "What must you do before Compile Proposal, Generate PDF, or Send for Proofing will succeed?"
    options:
      - "Upload a USAC RFP PDF even for non-E-Rate deals"
      - "Replace every [bracket placeholder] in the document with customer-specific text"
      - "Disable Table of Contents in the module list"
    correct_index: 1
    explanation: "The app scans for [bracketed] instruction text and blocks compile, generate, and proofing until those placeholders are resolved."

  - question: "How do you bulk-import pricing from Salesforce?"
    options:
      - "Live API sync from the GPC Solution record"
      - "Export the Enterprise Proposals – Quick Import report (Details only, filtered by Solution Number) and drop the CSV into the pricing import zone"
      - "Copy cells from Excel into the cover letter editor"
    correct_index: 1
    explanation: "Pricing import is CSV-based from the named Salesforce report — not a live API connection."

  - question: "What is the correct order for producing the final PDF?"
    options:
      - "Generate PDF first, then Compile Proposal to fix errors"
      - "Compile Proposal first, then Generate PDF for preview and download"
      - "Send for Proofing before either compile step"
    correct_index: 1
    explanation: "Compile validates and prepares the document; Generate PDF opens the preview modal and download after compile succeeds."

  - question: "What does a .spec file store when you click Save (.spec)?"
    options:
      - "The full binary content of uploaded custom PDFs"
      - "Proposal properties, module order, cover text, pricing structure, references, and checklist state — but not uploaded PDF binaries"
      - "A finished PDF only"
    correct_index: 1
    explanation: "The spec file is JSON project state. Custom PDF uploads must be re-selected after Load Project because file bytes are not embedded."

  - question: "RFP Name and Business Name fields are limited to 33 characters because:"
    options:
      - "Salesforce enforces the limit on Solution names"
      - "The title page layout truncates longer names in the generated PDF"
      - "SharePoint document libraries reject longer filenames"
    correct_index: 1
    explanation: "Title page rendering truncates at 33 characters — shorten names in properties before you compile."

  - question: "When Table of Contents is enabled, what extra validation runs at compile time?"
    options:
      - "Every stock slide must be previewed with the eye icon"
      - "Each enabled Custom Page needs a document title and each Custom PDF needs a section name for the TOC"
      - "References must include four contacts"
    correct_index: 1
    explanation: "TOC generation requires titles on custom text pages and section names on uploaded PDF modules."

  - question: "Salesforce CSV import affects which pricing option?"
    options:
      - "All pricing options simultaneously"
      - "The first pricing option only — locations in that option are replaced by the import"
      - "The last pricing option added"
    correct_index: 1
    explanation: "Bulk import replaces locations in the first pricing option; add alternate scenarios manually after import if needed."

  - question: "Cover letter snippets that reference {RFP} or {BIZ} require:"
    options:
      - "A saved .spec file first"
      - "Matching values in Proposal Properties before the tokens resolve"
      - "Table of Contents to be disabled"
    correct_index: 1
    explanation: "Token substitution pulls from the RFP Name and Business Name property fields."

scenarios:
  - title: "The bracket that blocked compile"
    situation: |
      A rep clicks **Compile Proposal** and gets an error. The cover letter still contains `[list services here]` and `[Client Name]` from a snippet template.
    choices:
      - label: "Toggle modules off and on until compile succeeds."
        feedback: "Module toggles will not clear bracket placeholders — those are explicit instruction text the app requires you to replace."
      - label: "Find every [bracket] string in cover, custom pages, and pricing notes; replace with customer-specific text, then compile again."
        feedback: "**Good.** Bracket discipline is the most common compile blocker."
      - label: "Skip compile and use Print to PDF from the browser."
        feedback: "That bypasses the branded assembly pipeline — fix placeholders and use Compile → Generate PDF."

  - title: "The missing attachment after Load Project"
    situation: |
      A rep saves a `.spec`, loads it the next day, compiles successfully, but the uploaded executive-summary PDF is missing from the output.
    choices:
      - label: "Re-upload the custom PDF file — spec files store the filename, not the binary."
        feedback: "**Good.** After Load Project, custom PDF and USAC uploads must be selected again."
      - label: "File a bug — Save should embed every upload permanently."
        feedback: "By design, spec files keep project structure and metadata; large binaries stay local until you re-attach."
      - label: "Delete the spec and rebuild from scratch every time."
        feedback: "Reload + re-upload is the intended workflow — faster than rebuilding pricing from zero."

  - title: "CSV from the wrong solution"
    situation: |
      A rep exports the Quick Import report without filtering to their Solution Number and imports 40 locations into pricing.
    choices:
      - label: "Send the PDF anyway — more locations look impressive."
        feedback: "Wrong-solution pricing is a customer-trust issue. Filter the report, re-export Details only, and re-import."
      - label: "Open the report, set Solution ID in Filters, export Details-only CSV, re-import (replacing first-option locations)."
        feedback: "**Good.** That matches the in-app Salesforce export help workflow."
      - label: "Manually delete 39 locations one row at a time and hope you got the right one."
        feedback: "Re-import from a filtered export is faster and less error-prone than surgical deletes."

---

## Overview

The **Proposal Generator** (`https://enterprise-proposals.vercel.app`) is GPC’s browser-based tool for assembling **enterprise RFP/RFQ response PDFs**. Reps combine:

- **Proposal properties** (customer names, rep, dates)
- **Stock marketing slides** (Why GPC, NOC, product overviews, etc.)
- **Generated sections** (cover letter, TOC, pricing tables, references, Impact & ROI)
- **Optional uploads** (custom PDF inserts, USAC original RFP)

Everything runs **in the browser** — no server database stores your deal content. Work persists when you **Save (.spec)** to your machine and reload with **Load Project**.

Use this tool when you need a **formatted GPC proposal deck with pricing tables** pulled from Salesforce or entered manually. It complements — does not replace — **GPC Solution** workflow and approval discipline in Salesforce.

## Key Guidelines

### 1. Proposal properties

Fill **RFP Name / Proposal Name**, **Business Name**, and **Sales Rep** before you lean on snippets or compile. Optional **Presentation Date** defaults to today when blank. **Project Start** and **Project Completion** feed the Project Implementation Plan stock slide.

### 2. Proposal elements (structure)

- **Check** only the sections the customer expects.
- **Drag** to match the RFP’s required order.
- **Preview** stock PDFs with the eye icon when you are unsure what a slide contains.
- **Custom Page(s)** and **Upload Custom PDF** support multiple instances — use **+** / **−** on the module row.

### 3. Cover letter & custom content

- Click **snippets** for approved marketing copy; edit every `[instruction bracket]` before compile.
- `{RFP}` and `{BIZ}` tokens resolve from properties — set those fields first.
- **Custom pages** support executive-summary templates (General, Education, Healthcare) from marketing-maintained content.
- Long custom text auto-paginates in the PDF; watch for overflow warnings in the editor.

### 4. Pricing

**Path A — Salesforce CSV (preferred when a GPC Solution exists):**

1. Open **Enterprise Proposals – Quick Import** (link in app and Module Reference Files).
2. Filter to your **Solution Number**.
3. Export **Details only** as CSV.
4. Drop the file into **Bulk Import from Salesforce CSV**.

**Path B — Manual:** Add locations, product lines, contract term, promotions, and NRC lines. Bandwidth shortcuts (e.g. `100M`) expand to product suggestions.

Enable **location subtotals** for multi-site deals when you want per-site totals in the PDF. Use **Add Another Pricing Option** for scenario comparisons.

### 5. References & optional sections

- **References:** Up to four contact cards (name, org, address, phone, email).
- **Impact & ROI:** Optional narrative plus monthly cost comparison (calculated net savings/increase).
- **USAC Original RFP:** Attach the customer’s source RFP PDF when the module is enabled.

### 6. Save, compile, generate, proofing

| Action | Purpose |
| --- | --- |
| **Save (.spec)** | Download project JSON — reload later with Load Project |
| **Compile Proposal** | Validate placeholders, TOC rules, uploads; prepare PDF pipeline |
| **Generate PDF** | Preview in modal + download finished proposal |
| **Send for Proofing** | Save spec + open email draft (attach `.spec` manually) |

## Common Landmines

::: flip ["Bracket placeholders left in snippets"]
Snippets ship with `[fill this in]` instructions. The app **will not compile** until every `[bracket]` is replaced. Search cover letter and custom pages before you click Compile.
:::

::: flip ["Skipping Compile and expecting Generate"]
**Compile Proposal** must succeed first. The button label changes to **Generate PDF** only after a clean compile pass.
:::

::: flip ["Custom PDF missing after Load Project"]
`.spec` files remember that you *had* a custom PDF, not the file itself. Re-select uploads after every load.
:::

::: flip ["Unfiltered Salesforce CSV"]
Importing the Quick Import report without a Solution Number filter can flood pricing with the wrong locations. Filter → Details export → import.
:::

::: flip ["33-character title surprise"]
Long RFP or business names truncate on the title page. Shorten in properties before customer delivery.
:::

::: flip ["TOC enabled without titles"]
With **Table of Contents** checked, every custom text page needs a **document title** and every custom PDF needs a **section name** — or compile fails.
:::

## Stock slides reference [deep]

When checked in Proposal Elements, these stock PDFs append in your chosen order:

| Module label | Typical use |
| --- | --- |
| Title Page | Customer name, RFP title, rep, date (from properties) |
| High-Performing Network (Why GPC) | Network proof points |
| About GPC | Company overview |
| 24-Hour NOC Monitoring | Operations story |
| Escalation Process | Support path |
| Project Implementation Plan | Timeline — uses project start/completion dates |
| SPIN ID Number | Regulatory / program identifier slide |
| Senior Leadership | Executive bench |
| Dedicated Internet Access (DIA) | Product overview |
| Standard Internet Access (SIA) | Product overview |

Marketing updates stock PDFs and snippets centrally; reps consume them through the live app — you do not edit stock files in the generator.
<!-- prettier-ignore-end -->

---

<a id="account-based-marketing-account-based-marketing"></a>

# Account Based Marketing (`account-based-marketing`)

<!-- prettier-ignore-start -->
---
id: "account-based-marketing"
title: "Account Based Marketing"
summary: "C-level targeting. 90-day sprints. Marketing air cover."
sensitivity: "internal"
reference_files:
  - label: "Account Based Marketing — SharePoint folder (SOP, tracking, collateral)"
    sharepoint_url: "https://gpcom.sharepoint.com/:f:/r/sites/gpcSales/Sales%20Process/Account%20Based%20Marketing%20-%20ABM?csf=1&web=1&e=ZSvfY4"
discovery_questions:
  - 'Does this account meet the **Strategic** threshold to justify a 90-day ABM cycle, or is it a transactional opportunity that''s better suited to the standard sequence?'
  - 'Do I have **three identifiable targets across Manager, Director/VP, and Executive tiers** at this account today — and not all Executive? If not, what''s my plan to surface them in week one?'
  - 'Where does this account fit in my **Rolling Three**? Am I filling an on-deck slot, or proposing to displace an active cycle?'
  - 'Have I completed all six Sales Readiness Checklist items (Account Intel, Status, Current Services, Location Scope, Prospecting History, finalized Target List) before requesting kickoff?'
  - 'Which **Marketing partner** owns the air cover for this account, and have we aligned on the monthly touchpoint cadence + any planned **Door Pulls** in the 90-day window?'
five_minute_summary: |
  - **Why ABM:** Top logos don't move because someone sent more cadence emails—they move when **the right buyers** keep seeing **one consistent GPC story** between your conversations.
  - **Sales** owns the account: who matters (tiered targets, not a single hero exec), the tempo of outreach, and the integrity of kickoff—so Marketing isn't inventing context from thin air.
  - **Marketing** owns **air cover**: coordinated touches that reinforce what Sales is saying, timed to the play—not a generic newsletter blast that arrives a random week after your last call.
  - **It's deliberately joint:** when both sides run the same 90-day motion, you avoid the classic failure mode—reps grinding alone at the C-suite while **brand and field feel like two different companies.**
  - **Leadership keeps the model honest** (bench, kickoff discipline, shared visibility) so the program stays strategic—not a pile of heroic one-offs. Cadence, Door Pulls, and tracking live in the SOP and sections below.

knowledge_checks:
  - question: "How many ABM accounts should an Account Representative run concurrently per the SOP?"
    options:
      - "As many as the rep can manage—no defined cap"
      - "Three active accounts at any time, with three on-deck ready to backfill (the Rolling Three)"
      - "One account at a time until it closes"
    correct_index: 1
    explanation: "Three concurrent active accounts + three on-deck = the Rolling Three pipeline model."

  - question: "How are the three concurrent ABM accounts kicked off per the SOP?"
    options:
      - "All three start on the same day for momentum"
      - "Whenever the rep has free calendar time"
      - "On a 30-day stagger: Account A Month 1, Account B Month 2, Account C Month 3"
    correct_index: 2
    explanation: "Staggered 30-day kickoff ensures one account is always in the high-intensity opening phase while others are mid- or late-cycle."

  - question: "Can all ABM targets at an account be executive-level decision makers?"
    options:
      - "No—the SOP forbids all-executive stacks; mix Manager, Director/VP, and Executive"
      - "Yes—executives close deals, so they're the only targets that matter"
      - "Only at Strategic accounts above a certain revenue threshold"
    correct_index: 0
    explanation: "The tier hierarchy is Manager (Operational/Technical) + Director/VP (Tactical/Strategic) + Executive (Financial/Final Decision Maker). Single-threading at the top is exactly what the mix is designed to prevent."

  - question: "Which items belong on the Sales Readiness Checklist that the rep brings to ABM kickoff?"
    options:
      - "Only the target list—everything else can be figured out in the meeting"
      - "A draft proposal and a contract template"
      - "Account Intel, Status (Customer vs Prospect), Current Services, Location Scope, Prospecting History, and the finalized Target List"
    correct_index: 2
    explanation: "Walking in cold (no checklist) is the fastest way to lose a Marketing partner and stretch the 90-day cycle."

  - question: "How often should marketing run ABM coordination touchpoints in the SOP model?"
    options:
      - "Three touchpoints every week regardless of sales activity"
      - "One touchpoint every 30 days, with +1 added when Sales runs a physical Door Pull"
      - "Only one touchpoint at the end of the 90-day cycle"
    correct_index: 1
    explanation: "Monthly marketing coordination; +1 brochure-leave-behind when Sales executes a Door Pull. The Door Pull is the named SOP trigger for the extra marketing touch."

  - question: "Who may edit the Master Tracking Spreadsheet per the ABM operating model?"
    options:
      - "Any account rep working an Active ABM account may edit their own row."
      - "Marketing and Sales Leadership only—everyone else is view-only."
      - "Sales Operations owns the spreadsheet; Marketing is view-only."
    correct_index: 1
    explanation: "The master file stays authoritative when only Marketing and Sales Leadership hold edit rights. Reps who need a change route it through those owners—no shadow copies, no self-edit."
    source: "ABM SOP (Master Tracking Spreadsheet — permissions)"

scenarios:
  - title: "Skipping ahead in the ABM sequence"
    situation: |
      A rep wants to jump straight to **meeting ask** in week two because they already know the CTO. Leadership asks whether that aligns with the ABM playbook.
    choices:
      - label: "Yes—relationships always override the sequence."
        feedback: "Relationships matter, but the sequence keeps marketing air cover and messaging aligned. Exceptions should be explicit, not silent skips."
      - label: "Coach them to stay on-sequence unless leadership documents an exception, so air cover and reporting stay intact."
        feedback: "**Good.** The SOP sequence is the shared contract across sales and marketing."
      - label: "Tell them to restart the sequence from touch one."
        feedback: "Restarting isn't always required—focus on documented exceptions and alignment with marketing."

  - title: "The All-Exec Stack"
    situation: |
      A rep insists their three ABM targets at a strategic logo should be the **CFO, CIO, and CEO**—their logic: *"executives decide, why waste touches on managers?"*
    choices:
      - label: "Approve it—executives are the highest-leverage targets."
        feedback: "The SOP explicitly forbids all-Executive target lists. Single-threading at the top is exactly the failure mode the tiered mix is designed to prevent."
      - label: "Rebuild the target list before kickoff so the mix includes at least one Manager (Operational/Technical) and one Director/VP alongside the Executive."
        feedback: "**Good.** That's the SOP's tier hierarchy—and the only way the play survives an executive change."
      - label: "Approve it but add a fourth target as a 'just-in-case' backstop."
        feedback: "More targets doesn't fix the tier problem—the SOP requires the **mix**, not just the count."

  - title: "The Empty Bench"
    situation: |
      A rep is running three active ABM accounts hard but has **zero on-deck**. Account A wraps in April with nothing queued for May. The Sales Manager spots the gap in the Master Tracking Spreadsheet review.
    choices:
      - label: "Wait until April closes, then start sourcing the next account."
        feedback: "That's the pipeline drought the Rolling Three exists to prevent. On-deck is part of the job, not an afterthought."
      - label: "Surface it immediately to the Sales Manager; queue three on-deck accounts so May has a ready kickoff."
        feedback: "**Good.** The bench is how leadership confirms the model is healthy—an empty on-deck list is a Rolling Three failure, not a normal state."
      - label: "Move one of the active accounts to on-deck to free up time."
        feedback: "You don't pause an in-flight 90-day cycle to fill the bench—you find the next three Strategic candidates and queue them."
---

## Why ABM here

Account-based programs work when sales and marketing agree on cadence, targets, and who owns what. This module tracks the ABM SOP: a ninety-day, coordinated motion on strategic accounts—reps carrying the personal outreach, marketing providing air cover—so the people who matter keep hearing one consistent story from GPC.

Use it in onboarding to answer: *What do we actually do in weeks 1–12 for a named executive target—and what do I bring to kickoff?*

## Before the 90-day clock starts

The **Kickoff meeting** officially starts the 90-day clock. **Marketing, your Sales Manager, and the Account Representative** are in the room. Walk in with the **Sales Readiness Checklist** complete—not "we'll figure it out together":

- **Account Intel** — comprehensive research and general background on the account.
- **Status** — current Customer vs Prospect.
- **Current Services** — what they buy today and where (if applicable / known).
- **Location Scope** — density and geographic diversity of the account's locations.
- **Prospecting History** — audit of prior attempts (calls, emails, LinkedIn, physical drop-ins).
- **Target List** — finalized **3–5 specific targets** with roles and the tier mix below.

A cold kickoff with no checklist is the fastest way to burn a Marketing partner—and the cycle goes long.

### Target stack (mandatory mix)

**Multi-threaded engagement is mandatory.** **Minimum 3 targets** per account, **5 ideal**. Targets **cannot all be Executive level**. The required mix:

1. **Manager** (Operational / Technical)
2. **Director / VP** (Tactical / Strategic)
3. **Executive** (Financial / Final Decision Maker)

One executive leaving the company shouldn't end the play. That's why the SOP forbids the all-exec stack.

## The Rolling Three (active + on-deck)

You manage **three concurrent ABM accounts** on a staggered cadence: one in the opening sprint, one mid-cycle, one finishing. Behind them sit **three on-deck accounts** queued for the next kickoff:

- **Account A** — Month 1 kickoff
- **Account B** — Month 2 kickoff
- **Account C** — Month 3 kickoff
- **On-deck (×3)** — ready to onboard immediately as actives complete

As Account A wraps in April, the first on-deck account onboards for a **May** kickoff. The **Master Tracking Spreadsheet** enforces the model—it's where leadership confirms the bench is healthy. An empty on-deck list is a **Rolling Three failure**, not a normal state. **Permissions:** only **Marketing** and **Sales Leadership** may edit the master file; account reps and the broader team are **view-only** so the Active / On-Deck counts stay authoritative.

## 90-day sequence

![ABM process: 90-day sales and marketing coordination (reference Gantt)](assets/gantt/abm-90-day-sequence.png)
<!-- prettier-ignore-end -->

---

<a id="operational-business-reviews-operational-business-reviews"></a>

# Operational Business Reviews (`operational-business-reviews`)

<!-- prettier-ignore-start -->
---
id: "operational-business-reviews"
title: "Operational Business Reviews"
summary: "21-day cycle. Day-14 handoff. Single Packet. No Raw Dump."
sensitivity: "internal"
reference_files:
  - label: 'Operational Business Reviews — SOP & Sales Readiness Form (SharePoint)'
    sharepoint_url: "https://gpcom.sharepoint.com/:f:/r/sites/gpcSales/Sales%20Process/Operational%20Business%20Review%20-%20OBR?csf=1&web=1&e=EbAsNB"
discovery_questions:
  - When was the last time you walked your strategic accounts through their full network footprint, billing structure, and 12-month performance picture in a single conversation?
  - 'How do you currently surface contract expirations and renewal sync windows on your top accounts—before the customer''s procurement team asks?'
  - When something goes wrong at a strategic account, how does your team translate raw NOC ticket history into something the customer's executive sponsor can act on?
  - Which of your top accounts has billing or service-address data that has not been audited for accuracy in the last twelve months?
  - 'If your customer''s exec sponsor walked into the room tomorrow asking "what is next on the roadmap with GPC," how confident are you in the answer—on paper?'
five_minute_summary: |
  - **Why OBRs:** Strategic accounts deserve **one credible story** in the room—how footprint, billing, performance, and roadmap connect—not a collage of orphan spreadsheets and slides.
  - **Sales** sets the bar: relationship ownership, audited sites and services, and a readiness handoff the rest of the org can run with (not a "dump it over the fence" moment).
  - **Engineering and NOC** anchor **what's actually built and how it behaves**; **finance / billing** keeps the money picture aligned with reality so you're not arguing two different truths with the customer.
  - **Marketing** steps in **after** that scrub: design and narrative so an executive leaves with something they can hold—not a rescue mission piecing together raw CID exports.
  - **The through-line is partnership.** Clean handoffs mean no fire drills; messy handoffs mean the customer feels our chaos. The sections and SOP below spell out *how* we keep the chain intact.

knowledge_checks:
  - question: "How many business days does the OBR cycle run, from initiation through the meeting itself?"
    options:
      - "14 business days"
      - "21 business days"
      - "30 business days"
    correct_index: 1
    explanation: "The SOP defines a 21-business-day cycle, ending with the OBR Meeting on Day 21."

  - question: "\"Zero Fire Drills\" is one of the OBR's three Success Criteria. What does it mean operationally?"
    options:
      - "No support tickets can be open on the customer's circuits during OBR week."
      - "The OBR meeting cannot be rescheduled."
      - "Every asset is ready and handed to Marketing by Business Day 14."
    correct_index: 2
    explanation: "\"Zero Fire Drills\" is the SOP's name for the Business Day 14 handoff milestone—seven business days before the meeting, Marketing has everything they need."

  - question: "Marketing will not begin design until the \"Single Packet\" handoff arrives. What must that single email contain?"
    options:
      - "A raw export from the billing platform plus a verbal walkthrough."
      - "A calendar invite for the OBR meeting and the customer's logo."
      - "The completed OBR Sales Readiness Form (with scrubbed data tables) and the finalized Visio diagram (verified)."
    correct_index: 2
    explanation: "Marketing requires one packet, audited and complete. Sending pieces separately—or sending raw data—violates the Single Packet rule and stops the design clock."

  - question: "The SOP enforces a \"No Raw Dump\" rule. What is the stated rationale?"
    options:
      - "Raw billing data violates customer NDAs."
      - "Marketing is for design, not data entry or CID deciphering. Sales owns the scrub."
      - "The Visio software cannot ingest raw exports."
    correct_index: 1
    explanation: "Verbatim from §3 of the SOP—Sales must scrub and audit data before handoff. Marketing receives audited, plain-English data, not internal catalog soup."

  - question: "When you audit billing during OBR prep, the SOP names two specific \"sales levers\" the slick should surface. Which pair?"
    options:
      - "\"Discount\" and \"Bundle\""
      - "\"Modernization\" and \"Performance Spotlight\""
      - "\"Renewal\" and \"Cross-sell\""
    correct_index: 1
    explanation: "Strategic Billing on the slick features the \"Modernization\" lever (e.g., upgrade an aging tier) and the \"Performance Spotlight\" lever (showcase services performing well). Surface both."

scenarios:
  - title: The 5-Day Promise
    situation: |
      An account rep promises the customer a **printed OBR deck in five business days**. Delivery points to the **21-business-day SOP**.
    choices:
      - label: Tell the customer five days is the standard.
        feedback: 'The SOP cycle is 21 business days for a reason—Design (Jerry, 10 days), Data Collection (Jill / NOC, 5 days), Marketing Design (Sarah, 5 days), and Final Prep (3 days). A five-day promise breaks the Zero-Fire-Drills criterion before the cycle even starts.'
      - label: Reset expectations to the 21-business-day cycle (or document a leadership-approved exception path) before committing a date.
        feedback: '**Correct.** The SOP exists so Sales, Engineering, NOC, and Marketing all quote the same timeline. Exceptions go through your manager, not the customer-facing meeting date.'
      - label: Skip the Marketing Design phase to save time and hand the rep an unbranded slick.
        feedback: 'Skipping the Marketing Design phase strips the slick of the Final Review step and the brand consistency that makes the trifold readable. Use a documented fast-track only.'
  - title: The Raw-Dump Reflex
    situation: |
      Friday afternoon. The OBR meeting is fourteen business days out. The rep has just exported the customer's billing detail to a CSV, attached it to an email titled "Billing for [Customer]," and is about to add Sarah to the To: line.
    choices:
      - label: Hit send—Marketing can sort the spreadsheet on Monday.
        feedback: 'That is the **Raw Dump** the SOP exists to prevent. Marketing is for design, not data entry. The slick comes back wrong, or it comes back late.'
      - label: 'Pause. Complete the Sales Readiness Form, translate catalog codes to plain English, attach the finalized Visio diagram, and send **one email** containing the Single Packet.'
        feedback: '**Correct.** Sales owns the scrub. One packet, one email, complete data—Marketing starts the design clock immediately.'
      - label: Send the CSV now and the Visio later when it is ready.
        feedback: 'Two emails is not a Single Packet. Marketing will not begin design until the complete packet arrives—any partial send stops the clock and risks the Day 14 handoff.'
  - title: The Modernization Lever
    situation: |
      During the billing audit for a Strategic account, the rep discovers the customer has been paying for a **100M Fiber DIA** circuit at a site that was upgraded to **1G** last year but never re-tiered in billing.
    choices:
      - label: Quietly fix the billing internally before the OBR so it does not come up.
        feedback: 'Half right. Fix it, yes—but the SOP says to **surface** the proactive fix during the OBR. "Presenting an internal fix during the OBR proves proactive account management." Hiding it forfeits the trust dividend.'
      - label: 'Surface it on the slick under **Strategic Billing** as a Modernization lever: "Tier corrected from 100M to 1G; back-credit applied; current rate aligned with as-deployed service."'
        feedback: '**Correct.** This is exactly the Modernization lever the SOP calls out. Catching the error early **and** showing the work converts an awkward audit moment into a trust-building one.'
      - label: Tell the customer about it verbally in the meeting but leave it off the slick.
        feedback: 'Verbal-only loses the receipts. The trifold is the takeaway—if it is not on the slick, it did not happen.'
---

## Why OBRs matter

Operational Business Reviews turn **network reality, financial signals, and partnership history** into a single executive conversation that the customer's CFO *and* VP-IT can both act on. Reps win when the **prep process is predictable**—this module trains the SOP, not just the slide deck.

## The OBR Slick — what we deliver

The deliverable is a **front/back trifold insert** ("the Slick") with four components:

1. **Network Design:** High-fidelity "Current vs. Future State" Visio, verified against billing data.
2. **Strategic Billing:** Totals and expirations, featuring the **"Modernization"** and **"Performance Spotlight"** levers.
3. **NOC History & Feedback Loop:** 12-month performance snapshot and holistic partnership feedback loop.
4. **Strategic Roadmap:** Planned upgrades, upcoming renewal sync, and GPC solution highlights.

<div class="obr-slick-sample-wrap">
<img src="assets/obr/obr-slick-sample.jpg" alt="Sample OBR slick: Network Agility and Roadmap spread (trifold-style layout with billing snapshot, maps, and performance check-in)" width="1024" height="602" loading="lazy" decoding="async" />
</div>

## Success Criteria

- **Zero Fire Drills** — every asset is ready and handed to Marketing by **Business Day 14**.
- **100% Accuracy** — billing locations and network diagrams are fully synchronized.
- **Client Value** — the customer leaves the meeting with a clear understanding of their network health and our roadmap.

## The 21-business-day OBR cycle

![OBR process: 21-business-day strategic cycle (reference Gantt)](assets/gantt/obr-21-day-cycle.png)

| Phase | Interval | Owner | Action |
|---|---|---|---|
| **Initiation** | Day 1 | Account Rep | Schedule the OBR. |
| **Data Recon** | 3 days | Account Rep | Audit of locations, addresses, and upgrades. |
| **Design Phase** | 10 days | **Jerry Ehrenberg** | Network Design (with kickoff call). |
| **Data Collection** | 5 days | **Jill / NOC** | Billing & NOC data generation. |
| **Marketing Design** | 5 days | **Sarah** → Account Team Final Review | Professional formatting and branding. |
| **Final Prep** | 3 days | Sarah → Account Rep | Printing, pickup, and trifold insertion. |
| **The Meeting** | **Day 21** | Account Team | OBR Meeting. |

## Data Hygiene & the Single Packet

### The "No Raw Dump" rule

Sales must scrub and audit all data before handoff. **Marketing is for design, not data entry or CID deciphering.** Translate internal catalog codes into plain-English service descriptions (e.g., `100M Fiber DIA`).

### Proactive billing wins

Audit for address, tier, and MRC errors early. Presenting an internal fix during the OBR proves proactive account management—surface the correction on the slick under the **Modernization** lever instead of quietly burying it.

### The Single Packet handoff

Marketing will not begin design until **one email** contains **both** of the following:

1. The completed **OBR Sales Readiness Form** (with scrubbed data tables).
2. The finalized **Visio diagram** (verified).

Partial sends do not start the clock.
<!-- prettier-ignore-end -->

---

<a id="executive-map-book-map-book"></a>

# Executive Map Book (`map-book`)

_No `modules/map-book/content.md`. Map book uses `map-book/embed.html` and `map-book/content.json`._

## `map-book/content.json`

```json
{
  "navOrder": [
    "national",
    "layer2",
    "ip-network",
    "towers",
    "nebraska",
    "omaha-metro",
    "buffalo",
    "indiana",
    "illinois",
    "minnesota",
    "data-centers",
    "products",
    "why-gpc",
    "case-studies"
  ],
  "mapData": {
    "national": {
      "id": "national",
      "telemetry": {
        "layer": "WAVE",
        "status": "L1 TRANSPORT",
        "latency": "<1ms/100mi",
        "capacity": "400G STD"
      },
      "title": "The Network",
      "subtitle": "National Footprint & Coverage",
      "placeholder": "Load National_Map.svg",
      "file": "backbone.png",
      "type": "map",
      "stats": [
        { "label": "Fiber Miles", "value": "20,000+", "color": "text-gpc-green" },
        { "label": "Markets Served", "value": "200+", "color": "text-slate-900" },
        { "label": "Data Centers", "value": "25+", "color": "text-gpc-blue" }
      ]
    },
    "layer2": {
      "id": "layer2",
      "telemetry": {
        "layer": "ETH",
        "status": "L2 ETHERNET",
        "convergence": "<50ms",
        "topology": "REDUNDANT RING"
      },
      "title": "Layer 2 Core",
      "subtitle": "High-Availability Redundant Architecture",
      "placeholder": "Load Layer_2_Rings.svg",
      "file": "layer_2.png",
      "type": "map",
      "stats": [
        { "label": "Core Capacity", "value": "400G Standard", "color": "text-gpc-orange" },
        { "label": "Scalability", "value": "1G to 100G", "color": "text-gpc-green" }
      ]
    },
    "ip-network": {
      "id": "ip-network",
      "telemetry": {
        "layer": "IP",
        "status": "L3 NETWORK",
        "peering": "25+ IXPs",
        "routing": "BGP OPTIMIZED"
      },
      "title": "IP Network & Peering",
      "subtitle": "Connected and Resilient Cloud Access",
      "placeholder": "Load IP_Network_Map.svg",
      "file": "ip.png",
      "type": "map",
      "stats": [
        { "label": "Traffic Routing", "value": "Localized", "color": "text-gpc-blue" },
        { "label": "Latency", "value": "Ultra-Low", "color": "text-gpc-green" }
      ]
    },
    "towers": {
      "id": "towers",
      "telemetry": {
        "layer": "WAVE",
        "status": "L1 TRANSPORT",
        "latency": "<1ms/100mi",
        "capacity": "400G STD"
      },
      "title": "Fiber to the Tower",
      "subtitle": "Fast & Reliable Wireless Backhaul",
      "placeholder": "Load Towers_Map.svg",
      "file": "cell_towers.png",
      "type": "map",
      "stats": [
        { "label": "Total Towers", "value": "650+", "color": "text-gpc-orange" },
        { "label": "States Served", "value": "13", "color": "text-slate-900" }
      ]
    },
    "nebraska": {
      "id": "nebraska",
      "telemetry": {
        "layer": "WAVE",
        "status": "L1 TRANSPORT",
        "latency": "<1ms/100mi",
        "capacity": "400G STD"
      },
      "title": "Nebraska Market",
      "subtitle": "Statewide Infrastructure Detail",
      "placeholder": "Load Nebraska_Detail.svg",
      "file": "nebraska.png",
      "type": "map",
      "stats": [
        { "label": "State Fiber Miles", "value": "10,000+", "color": "text-gpc-green" },
        { "label": "Communities", "value": "163", "color": "text-slate-900" }
      ]
    },
    "omaha-metro": {
      "id": "omaha-metro",
      "telemetry": {
        "layer": "WAVE",
        "status": "L1 TRANSPORT",
        "latency": "<1ms/100mi",
        "capacity": "400G STD"
      },
      "title": "Omaha / Council Bluffs",
      "subtitle": "Metro Area Street Level Routing",
      "placeholder": "Load Omaha_Metro.svg",
      "file": "omaha.png",
      "type": "map",
      "stats": [
        { "label": "Metro Fiber Miles", "value": "800+", "color": "text-gpc-green" }
      ]
    },
    "buffalo": {
      "id": "buffalo",
      "telemetry": {
        "layer": "WAVE",
        "status": "L1 TRANSPORT",
        "latency": "<1ms/100mi",
        "capacity": "400G STD"
      },
      "title": "Buffalo & Surrounding Counties",
      "navLabel": "Buffalo & Surrounding",
      "subtitle": "Regional Infrastructure Detail",
      "placeholder": "Load Buffalo_Map.svg",
      "file": "buffalo.png",
      "type": "map",
      "stats": []
    },
    "indiana": {
      "id": "indiana",
      "telemetry": {
        "layer": "WAVE",
        "status": "L1 TRANSPORT",
        "latency": "<1ms/100mi",
        "capacity": "400G STD"
      },
      "title": "Indiana Market",
      "subtitle": "Regional Infrastructure Detail",
      "placeholder": "Load Indiana_Map.svg",
      "file": "indiana.png",
      "type": "map",
      "stats": [
        { "label": "State Fiber Miles", "value": "3,500", "color": "text-gpc-green" },
        { "label": "Communities", "value": "32", "color": "text-slate-900" },
        { "label": "Data Centers", "value": "3", "color": "text-gpc-blue" }
      ]
    },
    "illinois": {
      "id": "illinois",
      "telemetry": {
        "layer": "WAVE",
        "status": "L1 TRANSPORT",
        "latency": "<1ms/100mi",
        "capacity": "400G STD"
      },
      "title": "Illinois & Kentucky",
      "subtitle": "Regional Infrastructure Detail",
      "placeholder": "Load Illinois_Kentucky_Map.svg",
      "file": "il&ky.png",
      "type": "map",
      "stats": [
        { "label": "State Fiber Miles", "value": "1,960+", "color": "text-gpc-green" },
        { "label": "Chicago DCs", "value": "4", "color": "text-gpc-blue" }
      ]
    },
    "minnesota": {
      "id": "minnesota",
      "telemetry": {
        "layer": "WAVE",
        "status": "L1 TRANSPORT",
        "latency": "<1ms/100mi",
        "capacity": "400G STD"
      },
      "title": "Minnesota, Colorado, & Wyoming",
      "navLabel": "Minnesota & CO/WY",
      "subtitle": "Regional Infrastructure Detail",
      "placeholder": "Load Minnesota_Colorado_Map.svg",
      "file": "mn&co.png",
      "type": "map",
      "stats": [
        { "label": "State Fiber Miles", "value": "1,900+", "color": "text-gpc-green" },
        { "label": "Key Hubs", "value": "Minneapolis/Denver/Cheyenne", "color": "text-slate-900" }
      ]
    },
    "data-centers": {
      "id": "data-centers",
      "telemetry": {
        "layer": "IP",
        "status": "L3 NETWORK",
        "peering": "25+ IXPs",
        "routing": "BGP OPTIMIZED"
      },
      "title": "Data Centers",
      "subtitle": "Colocation & Interconnection Facilities",
      "type": "html",
      "stats": [
        { "label": "Total Facilities", "value": "25+", "color": "text-gpc-blue" },
        { "label": "Network Integration", "value": "100% Fiber", "color": "text-gpc-green" }
      ]
    },
    "products": {
      "id": "products",
      "title": "Product Portfolio",
      "subtitle": "Fiber-Driven Enterprise Services",
      "type": "html",
      "stats": []
    },
    "why-gpc": {
      "id": "why-gpc",
      "title": "The GPC Advantage",
      "subtitle": "Partner with Experience",
      "type": "html",
      "stats": [
        { "label": "Dedicated Team", "value": "400+ Employees", "color": "text-slate-900" },
        { "label": "Support", "value": "Unmatched Local", "color": "text-gpc-blue" },
        { "label": "Reliability", "value": "24/7 Monitoring", "color": "text-gpc-green" }
      ]
    },
    "case-studies": {
      "id": "case-studies",
      "title": "Client Success",
      "subtitle": "Proven Solutions in Action",
      "type": "html",
      "stats": [
        { "label": "Delivery Timeline", "value": "Fast Turn-Up", "color": "text-gpc-orange" },
        { "label": "Connection Type", "value": "100% Fiber", "color": "text-gpc-green" }
      ]
    }
  },
  "pageContent": {
    "data-centers": [
      { "city": "Denver, CO", "name": "910 Telecom" },
      { "city": "Denver, CO", "name": "Coresite" },
      { "city": "Denver, CO", "name": "Champa" },
      { "city": "Des Moines, IA", "name": "Connect Des Moines" },
      { "city": "Sioux City, IA", "name": "Long Lines WIT" },
      { "city": "Sioux City, IA", "name": "FiberComm" },
      { "city": "Davenport, IA", "name": "South Front" },
      { "city": "Chicago, IL", "name": "Digital Realty Federal" },
      { "city": "Chicago, IL", "name": "Digital Realty Cermak" },
      { "city": "Chicago, IL", "name": "Equinix Cermak" },
      { "city": "Chicago, IL", "name": "Coresite" },
      { "city": "Minneapolis, MN", "name": "Cologix Minneapolis" },
      { "city": "Kansas City, MO", "name": "Netrality KC" },
      { "city": "St. Louis, MO", "name": "Netrality St. Louis" },
      { "city": "Bellevue, NE", "name": "TierPoint-Bellevue" },
      { "city": "Bellevue, NE", "name": "Offutt AFB" },
      { "city": "Papillion, NE", "name": "TierPoint-Midlands" },
      { "city": "Papillion, NE", "name": "Light Edge Solutions" },
      { "city": "Lincoln, NE", "name": "Lincoln Edge Facility" },
      { "city": "Omaha, NE", "name": "1623 Farnam" },
      { "city": "Omaha, NE", "name": "Scott Tech" },
      { "city": "Cincinnati, OH", "name": "CyrusOne" },
      { "city": "Yankton, SD", "name": "Dataware Green" },
      { "city": "South Bend, IN", "name": "Union Station Tech" },
      { "city": "Indianapolis, IN", "name": "GPC Suite-Indy Telecom" },
      { "city": "Indianapolis, IN", "name": "Lifeline" },
      { "city": "Cheyenne, WY", "name": "ACT" }
    ],
    "products": [
      {
        "title": "Fiber Internet",
        "desc": "Get reliable fiber business internet backed by 24/7 network monitoring and support.",
        "icon": "M3 9h4v6H3z M7 10l3-1v6l-3-1 M10 10c3-3 5-4 7.5-4 M17.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0 M10 12h9 M19 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0 M10 14c3 3 5 4 7.5 4 M17.5 18a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0"
      },
      {
        "title": "SD-WAN",
        "desc": "Improve your network performance and lower your costs, no matter the delivery method.",
        "icon": "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
      },
      {
        "title": "Managed Firewall",
        "desc": "Safeguard sensitive data and secure your connection with round-the-clock network protection.",
        "icon": "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      },
      {
        "title": "Voice & Unified Comms",
        "desc": "Keep your team connected no matter their location, with traditional and Cloud-based voice solutions.",
        "icon": "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
      },
      {
        "title": "Managed Ethernet",
        "desc": "Ensure efficiency and cost savings with scalable, secure connectivity across all your locations.",
        "icon": "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
      },
      {
        "title": "5G Wireless Internet",
        "desc": "Keep your business running during outages with automatic failover, professional setup and 24/7 support.",
        "icon": "M12 11a1.5 1.5 0 110-3 1.5 1.5 0 010 3z M11 12.5l-2 9h6l-2-9 M10 16h4 M9.5 19h5 M8.5 7.5a5 5 0 000 4 M15.5 7.5a5 5 0 010 4 M6 5a8.5 8.5 0 000 9 M18 5a8.5 8.5 0 010 9"
      },
      {
        "title": "Managed Wi-Fi",
        "desc": "Provide seamless Wi-Fi connectivity for your entire team and every customer.",
        "icon": "M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
      },
      {
        "title": "DDoS Protection",
        "desc": "Avoid network disruptions and block high-volume attacks before they impact your customers.",
        "icon": "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      },
      {
        "title": "Cloud Connect",
        "desc": "Ensure high performance with secure, reliable and direct connections to leading Cloud providers.",
        "icon": "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
      }
    ],
    "why-gpc": {
      "intro": "Your choice of provider is not just about speed; it's about reliability, robust support and peace of mind. At Great Plains Communications (GPC) we deliver more than just internet service. We offer a true partnership.",
      "pillars": [
        {
          "title": "Over a Century of Experience",
          "desc": "Partner with a proven provider that delivers stable, future-proof solutions built on over 100 years of expertise.",
          "icon": "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        },
        {
          "title": "Unmatched Local Support",
          "desc": "Get faster resolutions and minimal downtime by working with a dedicated, local team.",
          "icon": "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        },
        {
          "title": "24/7 Network Monitoring",
          "desc": "Get peace of mind that comes from constant monitoring that keeps your business connected and protected.",
          "icon": "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        },
        {
          "title": "Flexible, Scalable Solutions",
          "desc": "Grow and customize your services precisely as your business demands evolve.",
          "icon": "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
        }
      ]
    },
    "case-studies": [
      {
        "image": "boystown.webp",
        "industry": "Healthcare & Education",
        "client": "Boys Town",
        "need": "A nationally recognized healthcare and educational campus required a highly secure, scalable, and redundant network to handle explosive data growth and ensure uninterrupted connectivity across its medical research facilities.",
        "solution": "GPC engineered a customized, highly available fiber architecture featuring two dedicated 40 Gbps transport links between critical data centers, ensuring maximum uptime for life-saving medical data.",
        "quote": "Great Plains Communications provides the dependable, high-capacity fiber backbone we need to seamlessly connect our data centers and ensure our staff can focus entirely on the children and families we serve."
      },
      {
        "image": "aerospace.webp",
        "industry": "Aerospace",
        "client": "Global Manufacturer",
        "need": "Due to the extreme demands of aerospace engineering, the client required massive bandwidth availability, an intricate custom network design, and an aggressive installation timeline to support mission-critical operations.",
        "solution": "GPC navigated complex permitting and rapidly deployed a custom-built fiber infrastructure, delivering four dedicated 400G optical waves to a major Western data center—fully operational ahead of schedule.",
        "quote": "GPC's ability to deliver reliable connectivity for our most critical operations, combined with their dedicated support and attention to detail, resulted in a flawlessly executed deployment."
      },
      {
        "image": "hospitality.webp",
        "industry": "Restaurants & Hospitality",
        "client": "Regional Franchise Group",
        "need": "Managing rapid expansion across 14 regional locations, the hospitality group faced connectivity bottlenecks. Consistent upload speeds and unified network performance were vital for modernizing their operational systems.",
        "solution": "GPC deployed a 100% fiber-optic network delivering 100x100 Mbps symmetrical broadband and enterprise voice services, enabling the seamless rollout of upgraded firewalls and advanced WiFi infrastructure.",
        "quote": "GPC's tailored approach provided the robust, uniform connectivity we desperately needed. We gained superior network performance that instantly elevated operations across every single location."
      }
    ]
  }
}
```

---
