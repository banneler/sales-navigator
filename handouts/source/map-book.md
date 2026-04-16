# Executive Map Book — Handout

<div class="handout-brand"><img src="../assets/gpc-logo.svg" alt="Great Plains Communications" /></div>

*Sales-Navigator · Great Plains Communications*

## What it is

The **Executive Map Book** is an interactive, internal presentation of **network maps**, **executive narrative** pages, and **supporting stats**—delivered inside Sales-Navigator (same app chrome as modules). It is **not** a substitute for **account research in Salesforce** or for **latest operational** data; use it to **frame** footprint, geography, and “why GPC” in conversations that benefit from visual proof.

## Navigation story (`navOrder`)

1. **National** — “The Network”: national footprint & coverage; stats such as **Fiber Miles 20,000+**, **Markets Served 200+**, **Data Centers 25+**.
2. **Layer 2** — “Layer 2 Core”: high-availability redundant architecture; **insight** text on mission-critical enterprise/wholesale/FTTT; **200G/400G** city-to-city; redundant ring; scalability **1G to 100G.**
3. **IP Network & Peering** — connected, resilient cloud access; localized routing; ultra-low latency positioning.
4. **Fiber to the Tower** — wireless backhaul; **650+** towers; **13** states.
5. **Regional maps** — state/metro stories (e.g. Nebraska **10,000+** fiber miles, **163** communities; Omaha/CB **800+** metro fiber miles; Indiana **3,500** miles, **32** communities, **3** DCs; Illinois & Kentucky **1,960+** miles, **4** Chicago DCs; Minnesota/CO/WY **1,900+** miles with hub cities). **Buffalo** region may have sparse stats in the JSON—don’t invent numbers.
6. **Data Centers** — colocation/interconnection; city/facility list (Denver through Cheyenne, etc., per `pageContent`).
7. **Products** — portfolio tiles (Fiber Internet, SD-WAN, Managed Firewall, Voice & UC, Managed Ethernet, 5G Wireless Internet, Managed Wi-Fi, DDoS Protection, Cloud Connect) with short descriptions.
8. **Why GPC** — intro plus pillars: **Over a Century of Experience**; **Unmatched Local Support**; **24/7 Network Monitoring**; **Flexible, Scalable Solutions**; stats such as **400+ Employees** where shown.
9. **Case studies** — illustrative stories (e.g. healthcare/education, aerospace manufacturing, hospitality); treat as **examples**, not a complete reference list.

## How to use it

- Follow **`navOrder`** as the intended **story arc** (backbone → layers → towers → regions → DCs → products → value prop → proof).
- **Map pages** use image assets (`file` / PNG) and may reference **SVG placeholders** in the JSON—implementation loads the correct asset; placeholders are not end-user copy.
- **Stats** in JSON are **declarative marketing**—no “as of” date in the file; **confirm** critical figures with **current** marketing/network ops if a customer is relying on them contractually.

## Caveats

- **Illinois** entry title: “Illinois & Kentucky” with `id` **illinois**; **Minnesota** entry covers “Minnesota, Colorado, & Wyoming” with `id` **minnesota**—nav labels shorten these.
- **Case studies** may use anonymized labels (“Global Manufacturer,” “Regional Franchise Group”)—**illustrative** only.
- **Buffalo** may show **empty** stats vs other regions—don’t fill gaps from memory.

---

*Map Book content is driven by `map-book/content.json`; stats and copy may update between releases.*
