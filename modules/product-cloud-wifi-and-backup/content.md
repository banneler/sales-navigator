---
id: product-cloud-wifi-and-backup
title: 'Cloud, Wi-Fi, 5G'
summary: Cloud Connect. Managed Wi-Fi. 5G Wireless Backup & Broadband.
sensitivity: internal
reference_files:
  - label: 'Product Collateral (Cloud, Wi‑Fi, 5G)'
    sharepoint_url: 'https://gpcom.sharepoint.com/sites/gpcSales/Product%20Collateral/Forms/AllItems.aspx?viewid=855b9d9a%2D724a%2D4ba1%2D876e%2D2325aaaf29e5'
video_carousel:
  - title: 'GPC Cloud Connect — Overview'
    src: assets/cloud-wifi-5g/gpc-cloud-connect-overview.mp4
  - title: '5G Wireless Backup & Broadband — Product Launch'
    src: assets/wireless-backup/5g-wireless-product-launch.mp4
    poster: assets/wireless-backup/5g-wireless-product-launch.png
discovery_questions:
  - 'If the internet goes down, what happens to your point-of-sale system or cloud-based CRM?'
  - Are your employees complaining about dead zones or slow connections in specific parts of the building?
  - You mentioned moving your servers to AWS. How are you currently managing the latency and routing predictability to that environment?
  - Which cloud or SaaS workloads are most sensitive to jitter or latency—and how do you reach them from each site today?
  - 'Do you have a secondary path when fiber fails, and does it share trenches or poles with the primary circuit?'
  - When you stand up a new site, how long can you afford to wait for the fiber build before the location has to be open for business?
  - 'Are there locations on your footprint—seasonal, satellite, or rural—where fiber isn''t available today, and what are you running there now?'
five_minute_summary: |
  - **Field order:** Qualify the primary path first, attach resiliency second, then solve the local experience. Cloud Connect, Wi-Fi, Backup, and Broadband are different plays.
  - **Cloud Connect:** This is not more internet. It is private Layer 2 connectivity over GPC Ethernet into the cloud ecosystem, giving customers a more predictable path to providers like AWS, Azure, Google, Oracle, IBM, SAP, Nutanix, Salesforce, and Alibaba.
  - **Managed Wi-Fi:** We help own the last 10 feet of the experience. It is engineered around the site, with secure guest/private networks, access point options, installation through maintenance, and usage analytics. Do not quote AP counts from square footage alone.
  - **5G Wireless Backup:** The insurance policy *behind* primary fiber. It uses a professionally configured Cradlepoint router with automatic failover, automatic reversion, 24/7 NOC monitoring, app prioritization, and optional battery backup. Speeds and usage thresholds depend on the current product sheet and wireless conditions, so set expectations before signature.
  - **5G Wireless Broadband:** Cellular as the *primary* internet path. Two motions: (1) a temporary bridge while a fiber build is in flight, or (2) a permanent broadband plan where fiber is not the answer. The carrier hands out a DHCP IP, so anything hosted on prem will not be reachable from the internet. Temporary wireless service is **non-commissionable**; the customer starts billing at the contracted SIA/DIA rate once wireless is installed.
  - **The pitch order & ground rules:** Sell primary fiber first, attach 5G Backup for redundancy, and finish with Managed Wi-Fi for the localized experience. Use 5G Broadband to bridge a fiber install gap or to cover a site fiber can't reach. Wireless attaches to new or existing **SIA / DIA / SD-WAN** customers; do not sell outside GPC territory without approval. No SLAs: wireless is "best effort."
technical_deep_dive_tabs:
  aria_label: "Cloud, Wi-Fi, and 5G technical topics"
  intro: "Use the tabs as product lanes after the core sales story: cloud path, site Wi-Fi, outage backup, or temporary/permanent wireless broadband."
  tabs:
    - label: "Cloud Connect"
      body: |
        **What it is:** a private path from the GPC network to major cloud providers through an NNI (Network-to-Network Interface).

        - Bypasses the public internet for cloud workloads, which makes performance more predictable and mitigates jitter.
        - Best fit when the customer runs mission-critical workloads in AWS, Azure, Google Cloud, Oracle, IBM, SAP, Nutanix, Salesforce, Alibaba, or similar environments.
        - Requires both an Ethernet connection and at least one Cloud Connect product. GPC provides the connectivity, not the customer's cloud service.
        - This is not "more internet." It is a private cloud path layered on top of the access conversation.
    - label: "Managed Wi-Fi"
      body: |
        **What it is:** GPC-managed wireless coverage for the customer site, from installation and turn-up through maintenance.

        - Engineer the design around current and future needs; do not guess AP counts from square footage alone.
        - Position this as owning the last 10 feet of connectivity: secure guest/private networks, indoor and outdoor AP options, analytics, branded login capability, and a better user experience inside the building.
        - Good discovery sounds practical: "Do you have reliable coverage?", "Is the Wi-Fi secure?", and "Who manages it when users complain?"
    - label: "5G Backup"
      body: |
        **What it is:** automatic wireless failover behind the customer's primary GPC wireline circuit (SIA, DIA, or SD-WAN).

        - Uses Cradlepoint X20-5G CPE, or E100 LTE on the lower tier, installed and managed by GPC.
        - Cellular underlay is Verizon and/or AT&T through Kajeet; failover typically completes in about a minute.
        - Optional battery backup can provide up to 8 hours of power to the router during an outage.
        - It is "best effort" with no SLA. The goal is to keep doors open and registers ringing, not replace fiber during a multi-day outage.

        Usage tiers may reduce wireless throughput during extended failover. Use the current product sheet for the active thresholds; the table below is a training guide, not a customer-facing SLA.

        | Total monthly usage (current product sheet) | Speed after threshold |
        | --- | --- |
        | After **12 GB** | Up to **50 Mbps** |
        | After **20 GB** | Up to **25 Mbps** |
        | After **30 GB** | Up to **3 Mbps** |

        **Static IP gotcha:** static IPs work on the GPC landline side, but the carrier hands out a different DHCP IP during failover. If inbound services depend on a static IP, document that they break during the outage.
    - label: "5G Broadband"
      body: |
        **What it is:** cellular as the primary internet path, not a failover path.

        - Uses a professionally configured Cradlepoint router and wireless carrier service; managed by GPC.
        - **Temporary bridge:** wireless covers a new site that must open before the fiber build completes. When fiber turns up, the Cradlepoint re-roles as 5G Backup behind the new SIA/DIA circuit.
        - **Permanent broadband:** wireless is the long-term primary at sites where fiber is not available in footprint, including rural or hard-to-reach edges.
        - Current permanent Broadband pricing shows **25 Mbps** and **50 Mbps** plans. Bandwidth is still best effort, varies by location and time of day, and carrier priority-data thresholds can change by product sheet.
        - **No static IP:** the public IP comes from the carrier via DHCP, so on-prem hosted services are not reachable from the internet. If on-prem hosting is in scope, lead with SIA/DIA.
        - Temporary wireless service is **non-commissionable**; track the fiber install because the SIA/DIA sale is where the commission lands.
knowledge_checks:
  - question: "A prospect wants to know how much 15 Wi-Fi Access Points will cost for their new warehouse. What do you do?"
    options:
      - "Look at the pricing sheet for 15 APs and send them a rough estimate."
      - "Assume a warehouse needs double the APs and quote them 30 just to be safe."
      - "Pause the blind quote and get the site engineered before AP counts are final."
    correct_index: 2
    explanation: "Never guess on Wi-Fi. Coverage depends on the environment and the customer's needs, so engineer the design before quoting AP counts."

  - question: "What is the primary technical advantage of Cloud Connect over a standard Dedicated Internet Access (DIA) circuit?"
    options:
      - "Cloud Connect is significantly cheaper than DIA."
      - "Cloud Connect bypasses the public internet, reducing variable latency and jitter for cloud workloads."
      - "Cloud Connect provides built-in DDoS protection for their website."
    correct_index: 1
    explanation: "DIA still uses the public internet. Cloud Connect provides private Layer 2 connectivity into the cloud ecosystem."

  - question: "A customer says they don't need 5G Backup because they have a cheap coax cable connection from a competitor as their backup. What is your response?"
    options:
      - "Agree that cable is a fine backup and focus on selling the primary fiber."
      - "Point out that cable and fiber often share the same physical utility poles. If a truck hits the pole, both go down. 5G offers true path diversity."
      - "Offer to lower the price of our 5G Backup to beat the cable provider's price."
    correct_index: 1
    explanation: "Wired backups often share the same physical vulnerabilities (trenches, poles, building entry). Wireless provides actual physical diversity."

  - question: "A customer's new retail location goes live in 14 days, but the fiber build for that address won't be ready for 90. They're already a GPC SIA customer at their main office. What's the right play?"
    options:
      - "Use 5G Wireless Broadband as a temporary bridge, then convert it to Backup when fiber lights."
      - "Tell them to delay the store opening until the fiber circuit is installed."
      - "Make cellular the permanent primary path because it performs the same as fiber."
    correct_index: 0
    explanation: "Bridging a fiber install gap is the textbook temporary use case for Wireless Broadband. Same hardware re-roles as Backup once fiber turns up—remember the commission lands on the SIA/DIA, not the temporary bridge."

  - question: "A prospect wants to run a small ERP server on-premise and reach it from the public internet. They love the idea of 5G Wireless Broadband as their primary connection because it installs faster than fiber. Are they a fit?"
    options:
      - "Yes—Cradlepoint will port-forward a public IP through to the on-prem server."
      - "No—Wireless Broadband uses carrier DHCP, so inbound hosted services need SIA or DIA."
      - "Yes—you can request a static IP from the cellular carrier for an additional fee."
    correct_index: 1
    explanation: "Static IPs work on the GPC landline side only. Neither Backup (during failover) nor Broadband supports prem-hosted services reachable from the internet. If the customer hosts inbound services, lead with SIA/DIA."

  - question: "You close a 5G Wireless Broadband deal at a customer site that's still waiting on a fiber install. When do you get commissioned?"
    options:
      - "At install, like every other wireless circuit."
      - "At half the rate of a permanent wireless contract."
      - "When the SIA/DIA contract commissions after fiber lights and the wireless converts to Backup."
    correct_index: 2
    explanation: "Temporary wireless service is non-commissionable—a hard GPC business rule. Plan your pipeline accordingly and stay close to the fiber install date so the SIA/DIA commission actually lands."

scenarios:
  - title: The Jittery Cloud
    situation: |
      A financial firm moved their entire database to AWS. They have a 1 Gig DIA circuit, but they are complaining about random lag spikes during the afternoon that disrupt their trading software.
    choices:
      - label: Tell them to upgrade to a 2 Gig DIA circuit to power through the lag.
        feedback: Throwing bandwidth at a latency problem doesn't work. The issue is public internet routing. They need Cloud Connect.
      - label: Pitch Cloud Connect. Explain that jumping off the public internet and using a private cloud path can reduce routing jitter.
        feedback: Correct. Private paths make cloud performance more predictable. Match the tech to the problem.
  - title: The Fiber-Island Bridge
    situation: |
      A regional grocery chain is opening a 12,000-sq-ft satellite store on the edge of GPC's serviceable footprint. Go-live is 30 days out. The fiber build for that address has a 75-day engineering and trench window. They already have GPC DIA at HQ.
    choices:
      - label: Tell them to push the store opening—fiber is the only safe option, and a 45-day gap is the cost of doing business.
        feedback: Pushing a store opening for a 45-day fiber gap will torch the relationship. There is a faster, GPC-approved play.
      - label: 'Use 5G Wireless Broadband as a temporary bridge, then convert it to Backup behind the new wireline circuit.'
        feedback: 'Correct. Bridge the install gap with wireless, then convert to Backup at fiber turn-up. Two things to remember: the bridge period is non-commissionable (your commission lands on the SIA/DIA when fiber lights), and the store cannot host inbound services on the wireless DHCP IP during the bridge.'
      - label: Sell them a cheap consumer cellular hotspot as a stopgap and circle back when fiber's ready.
        feedback: Off-net and unmanaged—GPC has nothing to monitor or warranty, and you have no path to convert to Backup. That is the gap Wireless Broadband exists for: managed bridge now, then convert to Backup when fiber lands.
  - title: The Static-IP Trap
    situation: |
      A small accounting firm wants to ditch their slow cable internet. They like the idea of 5G Wireless Broadband as a faster path than waiting for a fiber build. They also self-host a client portal on a server in their back office and need it reachable from the public internet.
    choices:
      - label: Sell the 5G Wireless Broadband and tell them you'll request a static IP from the carrier as a follow-up.
        feedback: Wireless Broadband uses carrier DHCP, so promising a static IP is a commitment you cannot deliver.
      - label: Walk back from Wireless Broadband. Position SIA or DIA as the right product because they need a static IP for inbound traffic to their on-prem portal—then attach 5G Backup for true path diversity.
        feedback: 'Correct. Static IP is a wireline-only feature in our portfolio. Lead with SIA/DIA when on-prem hosting is in scope, and use 5G as the redundancy layer.'
      - label: Sell them the Wireless Broadband anyway and have Cradlepoint port-forward through the carrier IP.
        feedback: Port-forwarding through a DHCP carrier IP is unreliable and unsupported as a managed deliverable. The right answer is a wireline circuit with a static IP.
roleplay:
  persona: IT Manager at a healthcare clinic network
  scenario: Had a fiber outage last month that took down patient scheduling and e-prescribing for four hours. Wants a solution but is skeptical of wireless backup speeds and worried about HIPAA data on a cellular network.
  goal: 'Position 5G backup as a managed, automatic failover solution with app prioritization and NOC monitoring—set honest speed/tier expectations while tying reliability to patient care continuity.'
---

## At a glance

- **Cloud Connect:** Private transport to hyperscalers (AWS, Azure, GCP). Bypasses public internet routing.
- **Managed Wi-Fi:** Fully managed edge. Engineer the design before quoting AP counts.
- **5G Wireless Backup:** Automatic failover for primary circuits. True physical diversity compared to a secondary wired connection.
- **5G Wireless Broadband:** Cellular as the *primary* internet path—either a temporary bridge while a fiber build runs, or the long-term answer where fiber isn't available. Attaches to new or existing SIA / DIA / SD-WAN customers; do not sell outside GPC territory without approval.

---

## Pitch

::: elevator [Elevator Pitch]
We make sure your team can actually reach the cloud without the public internet slowing them down. From private paths into AWS and Azure, to fully managed Wi-Fi in your office, right down to automatic 5G backup if a fiber line gets cut—we keep your critical apps running.
:::

---

## Discovery Run

<div class="rounded-2xl border border-emerald-200/80 overflow-hidden bg-slate-50 shadow-sm">
  <iframe
    src="games/portfolio-level-1/index.html?embed=1&module=product-cloud-wifi-and-backup"
    title="Discovery Run — Level 1"
    loading="lazy"
    sandbox="allow-scripts allow-same-origin"
    style="width: 100%; border: 0; display: block; aspect-ratio: 16 / 10.5; height: auto; max-height: min(88vh, 44rem); background: #f1f5f9;"
  ></iframe>
</div>

---

## Technical Deep Dive [deep]

Start with the sales sequence before the specs: qualify the primary path, decide whether resiliency, cloud performance, site experience, or a fiber timing gap is the pain, then use the tab that matches the customer problem.
