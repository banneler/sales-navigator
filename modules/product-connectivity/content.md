---
id: product-connectivity
title: Connectivity & Access
summary: Internet access. Transport. Layer 2 vs Layer 3. Dark Fiber.
sensitivity: internal
reference_files:
  - label: Product Collateral (connectivity & access)
    sharepoint_url: 'https://gpcom.sharepoint.com/sites/gpcSales/Product%20Collateral/Forms/AllItems.aspx?viewid=855b9d9a%2D724a%2D4ba1%2D876e%2D2325aaaf29e5'
discovery_questions:
  - 'Are your employees primarily downloading data, or are they constantly uploading large files to cloud servers?'
  - 'How many physical locations do you have, and do they need to share private data directly with each other?'
  - What happens to your customer experience if there is a 500-millisecond delay on your voice and video calls?
  - 'What are your most critical applications day to day, and how much upstream bandwidth do they require?'
  - 'How are sites connected today—shared broadband, MPLS, Ethernet, or SD-WAN—and when do those contracts renew?'
  - 'Is the customer asking for a managed service from GPC, or do they want to light and operate their own fiber electronics?'
five_minute_summary: |
  - **SIA vs DIA:** Standard Internet (SIA) is for flexible, cost-sensitive needs on shared infrastructure. Dedicated Internet (DIA) is mandatory when they need symmetrical bandwidth, SLA-grade operations, and guaranteed throughput.
  - **Transport vs. Internet:** Transport moves customer traffic privately between locations or networks. Internet access connects the customer to the public IP world.
  - **Layer 2 vs. Layer 3:** Layer 2 Ethernet feels like extending the customer’s LAN between sites. Layer 3/IP routes traffic between networks and is where internet service lives.
  - **Optical capacity:** Fiber optic transport and wavelength services are high-capacity optical paths for data centers, hubs, and heavy replication workloads—not the default branch-office answer.
  - **Dark Fiber:** Unlit fiber. The customer brings the electronics and lights the service; GPC provides the physical fiber path and maintenance model.
knowledge_checks:
  - question: "A regional accounting firm needs to reliably upload massive tax files to the cloud. Which access product do you pitch?"
    options:
      - "Standard Internet Access (SIA). It's cheaper and downstream speed is all that matters."
      - "Managed Ethernet. They should just build a private network to the cloud."
      - "Dedicated Internet Access (DIA). They need the guaranteed symmetrical upload speeds."
    correct_index: 2
    explanation: "Heavy upload requirements and critical cloud apps demand the symmetrical SLA of DIA."

  - question: "When is Managed Ethernet the correct solution?"
    options:
      - "When they want the fastest possible public internet connection."
      - "When a customer needs private, secure, site-to-site connectivity without hitting the public internet."
      - "When they have remote workers who need to VPN into the office."
    correct_index: 1
    explanation: "Ethernet is for private Layer 2 transport between physical locations."

  - question: "A customer wants two buildings to behave like they are on the same private network without sending traffic over the public internet. What product family are you likely discussing?"
    options:
      - "Layer 2 Ethernet transport."
      - "Standard Internet Access."
      - "Public Wi-Fi with a VPN client."
    correct_index: 0
    explanation: "Layer 2 Ethernet transport is for private site-to-site connectivity. Internet access is Layer 3/IP service to the public internet, even when it is delivered over fiber."

  - question: "A technical buyer asks for Dark Fiber. What are they really asking for?"
    options:
      - "A public internet service with extra DDoS protection."
      - "An unlit fiber path they will light with their own electronics."
      - "A managed Layer 3 routing service between all locations."
    correct_index: 1
    explanation: "Dark Fiber is not a lit service. The customer is responsible for the electronics and for lighting the service; GPC's role is the physical fiber path and the applicable maintenance arrangement."

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
- **Dark Fiber:** Unlit fiber for sophisticated buyers who want to own the electronics and light the path themselves.
- **Pricing:** Keep your pricing internal. Always quote through the standard tools, never throw out "napkin math."

---

## Pitch

::: elevator [Elevator Pitch]
Your network shouldn't be the reason your video calls drop or your cloud apps lag. We match the right fiber access to your actual business needs—whether that's dedicated, symmetrical internet for perfect voice quality, or private, high-capacity transport between your data centers.
:::

---

## Discovery Galaxy

<div class="mt-4 rounded-2xl border border-emerald-200/80 overflow-hidden bg-slate-50 shadow-sm">
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

::: flip ["I just need internet between my two offices."]
Clarify the word "internet." If they mean public web access at both locations, talk SIA or DIA. If they mean private traffic between sites, you are in a transport conversation.
:::

::: flip ["We use VPNs over our internet to connect our offices. Why buy Ethernet?"]
VPNs over public internet are subject to public internet traffic jams. Managed Ethernet provides a private, secure lane strictly for your data, lowering latency and massively increasing security between your sites.
:::

::: flip ["We want Dark Fiber, not a managed service."]
That is a different conversation. Dark Fiber means the customer lights the path with their own electronics, so qualify whether they have the technical team, route requirements, strand count, and maintenance expectations to own that responsibility.
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

**Core definitions — the words reps need to hear clearly**

- **Transport:** A private connection that moves customer traffic between places—site to site, site to data center, or site to carrier/cloud handoff. The buyer is usually asking for control, privacy, performance, or predictable paths.
- **Fiber optic / optical:** The physical medium and optical service layer that carries light over glass. In sales language, use "fiber" for access conversations and "optical transport" or "wavelength" when the buyer needs very high-capacity point-to-point paths.
- **Dark Fiber:** Unlit fiber. GPC provides the physical fiber path; the customer supplies the optical electronics, lights the service, and owns the technical design above the strand. It is for sophisticated network teams, carriers, data centers, and large enterprises that want control over capacity and equipment—not a normal managed internet replacement.
- **Layer 2 Ethernet:** A private Ethernet service that extends the customer’s network between locations. The customer usually manages the IP addressing/routing above it, while GPC provides the Ethernet path.
- **Layer 3 / IP:** Routed networking. IP decides how packets move between networks; internet access is a Layer 3/IP service because traffic routes into the public internet.
- **Internet:** Public IP connectivity to the broader internet. SIA and DIA are internet access products, not private site-to-site transport.

**Ethernet service types — how the acronyms differ**

| Term | Plain-English meaning | Customer use case |
| --- | --- | --- |
| **E-Line** | Point-to-point Ethernet between two locations | Connect HQ to a data center or a major branch |
| **E-LAN** | Multipoint Ethernet where several sites participate in the same private Ethernet domain | Many sites need private any-to-any communication |
| **EPL** | Ethernet Private Line; dedicated point-to-point Ethernet with less customer VLAN sharing | High-control, high-performance private connection |
| **EVPL** | Ethernet Virtual Private Line; point-to-point Ethernet using VLAN-based separation | Similar point-to-point need with more flexible/shared infrastructure |

**Dark Fiber sales guardrails:**

- Dark Fiber is **not a lit service**; the customer must add the electronics and light it themselves.
- There are two commercial paths: **Dark Fiber Lease** (5+ years, MRC, includes GPC maintaining the fiber) and **Dark Fiber IRU** (10+ years, NRC, with GPC fiber maintenance as a separate product).
- Collaborate with a Sales Engineer early. Sales submits a pricing request because Dark Fiber products are not pre-priced in the system.
- Get details before you promise anything: A location, Z location, route, fiber mileage, number of strands, customer requirements, and any route-specific requests.

**The rep translation:** if the customer is asking, "How do I get to the internet?" think SIA/DIA. If they are asking, "How do my locations talk privately?" think Ethernet/transport. If they are asking, "Can we light our own fiber?" think Dark Fiber plus SE validation. If they are asking, "How do I move huge volumes between hubs?" think optical/wavelength.

**Wavelength vs Ethernet:**
- Ethernet is typically sold in sub-10G increments and is highly flexible for multi-site WANs.
- Wavelength is a raw, dedicated optical channel (typically 10G, 100G, or 400G) designed for massive point-to-point data replication between data centers. Do not pitch Wavelength to a standard enterprise branch.
