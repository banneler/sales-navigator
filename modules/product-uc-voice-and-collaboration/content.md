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
