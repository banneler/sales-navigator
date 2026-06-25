# GPC SharePoint Module Builder

Chrome extension + repo assembler for turning the **GPC Sales SharePoint site** (`https://gpcom.sharepoint.com/sites/gpcSales`) into a Sales-Navigator training module with **live screenshots** and **page structure**.

Uses **your existing Chrome login** — no separate SharePoint API credentials.

## What it captures

| Stop | Purpose |
| --- | --- |
| **Sales home** | Leadership updates, **previous month results**, quick links |
| **Sales Resources** | Collateral hub — battle cards, datasheets, competitive assets (long scroll tour) |
| **M&Ps** | Marketing & Promotions — SPIFFs and campaigns (URL discovered from site nav) |
| **Rate Cards** | Pricing library (URL discovered from site nav) |

The assembled module explains **how these areas differ** and includes a **screenshot-guided tour** (tabbed `image_library`, same pattern as Competitive Positioning battle cards).

## 1. Load the extension (Developer mode)

1. Open Chrome → **Extensions** → enable **Developer mode**.
2. **Load unpacked** → select:
   ```
   tools/sharepoint-module-builder/extension
   ```
3. Pin **GPC SharePoint Module Builder** and open the **side panel** (extension icon).

## 2. Capture (while logged into SharePoint)

1. In Chrome, open `https://gpcom.sharepoint.com/sites/gpcSales` and sign in if needed.
2. In the side panel, click **Run full capture tour**.
3. Keep the side panel open until capture finishes (navigates tabs, scrolls, screenshots).
4. Click **Download capture bundle** immediately — PNG data stays in extension memory until download.

Downloads land in:

```
~/Downloads/gpc-sharepoint-capture/
  capture-export.json
  manifest.json
  screenshots/
```

### Optional: single page

Use **Capture current tab only** when you are already on a page you want to add (e.g. after nav changes).

## 3. Assemble the Sales-Navigator module

From the repo root:

```bash
npm run sp:assemble-module -- ~/Downloads/gpc-sharepoint-capture
```

Add the module to the sidebar:

```bash
npm run sp:assemble-module -- ~/Downloads/gpc-sharepoint-capture --register
```

Outputs:

- `modules/sales-sharepoint-hub/content.md`
- `assets/sharepoint-hub/*.png`

Serve locally (`npx serve .`) and open `#/module/sales-sharepoint-hub`.

## Customizing tour URLs

Edit `extension/lib/site-config.js`:

- `TOUR_STOPS` — fixed URLs and nav-discovery patterns for M&Ps / Rate Cards
- `SCROLL_CAPTURE` — scroll timing and max steps
- `SECTION_HINTS` — labels used in future enrichment passes

If M&Ps or Rate Cards are not discovered automatically, paste their **SitePages** URLs into the `url` field for those stops (remove `discoverFromNav`).

## Architecture

```
extension/
  manifest.json          MV3, host: gpcom.sharepoint.com
  background.js          Tour orchestration, screenshots, downloads
  content/scrape.js      Heading/link extraction, scroll-stop planning
  sidepanel/             Operator UI
scripts/
  assemble-module.mjs    JSON + PNG → content.md + assets
```

## Limitations (v0.1)

- Screenshots are **viewport captures**, not full-page PDFs.
- SharePoint DOM varies; heading extraction may miss content inside custom web parts — review captures before publishing.
- Extension memory holds PNGs until **Download**; re-run capture if the service worker restarts.
- M&Ps / Rate Cards depend on **nav link text** matching patterns — verify URLs after first run.

## Security

- Extension only requests `https://gpcom.sharepoint.com/*`.
- Captured JSON may include internal page text — treat exports as **internal** (`sensitivity: internal` in the module).
