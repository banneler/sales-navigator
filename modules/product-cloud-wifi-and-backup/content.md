---
id: "product-cloud-wifi-and-backup"
title: "Cloud, Wi-Fi & Backup"
summary: "Cloud Connect + Ethernet on-ramp; managed Wi‑Fi (survey before AP counts); 5G backup with honest RF/speed expectations."
sensitivity: "public"
reference_files:
  - label: "Sales Resources (cloud, Wi‑Fi, backup collateral)"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx"
discovery_questions:
  - "Which cloud platforms or SaaS apps are most critical to your business—AWS, Azure, O365, Salesforce? How do you reach them today, and where do you feel latency or reliability pain?"
  - "When your primary Internet circuit went down last—how long were you out, what broke first, and what did that cost the business?"
  - "Who manages your Wi-Fi today? Do you have separate guest and corporate networks, and are you dealing with any compliance requirements like PCI or HIPAA?"
  - "How many sites need coverage, and do any have outdoor or high-density requirements that a standard AP count might undersize?"
  - "Do you have applications—VoIP, payment terminals, patient records—that must stay up even during a fiber outage?"
five_minute_summary: |
  - **Cloud Connect:** Combine with Managed Ethernet to provide a private, predictable path to cloud providers and SaaS. Always align with an SE on cross-connects and diversity.
  - **Managed Wi-Fi:** We manage the entire lifecycle including security (firewall, IDS/IPS) and network separation. Never quote access point counts before a proper site survey.
  - **5G Backup:** Provides automatic failover and fail-back with 24/7 NOC monitoring. Be transparent that speeds and deprioritization will vary by location.
  - **Resources:** Rely on official datasheets and on-network training shortcuts for detailed proof points.

knowledge_checks:
  - question: "What best describes Cloud Connect's primary value story in discovery?"
    options:
      - "A best-effort public Internet link sized for peak cloud usage"
      - "A direct, private connection into GPC's cloud ecosystem with Managed Ethernet as the on-ramp"
      - "Customer-owned long-haul fiber to every cloud region"
    correct_index: 1
    explanation: "Private path via Cloud Connect; Ethernet on-ramp—not Internet-only."

  - question: "Before quoting access point counts on Wi‑Fi, what should you do?"
    options:
      - "Promise a standard density from the first call to move the deal"
      - "Defer AP counts and density assumptions to engineering after site survey"
      - "Match the competitor's AP count from their proposal"
    correct_index: 1
    explanation: "Survey + engineering own density—don't promise counts on call one."

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
      - "Only the customer's logo colors for slide decks"
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
      - "The extracted training folder's .url shortcuts to hosted pages (on-network)"
      - "Random search-engine results updated hourly"
      - "Only unofficial third-party forums"
    correct_index: 0
    explanation: ".url shortcuts when on-network; else Sales Resources / GPCU."

  - question: "Which cloud/SaaS ecosystem framing matches the Cloud section's positioning?"
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

roleplay:
  persona: "IT Manager at a healthcare clinic network"
  scenario: "Had a fiber outage last month that took down patient scheduling and e-prescribing for four hours. Wants a solution but is skeptical of wireless backup speeds and worried about HIPAA data on a cellular network."
  goal: "Position 5G backup as a managed, automatic failover solution with app prioritization and NOC monitoring—set honest speed/tier expectations while tying reliability to patient care continuity."
---

## At a glance

- **Cloud Connect:** Private, predictable paths to **AWS, Azure, Google**, and major SaaS—reduces “Internet-only” jitter for workloads that matter; qualify which clouds and apps drive the pain.
- **Managed Wi‑Fi:** Full lifecycle (**design → install → maintain**), **guest vs corporate** segmentation, and integrated **firewall/IDS/IPS**—AP counts follow **survey/engineering**, not a guess on call one.
- **5G Wireless Backup:** **Automatic failover / fail-back**, **24/7 NOC**, optional **battery**—position as **continuity** on GPC fiber; set honest expectations on **RF, speed tiers, and HIPAA** vs primary access.

---

## 

::: elevator [Elevator Pitch]
Three products that extend the value of GPC fiber access: **Cloud Connect** gives SaaS-heavy and cloud-first businesses a private, predictable path to AWS, Azure, Google, and other platforms—no more Internet-only jitter for critical workloads. **Managed Wi-Fi** covers the last ten feet with a fully managed lifecycle (design, install, maintain), guest/corporate segmentation, and integrated firewall/IDS/IPS. **5G Wireless Backup** keeps the business running during fiber outages with automatic failover, automatic fail-back, 24/7 NOC monitoring, and optional battery protection—no manual intervention required.
:::

---

## 

<div class="rounded-2xl border border-emerald-200/80 overflow-hidden bg-slate-50 shadow-sm">
  <iframe
    src="games/portfolio-level-1/index.html?embed=1&module=product-cloud-wifi-and-backup"
    title="Discovery Run — Level 1"
    loading="lazy"
    sandbox="allow-scripts allow-same-origin"
    style="width: 100%; border: 0; display: block; height: 40rem; max-height: min(88vh, 44rem); background: #f1f5f9;"
  ></iframe>
</div>

---

## Discovery Questions

1. **Which cloud platforms or SaaS apps are most critical to your business—AWS, Azure, O365, Salesforce? How do you reach them today, and where do you feel latency or reliability pain?**
2. **When your primary Internet circuit went down last—how long were you out, what broke first, and what did that cost the business?**
3. **Who manages your Wi-Fi today? Do you have separate guest and corporate networks, and are you dealing with any compliance requirements like PCI or HIPAA?**
4. **How many sites need coverage, and do any have outdoor or high-density requirements that a standard AP count might undersize?**
5. **Do you have applications—VoIP, payment terminals, patient records—that must stay up even during a fiber outage?**

---

## Objection Handling

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

::: flip ["5G is fast enough to be my primary Internet."]
Position honestly: wireless is best-effort, not symmetrical, and speeds vary by site. For primary access, fiber is the right answer; 5G backup is the continuity layer.
:::

::: flip ["Just tell me how many APs we need."]
A site survey is required before any AP count—density depends on floor plan, device count, use case, and compliance. Promising counts on call one leads to under-engineered installs.
:::

::: flip ["We already connect to AWS directly."]
Ask how—public Internet or a private path? Cloud Connect's private Ethernet on-ramp eliminates Internet jitter for latency-sensitive workloads and adds multi-region resilience.
:::

::: flip ["We don't want cellular data leaving our building for compliance reasons."]
The Kajeet Sentinel portal filters non-business traffic during failover; GPC NOC monitors and manages the connection. Align specifics with SE and compliance team.
:::

::: flip ["5G backup is too expensive for a circuit we almost never use."]
Frame as insurance: the 5G Backup SKU starts at $68/month—compare to the cost of one four-hour outage for payment processing, patient care, or customer service.
:::

::: flip ["We only need guest WiFi—corporate can stay on what we have."]
Split networks are common; still qualify density, security policy, and who owns trouble tickets. Managed WiFi can isolate guest SSIDs while giving you one throat to choke for RF and firmware.
:::

</div>

---

## Technical Deep Dive [deep]

**Cloud Connect specs:**
- Private path to AWS, Azure, Google, and other clouds/SaaS via GPC's cloud ecosystem
- Managed Ethernet on-ramp; up to 10 Gbps cited in collateral
- Metro access: Omaha, Chicago, Denver
- SE alignment required for cross-connect details, diversity, and security scope

**5G Backup pricing & tiers (from product launch collateral):**
- LTE Wireless Internet Backup: $45 MRC, 1 GB included, $9/GB overage, 2-year minimum term
- 5G Wireless Internet Backup: $68 MRC, unlimited data, carrier deprioritization applies
- Wireless Internet Broadband (full-time): $175 MRC, unlimited, best-effort
- Optional battery backup: up to 8 hours runtime during power failure (NRC TBD)
- After failover data thresholds: >12 GB/day → up to 50 Mbps; >20 GB/day → up to 25 Mbps; >30 GB/day → up to 3 Mbps
- Failover time: approximately one minute; automatic fail-back when primary restores
- Hardware: Cradlepoint X20 5G router; dual SIMs (Verizon + AT&T); best signal auto-selected at install
- No static IP during wireless failover; static IPs work on landline only

**Managed Wi-Fi:** engineering-sized density post-survey; next-gen firewall, IDS/IPS, multiple SSIDs; analytics/branded portal available.

**Business rules for 5G backup:**
- Must be sold with new or existing SIA, DIA, or SD-WAN customers
- Do not sell outside GPC territory (exception: multi-location customers with off-net sites within driving distance—approval required)
- No SLA guarantees on wireless—all best-effort

::: accordion Cloud Connect Battle Card
*Collateral image — coming soon*
:::

::: accordion Managed Wi-Fi Collateral
*Collateral image — coming soon*

*Collateral image — coming soon*
:::

::: accordion 5G Wireless Internet Backup
*Collateral image — coming soon*

*Collateral image — coming soon*
:::
