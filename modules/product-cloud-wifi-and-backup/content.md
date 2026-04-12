---
id: "product-cloud-wifi-and-backup"
title: "Cloud, Wi-Fi & Backup"
summary: "Three pillars\u2014Cloud, Wi\u2011Fi, and Backup\u2014with collateral references and training shortcuts."
sensitivity: "public"
reference_files:
  - label: "Sales Resources (cloud, Wi‑Fi, backup collateral)"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx"
five_minute_summary: |
  - **Cloud:** Position **Cloud Connect** plus **Managed Ethernet** as a private, predictable path to major clouds and SaaS—not Internet-only— and align scope with SE for cross-connects and diversity.
  - **Wi-Fi:** Sell managed lifecycle, guest vs corporate SSIDs, security stack (firewall, IDS/IPS), and analytics; defer AP counts and density to engineering until after survey.
  - **Backup:** **5G Wireless Internet Backup** with automatic failover/fail-back, NOC monitoring, optional battery, and app prioritization; set honest expectations on speed tiers and deprioritization.
  - Use datasheets and battle cards for proof points; **.url** shortcuts in the extract folder point to formal product training when on-network.
knowledge_checks:
  - question: "What best describes Cloud Connect\u2019s primary value story in discovery?"
    options:
      - "A best-effort public Internet link sized for peak cloud usage"
      - "A direct, private connection into GPC\u2019s cloud ecosystem with Managed Ethernet as the on-ramp"
      - "Customer-owned long-haul fiber to every cloud region"
    correct_index: 1
    explanation: "Collateral positions a **direct, private** path via Cloud Connect with **Managed Ethernet** as the on-ramp versus relying on public Internet only."
  - question: "Before quoting access point counts on Wi\u2011Fi, what should you do?"
    options:
      - "Promise a standard density from the first call to move the deal"
      - "Defer AP counts and density assumptions to engineering after site survey"
      - "Match the competitor\u2019s AP count from their proposal"
    correct_index: 1
    explanation: "The module cautions that site survey and density assumptions belong with engineering\u2014don\u2019t promise AP counts from a first call."
  - question: "For 5G Wireless Internet Backup, what is a fair caution to set with the customer?"
    options:
      - "Speeds are identical at every site regardless of RF environment"
      - "Performance can vary by location; tiered speeds and deprioritization may apply per collateral"
      - "Battery runtime is unlimited on all SKUs"
    correct_index: 1
    explanation: "Be honest that **5G** performance varies by site and collateral notes **tiered speeds** after thresholds and possible deprioritization when busy."
  - question: "On Cloud Connect scope, what should you align with a solutions engineer before over-promising?"
    options:
      - "Cross-connect details, diversity, and security expectations"
      - "Only the customer\u2019s logo colors for slide decks"
      - "Retail gift-card budgets unrelated to transport"
    correct_index: 0
    explanation: "The module says to align scope with SE for cross-connects, diversity, and security expectations\u2014not every site needs full cloud exchange on day one."
  - question: "In Managed Wi\u2011Fi discovery, which separation should you clarify early?"
    options:
      - "Guest vs corporate SSIDs and traffic separation"
      - "Only consumer smart-TV brands at each site"
      - "Whether employees prefer light or dark UI themes"
    correct_index: 0
    explanation: "Outcomes include separating **guest vs corporate** traffic; discovery should cover SSIDs, compliance, and app mix."
  - question: "What security stack elements does collateral associate with Managed Wi\u2011Fi positioning?"
    options:
      - "Next-gen firewall, routing, and IDS/IPS alongside multiple SSIDs"
      - "Open guest networks with no segmentation"
      - "DNS over HTTPS as the only control plane"
    correct_index: 0
    explanation: "Proof points cite integrated **firewall**, routing, **IDS/IPS**, and multiple SSIDs as part of the managed story."
  - question: "For 5G Wireless Internet Backup, which operational proof point is accurate?"
    options:
      - "Automatic failover to wireless and automatic fail-back when primary returns"
      - "Manual SIM swaps required for every outage"
      - "No monitoring; customer self-diagnoses all events"
    correct_index: 0
    explanation: "Collateral highlights automatic failover/fail-back plus **24/7 NOC** monitoring and alerting."
  - question: "What optional continuity feature is cited for 5G backup CPE deployments?"
    options:
      - "Optional battery runtime (collateral cites up to ~8 hours)"
      - "Unlimited runtime on every router without checking SKU"
      - "Solar panels bundled at no cost on all quotes"
    correct_index: 0
    explanation: "Proof points include optional **battery** runtime\u2014about eight hours per collateral\u2014confirm SKU and terms with quoting."
  - question: "Where should sellers look for formal Cloud, Wi\u2011Fi, and Backup product training shortcuts?"
    options:
      - "The extracted training folder\u2019s .url shortcuts to hosted pages (on-network)"
      - "Random search-engine results updated hourly"
      - "Only unofficial third-party forums"
    correct_index: 0
    explanation: "The module points to **.url** shortcuts in the extract folder for hosted product training when on-network, alongside datasheets."
  - question: "Which cloud/SaaS ecosystem framing matches the Cloud section\u2019s positioning?"
    options:
      - "Name major providers and multi-region redundancy mindset from a single interconnection strategy"
      - "Assume every workload must use consumer broadband only"
      - "Discourage any private paths to cloud regions"
    correct_index: 0
    explanation: "Discovery and proof emphasize ecosystem reach (AWS, Azure, Google, etc.) and predictable paths vs Internet-only, with multi-region redundancy in mind."
scenarios:
  - title: "Retail chain wants cloud ERP and guest Wi-Fi"
    situation: |
      A multi-site retailer is moving ERP to the cloud and wants guest Wi-Fi with a branded portal.
      They ask you to guarantee twelve indoor APs per store on the first call so they can budget hardware.
    choices:
      - label: "Quote twelve APs per store to match their budget request."
        feedback: "Risky: AP counts depend on survey and density. Defer counts to engineering and keep the conversation on outcomes, SSIDs, and managed lifecycle."
      - label: "Explain that AP counts follow a site survey and engineering-sized design; offer discovery on coverage, guests vs corporate, and compliance."
        feedback: "Correct: the module says not to promise AP counts from a first call—anchor on managed design and hand off sizing."
      - label: "Decline Wi-Fi and only sell DIA."
        feedback: "Too narrow: you can still position Managed Wi-Fi with proper engineering handoff rather than walking away."
  - title: "Branch needs uptime when fiber fails"
    situation: |
      A branch says their fiber went down last month and they had no failover. They want "full speed 5G forever"
      with no caveats for a board presentation.
    choices:
      - label: "Agree to unlimited headline speed at every site with no variability."
        feedback: "Misaligned: be transparent that 5G performance varies by site and commercial terms may include tiered speeds."
      - label: "Position automatic failover, NOC monitoring, and app prioritization; explain location-dependent speeds and confirm battery and data terms with quoting."
        feedback: "Correct: match proof points (failover, NOC, prioritization, optional battery) while setting realistic expectations on speed and tiers."
      - label: "Recommend only redundant fiber and skip wireless backup."
        feedback: "Incomplete: backup wireless is exactly for fiber outage scenarios; pair transport diversity with honest 5G messaging."
---

## Cloud

**Outcomes**

- Predictable performance into **AWS, Azure, Google, Oracle, IBM, SAP, Nutanix, Salesforce, Alibaba**, and adjacent SaaS—fewer "Internet weather" surprises for steady-state and burst workloads.
- Lower latency and more consistent behavior than **Internet-only** paths for inter-site and site-to-cloud traffic that matters for backups, real-time apps, and large data movement.
- Clearer **security and control** posture between branches, data paths, and cloud regions; easier alignment with architecture and compliance reviews.
- **Multi-region redundancy** mindset from a **single interconnection strategy**—fewer one-off fixes per app or per metro.

**Bundling**

- Lead with **Managed Ethernet** as the **on-ramp** to **Cloud Connect**: one coherent story from access into GPC's ecosystem vs stitching consumer-grade or ad hoc paths.
- Pair cloud connectivity conversations with **branch resiliency** (e.g., **5G Wireless Internet Backup**) when uptime for cloud ERP, POS, or voice is non‑negotiable.
- Where Wi‑Fi carries guest and corporate traffic into the same sites, position **Managed Wi‑Fi** plus transport as **segmented access** into the same secure design—not bolt-on guest Internet in isolation.

**Discovery**

- Which clouds and SaaS are **critical now** and in **12–24 months**? Who adds net-new workloads next budget cycle?
- How do they reach those workloads today—**DIA**, **VPN**, **colo**, **third-party exchange**, or mixed? What broke or aged out?
- Where is the pain: **latency**, **jitter**, **capacity**, failed backups, or real-time app drops? Quantify with examples (sites, apps, time windows).
- **Multi-metro or multi-region** needs—single hub vs distributed egress; DR and failover expectations.
- Who owns **cloud networking**, **security architecture**, and **change windows** for cutovers?

**Proof points**

- **Cloud Connect**: **direct, private** path into GPC's cloud ecosystem; **Managed Ethernet** as the on-ramp; **secure, private** transit vs **public Internet only**.
- Collateral cites **up to 10 Gbps** direct connections, predictable performance, and ecosystem interconnection (e.g., **Omaha, Chicago, Denver** on product sheet).
- Position **no customer-owned long-haul fabric** to major providers when GPC is the transport partner.

**Cautions**

- Align scope with an **SE** on **cross-connect** details, **diversity**, and **security** expectations—not every site needs full cloud exchange on day one.

**Collateral:** Cloud Connect product sheet + battle card—**Sales Resources**.

## Wi‑Fi

**Outcomes**

- Reliable **coverage and capacity** for employees, devices, and **guests** without "we'll fix it with more APs later" as the default plan.
- Clear **guest vs corporate** separation—SSIDs, policy, and traffic paths that stand up in audits and incident reviews.
- **Managed lifecycle**: design, install, turn-up, **maintenance**, and refresh—ownership is visible, not tribal knowledge.
- **Analytics and visibility** for planning, troubleshooting, and proving value to the business; optional **branded** guest portal where marketing cares.

**Bundling**

- Attach Wi‑Fi to **secure connectivity** (firewall, IDS/IPS, routing) as one **managed stack** rather than selling "APs only."
- Align with **Cloud** and **DIA/transport** conversations when guest and corporate traffic both need predictable paths to **SaaS and cloud**.
- Offer **backup** positioning where stores or branches **cannot afford** POS, voice, or security app loss when primary access fails—Wi‑Fi stays useful only if upstream path is designed honestly.

**Discovery**

- **Site count**; **indoor/outdoor**; rough footprint and ceiling height where it affects RF.
- **User types** and **concurrent devices**; peak vs average; seasonal spikes.
- **Guest vs private SSID** requirements; captive portal, social login, or simple acceptance pages.
- **Compliance**: HIPAA-style segmentation, PCI for guest checkout, retail or healthcare specifics.
- **Throughput and app mix**: video, VoIP, POS, inventory scanners; multicast or broadcast sensitivity.
- Who **operates Wi‑Fi** today—MSP, internal IT, or store managers? What **outages or tickets** triggered this conversation?
- **Analytics**, reporting, and **branded login** needs; who signs off on guest experience?

**Proof points**

- Collateral positions **10 Mbps–2 Gbps** Internet-backed designs, **engineering-sized** density and coverage, integrated guest/private over a **secure connection**.
- **Indoor/outdoor AP** options; **next-gen firewall**, routing, **IDS/IPS**, **multiple SSIDs**; managed end-to-end **TCO** story; analytics/reporting; branded guest login.

**Cautions**

- **Site survey** and **density** assumptions belong with **engineering**—do not promise **AP counts** from a first call.

**Collateral:** Managed Wi‑Fi datasheet + battle card—**Sales Resources**.

## Backup

**Outcomes**

- **Continuity** when **fiber or primary access** fails—keep **POS, ERP, voice, security**, and **cloud** apps usable enough to operate safely.
- **App prioritization** so the business feels the difference during impairment, not just "we have a light on the router."
- **24/7 NOC** monitoring and alerting—events are seen and owned, not discovered by the store manager on Twitter.
- Optional **battery** runtime on CPE for short grid or upstream blips; **unlimited data** positioning per product sheet (**confirm** current commercial terms with quoting).

**Bundling**

- Sell backup as part of a **branch resilience** package: primary access + **automatic failover/fail-back** + clear **ownership** (NOC, escalation).
- Tie to **Cloud** and **SaaS** dependencies: if the site lives on **cloud ERP** or **real-time** apps, backup is part of the **availability** story, not a SIM card add-on.
- Combine with **Managed Wi‑Fi** messaging where **guest and corporate** traffic must survive the same outage scenarios without unsafe workarounds.

**Discovery**

- What happens **today** on outage—manual failover, nothing, or aging **4G**? Last incident: duration, revenue or safety impact?
- Which **applications must survive**—ranked—and acceptable **RTO** in minutes vs hours?
- **Alerting** paths: who gets paged; runbook maturity; after-hours coverage.
- **Site constraints**: **outdoor antenna**, cable runs, **router placement**, landlord or franchise rules.
- Interest in **battery** backup; physical security of CPE.
- Set expectations early: **5G** performance **varies by site**; collateral notes **tiered speeds** after monthly usage thresholds and possible **deprioritization** when busy—**honesty wins** the renewal.

**Proof points**

- Automatic failover to secure **wireless** and automatic **fail-back** when primary returns; **app prioritization**; **24/7 NOC**.
- Optional **battery** up to **~8 hours**; **Cradlepoint**-class CPE and professional install per collateral; speeds cited **up to 100 Mbps+**, **location-dependent**.

**Collateral:** 5G Wireless Internet Backup sheet + battle card—**Sales Resources**.

## Cross-pillar bundling (talk track)

- **Cloud path + access + resilience**: Managed Ethernet and **Cloud Connect** for predictable cloud reach; **5G backup** when that path must stay alive through last-mile failure.
- **Managed Wi‑Fi + security stack + transport**: One story for **segmented SSIDs**, **IDS/IPS** and **firewall** adjacent to Wi‑Fi, and **clean** egress to cloud and SaaS.
- **Discovery first, size second**: Lock **outcomes** and **who owns what** before quoting **counts**, **speeds**, or **SLA** language you cannot defend.

## Product training (hosted shortcuts) [deep]

- Some teams use **.url** shortcuts on a **synced drive** to open vendor training pages—works only when synced and **on-network** as IT allows.
- If you do not have those shortcuts, use **Sales Resources** + **GPCU** for the same product training paths; ask **enablement** for the current playlist.

## Media (optional) [deep]

*Guidde (reserved):* Guidde: failover story or Wi-Fi site survey handoff.

