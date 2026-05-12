---
id: "product-security-and-sd-wan"
title: "Security & SD-WAN"
summary: "Managed edge. DDoS mitigation. Multi-site SD-WAN."
sensitivity: "public"
reference_files:
  - label: "Product Collateral (security & SD-WAN)"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/gpcSales/Product%20Collateral/Forms/AllItems.aspx?viewid=855b9d9a%2D724a%2D4ba1%2D876e%2D2325aaaf29e5"
discovery_questions:
  - "How many locations do you have, and which ones are on GPC fiber vs. other broadband or MPLS?"
  - "How are those locations connected today—VPN over shared Internet, MPLS, Ethernet? When does that contract expire?"
  - "What are your most important applications? Do you use SaaS like O365 or Salesforce, and are they hosted on-prem or in the cloud?"
  - "Have you experienced a security incident, ransomware event, or DDoS attack? Who manages your firewalls today?"
  - "Do you need always-on DDoS mitigation (proactive) or is business-hours coverage acceptable—and what's the cost of an attack outside those windows?"
five_minute_summary: |
  - **Pace yourself:** This module is a qualification map, not a design guide. Learn the product lane, the risk trigger, and when to pull in an SE.
  - **Managed Security:** We offer FortiGate managed edge firewalls and a broader Managed Network Security (MNS) umbrella that includes SIEM, assessments, and email security.
  - **DDoS Protection:** Be clear on the tiers. Proactive offers 24/7 automatic mitigation, while On-Demand is limited to weekday business hours.
  - **SD-WAN:** Powered by VeloCloud for multi-site deployments (requiring at least one site on GPC fiber). Advanced firewall features are optional and must be explicitly quoted.
  - **Engineering Handoffs:** Bring in an SE early for high availability setups, BGP routing, or highly regulated security environments.

knowledge_checks:
  - question: "How does DDoS Protection proactive differ from on-demand for mitigation windows?"
    options:
      - "Both tiers provide the same 24×7 mitigation window, so price is the main difference."
      - "On-demand is the faster path when the customer wants automated overnight response."
      - "Proactive covers 24×7 mitigation; on-demand is limited to weekday business hours."
    correct_index: 2
    explanation: "On-demand is not 24×7 mitigation on that SKU. If the customer has overnight or weekend exposure, qualify the risk before they buy the cheaper tier."

  - question: "What must be true for the standard SD-WAN positioning in this module?"
    options:
      - "A single home office on any broadband connection with no GPC fiber anchor."
      - "A DDoS proactive service on every circuit before SD-WAN can be discussed."
      - "A multi-site WAN footprint with at least one site anchored on GPC fiber."
    correct_index: 2
    explanation: "The standard SD-WAN story starts with a multi-site footprint and at least one GPC fiber site. That anchor lets us manage the WAN instead of just selling router software."

  - question: "What should you avoid promising on SD-WAN without SE review?"
    options:
      - "Every advanced security line in collateral is included in the base SKU."
      - "Feature parity against a competitor platform without validating the design."
      - "Either of those promises, plus rushed MPLS migration claims, need SE review."
    correct_index: 2
    explanation: "Do not treat base SD-WAN as full NGFW, and do not promise an overnight MPLS cutover without a plan. SE review protects the scope before it becomes a customer commitment."

  - question: "What does Managed Network Security (MNS) represent relative to Managed Firewall alone?"
    options:
      - "MNS is the broader umbrella for firewall management, SIEM, assessments, email security, and related scope."
      - "MNS is simply a new logo for Managed Firewall with no extra conversation to qualify."
      - "MNS is the WAN design that replaces SD-WAN whenever a customer has multiple sites."
    correct_index: 0
    explanation: "Lead with MNS when the buyer needs broader managed security operations, not just a managed edge firewall. Scope determines whether the conversation stays narrow or expands."

  - question: "What is an accurate statement about Managed Firewall in this module?"
    options:
      - "It guarantees compliance certification by itself without review."
      - "It is Fortinet-based managed edge protection with SOC monitoring and SE-validated performance expectations."
      - "It never includes 24/7 monitoring."
    correct_index: 1
    explanation: "Managed Firewall is a Fortinet and SOC-monitored story, but compliance and throughput claims need approved artifacts. Do not turn a managed firewall into an unsupported certification promise."

  - question: "When a customer wants always-on DDoS mitigation but selected on-demand for price, what should you do?"
    options:
      - "Tell them on-demand matches proactive timing so the lower price feels easier."
      - "Document the lower tier only after signature so the deal keeps moving."
      - "Explain the mitigation windows and align the SKU to the customer’s uptime risk."
    correct_index: 2
    explanation: "Match the DDoS SKU to the customer’s real uptime need. A cheaper tier can become expensive fast if an attack lands outside the covered window."

  - question: "For SD-WAN discovery, what should you confirm regarding security features?"
    options:
      - "Assume IDS/IPS and every NGFW line on collateral are in the base SD-WAN SKU."
      - "Security features are irrelevant to SD-WAN."
      - "Confirm whether NGFW, IDS, and related lines are base scope or optional add-ons."
    correct_index: 2
    explanation: "Map each RFP security line to a quoted SKU before you commit. This keeps base SD-WAN from becoming an accidental full-security promise."

  - question: "When should you engage SE/security early per this module?"
    options:
      - "For complex routing, HA, BGP/ASN DDoS, regulated environments, or high-scale needs."
      - "Never; sales owns firewall, BGP, and compliance design without technical review."
      - "Only after signature, when the customer has already accepted the SOW."
    correct_index: 0
    explanation: "Complex, regulated, or high-scale designs need SE/security early. The handoff is not a weakness; it keeps the quote credible."

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
- **DDoS:** **Proactive** = 24×7 automated mitigation; **on-demand** mitigation window is **weekdays 8–17** on that SKU—never let a customer assume overnight coverage they did not buy.
- **SD-WAN (VeloCloud):** Standard story needs **≥1 site on GPC fiber** and a **multi-site** WAN footprint; **NGFW/IDS lines are optional add-ons**, not bundled in base—confirm with **SE/quoting** every time.
- **When to pull SE early:** HA/BGP, regulated environments, high-scale DC, mixed-vendor firewall ops, or **BGP/ASN DDoS** designs.

---

## Pitch

::: elevator [Elevator Pitch]
We don't just connect your sites; we secure and optimize them. With our managed firewalls, automated DDoS protection, and intelligent SD-WAN, we prioritize your most critical apps and stop threats at the edge—all monitored 24/7 by our security team so you don't have to.
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

**SD-WAN (VeloCloud) qualifiers:**
- Minimum: ≥1 site on GPC fiber + multi-site WAN footprint
- Off-net US branches can participate via any Internet transport
- Business rule: at least one site on GPC fiber required
- NGFW and IDS/IPS lines are optional add-ons—not included in base SD-WAN SKU; confirm with SE/quoting on every quote

**SD-WAN commercial framing:** SD-WAN MRC sits **between SIA and DIA** at comparable speeds — often less than the MPLS it replaces. **Internet bandwidth is purchased separately** from the SD-WAN overlay; that split is worth flagging in every quote so the customer sees the full stack. Current rate cards live in **Sales Resources** (protected) — pull with quoting, never from memory. Proof point from the financial-services use-case set: one advisory shop saw **~60% savings on public broadband vs. private network services** after SD-WAN—cite with care; SE validates on every financial narrative.

**Managed Firewall — Fortinet platform tiers** (from the Managed Firewall datasheet—**SE picks the model**; don't quote throughput as a contractual guarantee without approved collateral):

| Tier | Office platforms | Firewall throughput | IPS throughput |
| --- | --- | --- | --- |
| Small Office | FG-30G | 4 Gbps | 800 Mbps |
| Medium Office | FG-50G | 5 Gbps | 2.25 Gbps |
| Large Office | FG-70G | 10 Gbps | 2.5 Gbps |
| Hub/HQ Office | FG-90G | 28 Gbps | 4.5 Gbps |

| Tier | Data center platforms | Firewall throughput | IPS throughput |
| --- | --- | --- | --- |
| Small DC | FG-100F | 20 Gbps | 2.6 Gbps |
| Medium DC | FG-120G | 39 Gbps | 5.3 Gbps |
| Large DC | FG-400F | 79.5 Gbps | 12 Gbps |

**Managed Firewall:** FortiGate-based edge + SOC monitoring on top of this hardware ladder. Compliance and real-world throughput still route through **SE + approved sheets**.

**MNS (Managed Network Security) — six components** (umbrella; match SKU to what the buyer actually runs today):

1. **Managed Firewall** — fully managed Fortinet NGFW, 24×7 monitoring, threat detection, VPN access, optional zero-trust.
2. **Firewall Management** — 24×7 management of **their existing** firewalls across **Cisco, Fortinet, Palo Alto**, and more.
3. **Firewall Plus with Managed SIEM** — data aggregation, threat prioritization, log retention, actionable insight.
4. **Firewall & Enterprise Security Assessments** — architecture / policy review, vulnerability findings, remediation roadmap.
5. **Vulnerability Scanning** — scheduled active + passive monitoring with expert interpretation.
6. **Managed Email Security** — AI-driven threat and DLP coverage for platforms like Microsoft 365 and Slack.

**DDoS Protection — Proactive vs. On-Demand** (from the DDoS product sheet—**never** let a customer assume 24×7 mitigation on the wrong SKU):

| Feature | Proactive DDoS | On-Demand DDoS |
| --- | --- | --- |
| Monitoring portal + traffic analysis | ✓ | ✓ |
| 24×7 automated monitoring + notifications | ✓ | ✓ |
| **Mitigation** | **24×7 automated mitigation** | **Mitigation weekdays 8 am–5 pm only** |
| Bandwidth thresholds per customer | ✓ | ✓ |
| Bandwidth range | 10 Mbps – 100 Gbps | 10 Mbps – 100 Gbps |
| BGP FlowSpec + TMS | ✓ | BGP FlowSpec only |

**The line that saves your renewal:** e-commerce at 2 a.m. needs **Proactive**. A brick-and-mortar shop whose web ordering is mostly business-hours *might* be fine on **On-Demand**—document the trade-off in writing before signature.

**Handoffs:** SE/security for HA, BGP/ASN DDoS, mixed-vendor firewall management, regulated environments, unusual scale. Pricing PDFs are internal until quoting validates.

**Vertical fit:** retail stores, regional healthcare, community banking, insurance brokers, government, education, manufacturing—any multi-site business with VoIP/SaaS pain.
