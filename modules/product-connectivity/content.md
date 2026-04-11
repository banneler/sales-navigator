---
id: "product-connectivity"
title: "Connectivity & Access"
summary: "Training organized by topic: access strategy, DIA vs SIA, Managed Ethernet, Wavelength (Wave), competitive positioning, and internal pricing references."
sensitivity: "public"
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
      - "Replacing all voice systems with UC only."
      - "Private Layer 2 connectivity between sites (not Internet breakout), with EPL/EVPL and E-LAN options."
      - "Consumer-grade Wi-Fi in the office."
    correct_index: 1
    explanation: "Ethernet is private site-to-site transport; Internet access is a different conversation (DIA/SIA)."
  - question: "What is Wavelength (Wave) best positioned for?"
    options:
      - "Small-branch guest Wi-Fi only."
      - "Layer 1 optical, high-capacity point-to-point between strategic endpoints (e.g., DC/hub), not as a substitute for DIA/SIA Internet."
      - "Email hosting for ten users."
    correct_index: 1
    explanation: "Wave is big-pipe optical transport; qualify Internet vs private transport and involve quoting teams for internal pricing."
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

Use **access** conversations to frame how traffic reaches the customer: GPC delivers business Internet and transport over a fiber-rich Midwest footprint. **Standard Internet Access (SIA)** fits flexible, cost-sensitive sites that can tolerate shared access and best-effort latency. **Dedicated Internet Access (DIA)** fits sites that need symmetrical throughput, premium latency, dedicated path, richer DDoS visibility, and NOC-style support. Position **Managed Ethernet** when the need is private Layer 2 transport between sites—not Internet breakout. **Wavelength (Wave)** when the need is raw, high-capacity Layer 1 optical transport between strategic endpoints (data centers, large hubs)—see the Wave section.

**Discovery cues:** What applications are business-critical? Upload-heavy vs download-heavy? Need for static IPs, diversity, or SLA-style operations? Today’s access technology (cable, fiber, T1/MPLS legacy, wireless)? Growth plan over 24–36 months?

**Sources:**
- **DIA Product Sheet** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Internet/DIA Product Sheet 120424.pdf`
- **SIA product sheet** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Internet/SIA product sheet 120324.pdf`

## DIA vs SIA

Use the comparison sheet to stay crisp in customer conversations. **SIA** tops out at symmetrical speeds up to **2 Gbps** in the comparison; **DIA** scales to **100 Gbps** symmetrical. **IPs:** one static included with SIA vs three with DIA. **Security:** network-level DDoS on SIA vs proactive, customer-specific DDoS monitoring and mitigation on DIA. **Latency:** standard / best-effort on SIA vs premium low-latency with stated performance objectives on DIA. **Support model:** Tier 1 ISC for SIA vs NOC-centric enhanced support and monitoring for DIA. **Access diversity:** standard options on SIA vs standard plus **multiple diverse access options** where designs require it. **Nature of service:** shared on SIA vs **dedicated** fiber path for DIA.

**When to lead with SIA:** general business connectivity, cost sensitivity, workloads tolerant of shared access and best-effort latency. **When to lead with DIA:** symmetrical heavy use, SLA-style operations expectations, multi-site or diversity discussions, VoIP/video/cloud performance issues on “business broadband,” compliance or risk conversations around DDoS visibility, or when they have already outgrown shared Internet.

**Discovery questions:** What are you running today—MPLS, VPN over broadband, direct Internet? Where do you see congestion (upload vs download)? Any recent DDoS or outage events? Do you need performance reporting for internal IT or auditors?

**Sources:**
- **DIA vs SIA Comparison** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Internet/DIA vs SIA Comparison 110424.pdf`

## Ethernet

**E-Line (Ethernet Line)** is Layer 2, point-to-point or point-to-multipoint between Midwest locations, protected in the core. Order as **Ethernet Private Line (EPL)**—transparent, port-based, minimal frame manipulation, customer manages traffic inside frames—or **Ethernet Virtual Private Line (EVPL)**—VLAN-based, with GPC managing VLANs for point-to-point or point-to-multipoint.

**E-LAN (Ethernet LAN)** is multipoint-to-multipoint: multiple UNIs in a mesh so any site can reach any other; GPC supports **EP-LAN** and **EVP-LAN** configurations.

**Operational benefits (datasheet):** access to **29+ data centers and carrier hotels** across markets such as Omaha, Denver, Kansas City, Minneapolis, Des Moines, Chicago, Indianapolis and broader Midwest; speeds up to **100 Gbps** with predictable, low-latency transport; **MEF-certified** fiber network; **SLA** with **24x7/365 NOC** (Blair, NE); Network Performance Monitoring portal; optional proactive DDoS monitoring and mitigation.

**Ethernet battle card context:** Many deals are won against nationwide fiber Ethernet providers. Emphasize GPC’s **16,500-mile** fiber footprint, **distinct Midwest routes**, and **local** engagement—private managed Ethernet is isolated from the public Internet end-to-end, which supports security and predictable performance vs Internet VPN. Scalable bandwidth **10 Mbps to 10 Gbps**; positioning often contrasts **cost-per-bit** favorably vs legacy MPLS for many designs.

**Pain points Ethernet solves:** insufficient bandwidth or highly asymmetrical broadband degrading UX; Internet path variability (loss, delay, jitter) hurting real-time apps; security and segmentation needs between branches and hubs/DCs; low-throughput MPLS limiting apps; lack of redundant/diverse access exposing sites to fiber cuts.

**Discovery questions (from Ethernet battle card):** How many locations total? How do sites connect today—MPLS and/or Internet VPN? How much bandwidth per site? Hub-and-spoke to one data center vs **any-to-any (full mesh)**? Where are critical apps hosted—data center vs cloud? What are the most latency-sensitive workloads?

**Sources:**
- **Managed Ethernet Product Sheet** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Ethernet/Managed Ethernet Product Sheet 060625.pdf`
- **Ethernet Battle Card** — `/Users/ba/Documents/GPC Training Material/Ethernet Battle Card FINAL.pdf`

## Wave

**Wavelength services** use optical networking and **DWDM** to deliver highly reliable, low-jitter **Layer 1** transport between locations—ideal when the customer needs a secure, low-latency, scalable pipe for **data-intensive** workloads linking data centers, enterprise sites, and storage across the Midwest.

**Scale & support:** GPC supports Wavelength from **10 Gbps to 400 Gbps** with **service-level commitments** and **24×7** support from the **Blair, NE NOC**.

**Features & benefits (collateral):** optical **point-to-point**; **secure, private** network; **fully dedicated**, non-shared service; **predictable** performance; **flexible** bandwidth; **optional diverse routing**; **low latency**; **transparent** to higher-layer protocols such as Ethernet; standard handoff at **10, 100, or 400 Gbps** on **2-fiber single-mode** where designs require.

**When to position Wave:** DC–DC or hub-to-hub **big pipes**; replication, storage sync, or latency-sensitive apps that outgrow routed Internet or even large Ethernet quotes; customers who speak in **optical** or **lambda** terms. **Discovery:** endpoints, distance/regions, current transport, growth to 100G/400G, diversity needs, and whether they need Layer 1 transparency vs routed IP services.

**Cautions:** Wave is not a substitute for DIA/SIA Internet access—qualify whether they need **Internet** vs **private transport**. Pricing and market groups are **internal**—use the Wave folder in the pricing extract with your quoting team.

**Sources:**
- **WAVE Product Sheet** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Wave/WAVE Product Sheet 120424.pdf`
- **WAVE Market Groups (internal)** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)/Wave/202401 - WAVE Market Groups.pdf`
- **WAVE Enterprise Pricing (internal)** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)/Wave/2025-07 WAVE Enterprise Pricing.pdf`

## Competitive

Use competitive framing when **satellite**, **national fiber**, or **“good enough broadband”** shows up—especially rural or hard-to-serve addresses.

**Fiber vs satellite (Starlink example):** GPC **fiber-to-the-premises** delivers **symmetrical** speeds, **fiber-grade reliability** (not rain fade / dish snow / line-of-sight), **stable low latency** vs LEO satellite, **scalable** bandwidth, and **local** technicians plus **24/7/365 NOC** monitoring.

**Explore tactfully on satellite:** weather-related degradation; **latency and jitter** for POS, VoIP, cloud; **peak-time congestion**; hardware and **install** complexity. **GPC counter:** enterprise-grade reliability, consistent latency for cloud/VPN/real-time, **dedicated symmetrical** capacity, professional evaluation and installation.

**Qualifying:** How many employees or devices depend on the site? Which systems are critical? **SLA** or uptime expectations? **Latency framing (battle card):** illustrative **fiber ~5–15 ms** vs **Starlink ~21–30 ms**; application thresholds for video, VoIP, POS—use to explain why speed tests don’t equal operational fit.

**Broader competitive:** Ethernet battle card covers national fiber Ethernet competitors; keep discovery tight (routes, local support, cost-per-bit). Do not trash competitors—anchor on customer outcomes and validated design.

**Sources:**
- **Fiber vs Starlink battlecard** — `/Users/ba/Documents/GPC Training Material/Fiber vs Starlink Battlecard.pdf`
- **Ethernet Battle Card** — `/Users/ba/Documents/GPC Training Material/Ethernet Battle Card FINAL.pdf`

## Pricing (internal)

Customer-facing quotes come from your standard tools and approvals. The extracted **pricing pack** folder holds DIA/SIA, Ethernet, Wave, and related market-group PDFs—**internal reference only** unless leadership publishes specific numbers for external use. Do not read training numbers aloud to customers.

**Sources:**
- **DIA & SIA / Ethernet / Wave pricing pack (folder)** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)`

## Media (optional)

*Guidde (reserved):* Guidde: qualifying bandwidth, access diversity, or quoting handoff.
