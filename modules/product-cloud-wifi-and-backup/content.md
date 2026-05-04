---
id: product-cloud-wifi-and-backup
title: 'Cloud, Wi-Fi & Backup'
summary: Cloud Connect. Managed Wi-Fi. 5G Failover.
sensitivity: internal
reference_files:
  - label: 'Sales Resources (cloud, Wi‑Fi, backup collateral)'
    sharepoint_url: 'https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx'
discovery_questions:
  - 'If the internet goes down, what happens to your point-of-sale system or cloud-based CRM?'
  - Are your employees complaining about dead zones or slow connections in specific parts of the building?
  - You mentioned moving your servers to AWS. How are you currently managing the latency and routing predictability to that environment?
  - Which cloud or SaaS workloads are most sensitive to jitter or latency—and how do you reach them from each site today?
  - 'Do you have a secondary path when fiber fails, and does it share trenches or poles with the primary circuit?'
five_minute_summary: |
  - **Cloud Connect:** This is not internet. It is a private, predictable, jitter-free path directly from our network to AWS, Azure, or Google Cloud. Pitch it when they run mission-critical SaaS apps.
  - **Managed Wi-Fi:** We own the last 10 feet of connectivity. It includes guest network separation and fully managed lifecycle support. Never guess AP counts—always require a site survey.
  - **5G Wireless Backup:** The ultimate insurance policy. It provides automatic failover and NOC monitoring when the primary fiber gets cut.
  - **The pitch order:** Always sell the primary fiber first, then attach the 5G backup for redundancy, and finish with Wi-Fi to control the localized experience.
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
scenarios:
  - title: The Jittery Cloud
    situation: |
      A financial firm moved their entire database to AWS. They have a 1 Gig DIA circuit, but they are complaining about random lag spikes during the afternoon that disrupt their trading software.
    choices:
      - label: Tell them to upgrade to a 2 Gig DIA circuit to power through the lag.
        feedback: Throwing bandwidth at a latency problem doesn't work. The issue is public internet routing. They need Cloud Connect.
      - label: Pitch Cloud Connect. Explain that jumping off the public internet and using a private cross-connect will eliminate the routing jitter.
        feedback: Correct. Private paths solve latency variability. Match the tech to the problem.
roleplay:
  persona: IT Manager at a healthcare clinic network
  scenario: Had a fiber outage last month that took down patient scheduling and e-prescribing for four hours. Wants a solution but is skeptical of wireless backup speeds and worried about HIPAA data on a cellular network.
  goal: 'Position 5G backup as a managed, automatic failover solution with app prioritization and NOC monitoring—set honest speed/tier expectations while tying reliability to patient care continuity.'
---

## At a glance

- **Cloud Connect:** Private transport to hyperscalers (AWS, Azure, GCP). Bypasses public internet routing.
- **Managed Wi-Fi:** Fully managed edge. Requires a site survey. Do not quote blindly.
- **5G Wireless Backup:** Automatic failover for primary circuits. True physical diversity compared to a secondary wired connection.

---

## Pitch

::: elevator [Elevator Pitch]
When critical apps go down, nobody cares how cheap their internet was. This module covers three products that elevate our fiber. First, Cloud Connect: giving SaaS-heavy clients a private path to AWS or Azure to bypass internet jitter. Second, Managed Wi-Fi: covering the last ten feet with security and fully managed support—and why we never guess AP counts before a site survey. Finally, 5G Wireless Backup: the ultimate insurance policy, delivering automatic failover and NOC monitoring. Jump in, learn the guardrails, and position these as the ultimate uptime guarantees.
:::

---

## Discovery Questions

- "If the internet goes down, what happens to your point-of-sale system or cloud-based CRM?"
- "Are your employees complaining about dead zones or slow connections in specific parts of the building?"
- "You mentioned moving your servers to AWS. How are you currently managing the latency and routing predictability to that environment?"

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
- Bandwidth is prioritized for critical applications, but it is technically "best effort" via the wireless carrier (Verizon/AT&T).
- It is designed to keep the doors open and the registers ringing during an outage, not to run a 400-person video conference simultaneously. Set expectations accordingly.
