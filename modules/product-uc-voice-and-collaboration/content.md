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
  - **What you’re selling:** Cloud UC (Intermedia) — voice, SMS/MMS, HD meetings, AI recaps; **99.999%** uptime line.
  - **Seat / plan ladder:** Match **workload**, not company size; tiers **mix per user**. Typical blend: lobby/resource lines + reception Express + floor Pro + HQ Enterprise.
    - **Resource Line** — one concurrent endpoint, no apps (lobby, conference room, front desk that only needs to ring).
    - **Express** — voice only.
    - **Essentials** — voice + video (25), AI recap, recording.
    - **Pro** — adds inbound call center features, CRM integrations, video (100).
    - **Enterprise** — Pro + video (200) + **200 GB** storage.
  - **Contact center:** **CCaaS** = omnichannel add-on (voice, SMS, chat), **concurrent** agent seats. **UC Pro/Enterprise** already include strong **inbound** queue/supervisor tooling — CCaaS is the separate omnichannel product when they need that scope.
  - **Microsoft Teams (two paths — don’t blend in one pitch):** Customer picks the experience; **SE validates.**
    - **Embedded UC:** GPC dial pad inside Teams; **no** MS Teams Phone license.
    - **Ascend with Teams / Direct Routing:** Native Teams dialer; **MS Teams Phone license required**.
  - **Legacy:** SIP/PRI still available; steer toward UCaaS over time.
knowledge_checks:
  - question: "A prospect wants to add external calling to Microsoft Teams. They think they need to buy Microsoft's 'Teams Phone' add-on license for every user. Are they right?"
    options:
      - "No. Embedded UC is the only Teams path we sell, and it never requires a Microsoft Teams Phone license."
      - "It depends. Embedded UC can avoid the license; Direct Routing/native Teams dialing requires it."
      - "Yes. Any Teams calling path requires the Microsoft Teams Phone license before GPC can quote."
    correct_index: 1
    explanation: "There are two different technical paths. Never guarantee 'no MS licensing' until an SE validates which path the customer actually wants."

  - question: "How is our Contact Center (CCaaS) product licensed?"
    options:
      - "Named user licensing. They pay a fee for every single employee in the company."
      - "Concurrent licensing. They pay for the maximum number of agents logged in simultaneously."
      - "Per-minute billing. They only pay for the time agents spend actively talking."
    correct_index: 1
    explanation: "Concurrent licensing is a massive cost-saver for businesses with shift workers or part-time agents."

  - question: "A customer experiences a complete Microsoft 365 outage and Teams goes down. What happens to their phones if they use our embedded UC solution?"
    options:
      - "Their phones go down completely until Microsoft fixes the issue."
      - "They can still make and receive calls using our standalone desktop or mobile UC app. We provide continuity when Teams fails."
      - "Calls are automatically forwarded to their personal cell phone voicemails."
    correct_index: 1
    explanation: "Because our voice infrastructure is separate from Microsoft's, a Teams outage doesn't take down their ability to communicate."

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
    explanation: "Resource Line is the standalone-endpoint floor (one concurrent line, no apps, for lobby / conference-room / common-area phones). Everything above it scales by video participants, storage, call-center features, and CRM integrations."
    source: "UC Plan Comparison - Internal use only 2026.pdf"

  - question: "A customer needs 40 omnichannel agents with outbound calling, supervisor monitor/whisper/barge, queued callback, and post-call surveys. Which CCaaS tier do you anchor the quote on?"
    options:
      - "CC Pro — Pro is the default; Elite is just a marketing tier."
      - "UC Pro's Advanced Hunt Groups — same feature set, lower cost."
      - "CC Elite — the listed supervisor, outbound, callback, and survey needs point above Pro."
    correct_index: 2
    explanation: "Both tiers are concurrent-seat licensed and both are omnichannel-capable, but supervisor coaching, outbound dialer, callback, and post-call surveys are explicit Elite-tier capabilities. Quoting Pro for an outbound-heavy or supervisor-coaching workload creates a feature-gap fight at install."
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
- **MS Teams Integration:** Two paths, two licensing stories. SE validates the path before you promise the experience.
  - **Embedded UC:** GPC dial pad inside Teams; can avoid the MS Teams Phone license.
  - **Direct Routing / native Teams dialing:** Uses the native Teams dialer; MS Teams Phone license required.
- **Contact Center:** Omnichannel (Voice, SMS, Chat). Concurrent licensing model.
- **AI Features:** AI call recaps, sentiment analysis, and supervisor-assist tools are built-in.

---

## Pitch

::: elevator [Elevator Pitch]
We replace aging phone systems with a single, secure cloud platform. Whether your team lives in Microsoft Teams or needs a full customer contact center, we give you voice, SMS, and video meetings with 99.999% uptime, so your team can work from anywhere without dropping the ball.
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

**The Teams Embedded Advantage:**
- Many organizations standardize on Teams for chat and meetings without adopting Teams Phone for enterprise voice, often because native calling changes licensing, PBX features, and support expectations.
- Our solution (via Intermedia) uses an embedded app approach. It places a dial pad directly inside the Teams interface.
- Because it is an app and not a Direct Routing setup, the customer avoids the Microsoft Teams Phone license requirement.

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
