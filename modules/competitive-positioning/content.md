---
id: "competitive-positioning"
title: "Competitive Positioning"
summary: "Discovery first. Business risk. Undeniable proof."
sensitivity: "public"
reference_files:
  - label: "Product battle cards"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx#product-battle-cards"
  - label: "Competitive battle cards"
    sharepoint_url: "https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx#competitive-battle-cards"
discovery_questions:
  - "Who answers the phone at 2 a.m. if your primary circuit goes down—and how long does it take them to respond on-site?"
  - "Which applications break first if upload latency spikes or a circuit drops? What does an hour of downtime cost the business?"
  - "How are your locations connected today—VPN over shared broadband, MPLS, or Ethernet? When does that contract expire?"
  - "Are you running SaaS applications like O365, Salesforce, or cloud ERP? Where are those workloads hosted?"
  - "What does your current vendor do when there's a service issue—do they have local field technicians or is everything remote?"
five_minute_summary: |
  - **The Framework:** Map competitor weaknesses to GPC strengths using business risk and proof points (local support, NOC, redundancy). Avoid generic claims of superiority.
  - **Avoid Landmines:** Never make personal attacks or use absolutes. Verify battle-card stats with marketing before sharing externally, and bring in SEs early for architecture discussions.
  - **Handling Objections:** When countering LEO satellite or M&A concerns, anchor the conversation on uptime, latency, and the total cost of downtime rather than just price or speed.
  - **Using Tech Cards:** Lead with the customer's pain, wrap it in a GPC solution, ask qualifying questions, and provide verified proof.

knowledge_checks:
  - question: "Before positioning against a competitor's strength, what should you do first?"
    options:
      - "Lead with your best battle-card stat regardless of their stack"
      - "Run discovery on applications, sites, and outcomes so claims map to their stated needs"
      - "Assume their network is always inferior to yours"
    correct_index: 1
    explanation: "Discovery before claims—then map fit."

  - question: "Which behavior is a stated landmine to avoid?"
    options:
      - "Citing battle-card statistics externally without confirming currency with marketing"
      - "Acknowledging where a competitor is legitimately strong"
      - "Using qualifying questions to earn a technical conversation"
    correct_index: 0
    explanation: "Don't cite stats externally until cleared."

  - question: "When should you engage SE early?"
    options:
      - "Only after the customer signs an order"
      - "For multi-site WAN/SD-WAN, integrated security, hybrid on/off-net, regulated workloads, fiber feasibility, or RFP-style validation"
      - "Never—sales should own all topology design alone"
    correct_index: 1
    explanation: "Complex WAN/security/hybrid/regulated/RFP → SE."

  - question: "What should competitor → GPC responses pair for each angle?"
    options:
      - "Their pitch or truth, business risk for this customer, and proof you can support (local teams, NOC, redundancy, portfolio)"
      - "Only a slogan and no customer specifics"
      - "Personal attacks on the competitor's executives"
    correct_index: 0
    explanation: "Truth + risk + proof—not slogans."

  - question: "Against fiber vs LEO satellite interest, what reframe beats a speed-test-only debate?"
    options:
      - "Reliability, latency, weather/obstruction risk, and operational support for business apps"
      - "Monthly sticker price as the only decision factor"
      - "Ignore their interest and refuse to discuss satellite"
    correct_index: 0
    explanation: "Business outcomes—not Mbps alone."

  - question: "What does the framework say about personal disparagement of competitors?"
    options:
      - "Avoid it—stay factual and customer-centric"
      - "Encourage it whenever you are behind on price"
      - "Require it in every competitive meeting"
    correct_index: 0
    explanation: "Landmines forbid personal attacks."

  - question: "When prospects hear M&A messaging, what do they typically want?"
    options:
      - "Stability, service quality, and honest comparison—not gossip"
      - "Rumors and speculation without business relevance"
      - "A guarantee their vendor will exit the market next week"
    correct_index: 0
    explanation: "Factual, customer-centric continuity."

  - question: "For SD-WAN battle-card use, what must you verify before citing awards or ratings?"
    options:
      - "Year and scope—confirm accuracy before external claims"
      - "Nothing—repeat any headline from memory"
      - "Only the competitor's stock price"
    correct_index: 0
    explanation: "Verify scope/year before external use."

  - question: "What dimensions help compare operators during metro/local competition beyond headline price?"
    options:
      - "Install quality, support model, redundancy, fiber depth vs pocketed coverage, and rate stability"
      - "Only the color of the competitor's logo"
      - "Wi-Fi router aesthetics in consumer reviews only"
    correct_index: 0
    explanation: "Ops fit—not logo or consumer reviews."

  - question: "What is PM engagement used for per the module?"
    options:
      - "Delivery timelines, construction, and contract alignment"
      - "Replacing all sales discovery on the first call"
      - "Writing competitor press releases"
    correct_index: 0
    explanation: "PM = delivery/construction/contract alongside SE."

scenarios:
  - title: "Starlink vs fiber at a rural clinic"
    situation: |
      Prospect loves **Starlink**; wants lowest cost for VPN + telehealth; asks for speed-test proof only.
    choices:
      - label: "Dismiss satellite and refuse to discuss their interest."
        feedback: "Acknowledge coverage; reframe to latency, weather, SLAs—fiber vs LEO section."

      - label: "Acknowledge LEO coverage; qualify latency-sensitive apps and weather risk; position fiber for predictable performance and local support."
        feedback: "Correct."

      - label: "Quote battle-card latency numbers as guaranteed contractual SLAs."
        feedback: "Confirm stats/scope before external claims—landmine."

  - title: "Competitor drops a low price in a multi-site deal"
    situation: |
      National entrant undercuts on headline price. CFO asks why pay more for GPC—in the room.
    choices:
      - label: "Attack the competitor's CEO and call their network unreliable."
        feedback: "Landmine: no personal disparagement."

      - label: "Tie to fit, reliability, local support, redundancy, TCO of downtime—only proof that matches discovery."
        feedback: "Correct."

      - label: "Match their price verbally to keep the meeting moving."
        feedback: "No improvised commercial commitments—reframe value; use channels."

roleplay:
  persona: "Entrenched IT Manager"
  scenario: "Currently with a national carrier who just dropped their price at renewal. Demands a spec-for-spec speed comparison and says local doesn't matter anymore."
  goal: "Run discovery on application pain, TCO of outages, and local support gaps before presenting any GPC comparison—never lead with price or unverified stats."
---

## At a glance

- **Framework:** **Discover first**, then map **competitor angle → business risk for this account → proof you can support** (local teams, **24×7 NOC**, redundancy, portfolio)—avoid generic “we’re better.”
- **Landmines:** No **personal disparagement**; no **battle-card stats** externally until **marketing** confirms currency; **SE/PM** for architecture-heavy or RFP-grade deals.
- **Fiber vs LEO:** Anchor on **reliability, latency, weather/obstruction risk, and operational support**—not Mbps alone; **PM** for delivery/construction/contract threads when relevant.

---

## Positioning snapshot

::: elevator [Elevator Pitch]
**Discover first, then map GPC proof to their pain**—never lead with trash talk or unverified stats. Your levers: local fiber, 24/7 NOC, owned/redundant paths, full stack (access → WAN → security → apps). Outcome-led beats generic “we’re better.”
:::

::: accordion M&A / Cox Acquisition Battle Card
Reference for positioning against acquisition-driven competitors like Cox/Charter:
- **NPS & Reputation:** GPC has significantly higher NPS than Cox/Spectrum/Charter, backed by a 4.1 average Google rating.
- **Support:** Contrast Cox's promise to "return customer service to the US" with GPC's Midwest-based support team that *never left*.
- **Network & Terms:** Emphasize GPC's 100% fiber network, symmetrical speeds up to 100 Gbps, negotiable term lengths for price locks, and $0 install/activation fees (contrasted against Cox's coax limitations, 12-month terms, auto-renewals, and $100 install fees).
:::

::: accordion Omaha Metro Competitors
Positioning against the four main Omaha competitors:
- **FiberFirst:** Counter their quick turnaround with GPC's 110+ years of stability, local employees, and built-in network redundancy.
- **Metronet (T-Mobile):** Counter their lower prices and T-Mobile backing by highlighting GPC's ~98% buried fiber (vs. Metronet's quickly built aerial fiber) and 24x7 NOC.
- **Allo:** Counter their "no contracts" by pitching GPC contracts as a benefit (rate locks). Note that Allo has pocketed availability, leases fiber from GPC, and has a reputation for rate increases.
- **Google Fiber:** Counter their simplified 2-tier pricing by highlighting GPC's custom solutions and ability to support complex business needs (DDoS, SD-WAN, multi-site) rather than just basic bandwidth.
:::

---

## Discovery Galaxy

<div class="mt-4 rounded-2xl border border-emerald-200/80 overflow-hidden bg-slate-50 shadow-sm">
  <iframe
    src="games/galactica-1/index.html?embed=1&module=competitive-positioning"
    title="Discovery Galaxy"
    loading="lazy"
    sandbox="allow-scripts allow-same-origin"
    style="width: 100%; border: 0; display: block; height: 40rem; max-height: min(88vh, 44rem); background: #f1f5f9;"
  ></iframe>
</div>

---

## Objection Handling

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

::: flip ["The national carrier is cheaper."]
Tie to TCO: cost of an hour down, support model, redundancy depth, rate stability—not price alone. No verbal exceptions.
:::

::: flip ["Starlink/satellite is good enough."]
Acknowledge coverage; pivot to latency, weather risk, SLA for VoIP/telehealth, and predictable symmetrical paths.
:::

::: flip ["We already ran a speed test—your fiber looks the same."]
Speed tests measure a moment; position reliability, jitter, upload symmetry, and NOC response for business apps.
:::

::: flip ["Your competitor just got acquired—that makes them bigger."]
Respond factually: GPC provides 110+ years of stability, Midwest-based support that never left the US, and 100% fiber with negotiable price locks—unlike competitors relying on coax, 12-month terms, and offshore support. No gossip.
:::

::: flip ["I need to see the battle-card numbers."]
Share collateral through approved channels; verify year/scope before any external citation.
:::

::: flip ["Fiber is fiber—latency is the same everywhere."]
Differentiate last mile, routing, peering, and repair SLAs—map to **their** apps and what an hour of downtime costs, not generic speed claims.

:::

</div>

**Disengage signals:** bad-faith trash talk requests, pure price auction with zero fit, design questions past your lane without SE.

---

## Technical Deep Dive [deep]

**Framework detail:**
1. **Discovery** — apps, sites, outcomes, topology, migration timelines, decision owners.
2. **Map** — tie strengths/weaknesses to *their* stated needs.
3. **Competitor → GPC** — their angle; risk *for this account*; proof (local, NOC, fiber design, symmetry, portfolio)—only what discovery supports.
4. **Landmines** — no personal attacks; no external battle-card stats until marketing clears; no absolutes; acknowledge real competitor strengths; don't improvise architecture—bring **SE**.

**Proof hierarchy:** concrete (build, redundancy, commercial terms) > generic; outcome-led; verify awards externally; keep directional stats internal.

**Rebuttals:** outcomes > stunts; one beat at a time; M&A = factual; no uncited numbers; no verbal price exceptions.

**Pull SE** — WAN/SD-WAN, MPLS migration, integrated security, hybrid paths, DDoS/regulated, fiber diversity, RFP validation. **PM** — timelines, construction, contract alignment.

| Topic | Counter with |
| --- | --- |
| **Metro / local** | Install quality, support model, redundancy, owned vs leased, rate stability—not price alone |
| **Fiber vs LEO** | Weather, jitter, congestion; fiber = predictable latency, symmetrical enterprise paths, pro install + support |
| **M&A / churn** | Stability, billing, field response—factual; GPC continuity themes |
| **Tech cards (SD-WAN pattern)** | Profile → pain → GPC wrap → qualifying Qs → proof; verify awards; SE validates design |

::: accordion Fiber vs LEO Satellite Battle Card
Side-by-side comparison of fiber vs Starlink/LEO—latency, weather risk, SLAs, and enterprise support. Pull the approved card from **Sales Resources** before you cite specifics externally.
:::

::: accordion Ethernet Competitive Battle Card
Key differentiators for Ethernet positioning—use alongside the tech-card pattern when qualifying multi-site WAN opportunities. Current PDF lives in **Sales Resources**.
:::
