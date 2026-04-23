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

_No `modules/getting-started/content.md`. Excerpts from `js/components/getting-started.js`._

## Onboarding tour — `steps`

```javascript
const steps = [
    {
      title: 'Welcome',
      icon: 'fa-compass',
      body: `
        <p class="text-slate-800 leading-relaxed">
          <strong>Sales-Navigator</strong> is your interactive training hub for GPC sales onboarding—modules, practice scenarios, and knowledge checks in one place.
        </p>
        <p class="text-slate-600 text-sm mt-3">
          This short tour walks through how the app is organized so you can move through training with confidence.
        </p>`,
    },
    {
      title: mobile ? 'Navigation' : 'Left navigation',
      icon: 'fa-bars',
      body: mobile
        ? `
        <p class="text-slate-800 leading-relaxed mb-3">
          Tap the <strong><i class="fa-solid fa-bars text-xs" aria-hidden="true"></i> menu button</strong> in the header to open the module list. Items are grouped by category${categories.length ? ` (${escapeHtml(categories.join(', '))})` : ''}.
        </p>
        <ul class="list-disc pl-5 text-slate-700 space-y-1.5 text-sm">
          <li>Tap a module title to load it\u2014the menu closes automatically.</li>
          <li>The <strong>highlighted</strong> item matches the page you are on.</li>
        </ul>`
        : `
        <p class="text-slate-800 leading-relaxed mb-3">
          Use the <strong>sidebar on the left</strong> to open any module. Items are grouped by category${categories.length ? ` (${escapeHtml(categories.join(', '))})` : ''}.
        </p>
        <ul class="list-disc pl-5 text-slate-700 space-y-2 text-sm">
          <li>Click a module title to load it in the main area.</li>
          <li>Use the <strong>chevron</strong> at the top of the sidebar to collapse it when you want more reading space.</li>
          <li>The <strong>highlighted</strong> item matches the page you are on.</li>
        </ul>`,
    },
    {
      title: 'Inside a module',
      icon: 'fa-book-open',
      body: `
        <p class="text-slate-800 leading-relaxed mb-3">
          Each training module is built from structured content:
        </p>
        <ul class="list-disc pl-5 text-slate-700 space-y-${mobile ? '1.5' : '2'} text-sm">
          <li><strong>Title and summary</strong> at the top set context.</li>
          <li><strong>Five-minute summary</strong> bullets give a fast scan when present.</li>
          <li>Major topics appear as <strong>section cards</strong>.</li>
          <li>Some modules include <strong>reference links</strong>${mobile ? '.' : ' in a side area when provided.'}</li>
        </ul>`,
    },
    {
      title: 'Scenarios',
      icon: 'fa-comments',
      body: `
        <p class="text-slate-800 leading-relaxed mb-3">
          <strong>Scenarios</strong> give you a short situation, a few choices, and feedback—practice for real moments, not a test score.
        </p>
        <p class="text-slate-700 text-sm font-medium border border-orange-200/80 bg-orange-50/50 rounded-lg px-3 py-2">
          <i class="fa-solid fa-hand-pointer text-orange-600 mr-1.5" aria-hidden="true"></i>
          ${mobile ? 'Scroll up and choose' : 'Choose'} the strongest response in the scenario to unlock <strong>Next</strong>.
        </p>`,
    },
    {
      title: 'Knowledge checks',
      icon: 'fa-circle-question',
      body: `
        <p class="text-slate-800 leading-relaxed mb-3">
          <strong>Knowledge checks</strong> are quick questions with explanations so you can self-check without pressure.
        </p>
        <p class="text-slate-700 text-sm font-medium border border-orange-200/80 bg-orange-50/50 rounded-lg px-3 py-2">
          <i class="fa-solid fa-hand-pointer text-orange-600 mr-1.5" aria-hidden="true"></i>
          ${mobile ? 'Scroll up and pick' : 'Pick'} the best answer to unlock <strong>Next</strong>.
        </p>`,
    },
    {
      title: 'Executive Map Book',
      icon: 'fa-map',
      body: mapBook
        ? `
        <p class="text-slate-800 leading-relaxed mb-3">
          <strong>${escapeHtml(mapBook.title)}</strong> is a digital version of our printed map book—a backdrop for executive customer conversations about footprint, reach, and strategy.
        </p>
        <p class="text-slate-600 text-sm">
          ${mobile ? 'Open the <strong><i class="fa-solid fa-bars text-xs" aria-hidden="true"></i> menu</strong> and tap it to view' : 'Open it from the sidebar for'} full-width maps and executive views.
        </p>`
        : `
        <p class="text-slate-800 leading-relaxed">Map-style resources appear in the navigation when enabled for your build.</p>`,
    },
    {
      title: 'Fiber path',
      icon: 'fa-route',
      body: `
        <p class="text-slate-800 leading-relaxed mb-3">
          <strong>Fiber path</strong> in the header tracks your progress—what you've opened, what's next, and how the route fits together.
        </p>
        <p class="text-slate-700 text-sm font-medium border border-orange-200/80 bg-orange-50/50 rounded-lg px-3 py-2">
          <i class="fa-solid fa-hand-pointer text-orange-600 mr-1.5" aria-hidden="true"></i>
          Tap <strong>Fiber path</strong> ${mobile ? '(<i class="fa-solid fa-route text-xs" aria-hidden="true"></i>) in the header' : 'in the header (the highlighted control)'} to unlock <strong>Next</strong>.
        </p>`,
    },
    {
      title: 'You are set',
      icon: 'fa-circle-check',
      body: `
        <p class="text-slate-800 leading-relaxed mb-4">
          You know how to navigate modules, check progress with Fiber path, find practice, and use the map book when needed. Jump into your first training module below.
        </p>
        ${
          firstTraining
            ? `<div class="flex flex-wrap gap-3">
          <button type="button" data-goto="${escapeHtml(firstTraining.id)}" class="gs-goto inline-flex items-center gap-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2.5 text-sm shadow-sm transition">
            <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            Open ${escapeHtml(firstTraining.title)}
          </button>
        </div>`
            : ''
        }`,
    },
  ];
```

## Welcome demo — `buildDemoMarkup()` template

```html

    <div class="tour-demo-content max-w-[1600px] mx-auto space-y-6 pb-4 select-none">
      <div class="flex flex-col lg:flex-row lg:gap-8 gap-6 items-start">
        <div class="w-full lg:flex-1 min-w-0 space-y-6 pointer-events-none" data-tour-target="module-core">
          <div class="rounded-2xl border border-orange-200/90 bg-gradient-to-br from-orange-50/50 via-white to-slate-50/40 shadow-sm p-6 md:p-8 backdrop-blur-sm module-tour-elevator">
            <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Welcome to Great Plains Communications</h2>
            <p class="text-slate-600 mt-3 text-sm max-w-prose leading-relaxed">
              We're glad you're here. This space is built to help you ramp with confidence—alongside teammates who remember their first customer call, their first complex quote, and the questions that used to keep them up at night.
            </p>
          </div>
          <div class="rounded-2xl border border-amber-200 bg-amber-50/80 p-5 md:p-6 shadow-sm backdrop-blur-sm">
            <div class="flex items-start gap-3">
              <span class="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold text-sm" title="About 5 minutes">5m</span>
              <div class="min-w-0 flex-1">
                <p class="text-xs font-bold text-amber-950 uppercase tracking-wide">Five-minute summary</p>
                <ul class="mt-3 space-y-2.5 text-sm text-amber-950/90">
                  <li class="flex gap-2"><span class="text-amber-500 shrink-0">•</span> We're genuinely happy you chose to grow your career here—your wins matter to us.</li>
                  <li class="flex gap-2"><span class="text-amber-500 shrink-0">•</span> Take training at your pace; come back to any module when you need a refresher or a talk track.</li>
                  <li class="flex gap-2"><span class="text-amber-500 shrink-0">•</span> Showing up curious for customers beats memorizing slides—use this hub to prepare, then go have real conversations.</li>
                </ul>
              </div>
            </div>
          </div>
          <section class="rounded-2xl border border-emerald-200/70 bg-gradient-to-b from-emerald-50/35 to-white p-6 md:p-8 shadow-sm backdrop-blur-sm module-tour-discovery">
            <h3 class="text-lg font-bold text-slate-900">A note from the team</h3>
            <div class="text-sm text-slate-700 mt-3 space-y-3 leading-relaxed">
              <p>Dear teammate,</p>
              <p>
                Welcome to Great Plains Communications. Whether you're new to telecom or you've carried a bag for years, we're glad you're on the team. Sales-Navigator exists so you spend less time hunting for answers and more time listening to customers—rules of engagement, product depth, competitive positioning, and the workflows that keep deals moving are never more than a few clicks away.
              </p>
              <p>
                Nobody expects you to know everything on day one. We do expect you to ask questions, use the resources here, and reach out when a deal needs an extra pair of eyes. That's how we get better together—and how our customers feel the difference between a vendor and a partner.
              </p>
              <p class="text-slate-600">With appreciation,<br><span class="text-slate-800 font-medium">Your Sales Leader</span></p>
            </div>
          </section>
        </div>
        <aside class="w-full lg:basis-[30%] lg:flex-none lg:max-w-[30%] rounded-xl border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur-sm pointer-events-auto" data-tour-target="tour-scenarios">
          <p class="text-xs font-bold text-slate-500 uppercase tracking-wide">Scenarios</p>
          <p class="text-xs font-semibold text-slate-800 mt-3">Where is Waldo?</p>
          <p class="text-sm text-slate-600 mt-2 leading-relaxed">
            You aren’t sure where to find the most recent product collateral for <strong>Unified Communications</strong>. What should you do?
          </p>
          <p class="text-xs text-slate-500 mt-3 uppercase tracking-wide">Pick a response</p>
          <div class="mt-2 space-y-2" role="group" aria-label="Scenario responses">
            <button type="button" class="tour-scenario-opt w-full rounded-lg border border-slate-200 bg-slate-50/90 px-3 py-2.5 text-sm text-slate-700 text-left transition hover:border-slate-300 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400" data-tour-correct="false">
              Send an email to Everyone@gpcom.com and ask where to find it.
            </button>
            <button type="button" class="tour-scenario-opt w-full rounded-lg border border-slate-200 bg-slate-50/90 px-3 py-2.5 text-sm text-slate-700 text-left transition hover:border-slate-300 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400" data-tour-correct="true">
              Check the Sales SharePoint site and look inside Sales Resources.
            </button>
            <button type="button" class="tour-scenario-opt w-full rounded-lg border border-slate-200 bg-slate-50/90 px-3 py-2.5 text-sm text-slate-700 text-left transition hover:border-slate-300 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400" data-tour-correct="false">
              Email, call, and IM Sarah Tinkham relentlessly until she gives it up.
            </button>
          </div>
          <p class="text-xs text-red-700 mt-2 min-h-[1.25rem] hidden" data-tour-scenario-feedback="" role="status" aria-live="polite"></p>
          <p class="text-xs text-emerald-800 bg-emerald-50/90 border border-emerald-100 rounded-lg px-3 py-2 mt-3 hidden" data-tour-coach-note="">
            <strong>Coach's note:</strong> Official hubs beat broadcast email—Sales Resources is there so you (and Sarah) aren’t playing hide-and-seek.
          </p>
        </aside>
      </div>
      <div class="rounded-xl border border-slate-200 bg-white/95 p-5 shadow-sm backdrop-blur-sm max-w-4xl pointer-events-auto" data-tour-target="tour-knowledge">
        <p class="text-xs font-bold text-slate-500 uppercase tracking-wide">Knowledge checks</p>
        <p class="text-sm font-medium text-slate-900 mt-3">What is the best Mexican restaurant in Blair, NE?</p>
        <div class="mt-3 space-y-2 text-sm" role="group" aria-label="Knowledge check options">
          <button type="button" class="tour-knowledge-opt flex w-full gap-2 items-start rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-left transition hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400" data-tour-correct="false">
            <span class="text-slate-400 shrink-0" aria-hidden="true">○</span>
            <span>Taco Bell</span>
          </button>
          <button type="button" class="tour-knowledge-opt flex w-full gap-2 items-start rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-left transition hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400" data-tour-correct="true">
            <span class="text-slate-400 shrink-0" aria-hidden="true">○</span>
            <span>El Vallarta Mexican Restaurant</span>
          </button>
          <button type="button" class="tour-knowledge-opt flex w-full gap-2 items-start rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-left transition hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400" data-tour-correct="false">
            <span class="text-slate-400 shrink-0" aria-hidden="true">○</span>
            <span>Justin's leftover tacos in the fridge on floor 2</span>
          </button>
        </div>
        <p class="text-xs text-red-700 mt-2 min-h-[1.25rem] hidden" data-tour-knowledge-feedback="" role="status" aria-live="polite"></p>
        <div class="mt-3 hidden rounded-xl border-2 border-emerald-400/80 bg-gradient-to-br from-emerald-50 via-white to-orange-50 px-4 py-3 text-center shadow-lg ring-2 ring-emerald-400/30" data-tour-knowledge-affirmation role="status" aria-live="polite">
          <p class="text-base" aria-hidden="true">✨</p>
          <p class="text-sm font-semibold text-emerald-900">Blair has spoken—you’ve got great taste.</p>
          <p class="mt-1 text-xs text-emerald-800/90">El Vallarta would be proud.</p>
        </div>
        <p class="text-xs text-slate-500 mt-3 italic" data-tour-knowledge-hint="">Not graded—just for fun.</p>
        <div class="mt-4 flex gap-2">
          <span class="h-2 w-8 rounded-full bg-orange-400/90"></span>
          <span class="h-2 w-8 rounded-full bg-slate-200"></span>
          <span class="h-2 w-8 rounded-full bg-slate-200"></span>
        </div>
      </div>
    </div>
```

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
  - **One source of truth:** Search before you create. Duplicates drive ownership wars—**Salesforce** is how leadership settles who owns the account (and your commission story).
  - **Idle windows:** On the **general** path, when there’s **no qualifying logged activity** for the period below, others may work the account—**still** reach the listed owner first when you can; don’t ambush teammates.
    - **Prospect:** **61+** days.
    - **Customer:** **121+** days.
    - **Strategic list & USAC/E-Rate:** 61/121 clocks—assignment guidelines do not apply - program rules differ; confirm treatment before you chase the account.
  - **Five-day inbound clock:** Sales- or marketing-**assigned** inbound lead? **Five business days** to make first contact **and** log it in Salesforce. Miss it and it can be reassigned. **Self-sourced** leads do **not** use that clock.
  - **Transfers:** Never reassign yourself. Reach the current owner; once aligned, email **your manager and sales leadership** for approval.

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
        feedback: "Slow down. The window is open by the numbers, but cold outreach without a heads-up burns relationships internally. Reach the listed owner first."

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

ROE exists to **protect pipelines** and **draw clean lines** on who works whom. **Salesforce** is the system of record—full stop.

- **Search before you create** — One entity, one account. Duplicates waste time and invite disputes.
- **Log it or lose it** — Tasks, calls, meetings, emails belong **on the record**. Outlook does not count in an ownership fight.
- **Transfer through leadership** — Never self-reassign. Agree with the incumbent, then **manager + sales leadership** (per ROE).

**General** accounts: **61+** (Prospect) / **121+** (Customer) idle rules. **Strategic** list and **USAC/E-Rate** coverage are stricter—confirm before you chase the logo.

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

**Source:** This section summarizes the **Sales Rules of Engagement (ROE) — Revised August 2025** PDF linked under **Module Reference Files**. If leadership publishes a newer ROE, follow that document—not this page.

### General guidelines and Salesforce (all reps)

- Salesforce is the official system of record for arbitrating account disputes.
- Before creating accounts or contacts: search by address and name; do not open a second account for an existing entity; do not add a contact whose email already exists elsewhere without coordinating with that account owner.
- Most situations (~80%) fit the ROE as written. Unique or unclear cases go to sales management case by case—do not improvise policy on your own.

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
summary: "Deal progression. Clean pipelines. DocuSign workflows."
sensitivity: "public"
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
  - **Salesforce login:** **Okta** now—YubiKey no longer applies to signing in to the Salesforce app.
  - **Lead Conversion:** Convert leads only when they are ready for a quote. This should default to creating a new opportunity, account, and contact.
  - **Pipeline Management:** Keep stages accurate to the buying process. Never delete Closed/Lost opportunities, as that history is critical for forecasting and analysis.
  - **DocuSign Workflows:** Set the Contract Signer early on the GPC Solution. Ensure all signers exist as Contacts in Salesforce before sending the envelope.
  - **Data Hygiene:** Keep your pipeline clean by logging tasks, maintaining accurate close dates, and using the Salesforce Home dashboards to track follow-ups.

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
  - question: "When converting a lead in normal circumstances, what should you almost always do?"
    options:
      - "Create a new opportunity as part of conversion"
      - "Check 'Do not create an opportunity upon conversion'"
      - "Delete the lead record after conversion"
    correct_index: 0
    explanation: "Default = new opportunity; skipping needs manager/admin approval."

  - question: "For DocuSign from a GPC Solution, when is it problematic to add or rely on the Contract Signer field?"
    options:
      - "When the solution is already in Approval Pending (and adding late can behave differently by stage)"
      - "Only when the customer uses Gmail"
      - "Never; Contract Signer is optional for every stage"
    correct_index: 0
    explanation: "Set Contract Signer early; **Approval Pending** blocks adding it."

  - question: "After an opportunity is Closed/Lost, what does process guidance say about the Salesforce record?"
    options:
      - "Leave the data in place; the opportunity may return later"
      - "Delete the opportunity to keep the pipeline clean"
      - "Archive it outside Salesforce only"
    correct_index: 0
    explanation: "Don't delete—history matters."

  - question: "Who should clear rare exceptions where you skip creating an opportunity on lead conversion?"
    options:
      - "Your sales manager or Salesforce admin"
      - "Only the customer's IT department"
      - "No one; reps decide alone"
    correct_index: 0
    explanation: "Manager or admin for exceptions."

  - question: "For employee business lead referral opportunities after conversion, what should you verify and maintain?"
    options:
      - "Referral fields on the opportunity and communication with the referrer on status and eligibility"
      - "Only the opportunity name; referral data is optional"
      - "Delete referral fields to protect privacy"
    correct_index: 0
    explanation: "Referral fields + referrer updates."

  - question: "What is a practical daily habit for working your book in Salesforce per Salesforce 101-style guidance?"
    options:
      - "Use Tasks, pinned list views, and Home dashboards to keep follow-ups and reporting current"
      - "Avoid list views so no one sees your pipeline"
      - "Rely only on paper notes outside Salesforce"
    correct_index: 0
    explanation: "Tasks, views, dashboards."

  - question: "Before Send to DocuSign from a GPC Solution, where should signers exist in Salesforce?"
    options:
      - "As contacts on the relevant account (roles can help)"
      - "Only as leads that are never converted"
      - "Only in an external spreadsheet"
    correct_index: 0
    explanation: "Contacts on the account."

  - question: "When merging a Conga document and sending for signature, what is the recommended early step on the GPC Solution?"
    options:
      - "Set Contract Signer when you create or early in the solution lifecycle"
      - "Wait until Closed/Won to pick any signer"
      - "Skip Conga and email a blank PDF"
    correct_index: 0
    explanation: "Contract Signer early."

  - question: "What does Universal Search help you do in the GPC Sales experience?"
    options:
      - "Find records containing your search term across objects"
      - "Replace approval workflows automatically"
      - "Delete closed opportunities in bulk"
    correct_index: 0
    explanation: "Cross-object search."

  - question: "After Closed/Won on an opportunity, what typically happens in the solution lifecycle per Salesforce 101?"
    options:
      - "A project is created for each solution site in the GPC Solution"
      - "The GPC Solution is deleted to save space"
      - "All contacts are removed from the account"
    correct_index: 0
    explanation: "Projects per solution site."

scenarios:
  - title: "Employee business lead referral after conversion"
    situation: |
      Converted employee referral lead; opportunity open.
    choices:
      - label: "Skip referral fields; they are only for reporting to HR."
        feedback: "Wrong—keep referral fields and referrer updated."

      - label: "Verify referral fields on the opportunity and keep the referrer informed on status and eligibility."
        feedback: "Correct."

  - title: "First DocuSign envelope from Conga"
    situation: |
      Conga merge ready; **Contract Signer** never set; solution **Approval Pending**.
    choices:
      - label: "Add Contract Signer now and send immediately."
        feedback: "You can't add Contract Signer in Approval Pending—fix stage/workflow first."

      - label: "Pause and fix stage/signing prerequisites per the DocuSign integration guide (e.g. Contract Signer timing) before sending."
        feedback: "Correct."
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

## Common Pitfalls

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
id: "sales-operations-and-approvals"
title: "Sales Operations & Approvals"
summary: "Solution approvals. Change orders. Clean revenue."
sensitivity: "internal"
sales_trio_hide_deep_dive: true
reference_files:
  - label: "Approval Overview and Training Guide — 07/25"
    sharepoint_url: "https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Approval%20Overview%20and%20Training%20Guide%20-%200725.pdf?csf=1&web=1&e=qy6LaI"
  - label: "Pre-Approved Order Process Quick Reference Guide — 07/23"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/SalesforceRoadmap/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FSalesforceRoadmap%2FShared%20Documents%2FGeneral%2F2025%20Salesforce%20Training%20Guides%20%28Legacy%20BAU%20org%29%2FPre-Approved%20Order%20Process%20Quick%20Reference%20Guide%20-%200723.pdf&parent=%2Fsites%2FSalesforceRoadmap%2FShared%20Documents%2FGeneral%2F2025%20Salesforce%20Training%20Guides%20%28Legacy%20BAU%20org%29"
  - label: "Approval Requirements Matrix v5.5 — 07/25"
    sharepoint_url: "https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Approval%20Requirements%20Matrix%20v5.5%20-%200725.pdf?csf=1&web=1&e=h64jqJ"
  - label: "Change Order Process — Sales Team — 03/25"
    sharepoint_url: "https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Change%20Order%20Process%20-%20Sales%20Team%20-%200325.pdf?csf=1&web=1&e=STAe3w"
  - label: "Costing Routing Quick Reference Guide — 11/23"
    sharepoint_url: "https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Costing%20Routing%20Quick%20Reference%20Guide%20-%201123.pdf?csf=1&web=1&e=Ta1aBx"
  - label: "Move-Add-Change Processes — Sales Team — 11/23"
    sharepoint_url: "https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Move-Add-Change%20Processes%20-%20Sales%20Team%20-%201123.pdf?csf=1&web=1&e=zURGTj"
  - label: "Salesforce Roadmap — shared link"
    sharepoint_url: "https://gpcom.sharepoint.com/:b:/s/SalesforceRoadmap/IQCEYPLtQTCVS7H8aEnrSTrLARzxb0p97NTo17Rj8DeB_gg?e=RyiZUS"
video_sections:
  - heading: "Pre-Approved Fiber"
    intro: The shortcut only applies when the deal is genuinely plain-vanilla fiber. If payback or the dollars feel fuzzy, use the normal approval path.
    body: |
      **[Pre-Approved Order Process Quick Reference — 07/23](https://gpcom.sharepoint.com/sites/SalesforceRoadmap/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FSalesforceRoadmap%2FShared%20Documents%2FGeneral%2F2025%20Salesforce%20Training%20Guides%20%28Legacy%20BAU%20org%29%2FPre-Approved%20Order%20Process%20Quick%20Reference%20Guide%20-%200723.pdf&parent=%2Fsites%2FSalesforceRoadmap%2FShared%20Documents%2FGeneral%2F2025%20Salesforce%20Training%20Guides%20%28Legacy%20BAU%20org%29)**
      - **Who:** Channel, Enterprise, and Wholesale AEs
      - **36+ month** term
      - **No** promos, free months, buyouts, or promo credits
      - **Build Fiber** or **On-Net Fiber** sites only (**fiber only**—not copper or coax)
      - New logos or renewals / upgrades
      - Tied to a **Zone Parent** opportunity that is **Booked, In Progress, or Completed**

      **Fine print**
      - **$150+** MRC per site
      - Service within **500 feet** of the **fiber line** (not just the vault)
      - Path **cannot** cross **railroads, streets, grassy areas, or building penetrations**
      - **Zip 68102** excluded
      - Discounts: **20%** max if not term-based; if term-based, use the table (e.g. **36-month** → **27%** max—and **0.01% over** disqualifies Pre-Approved)

      **Check for product exclusions prior to proceeding.**
  - heading: "Approval Requirements Matrix"
    intro: Payback, discounts, and dollar thresholds live here.
    body: |
      **[Approval Requirements Matrix v5.5 — 07/25](https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Approval%20Requirements%20Matrix%20v5.5%20-%200725.pdf?csf=1&web=1&e=h64jqJ)**
      - **Payback vs term:** Max **payback months** allowed for **auto-approve** depends on **contract term**—go over the limit for that term → **manager** approval (full table in PDF)
      - **Strategic Build** (solution site type): **bypasses** the payback-month requirement in the matrix
      - **Discount (not by term):** **≤20%** auto; **>20%** → **manager**
      - **Discount (by term):** caps **step up** with longer terms—e.g. **24–35 mo** → **22%** max, **36–47 mo** → **27%**, **48–59 mo** → **29%**, **60+ mo** → **31%**
      - **Who it applies to:** **Enterprise, Channel, and Wholesale** use the same discount rules 

      **Net investment (deal size)**
      - **Under $50k** — auto-approve band
      - **$50k+** — **manager**
      - **$75k+** — **CRO**
      - **$100k+** — **CFO**
      - **$500k+** — **CEO**

      **Other triggers**
      - **Churn:** **≤10%** auto; **>10%** → **manager** and **CRO**
      - **Unfavorable investment** — always **manager**
      - **Product** line issues — **Product Manager**
      - **Dark fiber** — **manager** and **CRO**

five_minute_summary: |
  - **The Approval Process:** Reviewers evaluate site-level services, products, and quote math—not just the headline total. Track progress via the Approval History on the GPC Solution.
  - **Handling Changes:** Use Change Orders only for pre-billing adjustments. Once billing has started, use the MAC (Move-Add-Change) process for partial updates or Disconnect for full removals.
  - **Manual Validation:** Checking "Request Manual Validation" skips automated routing and forces every department to review. Use this sparingly.
  - **Pre-Approved Fast Track:** Clean fiber can skip the long approval chain when you pass **both** checklists in the next two cards—**Pre-Approved Fiber** first, then **Approval Requirements Matrix** (payback, discounts, deal size). Anything fuzzy? Run **standard** approvals.

knowledge_checks:
  - question: "When is a 'change order' appropriate in the narrow sense used here?"
    options:
      - "After Closed/Won and before billing has started"
      - "Any time the customer changes their mind, including after billing"
      - "Only before the GPC Solution is approved the first time"
    correct_index: 0
    explanation: "Pre-billing contract change only; post-billing MAC/disconnect/cancel paths differ."

  - question: "What does checking Request Manual Validation on a Solution Site do to costing routing?"
    options:
      - "Skips automation so each participating department must review"
      - "Speeds up routing by accepting all system estimates"
      - "Removes the need for Solution Services on the site"
    correct_index: 0
    explanation: "Forces manual departmental review."

  - question: "After you submit a signed change order package, who typically performs the booking adjustment in Salesforce?"
    options:
      - "Salesforce Administration"
      - "The account executive alone"
      - "The customer via self-service"
    correct_index: 0
    explanation: "SF Admin booking; PMO project; CRC billing—per change order process."

  - question: "From the GPC Solution, where do you run Approve, Reject, Reassign, or Recall actions?"
    options:
      - "Approval History on the GPC Solution record"
      - "Only the Leads tab"
      - "Only the customer's email inbox"
    correct_index: 0
    explanation: "Approval History on the GPC Solution."

  - question: "If billing has already started and the customer wants a partial in-life contract change, which path applies instead of a pre-billing change order?"
    options:
      - "Move-Add-Change (MAC) materials and process"
      - "The same Conga change order template used before billing"
      - "Only the Cancellation playbook"
    correct_index: 0
    explanation: "After billing, partial changes follow MAC."

  - question: "If the customer wants all services removed after billing has started, what family of process should you use rather than MAC for partial tweaks?"
    options:
      - "Disconnection process materials"
      - "Pre-billing Cancellation only"
      - "A new lead record with no opportunity"
    correct_index: 0
    explanation: "Full removal post-billing → Disconnection."

  - question: "When multiple services are selected on one Solution Site, how does costing routing typically consolidate paths?"
    options:
      - "It follows the path that requires the deepest review"
      - "Each service is ignored if another is cheaper"
      - "Routing always picks the fastest automated estimate only"
    correct_index: 0
    explanation: "Deepest-review path when multiple services apply."

  - question: "If both New and Existing services are selected on one site, which routing path applies per common rules of thumb?"
    options:
      - "The New service path"
      - "The Existing path only"
      - "No routing runs until the customer sends a fax"
    correct_index: 0
    explanation: "New + Existing on one site → **New** path."

  - question: "For change order submissions, which groups are typically in the loop alongside Sales Management when required?"
    options:
      - "PMO, Salesforce Administration, and CRC"
      - "Only the customer's legal counsel"
      - "Only product marketing"
    correct_index: 0
    explanation: "PMO, SF Admin, CRC for project, booking, billing."

  - question: "What is OBR readiness material intended for relative to Salesforce approvals and costing?"
    options:
      - "Account planning cadence with ops leadership—not a substitute for SF approval or costing rules"
      - "Replacing Approval History entirely"
      - "Automating all Solution Site costing without review"
    correct_index: 0
    explanation: "OBR ≠ approval or costing; different purpose."

scenarios:
  - title: "Customer wants pricing changes after billing started"
    situation: |
      **Closed/Won** and **billing started**. Customer wants to change MRC on **part** of the contract—not remove all services.
    choices:
      - label: "Use the pre-billing Change Order Conga path from the GPC Solution."
        feedback: "Wrong. Pre-billing change orders only; post-billing partial → MAC."

      - label: "Follow Move-Add-Change (MAC) process materials—not the pre-billing change order template."
        feedback: "Correct."

  - title: "Deepest review path on a multi-service site"
    situation: |
      One Solution Site has **multiple services** selected.
    choices:
      - label: "Routing follows the path that requires the deepest review when multiple services apply."
        feedback: "Correct."

      - label: "Each service is costed in parallel with no consolidation rule."
        feedback: "Incorrect—deepest-review path applies."
---

## Overview

Winning the deal means nothing if the **GPC Solution** cannot clear **approvals** and **costing**.

- **Approvals** — Reviewers judge **site-level** services, products, and **quote math** before delivery—not a headline total.
- **Change order vs MAC vs disconnect** — Billing status picks the tool. Wrong path = stalled installs and revenue fights.
- **Costing routing** — Automation and **Manual Validation** route dollars to the right reviewers; learn the rules before you submit.

Pick the path that matches **where the deal is in billing**, then keep the record clean enough for someone else to approve it.

---

## Key Guidelines

1. **Check the Billing Status:** This determines your path. Pre-billing changes use the Change Order process. Post-billing partial changes require a MAC (Move-Add-Change). Full removals are Disconnects.
2. **Verify Site-Level Data:** Reviewers validate site-level completeness, not just the headline MRC. Ensure each Solution Site has the correct services and products attached.
3. **Check the Math:** Mismatches between line items and totals stall approvals and delay projects.
4. **Include the GPC Solution ID:** Every form and required attachment must carry the GPC Solution ID. Missing IDs cause booking delays post-approval.
5. **Use Manual Validation Sparingly:** Checking "Request Manual Validation" skips automation and routes the deal to every participating department. Only check it when human review is genuinely required.

---

## Common Pitfalls

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

::: flip ["I'll just submit a change order—the customer wants to adjust services."]
First ask: has billing started? If yes, a change order is not the right tool. Partial in-life changes → MAC; full removal → Disconnect.
:::

::: flip ["The approval is stuck—I'll fix it in a side channel with the reviewer."]
Check Approval History for the current step and assignee. Escalate through Sales Management or the SF team—not Slack or email outside the record.
:::

::: flip ["I checked Manual Validation to be safe."]
Manual Validation skips automation and routes to every participating department. Only check it when you genuinely need human review—not as a default.
:::

::: flip ["New and Existing services on the same site will just pick the faster path."]
New + Existing on one site always routes via the New path. Know the rules before building the Solution Site.
:::

::: flip ["The quote in my email matches intent—that's enough for approval."]
Reviewers validate **line items, totals, and site-level attachment** on the GPC Solution. Fix the record so quote math and services match what you're asking reviewers to approve.
:::

::: flip ["Site-level detail is busywork—the headline MRC is what counts."]
Incomplete Solution Sites—missing services or products on a site—stall approvals and delay projects. Reviewers check site-level completeness, not just the rollup.
:::

</div>

---

## Process Deep Dive [deep]

**Where to look:** The **Module Reference Files** links are the real documents—**Approval Overview**, **Pre-Approved quick reference**, **Approval Requirements Matrix**, **Change Order**, **MAC**, **Costing Routing**. This deep dive is just the map; when a number matters, open the PDF.

**Everyday approvals:** Live in **Approval History** on the GPC Solution—Approve, Reject, Reassign, Recall, comments. Reviewers care about **sites, services, products, and quote math**, not a tidy story in email. **Product Management**, **Sales Management**, and **SF** each have different jobs when something breaks. Stuck? Read who owns the step in **Approval History**, then escalate through **Sales Management** or **SF**—not a side thread.

**Change order (before billing):** After **Closed/Won**, before **billing** starts, while the solution is **Booked** not **Billed**—that’s the Conga change-order lane: clean up the sites, keep the **GPC Solution ID** on everything, signatures, upload, loop **PMO / SF Admin / CRC** as the process says. If the site is **Pending Billing** or **7–10 Day Order**, booking changes might need **PMO/CRC** first—don’t promise same-day magic.

**Costing shortcuts:** **New + Existing** on one site → **New** path. **Request Manual Validation** means you asked every department to touch it—only use that on purpose.

**Before you submit anything:** Right object, real sites and lines, math that matches the quote, attachments with IDs, and Manual Validation only when you actually want full manual review.

**Pre-Approved in Salesforce (what actually happens):** You set **Order Process** to **Pre-Approved** when you **create** the GPC Solution or while **Stage** is **Design**—if you’re past that, you **recall** to Design first. Pre-Approved solutions **skip costing** until you press **Closed Won**. Day-to-day: use **Preliminary Quote** on the button bar and pick the Conga output you need; when paperwork is signed, **Closed Won** and upload like you always would. These deals **won’t show on bookings/production reports** until **OSP / COE** (and the rest of the validation chain) clears them—that’s expected, not a bug.

**Pre-Approved vs the matrix:** The **quick reference** is “does this fiber deal even qualify?” The **matrix** is “what do payback, discounts, and net investment do to routing?” A deal can look Pre-Approved on fiber rules and still need a manager because of **payback, churn, net investment, or product**—so you check **both** PDFs, not just one.
<!-- prettier-ignore-end -->

---

<a id="portfolio-business-capabilities-portfolio-and-business-capabilities"></a>

# Portfolio & Business Capabilities (`portfolio-and-business-capabilities`)

<!-- prettier-ignore-start -->
---
id: "portfolio-and-business-capabilities"
title: "Portfolio & Business Capabilities"
summary: "Layered technology. Midwest fiber. Outcome-led selling."
sensitivity: "public"
reference_files:
  - label: "Sales Resources (collateral hub)"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx"
discovery_questions:
  - "How many locations do you have, and how are they connected today—shared Internet, MPLS, Ethernet, or SD-WAN?"
  - "What are your most critical applications? Are any of them SaaS or cloud-hosted (O365, Salesforce, ERP)?"
  - "What does an hour of downtime cost your business—and what was your last significant outage?"
  - "Are you planning any cloud migrations or voice modernization in the next 12–24 months?"
  - "Who owns network, security, and voice decisions—are those the same team or separate?"
five_minute_summary: |
  - **The Opening:** Focus on business outcomes and partnership (local support, proactive monitoring, Midwest presence) rather than dumping a list of SKUs.
  - **The GPC Stack:** Position our services as one cohesive system, layering access, WAN, security, and unified communications.
  - **Providing Proof:** Use the capability deck to tell the high-level narrative, and lean on Sales Resources for specific product evidence.
  - **Running Discovery:** Uncover site counts, critical applications, uptime requirements, and cloud migrations before pitching a specific fit.
knowledge_checks:
  - question: "What is the best opening for a portfolio conversation?"
    options:
      - "Lead with a full list of product SKUs and speeds."
      - "Lead with business outcomes and GPC as a partner with a layered network story."
      - "Start only with pricing and contract terms."
    correct_index: 1
    explanation: "The module emphasizes outcomes and partnership first; layer the stack (access → WAN → security → apps) and save SKU detail for follow-up collateral."
  - question: "How should you describe how GPC products fit together?"
    options:
      - "As layers—access, WAN, security, then collaboration and cloud adjacency—so it reads as one system."
      - "As unrelated add-ons the customer picks from a catalog."
      - "As only Internet access with no connection to other services."
    correct_index: 0
    explanation: "Use the layered portfolio map (foundation through apps) so the customer sees integrated design, not a random menu."
  - question: "Where should you send someone for product-specific datasheets after this storyline?"
    options:
      - "Only the Business Capability PDF; ignore other folders."
      - "Sales Resources and the product modules, while this page stays the narrative spine."
      - "Generic web search only."
    correct_index: 1
    explanation: "Use the Business Capability deck for the story and **Sales Resources** (plus the relevant product modules) for per-product evidence."
  - question: "What proof points anchor the 'why GPC' network story?"
    options:
      - "Fiber-first access, Midwest IP reach, Tier-1 and IX relationships, and paths tuned for cloud/SaaS and end users."
      - "Only the number of years in business, with no network specifics."
      - "A guarantee that every site worldwide has identical latency."
    correct_index: 0
    explanation: "Lead with resilient Midwest foundation, fiber-first access, and efficient routes to cloud and SaaS—not generic longevity claims alone."
  - question: "In discovery, what should you clarify before you summarize fit in one sentence?"
    options:
      - "Only the customer's favorite brand of router."
      - "Locations, critical apps, uptime tolerance, and cloud/voice moves—then reflect the layered stack."
      - "Whether they prefer PDF or Word for internal memos."
    correct_index: 1
    explanation: "The module ties discovery to footprint, workloads, and resilience so the recommended stack matches real operations."
  - question: "How does this module relate to the Business Capability PDF versus the deep collateral library?"
    options:
      - "Ignore the PDF; the library replaces the storyline entirely."
      - "Use this module and the Business Capability deck for the narrative spine; use Sales Resources and the product modules for per-product evidence."
      - "Use only this module and never reference external collateral."
    correct_index: 1
    explanation: "Keep the executive storyline in the capability materials; pull datasheets and vertical proof from **Sales Resources** and product modules when needed."
  - question: "When a CFO asks 'Why GPC vs anyone else?' in one sentence, what is a strong response?"
    options:
      - "List fiber miles with no business outcome."
      - "Reliable Midwest foundation, fiber-first access, layered services, and accountable local support—then offer the capability deck."
      - "Decline to answer until they attend a three-day workshop."
    correct_index: 1
    explanation: "Tie network differentiation to partnership and outcomes, then give a concrete next step (e.g., the capability presentation)."
  - question: "Which stack order matches the portfolio map taught here?"
    options:
      - "Security first, then access, then WAN, then apps—with no ordering rules."
      - "Access (fiber + backup) → WAN → security → UC, Cloud Connect, Wi-Fi, Video."
      - "Apps only; transport is irrelevant to the conversation."
    correct_index: 1
    explanation: "Layer from foundation through applications so the customer sees a designed system, not a random SKU list."
  - question: "What role should local support and monitoring play in the storyline?"
    options:
      - "They are optional talking points only if the customer complains."
      - "They reinforce GPC as a partner—local teams and 24/7 monitoring differentiate from commodity ISP positioning."
      - "They should never be mentioned to avoid setting expectations."
    correct_index: 1
    explanation: "Partnership and operational accountability are core to moving beyond 'just another carrier.'"
  - question: "What is a practical way to describe any deal using this module?"
    options:
      - "Quote random SKUs until something sticks."
      - "Map the opportunity to 'access + path + policy + apps' against their sites and workloads."
      - "Focus exclusively on a single product name regardless of discovery."
    correct_index: 1
    explanation: "Framing deals across access, path, policy, and apps aligns conversation with the layered portfolio map."
scenarios:
  - title: "Retail chain, cloud POS, hates 'just another ISP'"
    situation: |
      A multi-site retailer wants reliable connectivity and says all carriers sound the same. They care about **uptime**, **local support**, and **paths to cloud POS and SaaS**.
    choices:
      - label: "Pitch a SKU list and lowest price first."
        feedback: "Weak: you sound like a commodity. Open with outcomes, Midwest IP reach, monitoring, and local teams—then map layers to their sites."
      - label: "Open with outcomes, partnership, and layered access + WAN + security + apps; offer collateral for proof."
        feedback: "Strong: matches the executive storyline and portfolio map, and sets up discovery on sites and critical workloads."
  - title: "CFO joins the call halfway through"
    situation: |
      You were walking through services and the CFO asks **"Why GPC vs anyone else?"** in one sentence before they drop off.
    choices:
      - label: "Answer with fiber miles and technical jargon only."
        feedback: "Incomplete: add the business angle—competitive connectivity through a resilient Midwest network, partnership, and paths tuned for cloud/SaaS."
      - label: "Summarize: reliable Midwest foundation, fiber-first access, layered services, and accountable local support—then offer the capability deck."
        feedback: "Strong: ties network proof points to partnership and gives them a concrete next artifact."
roleplay:
  persona: "Skeptical CFO at a mid-size Midwest manufacturer"
  scenario: "Just sat through two carrier pitches that sounded identical. Asks point-blank why GPC is different before walking out of the room."
  goal: "Deliver a one-sentence 'why GPC' answer grounded in outcomes and partnership, then anchor the conversation on the layered stack and offer the capability deck as a concrete next step."
---

## At a glance

- **Story:** Outcomes and partnership first—**access (fiber + backup) → WAN → security → UC, Cloud Connect, and Wi‑Fi** as **one designed system**, not a SKU list.
- **Proof:** **Midwest IP reach**, Tier-1/IX relationships, local teams, **24/7 NOC**—use the **Business Capability** materials for the narrative spine and **Sales Resources** for per-product evidence.
- **Discovery:** Sites, critical apps, uptime tolerance, cloud/voice moves—then map the opportunity to **access + path + policy + apps** so the stack matches how they actually run.

---

## Story stack

::: elevator [Elevator Pitch]
GPC is a **layered technology partner** on a resilient Midwest fiber network: access (fiber + backup) → WAN → security → UC, Cloud Connect, and Wi-Fi as **one system**, not a SKU buffet. Proof: Midwest IP reach, Tier-1/IX paths, local teams, 24/7 NOC—use the capability deck for the story, Sales Resources for product evidence.
:::

::: accordion Business Capability Overview
Cover slide from the GPC Business Capability presentation—use as the opening visual when framing outcomes and partnership.

:::

---

## Discovery Run

<div class="mt-4 rounded-2xl border border-emerald-200/80 overflow-hidden bg-slate-50 shadow-sm">
  <iframe
    src="games/portfolio-level-1/index.html?embed=1&module=portfolio-and-business-capabilities"
    title="Discovery Run — Level 1"
    loading="lazy"
    sandbox="allow-scripts allow-same-origin"
    style="width: 100%; border: 0; display: block; height: 40rem; max-height: min(88vh, 44rem); background: #f1f5f9;"
  ></iframe>
</div>

---

## Objection Handling

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

::: flip ["You all sound the same."]
Anchor on the layered stack: access → WAN → security → apps as one designed system—then ask what their current provider does when something breaks at 2 a.m.
:::

::: flip ["We just need basic Internet."]
Ask about cloud apps, VoIP, and growth plans—then show how basic access becomes a foundation for the full stack.
:::

::: flip ["We already have a national carrier."]
Midwest IP reach, local field teams, NOC monitoring, and portfolio breadth—not price. Tie to TCO of downtime.
:::

::: flip ["We're not ready for a full solution."]
Start with access; plant flags for WAN, security, and UC as next conversations once trust is established.
:::

::: flip ["We only buy on the lowest price."]
Reframe to **TCO**: downtime, truck rolls, change orders, and ticket volume—cheap access can be expensive to operate.

:::

::: flip ["We'll add security and WAN later."]
Layered design from day one avoids rip-and-replace; position access + path + policy as one roadmap, even if phases differ.

:::

</div>

---

## Technical Deep Dive [deep]

**Portfolio map (layers):**

| Layer | What | Position / hook |
| --- | --- | --- |
| **Access + continuity** | Fiber primary; **wireless backup** when continuity matters | Fiber = capacity/perf; backup = **continuity**—not "second Internet." Backup → SD‑WAN + security; multi‑site → **Ethernet** |
| **WAN** | **Ethernet** mesh; **SD‑WAN** for policy + multi‑link | Ethernet = predictable site mesh; SD‑WAN = orchestration + cloud breakout. → firewall/DDoS, **Cloud Connect**; new sites → fiber + Wi‑Fi |
| **Protect** | Managed firewall, DDoS | Policy on the pipe—tie to ransomware, PCI, guest Wi‑Fi. → SD‑WAN, UC (SBC) where relevant; guest Wi‑Fi → **Managed Wi‑Fi** |
| **Enable** | UC, **Cloud Connect**, Wi‑Fi, video (when vertical cares) | UC + experience; Cloud Connect = predictable cloud paths. Voice/video pain → check access/WAN/QoS + SD‑WAN; heavy SaaS → Cloud Connect + security |

**Practice line:** any deal = **access + path + policy + apps** mapped to sites/workloads.

**Conversation flow:**
- **Discovery:** sites, critical apps, uptime, cloud/voice moves, owners (network/security/voice).
- **Order:** one-sentence fit → layered map → capability deck + **Sales Resources**.
- **Checkpoints:** footprint → apps → RTO/RPO → ownership.

::: accordion Portfolio Stack Layers
Visual breakdown of the layered portfolio—access through applications—from the capability deck.


:::

::: accordion Network Story & Proof Points
Midwest IP, fiber-first access, and Tier-1/IX relationships—anchor the "why GPC" conversation with this network narrative slide.

:::
<!-- prettier-ignore-end -->

---

<a id="connectivity-access-product-connectivity"></a>

# Connectivity & Access (`product-connectivity`)

<!-- prettier-ignore-start -->
---
id: "product-connectivity"
title: "Connectivity & Access"
summary: "Dedicated access. Private transport. Fiber vs satellite."
sensitivity: "public"
reference_files:
  - label: "Sales Resources (product collateral)"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx"
discovery_questions:
  - "What are your most critical applications—VoIP, cloud ERP, video conferencing, payment terminals? How much upload traffic do they generate compared to download?"
  - "How are your locations connected today—shared broadband, MPLS, Ethernet, or SD-WAN? When does that contract expire?"
  - "Have you experienced jitter, latency spikes, or outages? What broke first, and what did it cost you?"
  - "Do you need static IPs, diversity (dual-path), or DDoS monitoring as part of your access design?"
  - "Are any sites data-center or hub locations where high-capacity optical transport between strategic endpoints might be relevant?"
five_minute_summary: |
  - **Internet Access:** Use SIA for flexible, cost-sensitive shared access. Lead with DIA when the customer needs dedicated symmetrical bandwidth, SLA-grade operations, or stronger DDoS protection.
  - **Private Transport:** Position Managed Ethernet for private Layer 2 site-to-site connectivity. Use Wave for high-capacity Layer 1 optical transport between data centers or hubs.
  - **Fiber vs. Satellite:** When competing against satellite, focus discovery on reliability, latency, and weather vulnerabilities.
  - **Pricing:** Treat training PDFs as internal references. Always use official quoting tools for customer-facing numbers.

knowledge_checks:
  - question: "When should you lead with Dedicated Internet Access (DIA) over Standard Internet Access (SIA)?"
    options:
      - "Whenever the customer wants the cheapest option regardless of workload."
      - "When they need symmetrical heavy use, SLA-style operations, diversity, stronger DDoS visibility, or have outgrown shared/best-effort access."
      - "Only when they have no fiber at the site."
    correct_index: 1
    explanation: "DIA = performance/ops/symmetry—not minimum cost."

  - question: "What is Managed Ethernet primarily for?"
    options:
      - "Private Layer 2 connectivity between sites (not Internet breakout), with EPL/EVPL and E-LAN options."
      - "Replacing all voice systems with UC only."
      - "Consumer-grade Wi-Fi in the office."
    correct_index: 0
    explanation: "Private L2 between sites—not DIA/SIA."

  - question: "What is Wavelength (Wave) best positioned for?"
    options:
      - "Small-branch guest Wi-Fi only."
      - "Layer 1 optical, high-capacity point-to-point between strategic endpoints (e.g., DC/hub), not as a substitute for DIA/SIA Internet."
      - "Email hosting for ten users."
    correct_index: 1
    explanation: "Big optical transport—qualify vs Internet."

  - question: "Per the DIA vs SIA comparison in this module, which statement is accurate?"
    options:
      - "SIA and DIA both scale to the same documented maximum in the comparison sheet."
      - "In the comparison, SIA tops out around 2 Gbps symmetrical while DIA scales up to 100 Gbps symmetrical—use that to frame scale and growth."
      - "SIA always includes richer customer-specific DDoS monitoring than DIA."
    correct_index: 1
    explanation: "Use the comparison sheet—don't assume."

  - question: "How should you use training PDFs that live in the pricing or internal folders?"
    options:
      - "Email them verbatim to customers as final quotes."
      - "Treat them as internal references; customer-facing numbers and quotes come from standard tools and approved processes."
      - "Ignore them completely even for internal planning."
    correct_index: 1
    explanation: "Internal until quoting validates."

  - question: "When comparing GPC fiber to satellite for POS and VoIP, what is sound positioning?"
    options:
      - "Dismiss satellite without understanding their constraints."
      - "Explore weather, latency, jitter, and congestion tactfully; contrast fiber reliability, stable low latency, and scalable symmetrical enterprise paths."
      - "Promise identical performance in every geography without discovery."
    correct_index: 1
    explanation: "Qualify constraints; stay professional."

  - question: "What problem does E-LAN (Ethernet LAN) address in the module's framing?"
    options:
      - "Single home-user email only."
      - "Multipoint-to-multipoint Layer 2 reach so multiple UNIs can mesh—any site to any site within the service."
      - "Public Internet breakout for guest Wi-Fi only."
    correct_index: 1
    explanation: "Mesh L2—not Internet."

  - question: "A branch suffers upload congestion and jitter on shared Internet for cloud apps. What is a sensible first step?"
    options:
      - "Automatically quote Wave between every site without qualification."
      - "Qualify SIA vs DIA (symmetry, latency, DDoS, support), pain points, and whether private Ethernet fits site-to-site needs."
      - "Recommend only consumer broadband upgrades."
    correct_index: 1
    explanation: "Discovery before Wave."

  - question: "What is the right mental model for **access** in this module?"
    options:
      - "Access is how traffic reaches the customer—SIA for flexible shared access, DIA for dedicated symmetrical paths and richer operations."
      - "Access means only MPLS forever, with no Internet options."
      - "Access is identical to SD-WAN policy routing in every case."
    correct_index: 0
    explanation: "SIA vs DIA by workload—then Ethernet/Wave if private transport fits."

  - question: "When should Wave be positioned instead of simply upsizing DIA/SIA?"
    options:
      - "Whenever the customer mentions the word Internet."
      - "For DC–DC or hub-to-hub big pipes, replication, or latency-sensitive workloads that need Layer 1 optical—not as a substitute for Internet access."
      - "Only for sites under 10 Mbps total usage."
    correct_index: 1
    explanation: "Not default Internet uplift."

scenarios:
  - title: "Branch complains about VPN and video over 'business broadband'"
    situation: |
      Shared Internet; **jitter and upload** pain for VoIP/cloud. Budget tight.
    choices:
      - label: "Automatically quote Wave between every site."
        feedback: "Wave = L1 big pipes—start with DIA/SIA/Ethernet discovery."

      - label: "Qualify SIA vs DIA and whether Ethernet fits site-to-site."
        feedback: "Correct."

  - title: "Prospect compares GPC fiber to satellite for stores"
    situation: |
      **Starlink** / satellite for rural **POS + VoIP**.
    choices:
      - label: "Dismiss satellite without asking any questions."
        feedback: "Explore latency/weather first—then fiber strengths."

      - label: "Explore weather, latency, congestion; position fiber reliability and symmetrical paths."
        feedback: "Correct."

roleplay:
  persona: "Skeptical IT Director"
  scenario: "Complaining about VPN jitter over shared broadband at three branch locations. Wants the cheapest fix and assumes upgrading bandwidth on the same SIA circuit will solve it."
  goal: "Pivot from price to reliability—qualify the symmetry and latency requirements for VoIP and cloud apps, then position DIA or Managed Ethernet as the right solution rather than simply more shared bandwidth."
---

## At a glance

- **SIA vs DIA:** Shared **SIA** when best-effort and cost dominate; **DIA** when symmetry, VoIP/video pain, SLA-style ops, diversity, or stronger DDoS visibility matter—more bandwidth on SIA does not fix jitter by itself.
- **Private transport:** **Managed Ethernet** = Layer 2 site-to-site (not Internet breakout). **Wave** = Layer 1 optical between DCs/hubs—qualify discovery before positioning it as “faster Internet.”
- **Fiber vs satellite:** Reframe on **reliability, latency, weather, congestion**—not a speed-test duel alone.
- **Commercial:** Training PDFs stay **internal**; customer-facing numbers only through **approved quoting** and AE/pricing when scope is fuzzy.

---

## Pitch

::: elevator [Elevator Pitch]
GPC's connectivity stack matches the right access technology to each customer's workload—not just the cheapest pipe available. **SIA** (Standard Internet Access) is the right fit for cost-sensitive, flexible needs. **DIA** (Dedicated Internet Access) delivers symmetrical bandwidth, stronger DDoS posture, and SLA-grade operations for businesses that can't afford jitter or downtime. **Managed Ethernet** provides private Layer 2 connectivity between sites. **Wave** moves large optical volumes between data centers and hubs. Discovery first—then quote the right product.
:::

---

## Discovery Galaxy

<div class="rounded-2xl border border-emerald-200/80 overflow-hidden bg-slate-50 shadow-sm">
  <iframe
    src="games/galactica-1/index.html?embed=1&module=product-connectivity"
    title="Discovery Galaxy"
    loading="lazy"
    sandbox="allow-scripts allow-same-origin"
    style="width: 100%; border: 0; display: block; height: 40rem; max-height: min(88vh, 44rem); background: #f1f5f9;"
  ></iframe>
</div>

---

## Objection Handling

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

::: flip ["Just bump up our shared Internet—that'll fix the jitter."]
More shared bandwidth doesn't guarantee upload symmetry or latency. Qualify what's actually causing jitter—often it's the shared nature, not raw capacity. DIA is the right answer for VoIP and cloud workloads.
:::

::: flip ["DIA is too expensive."]
Frame TCO: what does an hour of dropped VoIP calls, failed payment processing, or inaccessible cloud ERP cost? DIA delivers dedicated symmetry and a stronger ops posture.
:::

::: flip ["Starlink is cheaper for our rural stores."]
Acknowledge coverage; then qualify: does payment processing or VoIP tolerate 20–40ms variable latency, weather disruptions, or congestion during peak hours? Fiber delivers predictable, stable paths.
:::

::: flip ["We already have MPLS—why change?"]
Ask when the contract expires and what it costs vs. throughput. SD-WAN over DIA often delivers better performance at lower cost with cloud breakout capability.
:::

::: flip ["We don't need symmetrical upload."]
Qualify cloud backup, video, VoIP, and SaaS—many workloads are upload-heavy; discovery before assuming asymmetric is fine.

:::

::: flip ["Fiber build will take too long."]
Acknowledge calendar reality; contrast with ongoing cost of poor access; phased cutover and project planning where applicable.

:::

</div>

---

## Technical Deep Dive [deep]

**Access stack:**

| Layer | Role |
| --- | --- |
| **SIA** | Shared, flexible, cost-sensitive; up to ~2 Gbps symmetrical per comparison sheet |
| **DIA** | Dedicated, symmetrical; up to 100 Gbps symmetrical; stronger DDoS/NOC posture |
| **Ethernet** | Private L2 (E-Line/EVPL/E-LAN); site-to-site—not Internet breakout |
| **Wave** | L1 optical DC/hub links—not "more Internet"; qualify vs Internet |

**When to lead:**
- **SIA** = budget + tolerable shared path
- **DIA** = symmetry, SLA-ish ops, diversity, VoIP/video pain on shared access
- **Ethernet** = site-to-site private
- **Wave** = big optical P2P when discovery proves it—not branch Wi‑Fi default

**DIA pricing reference (from SD-WAN training doc—internal only):**
- 50×50 Mbps DIA: ~$354/mo list
- 100×100 Mbps DIA: ~$547/mo list
- 500×500 Mbps DIA: ~$860/mo list
- 1000×1000 Mbps DIA: ~$1,060/mo list
- Customer-facing quotes: use standard quoting tools only

**Discovery:** critical apps; upload vs download; static IPs / diversity; incumbent access; outages.

**Pricing:** Quotes = standard tools + approvals. DIA/SIA/Ethernet/Wave pricing via quoting + Sales Resources—involve AE/pricing when scope is fuzzy.

::: accordion DIA vs SIA Comparison
Use the comparison sheet in **Sales Resources** for side-by-side dedicated vs shared Internet positioning.
:::

::: accordion Ethernet Battle Card
Ethernet battle card and qualifiers sit in **Sales Resources**—pair with discovery on sites, handoffs, and SLAs.
:::

::: accordion Fiber vs Starlink Battlecard
Fiber vs LEO positioning points live in competitive collateral on **Sales Resources**—confirm Starlink claims against the current approved card.
:::
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
GPC's Security & SD-WAN portfolio puts **policy on the pipe**—managed protection and intelligent routing at every edge. **Managed Firewall** (FortiGate-based, SOC-monitored) and **Managed Network Security (MNS)** stop threats at the edge and in email, with SIEM and assessment capabilities for regulated environments. **DDoS Protection** keeps critical services online—proactive for 24/7 mitigation, on-demand for cost-conscious accounts that understand the window. **SD-WAN (VeloCloud)** transforms multi-site WAN by routing traffic intelligently across any access type, with cloud breakout, QoS for VoIP, and a single management pane—all managed by GPC with local support and a 24/7 NOC.
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
GPC's fully managed SD-WAN eliminates upfront CapEx and frees your team from network management. A single monthly charge covers install, management, and 24/7 NOC monitoring. Gartner has ranked VMware VeloCloud at the top of the leader quadrant for SD-WAN.
:::

::: flip ["Our current solution works fine."]
Ask: do you have visibility into application performance across all sites? SD-WAN Orchestrator provides real-time views into access link performance and lets you prioritize critical apps—even over a single link.
:::

::: flip ["SD-WAN is too expensive."]
SD-WAN pricing sits between SIA and DIA—often less than the MPLS it replaces. The ROI comes from eliminating MPLS costs, reducing truck rolls, and improving uptime for revenue-generating applications.
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

**SD-WAN pricing reference (internal):**
- 50×50 Mbps: SD-WAN ~$147/mo; SIA CLEC ~$110; DIA ~$354
- 100×100 Mbps: SD-WAN ~$199/mo; SIA CLEC ~$176; DIA ~$547
- 500×500 Mbps: SD-WAN ~$481/mo; SIA CLEC ~$278; DIA ~$860
- 1000×1000 Mbps: SD-WAN ~$699/mo; SIA CLEC ~$365; DIA ~$1,060
- Internet bandwidth is **not included** in SD-WAN pricing—purchased separately

**Managed Firewall:** FortiGate-based edge + SOC monitoring. Don't quote throughput/compliance as fixed guarantees—SE + approved sheets required.

**MNS (Managed Network Security):** umbrella service = managed firewall + management of customer gear + SIEM + assessments + email security. Match SKU to buyer's actual need.

**DDoS:**
- Proactive: 24×7 monitoring + automated mitigation
- On-demand: mitigation **weekdays 8–17 only**—state explicitly; never equate with proactive timing
- BGP/ASN DDoS designs → SE/security early

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
id: "product-cloud-wifi-and-backup"
title: "Cloud, Wi-Fi & Backup"
summary: "Cloud on-ramps. Managed Wi-Fi. 5G continuity."
sensitivity: "public"
reference_files:
  - label: "Sales Resources (cloud, Wi‑Fi, backup collateral)"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx"
discovery_questions:
  - "Which cloud platforms or SaaS apps are most critical to your business—AWS, Azure, O365, Salesforce? How do you reach them today, and where do you feel latency or reliability pain?"
  - "When your primary Internet circuit went down last—how long were you out, what broke first, and what did that cost the business?"
  - "Who manages your Wi-Fi today? Do you have separate guest and corporate networks, and are you dealing with any compliance requirements like PCI or HIPAA?"
  - "How many sites need coverage, and do any have outdoor or high-density requirements that a standard AP count might undersize?"
  - "Do you have applications—VoIP, payment terminals, patient records—that must stay up even during a fiber outage?"
five_minute_summary: |
  - **Cloud Connect:** Combine with Managed Ethernet to provide a private, predictable path to cloud providers and SaaS. Always align with an SE on cross-connects and diversity.
  - **Managed Wi-Fi:** We manage the entire lifecycle including security (firewall, IDS/IPS) and network separation. Never quote access point counts before a proper site survey.
  - **5G Backup:** Provides automatic failover and fail-back with 24/7 NOC monitoring. Be transparent that speeds and deprioritization will vary by location.
  - **Resources:** Rely on official datasheets and on-network training shortcuts for detailed proof points.

knowledge_checks:
  - question: "What best describes Cloud Connect's primary value story in discovery?"
    options:
      - "A best-effort public Internet link sized for peak cloud usage"
      - "A direct, private connection into GPC's cloud ecosystem with Managed Ethernet as the on-ramp"
      - "Customer-owned long-haul fiber to every cloud region"
    correct_index: 1
    explanation: "Private path via Cloud Connect; Ethernet on-ramp—not Internet-only."

  - question: "Before quoting access point counts on Wi‑Fi, what should you do?"
    options:
      - "Promise a standard density from the first call to move the deal"
      - "Defer AP counts and density assumptions to engineering after site survey"
      - "Match the competitor's AP count from their proposal"
    correct_index: 1
    explanation: "Survey + engineering own density—don't promise counts on call one."

  - question: "For 5G Wireless Internet Backup, what is a fair caution to set with the customer?"
    options:
      - "Speeds are identical at every site regardless of RF environment"
      - "Performance can vary by location; tiered speeds and deprioritization may apply per collateral"
      - "Battery runtime is unlimited on all SKUs"
    correct_index: 1
    explanation: "5G varies; tiers/deprioritization per collateral."

  - question: "On Cloud Connect scope, what should you align with a solutions engineer before over-promising?"
    options:
      - "Cross-connect details, diversity, and security expectations"
      - "Only the customer's logo colors for slide decks"
      - "Retail gift-card budgets unrelated to transport"
    correct_index: 0
    explanation: "SE aligns XC, diversity, security—not every site needs full exchange day one."

  - question: "In Managed Wi‑Fi discovery, which separation should you clarify early?"
    options:
      - "Guest vs corporate SSIDs and traffic separation"
      - "Only consumer smart-TV brands at each site"
      - "Whether employees prefer light or dark UI themes"
    correct_index: 0
    explanation: "Guest vs corporate + compliance + app mix."

  - question: "What security stack elements does collateral associate with Managed Wi‑Fi positioning?"
    options:
      - "Next-gen firewall, routing, and IDS/IPS alongside multiple SSIDs"
      - "Open guest networks with no segmentation"
      - "DNS over HTTPS as the only control plane"
    correct_index: 0
    explanation: "Firewall, routing, IDS/IPS, multiple SSIDs—managed stack."

  - question: "For 5G Wireless Internet Backup, which operational proof point is accurate?"
    options:
      - "Automatic failover to wireless and automatic fail-back when primary returns"
      - "Manual SIM swaps required for every outage"
      - "No monitoring; customer self-diagnoses all events"
    correct_index: 0
    explanation: "Auto failover/fail-back + NOC."

  - question: "What optional continuity feature is cited for 5G backup CPE deployments?"
    options:
      - "Optional battery runtime (collateral cites up to ~8 hours)"
      - "Unlimited runtime on every router without checking SKU"
      - "Solar panels bundled at no cost on all quotes"
    correct_index: 0
    explanation: "Optional battery ~8h—confirm SKU with quoting."

  - question: "Where should sellers look for formal Cloud, Wi‑Fi, and Backup product training shortcuts?"
    options:
      - "Sales Resources and the enablement-maintained training links (SharePoint / approved shortcuts)"
      - "Random search-engine results updated hourly"
      - "Only unofficial third-party forums"
    correct_index: 0
    explanation: "Start with **Sales Resources** and the links your enablement team publishes—not open web search."

  - question: "Which cloud/SaaS ecosystem framing matches the Cloud section's positioning?"
    options:
      - "Name major providers and multi-region redundancy mindset from a single interconnection strategy"
      - "Assume every workload must use consumer broadband only"
      - "Discourage any private paths to cloud regions"
    correct_index: 0
    explanation: "Major clouds + multi-region mindset; predictable vs Internet-only."

scenarios:
  - title: "Retail chain wants cloud ERP and guest Wi-Fi"
    situation: |
      Multi-site retailer; cloud ERP + guest Wi‑Fi; wants **12 APs/store** budgeted on first call.
    choices:
      - label: "Quote twelve APs per store to match their budget request."
        feedback: "Defer counts—survey + engineering."

      - label: "Explain AP counts follow survey/engineering; discovery on coverage, guest vs corporate, compliance."
        feedback: "Correct."

      - label: "Decline Wi-Fi and only sell DIA."
        feedback: "Position Wi‑Fi with engineering handoff."

  - title: "Branch needs uptime when fiber fails"
    situation: |
      Fiber outage last month; wants **full speed 5G forever** with no caveats for the board.
    choices:
      - label: "Agree to unlimited headline speed at every site with no variability."
        feedback: "Set honest RF/speed/tier expectations."

      - label: "Position failover, NOC, prioritization; explain location-dependent speeds; confirm battery/data with quoting."
        feedback: "Correct."

      - label: "Recommend only redundant fiber and skip wireless backup."
        feedback: "Backup is for fiber failure—pair honesty on 5G."

roleplay:
  persona: "IT Manager at a healthcare clinic network"
  scenario: "Had a fiber outage last month that took down patient scheduling and e-prescribing for four hours. Wants a solution but is skeptical of wireless backup speeds and worried about HIPAA data on a cellular network."
  goal: "Position 5G backup as a managed, automatic failover solution with app prioritization and NOC monitoring—set honest speed/tier expectations while tying reliability to patient care continuity."
---

## At a glance

- **Cloud Connect:** Private, predictable paths to **AWS, Azure, Google**, and major SaaS—reduces “Internet-only” jitter for workloads that matter; qualify which clouds and apps drive the pain.
- **Managed Wi‑Fi:** Full lifecycle (**design → install → maintain**), **guest vs corporate** segmentation, and integrated **firewall/IDS/IPS**—AP counts follow **survey/engineering**, not a guess on call one.
- **5G Wireless Backup:** **Automatic failover / fail-back**, **24/7 NOC**, optional **battery**—position as **continuity** on GPC fiber; set honest expectations on **RF, speed tiers, and HIPAA** vs primary access.

---

## Pitch

::: elevator [Elevator Pitch]
Three products that extend the value of GPC fiber access: **Cloud Connect** gives SaaS-heavy and cloud-first businesses a private, predictable path to AWS, Azure, Google, and other platforms—no more Internet-only jitter for critical workloads. **Managed Wi-Fi** covers the last ten feet with a fully managed lifecycle (design, install, maintain), guest/corporate segmentation, and integrated firewall/IDS/IPS. **5G Wireless Backup** keeps the business running during fiber outages with automatic failover, automatic fail-back, 24/7 NOC monitoring, and optional battery protection—no manual intervention required.
:::

---

## Discovery Run

<div class="rounded-2xl border border-emerald-200/80 overflow-hidden bg-slate-50 shadow-sm">
  <iframe
    src="games/portfolio-level-1/index.html?embed=1&module=product-cloud-wifi-and-backup"
    title="Discovery Run — Level 1"
    loading="lazy"
    sandbox="allow-scripts allow-same-origin"
    style="width: 100%; border: 0; display: block; height: 40rem; max-height: min(88vh, 44rem); background: #f1f5f9;"
  ></iframe>
</div>

---

## Objection Handling

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

::: flip ["5G is fast enough to be my primary Internet."]
Position honestly: wireless is best-effort, not symmetrical, and speeds vary by site. For primary access, fiber is the right answer; 5G backup is the continuity layer.
:::

::: flip ["Just tell me how many APs we need."]
A site survey is required before any AP count—density depends on floor plan, device count, use case, and compliance. Promising counts on call one leads to under-engineered installs.
:::

::: flip ["We already connect to AWS directly."]
Ask how—public Internet or a private path? Cloud Connect's private Ethernet on-ramp eliminates Internet jitter for latency-sensitive workloads and adds multi-region resilience.
:::

::: flip ["We don't want cellular data leaving our building for compliance reasons."]
The Kajeet Sentinel portal filters non-business traffic during failover; GPC NOC monitors and manages the connection. Align specifics with SE and compliance team.
:::

::: flip ["5G backup is too expensive for a circuit we almost never use."]
Frame as insurance: the 5G Backup SKU starts at $68/month—compare to the cost of one four-hour outage for payment processing, patient care, or customer service.
:::

::: flip ["We only need guest WiFi—corporate can stay on what we have."]
Split networks are common; still qualify density, security policy, and who owns trouble tickets. Managed WiFi can isolate guest SSIDs while giving you one throat to choke for RF and firmware.
:::

</div>

---

## Technical Deep Dive [deep]

**Cloud Connect specs:**
- Private path to AWS, Azure, Google, and other clouds/SaaS via GPC's cloud ecosystem
- Managed Ethernet on-ramp; up to 10 Gbps cited in collateral
- Metro access: Omaha, Chicago, Denver
- SE alignment required for cross-connect details, diversity, and security scope

**5G Backup pricing & tiers (from product launch collateral):**
- LTE Wireless Internet Backup: $45 MRC, 1 GB included, $9/GB overage, 2-year minimum term
- 5G Wireless Internet Backup: $68 MRC, unlimited data, carrier deprioritization applies
- Wireless Internet Broadband (full-time): $175 MRC, unlimited, best-effort
- Optional battery backup: up to 8 hours runtime during power failure (NRC TBD)
- After failover data thresholds: >12 GB/day → up to 50 Mbps; >20 GB/day → up to 25 Mbps; >30 GB/day → up to 3 Mbps
- Failover time: approximately one minute; automatic fail-back when primary restores
- Hardware: Cradlepoint X20 5G router; dual SIMs (Verizon + AT&T); best signal auto-selected at install
- No static IP during wireless failover; static IPs work on landline only

**Managed Wi-Fi:** engineering-sized density post-survey; next-gen firewall, IDS/IPS, multiple SSIDs; analytics/branded portal available.

**Business rules for 5G backup:**
- Must be sold with new or existing SIA, DIA, or SD-WAN customers
- Do not sell outside GPC territory (exception: multi-location customers with off-net sites within driving distance—approval required)
- No SLA guarantees on wireless—all best-effort

::: accordion Cloud Connect Battle Card
Cloud Connect proof points and diagrams are maintained in **Sales Resources**—grab the latest battle card before customer calls.
:::

::: accordion Managed Wi-Fi Collateral
Managed Wi‑Fi datasheets and survey talking points live under **Sales Resources**; engineering still sizes every design.
:::

::: accordion 5G Wireless Internet Backup
Wireless backup specs, failover rules, and territory notes are in **Sales Resources**—align with quoting before you promise throughput.
:::
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

## Discovery game

<div class="rounded-2xl border border-emerald-200/80 overflow-hidden bg-slate-50 shadow-sm">
  <iframe
    src="games/galactica-1/index.html?embed=1&module=product-itv"
    title="Discovery Galaxy"
    loading="lazy"
    sandbox="allow-scripts allow-same-origin"
    style="width: 100%; border: 0; display: block; height: 40rem; max-height: min(88vh, 44rem); background: #f1f5f9;"
  ></iframe>
</div>

---

## Why GPC iTV

Keep customers engaged with **GPC iTV**—a **streaming TV** solution for business. Standard positioning describes it as the **latest** streaming TV offer from GPC: **popular channels** and **modern features** (including **Cloud DVR** and **Replay TV**) over the customer’s **existing GPC Internet** connection. **Authoritative PDFs, rate cards, and updates live in SharePoint**—use the module reference link, not static copies here.

Position it for **mom-and-pop through larger sites**: the story is **customizable** by industry and footprint, but your job is still to **qualify** screens, wiring, content needs, and **access**.

## Headline benefits

| Theme | How to talk about it |
|--------|----------------------|
| **Replay TV** | Catch-up style viewing for busy teams and public areas—tie to “don’t miss the game” or “replay yesterday’s segment.” |
| **Cloud DVR** | Record and store in the cloud where the product supports it—avoid over-specific storage numbers unless your current rate card says so. |
| **HD channels** | Quality on modern displays; pair with **access** bandwidth so video doesn’t stutter. |
| **Popular sports** | Strong for **hospitality, retail, and break rooms**—still confirm **local lineup** before promising a given RSN. |
| **Local channels** | Collateral calls out **local news and weather**—good for community-facing businesses. |
| **Equipment savings** | “**Save money on monthly equipment and DVR rentals**” where the *streaming-first* model applies—**footnote:** some sites may still need **set-top boxes** at a **low monthly rate**. |
| **Single bill** | **One bill for multiple services** when sold in a bundled commercial structure—confirm with **ordering/billing** so you quote what finance will invoice. |

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
id: "product-uc-voice-and-collaboration"
title: "UC, Voice & Collaboration"
summary: "Cloud voice. Teams integration. Contact center scaling."
sensitivity: "public"
reference_files:
  - label: "Sales Resources (UC, voice, contact center)"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx"
discovery_questions:
  - "What phone system are you running today—on-prem PBX, hosted VoIP, or legacy key system? When did it last get a major upgrade, and is it still under support?"
  - "Do your employees use Microsoft Teams for chat and meetings? Are they expecting to make and receive external calls from within Teams?"
  - "How do people communicate when they're out of the office—cell phones, call forwarding, or a mobile app? Is that working well?"
  - "Do you have a contact center or customer service queue? How many agents, what channels (phone, email, chat, SMS), and do you need supervisor monitoring or call recording?"
  - "Are there compliance requirements for call recording or archiving—legal hold, financial services, healthcare? How long does data need to be retained?"
video_carousel:
  - title: "Premises to UC"
    src: "assets/UC/prem-to-uc.mp4"
    poster: "assets/UC/prem-to-uc.png"
  - title: "Microsoft Teams"
    src: "assets/UC/teams.mp4"
    poster: "assets/UC/teams.png"
  - title: "Desktop app"
    src: "assets/UC/desktop-app.mp4"
    poster: "assets/UC/desktop-app.png"
  - title: "Mobile app"
    src: "assets/UC/mobile-app.mp4"
    poster: "assets/UC/mobile-app.png"
  - title: "Work better wherever"
    src: "assets/UC/work-better-wherever.mp4"
    poster: "assets/UC/work-better-wherever.png"
five_minute_summary: |
  - **Start with the clips:** Five short videos in this module (migration, Teams, desktop and mobile apps, hybrid work) are the fastest way to see what a customer will experience—watch before you lean on the text below.
  - **What you’re positioning:** A modern cloud stack for business voice, SMS, meetings, messaging, and files—**Ascend** / GPC UC—not a feature dump on day one. Tier names, storage, and add-ons come from **current matrices**, not memory.
  - **Teams:** Real deals split into two different conversations—**Ascend with Teams** (Microsoft licensing + our PBX) vs **embedded UC-in-Teams** FAQ/deck language. If the room argues licensing, **pause** and bring **SE/architects**; don’t improvise.
  - **Where specialists earn their keep:** AI productivity lines, CRM/analytics (**DataHub** / **Extend**), and **contact center** (concurrent seats, channels, burst). Your job is to **qualify** and pull in the right people— not to quote SKUs or APIs from recall.
  - **Trust headlines:** **99.999%** uptime story and **Triple Guard Security™** are the digestible proof points; **archiving and retention** are never “free forever”—confirm with the account team before you mention years.
  - **Go deeper when you’re prepping:** Partner collateral themes (BYOC / IPN / Embedded narratives)—**100+** voice features, web fax, Mix & Match matrices, mobile SMS limits, MSP stats, device grids, Embedded vs **Direct Routing**, omnichannel CC—live in **Technical Deep Dive** below. Use that section for homework, not as a script to read to a prospect.

knowledge_checks:
  - question: "For **Ascend with Teams** (Teams as hub + GPC cloud PBX), what must the customer understand about Microsoft licensing?"
    options:
      - "GPC UC includes all Microsoft Teams and Phone System entitlements in one SKU"
      - "Microsoft Teams licenses and Phone System are purchased separately from GPC's cloud PBX SKU—clarify the joint picture early"
      - "Teams Phone is never used with GPC; only SIP trunks apply"
    correct_index: 1
    explanation: "Typical attach motion: Teams + Phone System separate from GPC UC SKU—see embedded FAQ for alternate positioning."

  - question: "What is the baseline call/chat archiving position you should state before quoting years of retention?"
    options:
      - "Free unlimited retention for all tiers on day one"
      - "Free **30-day** rolling baseline in partner collateral; **1–10 year** paid tiers appear in places—always **confirm tier/matrix** with the account team before quoting"
      - "Archiving is not offered on the UC platform"
    correct_index: 1
    explanation: "30-day baseline; paid longer retention—confirm matrix; partner PDFs cite multi-year tiers—never assume."

  - question: "How should Contact Center 'bursting' or elastic concurrency be handled in customer conversations?"
    options:
      - "Quote burst seats from memory using a simple spreadsheet"
      - "Treat bursting/elastic rules as internal sizing aligned with AE/pricing—not napkin math"
      - "Promise unlimited concurrent agents for a flat monthly fee"
    correct_index: 1
    explanation: "Burst with AE/pricing."

  - question: "How are CC Pro and CC Elite seats generally licensed in positioning?"
    options:
      - "Concurrent seats—confirm matrices and add-ons before customer commitments"
      - "Named user seats only with no supervisor tools"
      - "Unlimited agents on a single mailbox"
    correct_index: 0
    explanation: "Concurrent—confirm matrix before commit."

  - question: "What does **Triple Guard Security™** frame on the UC platform?"
    options:
      - "Trust themes: datacenters, certified security team, encryption, password management, 2FA"
      - "Guaranteed on-site guard patrols at every customer site"
      - "Removal of all encryption to speed migrations"
    correct_index: 0
    explanation: "DCs, cert team, encryption, passwords, 2FA."

  - question: "For non-UC voice, what does SIP trunking primarily provide?"
    options:
      - "VoIP handoff between customer PBX and GPC toward the PSTN with managed eSBC options"
      - "Analog-only connectivity that cannot scale"
      - "Cellular voice with no PBX involvement"
    correct_index: 0
    explanation: "SIP + eSBC toward PSTN."

  - question: "When should you involve UC/Teams architects per the Teams attach section?"
    options:
      - "For coexistence, porting, and Phone System prerequisites across departments"
      - "Only after the customer decommissions Microsoft 365 entirely"
      - "Never—sales alone owns all dial-plan design"
    correct_index: 0
    explanation: "Coexistence, porting, Phone System—plus CSP if Teams bought elsewhere."

  - question: "Where should internal rate tables and pricing books be used?"
    options:
      - "Internal sizing with AE/pricing alignment—never email ad-hoc rates from memory"
      - "Paste into customer emails to win speed"
      - "Post publicly on social media for transparency"
    correct_index: 0
    explanation: "Internal + AE—never email from memory."

  - question: "Unite Enterprise vs lower UC tiers differ in part by what file-storage headline?"
    options:
      - "Brochure cites up to **200 GB** per user on Unite Enterprise vs lower tiers (e.g., 50 GB / 5 GB)"
      - "All tiers include identical unlimited storage with no differences"
      - "File storage is not part of UC at any tier"
    correct_index: 0
    explanation: "Enterprise vs lower storage tiers per brochure."

  - question: "What uptime story does the UC section cite as a competitive talking point?"
    options:
      - "**99.999%** uptime—translate to minutes/year in customer language"
      - "50% uptime is the published SLA"
      - "Uptime is not discussed in collateral"
    correct_index: 0
    explanation: "99.999%—minutes/year in plain language."

  - question: "When a customer mixes up **embedded UC-in-Teams** with **Microsoft Direct Routing**, what is the safe motion?"
    options:
      - "Quote licensing differences from memory so the deal moves fast"
      - "Contrast at a high level, then bring SE/architects for anything contractual or regulated—do not invent PSTN or Microsoft entitlements from memory"
      - "Tell them the terms are interchangeable"
    correct_index: 1
    explanation: "Embedded ≠ Direct Routing; SE validates entitlements and design."

  - question: "RevOps wants call and SMS activity reflected in CRM and leadership dashboards. What do you do first?"
    options:
      - "Promise a fixed integration pack and API scope on call one"
      - "Discovery: who owns CRM, reporting, and compliance; loop specialists for Extend/DataHub-style analytics before commitments"
      - "Say UC does not connect to CRMs"
    correct_index: 1
    explanation: "Scope integrations with specialists—collateral teases CRM/analytics threads."

  - question: "Before promising that **Teams mobile** matches **desktop** for business SMS and voice, you should:"
    options:
      - "Assume parity and close—buyers hate uncertainty"
      - "Follow partner FAQ: **SMS in the Teams mobile app is not available yet**; calls with UC app installed differ from SMS workflow—confirm enablement, use Ascend mobile for SMS where approved"
      - "State that SMS is never part of any Teams path"
    correct_index: 1
    explanation: "FAQ-specific mobile limits—don't improvise parity."

  - question: "Partner **FAQ** contrasts **Embedded UC-in-Teams** with **Direct Routing**. Which pairing is accurate for training?"
    options:
      - "Embedded: UC tab + partner positioning often **without a Microsoft Teams Phone license**; Direct Routing: Microsoft’s native PSTN/dialer path—escalate for design and entitlements"
      - "Embedded and Direct Routing are identical; use either term interchangeably"
      - "Direct Routing never uses Microsoft infrastructure"
    correct_index: 0
    explanation: "FAQ/deck language—SE validates customer-specific design."

  - question: "**Mix & Match** matrices in partner collateral apply to which combinations?"
    options:
      - "Standard UC tiers and **Ascend for Teams** rows each have their own matrix—features (AI, archiving, video, hunt groups) differ by row—confirm before you quote"
      - "One global matrix covers every product with identical rows"
      - "Mix & Match refers only to desk phone colors"
    correct_index: 0
    explanation: "Separate matrices—cells differ; don’t quote from memory."

scenarios:
  - title: "Customer wants Teams Phone and GPC voice this quarter"
    situation: |
      Teams for chat/meetings; wants dialer voice next quarter; assumes one invoice covers Microsoft + GPC; **Phone System** not budgeted.
    choices:
      - label: "Confirm that a single GPC SKU replaces all Microsoft licensing."
        feedback: "Teams + Phone System separate—clarify joint picture."

      - label: "Explain Teams + Phone System prerequisites; separate Microsoft purchases; architects for coexistence/porting."
        feedback: "Correct."

      - label: "Tell them to abandon Teams and use only the UC softphone."
        feedback: "Teams hub + GPC PBX is the motion."

  - title: "Contact Center seat count on a first call"
    situation: |
      Wants **CC Elite** + digital channels; firm concurrent count + burst **today**; email pricing now.
    choices:
      - label: "Email internal rate tables from the pricing folder to win speed."
        feedback: "Internal books—not external email from memory."

      - label: "Stay in discovery; hand concurrent licensing + bursting to specialists and AE/pricing."
        feedback: "Correct."

      - label: "Quote CC Pro and Elite interchangeably at the same price."
        feedback: "Confirm matrix—Elite extends capability."

  - title: "AI recaps plus CRM-attributed reporting—firm answers this week"
    situation: |
      CX and RevOps want **AI** call/meeting summaries for supervisors and **every** customer touch logged against Salesforce opportunities. They want a **written** SKU list, API surface, and timeline **before** they bring procurement.
    choices:
      - label: "Email SKU and integration detail from memory to keep momentum."
        feedback: "Confirm AI tier/SKU with AE/pricing; CRM and Extend-style scope needs SE/solutions—not memory."

      - label: "Deepen discovery on owners, compliance, and reporting; align AI and analytics threads with AE, pricing, and specialists."
        feedback: "Correct."

      - label: "Say AI and CRM are out of scope for UC so the conversation stays simple."
        feedback: "Partner positioning includes those threads—qualify and escalate, don't deny."

  - title: "Embedded FAQ says no Teams Phone license—IT says the opposite"
    situation: |
      Champion read partner **FAQ** (**Embedded** vs **Direct Routing**) and wants the **no Microsoft Teams Phone license** story in writing. IT insists every Teams PSTN design requires **Phone System** and accuses sales of conflicting messaging.
    choices:
      - label: "Side with the champion and guarantee no Microsoft licensing in email."
        feedback: "Licensing is design-specific—SE/architects reconcile FAQ positioning with Microsoft prerequisites; don’t guarantee in email."

      - label: "Schedule SE + architects; map **Embedded** vs **attach/DR** paths to **their** tenant and procurement facts."
        feedback: "Correct."

      - label: "Tell them FAQ is wrong and only your first call script matters."
        feedback: "FAQ is enablement input—validate with SE, don’t dismiss."

roleplay:
  persona: "Operations Manager at a 75-person professional services firm"
  scenario: "Stuck on an aging on-prem PBX that's out of warranty. The IT team uses Teams for chat and meetings but nobody can make external calls from it. Assumes replacing the PBX means buying new desk phones and a server."
  goal: "Position GPC's cloud UC as the modern replacement—no on-prem server, enterprise-grade features from Teams or the native softphone, and a clear explanation of **Ascend with Teams** licensing vs when **embedded FAQ** positioning (no Teams Phone license vs Direct Routing) might apply—SE validates."
---

## At a glance

- **Platform:** One cloud stack—voice, SMS, meetings, omnichannel CC, file sync—with **99.999%** uptime and **Triple Guard Security™** as headline trust; when **RevOps/CX** want CRM or analytics depth, **qualify specialists**—don’t improvise DataHub/Extend scope.
- **Microsoft-first:** Separate **Ascend with Teams** (your PBX + Microsoft licensing picture) from **embedded UC-in-Teams** FAQ lines (**no Teams Phone license** vs **Direct Routing**)—**SE validates**; economics from current **Mix & Match** / **Ascend for Teams** matrices, not memory.
- **Contact center:** **Concurrent** licensing on Pro/Elite and **burst** capacity—**hand concurrent + bursting to AE/pricing**, not napkin math on the call.

---

## Pitch

::: elevator [Elevator Pitch]
Replace aging PBX with **one cloud stack**: voice, SMS, meetings, omnichannel CC, file sync—**99.999%** uptime and **Triple Guard Security™** as headline trust. When **RevOps/CX** care about CRM or analytics, qualify and bring specialists—don’t wing DataHub/Extend scope.

**Microsoft-first accounts:** clarify **Ascend with Teams** (your PBX + Microsoft licensing picture) vs **embedded UC-in-Teams** FAQ language (**no Teams Phone license** vs **Direct Routing**)—**SE validates**, don’t freestyle. Economics and SKUs come from current **Mix & Match** / **Ascend for Teams** matrices, not memory.
:::

::: accordion UC Platform Brochure
Pull the current Ascend / UC brochure PDF from **Sales Resources** (Module Reference Files)—never recycle an old revision from email.
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

## Extended discovery prompts

Use these **after** the core five questions (covered in the Discovery Break game above) when the deal needs CRM, analytics, Teams UX, or procurement depth:

1. **Do you need AI call/meeting summaries or supervisor-assist style analytics—who will own adoption and compliance?**
2. **Where should call and SMS activity land for reporting—CRM, data warehouse, or spreadsheets?** (Uncovers DataHub/analytics and integration conversations.)
3. **For Teams-heavy users: will they primarily use the Teams desktop app, mobile, or both for business calling and SMS?** (Surfaces embedded-Teams vs mobile gaps.)
4. **Do you need company-owned SMS on business numbers vs personal SMS—who administers policy and compliance?** (Aligns with company vs personal SMS admin themes.)
5. **Are you evaluating Mix & Match tiers (Express through Enterprise) or Ascend for Teams rows—who owns the matrix review with procurement?**
6. **Is this account a renewal or competitive displacement—timing for migration and professional services?** (MSP/VAR “renewal moment” storyline—internal framing.)

---

## Objection Handling

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

::: flip ["We already use Teams—we don't need a separate phone system."]
**Two motions:** (1) **Ascend with Teams:** external PSTN calling typically needs **Phone System** + connectivity—GPC PBX delivers enterprise voice, SMS, queues, CC. (2) **Embedded UC-in-Teams** (FAQ/deck): voice/SMS/CC **inside** Teams is a different positioning—**no Teams Phone license** in that narrative vs **Direct Routing**—don’t blend talk tracks; bring architects.
:::

::: flip ["Cloud is less secure than our on-prem system."]
Triple Guard Security™: enterprise-grade data centers, certified security team, encryption, password management, and 2FA. Intermedia has been recognized 7 times by J.D. Power for technical support excellence. On-prem systems receive no automatic security updates.
:::

::: flip ["Switching will disrupt our business—or our people won't adopt."]
OTT runs over your existing data network—no new wiring or PBX server install; number porting is staged with architects. For UX, Ascend apps mirror familiar patterns; Teams-heavy users often place calls from the Teams dialer—pilot groups and training plans reduce churn.
:::

::: flip ["We need to keep our current PBX for the alarm and fax lines."]
SIP trunking and POTS analog lines can coexist. Specialty lines (alarms, fax, elevator) remain on legacy paths while the main voice system migrates to cloud UC.
:::

::: flip ["We already pay for Microsoft Teams Phone—why add GPC?"]
Clarify **what** they bought (Teams Phone vs dial tone + routing) and **what outcomes** they still lack—SMS, CC, archiving, or PSTN design. **Embedded UC** positioning is different from **Direct Routing**; partner collateral contrasts them—bring architects, don't wing it.
:::

::: flip ["We only care about the Teams mobile app."]
Qualify **voice vs SMS**. Partner FAQ: **SMS in the Teams mobile app is not available yet**; business **calls** may work with the **UC app** installed—**Ascend mobile** often carries SMS; confirm enablement.
:::

</div>

---

## Technical Deep Dive [deep]

*The Coffee Summary above stays light on purpose. This section is for **prep**—SE alignment, objections, and matrices—not a script to read to a buyer.*

**Partner theme alignment (Intermedia BYOC / IPN / Embedded extracts)**

- **Module videos:** Same five clips as the carousel—migration, Teams, desktop/mobile apps, hybrid work; good prep before you absorb the bullets below.
- **Unified “Ascend” stack:** One platform narrative for **100+** business voice features, SMS/company messaging, chat, **HD meetings**, **web fax**, and file sync/share—desktop, mobile, browser; tier storage differs; **30-day** archiving baseline with **paid longer retention** (partner collateral cites **up to 10 years** in places—**never** quote years without the account team).
- **AI & productivity:** **AI Call Recap**, **AI Meeting Recap**, **AI Assistant**, supervisor/agent-assist; roadmap mentions (e.g. **AI Receptionist**, **AI Topics/Trends** “coming soon”)—**confirm tier/SKU** on current matrices.
- **DataHub + integrations:** Analytics/reporting, **Extend**/API, CRM **screen pops**, and tying comms data to AI and business apps—**SE/solutions** for depth; **CRM lists** in partner decks include Salesforce, Zendesk, Dynamics, HubSpot, NetSuite, etc.
- **Security & uptime:** **99.999% SLA**, **Triple Guard Security™**, archiving/compliance framing—align with GPC-approved wording externally.
- **Microsoft Teams—two talk tracks:** (1) **Ascend with Teams:** Teams as hub + GPC cloud PBX; **Teams + Phone System** are **not** part of the GPC UC SKU—**joint licensing picture early**. (2) **Embedded UC-in-Teams** (partner FAQ/deck): positions voice/SMS/CC **inside Teams**, often **no Microsoft Teams Phone license** vs **Direct Routing** (Microsoft native dialer/PSTN path)—**do not** freestyle; **SE + FAQ**.
- **Embedded UX:** Collaboration stays in Teams; calling/SMS often through **UC tab** on **desktop** (pin app, **plugin** per install guides). **Continuity:** UC web/mobile if Teams has connectivity issues—**approved messaging only**.
- **Embedded mobile (FAQ):** Business **calls** can work from Teams mobile **with the UC app installed**; **SMS in the Teams mobile app is not available yet** (voice-oriented mobile; SMS planned)—use **Ascend mobile** for SMS where that’s the approved path; **confirm** current FAQ.
- **Contact Center:** **Omnichannel** CX (voice, SMS, chat, email, **WhatsApp** where in matrix), AI for routing/sentiment/summaries, CRM/ERP integrations; **CC Pro/Elite concurrent** licensing—AE/pricing for **burst** and digital add-ons.
- **Packaging & devices:** **Mix & Match** tier matrices (**Express / Essentials / Pro / Enterprise**) and separate **Ascend for Teams** rows—feature cells differ (AI, hunt groups, archiving, video limits); **phones & devices** SKUs (desk, DECT, conference, ATA, headsets, cameras) sit on comparison matrices—don’t quote from memory.
- **MSP/VAR angle (partner decks):** Cloud voice growth, **low Teams Phone adoption** vs Teams users without integrated business voice/SMS, **renewals** as migration moments, **single provider** for Voice/CC/archiving/Teams—**internal** narrative; verify stats with source before customer use.
- **Traditional voice:** SIP/PRI/POTS discovery before quoting.

*Subsections below overlap these themes but add **datasheet row** and **implementation** emphasis (pin app, plugin, hunt groups, CC + Teams plugin, PDF caveats). Skim the checklist above first; drill into subsections when you need a specific row or escalation hook.*

**UC plan tiers (Ascend/Intermedia platform):**
- **UC Resource Line:** breakroom/lobby; 1 endpoint, no apps
- **UC Express:** 1 phone + apps; voicemail, auto attendant, unlimited LD, business texting
- **UC Collab Essentials:** meetings, call queue, mobility, desktop client, unlimited LD, voicemail, auto attendant, call recording
- **UC Collab Pro:** full Essentials + contact center lite, AI meeting notes, unlimited recordings, end-to-end encryption, 200 GB file storage/user
- **Unite Enterprise:** up to 200 GB/user file storage vs 50 GB (Essentials) vs 5 GB (Express)

**Teams integration options (maps to `UCaaS_BYOC` / `UCaaS_IPN` / Embedded doc):**
- **Ascend with Teams:** Teams for chat/meetings/files; Ascend desktop + mobile for phone workloads. SMS, Contact Center, CRM integrations—**confirm** “included” language on current matrix. SSO with M365 credentials.
- **Ascend for Teams / embedded story:** Enterprise PBX features inside the Teams dialer; install: **pin app**, **desktop plugin** for telephony—follow the **Embedded** install guide, not hallway lore.
- **Teams + Phone System:** Purchased separately from Microsoft for many **attach** designs—not bundled into GPC UC SKU. **Contrast:** partner **FAQ** positions **Embedded** as **no Microsoft Teams Phone license** vs **Direct Routing** (Microsoft native PSTN/dialer)—**SE** owns which applies.
- **UC tab / UX:** Decks describe collaboration in Teams while voice/SMS run through the **UC** experience—demo flow in customer **PPTX** extracts; **PDFs** for exact Q&A.
- **Presence sync / hunt groups / archiving backup** appear in integration blocks—verify row-by-row on datasheet.

**AI & roadmap:** **AI Call Recap**, **AI Meeting Recap**, **AI Assistant**; CC-side AI (routing, sentiment, summaries); roadmap items (**AI Receptionist**, **Topics/Trends** “coming soon” in extracts)—**never** quote SKU from memory.

**DataHub + CRM + Extend:** Analytics/reporting, APIs, screen pops, comms data feeding AI and business apps—**SE** for HIPAA/FINRA-style archiving flyers and integration depth.

**Embedded mobile vs desktop:** FAQ: **SMS in Teams mobile not available yet**; calls with UC app; **sync** themes between Ascend mobile and Teams mobile for calling—confirm current FAQ before customer promises.

**Continuity / MSP narrative:** Partner pitch: redundancy if Teams unavailable (**UC web/mobile**); **single provider** story for Voice + CC + Archiving + Teams—**approved** customer wording only; never invent outages.

**Mix & Match packaging:** Separate matrices for **standard UC** (Express / Essentials / Pro / Enterprise) and **Ascend for Teams**—rows differ (AI, hunt groups, archiving, video caps). **Devices:** phone/DECT/conference/ATA/headset/camera comparison PDFs—endpoint SKUs off matrix.

**Contact Center:**
- CC Pro / CC Elite: **concurrent** licensing—confirm matrices.
- **Omnichannel:** voice, SMS, chat, email, **WhatsApp** (where in matrix); AI-assisted routing and insights; CRM/ERP depth (Salesforce, Zendesk, Dynamics, HubSpot, NetSuite, etc.).
- **CC with Teams:** Materials describe **UC for Teams Advanced** + CC—**Teams Desktop plugin** for Contact Center in some decks; can deploy with UC or add later—**AE/solutions**.
- Burst/digital/elastic: AE/pricing—not napkin math. Supervisor: monitor, whisper, barge; Elite-class AI transcription/sentiment.

**Voice (non-UC):** SIP → eSBC; PRI; POTS specialty lines.

**Archiving:** **30-day** rolling baseline in collateral; **1–10 year** paid tiers in flyers—confirm before quoting retention **years**.

**Uptime:** 99.999% SLA ≈ ~5.26 minutes downtime/year in customer language.

**Pricing / extraction caveat:** Internal rate books; **PDF table extracts** are fragmented—**verify precision** against source PDFs for RFPs.

**Naming noise (from themes doc):** **UC**, **Ascend**, occasional **Unite** in footnotes—align to GPC-approved terms externally.

::: accordion UC for Teams Datasheet
Device and feature rows change with matrix updates—open the latest **UC for Teams** / embedded datasheet from **Sales Resources** with your SE before you quote.
:::

::: accordion Phone Comparison
Desk, DECT, conference, and headset grids live in partner comparison PDFs under **Sales Resources**—match the customer to the matrix, not memory.
:::
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
five_minute_summary: |
  - **The Framework:** Map competitor weaknesses to GPC strengths using business risk and proof points (local support, NOC, redundancy). Avoid generic claims of superiority.
  - **Avoid Landmines:** Never make personal attacks or use absolutes. Verify battle-card stats with marketing before sharing externally, and bring in SEs early for architecture discussions.
  - **Handling Objections:** When countering LEO satellite or M&A concerns, anchor the conversation on uptime, latency, and the total cost of downtime rather than just price or speed.
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

  - question: "When prospects hear M&A messaging, what do they typically want?"
    options:
      - "Stability, service quality, and honest comparison—not gossip"
      - "Rumors and speculation without business relevance"
      - "A guarantee their vendor will exit the market next week"
    correct_index: 0
    explanation: "Factual, customer-centric continuity."

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

## At a glance

- **Framework:** **Discover first**, then map **competitor angle → business risk for this account → proof you can support** (local teams, **24×7 NOC**, redundancy, portfolio)—avoid generic “we’re better.”
- **Landmines:** No **personal disparagement**; no **battle-card stats** externally until **marketing** confirms currency; **SE/PM** for architecture-heavy or RFP-grade deals.
- **Fiber vs LEO:** Anchor on **reliability, latency, weather/obstruction risk, and operational support**—not Mbps alone; **PM** for delivery/construction/contract threads when relevant.

---

## Positioning snapshot

::: elevator [Elevator Pitch]
**Discover first, then map GPC proof to their pain**—never lead with trash talk or unverified stats. Your levers: local fiber, 24/7 NOC, owned/redundant paths, full stack (access → WAN → security → apps). Outcome-led beats generic “we’re better.”
:::

::: accordion M&A / Cox Acquisition Battle Card
Reference for positioning against acquisition-driven competitors—stability, service continuity, and factual comparison points.

:::

---

## Discovery Questions

1. **Who answers the phone at 2 a.m. if your primary circuit goes down—and how long does it take them to respond on-site?**
2. **Which applications break first if upload latency spikes or a circuit drops? What does an hour of downtime cost the business?**
3. **How are your locations connected today—VPN over shared broadband, MPLS, or Ethernet? When does that contract expire?**
4. **Are you running SaaS applications like O365, Salesforce, or cloud ERP? Where are those workloads hosted?**
5. **What does your current vendor do when there's a service issue—do they have local field technicians or is everything remote?**

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

::: flip ["Your competitor just got acquired—that makes them bigger."]
Respond factually: stability, billing continuity, field response—GPC continuity themes. No gossip.
:::

::: flip ["I need to see the battle-card numbers."]
Share collateral through approved channels; verify year/scope before any external citation.
:::

::: flip ["Fiber is fiber—latency is the same everywhere."]
Differentiate last mile, routing, peering, and repair SLAs—map to **their** apps and what an hour of downtime costs, not generic speed claims.

:::

</div>

**Disengage signals:** bad-faith trash talk requests, pure price auction with zero fit, design questions past your lane without SE.

---

## Technical Deep Dive [deep]

**Framework detail:**
1. **Discovery** — apps, sites, outcomes, topology, migration timelines, decision owners.
2. **Map** — tie strengths/weaknesses to *their* stated needs.
3. **Competitor → GPC** — their angle; risk *for this account*; proof (local, NOC, fiber design, symmetry, portfolio)—only what discovery supports.
4. **Landmines** — no personal attacks; no external battle-card stats until marketing clears; no absolutes; acknowledge real competitor strengths; don't improvise architecture—bring **SE**.

**Proof hierarchy:** concrete (build, redundancy, commercial terms) > generic; outcome-led; verify awards externally; keep directional stats internal.

**Rebuttals:** outcomes > stunts; one beat at a time; M&A = factual; no uncited numbers; no verbal price exceptions.

**Pull SE** — WAN/SD-WAN, MPLS migration, integrated security, hybrid paths, DDoS/regulated, fiber diversity, RFP validation. **PM** — timelines, construction, contract alignment.

| Topic | Counter with |
| --- | --- |
| **Metro / local** | Install quality, support model, redundancy, owned vs leased, rate stability—not price alone |
| **Fiber vs LEO** | Weather, jitter, congestion; fiber = predictable latency, symmetrical enterprise paths, pro install + support |
| **M&A / churn** | Stability, billing, field response—factual; GPC continuity themes |
| **Tech cards (SD-WAN pattern)** | Profile → pain → GPC wrap → qualifying Qs → proof; verify awards; SE validates design |

::: accordion Fiber vs LEO Satellite Battle Card
Side-by-side comparison of fiber vs Starlink/LEO—latency, weather risk, SLAs, and enterprise support. Pull the approved card from **Sales Resources** before you cite specifics externally.
:::

::: accordion Ethernet Competitive Battle Card
Key differentiators for Ethernet positioning—use alongside the tech-card pattern when qualifying multi-site WAN opportunities. Current PDF lives in **Sales Resources**.
:::
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
five_minute_summary: |
  - **Purpose:** Coordinate sales prospecting and marketing so executive targets see a coherent story over ninety days—not random one-off touches.
  - **Sales lane:** Eighteen sequenced touches across three months (intro through final call), mixing email, phone, LinkedIn, and optional field activity.
  - **Marketing lane:** Month-by-month air cover (awareness, validation, retargeting) that reinforces the same narrative.
  - **Systems:** Touches are designed to live in **Constellation-CRM**; use the Gantt below as the source-of-truth visual when coaching reps or planning campaigns.

knowledge_checks:
  - question: "Roughly how long is the C-level ABM sales sequence as shown in the standard Gantt?"
    options:
      - "90 days (three months of sequenced touches)"
      - "21 business days"
      - "One calendar week"
    correct_index: 0
    explanation: "The chart is framed as a 90-day sequence with Month 1–3 columns."
  - question: "What is marketing 'air cover' meant to do in this model?"
    options:
      - "Reinforce awareness and validation while sales runs the touch sequence"
      - "Replace outbound sales entirely for the quarter"
      - "Only run after a closed-won deal"
    correct_index: 0
    explanation: "Air cover supports the same accounts across months while sales executes touches."
  - question: "Where should reps log and execute the prescribed touches for this program?"
    options:
      - "Constellation-CRM (per the sales sequence standard)"
      - "Only in email, with no CRM requirement"
      - "A separate spreadsheet owned by marketing only"
    correct_index: 0
    explanation: "Constellation-CRM is the intended system for this sequence."

scenarios:
  - title: "Skipping ahead in the ABM sequence"
    situation: |
      A rep wants to jump straight to **meeting ask** in week two because they already know the CTO. Leadership asks whether that aligns with the ABM playbook.
    choices:
      - label: "Yes—relationships always override the sequence."
        feedback: "Relationships matter, but the sequence keeps marketing air cover and messaging aligned. Exceptions should be explicit, not silent skips."
      - label: "Coach them to stay on-sequence unless leadership documents an exception, so air cover and reporting stay intact."
        feedback: "**Good.** The sequence chart is the shared contract across sales and marketing."
      - label: "Tell them to restart the sequence from touch one."
        feedback: "Restarting isn't always required—focus on documented exceptions and alignment with marketing."

---

## Why ABM here

Account-based programs work when **sales and marketing agree on the timeline, the touches, and the air cover**. This module captures the **90-day C-level sequence** your team already visualized in the Gantt: prospecting swim lanes by month, plus a marketing row for LinkedIn, direct mail, and retargeting.

Use it in onboarding to answer: *What do we actually do in weeks 1–12 for a named executive target?*

## 90-day sequence

ABM campaign: 90-day C-level sequence (reference Gantt)

## How to use this module

1. Read the overview sections for **roles and intent** (you will refine copy as your SOP evolves).
2. Use the **90-day sequence** chart above while coaching—the PNG in `assets/gantt/` is the source-of-truth visual; replace it when your SOP art updates.
3. Pair this with **Operational Business Reviews** when discussing how executive conversations mature into review meetings.

## Sequence lanes (sales & marketing)

### Sales prospecting

The Gantt shows **eighteen touches** staggered across three months: intros, calls, LinkedIn actions, case studies, meeting asks, OBR tie-ins, alignment, and close-out steps. Stacked bars in a single month are intentional—reps need to see **density** without guessing order.

### Marketing air cover

Month 1 emphasizes **awareness** (e.g. LinkedIn & paid search). Month 2 adds **validation** (e.g. direct mail). Month 3 focuses **conversion** (e.g. retargeting). Optional creative (brochure copy) is called out where it supports the same story.

## Keep this module honest

Name your **enablement owner**, **playbook links**, and **MQL/SQL** definitions in your internal wiki—this page stays intentionally generic. When the Gantt or narrative changes, swap **`assets/gantt/abm-90-day-sequence.png`** and align the bullets here with the live program.
<!-- prettier-ignore-end -->

---

<a id="operational-business-reviews-operational-business-reviews"></a>

# Operational Business Reviews (`operational-business-reviews`)

<!-- prettier-ignore-start -->
---
id: "operational-business-reviews"
title: "Operational Business Reviews"
summary: "21-day cycles. Executive alignment. Strategic retention."
sensitivity: "internal"
five_minute_summary: |
  - **Cycle length:** Twenty-one days from initiation through materials ready for the OBR meeting.
  - **Swim lanes:** Initiation (rep), Design (network diagram), Data (billing & NOC snapshots), Marketing (format & layout), Production (print & assembly).
  - **Critical handoff:** Day 14 marks the data/marketing boundary—marketing picks up formatted narrative and slides into final prep.
  - **Finish line:** OBR meeting is flagged at the end of the window; use the Gantt to set expectations with customers and internal teams.

knowledge_checks:
  - question: "How many days does the standard OBR preparation cycle span in the Gantt?"
    options:
      - "21 days"
      - "90 days"
      - "5 business days"
    correct_index: 0
    explanation: "The header labels days 01–21 across the grid."

  - question: "The vertical 'Data Handoff' marker on the chart sits closest to which day?"
    options:
      - "Start of day 14"
      - "Day 1"
      - "Day 21"
    correct_index: 0
    explanation: "The handoff line is positioned at the start of day 14."

  - question: "In the Marketing row, which activities fall after the handoff (days 14+)?"
    options:
      - "Format & layout, then review, leading into print & assembly"
      - "Only the recon audit"
      - "Kickoff call only"
    correct_index: 0
    explanation: "Post-handoff bars cover format/layout, review, then production hands off to print."

scenarios:
  - title: "Customer timeline vs. 21-day OBR cycle"
    situation: |
      An account rep promises the customer a **printed OBR deck in five days**. Delivery points to the **21-day Gantt**.
    choices:
      - label: "Tell the customer five days is the standard."
        feedback: "The documented cycle is **21 days**; reset expectations or escalate an approved exception path."
      - label: "Align the rep to the 21-day model (or your approved fast-track process) before committing dates."
        feedback: "**Good.** The chart exists so sales and delivery quote the same timeline."
      - label: "Skip marketing formatting to save time."
        feedback: "Skipping lanes risks quality and handoffs; use leadership-approved exceptions only."

---

## Why OBRs matter

Operational Business Reviews turn **network reality, financial signals, and marketing narrative** into a single executive conversation. Reps win when the **prep process is predictable**—this module trains the timeline, not just the slide deck.

**How to use:** Walk new hires through **phases** below; use the **21-day** chart for swim-lane expectations; cross-link **Account Based Marketing** when tying executive outreach to review readiness.

## 21-day OBR cycle

![OBR process: 21-day strategic cycle (reference Gantt)](assets/gantt/obr-21-day-cycle.png)

## Phases (high level)

- **Initiation:** Recon audit and scheduling the OBR—owned by the account rep in the model chart.
- **Design:** Kickoff and network diagram work—labeled against your design owner in the source doc.
- **Data:** Parallel billing and NOC history pulls so the story is grounded in fact.
- **Marketing:** Format, layout, and review of customer-facing materials after the day-14 handoff.
- **Production:** Print and assembly leading into the OBR meeting milestone.

## Keep the Gantt honest

Document your **RACI**, **systems**, and **approval gates** in the live OBR SOP. When leadership updates the model, replace **`assets/gantt/obr-21-day-cycle.png`** so this module matches what delivery actually runs.
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
