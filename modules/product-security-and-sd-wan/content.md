---
id: "product-security-and-sd-wan"
title: "Security & SD-WAN"
summary: "Structured as Security (edge + DDoS) and SD-WAN, with guardrails, handoffs, and internal pricing references."
sensitivity: "public"
reference_files:
  - label: "Sales Resources (security & SD-WAN collateral)"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx"
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

### Managed Firewall and Managed Network Security (MNS)

- **What it is:** Managed edge protection built on Fortinet FortiGate with Enterprise/Unified Threat Protection, 24/7 SOC monitoring, IPS, malware prevention, ZTNA for hybrid access, centralized cloud management, and compliance-oriented logging and reporting, plus help migrating from existing firewall configs.
- **MNS umbrella (broader than Managed Firewall alone):**
  - Managed Firewall (appliance + service).
  - **Firewall Management** for customer-owned gear (e.g., Cisco, Fortinet, Palo Alto).
  - Firewall paired with **Managed SIEM**.
  - **Assessments** and vulnerability scanning.
  - **Managed Email Security** aligned with M365/Slack-style environments.
- **Position MNS** when the buyer needs SIEM, multi-vendor firewall operations, email security, or assessments—not only a new appliance at the edge.

### Security — discovery

- **Business drivers:** What triggered the conversation—audit, compliance deadline, incident, insurance or board pressure, M&A integration?
- **Operations:** Who runs firewalls today—internal team, MSP, mixed? 24/7 coverage or business-hours only?
- **Technical footprint:** Sites, users, cloud vs data center egress, critical SaaS, remote access model (VPN, ZTNA, both).
- **Incidents and gaps:** Recent breaches, near-misses, alert fatigue, logging and retention posture.
- **Commercial:** Refresh cycle, capex vs opex preference, procurement timeline, RFP or informal evaluation.

### Security — use cases

- **Compliance and audit readiness:** Documented controls, reporting, and consistent policy enforcement without building a full security operations bench in-house.
- **Firewall refresh:** Replace aging gear with a managed stack and predictable operations.
- **Hybrid workforce:** Secure remote access (including ZTNA) without ad hoc VPN sprawl.
- **Vendor consolidation:** Reduce tool and vendor sprawl by standardizing edge protection and, with MNS, extending to SIEM or email security where needed.
- **Post-incident hardening:** Add 24/7 eyes on the edge and clearer response playbooks after a security event.

### Security — landmines

- **Throughput and performance:** Do not quote firewall, IPS, or SSL inspection throughput as a fixed guarantee; “up to” varies with features, traffic mix, and design—defer numbers to SE and approved artifacts.
- **Compliance:** Do not imply GPC alone “certifies” the customer’s compliance; compliance is shared responsibility and scope-specific.
- **Scope confusion:** Do not sell “Managed Firewall” when the buyer actually needs MNS (SIEM, email, assessments)—map the sale to the right SKU set.
- **Collateral discipline:** Use approved sheets and battle cards; do not invent feature lists from memory.

---

## DDoS protection

### DDoS — what it is

- **Cloud-based scrubbing** with traffic analysis, bandwidth thresholds, and expert-backed mitigation.
- **Proactive:** **24×7 automated monitoring and mitigation** (always-on mitigation path on this product story).
- **On-demand:** Monitoring and notifications; on the on-demand SKU, **mitigation is weekdays 8–17**—**qualify explicitly** so the customer does not assume 24×7 mitigation.
- **Scale:** Broadly **10 Mbps–100 Gbps**; proactive paths can include capabilities such as BGP FlowSpec/TMS; portal reporting.

### DDoS — discovery

- **Availability:** What must remain reachable under attack—customer-facing apps, APIs, DNS, voice?
- **History:** Past saturation, outages, or ransom-driven “pay or we DDoS you” events?
- **Mitigation expectation:** Always-on vs cost-sensitive on-demand; align **SKU to uptime and risk**, not only budget.
- **Routing and ownership:** BGP/ASN involvement, upstream relationships, any existing scrubbing or CDN?

### DDoS — use cases

- **Internet-facing services** that cannot tolerate long outages or manual escalation-only response.
- **Regulated or brand-sensitive industries** where downtime drives fines or headlines.
- **Proactive** when the business requires continuous mitigation outside business hours.
- **On-demand** when risk is lower and the organization accepts weekday mitigation windows—**document that choice**.

### DDoS — landmines

- **Never blur proactive vs on-demand** mitigation windows; if they want “24/7 DDoS” but select on-demand for price, explain the gap and realign SKU or expectations before signature.
- **Do not promise** specific mitigation times or outcomes without approved materials and SE input where designs are nonstandard.

### DDoS — collateral

- DDoS product sheet and related security collateral—see **Sales Resources** (sidebar) for Managed Firewall, MNS, DDoS, and firewall battle card.

---

## SD-WAN

### SD-WAN — what it is

- **VMware VeloCloud™**-based managed SD-WAN for customers with **at least one site on GPC fiber** and a **multi-site** WAN (including possible **off-net U.S. branches**).
- Replaces or augments MPLS with a managed overlay, cuts unnecessary backhaul, improves cloud/SaaS breakout, and consolidates routing/VPN and **optional** security at the edge.
- **No up-front CPE purchase** in the managed model (position as opex-friendly and operationally owned).

### SD-WAN — discovery

- **Footprint:** Total locations; which sites are on GPC fiber vs off-net; growth plans.
- **Today’s WAN:** MPLS vs Internet VPN; hub-and-spoke vs regional; any existing SD-WAN vendor.
- **Traffic patterns:** Local breakout vs full backhaul; mission-critical SaaS; voice/video sensitivity.
- **Bandwidth and classes of service:** Per-site bandwidth; need for QoS or multi-circuit diversity.
- **Timeline:** 12–24 month migration or refresh horizon; coexistence with MPLS during transition.
- **Security in the RFP:** Map every “next-gen firewall,” IDS/IPS, and advanced security line to **quoted SKUs**—many are **optional add-ons**, not assumed in base SD-WAN.

### SD-WAN — use cases

- **SaaS and cloud performance:** Better direct-to-cloud paths instead of tromboning traffic to a central DC.
- **MPLS cost and rigidity:** Gradual migration or augmentation without a risky “big bang” weekend (still plan migrations—see landmines).
- **Operational consistency:** Central policy, fewer manual per-device configs, clearer visibility across branches.
- **Resilience:** Dual paths and intelligent steering where the design supports it—validate with SE.

### SD-WAN — positioning

- Emphasize **local GPC support** plus a **leading WAN-edge platform** vs national carriers—use as **positioning and fit**, not unverified spec-for-spec claims vs competitors.

### SD-WAN — pain points (conversation hooks)

- Poor SaaS experience over raw Internet.
- Expensive or inflexible MPLS.
- Little or no true redundancy.
- Manual, error-prone per-device configuration.
- Inconsistent voice and video quality across sites.

### SD-WAN — landmines

- **Base vs add-on security:** Do not assume IDS/IPS or every “next-gen” line on collateral is in the **base** SD-WAN SKU—confirm in **every** quote with SE/quoting.
- **Application intelligence:** Do not promise unlimited or perfect app-ID accuracy; real-world traffic varies.
- **MPLS migration:** Do not promise MPLS disappears overnight without migration planning, testing, and cutover discipline.
- **Competitive claims:** Do not promise feature parity with any competitor SD-WAN without SE-reviewed materials.
- **RFP traps:** If procurement pasted IDS/IPS into the RFP as “included,” **map lines to SKUs** and document base vs add-on—do not bid base SD-WAN and assume full NGFW scope.

### SD-WAN — resources

- SD-WAN product sheet and battle card for competitive talk tracks—**Sales Resources**.

---

## What not to promise (cross-cutting)

- **Throughput, timing, SLAs:** Avoid quoting throughput, mitigation windows, or design outcomes as guarantees without SE and approved artifacts.
- **DDoS:** Never equate on-demand with 24×7 mitigation on the on-demand SKU story.
- **SD-WAN:** Do not assume advanced firewall or IDS/IPS in base without validation.
- **General:** No “100% uptime,” “zero breaches,” or unqualified “market leader” claims—defer SLA, architecture, and commercial numbers to the right owners and approved content.

---

## Handoff to engineering and security

### When to engage early

- Mixed-vendor firewall management.
- High-scale data center or unusual performance requirements.
- Complex SD-WAN routing, HA, or multi-homing designs.
- DDoS with BGP/ASN, custom thresholds, or nonstandard topologies.
- Regulated environments or stringent compliance frameworks.

### What to bring

- Site list and logical WAN diagram (even draft).
- Bandwidths and circuit types per site.
- Firewall and security inventory.
- Compliance drivers and audit timeline.
- Success criteria and apps that must not break during change.

### Pricing discipline

- **Internal pricing** and fee schedules live with **quoting** and **Sales Resources**—do not email customer-facing numbers from memory; validated quotes drive what the customer sees.

---

## Pricing (internal reference) [deep]

- Internal fee schedules for SD-WAN, managed security, and related SKUs are **pre-quote tools** for you and quoting—not customer-facing until validated through **quoting** and approved processes.

---

## Media (optional) [deep]

- *Guidde (reserved):* Guidde walkthroughs—for example SD-WAN discovery questions or security upsell from DIA.
