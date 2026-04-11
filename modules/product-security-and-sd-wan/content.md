---
id: "product-security-and-sd-wan"
title: "Security & SD-WAN"
summary: "Structured as Security (edge + DDoS) and SD-WAN, with guardrails, handoffs, and internal pricing references."
sensitivity: "public"
five_minute_summary: |
  - **Managed Firewall / MNS**: FortiGate-based managed edge protection plus broader **Managed Network Security** (customer-owned firewall mgmt, SIEM, assessments, email security)—match the scope to buyer needs.
  - **DDoS**: **Proactive** includes **24×7** automated monitoring and mitigation; **on-demand** has **weekday business-hours** mitigation on that SKU—**qualify explicitly** so expectations match the product.
  - **SD-WAN (VeloCloud)**: Multi-site, at least one site on **GPC fiber**, overlay to improve cloud/SaaS breakout and reduce backhaul—**optional** next-gen security features are not assumed in base; confirm in every quote.
  - **Handoffs**: Engage SE/security early for complex routing, HA, BGP/ASN DDoS designs, or regulated environments; **internal pricing** PDFs are not customer-facing until approved.
knowledge_checks:
  - question: "How does DDoS Protection proactive differ from on-demand for mitigation windows?"
    options:
      - "There is no difference; both are always 24×7 mitigation."
      - "Proactive includes 24×7 automated monitoring and mitigation; on-demand mitigation on the on-demand SKU is weekdays 8–17—qualify so customers don’t assume 24×7."
      - "On-demand always includes faster mitigation than proactive."
    correct_index: 1
    explanation: "The module warns not to blur proactive vs on-demand—on-demand has defined weekday mitigation hours on that SKU."
  - question: "What must be true for the standard SD-WAN positioning in this module?"
    options:
      - "Single home office on any broadband with no GPC sites."
      - "At least one site on GPC fiber and a multi-site WAN footprint (including possible off-net U.S. branches)."
      - "DDoS proactive service on every circuit automatically."
    correct_index: 1
    explanation: "SD-WAN is framed for multi-site designs with at least one GPC fiber site; confirm optional security add-ons in quotes."
  - question: "What should you avoid promising on SD-WAN without SE review?"
    options:
      - "That every advanced security feature on collateral is in the base SKU, or feature parity vs any competitor SD-WAN without validation."
      - "That MPLS migration always finishes in one weekend with zero planning."
      - "Both of the above."
    correct_index: 2
    explanation: "The module lists multiple guardrails: don’t assume IDS/IPS or all security features in base, unlimited app-ID accuracy, or overnight MPLS replacement without migration planning."
  - question: "What does Managed Network Security (MNS) represent relative to Managed Firewall alone?"
    options:
      - "MNS is only a rebranded logo with no extra scope."
      - "MNS is the umbrella: managed firewall plus firewall management of customer gear, SIEM, assessments, email security, and related services—scope to the buyer’s need."
      - "MNS replaces SD-WAN in every WAN design."
    correct_index: 1
    explanation: "Position MNS when buyers need broader ops, SIEM, assessments, or email security—not only a new appliance."
  - question: "What is an accurate statement about Managed Firewall in this module?"
    options:
      - "It is Fortinet-based managed edge protection with SOC monitoring and a documented feature set—avoid quoting throughput as a fixed guarantee without SE context."
      - "It guarantees compliance certification by itself without review."
      - "It never includes 24/7 monitoring."
    correct_index: 0
    explanation: "Lead with the managed edge story and SOC support; defer hard performance and compliance promises to specialists and approved artifacts."
  - question: "When a customer wants always-on DDoS mitigation but selected on-demand for price, what should you do?"
    options:
      - "Tell them on-demand matches proactive mitigation timing."
      - "Explain proactive vs on-demand mitigation windows, confirm business-hour constraints on on-demand, and align SKU to uptime needs."
      - "Avoid documenting what they purchased."
    correct_index: 1
    explanation: "Qualify explicitly so expectations match the product—on-demand is not 24×7 mitigation on that SKU."
  - question: "For SD-WAN discovery, what should you confirm regarding security features?"
    options:
      - "Assume IDS/IPS and every NGFW line on collateral are in the base SD-WAN SKU."
      - "Next-gen firewall / IDS lines may be optional add-ons—confirm scope in every quote with SE/quoting."
      - "Security features are irrelevant to SD-WAN."
    correct_index: 1
    explanation: "The module stresses optional security modules; map RFP lines to quoted SKUs rather than assuming base inclusion."
  - question: "When should you engage SE/security early per this module?"
    options:
      - "Never—sales owns all firewall and BGP design alone."
      - "For complex routing/HA, mixed-vendor firewall management, BGP/ASN DDoS designs, regulated environments, or high-scale data center needs."
      - "Only after the customer has paid in full for five years."
    correct_index: 1
    explanation: "Bring specialists in for designs that exceed standard quotes or carry compliance/routing risk."
  - question: "What is sound positioning for the SD-WAN platform vs competitors?"
    options:
      - "Cite unverified spec-for-spec claims as facts."
      - "Use local GPC support plus the WAN-edge platform as positioning themes—not unverified apples-to-apples specs."
      - "Promise feature parity with any competitor SD-WAN without review."
    correct_index: 1
    explanation: "Stay defensible: emphasize support and fit, and validate competitive statements with SE-approved materials."
  - question: "How should internal fee schedules and pricing PDFs be used?"
    options:
      - "Post them publicly on the customer website."
      - "Internal reference with quoting teams—not customer-facing until validated and approved."
      - "Discard them; pricing is always verbal only."
    correct_index: 1
    explanation: "Treat internal extracts as pre-quote tools; customer-facing numbers flow through approved processes."
scenarios:
  - title: "Customer wants ‘24/7 DDoS’ but budgets for on-demand"
    situation: |
      They ask for **always-on mitigation** and picked the **on-demand** DDoS option based on price. You need to set expectations before signature.
    choices:
      - label: "Tell them on-demand is the same as proactive for mitigation timing."
        feedback: "Risky: mis-sets expectations. Clarify proactive vs on-demand mitigation windows and document what they are buying."
      - label: "Explain proactive vs on-demand mitigation windows, confirm business-hour constraints on on-demand, and align SKU to their uptime needs."
        feedback: "Strong: matches the module’s explicit qualify rule and protects the customer and GPC."
  - title: "RFP assumes full next-gen firewall in base SD-WAN"
    situation: |
      Procurement pasted **IDS/IPS and advanced firewall** bullets into the RFP and assumes they are **included in base SD-WAN** at one price.
    choices:
      - label: "Bid base SD-WAN and assume all security lines are included."
        feedback: "Incorrect: optional add-ons may apply—confirm scope with SE/quoting and the product sheet, don’t assume base includes every security feature."
      - label: "Review optional NGFW/IDS lines with SE, map RFP lines to quoted SKUs, and document what is in base vs add-on."
        feedback: "Strong: follows the module’s ‘do not promise’ guidance and drives a clean handoff."
---

## Security

**Managed Firewall & MNS:** GPC’s security story spans fully managed edge protection and broader **Managed Network Security**. Managed Firewall (Fortinet®) delivers FortiGate appliances with Enterprise/Unified Threat Protection, 24/7 SOC monitoring, IPS, malware prevention, ZTNA for hybrid access, centralized cloud management, and compliance-oriented logging/reporting—plus migration assistance from existing configs. **MNS** is the umbrella: (1) Managed Firewall; (2) **Firewall Management** of customer-owned gear (Cisco, Fortinet, Palo Alto, etc.); (3) Firewall + **Managed SIEM**; (4) **Assessments** and vulnerability scanning; (5) **Managed Email Security** for M365/Slack-oriented protection. Position MNS when buyers need SIEM, multi-vendor firewall ops, email security, or assessments—not only a new appliance.

**Buying triggers:** audit or compliance pressure; no 24/7 security bench; recent incident; vendor sprawl; hybrid workforce needing ZTNA; firewall refresh.

**DDoS:** GPC DDoS Protection is **cloud-based scrubbing** with traffic analysis, bandwidth thresholds, and expert-backed mitigation. **Proactive** includes **24×7 automated monitoring and mitigation**. **On-demand** includes monitoring/notifications but mitigation **weekdays 8–17** on the on-demand SKU—**qualify explicitly** so customers don’t assume 24×7 mitigation. Scale broadly **10 Mbps–100 Gbps**; capabilities include BGP FlowSpec/TMS on proactive paths; portal reporting. **DDoS discovery:** What must stay reachable under attack? Past saturation or outage? Always-on vs cost-sensitive on-demand?

**Do not promise:** firewall/IPS/SSL throughput as fixed guarantees (“up to” varies by features); that GPC “certifies” compliance alone; **DDoS:** don’t blur proactive vs on-demand mitigation windows.

**Sources:**
- **Managed Firewall data sheet** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Managed Firewall & Security/Managed Firewall data sheet 032026.pdf`
- **Managed Network Security data sheet** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/Managed Firewall & Security/Managed Network Security data sheet 062025.pdf`
- **DDoS Product Sheet** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/DDoS/DDoS Product Sheet 012025.pdf`
- **Managed Firewall Battlecard FINAL.pdf** — `/Users/ba/Documents/GPC Training Material/Managed Firewall Battlecard FINAL.pdf`

## SD-WAN

SD-WAN (**VMware VeloCloud™**) fits customers with **at least one site on GPC fiber** and **multi-site** footprints (including off-net U.S. branches). It replaces or augments MPLS with managed overlays, reduces unnecessary backhaul, improves cloud/SaaS breakout, and consolidates routing/VPN/optional security at the edge—**no up-front CPE purchase** in the managed model.

**Positioning:** Local GPC support plus a leading WAN-edge platform vs national carriers—use as **positioning**, not unverified specs.

**Pain points:** poor SaaS over Internet; expensive MPLS; no redundancy; manual per-device configs; inconsistent voice/video over WAN.

**Discovery:** Total locations and on-GPC vs off-net? MPLS vs Internet VPN today? Local breakout vs full backhaul? Bandwidth per site? 12–24 month timeline? Mission-critical SaaS? Apps in DC vs cloud? **Product nuance:** Next-Gen Firewall / IDS lines may be **optional** add-ons—confirm scope in every quote. **Do not promise:** every security feature on the sheet is in the base SD-WAN SKU; unlimited app-ID accuracy; MPLS goes away overnight without migration planning; feature parity with competitor SD-WAN without SE review.

**Resources:** product sheet + battle card for competitive talk tracks.

**Sources:**
- **SD-WAN Product Sheet** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/SD-WAN/SD-WAN Product Sheet 2024.pdf`
- **GPC SD-WAN Battle Card FINAL.pdf** — `/Users/ba/Documents/GPC Training Material/GPC SD-WAN Battle Card FINAL.pdf`

## What not to promise (summary)

**Security / DDoS / SD-WAN:** Avoid quoting throughput or mitigation times as guarantees without SE and approved artifacts. **DDoS:** never equate on-demand with 24×7 mitigation. **SD-WAN:** don’t assume IDS/IPS or advanced firewall in base. **General:** no “100% uptime,” “zero breaches,” or unqualified “leader” claims—defer SLA, design, and dollars to specialists.

## Handoff to engineering / security

Engage SE/security early for: mixed-vendor firewall management; high-scale data center; complex SD-WAN routing/HA; DDoS with BGP/ASN or custom thresholds; regulated environments. Bring site list, WAN diagram, bandwidths, firewall inventory, compliance drivers, and success criteria. Use internal fee schedules in the pricing folder—don’t customer-face without approval.

## Pricing (internal)

Internal fee schedules for SD-WAN, managed security, and related SKUs—not customer-facing until validated.

**Sources:**
- **Pricing folder (SD-WAN / MNS / Business Security)** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)`

## Media (optional)

*Guidde (reserved):* Guidde: SD-WAN discovery questions or security upsell from DIA.
