#!/usr/bin/env node
/**
 * Assemble a Sales-Navigator module from a Chrome extension capture bundle.
 *
 * Usage:
 *   node tools/sharepoint-module-builder/scripts/assemble-module.mjs ~/Downloads/gpc-sharepoint-capture
 *   node tools/sharepoint-module-builder/scripts/assemble-module.mjs ./capture --register
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(SCRIPT_DIR, '..', '..', '..');

const MODULE_ID = 'sales-sharepoint-hub';
const MODULE_TITLE = 'GPC Sales SharePoint';
const SITE_HOME_URL = 'https://gpcom.sharepoint.com/sites/gpcSales';
const ASSET_DIR = 'assets/sharepoint-hub';

/** Rep-facing commentary keyed by page id, then label substring. */
const TOUR_COMMENTARY = {
  home: {
    'quick link': 'Start on the Sales home page. The quick-link strip at the top is the fastest way into high-traffic folders without digging through navigation.',
    'monthly sales results': 'Leadership posts previous-month results here. Scan this block at the start of the week so you know what numbers and themes leadership is tracking.',
    'sales events': 'Sales events, deadlines, and field announcements show up on the home page — check here so you do not miss a SPIFF window or enablement session.',
  },
  'sales-resources': {
    'quick link': 'The blue quick-link tiles are the hub’s front door — jump straight to battle cards, collateral libraries, templates, and other tools reps use every day.',
    'proposal engine': 'Proposal Engine builds customer-ready proposals from approved content. Use this instead of rebuilding decks or copying old attachments.',
    'product collateral': 'Product Collateral is the document library for datasheets, one-pagers, and approved PDFs. Pull from here before sending anything external.',
    'battle cards': 'Battle cards cover both product talk tracks and competitive responses. Review the relevant card before customer calls or RFP work.',
    'uc demos': 'UC Demos holds recorded walkthroughs and demo assets for voice and collaboration products — useful when you need a quick refresher.',
    'zoominfo': 'ZoomInfo Resources centralizes prospecting and account-intelligence links tied to your GPC workflow.',
    'product training': 'Product Training for Sales is the internal enablement shelf — videos and guides meant for reps, not customer-facing send-alongs.',
  },
  mnps: {
    'quick link': 'Methods & Procedures pages also expose quick links when present — use them the same way as on Sales Resources.',
    'm&ps overview': 'The M&Ps landing page links into Sales Processes, Rules of Engagement, and Training Resources — start here for operational how-tos.',
    'sales processes': 'The M&Ps landing page links into Sales Processes, Rules of Engagement, and Training Resources — start here for operational how-tos.',
    'methods': 'The M&Ps landing page links into Sales Processes, Rules of Engagement, and Training Resources — start here for operational how-tos.',
    'procedures': 'The M&Ps landing page links into Sales Processes, Rules of Engagement, and Training Resources — start here for operational how-tos.',
  },
  'sales-processes': {
    'sales process': 'The Sales Process library is the repository for approved process documents, customer forms, and guidelines. Always pull from here — not local copies.',
    'all documents': 'Start in All Documents to browse top-level folders. Each folder groups forms and SOPs for a specific sales motion.',
    'account based marketing': 'The ABM folder holds account-based marketing process docs and customer-facing forms for that motion.',
    'operational business review': 'The OBR folder holds operational business review templates, guides, and supporting materials.',
    'abm': 'The ABM folder holds account-based marketing process docs and customer-facing forms for that motion.',
    'obr': 'The OBR folder holds operational business review templates, guides, and supporting materials.',
  },
  'rate-cards': {
    'rate cards overview': 'Rate Cards is the pricing authority on gpcSales. Open the live page whenever you quote — screenshots here are orientation only.',
    'retail rate cards': 'Retail rate cards cover customer-facing pricing by market and product. Match the customer’s market before you build a solution or proposal.',
    'wholesale rate cards': 'Wholesale rate cards apply to partner and wholesale motions — use the retail shelf for end-customer quotes unless your deal is explicitly wholesale.',
  },
};

function commentaryForStep(pageId, label) {
  const normalized = String(label || '').toLowerCase();
  const pageMap = TOUR_COMMENTARY[pageId] || {};
  for (const [key, text] of Object.entries(pageMap)) {
    if (normalized.includes(key)) return text;
  }
  return `Section captured from live SharePoint: ${label}. Confirm against the current page before customer use.`;
}

function stepHeading(label, pageId, index) {
  const text = String(label || '').trim();
  if (!text || text.length > 80) return index === 0 ? 'Overview' : 'Next section';
  if (/^quick link/i.test(text)) return 'Quick links';
  return text;
}

function yamlQuote(s) {
  return JSON.stringify(String(s));
}

function bulletLines(items) {
  return items.map((t) => `  - ${t}`).join('\n');
}

function inferSectionSummaries(page) {
  if (page.skipped) return [`*(Capture skipped: ${page.skipReason || 'no URL'})*`];

  const headings = (page.profile?.headings || [])
    .map((h) => h.text)
    .filter(Boolean)
    .slice(0, 12);
  const quick = (page.profile?.quickLinks || []).map((q) => q.text).filter(Boolean).slice(0, 8);
  const webParts = (page.profile?.webParts || []).slice(0, 8);

  /** @type {string[]} */
  const lines = [];
  if (page.purpose) lines.push(page.purpose);
  if (headings.length) lines.push(`**Sections spotted:** ${headings.join(' · ')}`);
  if (quick.length) lines.push(`**Quick links:** ${quick.join(' · ')}`);
  if (webParts.length) lines.push(`**Web parts:** ${webParts.join(' · ')}`);
  return lines.length ? lines : ['*(No structured headings extracted — review screenshots.)*'];
}

function compareSectionsBlock(pages) {
  const byId = Object.fromEntries(pages.map((p) => [p.id, p]));
  return `
## How the main areas differ

| Area | What lives here | When reps use it |
| --- | --- | --- |
| **Sales home** | ${summarizePurpose(byId.home)} | Start of week — results, announcements, navigation |
| **Sales Resources** | ${summarizePurpose(byId['sales-resources'])} | Before customer calls — battle cards, datasheets, competitive assets |
| **M&Ps** | ${summarizePurpose(byId.mnps)} | Process questions — sales playbooks, procedures, training how-tos |
| **Rate Cards** | ${summarizePurpose(byId['rate-cards'])} | Before quoting — verify market-specific pricing |

Use **Sales Resources** for *what to say*; use **Rate Cards** for *what to quote*; check **M&Ps** for *how to run the process*; read **Sales home** for *what leadership is tracking now*.
`.trim();
}

function summarizePurpose(page) {
  if (!page) return '*(Not captured)*';
  if (page.skipped) return page.skipReason || 'Not found in navigation';
  const first = inferSectionSummaries(page)[0];
  return first.replace(/\*\*/g, '').slice(0, 120);
}

function buildScrollTour(page, copiedFiles) {
  const shots = page.screenshots || [];
  if (!shots.length) return [];

  return shots
    .map((s, i) => {
      const rel = copiedFiles.get(s.filename);
      if (!rel) return null;
      const label = String(s.label || `${page.label} ${i + 1}`)
        .replace(/\s+/g, ' ')
        .trim();
      return {
        heading: stepHeading(label, page.id, i),
        commentary: commentaryForStep(page.id, label),
        src: rel,
      };
    })
    .filter(Boolean);
}

function buildImageLibrary(page, copiedFiles) {
  const shots = page.screenshots || [];
  if (!shots.length) return [];

  return shots
    .map((s, i) => {
      const rel = copiedFiles.get(s.filename);
      if (!rel) return null;
      const title = String(s.label || `${page.label} ${i + 1}`)
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 100);
      return {
        title: title || page.label,
        pages: [{ src: rel, caption: s.label }],
      };
    })
    .filter(Boolean);
}

async function copyScreenshots(captureDir, pages) {
  /** @type {Map<string, string>} filename -> repo-relative src */
  const map = new Map();
  const outDir = path.join(ROOT, ASSET_DIR);
  await fs.mkdir(outDir, { recursive: true });

  for (const page of pages) {
    for (const shot of page.screenshots || []) {
      const srcPath = path.join(captureDir, 'screenshots', shot.filename);
      try {
        await fs.access(srcPath);
      } catch {
        console.warn(`Missing screenshot: ${srcPath}`);
        continue;
      }
      const destName = shot.filename;
      const destPath = path.join(outDir, destName);
      await fs.copyFile(srcPath, destPath);
      map.set(shot.filename, `${ASSET_DIR}/${destName}`);
    }
  }
  return map;
}

function buildVideoSections(pages, copiedFiles) {
  return pages
    .filter((p) => !p.skipped && (p.screenshots || []).length)
    .map((p) => ({
      heading: p.label,
      intro: p.purpose,
      scroll_tour: buildScrollTour(p, copiedFiles),
    }))
    .filter((s) => s.scroll_tour.length);
}

function buildBodyMarkdown() {
  return `
## Reference discipline

- Treat SharePoint as the **system of record** for customer-facing numbers and PDFs.
- Screenshots in this module are **orientation aids** — confirm against live pages before external use.
- When in doubt, ask Sales Support or your manager before improvising from an old deck.
`.trim();
}

function buildFrontMatter(exportJson, videoSections) {
  const pages = exportJson.pages || [];
  const refs = [
    {
      label: MODULE_TITLE,
      sharepoint_url: exportJson.site || SITE_HOME_URL,
    },
  ];

  const fiveMin = pages
    .map((p) => `- **${p.label}:** ${p.purpose}`)
    .join('\n');

  const kc = [
    {
      question: 'Where should a rep look first for leadership results and monthly context?',
      options: [
        'Sales home on the gpcSales site',
        'A personal email thread',
        'The oldest saved PDF on their laptop',
      ],
      correct_index: 0,
      explanation: 'The Sales home page carries current leadership updates including previous month results.',
    },
    {
      question: 'Which area is the best starting point for battle cards and product collateral?',
      options: ['Sales Resources', 'Rate Cards', 'M&Ps only'],
      correct_index: 0,
      explanation: 'Sales Resources is the collateral hub; Rate Cards focus on pricing.',
    },
    {
      question: 'Before quoting pricing, where should you verify rates?',
      options: ['Rate Cards (and approved quote tools)', 'Battle cards only', 'Generic industry averages'],
      correct_index: 0,
      explanation: 'Rate Cards and the formal quote path are the pricing authority.',
    },
  ];

  const yaml = `---
id: ${yamlQuote(MODULE_ID)}
title: ${yamlQuote(MODULE_TITLE)}
summary: "Navigate gpcSales SharePoint: Sales home, Sales Resources, M&Ps, Sales Processes, and Rate Cards."
sensitivity: "internal"
reference_files:
${refs.map((r) => `  - label: ${yamlQuote(r.label)}\n    sharepoint_url: ${yamlQuote(r.sharepoint_url)}`).join('\n')}
five_minute_summary: |
${fiveMin.split('\n').map((l) => `  ${l}`).join('\n')}
video_sections_presentation: scroll_tour
video_sections_continuous: true
video_sections_tabs_aria_label: "SharePoint guided tour"
video_sections:
${videoSections
  .map((sec) => {
    const tour = sec.scroll_tour
      .map(
        (step) =>
          `      - heading: ${yamlQuote(step.heading)}\n        commentary: ${yamlQuote(step.commentary)}\n        src: ${yamlQuote(step.src)}`
      )
      .join('\n');
    return `  - heading: ${yamlQuote(sec.heading)}\n    intro: ${yamlQuote(sec.intro)}\n    scroll_tour:\n${tour}`;
  })
  .join('\n')}
knowledge_checks:
${kc
  .map(
    (q) =>
      `  - question: ${yamlQuote(q.question)}\n    options:\n${q.options
        .map((o) => `      - ${yamlQuote(o)}`)
        .join('\n')}\n    correct_index: ${q.correct_index}\n    explanation: ${yamlQuote(q.explanation)}`
  )
  .join('\n')}
---

`;

  return yaml;
}

async function maybeRegisterManifest() {
  const manifestPath = path.join(ROOT, 'modules-manifest.json');
  const raw = await fs.readFile(manifestPath, 'utf8');
  const manifest = JSON.parse(raw);
  if (manifest.modules.some((m) => m.id === MODULE_ID)) {
    console.log(`modules-manifest.json already contains ${MODULE_ID}`);
    return;
  }
  const mapBookIdx = manifest.modules.findIndex((m) => m.id === 'map-book');
  const order = mapBookIdx >= 0 ? manifest.modules[mapBookIdx].order : manifest.modules.length;
  manifest.modules.splice(mapBookIdx >= 0 ? mapBookIdx : manifest.modules.length, 0, {
    id: MODULE_ID,
    title: MODULE_TITLE,
    order,
    category: 'Sales',
  });
  if (mapBookIdx >= 0) {
    manifest.modules[mapBookIdx + 1].order = order + 1;
  }
  await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(`Registered ${MODULE_ID} in modules-manifest.json`);
}

async function main() {
  const captureDir = path.resolve(process.argv[2] || path.join(process.env.HOME || '', 'Downloads/gpc-sharepoint-capture'));
  const register = process.argv.includes('--register');

  const jsonPath = path.join(captureDir, 'capture-export.json');
  const raw = await fs.readFile(jsonPath, 'utf8');
  const exportJson = JSON.parse(raw);
  const pages = exportJson.pages || [];

  const copiedFiles = await copyScreenshots(captureDir, pages);
  const videoSections = buildVideoSections(pages, copiedFiles);
  const body = buildBodyMarkdown();
  const frontMatter = buildFrontMatter(exportJson, videoSections);
  const content = `${frontMatter}\n${body}\n`;

  const moduleDir = path.join(ROOT, 'modules', MODULE_ID);
  await fs.mkdir(moduleDir, { recursive: true });
  await fs.writeFile(path.join(moduleDir, 'content.md'), content);

  if (register) await maybeRegisterManifest();

  console.log(`Wrote modules/${MODULE_ID}/content.md`);
  console.log(`Copied ${copiedFiles.size} screenshots to ${ASSET_DIR}/`);
  if (!register) {
    console.log('Tip: re-run with --register to add the module to modules-manifest.json');
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
