---
id: "product-security-and-sd-wan"
title: "Security & SD-WAN"
summary: "Threat protection. Resilient WAN. Managed operations."
sensitivity: "public"
reference_files:
  - label: "Product Collateral (security & SD-WAN)"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/gpcSales/Product%20Collateral/Forms/AllItems.aspx?viewid=855b9d9a%2D724a%2D4ba1%2D876e%2D2325aaaf29e5"
video_sections_as_tabs: true
video_sections_tabs_heading: "GPC Product Specifics"
video_sections_tabs_aria_label: "GPC security, DDoS, and SD-WAN product specifics"
video_sections_after_section: "At a glance"
video_sections:
  - heading: "Managed Network Security"
    intro: "The managed-security lane for customers who need monitoring, policy help, and security expertise around the network."
    body: |
      **GPC flavor:** Managed Network Security (MNS) is the broader service lane for customers who need managed firewall, firewall management, SIEM, assessments, vulnerability scanning, or email security support.

      - **Portfolio umbrella:** Use this lane when the customer needs an operating model, not only a device.
      - **Firewall Management:** GPC can manage and monitor customer-owned firewalls across leading vendors, with 24/7 SOC monitoring, alerting, management, and troubleshooting.
      - **Operational discipline:** The value is staff relief: fewer blind spots, cleaner policies, regular updates, and a clearer path when threats or compliance needs change.
      - **SOC-backed monitoring:** The collateral points to SOC 2-compliant operations and 24x7x365 monitoring for network and security services.

      **Value:** GPC extends the customer's IT/security team with monitoring, management, and practical security services around the network.
  - heading: "Managed Firewall"
    intro: "The GPC-provided Fortinet appliance path within the MNS family."
    body: |
      **GPC flavor:** Managed Firewall is the turnkey path where GPC provisions and manages the hardware at the edge.

      - **GPC-Provided Hardware:** Built around the FortiGate Next-Generation Firewall, standardized for high performance and SOC integration.
      - **The "One Provider" Benefit:** Consolidation of the circuit, the equipment, and the SOC support onto a single bill with no finger-pointing.
      - **Edge Control:** Best for customers who lack the IT staff or CapEx to own and support high-performance firewall hardware in-house.
      - **Proactive Management:** Includes professional configuration, software/firmware updates, patch management, and FortiGuard-backed threat protection.
  - heading: "DDoS Protection"
    intro: "Use this when availability is the risk: websites, public apps, customer portals, voice, or critical circuits."
    body: |
      - **Proactive (Always-On):** 24x7 automated monitoring, notifications, and mitigation for mission-critical services where downtime at any hour creates revenue or reputation risk.
      - **On-demand (Business Hours):** 24x7 monitoring and notifications, with mitigation available weekdays from 8 am to 5 pm and requested by the customer. Do not let the customer hear this as automated 24x7 mitigation.
      - **Portal and protection:** Current collateral calls out customer traffic analytics, bandwidth-based thresholds, 10 Mbps to 100 Gbps coverage, BGP FlowSpec, and TMS protection on the proactive service.
  - heading: "SD-WAN"
    intro: "Use this when the customer needs WAN control, app prioritization, visibility, and managed operations across locations."
    body: |
      **Visibility:** Use the Orchestrator for centralized configuration, monitoring, troubleshooting, and real-time application visibility. **Warning:** SD-WAN includes secure transport and edge capabilities, but advanced security features such as NGFW/IDS/IPS are optional and must be scoped explicitly.
discovery_questions:
  - "How many locations do you have, and which ones are on GPC fiber vs. other broadband or MPLS?"
  - "How are those locations connected today—VPN over shared Internet, MPLS, Ethernet? When does that contract expire?"
  - "What are your most important applications? Do you use SaaS like O365 or Salesforce, and are they hosted on-prem or in the cloud?"
  - "Have you experienced a security incident, ransomware event, or DDoS attack? Who manages your firewalls today?"
  - "Do you need 24/7 protection, or can your business afford to be offline if a DDoS attack hits on a weekend?"
  - "If a security alert triggers at 2:00 AM on a Saturday, who is responsible for triaging it, and do they have the tools to stop it immediately?"
five_minute_summary: |
  - **Security is risk reduction:** Customers buy managed security because outages, ransomware, bad firewall policy, and unmanaged edge devices create business risk—not because they love appliances.
  - **Firewall vs. security program:** A firewall controls traffic at the edge. A broader managed security program adds monitoring, policy management, visibility, assessment, and response discipline.
  - **DDoS is availability protection:** Distributed attacks try to overwhelm a public-facing service or circuit. The sales question is not "Do you have DDoS?"—it is "What happens if customers cannot reach you?"
  - **SD-WAN is control over the WAN:** It steers traffic across multiple access paths, prioritizes critical apps, improves visibility, and can reduce reliance on legacy private networks.

knowledge_checks:
  - question: "How does DDoS Protection proactive differ from on-demand for mitigation windows?"
    options:
      - "Both tiers provide the same 24×7 mitigation window, so price is the main difference."
      - "On-demand is the faster path when the customer wants automated overnight response."
      - "Proactive covers 24×7 mitigation; on-demand is limited to weekday business hours."
    correct_index: 2
    explanation: "On-demand is not 24×7 mitigation on that SKU. If the customer has overnight or weekend exposure, qualify the risk before they buy the cheaper tier."

  - question: "What customer problem usually makes SD-WAN worth discussing?"
    options:
      - "They have multiple sites, mixed access paths, or critical apps that need better routing and visibility."
      - "They need a faster public website but do not care how branch traffic is routed."
      - "They want a cheaper firewall but have no branch connectivity or application performance issue."
    correct_index: 0
    explanation: "SD-WAN is valuable when the customer needs control over how traffic moves across sites and access paths. The business story is uptime, app performance, and operational visibility."

  - question: "Why should reps be careful when a customer asks whether SD-WAN includes advanced security?"
    options:
      - "Every advanced security line in collateral is included in the base SKU."
      - "SD-WAN and security are related, but not every firewall or threat-prevention control is automatically included."
      - "Security features are irrelevant once the customer has multiple sites."
    correct_index: 1
    explanation: "SD-WAN and security overlap, but they are not the same thing. Confirm what security capabilities are included before the customer hears 'SD-WAN solves all firewall needs.'"

  - question: "What does a broader managed security conversation add beyond a firewall?"
    options:
      - "Monitoring, policy management, visibility, assessments, and response discipline around the customer's risk."
      - "A lower-cost firewall label with no change in monitoring or operational responsibility."
      - "A WAN replacement that removes the need to discuss security policy or incidents."
    correct_index: 0
    explanation: "A firewall is a control point; managed security is the operating model around risk. The more the customer lacks time, tools, or staff, the more that operating model matters."

  - question: "What is the sales value of a managed firewall?"
    options:
      - "It guarantees compliance certification by itself without any customer process change."
      - "It gives the customer a managed edge control with monitoring, policy support, and fewer break-fix burdens."
      - "It removes the need to ask about applications, users, locations, and risk."
    correct_index: 1
    explanation: "The value is not just the box. It is having a managed control point, visibility, and operational support so the customer is not alone when policy or threats change."

  - question: "When a customer wants always-on DDoS mitigation but selected on-demand for price, what should you do?"
    options:
      - "Tell them on-demand matches proactive timing so the lower price feels easier."
      - "Document the lower tier only after signature so the deal keeps moving."
      - "Explain the mitigation windows and align the SKU to the customer's uptime risk."
    correct_index: 2
    explanation: "Match the DDoS SKU to the customer's real uptime need. A cheaper tier can become expensive fast if an attack lands outside the covered window."

  - question: "For SD-WAN discovery, what should you clarify about security?"
    options:
      - "Assume every firewall and threat-prevention capability is included by default."
      - "Ignore security because SD-WAN is only about saving money on access."
      - "Clarify which security controls are included, optional, or better handled as a separate managed security scope."
    correct_index: 2
    explanation: "SD-WAN improves traffic steering and visibility, but security still needs scope. Clarifying controls keeps the design honest and prevents accidental overpromises."

  - question: "When should you bring in technical resources before the customer hears a firm design?"
    options:
      - "When the scope includes complex routing, high availability, security add-ons, compliance requirements, or high-scale needs."
      - "Never; sales owns firewall, routing, and compliance design without technical review."
      - "Only after signature, when the customer has already accepted the order."
    correct_index: 0
    explanation: "The collateral points to pre-sales technical consulting and managed design work for SD-WAN and security. Bring technical resources in before scope turns into a customer promise."

  - question: "What is sound positioning for the SD-WAN platform vs competitors?"
    options:
      - "Cite unverified spec-for-spec claims as facts."
      - "Promise feature parity with any competitor SD-WAN without review."
      - "Use GPC's managed operations, WAN-edge fit, and support story, then validate specific comparisons."
    correct_index: 2
    explanation: "The battle card positions GPC around a strong SD-WAN platform, nationwide reach, and personal local support. Keep competitor comparisons specific and verified."

  - question: "How should pricing examples and fee schedules be used?"
    options:
      - "Post them publicly on the customer website."
      - "Discard them; pricing is always verbal only."
      - "Use them as quoting inputs, then confirm current pricing through the approved quote path."
    correct_index: 2
    explanation: "Pricing examples and fee schedules are quoting inputs, not live customer promises. Confirm current pricing through the approved quote process."

scenarios:
  - title: "Customer wants '24/7 DDoS' but budgets for on-demand"
    situation: |
      Wants always-on mitigation; picked **on-demand** for price—set expectations pre-signature.
    choices:
      - label: "Tell them on-demand is the same as proactive for mitigation timing."
        feedback: "That creates a 24×7 expectation the SKU does not support. Clarify the mitigation windows and document what they actually bought."

      - label: "Explain proactive vs on-demand windows; align SKU to uptime needs."
        feedback: "Correct. Tie the SKU to the real risk window and make sure the customer understands what happens outside weekday business hours."

  - title: "RFP assumes full next-gen firewall in base SD-WAN"
    situation: |
      Procurement pasted IDS/IPS into RFP as included in base SD-WAN at one price.
    choices:
      - label: "Bid base SD-WAN and assume all security lines are included."
        feedback: "That turns an RFP assumption into your promise. Map each security line to base scope or add-on scope with technical and quoting support."

      - label: "Review optional NGFW/IDS lines, map RFP lines to quoted SKUs, and document what is in base vs add-on."
        feedback: "Correct. The win is a clean scope, not pretending every security feature is bundled into base SD-WAN."

roleplay:
  persona: "Skeptical IT Director at a regional bank with 12 branches"
  scenario: "Currently running MPLS between branches. Complaining about VPN jitter on shared broadband at smaller locations. Thinks SD-WAN is just 'expensive router software' and insists on managing their own Cisco gear."
  goal: "Qualify multi-site footprint and GPC fiber anchors, then pivot from DIY network management to GPC's fully managed SD-WAN—frame as operational savings, 24/7 NOC support, and cloud breakout improvement rather than a technology debate."
---

## At a glance

- **Managed security:** **Managed Network Security (MNS)** is the broader security-services lane: Managed Firewall, firewall management for customer-owned gear, SIEM, assessments, vulnerability scanning, and email security. **Managed Firewall** is the GPC-provided Fortinet path at the edge. Match the scope to the buyer's real need.
- **DDoS:** Availability protection for public-facing services and circuits. The key question is the cost of being unreachable during an attack.
- **SD-WAN:** A software-defined way to steer traffic, prioritize applications, and manage multiple access paths across sites.
- **Security scope:** SD-WAN, Managed Firewall, DDoS, and the broader **MNS** program solve related but different problems. Define the risk before naming the product.

---

## Pitch

::: elevator [Elevator Pitch]
We help customers keep the network available, controlled, and visible. Security protects the edge and reduces threat risk; SD-WAN makes the WAN easier to steer and manage. Outages and alerts get handled with a plan, not by the customer's IT person guessing at 2 a.m.
:::

---

## Discovery Break

<div class="mt-4 rounded-2xl border border-emerald-200/80 overflow-hidden bg-slate-50 shadow-sm">
  <iframe
    src="games/brick-breaker-1/index.html?embed=1&module=product-security-and-sd-wan"
    title="Discovery Break — Brick breaker"
    loading="lazy"
    sandbox="allow-scripts allow-same-origin"
    style="width: 100%; border: 0; display: block; aspect-ratio: 16 / 13; height: auto; max-height: min(88vh, 44rem); background: #f1f5f9;"
  ></iframe>
</div>

---

## Objection Handling

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

::: flip ["We manage our own Cisco gear."]
That's where MNS firewall management can fit. GPC can manage and monitor existing firewalls across leading vendors, giving you staff relief without forcing a hardware rip-and-replace conversation first.
:::

::: flip ["Our current solution works fine."]
Ask: do you have visibility into application performance across all sites? SD-WAN Orchestrator provides real-time views into access link performance and lets you prioritize critical apps—even over a single link.
:::

::: flip ["SD-WAN is too expensive."]
SD-WAN pricing is positioned between SIA and DIA in the training material, with Internet bandwidth purchased separately. The ROI story is replacing complex MPLS, reducing backhaul, improving app performance, and lowering day-to-day management burden. Confirm current pricing through the quote path.
:::

::: flip ["We only have sites in Nebraska."]
SD-WAN works over any transport—GPC fiber, cable, DSL, T1, or 4G/5G wireless. With at least one site on GPC fiber, all US locations including off-net branches can participate.
:::

::: flip ["The on-demand DDoS is fine—we're not a target."]
On-demand includes 24x7 monitoring and notifications, but mitigation is available weekdays from 8 am to 5 pm and must be requested. Let's align the SKU to your actual uptime risk.
:::

::: flip ["Is NGFW included in the base SD-WAN SKU?"]
No. Next-gen firewall and IDS/IPS are optional security features, not base SD-WAN. Scope them clearly so security expectations match what is actually on the order.
:::

</div>

---

## Technical Deep Dive [deep]

**Security — what it is in customer language**

Security is the discipline of reducing the chance that a bad event becomes a business outage, data loss, fraud event, or public embarrassment. The buyer usually feels it as "we do not have enough people watching this," "our firewall rules are a mess," "audit/compliance is getting harder," or "we cannot afford ransomware downtime."

**Firewall — the edge control point**

A firewall inspects and controls traffic moving in and out of the network. The value to the customer is policy control, segmentation, threat filtering, VPN access, logging, and fewer unmanaged changes at the edge. Managed firewall adds operational help: monitoring, policy support, and someone accountable when rules, threats, or locations change.

**Managed security — the operating model**

Managed security is broader than a firewall. It can include managing existing customer gear, monitoring logs, reviewing policy, scanning for vulnerabilities, assessing architecture, managed SIEM, and email security. Lead here when the buyer lacks time, tools, or staff to run security well.

**DDoS — availability protection**

A distributed denial-of-service attack tries to make an internet-facing service unreachable by flooding it with traffic. The customer impact is simple: customers cannot reach the site or app, and revenue or trust takes a hit. GPC's service uses customer-level monitoring thresholds, portal analytics, BGP FlowSpec, and, on the proactive tier, TMS protection. The key discovery question is, "What is the cost if this service is unavailable after hours?"

**SD-WAN — control over how traffic moves**

SD-WAN is not "a fancy router." It is software-defined control over WAN traffic: which apps get priority, which access path traffic uses, what happens when a circuit degrades, and how IT sees performance across sites. The value shows up as better app experience, faster issue isolation, easier branch management, and a path away from expensive legacy private networks.

**How the pieces relate**

| Customer pain | Conversation lane |
| --- | --- |
| "Need hardware + 24/7 management" | MNS -> Managed Firewall |
| "Have gear, need 24/7 monitoring" | MNS -> Firewall Management |
| "Site downtime = lost revenue" | DDoS (Proactive vs On-demand) |
| "Apps are slow between sites" | SD-WAN |

**Rep rule:** diagnose the risk first, then name the product. If you start with gear, the customer hears a SKU. If you start with business risk, the customer hears why it matters.
