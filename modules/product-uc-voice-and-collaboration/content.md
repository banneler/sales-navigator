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
  - **The Microsoft Teams Play:** This is our golden goose. We embed our UC voice platform directly into Microsoft Teams. The massive differentiator? The customer does not have to buy the expensive Microsoft Teams Phone license to use our embedded app.
  - **The Bundle:** Our platform (powered by Intermedia) includes enterprise calling, SMS/MMS, HD meetings, and AI recaps on a 99.999% uptime foundation.
  - **Contact Center:** We sell an omnichannel CX add-on (Voice, SMS, chat). Licensing is concurrent, meaning they only pay for the maximum number of agents logged in at the same time, not a named license for every single employee.
  - **Legacy:** We still support SIP and PRI for customers who aren't ready to move fully to the cloud, but the goal is always to pivot to UCaaS.
knowledge_checks:
  - question: A prospect wants to add external calling to Microsoft Teams. They think they need to buy Microsoft's 'Teams Phone' add-on license for every user. Are they right?
    options:
      - 'No. With our embedded UC for Teams solution, they get full calling and SMS inside Teams without needing to buy the Microsoft Teams Phone license.'
      - 'Yes. Microsoft requires the Teams Phone license for any external calling, regardless of the provider.'
      - 'No, but they do need to buy the Microsoft E5 enterprise license first.'
    correct_index: 0
    explanation: This is our primary competitive advantage. We save them the Microsoft licensing fee while delivering a better voice network.
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
scenarios:
  - title: The Microsoft Native Trap
    situation: |
      An IT Director tells you, "We are just going to buy Microsoft's native calling plan. It's easier to keep everything with one vendor."
    choices:
      - label: Concede the point. Microsoft is too big to compete against for voice.
        feedback: 'You just lost a massive revenue opportunity. Microsoft is a software company, not a telecom carrier. They struggle with complex routing, support, and uptime.'
      - label: 'Challenge the uptime and support. Ask them who they are going to call when a port fails or a call drops. Remind them our solution sits inside Teams, saves them the MS licensing fee, and gives them a 99.999% SLA with a local NOC.'
        feedback: Correct. Pivot away from software convenience and anchor on voice reliability and support.
roleplay:
  persona: Operations Manager at a 75-person professional services firm
  scenario: Stuck on an aging on-prem PBX that's out of warranty. The IT team uses Teams for chat and meetings but nobody can make external calls from it. Assumes replacing the PBX means buying new desk phones and a server.
  goal: 'Position GPC''s cloud UC as the modern replacement—no on-prem server, enterprise-grade features from Teams or the native softphone, and a clear explanation of **Ascend with Teams** licensing vs when **embedded FAQ** positioning (no Teams Phone license vs Direct Routing) might apply—SE validates.'
---

## At a glance

- **UCaaS Platform:** 100+ business voice features, SMS, chat, HD meetings. 99.999% uptime.
- **MS Teams Integration:** Embedded directly in the Teams app. **No MS Teams Phone license required.** Provides failover (if Teams goes down, our app stays up).
- **Contact Center:** Omnichannel (Voice, SMS, Chat). Concurrent licensing model.
- **AI Features:** AI call recaps, sentiment analysis, and supervisor-assist tools are built-in.

---

## Pitch

::: elevator [Elevator Pitch]
Voice deals almost always collide with Microsoft Teams. We have to own that conversation before licensing surprises kill the deal. This module breaks down our 99.999% uptime cloud platform—combining calling, SMS, meetings, and file sharing. We'll clarify exactly how our PBX embeds into Teams, saving them massive Microsoft licensing costs. For the Contact Center, we cover concurrent licensing and why you must hand burst capacity to your AE instead of doing napkin math on a call. Get the licensing straight, and let's go modernize some phone systems.
:::

---

## Discovery Questions

- "How are your employees currently making external phone calls when they are working remotely?"
- "You mentioned using Microsoft Teams. Are you currently paying for the Teams Phone add-on license, or are you looking for a more cost-effective way to integrate voice?"
- "For your customer service team, do you have visibility into metrics like hold times, abandoned calls, and agent performance?"

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

**The Teams Embedded Advantage:**
- Only ~6% of Microsoft Teams users actually use Teams Phone, because Microsoft's native calling is expensive and lacks advanced PBX features.
- Our solution (via Intermedia) uses an embedded app approach. It places a dial pad directly inside the Teams interface.
- Because it is an app and not a Direct Routing setup, the customer avoids the Microsoft Teams Phone license requirement.

**Contact Center (CCaaS):**
- Deep integrations with CRMs (Salesforce, Zendesk, HubSpot) for automatic screen pops.
- "Concurrent" means if they have 50 total employees, but only 10 answer phones at any given time, they only buy 10 licenses.
- Do not attempt to quote high-volume burst capacity or complex IVR routing on your own. Bring in your SE immediately.
