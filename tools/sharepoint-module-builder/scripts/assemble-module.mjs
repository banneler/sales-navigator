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
const MODULE_TITLE = 'GPC Sales SharePoint Hub';
const ASSET_DIR = 'assets/sharepoint-hub';

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
      image_library: buildImageLibrary(p, copiedFiles),
    }))
    .filter((s) => s.image_library.length);
}

function buildBodyMarkdown(pages) {
  const home = pages.find((p) => p.id === 'home');
  const homeLines = home ? inferSectionSummaries(home) : [];

  return `
${compareSectionsBlock(pages)}

## Sales home — what to notice first

${homeLines.map((l) => `- ${l}`).join('\n')}

Look for **previous month results** and leadership commentary near the top of the home page before you dive into collateral folders.

## Sales Resources — guided scroll

Sales Resources is a **long single page**. Work top-to-bottom:

1. **Blue quick-link strip** — at the very top; jump-off tiles to Proposal Engine, collateral folders, battle cards, and other high-traffic tools.
2. **Battle cards** — product and competitive talk tracks before external meetings.
3. **Product collateral** — datasheets and approved customer-facing PDFs.
4. **Deep links** — jump to product-family folders; do not quote from memory.

Use the screenshot tour in the tabs below as a map. Always open the live SharePoint link when forwarding material.

## M&Ps vs Rate Cards

- **M&Ps (Methods & Procedures):** operational playbooks — sales processes, procedures, and training resources. Check here when you need the approved *how* for a motion.
- **Rate Cards:** pricing authority — verify market, term, and product-specific rates before you quote or build a solution.

If a link moved, use SharePoint search inside **gpcSales** rather than bookmarking stale paths.

## Reference discipline

- Treat SharePoint as the **system of record** for customer-facing numbers and PDFs.
- Screenshots in this module are **orientation aids** — confirm against live pages before external use.
- When in doubt, ask Sales Support or your manager before improvising from an old deck.
`.trim();
}

function buildFrontMatter(exportJson, videoSections) {
  const pages = exportJson.pages || [];
  const refs = pages
    .filter((p) => p.url)
    .map((p) => ({ label: p.label, sharepoint_url: p.url }));

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
summary: "Navigate gpcSales SharePoint: Sales home, Sales Resources, M&Ps, and Rate Cards."
sensitivity: "internal"
reference_files:
${refs.map((r) => `  - label: ${yamlQuote(r.label)}\n    sharepoint_url: ${yamlQuote(r.sharepoint_url)}`).join('\n')}
five_minute_summary: |
${fiveMin.split('\n').map((l) => `  ${l}`).join('\n')}
video_sections_as_tabs: true
video_sections_tabs_aria_label: "SharePoint guided tour"
video_sections:
${videoSections
  .map((sec) => {
    const lib = sec.image_library
      .map(
        (item) =>
          `      - title: ${yamlQuote(item.title)}\n        pages:\n${item.pages
            .map((pg) => `          - src: ${yamlQuote(pg.src)}`)
            .join('\n')}`
      )
      .join('\n');
    return `  - heading: ${yamlQuote(sec.heading)}\n    intro: ${yamlQuote(sec.intro)}\n    image_library:\n${lib}`;
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
  const body = buildBodyMarkdown(pages);
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
