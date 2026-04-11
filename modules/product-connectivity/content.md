---
id: "product-connectivity"
title: "Connectivity & Access"
summary: "Training organized by topic: access strategy, DIA vs SIA, Managed Ethernet, Wavelength (Wave), competitive positioning, and internal pricing references."
sensitivity: "public"
reference_files:
  - label: "Sales Resources (product collateral)"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx"
five_minute_summary: |
  - **Access** frames how traffic reaches the customer: **SIA** for flexible, cost-sensitive shared access; **DIA** for symmetrical, dedicated paths, richer DDoS support, and NOC-style operations.
  - **Managed Ethernet** is private **Layer 2** site-to-site transport (E-Line/E-LAN); **Wave** is **Layer 1** optical for high-capacity DC/hub links—not a substitute for Internet access.
  - **DIA vs SIA** differs on scale (e.g. SIA up to ~2 Gbps symmetrical in the comparison vs DIA to **100 Gbps**), static IPs, latency posture, diversity options, and support model—qualify with apps, upload needs, and outages.
  - **Competitive**: contrast **fiber** to satellite on reliability, latency, and weather; keep discovery tight and avoid trashing competitors—anchor on validated design and outcomes.
  - **Pricing PDFs** in training are **internal**; customer quotes come from standard tools and approved numbers.
knowledge_checks:
  - question: "When should you lead with Dedicated Internet Access (DIA) over Standard Internet Access (SIA)?"
    options:
      - "Whenever the customer wants the cheapest option regardless of workload."
      - "When they need symmetrical heavy use, SLA-style operations, diversity, stronger DDoS visibility, or have outgrown shared/best-effort access."
      - "Only when they have no fiber at the site."
    correct_index: 1
    explanation: "The module positions DIA for performance, operations, symmetry, and richer security/support—not for minimum cost."
  - question: "What is Managed Ethernet primarily for?"
    options:
      - "Private Layer 2 connectivity between sites (not Internet breakout), with EPL/EVPL and E-LAN options."
      - "Replacing all voice systems with UC only."
      - "Consumer-grade Wi-Fi in the office."
    correct_index: 0
    explanation: "Ethernet is private site-to-site transport; Internet access is a different conversation (DIA/SIA)."
  - question: "What is Wavelength (Wave) best positioned for?"
    options:
      - "Small-branch guest Wi-Fi only."
      - "Layer 1 optical, high-capacity point-to-point between strategic endpoints (e.g., DC/hub), not as a substitute for DIA/SIA Internet."
      - "Email hosting for ten users."
    correct_index: 1
    explanation: "Wave is big-pipe optical transport; qualify Internet vs private transport and involve quoting teams for internal pricing."
  - question: "Per the DIA vs SIA comparison in this module, which statement is accurate?"
    options:
      - "SIA and DIA both scale to the same documented maximum in the comparison sheet."
      - "In the comparison, SIA tops out around 2 Gbps symmetrical while DIA scales up to 100 Gbps symmetrical—use that to frame scale and growth."
      - "SIA always includes richer customer-specific DDoS monitoring than DIA."
    correct_index: 1
    explanation: "Use the comparison sheet for scale, IP counts, latency posture, support model, and DDoS differences—not assumptions."
  - question: "How should you use training PDFs that live in the pricing or internal folders?"
    options:
      - "Email them verbatim to customers as final quotes."
      - "Treat them as internal references; customer-facing numbers and quotes come from standard tools and approved processes."
      - "Ignore them completely even for internal planning."
    correct_index: 1
    explanation: "The module marks internal pricing extracts as not customer-facing until validated through proper quoting."
  - question: "When comparing GPC fiber to satellite for POS and VoIP, what is sound positioning?"
    options:
      - "Dismiss satellite without understanding their constraints."
      - "Explore weather, latency, jitter, and congestion tactfully; contrast fiber reliability, stable low latency, and scalable symmetrical enterprise paths."
      - "Promise identical performance in every geography without discovery."
    correct_index: 1
    explanation: "Stay professional: qualify constraints, then anchor on validated design and outcomes—not trash talk."
  - question: "What problem does E-LAN (Ethernet LAN) address in the module’s framing?"
    options:
      - "Single home-user email only."
      - "Multipoint-to-multipoint Layer 2 reach so multiple UNIs can mesh—any site to any site within the service."
      - "Public Internet breakout for guest Wi-Fi only."
    correct_index: 1
    explanation: "E-LAN is multipoint-to-multipoint private Ethernet; don’t confuse it with Internet access services."
  - question: "A branch suffers upload congestion and jitter on shared Internet for cloud apps. What is a sensible first step?"
    options:
      - "Automatically quote Wave between every site without qualification."
      - "Qualify SIA vs DIA (symmetry, latency, DDoS, support), pain points, and whether private Ethernet fits site-to-site needs."
      - "Recommend only consumer broadband upgrades."
    correct_index: 1
    explanation: "Discovery drives whether DIA vs SIA and transport choices fit before defaulting to large optical builds like Wave."
  - question: "What is the right mental model for **access** in this module?"
    options:
      - "Access is how traffic reaches the customer—SIA for flexible shared access, DIA for dedicated symmetrical paths and richer operations."
      - "Access means only MPLS forever, with no Internet options."
      - "Access is identical to SD-WAN policy routing in every case."
    correct_index: 0
    explanation: "Frame SIA vs DIA by workload, symmetry, operations, and security posture—then align Ethernet/Wave where private transport fits."
  - question: "When should Wave be positioned instead of simply upsizing DIA/SIA?"
    options:
      - "Whenever the customer mentions the word Internet."
      - "For DC–DC or hub-to-hub big pipes, replication, or latency-sensitive workloads that need Layer 1 optical—not as a substitute for Internet access."
      - "Only for sites under 10 Mbps total usage."
    correct_index: 1
    explanation: "Qualify Internet vs private transport; Wave addresses large optical point-to-point needs, not generic Internet access."
scenarios:
  - title: "Branch complains about VPN and video over ‘business broadband’"
    situation: |
      A site uses **shared Internet** and sees **jitter and upload congestion** for **VoIP and cloud apps**. Budget is tight but the business is growing.
    choices:
      - label: "Automatically quote Wave between every site."
        feedback: "Wrong fit: Wave is Layer 1 optical for large hub/DC pipes—here you likely need DIA vs SIA and possibly Ethernet/SD-WAN discovery, not Wave by default."
      - label: "Qualify SIA vs DIA (symmetry, latency, DDoS, support), uplink pain, and whether private Ethernet fits site-to-site needs."
        feedback: "Strong: follows DIA vs SIA guidance and discovery cues before over-specifying transport."
  - title: "Prospect compares GPC fiber to satellite for stores"
    situation: |
      They mention **Starlink** or satellite for **rural** sites and want **POS and VoIP** to work reliably.
    choices:
      - label: "Dismiss satellite without asking any questions."
        feedback: "Too sharp: explore weather, latency, jitter, and peak-time behavior tactfully, then contrast fiber reliability and symmetrical enterprise-grade paths."
      - label: "Explore weather, latency, and congestion impacts; position fiber reliability, stable low latency, local support, and scalable symmetrical capacity."
        feedback: "Strong: matches the fiber vs satellite battlecard themes while staying professional."
---
## Access

- **What “access” means here:** how business traffic reaches the customer—Internet services (SIA, DIA) vs private transport (Ethernet, Wave). GPC’s story is fiber-rich coverage and local engagement across the Midwest footprint.
- **Standard Internet Access (SIA):** shared access, flexible sizing, cost-sensitive fit; best when workloads tolerate shared paths and best-effort latency.
- **Dedicated Internet Access (DIA):** dedicated path, symmetrical throughput, premium latency posture, richer DDoS visibility, NOC-style operations—fit when performance, operations, or growth outgrow “good enough” shared Internet.
- **Managed Ethernet:** private Layer 2 between sites (E-Line / E-LAN)—not a substitute for Internet breakout; use when the need is site-to-site private connectivity.
- **Wavelength (Wave):** Layer 1 optical for very large, strategic pipes (e.g., DC/hub)—not generic Internet access; see the Wave section.

**When to propose what**

- Lead with **SIA** when the buyer prioritizes flexibility and cost, and apps are not latency- or upload-constrained.
- Move to **DIA** when they describe symmetry needs, SLA-style expectations, diversity, VoIP/video/cloud pain on shared access, or stronger DDoS/operations requirements.
- Introduce **Ethernet** when the conversation shifts to private connectivity between locations (VPN/MPLS replacement, hub/DC patterns, mesh).
- Reserve **Wave** for high-capacity, optical, point-to-point transport between strategic endpoints—not because someone said “we need more Internet.”

**Discovery questions**

- Which applications are business-critical today, and which will be in the next 24–36 months?
- Upload-heavy vs download-heavy? Any recurring upload congestion or jitter?
- Do they need static IPs, route diversity, or formal performance/operations expectations?
- What access do they run today (fiber, cable, wireless, legacy T1/MPLS)? Any recent outages or security events?
- How fast are they growing headcount, sites, or cloud adoption?

**Collateral:** DIA and SIA product sheets—**Sales Resources** (sidebar) under Internet / access.

---

## DIA vs SIA

Use the comparison sheet as the single source of truth for numbers and differentiators in live conversations.

- **Scale (per comparison):** SIA up to about **2 Gbps** symmetrical; DIA scales to **100 Gbps** symmetrical—use this to frame headroom and growth, not anecdotes.
- **IPs:** one static included with SIA vs three with DIA—qualify how many public endpoints they need.
- **Security / DDoS:** network-level DDoS on SIA vs proactive, customer-specific DDoS monitoring and mitigation on DIA—tie to risk and visibility expectations.
- **Latency:** standard / best-effort on SIA vs premium low-latency with stated objectives on DIA—tie to real-time and cloud UX.
- **Support:** Tier 1 ISC posture on SIA vs NOC-centric enhanced support and monitoring on DIA—tie to who answers at 2 a.m. and how incidents are handled.
- **Diversity:** standard options on SIA vs standard plus **multiple diverse access options** where the design requires it—tie to resilience and compliance drivers.
- **Service model:** shared on SIA vs **dedicated** fiber path on DIA—anchor the business case on predictability and growth.

**When to lead with SIA**

- General business connectivity, budget sensitivity, and workloads that tolerate shared access and best-effort latency.
- Sites where symmetrical heavy use or NOC-style operations are not yet justified.

**When to lead with DIA**

- Symmetrical heavy use (cloud backup, large uploads, design/CAD, media).
- SLA-style operations expectations, multi-site or diversity discussions, or compliance/risk conversations around DDoS visibility.
- VoIP, video, or cloud performance issues on “business broadband” or shared Internet.
- Clear trajectory of outgrowing shared Internet within the planning horizon.

**Discovery questions**

- What runs today—MPLS, SD-WAN, VPN over broadband, direct Internet? Where is the pain (upload vs download)?
- Any recent DDoS, outage, or security events that changed expectations?
- Do stakeholders need performance reporting for IT leadership or auditors?
- How many public IPs and what types of endpoints (VPN concentrators, voice, guest, IoT)?

**Collateral:** DIA vs SIA comparison sheet—**Sales Resources**.

---

## Ethernet

- **E-Line (Ethernet Line):** Layer 2, point-to-point or point-to-multipoint between Midwest locations, protected in the core. Order as **Ethernet Private Line (EPL)**—transparent, port-based, minimal frame manipulation, customer manages traffic inside frames—or **Ethernet Virtual Private Line (EVPL)**—VLAN-based, with GPC managing VLANs for point-to-point or point-to-multipoint.
- **E-LAN (Ethernet LAN):** multipoint-to-multipoint—multiple UNIs in a mesh so any site can reach any other; GPC supports **EP-LAN** and **EVP-LAN** configurations.

**Operational benefits (datasheet framing)**

- Access to **29+ data centers and carrier hotels** across markets such as Omaha, Denver, Kansas City, Minneapolis, Des Moines, Chicago, Indianapolis, and the broader Midwest.
- Speeds up to **100 Gbps** with predictable, low-latency transport.
- **MEF-certified** fiber network; **SLA** with **24×7/365 NOC** (Blair, NE); Network Performance Monitoring portal; optional proactive DDoS monitoring and mitigation.

**Competitor-neutral positioning**

- Anchor on **customer outcomes**: predictable private paths, operational simplicity vs Internet VPN, scalable bandwidth, local engagement, and route diversity where designs require it.
- When buyers mention **national carriers** or **legacy MPLS**, stay professional: compare on **routes, support model, cost-per-bit for the design, and who owns problem resolution**—validated through discovery and quoting, not slogans.

**Pain points Ethernet often addresses**

- Insufficient bandwidth or highly asymmetrical broadband degrading UX.
- Internet path variability (loss, delay, jitter) hurting real-time apps.
- Security and segmentation needs between branches and hubs/DCs.
- Low-throughput legacy private networks limiting modern apps.
- Lack of redundant/diverse access exposing sites to single-fiber risk.

**When to propose Ethernet**

- Multi-site private connectivity (hub-and-spoke or mesh), DC extension, or “we’re tired of VPN over the public Internet” stories.
- Latency-sensitive or high-throughput traffic between fixed endpoints where routed Internet is the bottleneck.
- Designs where Layer 2 transparency or VLAN orchestration (EVPL) simplifies operations.

**Discovery questions**

- How many locations? How do sites connect today—MPLS and/or Internet VPN?
- How much bandwidth per site today and at peak? Where are the bottlenecks?
- Hub-and-spoke to one data center vs **any-to-any (full mesh)**?
- Where are critical apps hosted—private DC, colo, or public cloud?
- What are the most latency-sensitive workloads, and what happens when they degrade?

**Collateral:** Managed Ethernet product sheet + Ethernet battle card—**Sales Resources**.

---

## Wave

- **What it is:** optical networking and **DWDM** for highly reliable, low-jitter **Layer 1** transport—private, dedicated pipe between locations for **data-intensive** workloads (e.g., DC-to-DC, large hub links) across the Midwest.
- **Scale & support:** **10 Gbps to 400 Gbps** with service-level commitments and **24×7** support from the **Blair, NE NOC**.

**Features & benefits (collateral)**

- Optical **point-to-point**; **secure, private** network; **fully dedicated**, non-shared service.
- **Predictable** performance; **flexible** bandwidth; **optional diverse routing**; **low latency**.
- **Transparent** to higher-layer protocols such as Ethernet; standard handoff at **10, 100, or 400 Gbps** on **2-fiber single-mode** where designs require.

**When to position Wave**

- DC–DC or hub-to-hub **big pipes**; replication, storage sync, or latency-sensitive workloads that outgrow routed Internet or even large Ethernet in the design.
- Buyers who speak in **optical** or **lambda** terms or who have already sized 100G/400G transport elsewhere.

**When not to position Wave**

- Default answer for “we need better Internet” or branch guest Wi-Fi—those are **DIA/SIA** (and possibly SD-WAN) conversations first.
- Any scenario where the requirement is public Internet access rather than private transport.

**Discovery questions**

- What are the two endpoints (regions, facilities, distance constraints)?
- What transport do they use today, and where will bandwidth need to go (e.g., 100G/400G roadmap)?
- Diversity and failover requirements—single path vs protected optical?
- Do they need Layer 1 transparency vs routed IP services higher in the stack?

**Internal coordination:** pricing and market-group materials are **internal**—partner with your **quoting team** and use approved sources on **Sales Resources**, not ad-hoc extracts.

**Collateral:** Wave product sheet; internal market-group and pricing PDFs via **quoting team** / pricing library on **Sales Resources**.

---

## Competitive

Use competitive framing when **satellite**, **national fiber**, or **“good enough broadband”** appears—especially rural or hard-to-serve addresses.

**Fiber vs satellite (illustrative)**

- **Outcome-based contrast:** enterprise fiber typically emphasizes **symmetrical** capacity, **fiber-grade reliability** vs weather/line-of-sight effects common with satellite, **stable low latency** vs variable satellite latency/jitter, **scalable** bandwidth, and **local** technicians plus **24/7/365 NOC** monitoring where offered.
- **Explore tactfully (satellite):** weather-related degradation; latency and jitter for POS, VoIP, and cloud; peak-time congestion; hardware and install complexity—then map answers to **validated design** on fiber.
- **GPC counter (professional):** reliability for real-time and cloud workloads, consistent latency for VPN and voice/video, dedicated symmetrical capacity where the design requires it, professional evaluation and installation.

**Competitor-neutral habits**

- **Never** dismiss another provider without understanding the customer’s constraints (budget, geography, timeline).
- Anchor on **their** apps, SLAs, and growth—then show how GPC’s fiber-rich approach fits **validated** requirements.
- Use **illustrative** latency numbers (e.g., fiber vs satellite ranges) to explain **why** speed tests don’t equal operational fit—avoid declaring winners outside the customer’s context.

**Discovery questions**

- How many employees or devices depend on the site? Which systems are non-negotiable if they fail?
- What uptime or SLA expectations does the business assume—spoken or unspoken?
- For retail or voice: what happens during peak hours or adverse weather?
- What did they evaluate already, and what blocked or favored each option?

**Broader competitive (Ethernet, national fiber)**

- Keep discovery tight: routes, local support, cost-per-bit for the **specific** design, and operational ownership.
- Win on **customer outcomes and validated design**, not on negative campaigning.

**Collateral:** Fiber vs Starlink + Ethernet battle cards—**Sales Resources**.

---

## Pricing (internal)

- Customer-facing quotes come from **standard tools and approvals**. Training PDFs are **context only**—never read unaudited numbers to a customer from a slide deck.
- **Internal pricing:** DIA/SIA, Ethernet, Wave, market groups—use **quoting** workflows and **Sales Resources** (or your team’s approved pricing folder). Involve **AE/pricing** when scope or numbers are unclear.

---

## Media (optional)

- *Guidde (reserved):* Guidde: qualifying bandwidth, access diversity, or quoting handoff.
