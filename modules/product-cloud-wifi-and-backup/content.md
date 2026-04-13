---
id: "product-cloud-wifi-and-backup"
title: "Cloud, Wi-Fi & Backup"
summary: "Cloud Connect + Ethernet on-ramp; managed Wi‑Fi (survey before AP counts); 5G backup with honest RF/speed expectations."
sensitivity: "public"
reference_files:
  - label: "Sales Resources (cloud, Wi‑Fi, backup collateral)"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx"
five_minute_summary: |
  - **Cloud:** Cloud Connect + Managed Ethernet = private path to clouds/SaaS—align **cross-connect, diversity, security** with **SE**.
  - **Wi‑Fi:** Managed lifecycle; guest vs corporate; firewall/IDS/IPS—**no AP counts** until survey.
  - **Backup:** 5G failover/fail-back, NOC, optional battery, app prioritize—**tiered speeds / deprioritization** vary by site.
  - Proof: datasheets; **.url** training shortcuts (on-network) in extract folder.

knowledge_checks:
  - question: "What best describes Cloud Connect’s primary value story in discovery?"
    options:
      - "A best-effort public Internet link sized for peak cloud usage"
      - "A direct, private connection into GPC’s cloud ecosystem with Managed Ethernet as the on-ramp"
      - "Customer-owned long-haul fiber to every cloud region"
    correct_index: 1
    explanation: "Private path via Cloud Connect; Ethernet on-ramp—not Internet-only."

  - question: "Before quoting access point counts on Wi‑Fi, what should you do?"
    options:
      - "Promise a standard density from the first call to move the deal"
      - "Defer AP counts and density assumptions to engineering after site survey"
      - "Match the competitor’s AP count from their proposal"
    correct_index: 1
    explanation: "Survey + engineering own density—don’t promise counts on call one."

  - question: "For 5G Wireless Internet Backup, what is a fair caution to set with the customer?"
    options:
      - "Speeds are identical at every site regardless of RF environment"
      - "Performance can vary by location; tiered speeds and deprioritization may apply per collateral"
      - "Battery runtime is unlimited on all SKUs"
    correct_index: 1
    explanation: "5G varies; tiers/deprioritization per collateral."

  - question: "On Cloud Connect scope, what should you align with a solutions engineer before over-promising?"
    options:
      - "Cross-connect details, diversity, and security expectations"
      - "Only the customer’s logo colors for slide decks"
      - "Retail gift-card budgets unrelated to transport"
    correct_index: 0
    explanation: "SE aligns XC, diversity, security—not every site needs full exchange day one."

  - question: "In Managed Wi‑Fi discovery, which separation should you clarify early?"
    options:
      - "Guest vs corporate SSIDs and traffic separation"
      - "Only consumer smart-TV brands at each site"
      - "Whether employees prefer light or dark UI themes"
    correct_index: 0
    explanation: "Guest vs corporate + compliance + app mix."

  - question: "What security stack elements does collateral associate with Managed Wi‑Fi positioning?"
    options:
      - "Next-gen firewall, routing, and IDS/IPS alongside multiple SSIDs"
      - "Open guest networks with no segmentation"
      - "DNS over HTTPS as the only control plane"
    correct_index: 0
    explanation: "Firewall, routing, IDS/IPS, multiple SSIDs—managed stack."

  - question: "For 5G Wireless Internet Backup, which operational proof point is accurate?"
    options:
      - "Automatic failover to wireless and automatic fail-back when primary returns"
      - "Manual SIM swaps required for every outage"
      - "No monitoring; customer self-diagnoses all events"
    correct_index: 0
    explanation: "Auto failover/fail-back + NOC."

  - question: "What optional continuity feature is cited for 5G backup CPE deployments?"
    options:
      - "Optional battery runtime (collateral cites up to ~8 hours)"
      - "Unlimited runtime on every router without checking SKU"
      - "Solar panels bundled at no cost on all quotes"
    correct_index: 0
    explanation: "Optional battery ~8h—confirm SKU with quoting."

  - question: "Where should sellers look for formal Cloud, Wi‑Fi, and Backup product training shortcuts?"
    options:
      - "The extracted training folder’s .url shortcuts to hosted pages (on-network)"
      - "Random search-engine results updated hourly"
      - "Only unofficial third-party forums"
    correct_index: 0
    explanation: ".url shortcuts when on-network; else Sales Resources / GPCU."

  - question: "Which cloud/SaaS ecosystem framing matches the Cloud section’s positioning?"
    options:
      - "Name major providers and multi-region redundancy mindset from a single interconnection strategy"
      - "Assume every workload must use consumer broadband only"
      - "Discourage any private paths to cloud regions"
    correct_index: 0
    explanation: "Major clouds + multi-region mindset; predictable vs Internet-only."

scenarios:
  - title: "Retail chain wants cloud ERP and guest Wi-Fi"
    situation: |
      Multi-site retailer; cloud ERP + guest Wi‑Fi; wants **12 APs/store** budgeted on first call.
    choices:
      - label: "Quote twelve APs per store to match their budget request."
        feedback: "Defer counts—survey + engineering."

      - label: "Explain AP counts follow survey/engineering; discovery on coverage, guest vs corporate, compliance."
        feedback: "Correct."

      - label: "Decline Wi-Fi and only sell DIA."
        feedback: "Position Wi‑Fi with engineering handoff."

  - title: "Branch needs uptime when fiber fails"
    situation: |
      Fiber outage last month; wants **full speed 5G forever** with no caveats for the board.
    choices:
      - label: "Agree to unlimited headline speed at every site with no variability."
        feedback: "Set honest RF/speed/tier expectations."

      - label: "Position failover, NOC, prioritization; explain location-dependent speeds; confirm battery/data with quoting."
        feedback: "Correct."

      - label: "Recommend only redundant fiber and skip wireless backup."
        feedback: "Backup is for fiber failure—pair honesty on 5G."

---

## Cloud

**Position:** **Cloud Connect** + **Managed Ethernet** on-ramp → predictable paths to AWS/Azure/Google/etc. and SaaS vs Internet-only.**Discovery:** which clouds/SaaS critical now + 12–24 mo; how they reach today; pain (latency, jitter, capacity); multi-region; owners.**Proof:** direct private path; sheet cites e.g. **up to 10 Gbps**, metros (Omaha, Chicago, Denver).**Caution:** SE for XC, diversity, security scope.**Collateral:** Cloud Connect sheet + battle card—**Sales Resources**.

::: accordion Cloud Connect Battle Card
![Cloud Connect battle card](Proposal_Assets/training/from-pdfs/gpc-cloud-connect-battle-card-050321/images/gpc-cloud-connect-battle-card-050321-p2-img0.png)
:::

## Wi‑Fi

**Position:** managed lifecycle—design/install/maintain; **guest vs corporate** SSIDs; stack with firewall/IDS/IPS.**Discovery:** sites, indoor/outdoor, peak devices, compliance, app mix, who runs Wi‑Fi today.**Proof:** engineering-sized density; firewall + IDS/IPS + SSIDs; analytics/branded portal where needed.**Caution:** **no AP counts** until survey.**Collateral:** Managed Wi‑Fi—**Sales Resources**.

::: accordion Managed Wi-Fi Collateral
![Managed Wi-Fi datasheet](Proposal_Assets/training/from-pdfs/extracted/onedrive-1-4-10-2026-1/managed-wi-fi/managed-wi-fi-datasheet-070725/images/managed-wi-fi-datasheet-070725-p1-img0.jpeg)

![Managed Wi-Fi battle card](Proposal_Assets/training/from-pdfs/gpc-managed-wifi-battle-card/images/gpc-managed-wifi-battle-card-p2-img0.png)
:::

## Backup

**Position:** **5G wireless backup**—auto failover/fail-back, app prioritize, **24/7 NOC**, optional **battery** (~8h per collateral—confirm SKU).**Discovery:** last outage; apps that must survive; RTO; alerting; site constraints; set **5G variability** + tier/deprioritization expectations early.**Proof:** failover/fail-back, NOC; speeds **location-dependent** (e.g. up to 100 Mbps+ cited).**Collateral:** 5G backup sheet + battle card—**Sales Resources**.

::: accordion 5G Wireless Internet Backup
![5G backup product launch](Proposal_Assets/training/from-pdfs/extracted/onedrive-1-4-10-2026/wireless-internet-backup/gpc-wireless-internet-5g-product-launch/images/gpc-wireless-internet-5g-product-launch-p1-img1.jpeg)

![5G backup features](Proposal_Assets/training/from-pdfs/extracted/onedrive-1-4-10-2026/wireless-internet-backup/gpc-wireless-internet-5g-product-launch/images/gpc-wireless-internet-5g-product-launch-p8-img1.jpeg)
:::

## Bundling (one-liners)

Cloud path + **resilience:** Ethernet/Cloud Connect + 5G backup when last-mile failure kills the business.**Wi‑Fi + security + transport:** segmented SSIDs + IDS/IPS + clean egress.**Rule:** outcomes and owners before quoting counts or SLAs you can’t defend.

## Product training [deep]

**.url** shortcuts in synced extract (on-network); else **Sales Resources** + **GPCU**; ask enablement for playlist.

## Media (optional) [deep]

*Guidde:* failover story or Wi‑Fi survey handoff.
