---
id: "product-security-and-sd-wan"
title: "Security & SD-WAN"
summary: "Structured as Security (edge + DDoS) and SD-WAN, with guardrails, handoffs, and internal pricing references."
sensitivity: "public"
---

## Security

**Managed Firewall & MNS:** GPC’s security story spans fully managed edge protection and broader **Managed Network Security**. Managed Firewall (Fortinet®) delivers FortiGate appliances with Enterprise/Unified Threat Protection, 24/7 SOC monitoring, IPS, malware prevention, ZTNA for hybrid access, centralized cloud management, and compliance-oriented logging/reporting—plus migration assistance from existing configs. **MNS** is the umbrella: (1) Managed Firewall; (2) **Firewall Management** of customer-owned gear (Cisco, Fortinet, Palo Alto, etc.); (3) Firewall + **Managed SIEM**; (4) **Assessments** and vulnerability scanning; (5) **Managed Email Security** for M365/Slack-oriented protection. Position MNS when buyers need SIEM, multi-vendor firewall ops, email security, or assessments—not only a new appliance.

**Buying triggers:** audit or compliance pressure; no 24/7 security bench; recent incident; vendor sprawl; hybrid workforce needing ZTNA; firewall refresh.

**DDoS:** GPC DDoS Protection is **cloud-based scrubbing** with traffic analysis, bandwidth thresholds, and expert-backed mitigation. **Proactive** includes **24×7 automated monitoring and mitigation**. **On-demand** includes monitoring/notifications but mitigation **weekdays 8–17** on the on-demand SKU—**qualify explicitly** so customers don’t assume 24×7 mitigation. Scale broadly **10 Mbps–100 Gbps**; capabilities include BGP FlowSpec/TMS on proactive paths; portal reporting. **DDoS discovery:** What must stay reachable under attack? Past saturation or outage? Always-on vs cost-sensitive on-demand?

![DDoS protection](Proposal_Assets/training/from-pdfs/extracted/onedrive-1-4-10-2026-1/ddos/ddos-product-sheet-012025/images/ddos-product-sheet-012025-p2-img0.png "From DDoS product sheet")

![DDoS capabilities](Proposal_Assets/training/from-pdfs/extracted/onedrive-1-4-10-2026-1/ddos/ddos-product-sheet-012025/images/ddos-product-sheet-012025-p2-img1.png "From DDoS product sheet")

![DDoS reporting context](Proposal_Assets/training/from-pdfs/extracted/onedrive-1-4-10-2026-1/ddos/ddos-product-sheet-012025/images/ddos-product-sheet-012025-p2-img2.png "From DDoS product sheet")

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

![GPC SD-WAN battle card](Proposal_Assets/training/from-pdfs/gpc-sd-wan-battle-card-final/images/gpc-sd-wan-battle-card-final-p2-img0.png "From GPC SD-WAN battle card")

![SD-WAN positioning](Proposal_Assets/training/from-pdfs/gpc-sd-wan-battle-card-final/images/gpc-sd-wan-battle-card-final-p2-img3.png "From GPC SD-WAN battle card")

![SD-WAN — VeloCloud context](Proposal_Assets/training/from-pdfs/gpc-sd-wan-battle-card-final/images/gpc-sd-wan-battle-card-final-p2-img5.png "From GPC SD-WAN battle card")

![SD-WAN vertical — retail](Proposal_Assets/training/from-pdfs/extracted/onedrive-1-4-10-2026-1/sd-wan/2024-sd-wan-brief-retail/images/2024-sd-wan-brief-retail-p1-img0.jpeg "From SD-WAN brief — retail")

![SD-WAN vertical — healthcare](Proposal_Assets/training/from-pdfs/extracted/onedrive-1-4-10-2026-1/sd-wan/2024-sd-wan-brief-healthcare/images/2024-sd-wan-brief-healthcare-p1-img0.jpeg "From SD-WAN brief — healthcare")

![SD-WAN vertical — financial](Proposal_Assets/training/from-pdfs/extracted/onedrive-1-4-10-2026-1/sd-wan/2024-sd-wan-brief-financial-services/images/2024-sd-wan-brief-financial-services-p1-img0.jpeg "From SD-WAN brief — financial services")

**Sources:**
- **SD-WAN Product Sheet** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (1)/SD-WAN/SD-WAN Product Sheet 2024.pdf`
- **GPC SD-WAN Battle Card FINAL.pdf** — `/Users/ba/Documents/GPC Training Material/GPC SD-WAN Battle Card FINAL.pdf`

## What not to promise (summary)

**Security / DDoS / SD-WAN:** Avoid quoting throughput or mitigation times as guarantees without SE and approved artifacts. **DDoS:** never equate on-demand with 24×7 mitigation. **SD-WAN:** don’t assume IDS/IPS or advanced firewall in base. **General:** no “100% uptime,” “zero breaches,” or unqualified “leader” claims—defer SLA, design, and dollars to specialists.

![Guardrails](Proposal_Assets/training/from-pdfs/gpc-sd-wan-battle-card-final/images/gpc-sd-wan-battle-card-final-p2-img6.png "From GPC SD-WAN battle card — stay accurate on scope")

## Handoff to engineering / security

Engage SE/security early for: mixed-vendor firewall management; high-scale data center; complex SD-WAN routing/HA; DDoS with BGP/ASN or custom thresholds; regulated environments. Bring site list, WAN diagram, bandwidths, firewall inventory, compliance drivers, and success criteria. Use internal fee schedules in the pricing folder—don’t customer-face without approval.

## Pricing (internal)

Internal fee schedules for SD-WAN, managed security, and related SKUs—not customer-facing until validated.

**Sources:**
- **Pricing folder (SD-WAN / MNS / Business Security)** — `/Users/ba/Documents/GPC Training Material/extracted/OneDrive_1_4-10-2026 (4)`

## Media (optional)

*Guidde (reserved):* Guidde: SD-WAN discovery questions or security upsell from DIA.
