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
  - What happens to your customer experience when latency disrupts voice and video calls?
  - 'What are your most critical applications day to day, and how much upstream bandwidth do they require?'
  - 'How are sites connected today—shared broadband, MPLS, Ethernet, or SD-WAN—and when do those contracts renew?'
  - 'Is the customer asking for a managed service from GPC, or do they want to light and operate their own fiber electronics?'
five_minute_summary: |
  - **SIA vs DIA:** Standard Internet (SIA) is the cost-sensitive shared option, with symmetrical and asymmetrical speeds up to 2 Gbps. Dedicated Internet (DIA) is the better fit when the customer needs dedicated bandwidth, symmetrical speeds up to 100 Gbps, NOC support, and stronger service commitments.
  - **Transport vs. Internet:** Transport moves customer traffic privately between locations or networks. Internet access connects the customer to the public IP world.
  - **Layer 2 vs. Layer 3:** Layer 2 Ethernet feels like extending the customer’s LAN between sites. Layer 3/IP routes traffic between networks and is where internet service lives.
  - **Optical capacity:** Fiber optic transport and wavelength services are high-capacity optical paths for data centers, hubs, and heavy replication workloads—not the default branch-office answer.
  - **Dark Fiber:** Unlit fiber. The customer brings the electronics and lights the service; GPC provides the physical fiber path and maintenance model.
knowledge_checks:
  - question: "A regional accounting firm needs to reliably upload massive tax files to the cloud. Which access product do you pitch?"
    options:
      - "Standard Internet Access (SIA). It's cheaper and downstream speed is all that matters."
      - "Managed Ethernet. They should just build a private network to the cloud."
      - "Dedicated Internet Access (DIA). They need dedicated, symmetrical bandwidth for critical uploads."
    correct_index: 2
    explanation: "Heavy upload requirements and critical cloud apps point to DIA because it provides dedicated bandwidth, symmetrical speeds, and stronger service commitments."

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

  - question: "Which customer is the best fit for Wavelength services?"
    options:
      - "A small office that needs basic web browsing and email."
      - "A data center or enterprise location that needs dedicated, low-jitter Layer 1 transport at 10G, 100G, or 400G."
      - "A remote worker who needs a VPN client."
    correct_index: 1
    explanation: "Wavelength is optical point-to-point Layer 1 transport for data-intensive locations such as data centers, enterprise sites, and storage environments."

scenarios:
  - title: The SIA Squeeze
    situation: |
      A medium-sized logistics company is complaining about their current cable provider dropping VoIP calls. They want a quote for your cheapest internet option (SIA).
    choices:
      - label: Quote the SIA to win the business easily.
        feedback: 'You have not solved the stated problem. Public internet traffic can see variable packet loss, delay, and jitter, and that can disrupt real-time voice and video. Qualify the need for DIA or private transport before leading with the cheapest option.'
      - label: 'Explain the performance risk, then quote DIA if they need dedicated bandwidth, low latency, symmetrical speeds, and NOC-backed service commitments.'
        feedback: 'Correct. Solve the actual technical problem, not just the lowest-price request.'
roleplay:
  persona: Skeptical IT Director
  scenario: Complaining about VPN jitter and dropped calls over a competitor's shared broadband at three branch locations. Wants the cheapest fix to replace the competitor, and you need to determine whether to quote GPC's Standard Internet (SIA) or step them up to Dedicated Internet (DIA) for dedicated bandwidth and stronger service commitments.
  goal: 'Pivot from price to reliability—qualify the symmetry, latency, and site-to-site requirements for VoIP and cloud apps, then position DIA or Managed Ethernet when those requirements call for more than shared internet.'
---

## At a glance

- **SIA (Standard Internet):** Shared internet access with symmetrical and asymmetrical options up to 2 Gbps. Good when budget matters and the workload can tolerate best-effort performance objectives.
- **DIA (Dedicated Internet):** Dedicated, symmetrical internet up to 100 Gbps with NOC support, service commitments, static IPs, and available proactive DDoS monitoring and mitigation.
- **Ethernet:** Private Layer 2 transport for connecting customer locations without sending that traffic across the public internet.
- **Wavelength:** Dedicated Layer 1 optical transport from 10G to 400G for data centers, enterprise locations, and storage-heavy networks.
- **Dark Fiber:** Unlit fiber for sophisticated buyers who want to own the electronics and light the path themselves.
- **Pricing:** Keep your pricing internal. Always quote through the standard tools, never throw out "napkin math."

---

## Pitch

::: elevator [Elevator Pitch]
Before we quote access, let's pin down what breaks when upload chokes or a circuit drops. GPC can support cost-sensitive internet access, dedicated symmetrical internet for critical applications, private Ethernet between locations, and high-capacity optical transport for the largest data movement needs.
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
I understand the budget concern. Before we quote the lowest-cost option, let's look at what is causing the pain. If voice, video, cloud backups, or other critical apps need consistent upload, low latency, and dedicated bandwidth, DIA is the right SKU—not shared best-effort.
:::

::: flip ["I just need internet between my two offices."]
Clarify the word "internet." If they mean public web access at both locations, talk SIA or DIA. If they mean private traffic between sites, you are in a transport conversation.
:::

::: flip ["We use VPNs over our internet to connect our offices. Why buy Ethernet?"]
VPNs over public internet can still run into variable packet loss, delay, and jitter. Managed Ethernet gives those sites a private Layer 2 path, which is a better fit when the customer wants predictable site-to-site performance without sending branch traffic across the public internet.
:::

::: flip ["We want Dark Fiber, not a managed service."]
That is a different conversation. Dark Fiber means the customer lights the path with their own electronics, so qualify whether they have the technical team, route requirements, strand count, and maintenance expectations to own that responsibility.
:::

</div>

---

## Technical Deep Dive [deep]

**SIA vs DIA Qualifiers:**
- If voice, video, cloud backups, or business-critical SaaS depends on consistent upload and low latency, lead with **DIA**.
- Keep **SIA** in the conversation when cost is the top driver and the customer can live with shared access and best-effort performance objectives.

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
| **E-Line** | Layer 2 point-to-point or point-to-multipoint Ethernet between customer locations | Connect HQ to a data center or major branch; support hub-and-spoke designs |
| **E-LAN** | Layer 2 multipoint-to-multipoint Ethernet with full mesh connectivity | Several sites need private any-to-any communication |
| **EPL** | Ethernet Private Line; point-to-point, port-based service where customer traffic is delivered with minimal modification | High-control, high-performance private connection |
| **EVPL** | Ethernet Virtual Private Line; point-to-point or point-to-multipoint VLAN-based service where GPC manages the VLANs | Multi-site or hub-and-spoke connectivity with VLAN-based separation |

**Dark Fiber sales guardrails:**

- Dark Fiber is **not a lit service**; the customer must add the electronics and light it themselves.
- There are two commercial paths: **Dark Fiber Lease** (5+ years, MRC, includes GPC maintaining the fiber) and **Dark Fiber IRU** (10+ years, NRC, with GPC fiber maintenance as a separate product).
- Collaborate with a Sales Engineer early. Sales submits a pricing request because Dark Fiber products are not pre-priced in the system.
- Get details before you promise anything: A location, Z location, route, fiber mileage, number of strands, customer requirements, and any route-specific requests.

**The rep translation:** if the customer is asking, "How do I get to the internet?" think SIA/DIA. If they are asking, "How do my locations talk privately?" think Ethernet/transport. If they are asking, "Can we light our own fiber?" think Dark Fiber plus SE validation. If they are asking, "How do I move huge volumes between hubs?" think optical/wavelength.

**Wavelength vs Ethernet:**
- Ethernet is the flexible Layer 2 answer for private customer-location connectivity, including point-to-point, point-to-multipoint, and multipoint designs.
- Wavelength is dedicated, non-shared Layer 1 optical transport from 10 Gbps to 400 Gbps for data-intensive locations such as data centers, enterprise sites, and storage environments. Do not pitch it as a normal branch internet replacement.
