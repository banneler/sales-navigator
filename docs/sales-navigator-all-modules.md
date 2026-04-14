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



# Getting started (`getting-started`)

*No `modules/getting-started/content.md`. Excerpts from `js/components/getting-started.js`.*

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
          <div class="rounded-xl border border-slate-200/90 bg-white/95 shadow-sm p-6 backdrop-blur-sm">
            <h2 class="text-2xl font-bold text-slate-900 tracking-tight">Welcome to Great Plains Communications</h2>
            <p class="text-slate-600 mt-3 text-sm max-w-3xl leading-relaxed">
              We're glad you're here. This space is built to help you ramp with confidence—alongside teammates who remember their first customer call, their first complex quote, and the questions that used to keep them up at night.
            </p>
          </div>
          <div class="rounded-xl border border-orange-100 bg-gradient-to-br from-orange-50/95 to-white/90 p-5 shadow-sm backdrop-blur-sm">
            <p class="text-xs font-bold text-orange-800 uppercase tracking-wide">Five-minute summary</p>
            <ul class="mt-3 space-y-2.5 text-sm text-slate-700">
              <li class="flex gap-2"><span class="text-orange-500 shrink-0">•</span> We're genuinely happy you chose to grow your career here—your wins matter to us.</li>
              <li class="flex gap-2"><span class="text-orange-500 shrink-0">•</span> Take training at your pace; come back to any module when you need a refresher or a talk track.</li>
              <li class="flex gap-2"><span class="text-orange-500 shrink-0">•</span> Showing up curious for customers beats memorizing slides—use this hub to prepare, then go have real conversations.</li>
            </ul>
          </div>
          <section class="rounded-xl border border-slate-200 bg-white/95 p-6 shadow-sm backdrop-blur-sm">
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



# Sales Rules of Engagement (`sales-rules-of-engagement`)



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
sharepoint_url: "[https://gpcom.sharepoint.com/:b:/r/sites/gpcSales/ROE/Sales%20Rules%20of%20Engagement%20(ROE)%20-%20Revised%20August%2025.pdf?csf=1&web=1&e=7aw2jN](https://gpcom.sharepoint.com/:b:/r/sites/gpcSales/ROE/Sales%20Rules%20of%20Engagement%20(ROE)%20-%20Revised%20August%2025.pdf?csf=1&web=1&e=7aw2jN)"

---

## Overview

The Rules of Engagement exist to protect everyone's pipeline and keep Salesforce trustworthy as the **system of record**. Three principles cover 90% of situations: **search before you create** (one entity, one account); **log meaningful activity** (Salesforce activity, not just email sent); and **transfer through leadership in writing** (never reassign unilaterally). Strategic and E-Rate accounts follow different rules. Know the windows, own your activity log, and disputes get resolved cleanly.

---

## Key Guidelines

1. **Search before creating:** Duplicate accounts are the most common ROE violation and the hardest to unwind. Always search Salesforce before creating a new account or contact.
2. **Log meaningful activity:** Email in your sent folder does not count. Activity must be logged as a task, call, meeting, or email on the record in Salesforce.
3. **Respect idle windows:** Prospect accounts are idle after 61+ days; Customer accounts after 121+ days. Even then, contact the listed owner first.
4. **Follow transfer protocols:** Never reassign an account in Salesforce unilaterally. Align with the current owner, then get written approval through your manager and sales leadership.
5. **Assigned inbound leads:** You have 5 business days to make first contact *and* log it in Salesforce. This is non-negotiable.

---

## Common Pitfalls



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



---

## Process Deep Dive [deep]

**ROE table (general path):**


| Topic            | Rule                                                            |
| ---------------- | --------------------------------------------------------------- |
| Prospect idle    | **61+** days no qualifying logged activity → others may work    |
| Customer idle    | **121+** days → others may work                                 |
| Assigned inbound | First contact **and** Salesforce log within **5 business days** |
| Self-sourced     | **Not** the inbound 5-day clock                                 |


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



---



# Sales Process & Salesforce (`sales-process-and-salesforce`)



---

id: "sales-process-and-salesforce"
title: "Sales Process & Salesforce"
summary: "Leads → convert → opportunities → GPC Solutions → approvals → Conga/DocuSign. SF 101, lead conversion ref, DocuSign integration in Sales Resources."
sensitivity: "public"
reference_files:

- label: "Sales Resources (enablement hub)"
sharepoint_url: "[https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx](https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx)"
five_minute_summary: |
- **Lead Conversion:** Convert leads only when they are ready for a quote. This should default to creating a new opportunity, account, and contact.
- **Pipeline Management:** Keep stages accurate to the buying process. Never delete Closed/Lost opportunities, as that history is critical for forecasting and analysis.
- **DocuSign Workflows:** Set the Contract Signer early on the GPC Solution. Ensure all signers exist as Contacts in Salesforce before sending the envelope.
- **Data Hygiene:** Keep your pipeline clean by logging tasks, maintaining accurate close dates, and using the Salesforce Home dashboards to track follow-ups.

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

Salesforce is GPC's **system of record for every deal**—from first contact to installed revenue. The process is a straight line: convert leads when ready to quote (always create the opportunity), build the GPC Solution, get approvals, merge with Conga, and send via DocuSign. Every step has a rule. Skipping steps—not creating the opportunity, deleting Closed/Lost records, setting Contract Signer late, or keeping contacts outside Salesforce—creates downstream problems in approvals, billing, and commission. Clean data in, clean revenue out.

---

## Key Guidelines

1. **Always search first:** Duplicates cause ownership disputes and data quality problems. Search Salesforce before converting a lead.
2. **Convert to Opportunity:** The default is always to create an opportunity upon conversion. Exceptions require manager or admin approval.
3. **Accurate Pipeline Stages:** Stage, amount, and close date should move together and reflect reality you'd defend to leadership. Inflated stages distort the forecast.
4. **Set Contract Signer early:** Missing signers block DocuSign. Set the Contract Signer when you create the GPC Solution, well before it reaches Approval Pending.
5. **Contacts must exist in Salesforce:** DocuSign recipients must be Contacts on the account before sending. You cannot send an envelope to an email address that isn't attached to a Contact record.

---

## Common Pitfalls



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



---

## Process Deep Dive [deep]

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

::: accordion Lead Conversion Quick Reference
Converting a lead creates the account, contact, and opportunity in one step.

*Collateral image — coming soon*

*Collateral image — coming soon*
:::

::: accordion Salesforce Home & Dashboards
Use the Salesforce Home page and dashboards to keep your pipeline and follow-ups current.

*Collateral image — coming soon*

*Collateral image — coming soon*
:::

::: accordion DocuSign Integration Reference
Setting up Contract Signer and sending envelopes from Salesforce via Conga.

*Collateral image — coming soon*
:::



---



# Sales Operations & Approvals (`sales-operations-and-approvals`)



---

id: "sales-operations-and-approvals"
title: "Sales Operations & Approvals"
summary: "GPC Solution approvals (Approval History), pre-billing change orders vs MAC/disconnect post-billing, Solution Site costing routing, manual validation. PDFs in Module Reference Files."
sensitivity: "internal"
reference_files:

- label: "Approval Overview and Training Guide — 07/25"
sharepoint_url: "[https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Approval%20Overview%20and%20Training%20Guide%20-%200725.pdf?csf=1&web=1&e=qy6LaI](https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Approval%20Overview%20and%20Training%20Guide%20-%200725.pdf?csf=1&web=1&e=qy6LaI)"
- label: "Approval Requirements Matrix v5.5 — 07/25"
sharepoint_url: "[https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Approval%20Requirements%20Matrix%20v5.5%20-%200725.pdf?csf=1&web=1&e=h64jqJ](https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Approval%20Requirements%20Matrix%20v5.5%20-%200725.pdf?csf=1&web=1&e=h64jqJ)"
- label: "Change Order Process — Sales Team — 03/25"
sharepoint_url: "[https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Change%20Order%20Process%20-%20Sales%20Team%20-%200325.pdf?csf=1&web=1&e=STAe3w](https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Change%20Order%20Process%20-%20Sales%20Team%20-%200325.pdf?csf=1&web=1&e=STAe3w)"
- label: "Costing Routing Quick Reference Guide — 11/23"
sharepoint_url: "[https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Costing%20Routing%20Quick%20Reference%20Guide%20-%201123.pdf?csf=1&web=1&e=Ta1aBx](https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Costing%20Routing%20Quick%20Reference%20Guide%20-%201123.pdf?csf=1&web=1&e=Ta1aBx)"
- label: "Move-Add-Change Processes — Sales Team — 11/23"
sharepoint_url: "[https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Move-Add-Change%20Processes%20-%20Sales%20Team%20-%201123.pdf?csf=1&web=1&e=zURGTj](https://gpcom.sharepoint.com/:b:/r/sites/SalesforceRoadmap/Shared%20Documents/General/2025%20Salesforce%20Training%20Guides%20(Legacy%20BAU%20org)/Move-Add-Change%20Processes%20-%20Sales%20Team%20-%201123.pdf?csf=1&web=1&e=zURGTj)"
- label: "Salesforce Roadmap — shared link"
sharepoint_url: "[https://gpcom.sharepoint.com/:b:/s/SalesforceRoadmap/IQCEYPLtQTCVS7H8aEnrSTrLARzxb0p97NTo17Rj8DeB_gg?e=RyiZUS](https://gpcom.sharepoint.com/:b:/s/SalesforceRoadmap/IQCEYPLtQTCVS7H8aEnrSTrLARzxb0p97NTo17Rj8DeB_gg?e=RyiZUS)"
five_minute_summary: |
- **The Approval Process:** Reviewers evaluate site-level services, products, and quote math—not just the headline total. Track progress via the Approval History on the GPC Solution.
- **Handling Changes:** Use Change Orders only for pre-billing adjustments. Once billing has started, use the MAC (Move-Add-Change) process for partial updates or Disconnect for full removals.
- **Manual Validation:** Checking "Request Manual Validation" skips automated routing and forces every department to review. Use this sparingly.
- **OBR Cadence:** Operations Business Reviews are for account planning and do not replace standard Salesforce approval or costing rules.

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

Getting a deal right in Salesforce is as important as winning it. The **approval process** exists to catch errors before orders go to delivery—reviewers check site-level services, products, and quote math. The **change order vs MAC vs disconnect** distinction prevents billing errors, stalled installs, and customer escalations. **Costing routing** ensures the right teams estimate and validate spend. Know which path to use at each stage, and your deals will move cleanly from approval to revenue.

---

## Key Guidelines

1. **Check the Billing Status:** This determines your path. Pre-billing changes use the Change Order process. Post-billing partial changes require a MAC (Move-Add-Change). Full removals are Disconnects.
2. **Verify Site-Level Data:** Reviewers validate site-level completeness, not just the headline MRC. Ensure each Solution Site has the correct services and products attached.
3. **Check the Math:** Mismatches between line items and totals stall approvals and delay projects.
4. **Include the GPC Solution ID:** Every form and required attachment must carry the GPC Solution ID. Missing IDs cause booking delays post-approval.
5. **Use Manual Validation Sparingly:** Checking "Request Manual Validation" skips automation and routes the deal to every participating department. Only check it when human review is genuinely required.

---

## Common Pitfalls



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



---

## Process Deep Dive [deep]

**Approval flow:**

- Work from **GPC Solution → Approval History** → Approve / Reject / Reassign / Recall; add comments
- Reviewers judge: site-level services, products, quote math, record hygiene (Solution Services on sites, products on services, quote line sanity)
- Who reviews: Product Management (product rules); Sales Management (judgment, escalation); Salesforce team (routing/workflow bugs)
- Mobile: same actions available from approval notifications/email links
- Stalls: check Approval History for step/assignee; escalate via Sales Management or SF team

**Change order (narrow definition):**

- When: contract change **after Closed/Won** and **before billing starts**; Solution must be Booked, not Billed
- Not: post-billing partial change → **MAC**; pre-billing full removal → **Cancellation**; post-billing full removal → **Disconnect**
- Motion: Conga Change Order template from GPC Solution → complete sites/changes → keep GPC Solution ID on forms → signatures → upload → email package to Sales Manager (when required), PMO, SF Administrator, CRC
- After submit: SF Admin booking adjustment; PMO project; CRC billing
- Note: if site stage is Pending Billing or 7–10 Day Order, Admin may need PMO/CRC approval before booking change—not instant

**Costing routing rules of thumb:**

- Zone Parent → sites may bypass automation; Reusable not allowed with Zone Parent
- New + Existing on one site → **New** path
- Multiple services on one site → **deepest review** path
- Reusable / OSP matrices → see Costing Routing PDF
- Request Manual Validation = skip automation → every participating department reviews manually

**Pre-submission checklist:**
Right object, real sites/services/products, quote math ties, story matches payback/churn context, attachments + GPC Solution IDs on forms, Request Manual Validation only when human review is really needed.

::: accordion Approval Flow & History
How approvals route through the GPC Solution and where to find Approval History.

*Collateral image — coming soon*

*Collateral image — coming soon*
:::

::: accordion Change Order Process
Pre-billing change order workflow — from Conga template through SF Admin booking adjustment.

*Collateral image — coming soon*
:::

::: accordion Costing Routing Reference
How costing routing selects review paths based on site type, services, and products.

*Collateral image — coming soon*
:::



---



# Portfolio & Business Capabilities (`portfolio-and-business-capabilities`)



---

id: "portfolio-and-business-capabilities"
title: "Portfolio & Business Capabilities"
summary: "Outcome-led GPC story: layered stack (access → WAN → security → apps); partner + Midwest IP proof; Sales Resources for datasheets."
sensitivity: "public"
reference_files:

- label: "Sales Resources (collateral hub)"
sharepoint_url: "[https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx](https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx)"
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
  - "The deep collateral library (extracted OneDrive tree) organized by product, while this module stays the narrative spine."
  - "Generic web search only."
  correct_index: 1
  explanation: "The module points to the Business Capability deck for the story and the extracted library for per-product evidence."
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
  - "Use this module and the Business Capability deck for the narrative spine; use the extracted library for per-product evidence."
  - "Use only this module and never reference external collateral."
  correct_index: 1
  explanation: "Keep the executive storyline in the capability materials; pull datasheets and vertical proof from the organized extract when needed."
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

## roleplay:
  persona: "Skeptical CFO at a mid-size Midwest manufacturer"
  scenario: "Just sat through two carrier pitches that sounded identical. Asks point-blank why GPC is different before walking out of the room."
  goal: "Deliver a one-sentence 'why GPC' answer grounded in outcomes and partnership, then anchor the conversation on the layered stack and offer the capability deck as a concrete next step."

## Elevator Pitch

GPC is not just an ISP—it's a **layered technology partner** built on a resilient Midwest fiber network. The portfolio runs from access (fiber + backup) through WAN, security, and all the way to UC, Cloud Connect, and Wi-Fi—designed as **one integrated system**, not a menu of unrelated add-ons. Midwest IP, Tier-1 and IX relationships, local teams, and 24/7 NOC monitoring are the proof points that separate GPC from commodity carriers.

::: accordion Business Capability Overview
Cover slide from the GPC Business Capability presentation—use as the opening visual when framing outcomes and partnership.

*Collateral image — coming soon*
:::

---

## Discovery Questions

1. **How many locations do you have, and how are they connected today—shared Internet, MPLS, Ethernet, or SD-WAN?**
2. **What are your most critical applications? Are any of them SaaS or cloud-hosted (O365, Salesforce, ERP)?**
3. **What does an hour of downtime cost your business—and what was your last significant outage?**
4. **Are you planning any cloud migrations or voice modernization in the next 12–24 months?**
5. **Who owns network, security, and voice decisions—are those the same team or separate?**

---

## Objection Handling


| Objection                                  | Pivot                                                                                                                                                        |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **"You all sound the same."**              | Anchor on the layered stack: access → WAN → security → apps as one designed system—then ask what their current provider does when something breaks at 2 a.m. |
| **"We just need basic Internet."**         | Ask about cloud apps, VoIP, and growth plans—then show how basic access becomes a foundation for the full stack.                                             |
| **"We already have a national carrier."**  | Midwest IP reach, local field teams, NOC monitoring, and portfolio breadth—not price. Tie to TCO of downtime.                                                |
| **"We're not ready for a full solution."** | Start with access; plant flags for WAN, security, and UC as next conversations once trust is established.                                                    |


---

## Technical Deep Dive [deep]

**Portfolio map (layers):**


| Layer                   | What                                                       | Position / hook                                                                                                                                   |
| ----------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Access + continuity** | Fiber primary; **wireless backup** when continuity matters | Fiber = capacity/perf; backup = **continuity**—not "second Internet." Backup → SD‑WAN + security; multi‑site → **Ethernet**                       |
| **WAN**                 | **Ethernet** mesh; **SD‑WAN** for policy + multi‑link      | Ethernet = predictable site mesh; SD‑WAN = orchestration + cloud breakout. → firewall/DDoS, **Cloud Connect**; new sites → fiber + Wi‑Fi          |
| **Protect**             | Managed firewall, DDoS                                     | Policy on the pipe—tie to ransomware, PCI, guest Wi‑Fi. → SD‑WAN, UC (SBC) where relevant; guest Wi‑Fi → **Managed Wi‑Fi**                        |
| **Enable**              | UC, **Cloud Connect**, Wi‑Fi, video (when vertical cares)  | UC + experience; Cloud Connect = predictable cloud paths. Voice/video pain → check access/WAN/QoS + SD‑WAN; heavy SaaS → Cloud Connect + security |


**Practice line:** any deal = **access + path + policy + apps** mapped to sites/workloads.

**Conversation flow:**

- **Discovery:** sites, critical apps, uptime, cloud/voice moves, owners (network/security/voice).
- **Order:** one-sentence fit → layered map → capability deck + **Sales Resources**.
- **Checkpoints:** footprint → apps → RTO/RPO → ownership.

::: accordion Portfolio Stack Layers
Visual breakdown of the layered portfolio—access through applications—from the capability deck.

*Collateral image — coming soon*

*Collateral image — coming soon*
:::

::: accordion Network Story & Proof Points
Midwest IP, fiber-first access, and Tier-1/IX relationships—anchor the "why GPC" conversation with this network narrative slide.

*Collateral image — coming soon*
:::



---



# Connectivity & Access (`product-connectivity`)



---

id: "product-connectivity"
title: "Connectivity & Access"
summary: "SIA/DIA, Managed Ethernet, Wave, fiber vs satellite framing; internal pricing via quoting only."
sensitivity: "public"
reference_files:

- label: "Sales Resources (product collateral)"
sharepoint_url: "[https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx](https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx)"
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

## roleplay:
  persona: "Skeptical IT Director"
  scenario: "Complaining about VPN jitter over shared broadband at three branch locations. Wants the cheapest fix and assumes upgrading bandwidth on the same SIA circuit will solve it."
  goal: "Pivot from price to reliability—qualify the symmetry and latency requirements for VoIP and cloud apps, then position DIA or Managed Ethernet as the right solution rather than simply more shared bandwidth."

## Elevator Pitch

GPC's connectivity stack matches the right access technology to each customer's workload—not just the cheapest pipe available. **SIA** (Standard Internet Access) is the right fit for cost-sensitive, flexible needs. **DIA** (Dedicated Internet Access) delivers symmetrical bandwidth, stronger DDoS posture, and SLA-grade operations for businesses that can't afford jitter or downtime. **Managed Ethernet** provides private Layer 2 connectivity between sites. **Wave** moves large optical volumes between data centers and hubs. Discovery first—then quote the right product.

---

## Discovery Questions

1. **What are your most critical applications—VoIP, cloud ERP, video conferencing, payment terminals? How much upload traffic do they generate compared to download?**
2. **How are your locations connected today—shared broadband, MPLS, Ethernet, or SD-WAN? When does that contract expire?**
3. **Have you experienced jitter, latency spikes, or outages? What broke first, and what did it cost you?**
4. **Do you need static IPs, diversity (dual-path), or DDoS monitoring as part of your access design?**
5. **Are any sites data-center or hub locations where high-capacity optical transport between strategic endpoints might be relevant?**

---

## Objection Handling



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



---

## Technical Deep Dive [deep]

**Access stack:**


| Layer        | Role                                                                             |
| ------------ | -------------------------------------------------------------------------------- |
| **SIA**      | Shared, flexible, cost-sensitive; up to ~2 Gbps symmetrical per comparison sheet |
| **DIA**      | Dedicated, symmetrical; up to 100 Gbps symmetrical; stronger DDoS/NOC posture    |
| **Ethernet** | Private L2 (E-Line/EVPL/E-LAN); site-to-site—not Internet breakout               |
| **Wave**     | L1 optical DC/hub links—not "more Internet"; qualify vs Internet                 |


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
*Collateral image — coming soon*
:::

::: accordion Ethernet Battle Card
*Collateral image — coming soon*
:::

::: accordion Fiber vs Starlink Battlecard
*Collateral image — coming soon*

*Collateral image — coming soon*
:::



---



# Security & SD-WAN (`product-security-and-sd-wan`)



---

id: "product-security-and-sd-wan"
title: "Security & SD-WAN"
summary: "MNS vs managed firewall; DDoS proactive vs on-demand windows; Velo SD-WAN (≥1 GPC fiber site); SE early; internal pricing only."
sensitivity: "public"
reference_files:

- label: "Sales Resources (security & SD-WAN collateral)"
sharepoint_url: "[https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx](https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx)"
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

## roleplay:
  persona: "Skeptical IT Director at a regional bank with 12 branches"
  scenario: "Currently running MPLS between branches. Complaining about VPN jitter on shared broadband at smaller locations. Thinks SD-WAN is just 'expensive router software' and insists on managing their own Cisco gear."
  goal: "Qualify multi-site footprint and GPC fiber anchors, then pivot from DIY network management to GPC's fully managed SD-WAN—frame as operational savings, 24/7 NOC support, and cloud breakout improvement rather than a technology debate."

## Elevator Pitch

GPC's Security & SD-WAN portfolio puts **policy on the pipe**—managed protection and intelligent routing at every edge. **Managed Firewall** (FortiGate-based, SOC-monitored) and **Managed Network Security (MNS)** stop threats at the edge and in email, with SIEM and assessment capabilities for regulated environments. **DDoS Protection** keeps critical services online—proactive for 24/7 mitigation, on-demand for cost-conscious accounts that understand the window. **SD-WAN (VeloCloud)** transforms multi-site WAN by routing traffic intelligently across any access type, with cloud breakout, QoS for VoIP, and a single management pane—all managed by GPC with local support and a 24/7 NOC.

---

## Discovery Questions

1. **How many locations do you have, and which ones are on GPC fiber vs. other broadband or MPLS?**
2. **How are those locations connected today—VPN over shared Internet, MPLS, Ethernet? When does that contract expire?**
3. **What are your most important applications? Do you use SaaS like O365 or Salesforce, and are they hosted on-prem or in the cloud?**
4. **Have you experienced a security incident, ransomware event, or DDoS attack? Who manages your firewalls today?**
5. **Do you need always-on DDoS mitigation (proactive) or is business-hours coverage acceptable—and what's the cost of an attack outside those windows?**

---

## Objection Handling


| Objection                                            | Pivot                                                                                                                                                                                                                                                           |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **"We manage our own Cisco gear."**                  | GPC's fully managed SD-WAN eliminates upfront CapEx and frees your team from network management. A single monthly charge covers install, management, and 24/7 NOC monitoring. Gartner has ranked VMware VeloCloud at the top of the leader quadrant for SD-WAN. |
| **"Our current solution works fine."**               | Ask: do you have visibility into application performance across all sites? SD-WAN Orchestrator provides real-time views into access link performance and lets you prioritize critical apps—even over a single link.                                             |
| **"SD-WAN is too expensive."**                       | SD-WAN pricing sits between SIA and DIA—often less than the MPLS it replaces. The ROI comes from eliminating MPLS costs, reducing truck rolls, and improving uptime for revenue-generating applications.                                                        |
| **"We only have sites in Nebraska."**                | SD-WAN works over any transport—GPC fiber, cable, DSL, T1, or 4G/5G wireless. With at least one site on GPC fiber, all US locations including off-net branches can participate.                                                                                 |
| **"The on-demand DDoS is fine—we're not a target."** | Confirm: on-demand mitigation windows are weekdays 8–17 only. After-hours attacks won't be mitigated until the next business day. If that risk is acceptable, document it; otherwise, align to proactive.                                                       |


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
*Collateral image — coming soon*
:::

::: accordion SD-WAN Retail Brief
*Collateral image — coming soon*
:::

::: accordion SD-WAN Healthcare Brief
*Collateral image — coming soon*
:::



---



# Cloud, Wi-Fi & Backup (`product-cloud-wifi-and-backup`)



---

id: "product-cloud-wifi-and-backup"
title: "Cloud, Wi-Fi & Backup"
summary: "Cloud Connect + Ethernet on-ramp; managed Wi‑Fi (survey before AP counts); 5G backup with honest RF/speed expectations."
sensitivity: "public"
reference_files:

- label: "Sales Resources (cloud, Wi‑Fi, backup collateral)"
sharepoint_url: "[https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx](https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx)"
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
  - "The extracted training folder's .url shortcuts to hosted pages (on-network)"
  - "Random search-engine results updated hourly"
  - "Only unofficial third-party forums"
  correct_index: 0
  explanation: ".url shortcuts when on-network; else Sales Resources / GPCU."
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

## roleplay:
  persona: "IT Manager at a healthcare clinic network"
  scenario: "Had a fiber outage last month that took down patient scheduling and e-prescribing for four hours. Wants a solution but is skeptical of wireless backup speeds and worried about HIPAA data on a cellular network."
  goal: "Position 5G backup as a managed, automatic failover solution with app prioritization and NOC monitoring—set honest speed/tier expectations while tying reliability to patient care continuity."

## Elevator Pitch

Three products that extend the value of GPC fiber access: **Cloud Connect** gives SaaS-heavy and cloud-first businesses a private, predictable path to AWS, Azure, Google, and other platforms—no more Internet-only jitter for critical workloads. **Managed Wi-Fi** covers the last ten feet with a fully managed lifecycle (design, install, maintain), guest/corporate segmentation, and integrated firewall/IDS/IPS. **5G Wireless Backup** keeps the business running during fiber outages with automatic failover, automatic fail-back, 24/7 NOC monitoring, and optional battery protection—no manual intervention required.

---

## Discovery Questions

1. **Which cloud platforms or SaaS apps are most critical to your business—AWS, Azure, O365, Salesforce? How do you reach them today, and where do you feel latency or reliability pain?**
2. **When your primary Internet circuit went down last—how long were you out, what broke first, and what did that cost the business?**
3. **Who manages your Wi-Fi today? Do you have separate guest and corporate networks, and are you dealing with any compliance requirements like PCI or HIPAA?**
4. **How many sites need coverage, and do any have outdoor or high-density requirements that a standard AP count might undersize?**
5. **Do you have applications—VoIP, payment terminals, patient records—that must stay up even during a fiber outage?**

---

## Objection Handling


| Objection                                                                      | Pivot                                                                                                                                                                                 |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **"5G is fast enough to be my primary Internet."**                             | Position honestly: wireless is best-effort, not symmetrical, and speeds vary by site. For primary access, fiber is the right answer; 5G backup is the continuity layer.               |
| **"Just tell me how many APs we need."**                                       | A site survey is required before any AP count—density depends on floor plan, device count, use case, and compliance. Promising counts on call one leads to under-engineered installs. |
| **"We already connect to AWS directly."**                                      | Ask how—public Internet or a private path? Cloud Connect's private Ethernet on-ramp eliminates Internet jitter for latency-sensitive workloads and adds multi-region resilience.      |
| **"We don't want cellular data leaving our building for compliance reasons."** | The Kajeet Sentinel portal filters non-business traffic during failover; GPC NOC monitors and manages the connection. Align specifics with SE and compliance team.                    |
| **"5G backup is too expensive for a circuit we almost never use."**            | Frame as insurance: the 5G Backup SKU starts at $68/month—compare to the cost of one four-hour outage for payment processing, patient care, or customer service.                      |


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
*Collateral image — coming soon*
:::

::: accordion Managed Wi-Fi Collateral
*Collateral image — coming soon*

*Collateral image — coming soon*
:::

::: accordion 5G Wireless Internet Backup
*Collateral image — coming soon*

*Collateral image — coming soon*
:::



---



# GPC iTV for Business (`product-itv`)



---

id: "product-itv"
title: "GPC iTV for Business"
summary: "Business streaming TV over GPC Internet—popular channels, Cloud DVR, Replay TV, and local/sports lineups—with a single bill alongside connectivity."
sensitivity: "internal"
reference_files:

- label: "GPC iTV collateral — SharePoint (source of truth)"
sharepoint_url: "[https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx](https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx)"
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

## Why GPC iTV

Keep customers engaged with **GPC iTV**—a **streaming TV** solution for business. Standard positioning describes it as the **latest** streaming TV offer from GPC: **popular channels** and **modern features** (including **Cloud DVR** and **Replay TV**) over the customer’s **existing GPC Internet** connection. **Authoritative PDFs, rate cards, and updates live in SharePoint**—use the module reference link, not static copies here.

Position it for **mom-and-pop through larger sites**: the story is **customizable** by industry and footprint, but your job is still to **qualify** screens, wiring, content needs, and **access**.

## Headline benefits


| Theme                 | How to talk about it                                                                                                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Replay TV**         | Catch-up style viewing for busy teams and public areas—tie to “don’t miss the game” or “replay yesterday’s segment.”                                                                 |
| **Cloud DVR**         | Record and store in the cloud where the product supports it—avoid over-specific storage numbers unless your current rate card says so.                                               |
| **HD channels**       | Quality on modern displays; pair with **access** bandwidth so video doesn’t stutter.                                                                                                 |
| **Popular sports**    | Strong for **hospitality, retail, and break rooms**—still confirm **local lineup** before promising a given RSN.                                                                     |
| **Local channels**    | Collateral calls out **local news and weather**—good for community-facing businesses.                                                                                                |
| **Equipment savings** | “**Save money on monthly equipment and DVR rentals**” where the *streaming-first* model applies—**footnote:** some sites may still need **set-top boxes** at a **low monthly rate**. |
| **Single bill**       | **One bill for multiple services** when sold in a bundled commercial structure—confirm with **ordering/billing** so you quote what finance will invoice.                             |


## Delivery & lineup

- **Internet dependency:** Messaging assumes **GPC Internet** is in place (or will be)—lead with **access** qualification where iTV is in play.
- **Lineup & “learn more”:** Collateral typically points to a **QR code** for **local lineup**—confirm the current asset on **SharePoint**. For customer-facing overview, [gpcom.com/gpcitv](https://gpcom.com/gpcitv/) may still apply; **internal source of truth remains SharePoint.**

## How to use this module

1. Run **discovery**: business type, number of screens, must-have channels/sports, **existing TV hardware**, and **who provides Internet today**.
2. Pair with **Connectivity & Access** when Internet is not yet GPC—iTV is not a substitute for a proper access path.
3. Keep **lineup, pricing, and equipment** on **official tools and rate cards**; pull **positioning PDFs and pricing** from **SharePoint**, not from this app.

## Next steps

- Use the **Sales Resources** / iTV folders on **SharePoint** for pricing workbooks, regional PDFs, and updated product sheets.
- For **voice-only** conversations that touch TV in the portfolio, cross-link from **Portfolio & Business Capabilities** once your map is updated.



---



# UC, Voice & Collaboration (`product-uc-voice-and-collaboration`)



---

id: "product-uc-voice-and-collaboration"
title: "UC, Voice & Collaboration"
summary: "UC platform + Teams attach (separate Microsoft licenses); CC Pro/Elite concurrent; SIP/PRI/POTS; internal pricing only."
sensitivity: "public"
reference_files:

- label: "Sales Resources (UC, voice, contact center)"
sharepoint_url: "[https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx](https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx)"
five_minute_summary: |
- **Unified Communications:** A single stack for PBX, messaging, meetings, and file sharing. Be aware of storage differences between tiers and the standard 30-day archiving baseline.
- **Microsoft Teams Integration:** Customers can use Teams as their hub while leveraging GPC's cloud PBX for routing. Clarify early that Microsoft's Phone System licensing is separate.
- **Contact Center:** CC Pro and Elite are based on concurrent users. Always work with pricing for digital channels or burst capacity rather than guessing.
- **Traditional Voice:** Run thorough discovery on existing PBX equipment, SIP/PRI paths, and specialty lines before quoting.

knowledge_checks:

- question: "For Microsoft Teams integration, what must the customer understand about licensing?"
options:
  - "GPC UC includes all Microsoft Teams and Phone System entitlements in one SKU"
  - "Microsoft Teams licenses and Phone System are purchased separately from GPC's cloud PBX story"
  - "Teams Phone is never used with GPC; only SIP trunks apply"
  correct_index: 1
  explanation: "Teams + Phone System separate—joint licensing picture early."
- question: "What is the baseline call/chat archiving position you should state before quoting years of retention?"
options:
  - "Free unlimited retention for all tiers on day one"
  - "Free **30-day** retention baseline; longer retention is stepped—confirm tier with the account team"
  - "Archiving is not offered on the UC platform"
  correct_index: 1
  explanation: "30-day baseline; longer = confirm—don't quote years on call one."
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

## roleplay:
  persona: "Operations Manager at a 75-person professional services firm"
  scenario: "Stuck on an aging on-prem PBX that's out of warranty. The IT team uses Teams for chat and meetings but nobody can make external calls from it. Assumes replacing the PBX means buying new desk phones and a server."
  goal: "Position GPC's cloud UC as the modern replacement—no on-prem server, enterprise-grade features from Teams or the native softphone, and a clear explanation of how Microsoft licensing and GPC's cloud PBX work together."

## Elevator Pitch

GPC's UC platform replaces aging on-prem phone systems with a **single cloud stack**: enterprise PBX, messaging, SMS/MMS, HD video meetings with AI recaps, optional contact center, and file sharing—all on a **99.999% uptime** platform backed by **Triple Guard Security™**. For Microsoft-first organizations, GPC cloud PBX integrates directly with Teams so users make calls from the Teams dialer with no new hardware required. The pitch is simple: your on-prem phone system is a depreciating asset that costs more than it looks—cloud UC consolidates phone, video, chat, and files into one predictable monthly fee per user.

::: accordion UC Platform Brochure
*Collateral image — coming soon*
:::

---

## Discovery Questions

1. **What phone system are you running today—on-prem PBX, hosted VoIP, or legacy key system? When did it last get a major upgrade, and is it still under support?**
2. **Do your employees use Microsoft Teams for chat and meetings? Are they expecting to make and receive external calls from within Teams?**
3. **How do people communicate when they're out of the office—cell phones, call forwarding, or a mobile app? Is that working well?**
4. **Do you have a contact center or customer service queue? How many agents, what channels (phone, email, chat, SMS), and do you need supervisor monitoring or call recording?**
5. **Are there compliance requirements for call recording or archiving—legal hold, financial services, healthcare? How long does data need to be retained?**

---

## Objection Handling


| Objection                                                          | Pivot                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **"We already use Teams—we don't need a separate phone system."**  | Teams is great for chat and meetings, but external calling requires Phone System licensing plus PSTN connectivity. GPC cloud PBX gives users enterprise-grade calling within Teams or the Ascend app, with SMS, call queues, and contact center that Teams alone doesn't offer. |
| **"Cloud is less secure than our on-prem system."**                | Triple Guard Security™: enterprise-grade data centers, certified security team, encryption, password management, and 2FA. Intermedia has been recognized 7 times by J.D. Power for technical support excellence. On-prem systems receive no automatic security updates.         |
| **"Switching will disrupt our business."**                         | OTT deployment means UC runs over your existing data network—no new wiring, no server installation. The Ascend platform is the standard default for new deployments. Number porting is planned carefully with architects.                                                       |
| **"Our people won't learn a new system."**                         | The Ascend mobile and desktop apps mirror Teams-style UX. For Teams users, calls happen natively in the Teams dialer—no learning curve.                                                                                                                                         |
| **"We need to keep our current PBX for the alarm and fax lines."** | SIP trunking and POTS analog lines can coexist. Specialty lines (alarms, fax, elevator) remain on legacy paths while the main voice system migrates to cloud UC.                                                                                                                |


---

## Technical Deep Dive [deep]

**UC plan tiers (Ascend/Intermedia platform):**

- **UC Resource Line:** breakroom/lobby; 1 endpoint, no apps
- **UC Express:** 1 phone + apps; voicemail, auto attendant, unlimited LD, business texting
- **UC Collab Essentials:** meetings, call queue, mobility, desktop client, unlimited LD, voicemail, auto attendant, call recording
- **UC Collab Pro:** full Essentials + contact center lite, AI meeting notes, unlimited recordings, end-to-end encryption, 200 GB file storage/user
- **Unite Enterprise:** up to 200 GB/user file storage vs 50 GB (Essentials) vs 5 GB (Express)

**Teams integration options:**

- **Ascend with Teams:** Teams for chat/meetings/files; Ascend desktop + mobile for all phone services. SMS, Contact Center, CRM integrations included at no additional cost. Single sign-on with M365 credentials.
- **Ascend for Teams:** 100% within Teams application; enterprise PBX calling features (auto attendant, call queuing, call recording) inside the Teams dialer.
- **Teams + Phone System licensing:** purchased separately from Microsoft—not included in GPC UC SKU. Set expectations early.

**Contact Center:**

- CC Pro / CC Elite: concurrent seat licensing—confirm matrices before quoting
- Digital channels, dynamic notifications, burst/elastic = AE/pricing sizing—not napkin math
- Supervisor features: monitor, whisper, barge; AI transcription and sentiment analysis (Elite)

**Voice (non-UC):**

- SIP trunking: PBX → GPC → PSTN; managed eSBC when needed
- PRI: digital trunks for larger sites
- POTS: legacy/specialty lines (alarm, fax, elevator) where TDM still fits

**Archiving:** 30-day free baseline; longer retention is stepped—confirm tier with account team before quoting years.

**Uptime:** 99.999% SLA = ~5.26 minutes downtime per year.

**Pricing:** Internal rate books—capability on datasheets. AE/pricing for seats, add-ons, archiving, and professional services. Never email ad-hoc rates from memory.

::: accordion UC for Teams Datasheet
*Collateral image — coming soon*
:::

::: accordion Phone Comparison
*Collateral image — coming soon*
:::



---



# Competitive Positioning (`competitive-positioning`)



---

id: "competitive-positioning"
title: "Competitive Positioning"
summary: "Discovery before claims; map competitor → GPC response with proof; landmines; metro / fiber vs LEO / M&A / tech battle-card patterns; pull SE/PM when depth matters."
sensitivity: "public"
reference_files:

- label: "Product battle cards"
sharepoint_url: "[https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx#product-battle-cards](https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx#product-battle-cards)"
- label: "Competitive battle cards"
sharepoint_url: "[https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx#competitive-battle-cards](https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx#competitive-battle-cards)"
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

## roleplay:
  persona: "Entrenched IT Manager"
  scenario: "Currently with a national carrier who just dropped their price at renewal. Demands a spec-for-spec speed comparison and says local doesn't matter anymore."
  goal: "Run discovery on application pain, TCO of outages, and local support gaps before presenting any GPC comparison—never lead with price or unverified stats."

## Elevator Pitch

GPC wins competitive deals by earning the right to compare—not by attacking. The framework is simple: **discover first, then map every GPC claim to the customer's stated pain.** Local fiber, a 24/7 NOC, owned redundancy, and a full portfolio (access → WAN → security → apps) are your proof points. Generic superiority claims lose; outcome-led, discovery-grounded responses win.

::: accordion M&A / Cox Acquisition Battle Card
Reference for positioning against acquisition-driven competitors—stability, service continuity, and factual comparison points.

*Collateral image — coming soon*
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


| Objection                                                       | Pivot                                                                                                                    |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **"The national carrier is cheaper."**                          | Tie to TCO: cost of an hour down, support model, redundancy depth, rate stability—not price alone. No verbal exceptions. |
| **"Starlink/satellite is good enough."**                        | Acknowledge coverage; pivot to latency, weather risk, SLA for VoIP/telehealth, and predictable symmetrical paths.        |
| **"We already ran a speed test—your fiber looks the same."**    | Speed tests measure a moment; position reliability, jitter, upload symmetry, and NOC response for business apps.         |
| **"Your competitor just got acquired—that makes them bigger."** | Respond factually: stability, billing continuity, field response—GPC continuity themes. No gossip.                       |
| **"I need to see the battle-card numbers."**                    | Share collateral through approved channels; verify year/scope before any external citation.                              |


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


| Topic                           | Counter with                                                                                                  |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **Metro / local**               | Install quality, support model, redundancy, owned vs leased, rate stability—not price alone                   |
| **Fiber vs LEO**                | Weather, jitter, congestion; fiber = predictable latency, symmetrical enterprise paths, pro install + support |
| **M&A / churn**                 | Stability, billing, field response—factual; GPC continuity themes                                             |
| **Tech cards (SD-WAN pattern)** | Profile → pain → GPC wrap → qualifying Qs → proof; verify awards; SE validates design                         |


::: accordion Fiber vs LEO Satellite Battle Card
Side-by-side comparison of fiber vs Starlink/LEO—latency, weather risk, SLAs, and enterprise support.

*Collateral image — coming soon*

*Collateral image — coming soon*
:::

::: accordion Ethernet Competitive Battle Card
Key differentiators for Ethernet positioning—use alongside the tech-card pattern when qualifying multi-site WAN opportunities.

*Collateral image — coming soon*
:::



---



# Account Based Marketing (`account-based-marketing`)



---

id: "account-based-marketing"
title: "Account Based Marketing"
summary: "C-level ABM: a disciplined 90-day prospecting sequence—sales touches, marketing air cover, and alignment with Constellation-CRM—plus the reference sequence chart."
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

## Sales prospecting lane

The Gantt shows **eighteen touches** staggered across three months: intros, calls, LinkedIn actions, case studies, meeting asks, OBR tie-ins, alignment, and close-out steps. Stacked bars in a single month are intentional—reps need to see **density** without guessing order.

## Marketing air cover

Month 1 emphasizes **awareness** (e.g. LinkedIn & paid search). Month 2 adds **validation** (e.g. direct mail). Month 3 focuses **conversion** (e.g. retargeting). Optional creative (brochure copy) is called out where it supports the same story.

## Next steps for your documentation

Replace placeholder paragraphs above with your **final narrative**, **owner names**, **links to playbooks**, and **MQL/SQL definitions** as your internal docs solidify. Update `assets/gantt/abm-90-day-sequence.png` when the chart changes.



---



# Operational Business Reviews (`operational-business-reviews`)



---

id: "operational-business-reviews"
title: "Operational Business Reviews"
summary: "The 21-day OBR cycle: recon through print & assembly—with clear swim lanes for account rep, design, data, marketing, and production—plus the reference timeline chart."
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

## 21-day OBR cycle

OBR process: 21-day strategic cycle (reference Gantt)

## How to use this module

1. Walk new hires through **phases** below so they know who does what before the meeting.
2. Refer to the **21-day cycle** chart above for the swim-lane view used in your SOP.
3. Cross-link to **Account Based Marketing** when discussing how executive outreach feeds review readiness.

## Phases (high level)

- **Initiation:** Recon audit and scheduling the OBR—owned by the account rep in the model chart.
- **Design:** Kickoff and network diagram work—labeled against your design owner in the source doc.
- **Data:** Parallel billing and NOC history pulls so the story is grounded in fact.
- **Marketing:** Format, layout, and review of customer-facing materials after the day-14 handoff.
- **Production:** Print and assembly leading into the OBR meeting milestone.

## Next steps for your documentation

Swap in your **real RACI**, **tool names**, and **approval gates** as the written SOP matures. Update `assets/gantt/obr-21-day-cycle.png` when the chart changes.



---



# Executive Map Book (`map-book`)

*No `modules/map-book/content.md`. Map book uses `map-book/embed.html` and `map-book/content.json`.*

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

