---
id: "product-security-and-sd-wan"
title: "Security & SD-WAN"
summary: "MNS vs managed firewall; DDoS proactive vs on-demand windows; Velo SD-WAN (≥1 GPC fiber site); SE early; internal pricing only."
sensitivity: "public"
reference_files:
  - label: "Sales Resources (security & SD-WAN collateral)"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx"
five_minute_summary: |
  - **Firewall / MNS:** FortiGate managed edge; **MNS** = umbrella (customer FW mgmt, SIEM, assessments, email security)—scope to buyer.
  - **DDoS:** **Proactive** = 24×7 auto mitigation; **on-demand** SKU = **weekday 8–17** mitigation—**qualify**—don’t blur.
  - **SD-WAN (VeloCloud):** multi-site + **≥1 site on GPC fiber**; optional NGFW/IDS lines **not** assumed in base—confirm every quote.
  - **Handoffs:** SE/security for HA, BGP/ASN DDoS, regulated stacks; pricing PDFs = internal until quoting approves.

knowledge_checks:
  - question: "How does DDoS Protection proactive differ from on-demand for mitigation windows?"
    options:
      - "There is no difference; both are always 24×7 mitigation."
      - "Proactive includes 24×7 automated monitoring and mitigation; on-demand mitigation on the on-demand SKU is weekdays 8–17—qualify so customers don’t assume 24×7."
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
    explanation: "Don’t assume base = full NGFW; don’t promise overnight MPLS cut without plan."

  - question: "What does Managed Network Security (MNS) represent relative to Managed Firewall alone?"
    options:
      - "MNS is only a rebranded logo with no extra scope."
      - "MNS is the umbrella: managed firewall plus firewall management of customer gear, SIEM, assessments, email security, and related services—scope to the buyer’s need."
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
  - title: "Customer wants ‘24/7 DDoS’ but budgets for on-demand"
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

---

## Security

**Managed Firewall:** FortiGate-based edge + SOC; don’t quote throughput/compliance as fixed guarantees—**SE** + approved sheets.**MNS:** firewall + mgmt of customer gear, SIEM, assessments, email—**match SKU to need**.**Discovery:** trigger (audit/incident), who runs firewalls, footprint, SaaS egress, incidents, commercial.**Use cases:** compliance, refresh, hybrid workforce, consolidation, post-incident.**Landmines:** no fixed throughput promises; shared compliance responsibility; don’t sell firewall when buyer needs MNS scope.

## DDoS

**Proactive:** 24×7 monitoring + mitigation.**On-demand:** on that SKU, mitigation **weekdays 8–17**—state explicitly.**Discovery:** what must stay up; history; always-on vs cost; BGP.**Landmines:** never equate on-demand with proactive timing; no promised mitigation times without approved materials.**Collateral:** **Sales Resources**.

::: accordion DDoS Protection Overview
![DDoS product sheet](Proposal_Assets/training/from-pdfs/extracted/onedrive-1-4-10-2026-1/ddos/ddos-product-sheet-012025/images/ddos-product-sheet-012025-p2-img0.png)
:::

## SD-WAN

**What:** VeloCloud; **≥1 GPC fiber site** + multi-site WAN (off-net US ok); improves cloud breakout, backhaul, optional edge security.**Discovery:** footprint on/off GPC; today’s WAN; traffic; QoS; migration; **map every security line in RFP to SKU**.**Position:** local GPC support + platform fit—not unverified spec battles.**Landmines:** NGFW/IDS not assumed in base; no perfect app-ID forever; no overnight MPLS death without plan; no competitor parity without SE review.**Collateral:** sheet + battle card—**Sales Resources**.

::: accordion SD-WAN Retail Brief
![SD-WAN retail use case](Proposal_Assets/training/from-pdfs/extracted/onedrive-1-4-10-2026-1/sd-wan/2024-sd-wan-brief-retail/images/2024-sd-wan-brief-retail-p1-img0.jpeg)
:::

::: accordion SD-WAN Healthcare Brief
![SD-WAN healthcare use case](Proposal_Assets/training/from-pdfs/extracted/onedrive-1-4-10-2026-1/sd-wan/2024-sd-wan-brief-healthcare/images/2024-sd-wan-brief-healthcare-p1-img0.jpeg)
:::

## Cross-cutting

No throughput/SLA/design guarantees without SE/approved artifacts.**DDoS:** SKU matches mitigation window.**SD-WAN:** base vs add-on security validated.**Handoff SE** for HA, BGP DDoS, mixed vendors, regulated, unusual scale.**Pricing:** internal until quoting validates.

## Pricing (internal) [deep]

Fee schedules = pre-quote with quoting—not customer-facing until approved.

## Media (optional) [deep]

*Guidde:* SD-WAN discovery or security upsell from DIA.
