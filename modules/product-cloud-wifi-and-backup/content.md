---
id: "product-cloud-wifi-and-backup"
title: "Cloud, Wi-Fi & Backup"
summary: "Three pillars\u2014Cloud, Wi\u2011Fi, and Backup\u2014with collateral references and training shortcuts."
sensitivity: "public"
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

**Outcomes:** Predictable performance to **AWS, Azure, Google, Oracle, IBM, SAP, Nutanix, Salesforce, Alibaba** and the broader ecosystem; lower latency than best-effort Internet-only paths; security and control for traffic between sites and cloud regions; multi-region redundancy mindset from a single interconnection strategy.

**Discovery:** Which clouds/SaaS are critical today and in 12–24 months? How do they reach them today (DIA, VPN, colo, third-party exchange)? Latency, jitter, or capacity pain (backups, real-time apps)? Multi-metro or multi-region needs? Who owns cloud networking and security architecture?

**Proof points:** **Cloud Connect** offers a **direct, private** path into GPC’s cloud ecosystem with **Managed Ethernet** as the on-ramp—traffic rides a **secure, private** connection vs public Internet only. Collateral cites **up to 10 Gbps** direct connections, predictable performance, and ecosystem interconnection (e.g., Omaha, Chicago, Denver on product sheet). Position **no customer-owned long-haul fabric** to reach major providers when GPC is the transport partner.

**Cautions:** Align scope with SE for cross-connect details, diversity, and security expectations—not every site needs full cloud exchange on day one.

**Sources:**
- **Cloud Connect product sheet** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Cloud Connect/Cloud Connect 011725.pdf`
- **Cloud Connect battle card (PDF)** — `/Users/ba/Documents/GPC Training Material/GPC Cloud Connect Battle Card 050321.pdf`

## Wi‑Fi

**Outcomes:** Reliable coverage for employees and guests; separation of **guest vs corporate** traffic; **managed** lifecycle (design, install, turn-up, maintenance); visibility for planning; optional **branded** guest portal.

**Discovery:** Site count; indoor/outdoor; user types and concurrent devices; guest vs private SSID requirements; compliance (HIPAA segmentation, PCI for guest); throughput/app mix (video, VoIP, POS); who operates Wi‑Fi today and what outages drove the conversation; analytics and captive-portal needs.

**Proof points:** Collateral positions **10 Mbps–2 Gbps** Internet-backed designs, engineering-sized density/coverage, integrated guest/private over secure connection, indoor/outdoor AP options, **next-gen firewall**, routing, **IDS/IPS**, multiple SSIDs, managed end-to-end TCO story, analytics/reporting, branded login for guests.

**Cautions:** Site survey and density assumptions belong with engineering—don’t promise AP counts from a first call.

**Sources:**
- **Managed Wi-Fi datasheet** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Managed Wi-Fi/Managed Wi-Fi datasheet 070725.pdf`
- **GPC Managed WIFI battle card (PDF)** — `/Users/ba/Documents/GPC Training Material/GPC Managed WIFI Battle Card.pdf`

## Backup

**Outcomes:** Continuity when **fiber or primary access** fails—keep POS, ERP, voice, security, and cloud apps running; **prioritization** of critical apps; **NOC** monitoring and alerting; optional **battery** runtime; **unlimited data** positioning per product sheet (confirm current commercial terms with quoting).

**Discovery:** What happens on outage today—manual failover, none, or aging 4G? Which apps must survive? RTO in minutes vs hours? Alerting and ownership? Site constraints for **outdoor antenna** or router placement? Battery backup interest? Set expectations: **5G** performance varies by site; collateral notes **tiered speeds** after monthly usage thresholds and possible deprioritization when busy—honesty wins.

**Proof points:** Automatic failover to secure **wireless** path and automatic fail-back; app prioritization; **24/7 NOC**; optional **battery up to ~8 hours**; **Cradlepoint**-class CPE and professional install per collateral; speeds cited **up to 100 Mbps+** location-dependent.

**Sources:**
- **5G Wireless Internet Backup Product Sheet** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Wireless Internet Backup/5G Wireless Internet Backup Product Sheet 103025.pdf`
- **5G Wireless Backup battle card (PDF)** — `/Users/ba/Documents/GPC Training Material/Battlecard - 5G Wireless Backup.pdf`

## Product-training shortcuts (.url)

The extract at `.../extracted/OneDrive_1_4-10-2026` contains **.url** shortcuts to hosted training pages—open on a machine with access. Use alongside datasheets for formal product enablement.

**Sources:**
- **Training shortcuts bundle (folder)** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026`
- **Example: Cloud Connect training shortcut** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026/Cloud Connect/Product Training - Cloud Connect.url`

## Media (optional)

*Guidde (reserved):* Guidde: failover story or Wi-Fi site survey handoff.
