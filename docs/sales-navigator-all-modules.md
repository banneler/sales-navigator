# Sales-Navigator — consolidated module content

Single export in manifest order. **Canonical training source for each module is `modules/<id>/content.md`** (or the paths noted for special modules). Regenerate this file with `npm run docs:assemble-modules`. Verbatim sections are wrapped for Prettier so YAML indentation is preserved.

## Table of contents

- [Getting started (`getting-started`)](#getting-started-getting-started)
- [Sales Rules of Engagement (`sales-rules-of-engagement`)](#sales-rules-of-engagement-sales-rules-of-engagement)
- [Sales Process & Salesforce (`sales-process-and-salesforce`)](#sales-process-salesforce-sales-process-and-salesforce)
- [Sales Operations & Approvals (`sales-operations-and-approvals`)](#sales-operations-approvals-sales-operations-and-approvals)
- [Portfolio & Business Capabilities (`portfolio-and-business-capabilities`)](#portfolio-business-capabilities-portfolio-and-business-capabilities)
- [Connectivity & Access (`product-connectivity`)](#connectivity-access-product-connectivity)
- [Security & SD-WAN (`product-security-and-sd-wan`)](#security-sd-wan-product-security-and-sd-wan)
- [Cloud, Wi-Fi & Backup (`product-cloud-wifi-and-backup`)](#cloud-wi-fi-backup-product-cloud-wifi-and-backup)
- [GPC iTV for Business (`product-itv`)](#gpc-itv-for-business-product-itv)
- [UC, Voice & Collaboration (`product-uc-voice-and-collaboration`)](#uc-voice-collaboration-product-uc-voice-and-collaboration)
- [Competitive Positioning (`competitive-positioning`)](#competitive-positioning-competitive-positioning)
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

summary: "Quick tour of Sales-Navigator—welcome, Coffee Summary sample, practice scenario, and a light knowledge check."

sensitivity: "public"

five_minute_summary: |
  - We're genuinely happy you chose to grow your career here—your wins matter to us.
  - Take training at your pace; come back to any module when you need a refresher or a talk track.
  - Showing up curious for customers beats memorizing slides—use this hub to prepare, then go have real conversations.

# Tour sample content (read by the Getting started page only—not the standard module scenarios/KC renderer.)
getting_started_demo:
  scenario:
    title: "Where is Waldo?"
    situation: |
      You aren't sure where to find the most recent product collateral for **Unified Communications**. What should you do?
    options:
      - label: "Send an email to Everyone@gpcom.com and ask where to find it."
        correct: false
      - label: "Check the Sales SharePoint site and look inside Sales Resources."
        correct: true
      - label: "Email, call, and IM Sarah Tinkham relentlessly until she gives it up."
        correct: false
    incorrect_feedback: "Not quite—Waldo is in Sales Resources, not in everyone’s inbox."
    coach_note: "Official hubs beat broadcast email—Sales Resources is there so you (and Sarah) aren’t playing hide-and-seek."
  knowledge_check:
    question: "What is the best Mexican restaurant in Blair, NE?"
    options:
      - label: "Taco Bell"
        correct: false
      - label: "El Vallarta Mexican Restaurant"
        correct: true
      - label: "Justin's leftover tacos in the fridge on floor 2"
        correct: false
    incorrect_feedback: "Nice try—unless you’re really craving Justin’s tacos."
    affirmation_primary: "Blair has spoken—you’ve got great taste."
    affirmation_secondary: "El Vallarta would be proud."
    hint: "Not graded—just for fun."
---

## Welcome to Great Plains Communications

We're glad you're here. This space is built to help you ramp with confidence—alongside teammates who remember their first customer call, their first complex quote, and the questions that used to keep them up at night.

## A note from the team

Dear teammate,

Welcome to Great Plains Communications. Whether you're new to telecom or you've carried a bag for years, we're glad you're on the team. Sales-Navigator exists so you spend less time hunting for answers and more time listening to customers—rules of engagement, product depth, competitive positioning, and the workflows that keep deals moving are never more than a few clicks away.

Nobody expects you to know everything on day one. We do expect you to ask questions, use the resources here, and reach out when a deal needs an extra pair of eyes. That's how we get better together—and how our customers feel the difference between a vendor and a partner.

With appreciation,

**Your Sales Leader**

## Where to go next

- When you're ready to leave the tour behind, open **Sales Rules of Engagement** for pipeline protection and idle windows, or **Sales Process & Salesforce** if you want the CRM motion first.
- Product depth lives under **Connectivity & Access onward** in the sidebar; collapse the rail with the **chevron** whenever you want more reading room.
- **Fiber path** in the header is your progress ribbon across modules—same chrome as the rest of the hub, just focused on what you've visited and what's next.
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

      - "Search Salesforce by name and address to ensure it doesn't already exist."

      - "Create the account immediately so you can log your notes, then ask Ops to merge duplicates later."

      - "Check ZoomInfo, and if the data looks clean, automatically import it as a new record."

    correct_index: 0

    explanation: "Search first. One entity, one account. Duplicates create massive commission headaches down the road."

  - question: "Marketing assigns you a hot inbound lead. How long do you have to make first contact and log it?"

    options:

      - "5 business days."

      - "5 calendar days."

      - "14 days, since it takes time to properly research the account before reaching out."

    correct_index: 0

    explanation: "You have exactly five business days for assigned inbound leads. If it isn't logged in Salesforce by then, it can be pulled."

  - question: "Who holds the authoritative list of Strategic Accounts?"

    options:

      - "Sales Managers and the VP of Sales, via the official repository on Sales SharePoint."

      - "The Account Executive who last worked the deal."

      - "Any rep can tag an account as Strategic if the MRC is projected over $5,000."

    correct_index: 0

    explanation: "Only Sales Managers and the VP of Sales maintain the official Strategic list. Informal spreadsheets or personal tags don't count."

  - question: "For a general Customer account (non-strategic), how many days of zero logged activity must pass before the ROE window opens?"

    options:

      - "121+ days."

      - "90 days."

      - "365 days."

    correct_index: 0

    explanation: "121+ days idle for a Customer account on the general path."

  - question: "For a general Prospect account, how many days of zero logged activity must pass before the ROE window opens?"

    options:

      - "61+ days."

      - "30 days."

      - "90 days."

    correct_index: 0

    explanation: "61+ days for a Prospect account on the general path."

  - question: "Does the strict five-business-day clock apply to leads you prospect and self-source?"

    options:

      - "No; that clock is specific to sales- or marketing-assigned inbound leads."

      - "Yes; every lead type uses the same five-business-day clock to maintain pipeline velocity."

      - "Self-sourced leads actually must be converted within 48 hours."

    correct_index: 0

    explanation: "The five-day clock only applies to assigned inbound leads, not your own self-sourced prospecting."

  - question: "You've noticed an account is past its idle window and you want to work it. What is the approved transfer process?"

    options:

      - "Connect with the current owner. Once agreed, email your manager and sales leadership for approval and transfer."

      - "Change the owner in Salesforce to yourself, then send a courtesy Teams message to the prior owner."

      - "Tag the VP of Sales in a Chatter post and wait for them to reassign it."

    correct_index: 0

    explanation: "Never reassign an account unilaterally. Get incumbent agreement, then get leadership's blessing."

  - question: "How are USAC-funded entities treated under the rules of engagement?"

    options:

      - "They follow Strategic-style treatment regardless of list inclusion (with noted exceptions like ENA in Indiana)."

      - "They follow the exact same 61/121 rules as any standard general Prospect or Customer."

      - "They are exempt from Salesforce tracking entirely."

    correct_index: 0

    explanation: "USAC entities get Strategic-style protection per the ROE. Always verify with leadership."

  - question: "When leadership is settling an account ownership dispute, what is the ONLY evidence that matters?"

    options:

      - "Logged activity and clean data in Salesforce."

      - "Your Outlook 'Sent' folder showing you emailed the prospect."

      - "A verbal conversation you had with the customer at a trade show."

    correct_index: 0

    explanation: "Salesforce is the system of record. If it's not logged there, it didn't happen."

scenarios:

  - title: "The 130-Day Ghost Town"

    situation: |

      You find a juicy general Customer account. It's day 130 of zero logged activity. You want to reach out today. What's your move?

    choices:

      - label: "The 121-day window is wide open. Send a cold outreach sequence immediately so you get your foot in the door."

        feedback: "Slow down. Yes, it's open by the numbers, but a blind outreach burns internal bridges. Don't be a cowboy."

      - label: "Ping the current owner first. If you align (or they ghost you), escalate through the ROE transfer steps with leadership before dialing."

        feedback: "Correct. Protect your reputation internally. Align with the owner or use the approved transfer paths."

  - title: "The 'Sent Folder' Defense"

    situation: |

      Marketing assigns you a hot inbound lead on Monday. Next Tuesday (Day 6), a hungry rep flags that it has zero Salesforce activity and asks leadership for it. You argue, "But I emailed them twice from my inbox!"

    choices:

      - label: "Forward your sent emails to leadership as proof you are actively working the lead."

        feedback: "Dead wrong. The 'Sent' folder doesn't pay commissions. Assigned inbound leads require a Salesforce log within five business days. The lead gets reassigned."

      - label: "Admit defeat. You failed to log the activity in Salesforce within 5 business days, so the lead is gone."

        feedback: "Correct. Salesforce is the system of record. Log it or lose it."

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
<!-- prettier-ignore-end -->

---

<a id="sales-process-salesforce-sales-process-and-salesforce"></a>

# Sales Process & Salesforce (`sales-process-and-salesforce`)

<!-- prettier-ignore-start -->
---
id: "sales-process-and-salesforce"
title: "Sales Process & Salesforce"
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
  - **Convert to Opportunity:** Always create the opportunity upon lead conversion. Skipping this to "keep your pipeline clean" actually breaks reporting and stalls the approval flow later.
  - **The Contract Signer:** Set the Contract Signer on the GPC Solution early—before it ever hits Approval Pending. Trying to append it at the 11th hour will block your DocuSign envelope.
  - **DocuSign prep:** Every single recipient on a DocuSign envelope must exist as a Contact on the account first. No exceptions.
  - **Closed Lost:** Never delete a Closed Lost record. That history is critical for forecasting and future re-engagement campaigns.
  - **Three Contact Roles are mandatory on every Closed-Won Solution:** Project Contact, Billing Contact, and Property Manager / On-Site Manager. Skip them and you don't fail the close—you stall the install, because PMO can't reach the building and the bill lands in the wrong inbox.
  - **Costing Routing has three flags** that change the routing path: **Strategic Build** (geographic), **Zone Parent** (multi-site structural), and **Reusable** (procedural). Different flags, different rules—and Reusable is **not allowed** under a Zone Parent.

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
  - question: "You are converting a warm lead, but they haven't given a firm verbal commitment yet. Do you create the Opportunity?"
    options:
      - "Yes. Always create the opportunity upon conversion so the system tracks the progression and approvals route correctly."
      - "No. Wait until they verbally commit so you don't clutter the team pipeline with 'maybes'."
      - "No. Just leave them as a Lead and set a reminder task for next week."
    correct_index: 0
    explanation: "Skipping the opportunity creation breaks the entire downstream reporting and approval chain. Convert and create."

  - question: "When is the correct time to assign the Contract Signer to the GPC Solution?"
    options:
      - "Early in the process, before the solution ever reaches Approval Pending."
      - "Right after the solution gets fully approved, just before you hit the Conga merge button."
      - "It doesn't matter, as long as it happens before the customer opens the email."
    correct_index: 0
    explanation: "If you wait until it is Approval Pending, the system locks and blocks your DocuSign envelope."

  - question: "You need the customer's CFO to sign the final agreement, but you've only been dealing with the IT Director. What must you do in Salesforce first?"
    options:
      - "Create the CFO as a Contact on the Account record before sending the DocuSign."
      - "Just type the CFO's email address manually into the DocuSign routing window."
      - "Send it to the IT Director and ask them to forward the DocuSign to the CFO."
    correct_index: 0
    explanation: "Every DocuSign recipient must be a formalized Contact on the Account. Period."

  - question: "A prospect just signed a 36-month deal with a competitor. What do you do with the Opportunity?"
    options:
      - "Mark it Closed Lost with the correct competitor reason. Never delete the record."
      - "Delete the record so leadership doesn't think you are hoarding dead pipeline."
      - "Revert the Opportunity back to a Lead so marketing can nurture them."
    correct_index: 0
    explanation: "Closed Lost history is highly valuable data. Deleting records destroys our competitive intelligence."

  - question: "Which Contact Roles does the QRG say must be set on every Closed-Won GPC Solution?"
    options:
      - "Project Contact, Billing Contact, and Property Manager / On-Site Manager."
      - "Just the Decision Maker—everything else is optional."
      - "Sales' Main Contact and the Influencer. PMO figures the rest out post-close."
    correct_index: 0
    explanation: "Skipping the three required roles doesn't fail the close. It stalls the install (PMO can't reach the building) and routes the bill to the wrong inbox."
    source: "Contact Roles Quick Reference Guide - 1023.pdf"

  - question: "On the same Solution Site you've selected both New Services and Existing Services. Which costing routing path does Salesforce follow?"
    options:
      - "The New Services path."
      - "The Existing Services path."
      - "Both paths run in parallel and the system reconciles them at Close-Won."
    correct_index: 0
    explanation: "When New and Existing Services are both selected, the New Services path wins—always."
    source: "Costing Routing Quick Reference Guide - 1123.pdf (Considerations)"

  - question: "A Solution Site is associated with a Zone Parent Opportunity. Can it use the Reusable flag for costing?"
    options:
      - "No—Reusable is not allowed when a Solution Site is associated with a Zone Parent Opportunity."
      - "Yes—Reusable speeds up multi-site deals, so Zone Parent + Reusable is the recommended combination."
      - "Only if the site is also flagged Strategic Build."
    correct_index: 0
    explanation: "Strategic Build, Zone Parent, and Reusable are independent flags. The QRG is explicit: Reusable is not allowed under a Zone Parent."
    source: "Costing Routing Quick Reference Guide - 1123.pdf (Considerations)"

  - question: "What conditions flag a Solution Site as Strategic Build?"
    options:
      - "The site's GPS coordinates fall within geographical boundaries pre-loaded into Salesforce. When flagged, Individual Drop Cost and Individual Equipment Cost apply systematically."
      - "Any deal over $50k MRC."
      - "Any deal involving a Zone Parent Opportunity."
    correct_index: 0
    explanation: "Strategic Build is purely geographic, not financial. The geographic boundary triggers the systematic cost application."
    source: "Costing Routing Quick Reference Guide - 1123.pdf (Considerations)"

scenarios:
  - title: "The 11th Hour Signer"
    situation: |
      You fought hard for a deal, got the verbal 'yes', and pushed the GPC Solution all the way through approvals. You go to generate the DocuSign envelope and realize the CEO needs to sign, but you never added them to the Solution.
    choices:
      - label: "Quickly type the CEO's name into the DocuSign recipient list and hit send."
        feedback: "It will fail. The system requires the Contract Signer to be set on the GPC Solution before Approval Pending, and they must be a Contact. You now have to backtrack."

      - label: "Pull the Solution back, add the CEO as a Contact, set them as the Contract Signer, and re-route."
        feedback: "Correct, unfortunately. Next time, establish the signer early to avoid stalling your own deal at the finish line."
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

1. **Lead conversion** — When you’re ready to quote, convert the lead. **Default: create the opportunity** (exceptions need manager or admin approval).
2. **Deal motion** — **GPC Solution** → **approvals** → **Conga** → **DocuSign**.

### Why the rules matter

Cutting corners—**no opportunity** on conversion, deleting **Closed/Lost**, a late **Contract Signer**, or signers that only live in a spreadsheet—breaks **approvals**, **billing**, and **commissions**. Clean data in, clean revenue out.

---
-->

## Key Guidelines

1. **Always search first:** Duplicates cause ownership disputes and data quality problems. Search Salesforce before converting a lead.
2. **Convert to Opportunity:** The default is always to create an opportunity upon conversion. Exceptions require manager or admin approval.
3. **Accurate Pipeline Stages:** Stage, amount, and close date should move together and reflect reality you'd defend to leadership. Inflated stages distort the forecast.
4. **Set Contract Signer early:** Missing signers block DocuSign. Set the Contract Signer when you create the GPC Solution, well before it reaches Approval Pending.
5. **Contacts must exist in Salesforce:** DocuSign recipients must be Contacts on the account before sending. You cannot send an envelope to an email address that isn't attached to a Contact record.

---

## Common Landmines

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

::: flip ["I'll skip creating the opportunity on conversion—less work."]
Default is always create the opportunity. Exceptions require manager or admin approval. Skipping on your own causes reporting gaps and approval issues.
:::

::: flip ["I deleted the Closed/Lost record to clean up my pipeline."]
Never delete Closed/Lost opportunities. The history matters for forecasting, win/loss analysis, and potential re-engagement.
:::

::: flip ["I'll add the Contract Signer right before I send to DocuSign."]
Set Contract Signer when you create the GPC Solution or early in its lifecycle. Adding it during Approval Pending behaves differently and can block the envelope.
:::

::: flip ["My signers are saved in a spreadsheet—I'll add them to Salesforce later."]
DocuSign recipients must be Contacts on the account before sending. Contacts not in Salesforce = envelope can't be sent.
:::

::: flip ["Close date is flexible—stage and amount are what matter."]
Stage, amount, and close date should move together and reflect a forecast you'd defend. Stale dates break leadership views and downstream planning.
:::

::: flip ["I'll run my follow-ups from notes—I'll update Salesforce when the deal heats up."]
Tasks, list views, and Home dashboards are the hygiene habit—if activity isn't on the record, handoffs and approvals break for everyone who touches the deal after you.
:::

</div>

---

## Process Deep Dive [deep]

### Contact Roles — the part that bites you later

Every Closed-Won GPC Solution must carry **three Contact Roles**: **Project Contact**, **Billing Contact**, and **Property Manager / On-Site Manager**. Miss any of those three and the close goes through clean—but the install stalls (PMO can't reach the building) and the first bill lands in the wrong inbox. It's a slow, expensive way to break a customer's first 30 days with GPC.

The full role list, from the Contact Roles QRG:

- **Sales' Main Contact** — the person you reach out to about the sale or contract.
- **Influencer** — encourages or recommends GPC to the Decision Maker.
- **Decision Maker** — signs the contract. May or may not be the owner.
- **Project Contact** — PMO's point of contact for installation. **Required on every Closed-Won Solution.**
- **Billing Contact** — PMO and Business Customer Care's billing contact. **Required on every Closed-Won Solution.**
- **Property Manager / On-Site Manager** — for site access. **Required on every Closed-Won Solution.**
- **General Contractor** — only when construction is needed.
- **IT / Technical / Data Contact** — coordinates with the customer's IT contractor.
- **Phone System Contact** — coordinates Voice / phone-system installs (skip for UC-only deals).
- **Agent (Channel)** — Channel Sales only.
- **Business User** — the person actually using the service.
- **Other** — last resort, when nothing else fits.

**On the Contact record itself:** set **Status = Active** and populate **Preferred Contact Method** with the matching contact info. Stale-status contacts get dropped from automated comms—a clean record now saves a phone tag spiral later.

### Costing Routing & Reusable — the three flags that change everything

Every Solution Site is routed for costing based on the **Services**, **Site Type**, and **Products** selected. Start with the New-vs-Existing distinction:

- **New Services** — Services that need a new install connection, or the customer is brand new to GPC.
- **Existing Services** — Services GPC already provides at the site; you're upgrading, downgrading, or adding features.

**Two rules to memorize.** Get either wrong and the Solution sits in the wrong queue for days:

1. **If New *and* Existing Services are both selected on the same Solution Site, routing follows the New Services path.**
2. **If multiple Services are selected on the same Site, routing follows the path of the Service that needs the deepest review.**

**Three flags can change the routing path.** They are **independent of each other**—don't assume Strategic Build implies Reusable, or that Zone Parent gates Strategic Build:

| Flag | What it does | When it applies |
| --- | --- | --- |
| **Strategic Build** | Individual Drop Cost and Individual Equipment Cost apply systematically—bypassing OSP review for those line items. | Site's GPS coordinates fall within geographic boundaries pre-loaded into Salesforce. |
| **Zone Parent Opportunity** | Solution Sites under a Zone Parent may bypass automation in routing. | Multi-site deals with a parent Opportunity tying child Solutions together. |
| **Reusable** | OSP and Network Engineering complete the costing routing on the team's behalf via the Reusable matrix. | Specific criteria are met (see QRG). **Not allowed under a Zone Parent.** |

**Pinned landmine.** **Reusable is not allowed when a Solution Site is associated with a Zone Parent Opportunity.** Reps often assume Strategic Build and Reusable are the same fast-lane—they aren't. Strategic Build is *geographic* (does the site fall in the boundary?); Zone Parent is *structural* (is the deal multi-site?); Reusable is *procedural* (is the matrix populated?). Treat the flags as three separate conversations.

<!--
**Lifecycle flow:**
1. **Leads** → Convert when ready to quote. Default: creates account + contact + new opportunity. Exception (skip opportunity): manager or admin only.
2. **Opportunity:** stages, value, next steps. Closed/Won → projects per site. Closed/Lost → capture why; do not delete.
3. **Referral programs:** after conversion, referral fields accurate + referrer informed on status and eligibility.
4. **GPC Solution / CPQ:** Sites/lines complete before approval; Contract Signer early; DocuSign recipients = Contacts.
5. **Conga → Send to DocuSign:** only when process allows—not a substitute for approvals/Legal. Terms changes → Legal.

**Salesforce hygiene habits:**
- **Daily:** Tasks you'll do; pinned views; contacts on right account; Home dashboards fresh; Universal Search
- **Forecast:** Commit what you'd defend; stage + amount + close date move together; note risks on the record
- **GPC Solution:** complete before approval; Contract Signer set early; all recipients are Contacts

**DocuSign from Salesforce:**
- Set Contract Signer early (not in Approval Pending)
- Conga → Send to DocuSign; recipients = Contacts
- First-time DocuSign auth may be required
- Terms changes → Legal before sending

**After Closed/Won:** a project is created for each Solution Site. Complete sites/products/contacts at Closed/Won; Tasks + clear activity notes; referral fields still accurate.

**Avoid:** converting without opportunity (normal deals); duplicate contacts; stale close dates; incomplete GPC Solutions for approval; Contract Signer blank until Approval Pending; deleting Closed/Lost; signers not Contacts; spreadsheet-only pipeline.

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
sales_trio_hide_guidelines: true
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
    intro: 'The shortcut only applies when the deal is genuinely plain-vanilla fiber. If payback or the dollars feel fuzzy, use the normal approval path.'
    body: |
      [Pre-Approved Order Process Quick Reference — 07/23](https://gpcom.sharepoint.com/sites/SalesforceRoadmap/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FSalesforceRoadmap%2FShared%20Documents%2FGeneral%2F2025%20Salesforce%20Training%20Guides%20%28Legacy%20BAU%20org%29%2FPre-Approved%20Order%20Process%20Quick%20Reference%20Guide%20-%200723.pdf&parent=%2Fsites%2FSalesforceRoadmap%2FShared%20Documents%2FGeneral%2F2025%20Salesforce%20Training%20Guides%20%28Legacy%20BAU%20org%29)

      Use the pre-approved path only when the deal stays inside a narrow lane:

      - Channel, Enterprise, or Wholesale AE
      - 36-month term or longer
      - Build Fiber or On-Net Fiber sites only; no copper or coax
      - New logo, renewal, or upgrade
      - Zone Parent opportunity is Booked, In Progress, or Completed
      - No promos, free months, buyouts, or promotional credits

      Landmines:

      - MRC must be at least $150 per site.
      - Service must be within 500 feet of the fiber line, not just the vault.
      - The path cannot cross railroads, streets, grassy areas, or run through buildings.
      - Zip 68102 is excluded.
      - Discounts max at 20% unless the term-based table allows more. For example, a 36-month term allows up to 27%; 27.01% no longer qualifies.
      - Check product exclusions before you proceed.
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

      Net investment approval bands:

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
      - Product line issues route to the Product Manager.
      - Dark fiber requires manager and CRO review.
  - heading: Change Order vs MAC
    intro: 'How much is changing, and has billing started? Wrong path = rework—the PDFs have every click and screenshot.'
    body: |
      [Change Order Process — Sales Team — 03/25](https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Change%20Order%20Process%20-%20Sales%20Team%20-%200325.pdf?csf=1&web=1&e=STAe3w) · [Move-Add-Change Processes — Sales Team — 11/23](https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Move-Add-Change%20Processes%20-%20Sales%20Team%20-%201123.pdf?csf=1&web=1&e=zURGTj)

      Start with one question: has billing started?

      | Situation | Use |
      | --- | --- |
      | Change part of a Closed/Won contract before billing | Change Order |
      | Change part of an active billing contract | MAC |
      | Remove all services before billing | Cancellation |
      | Remove all services after billing | Disconnect |

      Change Order path:

      1. Open the GPC Solution.
      2. Go to Conga Files → Change Order.
      3. Generate the Word document and describe the affected sites, the reason for the change, and the exact service changes.
      4. Keep the GPC Solution number on the document.
      5. Get signatures, upload the signed PDF, and send the package to the right workflow owners.

      Notify the Sales Manager early if MRC, payback, or cost shifts. The guide also calls out PMO, Salesforce Admin, and CRC steps after the signed package is uploaded.

      MAC path:

      Use a MAC when the service is already billing and the customer needs a move, add, or change on the live account. Most MAC scenarios require a new GPC Solution on the same opportunity; follow the MAC guide by scenario.

      Landmines:

      - Pending Billing or 7–10 Day Order can block Admin action until PMO or CRC weighs in.
      - Very small CRC/BCC changes may go to businesscare@gpcom.com instead of Salesforce.
      - The MAC guide calls out no AE commission for those narrow Business Care changes.
five_minute_summary: |
  - Use Approval History on the GPC Solution to approve, reject, or recall. Put the Solution ID on every form and attachment so Operations can match documents to the right workflow.
  - Change Orders are for post-signature changes before billing starts. MACs are for changes to active billing contracts.
  - Use Cancellation before billing when all services are coming out; use Disconnect after billing.
  - Request Manual Validation only for real exceptions. It pulls the site out of automated routing and slows the deal down.
knowledge_checks:
  - question: 'You just moved an opportunity to Closed Won, but the customer suddenly wants to upgrade their internet speed before the circuit is installed. What process do you use?'
    options:
      - 'A Change Order. The deal is won, but billing hasn''t started yet.'
      - A Move-Add-Change (MAC). Any change to a signed contract requires a MAC.
      - A Disconnect. You have to cancel the first order and write a brand new one.
    correct_index: 0
    explanation: 'Change Orders handle pre-billing modifications. MACs are only for live, billing circuits.'
  - question: When should you use the 'Request Manual Validation' button?
    options:
      - Only for genuine edge cases and exceptions that require a human to review the site build.
      - On every deal to ensure the engineering team double-checks your work.
      - Whenever you want to expedite the deal through the system.
    correct_index: 0
    explanation: 'Manual validation pulls the deal out of the automated fast lane. Use it rarely, or you are intentionally slowing down your own install.'
  - question: You are attaching a custom pricing spreadsheet to the Salesforce record for approval. What must be included on the document?
    options:
      - The unique Solution ID.
      - The VP of Sales' signature.
      - The customer's billing account number.
    correct_index: 0
    explanation: 'Without the Solution ID, Operations cannot tie your rogue attachment to the correct workflow. Add the ID.'
scenarios:
  - title: The Pre-Install Pivot
    situation: |
      Your customer signed a 36-month contract for a 1 Gig circuit. Two weeks before install, they acquire a new business and realize they need 2 Gigs instead. They haven't been billed yet.
    choices:
      - label: Submit a Move-Add-Change (MAC) ticket since they already signed the contract.
        feedback: 'Incorrect. MACs are only for active, billing services. You need to submit a pre-billing Change Order.'
      - label: Submit a pre-billing Change Order to modify the existing un-installed solution.
        feedback: Correct. This keeps the install moving without messing up the billing triggers.
discovery_questions:
  - 'When a GPC Solution is in approval, how do you track approve, reject, or recall—and who needs to act next?'
  - 'After Closed Won but before billing starts, what kind of change uses a Change Order versus a MAC?'
  - What must appear on every custom pricing sheet or attachment so Operations can match it to the right solution?
  - When would you use Request Manual Validation—and when should you avoid it?
  - How do you handle a full disconnect versus a speed or service change on an already billing circuit?
---

## Overview

- GPC Solution: the core object where approvals, pricing, and technical scoping live.
- Change Order: a pre-billing modification, such as changing port speed before install.
- MAC: a Move-Add-Change on a live billing service.
- Manual Validation: an exception path that breaks automation. Use it sparingly.

---

## Key Guidelines

---

## Common Landmines

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

::: flip ["I'll just click Manual Validation to make sure engineering looks at it."]
The slow lane: manual validation breaks automated routing and makes the deal take longer. Use it only when there is a known, unmappable physical barrier at the site.
:::

::: flip ["I attached the pricing sheet, they'll figure it out."]
The orphaned document: Operations processes hundreds of solutions a week. If the custom pricing sheet or floor plan does not show the GPC Solution ID, the deal can stall while people figure out where it belongs.
:::

::: flip ["The customer signed, so I need to submit a MAC to change the order."]
The MAC mistake: MACs are for active accounts that have already started billing. If the service is not billing yet, use a Change Order so the request lands with the right team.
:::

</div>

---

## Process Deep Dive [deep]

See reference files for detailed guides.
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
    intro: Use this capabilities presentation to frame the portfolio as business infrastructure, not a commodity pipe.
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
  - **Stop selling SKUs:** If you just pitch another internet pipe, we are racing to the bottom on price. Pitch the layered technology partnership.
  - **The Stack:** Access and Wireless Backup are the foundation. WAN sits on top. Security protects it. Unified Communications, Cloud Connect, and Wi-Fi deliver the edge experience.
  - **The Anchors:** We win on our resilient Midwest IP reach, Tier-1 and IX relationships, local field teams, and a 24/7 NOC that actually answers the phone.
  - **Discovery drives design:** You cannot build the right stack until you know their critical apps, site count, and true uptime tolerance.
knowledge_checks:
  - question: A prospect asks for your best price on a 500M circuit. What is your immediate next move?
    options:
      - Pivot to discovery. Ask what applications are running over that circuit and what happens to the business if it goes down.
      - Check the pricing tool and give them a verbal quote to keep their interest.
      - 'Tell them GPC doesn''t compete on price, we only compete on value.'
    correct_index: 0
    explanation: 'If you answer with a price, you are just a commodity. Find the business pain first.'
  - question: How should you position the GPC product portfolio to a new prospect?
    options:
      - 'As an integrated, layered system where reliable fiber is the foundation for secure, cloud-ready operations.'
      - As an à la carte menu where they can pick and choose the cheapest options.
      - Lead with our most expensive SD-WAN solution to anchor the price high.
    correct_index: 0
    explanation: 'Sell the stack. Access is just the enabler for the higher-value UC, Security, and Cloud services.'
  - question: What are the core differentiators you should anchor your 'Why GPC' story on?
    options:
      - 'Resilient Midwest fiber, local support teams, and a true 24/7 NOC.'
      - The fact that we are cheaper than the national cable providers.
      - Our ability to offer month-to-month contracts with no commitment.
    correct_index: 0
    explanation: 'We win on reliability, local presence, and support. We are not the budget option.'
scenarios:
  - title: The Commodity Trap
    situation: |
      An IT Director tells you, "Look, fiber is fiber. Whoever gives me the cheapest 1 Gig dedicated circuit gets the business."
    choices:
      - label: 'Agree, and promise to go to your manager to get special pricing approved to win the logo.'
        feedback: 'You just lost all your leverage. You are now playing their game, and even if you win, it''s a zero-margin deal.'
      - label: 'Challenge the premise. ''Fiber is glass, but who manages the routing, who answers the phone at 2 a.m., and how is the network peered makes a massive difference to your uptime. Let''s talk about what an hour of downtime costs you.'''
        feedback: Correct. Break them out of the commodity mindset and re-anchor on the cost of risk.
roleplay:
  persona: Skeptical CFO at a mid-size Midwest manufacturer
  scenario: Just sat through two carrier pitches that sounded identical. Asks point-blank why GPC is different before walking out of the room.
  goal: 'Deliver a one-sentence ''why GPC'' answer grounded in outcomes and partnership, then anchor the conversation on the comprehensive suite of services and offer the capability deck as a concrete next step.'
---

## At a glance

- **The Goal:** Elevate the conversation from a telecom vendor to a technology partner.
- **The Foundation:** GPC's wholly-owned, resilient Midwest fiber network.
- **The Value Add:** We don't just provide the pipe; we secure the edge (Managed Firewall/SD-WAN), ensure survivability (5G Backup), and power the workforce (UC/Cloud Connect).
- **The Handoff:** Once discovery reveals multi-site complexity, heavy cloud reliance, or strict compliance needs, bring in a Solutions Engineer to design the stack.

---

## Pitch

::: elevator [Elevator Pitch]
Stop selling SKUs and start selling outcomes. GPC isn't just a fiber pipe—we are the secure, flexible infrastructure that keeps your doors open. We layer Managed Wi-Fi, Security, and UC on top of a resilient Midwest network, all backed by a 24/7 local NOC that actually answers the phone.
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
Speed is a commodity; uptime is what you are paying for. When that connection goes down, does their SLA guarantee a local technician, or are you calling an overseas call center? We price for reliability and our 24/7 local NOC.
:::

::: flip ["We prefer to buy our network, security, and voice from different vendors."]
Managing three different vendors means when something breaks, they all point fingers at each other while you stay offline. We provide a single throat to choke. One unified stack, one support number.
:::

::: flip ["We are too small for an enterprise stack."]
Downtime hurts a small business the same way it hurts an enterprise—sometimes worse, because there is no bench. You do not need the whole stack on day one: start with dependable fiber and 5G backup, then layer security as you grow.
:::

</div>

---

## Portfolio quick reference — deck order + national-cable proof

**Ten product lines (deck order):** Fiber Internet · Managed Ethernet · SD-WAN · Wireless Internet Backup · Cloud Connect · Managed Firewall · Video (GPC iTV) · Managed Wi‑Fi · Unified Communications · DDoS Protection. Connectivity comes first—everything else stacks on the pipe.

**GPC vs. Cox (national cable framing —** from the Cox Acquisition Battle Card v2; use when coax-heavy incumbents push *speed-for-price*):

| Capability | GPC | Cox |
| --- | --- | --- |
| Delivery method | 100% fiber | Coax with limited fiber |
| Symmetrical speeds | Yes | No (limited to fiber only) |
| Max speeds available | 100 Gbps | 2 Gbps (coax) / 100 Gbps (fiber) |
| Auto renewals | No | Yes |
| Professional installation fees | None | $100 |
| Activation fees | None | $25 / $99 (standard / gateway) |

**Don't race them on sticker price.** Cox Spectrum Charter buyers still care about **symmetry, delivery method, term locks, and install/activation friction**—pull the conversation to total cost and operational fit, not the month-one number alone. Authoritative collateral lives in **Sales Resources**—this table is a memory anchor, not a second source of record.
<!-- prettier-ignore-end -->

---

<a id="connectivity-access-product-connectivity"></a>

# Connectivity & Access (`product-connectivity`)

<!-- prettier-ignore-start -->
---
id: product-connectivity
title: Connectivity & Access
summary: DIA vs SIA. Ethernet. Beating Starlink.
sensitivity: internal
reference_files:
  - label: Sales Resources (product collateral)
    sharepoint_url: 'https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx'
discovery_questions:
  - 'Are your employees primarily downloading data, or are they constantly uploading large files to cloud servers?'
  - 'How many physical locations do you have, and do they need to share private data directly with each other?'
  - What happens to your customer experience if there is a 500-millisecond delay on your voice and video calls?
  - 'What are your most critical applications day to day, and how much upstream bandwidth do they require?'
  - 'How are sites connected today—shared broadband, MPLS, Ethernet, or SD-WAN—and when do those contracts renew?'
five_minute_summary: |
  - **SIA vs DIA:** Standard Internet (SIA) is for flexible, cost-sensitive needs on shared infrastructure. Dedicated Internet (DIA) is mandatory when they need symmetrical bandwidth, SLA-grade operations, and guaranteed throughput.
  - **Managed Ethernet:** This is for private, Layer 2 connectivity between physical sites. It is an entirely different conversation than internet access.
  - **Wavelength:** High-capacity optical transport for data centers and massive hubs. Do not pitch this as a default upgrade for a standard branch office.
  - **The Starlink play:** Do not dismiss LEO satellite. Instead, anchor on the physics: fiber will always win on latency, weather reliability, and the true cost of downtime.
knowledge_checks:
  - question: A regional accounting firm needs to reliably upload massive tax files to the cloud. Which access product do you pitch?
    options:
      - Dedicated Internet Access (DIA). They need the guaranteed symmetrical upload speeds.
      - Standard Internet Access (SIA). It's cheaper and downstream speed is all that matters.
      - Managed Ethernet. They should just build a private network to the cloud.
    correct_index: 0
    explanation: Heavy upload requirements and critical cloud apps demand the symmetrical SLA of DIA.
  - question: When is Managed Ethernet the correct solution?
    options:
      - 'When a customer needs private, secure, site-to-site connectivity without hitting the public internet.'
      - When they want the fastest possible public internet connection.
      - When they have remote workers who need to VPN into the office.
    correct_index: 0
    explanation: Ethernet is for private Layer 2 transport between physical locations.
  - question: A prospect says they are just going to buy Starlink for their main office because it's cheaper and fast. How do you respond?
    options:
      - 'Acknowledge Starlink is great for residential, but anchor on fiber''s superior latency, weather resilience, and SLA-backed reliability for business.'
      - Tell them satellite internet is garbage and they will regret it.
      - Offer to cut your DIA price in half to match the Starlink hardware cost.
    correct_index: 0
    explanation: Never attack the competitor emotionally. Attack the physics of satellite latency and the lack of an enterprise SLA.
scenarios:
  - title: The SIA Squeeze
    situation: |
      A medium-sized logistics company is complaining about their current cable provider dropping VoIP calls. They want a quote for your cheapest fiber option (SIA).
    choices:
      - label: Quote the SIA to win the business easily.
        feedback: 'You are setting them up to fail. VoIP requires low jitter and consistent throughput. If they are already having issues, shared infrastructure is a risk. You must pitch DIA.'
      - label: 'Explain that shared infrastructure causes VoIP drops. Quote DIA, highlighting the symmetrical SLA that guarantees clean voice traffic.'
        feedback: 'Correct. Solve the actual technical problem, don''t just sell the cheapest SKU.'
roleplay:
  persona: Skeptical IT Director
  scenario: Complaining about VPN jitter and dropped calls over a competitor's shared broadband at three branch locations. Wants the cheapest fix to replace the competitor, and you need to determine whether to quote GPC's Standard Internet (SIA) or step them up to Dedicated Internet (DIA) to guarantee performance.
  goal: 'Pivot from price to reliability—qualify the symmetry and latency requirements for VoIP and cloud apps, then position DIA or Managed Ethernet as the right solution rather than simply more shared bandwidth.'
---

## At a glance

- **SIA (Standard Internet):** Best effort, asymmetrical, shared. Good for basic browsing and small storefronts.
- **DIA (Dedicated Internet):** Symmetrical, guaranteed bandwidth, SLA-backed. Mandatory for VoIP, heavy cloud apps, and enterprise operations.
- **Ethernet:** Private site-to-site transport. Replaces complex VPNs over public internet.
- **Wavelength:** Massive, dedicated optical pipes (10G/100G/400G) for data centers.
- **Pricing:** Keep your pricing internal. Always quote through the standard tools, never throw out "napkin math."

---

## Pitch

::: elevator [Elevator Pitch]
Every application you run lives or dies by the access connection. We don't just sell bandwidth; we sell the right pipe for the problem. From cost-effective Standard Internet to symmetrical, SLA-backed Dedicated Internet and private Managed Ethernet, we build the rock-solid foundation your business needs.
:::

---

## Discovery Galaxy

<div class="rounded-2xl border border-emerald-200/80 overflow-hidden bg-slate-50 shadow-sm">
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
I completely understand watching the budget. However, because you run a heavy VoIP environment, SIA will leave you with the same dropped calls you have today. We need the symmetrical guarantee of DIA to actually solve your problem.
:::

::: flip ["Starlink gets 150Mbps down, why should I pay more for your 100M fiber?"]
Speed tests don't run businesses—latency does. Satellite inherently struggles with latency and weather fade. If your team is running cloud apps or voice, that delay is going to cause major friction. Fiber gives you the physical reliability and an actual SLA.
:::

::: flip ["We use VPNs over our internet to connect our offices. Why buy Ethernet?"]
VPNs over public internet are subject to public internet traffic jams. Managed Ethernet provides a private, secure lane strictly for your data, lowering latency and massively increasing security between your sites.
:::

</div>

---

## Technical Deep Dive [deep]

**SIA vs DIA Qualifiers:**
- If the customer uses heavy VoIP, video conferencing, or relies heavily on cloud-hosted CRMs, **DIA is non-negotiable**.
- SIA is strictly for environments where an occasional slowdown does not impact revenue (e.g., a waiting room Wi-Fi, a small retail shop's secondary terminal).

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

**Fiber vs. Starlink — latency band you can quote on a whiteboard** (per Fiber vs Starlink battle card—always pivot peak Mbps to **latency consistency**):

| Application need | Typical latency requirement |
| --- | --- |
| Video calls | <50 ms |
| VoIP | <150 ms |
| POS | <100 ms |
| VPN | <100 ms |
| Cloud apps | <100 ms |
| Remote support | <100 ms |

Typical **fiber** one-way latency band: **~5–15 ms.** Typical **Starlink** band in the same card: **~21–30 ms**—that's the gap that kills real-time apps when conditions aren't perfect.

**Fiber vs. 5G — capability split** (from Fiber vs 5G one-sheet—5G wins portability; fiber wins always-on business grade):

| Capability | Fiber | 5G |
| --- | --- | --- |
| Supports business growth + high bandwidth | ✓ |  |
| Reliability (less interference from weather / network / obstacles) | ✓ |  |
| High level of security | ✓ |  |
| Portability and flexibility |  | ✓ |
| Lower up-front costs |  | ✓ |

This is also why **5G Wireless Backup** belongs **behind** primary fiber—not as a full-time substitute when the customer needs symmetric, low-jitter, all-hours performance.

**Beating Starlink (LEO Satellite):**
- **The Physics:** LEO is better than legacy satellite, but it still cannot match the consistent low-latency profile of a local fiber network—use the table above when a rep reaches for a number.
- **The Weather:** "Rain fade" is a physical reality for satellite. Heavy cloud cover or storms will degrade the signal.
- **The SLA:** Starlink is best-effort. GPC fiber is backed by an enterprise Service Level Agreement and a local 24/7 NOC.

**Wavelength vs Ethernet:**
- Ethernet is typically sold in sub-10G increments and is highly flexible for multi-site WANs.
- Wavelength is a raw, dedicated optical channel (typically 10G, 100G, or 400G) designed for massive point-to-point data replication between data centers. Do not pitch Wavelength to a standard enterprise branch.
<!-- prettier-ignore-end -->

---

<a id="security-sd-wan-product-security-and-sd-wan"></a>

# Security & SD-WAN (`product-security-and-sd-wan`)

<!-- prettier-ignore-start -->
---
id: "product-security-and-sd-wan"
title: "Security & SD-WAN"
summary: "Managed edge. DDoS mitigation. Multi-site SD-WAN."
sensitivity: "public"
reference_files:
  - label: "Sales Resources (security & SD-WAN collateral)"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx"
discovery_questions:
  - "How many locations do you have, and which ones are on GPC fiber vs. other broadband or MPLS?"
  - "How are those locations connected today—VPN over shared Internet, MPLS, Ethernet? When does that contract expire?"
  - "What are your most important applications? Do you use SaaS like O365 or Salesforce, and are they hosted on-prem or in the cloud?"
  - "Have you experienced a security incident, ransomware event, or DDoS attack? Who manages your firewalls today?"
  - "Do you need always-on DDoS mitigation (proactive) or is business-hours coverage acceptable—and what's the cost of an attack outside those windows?"
five_minute_summary: |
  - **Managed Security:** We offer FortiGate managed edge firewalls and a broader Managed Network Security (MNS) umbrella that includes SIEM, assessments, and email security.
  - **DDoS Protection:** Be clear on the tiers. Proactive offers 24/7 automatic mitigation, while On-Demand is limited to weekday business hours.
  - **SD-WAN:** Powered by VeloCloud for multi-site deployments (requiring at least one site on GPC fiber). Advanced firewall features are optional and must be explicitly quoted.
  - **Engineering Handoffs:** Bring in an SE early for high availability setups, BGP routing, or highly regulated security environments.

knowledge_checks:
  - question: "How does DDoS Protection proactive differ from on-demand for mitigation windows?"
    options:
      - "There is no difference; both are always 24×7 mitigation."
      - "Proactive includes 24×7 automated monitoring and mitigation; on-demand mitigation on the on-demand SKU is weekdays 8–17—qualify so customers don't assume 24×7."
      - "On-demand always includes faster mitigation than proactive."
    correct_index: 1
    explanation: "On-demand ≠ 24×7 mitigation on that SKU."

  - question: "What must be true for the standard SD-WAN positioning in this module?"
    options:
      - "Single home office on any broadband with no GPC sites."
      - "At least one site on GPC fiber and a multi-site WAN footprint (including possible off-net U.S. branches)."
      - "DDoS proactive service on every circuit automatically."
    correct_index: 1
    explanation: "Multi-site + ≥1 GPC fiber site."

  - question: "What should you avoid promising on SD-WAN without SE review?"
    options:
      - "That every advanced security feature on collateral is in the base SKU, or feature parity vs any competitor SD-WAN without validation."
      - "That MPLS migration always finishes in one weekend with zero planning."
      - "Both of the above."
    correct_index: 2
    explanation: "Don't assume base = full NGFW; don't promise overnight MPLS cut without plan."

  - question: "What does Managed Network Security (MNS) represent relative to Managed Firewall alone?"
    options:
      - "MNS is only a rebranded logo with no extra scope."
      - "MNS is the umbrella: managed firewall plus firewall management of customer gear, SIEM, assessments, email security, and related services—scope to the buyer's need."
      - "MNS replaces SD-WAN in every WAN design."
    correct_index: 1
    explanation: "MNS when SIEM, assessments, email, or multi-vendor ops matter."

  - question: "What is an accurate statement about Managed Firewall in this module?"
    options:
      - "It is Fortinet-based managed edge protection with SOC monitoring and a documented feature set—avoid quoting throughput as a fixed guarantee without SE context."
      - "It guarantees compliance certification by itself without review."
      - "It never includes 24/7 monitoring."
    correct_index: 0
    explanation: "SOC + Forti story; throughput/compliance via SE/approved artifacts."

  - question: "When a customer wants always-on DDoS mitigation but selected on-demand for price, what should you do?"
    options:
      - "Tell them on-demand matches proactive mitigation timing."
      - "Explain proactive vs on-demand mitigation windows, confirm business-hour constraints on on-demand, and align SKU to uptime needs."
      - "Avoid documenting what they purchased."
    correct_index: 1
    explanation: "Align SKU to real uptime need."

  - question: "For SD-WAN discovery, what should you confirm regarding security features?"
    options:
      - "Assume IDS/IPS and every NGFW line on collateral are in the base SD-WAN SKU."
      - "Next-gen firewall / IDS lines may be optional add-ons—confirm scope in every quote with SE/quoting."
      - "Security features are irrelevant to SD-WAN."
    correct_index: 1
    explanation: "Map RFP lines to quoted SKUs."

  - question: "When should you engage SE/security early per this module?"
    options:
      - "Never—sales owns all firewall and BGP design alone."
      - "For complex routing/HA, mixed-vendor firewall management, BGP/ASN DDoS designs, regulated environments, or high-scale data center needs."
      - "Only after the customer has paid in full for five years."
    correct_index: 1
    explanation: "Complex/regulated/high-scale → early."

  - question: "What is sound positioning for the SD-WAN platform vs competitors?"
    options:
      - "Cite unverified spec-for-spec claims as facts."
      - "Use local GPC support plus the WAN-edge platform as positioning themes—not unverified apples-to-apples specs."
      - "Promise feature parity with any competitor SD-WAN without review."
    correct_index: 1
    explanation: "Support + fit; SE-approved competitive talk."

  - question: "How should internal fee schedules and pricing PDFs be used?"
    options:
      - "Post them publicly on the customer website."
      - "Internal reference with quoting teams—not customer-facing until validated and approved."
      - "Discard them; pricing is always verbal only."
    correct_index: 1
    explanation: "Pre-quote internal tools only."

scenarios:
  - title: "Customer wants '24/7 DDoS' but budgets for on-demand"
    situation: |
      Wants always-on mitigation; picked **on-demand** for price—set expectations pre-signature.
    choices:
      - label: "Tell them on-demand is the same as proactive for mitigation timing."
        feedback: "Clarify windows; document purchase."

      - label: "Explain proactive vs on-demand windows; align SKU to uptime needs."
        feedback: "Correct."

  - title: "RFP assumes full next-gen firewall in base SD-WAN"
    situation: |
      Procurement pasted IDS/IPS into RFP as included in base SD-WAN at one price.
    choices:
      - label: "Bid base SD-WAN and assume all security lines are included."
        feedback: "Map lines to SKUs with SE/quoting."

      - label: "Review optional NGFW/IDS lines with SE, map RFP lines to quoted SKUs, and document what is in base vs add-on."
        feedback: "Correct."

roleplay:
  persona: "Skeptical IT Director at a regional bank with 12 branches"
  scenario: "Currently running MPLS between branches. Complaining about VPN jitter on shared broadband at smaller locations. Thinks SD-WAN is just 'expensive router software' and insists on managing their own Cisco gear."
  goal: "Qualify multi-site footprint and GPC fiber anchors, then pivot from DIY network management to GPC's fully managed SD-WAN—frame as operational savings, 24/7 NOC support, and cloud breakout improvement rather than a technology debate."
---

## At a glance

- **Managed security:** **Managed Firewall** (FortiGate, SOC-monitored) plus **MNS** when SIEM, assessments, email security, or broader scope matter—match SKU to the buyer’s real need.
- **DDoS:** **Proactive** = 24×7 automated mitigation; **on-demand** mitigation window is **weekdays 8–17** on that SKU—never let a customer assume overnight coverage they did not buy.
- **SD-WAN (VeloCloud):** Standard story needs **≥1 site on GPC fiber** and a **multi-site** WAN footprint; **NGFW/IDS lines are optional add-ons**, not bundled in base—confirm with **SE/quoting** every time.
- **When to pull SE early:** HA/BGP, regulated environments, high-scale DC, mixed-vendor firewall ops, or **BGP/ASN DDoS** designs.

---

## Pitch

::: elevator [Elevator Pitch]
We put policy on the pipe. Our Security and SD-WAN portfolio stops threats at the edge and routes traffic intelligently across any access type. With SOC-monitored firewalls, proactive DDoS mitigation, and VeloCloud SD-WAN, we deliver enterprise-grade protection managed entirely by our local 24/7 NOC.
:::

---

## Discovery Break

<div class="mt-4 rounded-2xl border border-emerald-200/80 overflow-hidden bg-slate-50 shadow-sm">
  <iframe
    src="games/brick-breaker-1/index.html?embed=1&module=product-security-and-sd-wan"
    title="Discovery Break — Brick breaker"
    loading="lazy"
    sandbox="allow-scripts allow-same-origin"
    style="width: 100%; border: 0; display: block; height: min(95vh, 85rem); min-height: 44rem; background: #f1f5f9;"
  ></iframe>
</div>

---

## Objection Handling

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

::: flip ["We manage our own Cisco gear."]
GPC's fully managed SD-WAN eliminates upfront CapEx and frees your team from network management. A single monthly charge covers install, management, and 24/7 NOC monitoring — your team gets out of break-fix and back to the business.
:::

::: flip ["Our current solution works fine."]
Ask: do you have visibility into application performance across all sites? SD-WAN Orchestrator provides real-time views into access link performance and lets you prioritize critical apps—even over a single link.
:::

::: flip ["SD-WAN is too expensive."]
SD-WAN pricing sits between SIA and DIA—often less than the MPLS it replaces. The ROI comes from eliminating complex and costly MPLS services and improving uptime for revenue-generating applications. Walk current pricing through **Sales Resources** with quoting—not from memory.
:::

::: flip ["We only have sites in Nebraska."]
SD-WAN works over any transport—GPC fiber, cable, DSL, T1, or 4G/5G wireless. With at least one site on GPC fiber, all US locations including off-net branches can participate.
:::

::: flip ["The on-demand DDoS is fine—we're not a target."]
Confirm: on-demand mitigation windows are weekdays 8–17 only. After-hours attacks won't be mitigated until the next business day. If that risk is acceptable, document it; otherwise, align to proactive.
:::

::: flip ["Is NGFW included in the base SD-WAN SKU?"]
No—next-gen firewall and IDS/IPS are optional add-ons, not bundled in base VeloCloud. Quote and scope with SE so security expectations match what's on the order.
:::

</div>

---

## Technical Deep Dive [deep]

**SD-WAN (VeloCloud) qualifiers:**
- Minimum: ≥1 site on GPC fiber + multi-site WAN footprint
- Off-net US branches can participate via any Internet transport
- Business rule: at least one site on GPC fiber required
- NGFW and IDS/IPS lines are optional add-ons—not included in base SD-WAN SKU; confirm with SE/quoting on every quote

**SD-WAN commercial framing:** SD-WAN MRC sits **between SIA and DIA** at comparable speeds — often less than the MPLS it replaces. **Internet bandwidth is purchased separately** from the SD-WAN overlay; that split is worth flagging in every quote so the customer sees the full stack. Current rate cards live in **Sales Resources** (protected) — pull with quoting, never from memory. Proof point from the financial-services use-case set: one advisory shop saw **~60% savings on public broadband vs. private network services** after SD-WAN—cite with care; SE validates on every financial narrative.

**Managed Firewall — Fortinet platform tiers** (from the Managed Firewall datasheet—**SE picks the model**; don't quote throughput as a contractual guarantee without approved collateral):

| Tier | Office platforms | Firewall throughput | IPS throughput |
| --- | --- | --- | --- |
| Small Office | FG-30G | 4 Gbps | 800 Mbps |
| Medium Office | FG-50G | 5 Gbps | 2.25 Gbps |
| Large Office | FG-70G | 10 Gbps | 2.5 Gbps |
| Hub/HQ Office | FG-90G | 28 Gbps | 4.5 Gbps |

| Tier | Data center platforms | Firewall throughput | IPS throughput |
| --- | --- | --- | --- |
| Small DC | FG-100F | 20 Gbps | 2.6 Gbps |
| Medium DC | FG-120G | 39 Gbps | 5.3 Gbps |
| Large DC | FG-400F | 79.5 Gbps | 12 Gbps |

**Managed Firewall:** FortiGate-based edge + SOC monitoring on top of this hardware ladder. Compliance and real-world throughput still route through **SE + approved sheets**.

**MNS (Managed Network Security) — six components** (umbrella; match SKU to what the buyer actually runs today):

1. **Managed Firewall** — fully managed Fortinet NGFW, 24×7 monitoring, threat detection, VPN access, optional zero-trust.
2. **Firewall Management** — 24×7 management of **their existing** firewalls across **Cisco, Fortinet, Palo Alto**, and more.
3. **Firewall Plus with Managed SIEM** — data aggregation, threat prioritization, log retention, actionable insight.
4. **Firewall & Enterprise Security Assessments** — architecture / policy review, vulnerability findings, remediation roadmap.
5. **Vulnerability Scanning** — scheduled active + passive monitoring with expert interpretation.
6. **Managed Email Security** — AI-driven threat and DLP coverage for platforms like Microsoft 365 and Slack.

**DDoS Protection — Proactive vs. On-Demand** (from the DDoS product sheet—**never** let a customer assume 24×7 mitigation on the wrong SKU):

| Feature | Proactive DDoS | On-Demand DDoS |
| --- | --- | --- |
| Monitoring portal + traffic analysis | ✓ | ✓ |
| 24×7 automated monitoring + notifications | ✓ | ✓ |
| **Mitigation** | **24×7 automated mitigation** | **Mitigation weekdays 8 am–5 pm only** |
| Bandwidth thresholds per customer | ✓ | ✓ |
| Bandwidth range | 10 Mbps – 100 Gbps | 10 Mbps – 100 Gbps |
| BGP FlowSpec + TMS | ✓ | BGP FlowSpec only |

**The line that saves your renewal:** e-commerce at 2 a.m. needs **Proactive**. A brick-and-mortar shop whose web ordering is mostly business-hours *might* be fine on **On-Demand**—document the trade-off in writing before signature.

**Handoffs:** SE/security for HA, BGP/ASN DDoS, mixed-vendor firewall management, regulated environments, unusual scale. Pricing PDFs are internal until quoting validates.

**Vertical fit:** retail stores, regional healthcare, community banking, insurance brokers, government, education, manufacturing—any multi-site business with VoIP/SaaS pain.

::: accordion DDoS Protection Overview
DDoS proactive vs on-demand positioning and mitigation windows are in **Sales Resources**—read the current product sheet before you promise 24×7 coverage on the wrong SKU.
:::

::: accordion SD-WAN Retail Brief
Retail vertical briefs and proof points live in **Sales Resources**—pair with SE when the design is non-standard.
:::

::: accordion SD-WAN Healthcare Brief
Healthcare SD-WAN talking points and compliance-oriented hooks are maintained in **Sales Resources**—validate PHI/regulated claims with SE.
:::
<!-- prettier-ignore-end -->

---

<a id="cloud-wi-fi-backup-product-cloud-wifi-and-backup"></a>

# Cloud, Wi-Fi & Backup (`product-cloud-wifi-and-backup`)

<!-- prettier-ignore-start -->
---
id: product-cloud-wifi-and-backup
title: 'Cloud, Wi-Fi & Backup'
summary: Cloud Connect. Managed Wi-Fi. 5G Wireless Backup & Broadband.
sensitivity: internal
reference_files:
  - label: 'Sales Resources (cloud, Wi‑Fi, backup collateral)'
    sharepoint_url: 'https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx'
video_carousel:
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
  - **Cloud Connect:** This is not internet. It is a private, predictable, jitter-free path directly from our network to AWS, Azure, or Google Cloud. Pitch it when they run mission-critical SaaS apps.
  - **Managed Wi-Fi:** We own the last 10 feet of connectivity. It includes guest network separation and fully managed lifecycle support. Never guess AP counts—always require a site survey.
  - **5G Wireless Backup:** The insurance policy *behind* primary fiber. Cradlepoint X20-5G with automatic failover, automatic reversion, and an optional 8-hour backup battery. The cellular underlay is Verizon/AT&T—heavy users hit a daily throttle after failover, so set expectations.
  - **5G Wireless Broadband:** Cellular as the *primary* internet path. Two motions: (1) a temporary bridge while a fiber build is in flight, or (2) the long-term answer where fiber isn't available. Same Cradlepoint hardware as Backup, but the carrier hands out a DHCP IP—anything hosted on prem will not be reachable from the internet. Temporary wireless service is **non-commissionable**; you earn the commission once the fiber circuit lights.
  - **The pitch order & ground rules:** Sell primary fiber first, attach 5G Backup for redundancy, and finish with Managed Wi-Fi for the localized experience. Use 5G Broadband to bridge a fiber install gap or to cover a site fiber can't reach. Wireless is **in-territory only** and **only attaches to SIA / DIA / SD-WAN**—it's not a stand-alone offer. No SLAs: every wireless circuit is "best effort."
knowledge_checks:
  - question: A prospect wants to know how much 15 Wi-Fi Access Points will cost for their new warehouse. What do you do?
    options:
      - Refuse to quote AP counts blindly. Tell them a proper site survey is mandatory to ensure coverage and avoid dead zones.
      - Look at the pricing sheet for 15 APs and send them a rough estimate.
      - Assume a warehouse needs double the APs and quote them 30 just to be safe.
    correct_index: 0
    explanation: 'Never guess on Wi-Fi. A warehouse full of metal racks is a nightmare for signal. Survey first, quote second.'
  - question: What is the primary technical advantage of Cloud Connect over a standard Dedicated Internet Access (DIA) circuit?
    options:
      - 'Cloud Connect bypasses the public internet entirely, eliminating variable latency and jitter for cloud workloads.'
      - Cloud Connect is significantly cheaper than DIA.
      - Cloud Connect provides built-in DDoS protection for their website.
    correct_index: 0
    explanation: 'DIA still uses the public internet. Cloud Connect is a private, dedicated lane straight to the cloud provider.'
  - question: A customer says they don't need 5G Backup because they have a cheap coax cable connection from a competitor as their backup. What is your response?
    options:
      - 'Point out that cable and fiber often share the same physical utility poles. If a truck hits the pole, both go down. 5G offers true path diversity.'
      - Agree that cable is a fine backup and focus on selling the primary fiber.
      - Offer to lower the price of our 5G Backup to beat the cable provider's price.
    correct_index: 0
    explanation: 'Wired backups often share the same physical vulnerabilities (trenches, poles, building entry). Wireless provides actual physical diversity.'
  - question: "A customer's new retail location goes live in 14 days, but the fiber build for that address won't be ready for 90. They're already a GPC SIA customer at their main office. What's the right play?"
    options:
      - Tell them to delay the store opening until the fiber circuit lights.
      - Sell them 5G Wireless Broadband as a temporary bridge—the Cradlepoint goes in now, and once fiber lights it converts into a Wireless Backup attachment behind the new SIA/DIA.
      - 'Sell them a permanent 5G Wireless Broadband contract since cellular is effectively the same as fiber for a retail site.'
    correct_index: 1
    explanation: 'Bridging a fiber install gap is the textbook temporary use case for Wireless Broadband. Same hardware re-roles as Backup once fiber turns up—remember the commission lands on the SIA/DIA, not the temporary bridge.'
  - question: "A prospect wants to run a small ERP server on-premise and reach it from the public internet. They love the idea of 5G Wireless Broadband as their primary connection because it installs faster than fiber. Are they a fit?"
    options:
      - 'Yes—Cradlepoint will port-forward a public IP through to the on-prem server.'
      - 'Yes—you can request a static IP from the cellular carrier for an additional fee.'
      - 'No—Wireless Broadband uses a DHCP IP from the carrier, so anything hosted on prem is unreachable from the internet. They need SIA or DIA for that workload.'
    correct_index: 2
    explanation: 'Static IPs work on the GPC landline side only. Neither Backup (during failover) nor Broadband supports prem-hosted services reachable from the internet. If the customer hosts inbound services, lead with SIA/DIA.'
  - question: "You close a 5G Wireless Broadband deal at a customer site that's still waiting on a fiber install. When do you get commissioned?"
    options:
      - At install, like every other wireless circuit.
      - Never. Temporary wireless service is non-commissionable—you're commissioned on the SIA/DIA contract once the fiber circuit lights and the wireless converts to Backup.
      - At half the rate of a permanent wireless contract.
    correct_index: 1
    explanation: 'Temporary wireless service is non-commissionable—a hard GPC business rule. Plan your pipeline accordingly and stay close to the fiber install date so the SIA/DIA commission actually lands.'
scenarios:
  - title: The Jittery Cloud
    situation: |
      A financial firm moved their entire database to AWS. They have a 1 Gig DIA circuit, but they are complaining about random lag spikes during the afternoon that disrupt their trading software.
    choices:
      - label: Tell them to upgrade to a 2 Gig DIA circuit to power through the lag.
        feedback: Throwing bandwidth at a latency problem doesn't work. The issue is public internet routing. They need Cloud Connect.
      - label: Pitch Cloud Connect. Explain that jumping off the public internet and using a private cross-connect will eliminate the routing jitter.
        feedback: Correct. Private paths solve latency variability. Match the tech to the problem.
  - title: The Fiber-Island Bridge
    situation: |
      A regional grocery chain is opening a 12,000-sq-ft satellite store on the edge of GPC's serviceable footprint. Go-live is 30 days out. The fiber build for that address has a 75-day engineering and trench window. They already have GPC DIA at HQ.
    choices:
      - label: Tell them to push the store opening—fiber is the only safe option, and a 45-day gap is the cost of doing business.
        feedback: Pushing a store opening for a 45-day fiber gap will torch the relationship. There is a faster, GPC-approved play.
      - label: 'Sell 5G Wireless Broadband as a temporary bridge. Engineering installs the Cradlepoint X20-5G now; when fiber lights at day 75, the same hardware re-roles as 5G Backup behind the new SIA/DIA circuit.'
        feedback: 'Correct. Bridge the install gap with wireless, then convert to Backup at fiber turn-up. Two things to remember: the bridge period is non-commissionable (your commission lands on the SIA/DIA when fiber lights), and the store cannot host inbound services on the wireless DHCP IP during the bridge.'
      - label: Sell them a cheap consumer cellular hotspot as a stopgap and circle back when fiber's ready.
        feedback: Off-net and unmanaged—GPC has nothing to monitor or warranty, and you have no path to convert to Backup. This gap is exactly what our Wireless Broadband SKU is designed to close.
  - title: The Static-IP Trap
    situation: |
      A small accounting firm wants to ditch their slow cable internet. They love that 5G Wireless Broadband can install in days instead of waiting for a fiber build. They also self-host a client portal on a server in their back office and need it reachable from the public internet.
    choices:
      - label: Sell the 5G Wireless Broadband and tell them you'll request a static IP from the carrier as a follow-up.
        feedback: There is no carrier-provided static IP path on Wireless Broadband—the carrier hands out DHCP. Promising a static IP is a commitment you cannot deliver.
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
- **Managed Wi-Fi:** Fully managed edge. Requires a site survey. Do not quote blindly.
- **5G Wireless Backup:** Automatic failover for primary circuits. True physical diversity compared to a secondary wired connection.
- **5G Wireless Broadband:** Cellular as the *primary* internet path—either a temporary bridge while a fiber build runs, or the long-term answer where fiber isn't available. Attaches to SIA / DIA / SD-WAN only; in-territory only.

---

## Pitch

::: elevator [Elevator Pitch]
When critical apps go down, nobody cares how cheap their internet was. We protect your uptime with a private, jitter-free Cloud Connect path to AWS/Azure, secure Managed Wi-Fi for the last ten feet, and 5G Wireless—either as the insurance policy behind primary fiber, or as the primary path itself when fiber isn't there yet.
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

**Cloud Connect:**
- We establish a private NNI (Network-to-Network Interface) with the major cloud providers.
- Bypassing the public internet inherently secures the transport layer and stabilizes latency.
- Always involve a Solutions Engineer (SE) to map the cross-connects properly.

**Managed Wi-Fi:**
- Includes AP hardware, licensing, and NOC support.
- Requires a predictive or physical site survey. Building materials (concrete, metal racks, glass) heavily impact radio frequencies. Guessing AP counts results in bad deployments and angry customers.

**5G Wireless Backup:**
- Sits behind the customer's primary GPC wireline circuit (SIA, DIA, or SD-WAN). Only active during a primary-circuit outage—fails over and fails back automatically.
- Hardware: Cradlepoint X20-5G CPE (or E100 LTE on the lower tier) installed and managed by GPC; optional ~8-hour backup battery for site-wide power loss.
- Cellular underlay is Verizon and/or AT&T; the wireless connectivity itself is procured through Kajeet. Failover typically completes in about a minute.
- "Best effort"—no SLA. After failover, heavy daily usage hits a **carrier-side throttle** on the 5G tier—the customer doesn't get "unlimited at full speed" through a multi-day outage. Walk the table **before** signature so nobody panic-calls you mid-disaster:

| Daily usage on failover (approx.) | Speed cap after throttle |
| --- | --- |
| After **12 GB** | Up to **50 Mbps** |
| After **20 GB** | Up to **25 Mbps** |
| After **30 GB** | Up to **3 Mbps** |

The product is designed to keep the doors open and the registers ringing during an outage, not to run a 400-person video conference simultaneously. Set expectations.
- **Static IP gotcha:** Static IPs work on the GPC landline side, but the carrier hands out a different (DHCP) IP during failover. If the customer has inbound services tied to a static IP, they break during the outage—document this expectation up front.

**5G Wireless Broadband:**
- Cellular as the *primary* internet path—full-time, not failover. Same Cradlepoint X20-5G CPE and Verizon/AT&T underlay (via Kajeet) as Backup; managed and monitored by GPC.
- **Two motions:**
    - **Temporary bridge:** Wireless covers a new site that needs to be open for business before its fiber build completes. When fiber turns up, the same Cradlepoint re-roles as 5G Backup behind the new SIA/DIA circuit. Customer is billed at the contracted SIA/DIA rate from day one; the temporary wireless service is **non-commissionable**, so reps earn the commission on the wireline circuit when fiber lights.
    - **Permanent:** Wireless is the long-term primary at sites where fiber isn't available (in-footprint but unreachable, rural, MDU edges). Unlimited data, no overage charges, no bandwidth limits—but still "best effort."
- Throughput is typically **up to ~100 Mbps and higher**, varying by carrier, location, signal, building penetration, and tower congestion. Wireless is asymmetric and every location is different—never quote it like fiber.
- **No static IP** on Wireless Broadband. The customer's public IP comes from the carrier via DHCP, so anything hosted on prem (mail server, VPN concentrator, ERP web frontend, etc.) is **not reachable from the internet**. If on-prem hosting is in scope, lead with SIA/DIA.

**Wireless business rules (Backup *and* Broadband):**
- Sell **in GPC territory only**.
- Wireless Internet attaches to **new or existing SIA, DIA, or SD-WAN** customers—it's not a stand-alone offer.
- **No SLA guarantees**—all wireless circuits are "best effort."
- **Temporary wireless service is non-commissionable** (see commission rule above). Permanent Broadband and standalone Backup commission normally.
- Wireless Broadband (temporary) converts to Backup automatically once the customer's fiber install lights up.
<!-- prettier-ignore-end -->

---

<a id="gpc-itv-for-business-product-itv"></a>

# GPC iTV for Business (`product-itv`)

<!-- prettier-ignore-start -->
---
id: "product-itv"
title: "GPC iTV for Business"
summary: "Business streaming. Cloud DVR. Single-bill simplicity."
sensitivity: "internal"
reference_files:
  - label: "GPC iTV collateral — SharePoint (source of truth)"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx"
discovery_questions:
  - "What type of business is this, how many screens need TV, and which channels or sports are must-haves for staff or customers?"
  - "Who provides Internet at each site today—and is it already on GPC fiber or broadband, or still with another carrier?"
  - "What TV hardware do you have now (smart TVs, boxes, commercial displays)—and are you open to streaming-first delivery or do you expect set-top boxes at some locations?"
  - "How do you handle lineups, pricing, and packaging today—who signs off before you promise specific channels or rates?"
  - "What does success look like after install—single bill with connectivity, guest vs staff viewing, and who owns support when something buffers or drops?"
five_minute_summary: |
  - **What it is:** GPC iTV is a **streaming TV** offer for businesses—popular channels and features such as **Cloud DVR** and **Replay TV**—delivered over the customer’s **existing GPC Internet** connection.
  - **Who it fits:** Positioned as **customizable** for small shops through larger sites; discovery still matters for channel mix, screens, and budget.
  - **Why it sticks:** Highlights from collateral include **HD channels**, **popular sports**, **local channels** (events and weather), and **saving on monthly equipment and DVR rentals** where the solution applies—always confirm against current rate cards and tools.
  - **Commercial story:** **Single bill** for multiple services when bundled appropriately; use **SharePoint** for current collateral, lineup detail, and QR-driven “learn more” assets—not copies embedded in this app.
  - **Footprint reality:** Some businesses or TV setups may need **set-top boxes**, available at a **low monthly rate**—call that out in discovery so installs match expectations.

knowledge_checks:
  - question: "What does GPC iTV primarily rely on at the customer site?"
    options:
      - "Any third-party ISP circuit with no relationship to GPC access products."
      - "The customer’s GPC Internet connection as the delivery path for the streaming TV service."
      - "Satellite backhaul only, independent of fiber or broadband."
    correct_index: 1
    explanation: "Collateral positions iTV over existing GPC Internet—qualify access first."

  - question: "Which pair are called out as headline features on standard GPC iTV marketing collateral?"
    options:
      - "Cloud DVR and Replay TV."
      - "Dedicated wavelength transport and MPLS only."
      - "On-premises PBX licensing and analog-only voice."
    correct_index: 0
    explanation: "Marketing collateral leads with Replay TV and Cloud DVR alongside HD, sports, and locals."

  - question: "What should you disclose when TV setups or business types may not support a pure streaming experience?"
    options:
      - "That no additional hardware ever applies."
      - "That set-top boxes may be required for some businesses or TV set-ups, typically at a low monthly rate—confirm with current packaging."
      - "That sports channels are never included."
    correct_index: 1
    explanation: "The asterisked footnote on standard collateral covers STB scenarios."

  - question: "How does standard iTV collateral describe the billing story for customers with multiple services?"
    options:
      - "Separate invoices per stream with no bundle option."
      - "A convenient single bill for multiple services when sold in that model—validate with ordering and billing teams."
      - "Cash-only billing at the truck roll."
    correct_index: 1
    explanation: "Single-bill convenience is a stated benefit—keep fulfillment aligned to reality."

  - question: "A prospect is interested in GPC iTV but their Internet today is with a national cable carrier. What's the right opening move per the iTV product sheet?"
    options:
      - "Sell GPC iTV as-is over their existing carrier circuit—it's a streaming app, so any decent broadband works."
      - "Walk away—iTV isn't a fit for anyone on a competitor's ISP."
      - "Position iTV alongside GPC Internet (SIA, DIA, or Broadband) as the underlying access path; pair with the Connectivity & Access module to qualify a path before quoting iTV."
    correct_index: 2
    explanation: "The product sheet ties iTV to the customer's *GPC* Internet connection. Don't sell it as carrier-agnostic—qualify the access path first or you'll have a delivery and support problem at install."

  - question: "A prospect insists you guarantee specific regional sports networks over the phone before they share their site address. How should you respond per the iTV product sheet?"
    options:
      - "Guarantee the full lineup verbally so you don't lose the meeting—channel mixes are mostly consistent across markets."
      - "Decline to guarantee specific channels. The product sheet's QR code resolves to a *local lineup* that varies by market—qualify the address first, then confirm channel carriage from the official lineup tool or SharePoint asset."
      - "Tell them all sports channels are always included with every iTV plan."
    correct_index: 1
    explanation: "Channel lineup is market-dependent. The product sheet directs customers to a QR code for their *local* lineup—verbal channel guarantees before address qualification are how reps end up over-promising and apologizing at install."

  - question: "How does the GPC iTV product sheet describe the target customer profile?"
    options:
      - "National enterprises with multi-market broadcast needs only."
      - "Single-screen residential customers in GPC's footprint."
      - "Customizable to businesses of all sizes and industries—from small mom-and-pop shops through larger businesses."
    correct_index: 2
    explanation: "Verbatim from the product sheet: iTV is positioned for the full spectrum from mom-and-pop through larger sites. The differentiator is *customizable*, not size-bound."

scenarios:
  - title: "Waiting room TVs on a competitor ISP"
    situation: |
      A **retail** prospect wants **GPC iTV** for lobby screens but **Internet is still with another carrier**.
    choices:
      - label: "Sell iTV standalone and assume any broadband will work the same."
        feedback: "Collateral ties iTV to **GPC Internet**—qualify access path and bundle story first."

      - label: "Align them on GPC Internet (or approved access) as the foundation, then position iTV, channels, and DVR value."
        feedback: "**Good.** Match the architecture in current SharePoint collateral."

  - title: "Customer wants every regional sports network without discovery"
    situation: |
      They insist on a **channel list guarantee** before sharing address or serviceability.
    choices:
      - label: "Guarantee the full RSN lineup verbally to win the meeting."
        feedback: "Use **public lineup / QR** flows and official tools—avoid hand-waving."

      - label: "Use gpcom.com/gpcitv and SharePoint lineup guidance; capture location and qualify before promising specific channels."
        feedback: "**Good.** Lineup is market-dependent."

roleplay:
  persona: "Frugal retail owner"
  scenario: "Two screens in a coffee shop, wants local morning shows and weekend sports for patrons, skeptical of 'another box fee.' Worried about equipment clutter."
  goal: "Explain streaming-first value (Cloud DVR, Replay TV, HD), acknowledge when set-top boxes may be needed per current collateral footnotes, and anchor on GPC Internet + single-bill simplicity without overpromising channel counts before lineup confirmation."

---

## At a glance

- **Architecture:** iTV is **streaming TV for business** (channels, **Cloud DVR**, **Replay TV**) over the customer’s **GPC Internet**—qualify access first; don’t sell iTV as carrier-agnostic broadband entertainment.
- **Footprint:** Collateral spans **small shops to larger sites**; some installs still need **set-top boxes** at a **low monthly rate**—call that out in discovery so expectations match the quote.
- **Truth sources:** **SharePoint** (and official tools) for **lineups, QR “learn more,” rate cards, and packaging**—this module is enablement, not a second source of record.

---

## Common Landmines

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

::: flip ["Streaming-only means zero hardware—we never need a box."]
**The "No Equipment Promise" Trap:** Standard iTV collateral is **streaming-first**—but the footnote is explicit: **some** businesses or TV setups still need **set-top boxes** at a **low monthly rate**. Promise a 100% box-free install without qualifying the site and you'll fight the customer at truck roll. Call STB possibility out in discovery *before* you quote.

:::

</div>

---

## Discovery Galaxy

<div class="rounded-2xl border border-emerald-200/80 overflow-hidden bg-slate-50 shadow-sm">
  <iframe
    src="games/galactica-1/index.html?embed=1&module=product-itv"
    title="Discovery Galaxy"
    loading="lazy"
    sandbox="allow-scripts allow-same-origin"
    style="width: 100%; border: 0; display: block; aspect-ratio: 16 / 10.5; height: auto; max-height: min(88vh, 44rem); background: #f1f5f9;"
  ></iframe>
</div>

---

## Why GPC iTV

Keep customers engaged with **GPC iTV**—a **streaming TV** solution for business. Standard positioning describes it as the **latest** streaming TV offer from GPC: **popular channels** and **modern features** (including **Cloud DVR** and **Replay TV**) over the customer’s **existing GPC Internet** connection. **Authoritative PDFs, rate cards, and updates live in SharePoint**—use the module reference link, not static copies here.

Position it for **mom-and-pop through larger sites**: the story is **customizable** by industry and footprint, but your job is still to **qualify** screens, wiring, content needs, and **access**.

## Headline benefits

| Theme | How to talk about it |
|--------|----------------------|
| **Replay TV** | REPLAY TV |
| **Cloud DVR** | CLOUD DVR |
| **HD channels** | HD CHANNELS |
| **Popular sports** | POPULAR SPORTS CHANNELS |
| **Local channels** | Local channels included, allowing you and your customers to stay on top of local events and weather. |
| **Equipment savings** | “**Save money on monthly equipment and DVR rentals**” where the *streaming-first* model applies—**footnote:** some sites may still need **set-top boxes** at a **low monthly rate**. |
| **Single bill** | Convenient single bill for multiple services. |

## Delivery & lineup

- **Internet dependency:** Messaging assumes **GPC Internet** is in place (or will be)—lead with **access** qualification where iTV is in play.
- **Lineup & “learn more”:** Collateral typically points to a **QR code** for **local lineup**—confirm the current asset on **SharePoint**. For customer-facing overview, [gpcom.com/gpcitv](https://gpcom.com/gpcitv/) may still apply; **internal source of truth remains SharePoint.**

## How to use & follow-ups

1. Run **discovery**: business type, screens, must-have channels/sports, **existing TV hardware**, **who provides Internet today**.
2. Pair with **Connectivity & Access** when Internet is not yet GPC—iTV is not a substitute for access.
3. Keep **lineup, pricing, equipment** on **official tools**; **SharePoint** is source of truth—not this app.
4. Use **Sales Resources** / iTV on **SharePoint** for workbooks and PDFs; cross-link **Portfolio & Business Capabilities** when TV is part of a broader story.
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
  - label: 'Sales Resources (UC, voice, contact center)'
    sharepoint_url: 'https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx'
discovery_questions:
  - How are your employees currently making external phone calls when they are working remotely?
  - 'You mentioned using Microsoft Teams. Are you currently paying for the Teams Phone add-on license, or are you looking for a more cost-effective way to integrate voice?'
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
  - **The Microsoft Teams Play:** We have two motions. "Embedded UC" puts our app inside Teams and saves them the MS Teams Phone license. "Ascend with Teams" uses the native MS dialer and *does* require the MS Teams Phone license. Do not blend these pitches.
  - **The Bundle:** Our platform (powered by Intermedia) includes enterprise calling, SMS/MMS, HD meetings, and AI recaps on a 99.999% uptime foundation.
  - **The Plan Ladder:** Five tiers — **Resource Line** (one concurrent endpoint, no apps; for front-desk, lobby, and conference-room phones that just need to ring), **Express** (voice only), **Essentials** (adds video up to 25 + AI recap + call recording), **Pro** (adds inbound Call Center + CRM integrations + video to 100), **Enterprise** (Pro + video to 200 + 200 GB storage). Pick by **workload**, not company size — plans **mix and match per user**, so most multi-site customers run a *blend* (Resource Lines at lobby phones, Express at reception, Pro for sales, Enterprise at HQ).
  - **Contact Center:** We sell an omnichannel CX add-on (Voice, SMS, chat). Licensing is concurrent, meaning they only pay for the maximum number of agents logged in at the same time, not a named license for every single employee. Note: UC Pro and Enterprise already include *inbound* Call Center features (queueing, supervisor monitor/whisper/barge); the dedicated **CCaaS** product is the separate omnichannel SKU.
  - **Legacy:** We still support SIP and PRI for customers who aren't ready to move fully to the cloud, but the goal is always to pivot to UCaaS.
knowledge_checks:
  - question: "A prospect wants to add external calling to Microsoft Teams. They think they need to buy Microsoft's 'Teams Phone' add-on license for every user. Are they right?"
    options:
      - "It depends on the design. Our 'Embedded UC' app bypasses the MS license, but if they want native 'Direct Routing' through the MS dialer, they must buy the MS Teams Phone license."
      - "No. With our embedded UC for Teams solution, they get full calling and SMS inside Teams without needing to buy the Microsoft Teams Phone license."
      - "Yes. Microsoft requires the Teams Phone license for any external calling, regardless of the provider."
    correct_index: 0
    explanation: "There are two different technical paths. Never guarantee 'no MS licensing' until an SE validates which path the customer actually wants."
  - question: How is our Contact Center (CCaaS) product licensed?
    options:
      - Concurrent licensing. They pay for the maximum number of agents logged in simultaneously.
      - Named user licensing. They pay a fee for every single employee in the company.
      - Per-minute billing. They only pay for the time agents spend actively talking.
    correct_index: 0
    explanation: Concurrent licensing is a massive cost-saver for businesses with shift workers or part-time agents.
  - question: A customer experiences a complete Microsoft 365 outage and Teams goes down. What happens to their phones if they use our embedded UC solution?
    options:
      - They can still make and receive calls using our standalone desktop or mobile UC app. We provide continuity when Teams fails.
      - Their phones go down completely until Microsoft fixes the issue.
      - Calls are automatically forwarded to their personal cell phone voicemails.
    correct_index: 0
    explanation: 'Because our voice infrastructure is separate from Microsoft''s, a Teams outage doesn''t take down their ability to communicate.'
  - question: A 12-person law firm wants UC. Mostly desk-phone client calls, occasional Zoom-style meetings with up to 8 people, no contact center. Which UC plan should you lead with?
    options:
      - UC Enterprise — clients deserve the top tier regardless of workload.
      - UC Essentials — voice calling plus video conferencing for up to 25 participants, AI Meeting Recap, and Call Recording. The Call Center features in Pro and Enterprise aren't needed.
      - UC Express — small firms only need voice, so video is overkill.
    correct_index: 1
    explanation: Match the plan to the **workload**, not the company size. Essentials covers their video need (Express has no video) without paying for Pro/Enterprise call-center features they won't use.
  - question: 'A prospect says "we need a contact center." UC Pro already advertises Call Queueing, Agent Log-In/Out, Wallboards, and Supervisor Monitor/Whisper/Barge. Should you sell them UC Pro or the dedicated CCaaS add-on?'
    options:
      - 'Always sell CCaaS — it has more features and a bigger price tag.'
      - 'Always sell UC Pro — the call-center features inside the plan are equivalent to the dedicated CCaaS product.'
      - 'It depends on the workload. UC Pro/Enterprise covers a small/medium **inbound voice** call-center (queue, hunt, supervisor). The dedicated **CCaaS** product is the answer for **omnichannel** (voice + SMS + chat), advanced IVR, deep CRM screen-pops, and concurrent licensing across channels. Get an SE to scope before quoting.'
    correct_index: 2
    explanation: UC Pro/Enterprise's Call Center features are a fully usable inbound voice operation — perfect for a 10-seat help desk. CCaaS is the separate omnichannel product. Conflating the two at quote time creates an install fight; let the SE scope it.
  - question: A 175-person company wants UC for their monthly all-hands video call. What is the minimum UC plan tier that supports the meeting size?
    options:
      - UC Essentials — video conferencing is included.
      - UC Pro — video conferencing for up to 100 participants.
      - UC Enterprise — video conferencing for up to 200 participants. Essentials caps at 25 and Pro caps at 100, so a 175-person all-hands won't fit either.
    correct_index: 2
    explanation: The participant ceilings step **25 → 100 → 200** across Essentials / Pro / Enterprise. For a 175-person meeting, Enterprise is the floor.
  - question: A prospect wants to port in 8 existing carrier DIDs that are still under contract with their current provider, plus a 4-level IVR menu with after-hours routing and a Salesforce screen-pop integration. What's the right next step?
    options:
      - Quote UC Pro and move on — these are all standard features.
      - Promise it all yourself, then have the SE figure out the SOW after the contract is signed.
      - Stop and bring in your Solutions Engineer. IPN/OffNet porting under an active carrier contract, multi-level IVR scoping, and Salesforce CTI integration are all SE-validated designs — promising any of them on your own creates an install fight you can't win.
    correct_index: 2
    explanation: 'The deep-dive rule already says "Do not attempt to quote high-volume burst capacity or complex IVR routing on your own. Bring in your SE immediately." Extend that rule to **IPN/OffNet porting** (existing-carrier contract handoffs) and **CRM CTI integrations** (Salesforce/ServiceNow/Dynamics screen-pops). When you see any of the three, pause and pull in the SE.'

  - question: "Name the five GPC UC plan tiers, lowest to highest."
    options:
      - "Resource Line → UC Express → UC Essentials → UC Pro → UC Enterprise."
      - "UC Lite → UC Standard → UC Plus → UC Pro → UC Enterprise."
      - "UC Express → UC Essentials → UC Pro → UC Enterprise → UC Enterprise+."
    correct_index: 0
    explanation: "Resource Line is the standalone-endpoint floor (one concurrent line, no apps, for lobby / conference-room / common-area phones). Everything above it scales by video participants, storage, call-center features, and CRM integrations."
    source: "UC Plan Comparison - Internal use only 2026.pdf"

  - question: "A customer needs 40 omnichannel agents with outbound calling, supervisor monitor/whisper/barge, queued callback, and post-call surveys. Which CCaaS tier do you anchor the quote on?"
    options:
      - "CC Elite — outbound dialer, supervisor monitor/whisper/barge, queued callback, and post-call surveys are Elite-only capabilities."
      - "CC Pro — Pro is the default; Elite is just a marketing tier."
      - "UC Pro's Advanced Hunt Groups — same feature set, lower cost."
    correct_index: 0
    explanation: "Both tiers are concurrent-seat licensed and both are omnichannel-capable, but supervisor coaching, outbound dialer, callback, and post-call surveys are explicit Elite-tier capabilities. Quoting Pro for an outbound-heavy or supervisor-coaching workload creates a feature-gap fight at install."
    source: "Contact Center datasheet 050925.pdf"

  - question: "A customer is replacing their front-desk receptionist's phone. They want a large color touch screen with on-screen line management. Which Yealink model do you spec?"
    options:
      - "T57W (Advanced) — 7-inch, 800×480 capacitive touch screen."
      - "T53W (Basic) — 3.7-inch graphical LCD, 8 line keys."
      - "T54W (Intermediate) — 4.3-inch color LCD, 10 line keys."
    correct_index: 0
    explanation: "Pick by **role**, not by what's cheapest. Front desk gets Advanced (T57W) because the receptionist needs a touch-screen line-management experience. Back-office workers who just answer their own line are well-served by the T53W Basic."
    source: "UC Phone Comparison sheet.pdf"

scenarios:
  - title: The Microsoft Native Trap
    situation: |
      An IT Director tells you, "We are just going to buy Microsoft's native calling plan. It's easier to keep everything with one vendor."
    choices:
      - label: Concede the point. Microsoft is too big to compete against for voice.
        feedback: 'You just lost a massive revenue opportunity. Microsoft is a software company, not a telecom carrier. They struggle with complex routing, support, and uptime.'
      - label: 'Challenge the uptime and support. Ask them who they are going to call when a port fails or a call drops. Remind them our solution sits inside Teams, saves them the MS licensing fee, and gives them a 99.999% SLA with a local NOC.'
        feedback: Correct. Pivot away from software convenience and anchor on voice reliability and support.
  - title: The License Blender
    situation: |
      You're in a Teams discovery meeting and pitch: "We put GPC's app inside Microsoft Teams, you don't need to buy the Teams Phone license, and your users will dial from the native Teams interface just like they always have." The IT director nods.
    choices:
      - label: Pitch landed clean. Send the quote.
        feedback: 'That pitch is internally contradictory and you just promised both motions at once. **Embedded UC** = GPC dial pad inside Teams; no MS Teams Phone license required; user is **not** dialing from the native MS dialer. **Ascend with Teams** (Direct Routing) = native MS dialer; **does** require an MS Teams Phone license per user. The SE will have to walk back one half of your pitch and you''ll lose trust.'
      - label: 'Pause and disambiguate before quoting: "Do you want users dialing from the native Teams interface — which requires an MS Teams Phone license per user — or do you want a GPC dial pad embedded inside Teams that bypasses the MS license?" Quote the motion they pick.'
        feedback: 'Correct. The two motions are not interchangeable. Force the customer to pick the experience first, then price the corresponding motion. Never blend them.'
      - label: Promise both and let the SE sort it out in the SOW.
        feedback: '"No MS license + native MS dialer" is a SOW conflict that can''t be resolved — one of those statements has to come out. The customer will lose confidence the moment the SE clarifies. Disambiguate during discovery, not after the contract.'
roleplay:
  persona: Operations Manager at a 75-person professional services firm
  scenario: Stuck on an aging on-prem PBX that's out of warranty. The IT team uses Teams for chat and meetings but nobody can make external calls from it. Assumes replacing the PBX means buying new desk phones and a server.
  goal: 'Position GPC''s cloud UC as the modern replacement—no on-prem server, enterprise-grade features from Teams or the native softphone, and a clear explanation of **Embedded UC** (GPC dial pad inside Teams, no MS Teams Phone license) vs **Ascend with Teams** / Direct Routing (native MS dialer, MS Teams Phone license required)—SE validates the final design.'
---

## At a glance

- **UCaaS Platform:** 100+ business voice features, SMS, chat, HD meetings. 99.999% uptime.
- **MS Teams Integration:** Embedded directly in the Teams app. **No MS Teams Phone license required.** Provides failover (if Teams goes down, our app stays up).
- **Contact Center:** Omnichannel (Voice, SMS, Chat). Concurrent licensing model.
- **AI Features:** AI call recaps, sentiment analysis, and supervisor-assist tools are built-in.

---

## Pitch

::: elevator [Elevator Pitch]
We deliver a 99.999% uptime cloud voice platform that embeds directly into Microsoft Teams—saving you massive Microsoft licensing costs. From enterprise calling and SMS to a fully omnichannel Contact Center with concurrent licensing, we modernize your communications without the hidden fees.
:::

---

## Discovery Break

<div class="mt-4 rounded-2xl border border-emerald-200/80 overflow-hidden bg-slate-50 shadow-sm">
  <iframe
    src="games/brick-breaker-1/index.html?embed=1&module=product-uc-voice-and-collaboration"
    title="Discovery Break — Brick breaker"
    loading="lazy"
    sandbox="allow-scripts allow-same-origin"
    style="width: 100%; border: 0; display: block; height: min(95vh, 85rem); min-height: 44rem; background: #f1f5f9;"
  ></iframe>
</div>

---

## Technical Deep Dive [deep]

**Brand hierarchy you'll hear in the field**

- **GPC UC** — the approved external brand. This is what goes on customer-facing collateral, proposals, and slide titles.
- **Ascend** — the **application** name (desktop / mobile / Teams add-ins) we sell under the GPC UC umbrella. Safe to mention by name when you're describing the user experience ("the **Ascend** desktop app").
- **Unite** — the same application, sold direct by **Intermedia**. You will see it in partner collateral and FAQs. **Do not lead with "Unite" externally** — translate it to GPC UC / Ascend for the customer.

**The Teams Embedded Advantage:**
- Only ~6% of Microsoft Teams users actually use Teams Phone, because Microsoft's native calling is expensive and lacks advanced PBX features.
- Our solution (via Intermedia) uses an embedded app approach. It places a dial pad directly inside the Teams interface.
- Because it is an app and not a Direct Routing setup, the customer avoids the Microsoft Teams Phone license requirement.

**The plan ladder (which UC tier fits the workload):**

| Tier | Voice | Video participants | Storage / user | Call Center features | CRM integrations | Lead with when… |
| --- | --- | --- | --- | --- | --- | --- |
| **Resource Line** | 1 concurrent endpoint (no apps) | — | — | — | — | Standalone resource lines — front-desk, lobby, conference-room, common-area phones; the line just needs to ring |
| **Express** | Unlimited | — (no video) | — | — | Active Directory, Chrome Click-to-Call | Reception desks, freelancers, dispatchers, scheduling-only roles |
| **Essentials** | Unlimited | 25 | 5 GB | — | — | Hybrid teams, customer support, sales on the go, MS 365 integration |
| **Pro** | Unlimited | 100 | 50 GB | Queueing, Wallboards, Supervisor Monitor/Whisper/Barge, End-to-End Encryption | Salesforce, ServiceNow, NetSuite, MS Dynamics, Sugar, Zoho, Zendesk | Inbound call-center workloads, high-volume sales/support, CRM-integrated desks |
| **Enterprise** | Unlimited | 200 | 200 GB | Pro + Smart Greetings + Additional Recording Storage | Same as Pro | Large all-hands, company-wide voice, town-hall meetings |

**Plan-tier landmine:** Don't default to Enterprise just because the customer is enterprise-sized. Match the **plan** to the **workload** — plans **mix and match per user**, so most multi-site customers run a *blend* (e.g., Resource Lines at the lobby and conference rooms + Express at reception + Pro for sales + Enterprise at HQ for the monthly all-hands). The 25 / 100 / 200-participant video ceiling is the most common forcing function on tier selection. Quoting Pro for a phone that just needs to ring is over-licensing—that's what Resource Line is for.

**Phone hardware — the Yealink ladder:**

Three desk-phone tiers, all with USB 2.0, dual-band 2.4/5 GHz Wi-Fi, and support for the Yealink EXP50 expansion module. Pick by **role**, not by tier name — front desk gets Advanced, back office gets Basic.

| Tier | Model | Display | Line Keys |
| --- | --- | --- | --- |
| **Basic** | Yealink T53W | 3.7", 360×160 graphical LCD | 8 line keys with LED |
| **Intermediate** | Yealink T54W | 4.3", 480×272 color LCD | 10 line keys with LED |
| **Advanced** | Yealink T57W | 7", 800×480 capacitive touch screen | Touch-screen based |

**Contact Center (CCaaS):**
- **UC Pro/Enterprise already include inbound Call Center features** — queueing, hunt groups, wallboards, and Supervisor Monitor/Whisper/Barge — enough to run a small/medium **voice-only** help desk. The dedicated **CCaaS** product is a separate SKU for **omnichannel** workloads (voice + SMS + chat), advanced IVR, deep CRM screen-pops, and concurrent licensing across channels. Don't conflate the two when scoping.
- Deep integrations with CRMs (Salesforce, Zendesk, HubSpot) for automatic screen pops.
- "Concurrent" means if they have 50 total employees, but only 10 answer phones at any given time, they only buy 10 licenses.
- Do not attempt to quote high-volume burst capacity, complex IVR routing, IPN/OffNet ports under an active carrier contract, or CRM CTI integrations on your own. Bring in your SE immediately.

**CC Pro vs. CC Elite — which tier fits:**

The dedicated CCaaS product ships in **two tiers**. Both are concurrent-seat licensed; both are omnichannel-capable (voice / chat / email / SMS / WhatsApp queues, depending on add-ons); both include the standard analytics + reporting stack. CC Elite is the supervisor-heavy / outbound-heavy tier.

| Capability | CC Pro | CC Elite |
| --- | --- | --- |
| Concurrent-seat licensing | ✓ | ✓ |
| Inbound Voice Queues, ACD, customizable IVR | ✓ | ✓ |
| Pre-built CRM integrations (Salesforce, Dynamics, Zendesk, Slack) | ✓ | ✓ |
| Real-time + historical reporting, dashboards | ✓ | ✓ |
| Skill-Based Routing | ✓ | ✓ |
| Supervisor Monitor / Whisper / Barge-In | — | ✓ |
| Outbound Voice + Outbound Dialer (scheduled power dialing) | — | ✓ |
| Geo-Routing + Advanced Rules-Based Routing (Last Agent / Preferred Agent) | — | ✓ |
| Queued Callback + Queued Voicemail | — | ✓ |
| Real-Time Customizable Threshold Alerts | — | ✓ |
| Post-Call Surveys + Call Scripting | — | ✓ |
| Custom Agent Status + Elastic Demand Support | — | ✓ |

**Add-ons available on both tiers (additional cost):** Chat / Email / WhatsApp Channel Queues, Dynamic Notification (Voice/Email/SMS), Schedule Manager, AI Agent Evaluator, Screen Recording, omnichannel Archiving across voice / SMS / chat / email / screen recordings.

**Pick CC Elite when** you see outbound calling, supervisor coaching workflows, callback functionality, post-call surveys, or strict SLA threshold alerts on the requirements list. Otherwise CC Pro is the right anchor. **Don't conflate UC Pro's Advanced Hunt Groups with the CCaaS product** — UC Pro is light-call-center for voice-only; CC Pro/Elite is the real omnichannel CCaaS.
<!-- prettier-ignore-end -->

---

<a id="competitive-positioning-competitive-positioning"></a>

# Competitive Positioning (`competitive-positioning`)

<!-- prettier-ignore-start -->
---
id: "competitive-positioning"
title: "Competitive Positioning"
summary: "Discovery first. Business risk. Undeniable proof."
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
  - "Who answers the phone at 2 a.m. if your primary circuit goes down—and how long does it take them to respond on-site?"
  - "Which applications break first if upload latency spikes or a circuit drops? What does an hour of downtime cost the business?"
  - "How are your locations connected today—VPN over shared broadband, MPLS, or Ethernet? When does that contract expire?"
  - "Are you running SaaS applications like O365, Salesforce, or cloud ERP? Where are those workloads hosted?"
  - "What does your current vendor do when there's a service issue—do they have local field technicians or is everything remote?"
five_minute_summary: |
  - **The Framework:** Map competitor weaknesses to GPC strengths using business risk and proof points (local support, NOC, redundancy). Avoid generic claims of superiority.
  - **Avoid Landmines:** Never make personal attacks or use absolutes. Verify battle-card stats with marketing before sharing externally, and bring in SEs early for architecture discussions.
  - **Handling Objections:** When countering LEO satellite or price pressure, anchor the conversation on uptime, latency, and the total cost of downtime rather than just price or speed.
  - **Using Tech Cards:** Lead with the customer's pain, wrap it in a GPC solution, ask qualifying questions, and provide verified proof.

knowledge_checks:
  - question: "Before positioning against a competitor's strength, what should you do first?"
    options:
      - "Lead with your best battle-card stat regardless of their stack"
      - "Run discovery on applications, sites, and outcomes so claims map to their stated needs"
      - "Assume their network is always inferior to yours"
    correct_index: 1
    explanation: "Discovery before claims—then map fit."

  - question: "Which behavior is a stated landmine to avoid?"
    options:
      - "Citing battle-card statistics externally without confirming currency with marketing"
      - "Acknowledging where a competitor is legitimately strong"
      - "Using qualifying questions to earn a technical conversation"
    correct_index: 0
    explanation: "Don't cite stats externally until cleared."

  - question: "When should you engage SE early?"
    options:
      - "Only after the customer signs an order"
      - "For multi-site WAN/SD-WAN, integrated security, hybrid on/off-net, regulated workloads, fiber feasibility, or RFP-style validation"
      - "Never—sales should own all topology design alone"
    correct_index: 1
    explanation: "Complex WAN/security/hybrid/regulated/RFP → SE."

  - question: "What should competitor → GPC responses pair for each angle?"
    options:
      - "Their pitch or truth, business risk for this customer, and proof you can support (local teams, NOC, redundancy, portfolio)"
      - "Only a slogan and no customer specifics"
      - "Personal attacks on the competitor's executives"
    correct_index: 0
    explanation: "Truth + risk + proof—not slogans."

  - question: "Against fiber vs LEO satellite interest, what reframe beats a speed-test-only debate?"
    options:
      - "Reliability, latency, weather/obstruction risk, and operational support for business apps"
      - "Monthly sticker price as the only decision factor"
      - "Ignore their interest and refuse to discuss satellite"
    correct_index: 0
    explanation: "Business outcomes—not Mbps alone."

  - question: "What does the framework say about personal disparagement of competitors?"
    options:
      - "Avoid it—stay factual and customer-centric"
      - "Encourage it whenever you are behind on price"
      - "Require it in every competitive meeting"
    correct_index: 0
    explanation: "Landmines forbid personal attacks."

  - question: "For SD-WAN battle-card use, what must you verify before citing awards or ratings?"
    options:
      - "Year and scope—confirm accuracy before external claims"
      - "Nothing—repeat any headline from memory"
      - "Only the competitor's stock price"
    correct_index: 0
    explanation: "Verify scope/year before external use."

  - question: "What dimensions help compare operators during metro/local competition beyond headline price?"
    options:
      - "Install quality, support model, redundancy, fiber depth vs pocketed coverage, and rate stability"
      - "Only the color of the competitor's logo"
      - "Wi-Fi router aesthetics in consumer reviews only"
    correct_index: 0
    explanation: "Ops fit—not logo or consumer reviews."

  - question: "What is PM engagement used for per the module?"
    options:
      - "Delivery timelines, construction, and contract alignment"
      - "Replacing all sales discovery on the first call"
      - "Writing competitor press releases"
    correct_index: 0
    explanation: "PM = delivery/construction/contract alongside SE."

  - question: "Per the Omaha Metro battle card, what is one structural weakness of Allo that GPC reps can lean into?"
    options:
      - "Allo does not fully own their network — they lease fiber from GPC and others."
      - "Allo only sells to residential customers and has no Omaha presence."
      - "Allo has no fiber footprint in the metro and resells satellite Internet."
    correct_index: 0
    explanation: "Use this once in a head-to-head Allo conversation as a supporting line — never as your opening move. The factoid lands as gloating if it's how you open."
    source: "Omaha Metro competitive battle card v3.pdf (Allo section)"

  - question: "On a Managed Firewall opportunity, the customer says 'we already have someone doing this.' Per the Managed Firewall battle card, what's the right framing to lead with?"
    options:
      - "Service consolidation — fewer vendors, single bill, single point of contact, 24/7 SOC. Don't try to win 'we're better at firewalls than your MSP.'"
      - "Aggressively detail every feature GPC's firewall has that the incumbent's doesn't."
      - "Drop the topic — if they already have a firewall vendor, the deal is dead."
    correct_index: 0
    explanation: "The Managed Firewall battle card explicitly names 'most customers already have firewalls from someone' as Challenge #1. The defensible pivot is operational simplicity, not feature combat."
    source: "Managed Firewall Battlecard FINAL.pdf (Challenge #1)"

  - question: "Per the Omaha Metro battle card, what is the T-Mobile / Metronet acquisition nuance reps should be ready to surface?"
    options:
      - "T-Mobile bought Metronet; residential goes under T-Mobile brand, but B2B remains Metronet — 'could mean instability as the business side is still branded Metronet.'"
      - "T-Mobile bought Metronet and rebranded the entire business under T-Mobile Fiber."
      - "T-Mobile sold Metronet to a private equity firm and exited the market."
    correct_index: 0
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

roleplay:
  persona: "Entrenched IT Manager"
  scenario: "Currently with a national carrier who just dropped their price at renewal. Demands a spec-for-spec speed comparison and says local doesn't matter anymore."
  goal: "Run discovery on application pain, TCO of outages, and local support gaps before presenting any GPC comparison—never lead with price or unverified stats."
---

## Positioning snapshot

::: elevator [Elevator Pitch]
Discover first, then map our proof to their pain. We don't win on trash talk or generic claims; we win on TCO, local fiber, a 24/7 NOC, and owned redundant paths. When competitors drop their price, we elevate the conversation to the true cost of downtime.
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
Tie to TCO: cost of an hour down, support model, redundancy depth, rate stability—not price alone. No verbal exceptions.
:::

::: flip ["Starlink/satellite is good enough."]
Acknowledge coverage; pivot to latency, weather risk, SLA for VoIP/telehealth, and predictable symmetrical paths.
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

## How We Win — by competitor (field reference)

The image-library tabs above ship the visual battle cards. This section ships the **textual factoids** that make those cards quotable in conversation—the lines that actually carry the meeting.

### National carriers (Cox, Spectrum, Charter, Lumen, Windstream, Zayo)

- **Cox / Charter / Spectrum acquisition** — Charter/Spectrum has acquired Cox. Use as **context**, not FUD. The position GPC has earned is **stability and continuity**: *"we're not changing hands; the team you onboard with is the team you renew with."* *"They'll be distracted for two years"* is a fear tactic that lands as desperation—the card explicitly steers away from that framing.
- **Network-level differentiator vs. Cox** — Cox tops at ~2 Gbps asymmetrical on coax. GPC delivers symmetrical 100 Gbps on fiber across the footprint. When the conversation drifts to *"are you big enough?"*, anchor on **16,500-mile fiber network, 29+ Midwest data centers, MEF / SOC II / Tier-IV credentials, real Blair-Nebraska NOC.**

### Omaha metro upstarts (FiberFirst, Metronet, Allo, Google Fiber)

- **FiberFirst** — strategic entry in underserved areas, but staff churn, incomplete installs, limited nationwide redundancy, and no Omaha storefront. **GPC's win:** local employees, ~2-week costing-to-construction turnaround, 110+ years of established Midwest reputation.
- **Metronet** — now T-Mobile-owned. **The acquisition split is the key nuance:** residential goes under the T-Mobile brand; **B2B remains Metronet**—the card flags this explicitly as *"could mean instability as the business side is still branded Metronet."* Network is aerial-built (cheap and fast); GPC's Omaha footprint is **~98% buried fiber**—weather-resilient and harder to dig-cut.
- **Allo** — lower advertised pricing, multiple storefronts. The structural weakness: **Allo doesn't fully own their network—they lease fiber from GPC and others.** Use it once in a head-to-head conversation as a supporting line; never as the opening move. Plus, no business contracts, pocketed Omaha availability (the card notes a deal GPC won back because *"Allo couldn't get to the customer"*), and recent voluntary layoffs.
- **Google Fiber** — simplified two-tier pricing, Wi-Fi included, lower advertised price. **GPC's win:** no local support presence (everything remote / automated), no DDoS, no SD-WAN, no managed firewall, and a two-tier-only structure that forces smaller businesses to pay for things they don't need.

### The single line that flips the conversation

**"We have a diverse, 100% referenceable customer base."** Straight from the Omaha Metro battle card. It flips the burden of proof—*"if we work for them, we'll work for you."* Always have one or two named reference customers ready in the prospect's vertical before the meeting.

### Managed Firewall — the service-consolidation pivot

Almost every Managed Firewall prospect **already has someone doing it**: a carrier, an MSP, an internal IT vendor, or themselves. The Managed Firewall Battle Card names this as Challenge #1: *"Most potential customers already have Internet with firewalls and other security services from someone… They may not be interested in adding yet another vendor."*

**The defensible win isn't *"we're better at firewalls than your MSP."*** That's a feature-comparison fight you might lose, and it puts you on the back foot.

**The defensible win is service consolidation.** Fewer vendors, single bill, single point of contact, 24/7 SOC, FortiGuard Enterprise Protection rolled into the rest of the GPC stack the customer is already buying. *"You already have GPC for connectivity—roll firewall under the same contract and you go from three vendors to one"* wins on operational simplicity, not on firewall expertise.

### 5G Wireless Backup — vs. Verizon / AT&T direct

A common brush-off on 5G Backup deals: *"why don't I just buy this direct from Verizon or AT&T?"* The card's response:

- **GPC's 5G Backup selects the best signal between Verizon and AT&T automatically.** Buying direct from one carrier locks the customer to that carrier's coverage.
- **Local access, local support, 24/7 NOC monitoring, bundled bill.** Direct-from-carrier means another vendor, another support hotline, another bill.
- **Backed by Verizon + AT&T + Cradlepoint.** The underlying network credibility is the same; the operational layer is what GPC adds.

Target characteristics from the card: **25-or-fewer people at the location**, with top fit in Healthcare, Retail, Financial Services, Automotive, and Municipal Government.

---

**Disengage signals:** bad-faith trash talk requests, pure price auction with zero fit, design questions past your lane without SE.
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
  - **The motion:** A **high-touch, 90-day coordinated effort** between Sales and Marketing on **high-value Strategic accounts**—18 personal sales touches with consistent marketing air cover, so GPC stays top-of-mind with the right decision-makers.
  - **Rolling Three:** You run **3 active ABM accounts at a time**, with **3 on-deck** ready to backfill. As one completes its 90-day cycle, the next on-deck onboards immediately—no pipeline droughts, no scrambling.
  - **Staggered kickoff:** New accounts kick off on a **30-day stagger** (Month 1 / Month 2 / Month 3). One account is always in the high-intensity opening phase while others are mid- or late-cycle.
  - **Targets are a stack, not a list:** Minimum **3 targets per account (5 ideal)**—and **not all Executive**. Mix **Manager · Director/VP · Executive** so one person leaving doesn't kill the play.
  - **Sequence rhythm:** **18 touches / 90 days**, **3 per target every 2 weeks** by phone and personalized email. Marketing runs **1 coordination touchpoint every 30 days**; when Sales schedules a physical **Door Pull** (Enterprise Brochure), that's the **named SOP trigger** for **+1** extra marketing touch that cycle—custom brochure copy and inserts, not a discretionary maybe.
  - **One source of truth:** The **Master Tracking Spreadsheet** is the system of record for Active and On-Deck accounts. **Edit access** is limited to **Marketing and Sales Leadership**; **everyone else is view-only**—do not request write access to "fix" your row; work through the owners on the sheet.

knowledge_checks:
  - question: "How many ABM accounts should an Account Representative run concurrently per the SOP?"
    options:
      - "Three active accounts at any time, with three on-deck ready to backfill (the Rolling Three)"
      - "As many as the rep can manage—no defined cap"
      - "One account at a time until it closes"
    correct_index: 0
    explanation: "Three concurrent active accounts + three on-deck = the Rolling Three pipeline model."

  - question: "How are the three concurrent ABM accounts kicked off per the SOP?"
    options:
      - "All three start on the same day for momentum"
      - "On a 30-day stagger: Account A Month 1, Account B Month 2, Account C Month 3"
      - "Whenever the rep has free calendar time"
    correct_index: 1
    explanation: "Staggered 30-day kickoff ensures one account is always in the high-intensity opening phase while others are mid- or late-cycle."

  - question: "Can all ABM targets at an account be executive-level decision makers?"
    options:
      - "Yes—executives close deals, so they're the only targets that matter"
      - "No—the SOP forbids all-executive stacks; mix Manager, Director/VP, and Executive"
      - "Only at Strategic accounts above a certain revenue threshold"
    correct_index: 1
    explanation: "The tier hierarchy is Manager (Operational/Technical) + Director/VP (Tactical/Strategic) + Executive (Financial/Final Decision Maker). Single-threading at the top is exactly what the mix is designed to prevent."

  - question: "Which items belong on the Sales Readiness Checklist that the rep brings to ABM kickoff?"
    options:
      - "Account Intel, Status (Customer vs Prospect), Current Services, Location Scope, Prospecting History, and the finalized Target List"
      - "Only the target list—everything else can be figured out in the meeting"
      - "A draft proposal and a contract template"
    correct_index: 0
    explanation: "Walking in cold (no checklist) is the fastest way to lose a Marketing partner and stretch the 90-day cycle."

  - question: "How often should marketing run ABM coordination touchpoints in the SOP model?"
    options:
      - "One touchpoint every 30 days, with +1 added when Sales runs a physical Door Pull"
      - "Three touchpoints every week regardless of sales activity"
      - "Only one touchpoint at the end of the 90-day cycle"
    correct_index: 0
    explanation: "Monthly marketing coordination; +1 brochure-leave-behind when Sales executes a Door Pull. The Door Pull is the named SOP trigger for the extra marketing touch."

  - question: "Who may edit the Master Tracking Spreadsheet per the ABM operating model?"
    options:
      - "Marketing and Sales Leadership only—everyone else is view-only."
      - "Any account rep working an Active ABM account may edit their own row."
      - "Sales Operations owns the spreadsheet; Marketing is view-only."
    correct_index: 0
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

roleplay:
  persona: 'Sales Manager in your weekly 1:1; gatekeeper of the Rolling Three slots on the Master Tracking Spreadsheet.'
  scenario: |
    You're pitching a regional manufacturer as your next ABM target. The Sales Manager pulls up the Master Tracking Spreadsheet — you currently have **three active accounts** (one wrapping in 21 days) and **two on-deck**, not three. They'll approve a kickoff only if you can defend the Rolling Three math, name a tier-mixed target stack, and confirm a completed Sales Readiness Checklist on demand.
  goal: 'Defend the slot in SOP language: (1) which active account is wrapping and on what date so the Rolling Three stays at 3 active + 3 on-deck; (2) the **three named targets** at the right tier mix — Manager (Operational/Technical) + Director/VP (Tactical/Strategic) + Executive (Financial/Final Decision Maker), and explicitly **not** all Executive; (3) all six Sales Readiness Checklist items completed (Account Intel, Status, Current Services, Location Scope, Prospecting History, finalized Target List); (4) the named Marketing partner aligned on monthly touchpoints + any planned Door Pulls in the 90 days. The Sales Manager will say no if you can''t produce the checklist on demand — that''s how the Rolling Three stays healthy.'
---

## Why ABM here

Account-based programs work when **Sales and Marketing agree on cadence, targets, and ownership**. This module mirrors the **ABM SOP** verbatim: a **high-touch, 90-day coordinated effort** between Sales and Marketing on **high-value Strategic accounts**, with **18 personal sales touches** under **consistent marketing air cover** so GPC stays **top-of-mind for key decision-makers**.

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

- **Duration:** 90-day coordinated motion, kicked off by the Sales + Marketing + Manager meeting.
- **Sales volume:** **18 total personal sales touches** over the cycle.
- **Sales rhythm:** **3 touches per target every 2 weeks**.
- **Primary channels:** **Phone calls** and **personalized emails**.
- **Optional Door Pull:** A physical drop-by using the **Enterprise Brochure** as a leave-behind.
- **Marketing rhythm:** **1 coordination touchpoint every 30 days** (e.g., LinkedIn / Google ads, direct mail). **`+1` named SOP trigger:** when Sales schedules a physical **Door Pull** with the **Enterprise Brochure**, Marketing adds **one extra** touch that cycle—custom copy / inserts aligned to the leave-behind (not optional flair once the Door Pull is on the calendar).

## Sequence lanes (sales & marketing)

### Sales prospecting

Sales executes the **18-touch, 90-day** motion anchored on **personalized phone and email**, with optional **Door Pull** drop-ins using the Enterprise Brochure where approved. The cadence is a fixed rhythm—persistent without being intrusive.

### Marketing air cover

Marketing runs **monthly support touchpoints** (LinkedIn / Google ads, direct mail) to reinforce sales outreach. **Door Pull = automatic +1:** the SOP treats a scheduled physical Door Pull as the trigger for an **extra** marketing coordination touch in that window—which gets **custom copy and inserts** for the Enterprise Brochure—not a nice-to-have add-on after the fact.

## How to use this module

1. Read the overview sections for **roles, intent, and the Rolling Three model** before your first ABM kickoff.
2. Bring the **Sales Readiness Checklist** to every kickoff—do not improvise. The checklist *is* the contract with Marketing.
3. Coach to the SOP-defined sequence and guardrails: **staggered kickoff**, **tiered target mix**, **cadence**, and **Master Tracking Spreadsheet hygiene**.
4. Pair this with **Operational Business Reviews** when discussing how executive conversations mature into review meetings.

## Keep this module honest

This page reflects the ABM SOP and is intentionally focused on it. When the SOP changes, align these bullets and checks to the current approved version—the **SharePoint folder linked above** is the live source of truth, not this app.
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
  - **The Slick is the deliverable.** A front/back trifold insert with four components: **Network Design** (Current vs. Future State Visio, verified against billing), **Strategic Billing** (totals + expirations, surfaced through the "Modernization" and "Performance Spotlight" levers), **NOC History & Feedback Loop** (12-month performance snapshot + partnership feedback), and **Strategic Roadmap** (planned upgrades, renewal sync, GPC solution highlights).
  - **The 21-business-day cycle with named owners.** Day 1: Account Rep schedules. Days 2–4: Account Rep audits locations and addresses. Days 5–14: **Jerry Ehrenberg** drives the Network Design (10 days, kicked off with a 15-minute call). Days 10–14: **Jill / NOC** generate billing and NOC data (5 days, overlapping). Days 15–19: **Sarah** formats and brands the slick (5 days, with Account Team Final Review). Days 19–21: Sarah and the Account Rep handle print, pickup, and trifold insertion. **Day 21 is the OBR Meeting.**
  - **Success Criteria—the three numbers to memorize.** *Zero Fire Drills* (every asset handed to Marketing by **Business Day 14**), *100% Accuracy* (billing locations and network diagrams synchronized), and *Client Value* (customer leaves with a clear understanding of network health and the roadmap).
  - **The "No Raw Dump" Rule.** Sales must scrub and audit all data before handoff. **Marketing is for design, not data entry or CID deciphering.** Translate internal catalog codes into plain-English service descriptions (e.g., `100M Fiber DIA`).
  - **The "Single Packet" Handoff.** Marketing will not start design until one email lands containing **both** the completed **OBR Sales Readiness Form** (with scrubbed data tables) **and** the finalized **Visio diagram**. Anything less stops the clock.
  - **The Sales Readiness Form is the Source of Truth.** Complete it early. It locks in the strategic copy for Marketing, carries all audited billing/NOC data, and feeds the trifold's narrative.

knowledge_checks:
  - question: How many business days does the OBR cycle run, from initiation through the meeting itself?
    options:
      - 21 business days
      - 14 business days
      - 30 business days
    correct_index: 0
    explanation: 'The SOP defines a 21-business-day cycle, ending with the OBR Meeting on Day 21.'
  - question: '"Zero Fire Drills" is one of the OBR''s three Success Criteria. What does it mean operationally?'
    options:
      - Every asset is ready and handed to Marketing by Business Day 14.
      - No support tickets can be open on the customer's circuits during OBR week.
      - The OBR meeting cannot be rescheduled.
    correct_index: 0
    explanation: '"Zero Fire Drills" is the SOP''s name for the Business Day 14 handoff milestone—seven business days before the meeting, Marketing has everything they need.'
  - question: Marketing will not begin design until the "Single Packet" handoff arrives. What must that single email contain?
    options:
      - The completed OBR Sales Readiness Form (with scrubbed data tables) and the finalized Visio diagram (verified).
      - A raw export from the billing platform plus a verbal walkthrough.
      - A calendar invite for the OBR meeting and the customer's logo.
    correct_index: 0
    explanation: 'Marketing requires one packet, audited and complete. Sending pieces separately—or sending raw data—violates the Single Packet rule and stops the design clock.'
  - question: 'The SOP enforces a "No Raw Dump" rule. What is the stated rationale?'
    options:
      - Marketing is for design, not data entry or CID deciphering. Sales owns the scrub.
      - Raw billing data violates customer NDAs.
      - The Visio software cannot ingest raw exports.
    correct_index: 0
    explanation: 'Verbatim from §3 of the SOP—Sales must scrub and audit data before handoff. Marketing receives audited, plain-English data, not internal catalog soup.'
  - question: 'When you audit billing during OBR prep, the SOP names two specific "sales levers" the slick should surface. Which pair?'
    options:
      - '"Modernization" and "Performance Spotlight"'
      - '"Discount" and "Bundle"'
      - '"Renewal" and "Cross-sell"'
    correct_index: 0
    explanation: 'Strategic Billing on the slick features the "Modernization" lever (e.g., upgrade an aging tier) and the "Performance Spotlight" lever (showcase services performing well). Surface both.'

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

roleplay:
  persona: VP of IT at a ~$40M regional logistics company; long-time GPC strategic customer with six locations and a mixed DIA / SIA / SD-WAN footprint.
  scenario: The CFO is now copy-on every contract renewal and pushing back on "what are we actually getting." The VP of IT wants to defend the relationship at the next quarterly check-in but is buried in tickets and has no consolidated view of network health, billing, or roadmap.
  goal: 'Use the OBR as the answer. Walk the VP through what the slick will contain (Network Design / Strategic Billing / NOC History / Strategic Roadmap), the 21-business-day cycle, and the Sales Readiness Form data you need from their side. Set the meeting date and lock the Day 14 handoff backwards from there.'

---

## Why OBRs matter

Operational Business Reviews turn **network reality, financial signals, and partnership history** into a single executive conversation that the customer's CFO *and* VP-IT can both act on. Reps win when the **prep process is predictable**—this module trains the SOP, not just the slide deck.

## The OBR Slick — what we deliver

The deliverable is a **front/back trifold insert** ("the Slick") with four components:

1. **Network Design:** High-fidelity "Current vs. Future State" Visio, verified against billing data.
2. **Strategic Billing:** Totals and expirations, featuring the **"Modernization"** and **"Performance Spotlight"** levers.
3. **NOC History & Feedback Loop:** 12-month performance snapshot and holistic partnership feedback loop.
4. **Strategic Roadmap:** Planned upgrades, upcoming renewal sync, and GPC solution highlights.

## Success Criteria — memorize the three

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

**Why 21 business days, not 26?** If you add the phase slices naively—**3 + 10 + 5 + 5 + 3**—you get **26** business days. The SOP still lands on **21** because **Network Design** (10 days) and **Billing / NOC data collection** (5 days) **overlap** during Days 5–14. Teaching reps *why* the overlap exists is how you stop the *"just promise two weeks"* fire drill before it starts.

**Why Day 14 is the hinge:** Marketing Design + Final Prep take seven business days. Miss the Day 14 handoff and you compress design and print into a fire drill—the opposite of the Zero-Fire-Drills criterion.

## Data Hygiene & the Single Packet

**The "No Raw Dump" Rule.** Sales must scrub and audit all data before handoff. **Marketing is for design, not data entry or CID deciphering.** Translate internal catalog codes into plain-English service descriptions (e.g., `100M Fiber DIA`).

**Proactive Billing Wins.** Audit for address, tier, and MRC errors early. **Presenting an internal fix during the OBR proves proactive account management**—surface the correction on the slick under the Modernization lever instead of quietly burying it.

**The Single Packet Handoff.** Marketing will not begin design until **one email** lands containing:

1. The completed **OBR Sales Readiness Form** (with scrubbed data tables).
2. The finalized **Visio Diagram** (verified).

Partial sends do not start the clock.

## Communication templates — subject-line discipline

The SOP ships four kickoff templates. Use the subject-line pattern verbatim—it is the operating signal that the cycle is on rails.

- **Design Request → Jerry Ehrenberg.** *Subject:* `OBR Design Request: [Customer Name] | DUE: 10 Business Days from Today`. Include known active locations and a 15-minute kickoff calendar hold.
- **Billing Request → Billing Team.** *Subject:* `OBR Billing Request: [Customer Name] | DUE: 5 Business Days from Today`. Ask for location-specific totals, product/service breakouts, and contract expiration dates.
- **Performance Request → NOC.** *Subject:* `OBR Performance Request: [Customer Name] | DUE: 5 Business Days from Today`. Ask for a 12-month ticket history snapshot (total volume, incident duration, services impacted, high-level resolution summaries) against the known CIDs and service addresses.
- **Final Assets → Sarah.** *Subject:* `OBR FINAL ASSETS: [Customer Name] | Review Requested: [5 Business Days from Today]`. Include the audited Sales Readiness Form (strategic copy + data) and the finalized Visio. The slick goes to proof when Sarah signs off.
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
      "title": "The Network",
      "subtitle": "National Footprint & Coverages",
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
      "title": "Layer 2 Core",
      "subtitle": "High-Availability Redundant Architecture",
      "placeholder": "Load Layer_2_Rings.svg",
      "file": "layer_2.png",
      "type": "map",
      "insight": "Our high-availability network is engineered to meet the mission-critical demands of enterprises, wholesale clients, and FTTT customers, offering 200G and 400G city-to-city routes, a redundant ring architecture and seamless scalability across 1G, 10G, and 100G services.",
      "stats": [
        { "label": "Core Capacity", "value": "400G Standard", "color": "text-gpc-orange" },
        { "label": "Scalability", "value": "1G to 100G", "color": "text-gpc-green" }
      ]
    },
    "ip-network": {
      "id": "ip-network",
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
