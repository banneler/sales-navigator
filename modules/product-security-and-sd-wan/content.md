---
id: "product-security-and-sd-wan"
title: "Security & SD-WAN"
summary: "Managed edge. DDoS mitigation. Multi-site SD-WAN."
sensitivity: "public"
reference_files:
  - label: "Sales Resources (security & SD-WAN collateral)"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx"
discovery_questions:
  - "How many locations do you have, and which ones are on GPC fiber vs. other broadband or MPLS?"
  - "How are those locations connected today—VPN over shared Internet, MPLS, Ethernet? When does that contract expire?"
  - "What are your most important applications? Do you use SaaS like O365 or Salesforce, and are they hosted on-prem or in the cloud?"
  - "Have you experienced a security incident, ransomware event, or DDoS attack? Who manages your firewalls today?"
  - "Do you need always-on DDoS mitigation (proactive) or is business-hours coverage acceptable—and what's the cost of an attack outside those windows?"
five_minute_summary: |
  - **Managed Security:** We offer FortiGate managed edge firewalls and a broader Managed Network Security (MNS) umbrella that includes SIEM, assessments, and email security.
  - **DDoS Protection:** Be clear on the tiers. Proactive offers 24/7 automatic mitigation, while On-Demand is limited to weekday business hours.
  - **SD-WAN:** Powered by VeloCloud for multi-site deployments (requiring at least one site on GPC fiber). Advanced firewall features are optional and must be explicitly quoted.
  - **Engineering Handoffs:** Bring in an SE early for high availability setups, BGP routing, or highly regulated security environments.

knowledge_checks:
  - question: "How does DDoS Protection proactive differ from on-demand for mitigation windows?"
    options:
      - "There is no difference; both are always 24×7 mitigation."
      - "Proactive includes 24×7 automated monitoring and mitigation; on-demand mitigation on the on-demand SKU is weekdays 8–17—qualify so customers don't assume 24×7."
      - "On-demand always includes faster mitigation than proactive."
    correct_index: 1
    explanation: "On-demand ≠ 24×7 mitigation on that SKU."

  - question: "What must be true for the standard SD-WAN positioning in this module?"
    options:
      - "Single home office on any broadband with no GPC sites."
      - "At least one site on GPC fiber and a multi-site WAN footprint (including possible off-net U.S. branches)."
      - "DDoS proactive service on every circuit automatically."
    correct_index: 1
    explanation: "Multi-site + ≥1 GPC fiber site."

  - question: "What should you avoid promising on SD-WAN without SE review?"
    options:
      - "That every advanced security feature on collateral is in the base SKU, or feature parity vs any competitor SD-WAN without validation."
      - "That MPLS migration always finishes in one weekend with zero planning."
      - "Both of the above."
    correct_index: 2
    explanation: "Don't assume base = full NGFW; don't promise overnight MPLS cut without plan."

  - question: "What does Managed Network Security (MNS) represent relative to Managed Firewall alone?"
    options:
      - "MNS is only a rebranded logo with no extra scope."
      - "MNS is the umbrella: managed firewall plus firewall management of customer gear, SIEM, assessments, email security, and related services—scope to the buyer's need."
      - "MNS replaces SD-WAN in every WAN design."
    correct_index: 1
    explanation: "MNS when SIEM, assessments, email, or multi-vendor ops matter."

  - question: "What is an accurate statement about Managed Firewall in this module?"
    options:
      - "It is Fortinet-based managed edge protection with SOC monitoring and a documented feature set—avoid quoting throughput as a fixed guarantee without SE context."
      - "It guarantees compliance certification by itself without review."
      - "It never includes 24/7 monitoring."
    correct_index: 0
    explanation: "SOC + Forti story; throughput/compliance via SE/approved artifacts."

  - question: "When a customer wants always-on DDoS mitigation but selected on-demand for price, what should you do?"
    options:
      - "Tell them on-demand matches proactive mitigation timing."
      - "Explain proactive vs on-demand mitigation windows, confirm business-hour constraints on on-demand, and align SKU to uptime needs."
      - "Avoid documenting what they purchased."
    correct_index: 1
    explanation: "Align SKU to real uptime need."

  - question: "For SD-WAN discovery, what should you confirm regarding security features?"
    options:
      - "Assume IDS/IPS and every NGFW line on collateral are in the base SD-WAN SKU."
      - "Next-gen firewall / IDS lines may be optional add-ons—confirm scope in every quote with SE/quoting."
      - "Security features are irrelevant to SD-WAN."
    correct_index: 1
    explanation: "Map RFP lines to quoted SKUs."

  - question: "When should you engage SE/security early per this module?"
    options:
      - "Never—sales owns all firewall and BGP design alone."
      - "For complex routing/HA, mixed-vendor firewall management, BGP/ASN DDoS designs, regulated environments, or high-scale data center needs."
      - "Only after the customer has paid in full for five years."
    correct_index: 1
    explanation: "Complex/regulated/high-scale → early."

  - question: "What is sound positioning for the SD-WAN platform vs competitors?"
    options:
      - "Cite unverified spec-for-spec claims as facts."
      - "Use local GPC support plus the WAN-edge platform as positioning themes—not unverified apples-to-apples specs."
      - "Promise feature parity with any competitor SD-WAN without review."
    correct_index: 1
    explanation: "Support + fit; SE-approved competitive talk."

  - question: "How should internal fee schedules and pricing PDFs be used?"
    options:
      - "Post them publicly on the customer website."
      - "Internal reference with quoting teams—not customer-facing until validated and approved."
      - "Discard them; pricing is always verbal only."
    correct_index: 1
    explanation: "Pre-quote internal tools only."

scenarios:
  - title: "Customer wants '24/7 DDoS' but budgets for on-demand"
    situation: |
      Wants always-on mitigation; picked **on-demand** for price—set expectations pre-signature.
    choices:
      - label: "Tell them on-demand is the same as proactive for mitigation timing."
        feedback: "Clarify windows; document purchase."

      - label: "Explain proactive vs on-demand windows; align SKU to uptime needs."
        feedback: "Correct."

  - title: "RFP assumes full next-gen firewall in base SD-WAN"
    situation: |
      Procurement pasted IDS/IPS into RFP as included in base SD-WAN at one price.
    choices:
      - label: "Bid base SD-WAN and assume all security lines are included."
        feedback: "Map lines to SKUs with SE/quoting."

      - label: "Review optional NGFW/IDS lines with SE, map RFP lines to quoted SKUs, and document what is in base vs add-on."
        feedback: "Correct."

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

## 

::: elevator [Elevator Pitch]
GPC's Security & SD-WAN portfolio puts **policy on the pipe**—managed protection and intelligent routing at every edge. **Managed Firewall** (FortiGate-based, SOC-monitored) and **Managed Network Security (MNS)** stop threats at the edge and in email, with SIEM and assessment capabilities for regulated environments. **DDoS Protection** keeps critical services online—proactive for 24/7 mitigation, on-demand for cost-conscious accounts that understand the window. **SD-WAN (VeloCloud)** transforms multi-site WAN by routing traffic intelligently across any access type, with cloud breakout, QoS for VoIP, and a single management pane—all managed by GPC with local support and a 24/7 NOC.
:::

---

## 

<div class="mt-4 rounded-2xl border border-emerald-200/80 overflow-hidden bg-slate-50 shadow-sm">
  <iframe
    src="games/brick-breaker-1/index.html?embed=1&module=product-security-and-sd-wan"
    title="Discovery Break — Brick breaker"
    loading="lazy"
    sandbox="allow-scripts allow-same-origin"
    style="width: 100%; border: 0; display: block; height: min(95vh, 85rem); min-height: 44rem; background: #f1f5f9;"
  ></iframe>
</div>

---

## Objection Handling

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

::: flip ["We manage our own Cisco gear."]
GPC's fully managed SD-WAN eliminates upfront CapEx and frees your team from network management. A single monthly charge covers install, management, and 24/7 NOC monitoring. Gartner has ranked VMware VeloCloud at the top of the leader quadrant for SD-WAN.
:::

::: flip ["Our current solution works fine."]
Ask: do you have visibility into application performance across all sites? SD-WAN Orchestrator provides real-time views into access link performance and lets you prioritize critical apps—even over a single link.
:::

::: flip ["SD-WAN is too expensive."]
SD-WAN pricing sits between SIA and DIA—often less than the MPLS it replaces. The ROI comes from eliminating MPLS costs, reducing truck rolls, and improving uptime for revenue-generating applications.
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

**SD-WAN pricing reference (internal):**
- 50×50 Mbps: SD-WAN ~$147/mo; SIA CLEC ~$110; DIA ~$354
- 100×100 Mbps: SD-WAN ~$199/mo; SIA CLEC ~$176; DIA ~$547
- 500×500 Mbps: SD-WAN ~$481/mo; SIA CLEC ~$278; DIA ~$860
- 1000×1000 Mbps: SD-WAN ~$699/mo; SIA CLEC ~$365; DIA ~$1,060
- Internet bandwidth is **not included** in SD-WAN pricing—purchased separately

**Managed Firewall:** FortiGate-based edge + SOC monitoring. Don't quote throughput/compliance as fixed guarantees—SE + approved sheets required.

**MNS (Managed Network Security):** umbrella service = managed firewall + management of customer gear + SIEM + assessments + email security. Match SKU to buyer's actual need.

**DDoS:**
- Proactive: 24×7 monitoring + automated mitigation
- On-demand: mitigation **weekdays 8–17 only**—state explicitly; never equate with proactive timing
- BGP/ASN DDoS designs → SE/security early

**Handoffs:** SE/security for HA, BGP/ASN DDoS, mixed-vendor firewall management, regulated environments, unusual scale. Pricing PDFs are internal until quoting validates.

**Vertical fit:** retail stores, regional healthcare, community banking, insurance brokers, government, education, manufacturing—any multi-site business with VoIP/SaaS pain.

::: accordion DDoS Protection Overview
*Collateral image — coming soon*
:::

::: accordion SD-WAN Retail Brief
*Collateral image — coming soon*
:::

::: accordion SD-WAN Healthcare Brief
*Collateral image — coming soon*
:::
