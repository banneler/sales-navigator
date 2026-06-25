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
  - **What you’re selling:** Cloud UC — cloud PBX, SMS/MMS, HD meetings, AI assistant, meeting recap, call recap, and dependable call quality/uptime.
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

- **UCaaS Platform:** 100+ business voice features, SMS/MMS, chat, HD meetings, and strong call-quality/uptime positioning.
- **MS Teams Integration:** UC for Teams brings cloud PBX, SMS, and advanced calling into a Teams-centered workflow. SE validates licensing and design before you promise the experience.
- **Contact Center:** Omnichannel contact center for voice, chat, email, and SMS/WhatsApp depending on tier/add-ons. Licensed by concurrent seats.
- **AI Features:** AI Assistant, AI Call Recap, AI Meeting Recap, and AI Agent Evaluator support productivity, summaries, sentiment/topic highlights, and coaching workflows.

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
