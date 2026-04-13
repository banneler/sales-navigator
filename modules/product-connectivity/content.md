---
id: "product-connectivity"
title: "Connectivity & Access"
summary: "SIA/DIA, Managed Ethernet, Wave, fiber vs satellite framing; internal pricing via quoting only."
sensitivity: "public"
reference_files:
  - label: "Sales Resources (product collateral)"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx"
five_minute_summary: |
  - **SIA** = shared, cost-flexible; **DIA** = dedicated, symmetrical, stronger ops/DDoS—use comparison sheet for numbers.
  - **Ethernet** = private L2 site-to-site (E-Line/E-LAN); **Wave** = L1 optical hub/DC pipes—not Internet access.
  - **Competitive:** fiber vs satellite on reliability/latency/weather; discovery first.
  - Training PDFs = **internal** until quoting approves customer numbers.

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

| Objection | Pivot |
| --- | --- |
| **"Just bump up our shared Internet—that'll fix the jitter."** | More shared bandwidth doesn't guarantee upload symmetry or latency. Qualify what's actually causing jitter—often it's the shared nature, not raw capacity. DIA is the right answer for VoIP and cloud workloads. |
| **"DIA is too expensive."** | Frame TCO: what does an hour of dropped VoIP calls, failed payment processing, or inaccessible cloud ERP cost? DIA delivers dedicated symmetry and a stronger ops posture. |
| **"Starlink is cheaper for our rural stores."** | Acknowledge coverage; then qualify: does payment processing or VoIP tolerate 20–40ms variable latency, weather disruptions, or congestion during peak hours? Fiber delivers predictable, stable paths. |
| **"We already have MPLS—why change?"** | Ask when the contract expires and what it costs vs. throughput. SD-WAN over DIA often delivers better performance at lower cost with cloud breakout capability. |
| **"I don't understand the difference between Ethernet and DIA."** | DIA = your Internet connection to the world. Ethernet = private Layer 2 pipe between your own sites. They solve different problems and often work together. |

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
*Collateral image — coming soon*
:::

::: accordion Ethernet Battle Card
*Collateral image — coming soon*
:::

::: accordion Fiber vs Starlink Battlecard
*Collateral image — coming soon*

*Collateral image — coming soon*
:::
