---
id: "competitive-positioning"
title: "Competitive Positioning"
summary: "Training: how to run a disciplined competitive conversation\u2014discovery before claims, competitor-to-response mapping, landmines, proof-point patterns, and when to engage SE/PM. Sections mirror metro, fiber vs satellite, M&A, and technology battle-card playbooks."
sensitivity: "public"
five_minute_summary: |
  - **Framework:** Discovery before claims; map **competitor → GPC response** with business risk, customer reality, and proof you can support (local teams, NOC, redundancy, portfolio)—avoid generic superiority.
  - **Landmines:** No personal attacks; don't cite battle-card stats externally without confirming currency; avoid absolutes; pull **SE/PM** early for architecture-heavy deals.
  - **Metro / fiber vs LEO / M&A:** Tie rebuttals to outcomes (uptime, latency, support model, total cost of downtime)—not price or speed tests alone; keep acquisition talk factual and customer-centric.
  - **Technology cards (e.g., SD-WAN):** Pain → GPC wrap → qualifying questions → proof; verify awards and ratings before citing.
knowledge_checks:
  - question: "Before positioning against a competitor\u2019s strength, what should you do first?"
    options:
      - "Lead with your best battle-card stat regardless of their stack"
      - "Run discovery on applications, sites, and outcomes so claims map to their stated needs"
      - "Assume their network is always inferior to yours"
    correct_index: 1
    explanation: "The framework is **discovery before claims**\u2014map strengths and weaknesses only after you understand their reality."
  - question: "Which behavior is a stated \u201clandmine\u201d to avoid?"
    options:
      - "Citing battle-card statistics externally without confirming currency with marketing"
      - "Acknowledging where a competitor is legitimately strong"
      - "Using qualifying questions to earn a technical conversation"
    correct_index: 0
    explanation: "Do not cite battle-card stats externally without confirming currency; acknowledging competitor strengths and using discovery are encouraged."
  - question: "When should you engage SE early?"
    options:
      - "Only after the customer signs an order"
      - "For multi-site WAN/SD-WAN, integrated security, hybrid on/off-net, regulated workloads, fiber feasibility, or RFP-style validation"
      - "Never\u2014sales should own all topology design alone"
    correct_index: 1
    explanation: "The module lists WAN/SD-WAN, security, hybrid designs, regulated workloads, fiber feasibility, and RFP validation as reasons to pull SE early."
  - question: "What should competitor \u2192 GPC responses pair for each angle?"
    options:
      - "Their pitch or truth, business risk for this customer, and proof you can support (local teams, NOC, redundancy, portfolio)"
      - "Only a slogan and no customer specifics"
      - "Personal attacks on the competitor\u2019s executives"
    correct_index: 0
    explanation: "Map competitor angles to customer risk and **proof** you can substantiate\u2014avoid generic superiority without fit."
  - question: "Against fiber vs LEO satellite interest, what reframe beats a speed-test-only debate?"
    options:
      - "Reliability, latency, weather/obstruction risk, and operational support for business apps"
      - "Monthly sticker price as the only decision factor"
      - "Ignore their interest and refuse to discuss satellite"
    correct_index: 0
    explanation: "Acknowledge coverage, then qualify latency-sensitive apps and SLA needs; position fiber for predictable performance and support\u2014not headline Mbps alone."
  - question: "What does the framework say about personal disparagement of competitors?"
    options:
      - "Avoid it\u2014stay factual and customer-centric"
      - "Encourage it whenever you are behind on price"
      - "Require it in every competitive meeting"
    correct_index: 0
    explanation: "**Landmines** forbid personal attacks; keep comparisons factual and tied to customer outcomes."
  - question: "When prospects hear M&A messaging, what do they typically want?"
    options:
      - "Stability, service quality, and honest comparison\u2014not gossip"
      - "Rumors and speculation without business relevance"
      - "A guarantee their vendor will exit the market next week"
    correct_index: 0
    explanation: "Acquisition talk should stay factual and customer-centric; pivot to continuity, support model, and monitoring you deliver."
  - question: "For SD-WAN battle-card use, what must you verify before citing awards or ratings?"
    options:
      - "Year and scope\u2014confirm accuracy before external claims"
      - "Nothing\u2014repeat any headline from memory"
      - "Only the competitor\u2019s stock price"
    correct_index: 0
    explanation: "Technology cards stress verifying **awards and ratings** before citing; stay accurate on scope and timeframe."
  - question: "What dimensions help compare operators during metro/local competition beyond headline price?"
    options:
      - "Install quality, support model, redundancy, fiber depth vs pocketed coverage, and rate stability"
      - "Only the color of the competitor\u2019s logo"
      - "Wi-Fi router aesthetics in consumer reviews only"
    correct_index: 0
    explanation: "Probe install quality, local vs remote support, redundancy, ownership vs leased facilities, and contract stability\u2014not price alone."
  - question: "What is PM engagement used for per the module?"
    options:
      - "Delivery timelines, construction, and contract alignment"
      - "Replacing all sales discovery on the first call"
      - "Writing competitor press releases"
    correct_index: 0
    explanation: "Use **PM** for delivery timeline, construction realities, and contract alignment alongside SE for technical design."
scenarios:
  - title: "Starlink vs fiber at a rural clinic"
    situation: |
      A prospect loves **Starlink** marketing and wants the lowest monthly cost for VPN and telehealth.
      They say fiber is "overkill" and ask you to prove you are faster on a speed test only.
    choices:
      - label: "Dismiss satellite and refuse to discuss their interest."
        feedback: "Too blunt: acknowledge coverage, then reframe to reliability, latency, weather, and business apps—per fiber vs LEO section."
      - label: "Acknowledge LEO coverage; qualify latency-sensitive apps, SLA needs, and weather/obstruction risk; position fiber for predictable performance and local support."
        feedback: "Correct: discovery-led response using qualifying lines and fiber strengths without a speed-test-only debate."
      - label: "Quote battle-card latency numbers as guaranteed contractual SLAs."
        feedback: "Risky: confirm stats and scope before external claims—landmine on uncited battle-card use."
  - title: "Competitor drops a low price in a multi-site deal"
    situation: |
      A national entrant undercuts your proposal on headline price. The CFO asks why they should pay more for GPC
      on the spot in a group meeting.
    choices:
      - label: "Attack the competitor's CEO and call their network unreliable."
        feedback: "Violates landmines: no personal disparagement; stay factual and customer-centric."
      - label: "Tie the conversation to fit, operational reliability, local support, redundancy, and total cost of downtime—using only proof that matches prior discovery."
        feedback: "Correct: counter price-alone narratives with outcomes and proof-point patterns from the framework."
      - label: "Match their price verbally to keep the meeting moving."
        feedback: "Avoid improvising commercial commitments; reframe value and engage AE/leadership through proper channels."
---

## Framework: disciplined competitive conversations

Discovery before claims. Ask what applications, sites, and outcomes matter (POS/VoIP/video, upload vs download, uptime/SLA, multi-location, how sites connect today, backhaul vs local breakout, migration timelines). Map what you hear to a competitor strength or weakness only after you know their reality—avoid generic “we’re better” without tying to their stated need.

Competitor → GPC response. For each competitor angle, pair: (1) what they will say or what is true in their pitch, (2) the business risk or gap for this customer, (3) your proof: local teams, 24x7 NOC monitoring, redundant fiber design, symmetrical speeds, contract/rate stability, full-service portfolio, or referenceable customers—use only what fits the discovery.

Proof-point patterns. Prefer concrete differentiators: network attributes (e.g., buried vs aerial, redundancy, leased vs owned where relevant), service model (local install/support vs remote-only), commercial terms (locks, fees, renewals), and experience metrics (references, tenure, NPS where appropriate). Lead with customer outcomes, not slides.

Landmines. Do not disparage competitors personally; do not cite battle-card stats externally without confirming currency with marketing; avoid absolutes (“never,” “always”) on competitor networks; acknowledge where a competitor is legitimately strong and reframe to your fit. If the deal is architectural (SD-WAN, security, multi-site, complex cloud pathing), stay in discovery and bring experts—don’t improvise topology.

When to pull SE or PM. Engage early for: multi-site WAN/SD-WAN or MPLS migration, integrated security/firewall design, off-net + on-net hybrid, DDoS or regulated workloads, fiber feasibility or diverse paths, and any RFP-style technical validation. Use PM for delivery timeline, construction, and contract alignment.

## Metro and local competition

Local overbuilders and national entrants often lead on price, speed tiers, or speed of build. Your counter is not price alone—it is fit, experience, and operational reliability for business.

Themes from the Omaha metro set: entrants may emphasize quick builds and community marketing; probe for install quality, support model (local vs remote), network redundancy, and whether they fully own or lease facilities. Where competitors lease fiber or have pocketed coverage, position GPC reach, streamlined installs inside your plant, and rate stability via contract. Where they offer only simple tiers or consumer-style Wi-Fi bundles, position full business suite, complex needs (healthcare, multi-site, security), and tailored bandwidth so customers do not overbuy.

T-Mobile/Metronet context: separate consumer brand story from B2B; test for support consistency, local depth, aerial vs buried build quality, and post-merger stability. Against “lowest advertised price,” tie to total cost of downtime, billing surprises, and lack of local escalation.

## Fiber versus satellite (Starlink and LEO)

Position fiber when the business needs predictable latency, weather-immune uptime, symmetrical bandwidth, and local installation/support—not when “speed in a speed test” is the only criterion.

Satellite pain themes: weather and obstruction sensitivity, variable latency under load, shared-airtime congestion, rooftop/dish constraints and self-install risk. Fiber response: enterprise-grade reliability, consistent ultra-low latency for POS/VoIP/cloud/VPN, scalable dedicated bandwidth, professional install and ongoing local + NOC support.

Qualifying line of inquiry: employees/devices at site; critical apps; SLA needs; upload-heavy workflows (healthcare, media, finance); public-sector or education suitability; rural locations needing environmental stability. Use latency-sensitive use cases (video, VoIP, POS, VPN, cloud) to justify fiber where real-time performance is material.

Ideal-fit businesses: high upload demand; predictable POS/VoIP/cloud; public-sector/education; long-term scalable landline replacement; rural sites where environmental factors would hurt satellite. Response to “Starlink is everywhere”: acknowledge coverage, then reframe to reliability, latency, and operational support for business applications.

## M&A and Cox (Charter/Spectrum acquisition narrative)

When prospects hear acquisition messaging, they want stability, service quality, and honest comparison—not gossip.

GPC themes: long-tenure regional operator; redundant fiber monitored 24x7; local sales and support in-market. Where third-party scores or reputation are used internally, frame as directional—confirm before external quoting.

Comparison dimensions useful in conversation: access technology (fiber depth vs coax-centric), symmetry and headline speeds where relevant, ease of doing business, renewal and price-lock behavior, install/activation fees, and whether support is local/regional vs offshore narratives in the market.

Speaking to “combined company benefits”: acknowledge the competitor’s stated commitments; pivot to what GPC already delivers (e.g., support model continuity, no need to “bring support home” if yours never left), consistency of service experience, and proactive monitoring. Keep the tone factual and customer-centric.

## Technology battle cards (SD-WAN as the pattern)

Technology battle cards follow a repeatable pattern: target customer profile → business pain (cloud performance, backhaul inefficiency, MPLS cost/redundancy, manual edge management, real-time app inconsistency) → how GPC wraps transport and services → qualifying questions → national-carrier challenge and response.

For SD-WAN specifically: qualify site count, current MPLS/VPN/backhaul behavior, bandwidth per site, cloud vs data center apps, migration horizon (12–24 months), and mission-critical SaaS. Key proof areas: centralized orchestration and visibility, application-aware routing and failover, security integration, performance over varied underlays, and combining nationwide reach with local engagement—while staying accurate on awards/ratings (verify year and scope before citing).

Apply the same pattern to other technology cards: open with customer pain, tie features to outcomes, use discovery questions to earn the technical win, and bring SE for design validation instead of debating from the card alone.

## Battle card PDFs (training references)

Primary sources synthesized into this module appear below. Confirm dates and claims with marketing before external use. Additional portfolio battle cards are listed for extended reading.

**Sources:**
- **Omaha Metro competitive battle card v3 (primary source)** — `/Users/ba/Documents/GPC Training Material/Omaha Metro competitive battle card v3.pdf`
- **Fiber vs Starlink Battlecard (primary source)** — `/Users/ba/Documents/GPC Training Material/Fiber vs Starlink Battlecard.pdf`
- **Cox Acquisition Battle Card v2 (primary source)** — `/Users/ba/Documents/GPC Training Material/Cox Acquisition Battle Card v2.pdf`
- **GPC SD-WAN Battle Card FINAL (primary source)** — `/Users/ba/Documents/GPC Training Material/GPC SD-WAN Battle Card FINAL.pdf`
- **UC competitor battle card** — `/Users/ba/Documents/GPC Training Material/UC Competitor Battle Card 031226.pdf`
- **Ethernet battle card** — `/Users/ba/Documents/GPC Training Material/Ethernet Battle Card FINAL.pdf`
- **Managed Firewall battle card** — `/Users/ba/Documents/GPC Training Material/Managed Firewall Battlecard FINAL.pdf`
- **Cloud Connect battle card** — `/Users/ba/Documents/GPC Training Material/GPC Cloud Connect Battle Card 050321.pdf`
- **Managed Wi-Fi battle card** — `/Users/ba/Documents/GPC Training Material/GPC Managed WIFI Battle Card.pdf`
- **5G Wireless Backup battle card** — `/Users/ba/Documents/GPC Training Material/Battlecard - 5G Wireless Backup.pdf`

## Field / ops note

“Driver Training PDF 2025” in the training folder is operations-oriented; confirm with your manager before mapping it to sales onboarding objectives (ops TBD).

**Sources:**
- **Driver Training PDF 2025 (ops TBD — confirm before sales use)** — `/Users/ba/Documents/GPC Training Material/Driver Training PDF 2025 1 (1).pdf`

## Media (optional)

*Guidde (reserved):* Guidde: competitive talk track or battle-card walkthrough for a single vertical.
