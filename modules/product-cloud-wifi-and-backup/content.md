---
id: product-cloud-wifi-and-backup
title: 'Cloud, Wi-Fi & Backup'
summary: Cloud Connect. Managed Wi-Fi. 5G Wireless Backup & Broadband.
sensitivity: internal
reference_files:
  - label: 'Sales Resources (cloud, Wi‑Fi, backup collateral)'
    sharepoint_url: 'https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx'
video_carousel:
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
  - **Cloud Connect:** This is not internet. It is a private, predictable, jitter-free path directly from our network to AWS, Azure, or Google Cloud. Pitch it when they run mission-critical SaaS apps.
  - **Managed Wi-Fi:** We own the last 10 feet of connectivity. It includes guest network separation and fully managed lifecycle support. Never guess AP counts—always require a site survey.
  - **5G Wireless Backup:** The insurance policy *behind* primary fiber. Cradlepoint X20-5G with automatic failover, automatic reversion, and an optional 8-hour backup battery. The cellular underlay is Verizon/AT&T—heavy users hit a daily throttle after failover, so set expectations.
  - **5G Wireless Broadband:** Cellular as the *primary* internet path. Two motions: (1) a temporary bridge while a fiber build is in flight, or (2) the long-term answer where fiber isn't available. Same Cradlepoint hardware as Backup, but the carrier hands out a DHCP IP—anything hosted on prem will not be reachable from the internet. Temporary wireless service is **non-commissionable**; you earn the commission once the fiber circuit lights.
  - **The pitch order & ground rules:** Sell primary fiber first, attach 5G Backup for redundancy, and finish with Managed Wi-Fi for the localized experience. Use 5G Broadband to bridge a fiber install gap or to cover a site fiber can't reach. Wireless is **in-territory only** and **only attaches to SIA / DIA / SD-WAN**—it's not a stand-alone offer. No SLAs: every wireless circuit is "best effort."
knowledge_checks:
  - question: A prospect wants to know how much 15 Wi-Fi Access Points will cost for their new warehouse. What do you do?
    options:
      - Refuse to quote AP counts blindly. Tell them a proper site survey is mandatory to ensure coverage and avoid dead zones.
      - Look at the pricing sheet for 15 APs and send them a rough estimate.
      - Assume a warehouse needs double the APs and quote them 30 just to be safe.
    correct_index: 0
    explanation: 'Never guess on Wi-Fi. A warehouse full of metal racks is a nightmare for signal. Survey first, quote second.'
  - question: What is the primary technical advantage of Cloud Connect over a standard Dedicated Internet Access (DIA) circuit?
    options:
      - 'Cloud Connect bypasses the public internet entirely, eliminating variable latency and jitter for cloud workloads.'
      - Cloud Connect is significantly cheaper than DIA.
      - Cloud Connect provides built-in DDoS protection for their website.
    correct_index: 0
    explanation: 'DIA still uses the public internet. Cloud Connect is a private, dedicated lane straight to the cloud provider.'
  - question: A customer says they don't need 5G Backup because they have a cheap coax cable connection from a competitor as their backup. What is your response?
    options:
      - 'Point out that cable and fiber often share the same physical utility poles. If a truck hits the pole, both go down. 5G offers true path diversity.'
      - Agree that cable is a fine backup and focus on selling the primary fiber.
      - Offer to lower the price of our 5G Backup to beat the cable provider's price.
    correct_index: 0
    explanation: 'Wired backups often share the same physical vulnerabilities (trenches, poles, building entry). Wireless provides actual physical diversity.'
  - question: "A customer's new retail location goes live in 14 days, but the fiber build for that address won't be ready for 90. They're already a GPC SIA customer at their main office. What's the right play?"
    options:
      - Tell them to delay the store opening until the fiber circuit lights.
      - Sell them 5G Wireless Broadband as a temporary bridge—the Cradlepoint goes in now, and once fiber lights it converts into a Wireless Backup attachment behind the new SIA/DIA.
      - 'Sell them a permanent 5G Wireless Broadband contract since cellular is effectively the same as fiber for a retail site.'
    correct_index: 1
    explanation: 'Bridging a fiber install gap is the textbook temporary use case for Wireless Broadband. Same hardware re-roles as Backup once fiber turns up—remember the commission lands on the SIA/DIA, not the temporary bridge.'
  - question: "A prospect wants to run a small ERP server on-premise and reach it from the public internet. They love the idea of 5G Wireless Broadband as their primary connection because it installs faster than fiber. Are they a fit?"
    options:
      - 'Yes—Cradlepoint will port-forward a public IP through to the on-prem server.'
      - 'Yes—you can request a static IP from the cellular carrier for an additional fee.'
      - 'No—Wireless Broadband uses a DHCP IP from the carrier, so anything hosted on prem is unreachable from the internet. They need SIA or DIA for that workload.'
    correct_index: 2
    explanation: 'Static IPs work on the GPC landline side only. Neither Backup (during failover) nor Broadband supports prem-hosted services reachable from the internet. If the customer hosts inbound services, lead with SIA/DIA.'
  - question: "You close a 5G Wireless Broadband deal at a customer site that's still waiting on a fiber install. When do you get commissioned?"
    options:
      - At install, like every other wireless circuit.
      - Never. Temporary wireless service is non-commissionable—you're commissioned on the SIA/DIA contract once the fiber circuit lights and the wireless converts to Backup.
      - At half the rate of a permanent wireless contract.
    correct_index: 1
    explanation: 'Temporary wireless service is non-commissionable—a hard GPC business rule. Plan your pipeline accordingly and stay close to the fiber install date so the SIA/DIA commission actually lands.'
scenarios:
  - title: The Jittery Cloud
    situation: |
      A financial firm moved their entire database to AWS. They have a 1 Gig DIA circuit, but they are complaining about random lag spikes during the afternoon that disrupt their trading software.
    choices:
      - label: Tell them to upgrade to a 2 Gig DIA circuit to power through the lag.
        feedback: Throwing bandwidth at a latency problem doesn't work. The issue is public internet routing. They need Cloud Connect.
      - label: Pitch Cloud Connect. Explain that jumping off the public internet and using a private cross-connect will eliminate the routing jitter.
        feedback: Correct. Private paths solve latency variability. Match the tech to the problem.
  - title: The Fiber-Island Bridge
    situation: |
      A regional grocery chain is opening a 12,000-sq-ft satellite store on the edge of GPC's serviceable footprint. Go-live is 30 days out. The fiber build for that address has a 75-day engineering and trench window. They already have GPC DIA at HQ.
    choices:
      - label: Tell them to push the store opening—fiber is the only safe option, and a 45-day gap is the cost of doing business.
        feedback: Pushing a store opening for a 45-day fiber gap will torch the relationship. There is a faster, GPC-approved play.
      - label: 'Sell 5G Wireless Broadband as a temporary bridge. Engineering installs the Cradlepoint X20-5G now; when fiber lights at day 75, the same hardware re-roles as 5G Backup behind the new SIA/DIA circuit.'
        feedback: 'Correct. Bridge the install gap with wireless, then convert to Backup at fiber turn-up. Two things to remember: the bridge period is non-commissionable (your commission lands on the SIA/DIA when fiber lights), and the store cannot host inbound services on the wireless DHCP IP during the bridge.'
      - label: Sell them a cheap consumer cellular hotspot as a stopgap and circle back when fiber's ready.
        feedback: Off-net and unmanaged—GPC has nothing to monitor or warranty, and you have no path to convert to Backup. This gap is exactly what our Wireless Broadband SKU is designed to close.
  - title: The Static-IP Trap
    situation: |
      A small accounting firm wants to ditch their slow cable internet. They love that 5G Wireless Broadband can install in days instead of waiting for a fiber build. They also self-host a client portal on a server in their back office and need it reachable from the public internet.
    choices:
      - label: Sell the 5G Wireless Broadband and tell them you'll request a static IP from the carrier as a follow-up.
        feedback: There is no carrier-provided static IP path on Wireless Broadband—the carrier hands out DHCP. Promising a static IP is a commitment you cannot deliver.
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
- **Managed Wi-Fi:** Fully managed edge. Requires a site survey. Do not quote blindly.
- **5G Wireless Backup:** Automatic failover for primary circuits. True physical diversity compared to a secondary wired connection.
- **5G Wireless Broadband:** Cellular as the *primary* internet path—either a temporary bridge while a fiber build runs, or the long-term answer where fiber isn't available. Attaches to SIA / DIA / SD-WAN only; in-territory only.

---

## Pitch

::: elevator [Elevator Pitch]
When critical apps go down, nobody cares how cheap their internet was. We protect your uptime with a private, jitter-free Cloud Connect path to AWS/Azure, secure Managed Wi-Fi for the last ten feet, and 5G Wireless—either as the insurance policy behind primary fiber, or as the primary path itself when fiber isn't there yet.
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

**Cloud Connect:**
- We establish a private NNI (Network-to-Network Interface) with the major cloud providers.
- Bypassing the public internet inherently secures the transport layer and stabilizes latency.
- Always involve a Solutions Engineer (SE) to map the cross-connects properly.

**Managed Wi-Fi:**
- Includes AP hardware, licensing, and NOC support.
- Requires a predictive or physical site survey. Building materials (concrete, metal racks, glass) heavily impact radio frequencies. Guessing AP counts results in bad deployments and angry customers.

**5G Wireless Backup:**
- Sits behind the customer's primary GPC wireline circuit (SIA, DIA, or SD-WAN). Only active during a primary-circuit outage—fails over and fails back automatically.
- Hardware: Cradlepoint X20-5G CPE (or E100 LTE on the lower tier) installed and managed by GPC; optional ~8-hour backup battery for site-wide power loss.
- Cellular underlay is Verizon and/or AT&T; the wireless connectivity itself is procured through Kajeet. Failover typically completes in about a minute.
- "Best effort"—no SLA. After failover, heavy daily usage hits a **carrier-side throttle** on the 5G tier—the customer doesn't get "unlimited at full speed" through a multi-day outage. Walk the table **before** signature so nobody panic-calls you mid-disaster:

| Daily usage on failover (approx.) | Speed cap after throttle |
| --- | --- |
| After **12 GB** | Up to **50 Mbps** |
| After **20 GB** | Up to **25 Mbps** |
| After **30 GB** | Up to **3 Mbps** |

The product is designed to keep the doors open and the registers ringing during an outage, not to run a 400-person video conference simultaneously. Set expectations.
- **Static IP gotcha:** Static IPs work on the GPC landline side, but the carrier hands out a different (DHCP) IP during failover. If the customer has inbound services tied to a static IP, they break during the outage—document this expectation up front.

**5G Wireless Broadband:**
- Cellular as the *primary* internet path—full-time, not failover. Same Cradlepoint X20-5G CPE and Verizon/AT&T underlay (via Kajeet) as Backup; managed and monitored by GPC.
- **Two motions:**
    - **Temporary bridge:** Wireless covers a new site that needs to be open for business before its fiber build completes. When fiber turns up, the same Cradlepoint re-roles as 5G Backup behind the new SIA/DIA circuit. Customer is billed at the contracted SIA/DIA rate from day one; the temporary wireless service is **non-commissionable**, so reps earn the commission on the wireline circuit when fiber lights.
    - **Permanent:** Wireless is the long-term primary at sites where fiber isn't available (in-footprint but unreachable, rural, MDU edges). Unlimited data, no overage charges, no bandwidth limits—but still "best effort."
- Throughput is typically **up to ~100 Mbps and higher**, varying by carrier, location, signal, building penetration, and tower congestion. Wireless is asymmetric and every location is different—never quote it like fiber.
- **No static IP** on Wireless Broadband. The customer's public IP comes from the carrier via DHCP, so anything hosted on prem (mail server, VPN concentrator, ERP web frontend, etc.) is **not reachable from the internet**. If on-prem hosting is in scope, lead with SIA/DIA.

**Wireless business rules (Backup *and* Broadband):**
- Sell **in GPC territory only**.
- Wireless Internet attaches to **new or existing SIA, DIA, or SD-WAN** customers—it's not a stand-alone offer.
- **No SLA guarantees**—all wireless circuits are "best effort."
- **Temporary wireless service is non-commissionable** (see commission rule above). Permanent Broadband and standalone Backup commission normally.
- Wireless Broadband (temporary) converts to Backup automatically once the customer's fiber install lights up.
