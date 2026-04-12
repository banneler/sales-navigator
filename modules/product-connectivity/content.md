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
    explanation: "Use the comparison sheet—don’t assume."

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

  - question: "What problem does E-LAN (Ethernet LAN) address in the module’s framing?"
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
  - title: "Branch complains about VPN and video over ‘business broadband’"
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
---

## Access stack

| Layer | Role |
| --- | --- |
| **SIA** | Shared, flexible, cost-sensitive |
| **DIA** | Dedicated, symmetrical, stronger DDoS/NOC posture |
| **Ethernet** | Private L2 (E-Line/EVPL/E-LAN) |
| **Wave** | L1 optical DC/hub links—not “more Internet” |

**When to lead:** **SIA** = budget + tolerable shared path.**DIA** = symmetry, SLA-ish ops, diversity, VoIP/video pain on shared access.**Ethernet** = site-to-site private.**Wave** = big optical P2P when discovery proves it—not branch Wi‑Fi default.

**Discovery (short):** critical apps; upload vs download; static IPs / diversity; incumbent access; outages.

**Collateral:** DIA/SIA/Ethernet/Wave sheets—**Sales Resources**.

---

## DIA vs SIA

Use the **comparison sheet** for scale, IPs, DDoS, latency, support—**SIA ~2 Gbps** vs **DIA to 100 Gbps** symmetrical in that doc.

---

## Competitive (fiber vs satellite)

Acknowledge satellite constraints (weather, latency, jitter). Contrast **fiber**: reliability, stable latency, symmetrical enterprise paths, local + NOC support. No trash talk—**validated design**.

**Collateral:** fiber vs Starlink / Ethernet battle cards—**Sales Resources**.

---

## Pricing & nuance [deep]

Quotes = **standard tools + approvals**. DIA/SIA/Ethernet/Wave pricing via **quoting** + **Sales Resources**—involve AE/pricing when scope is fuzzy.

---

## Media (optional) [deep]

*Guidde:* bandwidth qualification or quoting handoff.
