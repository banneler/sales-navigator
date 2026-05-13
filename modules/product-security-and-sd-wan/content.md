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
video_sections:
  - heading: "Managed Firewall"
    intro: "Use this when the customer needs a managed edge control point, not just advice."
    body: |
      **GPC flavor:** Managed Firewall is the practical edge-security offer. It gives the customer firewall hardware/service management, policy support, monitoring, and an accountable operations path.

      - Built around a managed firewall model with FortiGate referenced in the sales motion.
      - Best fit when the customer lacks IT staff with the training, time, or certifications to configure and support firewalls well.
      - The customer value is not "a box." It is 24x7x365 monitoring/management, fewer unmanaged changes, and one provider to call when connectivity and security overlap.
      - Keep scope clean: firewall policy, add-on threat controls, VPN, logging, and support expectations should be validated before they become customer promises.
  - heading: "Managed Network Security"
    intro: "Use this when the buyer's problem is broader than one firewall."
    body: |
      **GPC flavor:** Managed Network Security (MNS) is the broader managed-security conversation. It is where the customer needs help operating security, not just buying equipment.

      - Use this lane when the customer needs monitoring, visibility, policy management, security assessments, or help prioritizing risk.
      - MNS can include services around customer-owned gear, SIEM/log visibility, vulnerability or architecture review, and broader security operations support.
      - The business story is staff relief and discipline: fewer blind spots, fewer finger-pointing moments, and a clearer path when threats or policies change.
      - Pair with SE/quoting early when the buyer asks for compliance, custom reporting, incident response expectations, or anything that sounds like a managed security program.
  - heading: "DDoS Protection"
    intro: "Use this when availability is the risk: websites, public apps, customer portals, voice, or critical circuits."
    body: |
      **GPC flavor:** DDoS Protection is the availability offer. It helps keep customer-facing services reachable when hostile traffic tries to overwhelm them.

      - **Proactive** is the always-on positioning: 24x7 mitigation for customers where downtime after hours is not acceptable.
      - **On-demand** is a lower-touch option with weekday business-hours mitigation windows. Do not let a customer hear "24/7" if they selected on-demand.
      - Discovery should tie directly to business impact: lost orders, unreachable portals, support calls, reputation damage, or branch disruption.
      - If the customer mentions BGP/ASN, high-scale public services, regulated environments, or strict uptime commitments, pull in technical validation before quoting.
  - heading: "SD-WAN"
    intro: "Use this when the customer needs WAN control, app prioritization, visibility, and managed operations across locations."
    body: |
      **GPC flavor:** GPC's SD-WAN motion is built around VMware VeloCloud with Orchestrator visibility and a managed operations model.

      - SD-WAN Orchestrator gives real-time views into access-link and application performance, so the customer can see where traffic is struggling.
      - It can prioritize important applications and improve real-time traffic such as voice and video, especially across mixed or unreliable access paths.
      - It supports the multi-transport story: GPC fiber, cable, DSL, T1, wireless, or other access can participate when the design qualifies.
      - Position the operational value: install, management, troubleshooting, and 24/7 NOC support reduce the customer's day-to-day network burden.
      - Be explicit on scope: next-gen firewall, IDS/IPS, and advanced security controls are not automatically bundled into base SD-WAN. Validate add-ons with SE/quoting.
discovery_questions:
  - "How many locations do you have, and which ones are on GPC fiber vs. other broadband or MPLS?"
  - "How are those locations connected today—VPN over shared Internet, MPLS, Ethernet? When does that contract expire?"
  - "What are your most important applications? Do you use SaaS like O365 or Salesforce, and are they hosted on-prem or in the cloud?"
  - "Have you experienced a security incident, ransomware event, or DDoS attack? Who manages your firewalls today?"
  - "Do you need always-on DDoS mitigation (proactive) or is business-hours coverage acceptable—and what's the cost of an attack outside those windows?"
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
      - "Explain the mitigation windows and align the SKU to the customer’s uptime risk."
    correct_index: 2
    explanation: "Match the DDoS SKU to the customer’s real uptime need. A cheaper tier can become expensive fast if an attack lands outside the covered window."

  - question: "For SD-WAN discovery, what should you clarify about security?"
    options:
      - "Assume every firewall and threat-prevention capability is included by default."
      - "Ignore security because SD-WAN is only about saving money on access."
      - "Clarify which security controls are included, optional, or better handled as a separate managed security scope."
    correct_index: 2
    explanation: "SD-WAN improves traffic steering and visibility, but security still needs scope. Clarifying controls keeps the design honest and prevents accidental overpromises."

  - question: "When does the conversation need technical validation before you quote?"
    options:
      - "For complex routing, high availability, BGP/ASN DDoS, regulated environments, or high-scale needs."
      - "Never; sales owns firewall, BGP, and compliance design without technical review."
      - "Only after signature, when the customer has already accepted the SOW."
    correct_index: 0
    explanation: "Complex, regulated, or high-scale designs need technical validation before they become customer promises. That keeps the quote credible and avoids walking back scope later."

  - question: "What is sound positioning for the SD-WAN platform vs competitors?"
    options:
      - "Cite unverified spec-for-spec claims as facts."
      - "Promise feature parity with any competitor SD-WAN without review."
      - "Use GPC support and WAN-edge fit as themes, then validate specific comparisons."
    correct_index: 2
    explanation: "Position support, fit, and managed operations first. Specific competitor claims need approval so reps do not sell from memory."

  - question: "How should internal fee schedules and pricing PDFs be used?"
    options:
      - "Post them publicly on the customer website."
      - "Discard them; pricing is always verbal only."
      - "Use them internally with quoting teams until validated and approved for the customer."
    correct_index: 2
    explanation: "Internal fee schedules are pre-quote tools, not customer collateral. They support the approved quote path; they do not replace it."

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
        feedback: "That turns an RFP assumption into your promise. Map each security line to base scope or add-on scope with SE/quoting."

      - label: "Review optional NGFW/IDS lines with SE, map RFP lines to quoted SKUs, and document what is in base vs add-on."
        feedback: "Correct. The win is a clean scope, not pretending every security feature is bundled into base SD-WAN."

roleplay:
  persona: "Skeptical IT Director at a regional bank with 12 branches"
  scenario: "Currently running MPLS between branches. Complaining about VPN jitter on shared broadband at smaller locations. Thinks SD-WAN is just 'expensive router software' and insists on managing their own Cisco gear."
  goal: "Qualify multi-site footprint and GPC fiber anchors, then pivot from DIY network management to GPC's fully managed SD-WAN—frame as operational savings, 24/7 NOC support, and cloud breakout improvement rather than a technology debate."
---

## At a glance

- **Managed security:** **Managed Firewall** (FortiGate, SOC-monitored) plus **MNS** when SIEM, assessments, email security, or broader scope matter—match SKU to the buyer’s real need.
- **DDoS:** Availability protection for public-facing services and circuits. The key question is the cost of being unreachable during an attack.
- **SD-WAN:** A software-defined way to steer traffic, prioritize applications, and manage multiple access paths across sites.
- **Security scope:** SD-WAN, firewall, DDoS, and managed security solve related but different problems. Define the risk before naming the product.

---

## Pitch

::: elevator [Elevator Pitch]
We help customers keep their network available, controlled, and visible. Security protects the edge and reduces threat risk; SD-WAN makes the WAN easier to steer and manage. Together, they turn "the network is down" into a managed business problem instead of a scramble.
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
GPC's fully managed SD-WAN eliminates upfront CapEx and frees your team from network management. A single monthly charge covers install, management, and 24/7 NOC monitoring — your team gets out of break-fix and back to the business.
:::

::: flip ["Our current solution works fine."]
Ask: do you have visibility into application performance across all sites? SD-WAN Orchestrator provides real-time views into access link performance and lets you prioritize critical apps—even over a single link.
:::

::: flip ["SD-WAN is too expensive."]
SD-WAN pricing sits between SIA and DIA—often less than the MPLS it replaces. The ROI comes from eliminating complex and costly MPLS services and improving uptime for revenue-generating applications. Walk current pricing through **Sales Resources** with quoting—not from memory.
:::

::: flip ["We only have sites in Nebraska."]
SD-WAN works over any transport—GPC fiber, cable, DSL, T1, or 4G/5G wireless. With at least one site on GPC fiber, all US locations including off-net branches can participate.
:::

::: flip ["The on-demand DDoS is fine—we're not a target."]
Confirm: on-demand mitigation windows are weekdays 8–17 only. After-hours attacks won't be mitigated until the next business day. If that risk is acceptable, document it; otherwise, align to proactive.
:::

::: flip ["Is NGFW included in the base SD-WAN SKU?"]
No—next-gen firewall and IDS/IPS are optional add-ons, not bundled in base VeloCloud. Quote and scope with SE so security expectations match what's on the order.
:::

</div>

---

## Technical Deep Dive [deep]

**Security — what it is in customer language**

Security is the discipline of reducing the chance that a bad event becomes a business outage, data loss, fraud event, or public embarrassment. The buyer usually feels it as "we do not have enough people watching this," "our firewall rules are a mess," "audit/compliance is getting harder," or "we cannot afford ransomware downtime."

**Firewall — the edge control point**

A firewall inspects and controls traffic moving in and out of the network. The value to the customer is policy control, segmentation, threat filtering, VPN access, logging, and fewer unmanaged changes at the edge. Managed firewall adds operational help: monitoring, policy support, and someone accountable when rules, threats, or locations change.

**Managed security — the operating model**

Managed security is broader than a firewall. It can include managing existing customer gear, monitoring logs, reviewing policy, scanning for vulnerabilities, assessing architecture, and helping the customer prioritize what to fix. Lead here when the buyer lacks time, tools, or staff to run security well.

**DDoS — availability protection**

A distributed denial-of-service attack tries to make an internet-facing service unreachable by flooding it with traffic. The customer impact is simple: customers cannot reach the site, phones or apps may degrade, and revenue or trust takes a hit. The key discovery question is, "What is the cost if this service is unavailable after hours?"

**SD-WAN — control over how traffic moves**

SD-WAN is not "a fancy router." It is software-defined control over WAN traffic: which apps get priority, which access path traffic uses, what happens when a circuit degrades, and how IT sees performance across sites. The value shows up as better app experience, faster issue isolation, easier branch management, and a path away from expensive legacy private networks.

**How the pieces relate**

| Customer pain | Conversation lane |
| --- | --- |
| "Our apps are slow between sites." | SD-WAN / WAN design |
| "We do not know what traffic is allowed at the edge." | Firewall policy |
| "We do not have staff to monitor or manage security." | Managed security |
| "If our public site goes down, we lose money." | DDoS availability |
| "The RFP assumes everything is included." | Scope each security control before quoting |

**Rep rule:** diagnose the risk first, then name the product. If you start with gear, the customer hears a SKU. If you start with business risk, the customer hears why it matters.
