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

**Beating Starlink (LEO Satellite):**
- **The Physics:** LEO is better than legacy satellite, but it still cannot match the consistent sub-10ms latency of a local fiber network.
- **The Weather:** "Rain fade" is a physical reality for satellite. Heavy cloud cover or storms will degrade the signal.
- **The SLA:** Starlink is best-effort. GPC fiber is backed by an enterprise Service Level Agreement and a local 24/7 NOC.

**Wavelength vs Ethernet:**
- Ethernet is typically sold in sub-10G increments and is highly flexible for multi-site WANs.
- Wavelength is a raw, dedicated optical channel (typically 10G, 100G, or 400G) designed for massive point-to-point data replication between data centers. Do not pitch Wavelength to a standard enterprise branch.
