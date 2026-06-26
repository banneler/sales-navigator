/**
 * Splits docs/gpc-training-corpus-structured.md into module-scoped corpora under
 * docs/router-corpus/by-module/<moduleId>.md for the Router API.
 *
 * Does not modify the master file. Regenerate when the structured corpus updates.
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import manifestJson from '../modules-manifest.json' with { type: 'json' };

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(SCRIPT_DIR, '..');
const SOURCE = path.join(ROOT, 'docs', 'gpc-training-corpus-structured.md');
const OUTDIR = path.join(ROOT, 'docs', 'router-corpus', 'by-module');

/** Modules authored in Sales-Navigator (SharePoint / ZoomInfo) instead of desktop PDF tree. */
const NATIVE_MODULE_CORPUS = {
  'sales-sharepoint-hub': {
    modulePath: path.join(ROOT, 'modules', 'sales-sharepoint-hub', 'content.md'),
    capturePath: path.join(process.env.HOME || '', 'Downloads', 'gpc-sharepoint-capture', 'capture-export.json'),
  },
  'zoominfo-for-sales': {
    modulePath: path.join(ROOT, 'modules', 'zoominfo-for-sales', 'content.md'),
    supplementPath: path.join(ROOT, '.zoominfo-corpus', 'extracted.md'),
    manifestPath: path.join(ROOT, '.zoominfo-corpus', 'manifest.json'),
  },
};

/**
 * Parse ### `Some path.pdf`-delimited chunks (everything from each header onward).
 */
function parseSections(markdown) {
  const idx = markdown.indexOf('## Extracted content');
  const body = idx === -1 ? markdown : markdown.slice(idx);

  /** @type {Array<{title: string, content: string}>} */
  const sections = [];
  const headerRe = /^### `([^`\n]+\.pdf)`\s*$/gim;
  const matches = [...body.matchAll(headerRe)];

  for (let i = 0; i < matches.length; i++) {
    const title = matches[i][1];
    const start = matches[i].index;
    const end = i + 1 < matches.length ? matches[i + 1].index : body.length;
    sections.push({ title, content: body.slice(start, end).trimEnd() });
  }

  return { preamble: idx === -1 ? '' : markdown.slice(0, idx).trimEnd(), sections };
}

/** @returns {Set<string>} */
function assignModules(title) {
  /** @type {Set<string>} */
  const mods = new Set();
  const push = (...ids) => ids.forEach((id) => mods.add(id));

  // --- Competitive battle cards (often overlap product + positioning)
  const battleEthernet = () => push('competitive-positioning', 'product-connectivity');
  const battleFiberStarlink = () => push('competitive-positioning', 'product-connectivity');
  const battleCloudWiFiSdWanFw = [
    [/^Battlecard - 5G Wireless Backup\.pdf$/i, 'competitive-positioning', 'product-cloud-wifi-and-backup'],
    [
      /^GPC Cloud Connect Battle Card 050321\.pdf$/i,
      'competitive-positioning',
      'product-cloud-wifi-and-backup',
    ],
    [/^GPC Managed WIFI Battle Card\.pdf$/i, 'competitive-positioning', 'product-cloud-wifi-and-backup'],
    [/^GPC SD-WAN Battle Card FINAL\.pdf$/i, 'competitive-positioning', 'product-security-and-sd-wan'],
    [/^Managed Firewall Battlecard FINAL\.pdf$/i, 'competitive-positioning', 'product-security-and-sd-wan'],
  ];

  const t = title;

  // Welcome / onboarding
  if (/^Driver Training PDF/i.test(t) || /^Product Training\/Internal ONLY - Ascend Sales Kick Off/i.test(t)) {
    push('getting-started', 'account-based-marketing');
    return mods;
  }
  if (/^Business Capability Presentation\.pdf$/i.test(t)) {
    push('getting-started', 'portfolio-and-business-capabilities');
    return mods;
  }

  // Sales rules
  if (/Sales Rules of Engagement \(ROE\)/i.test(t)) {
    push('sales-rules-of-engagement');
    return mods;
  }

  // Account-based marketing / incentives (explicit)
  if (/^(extracted\/.*\/Q1 2026 Spiff\.pdf|extracted\/.*\/Stair Step SPIFF FINAL\.pdf)$/i.test(t)) {
    push('account-based-marketing');
    return mods;
  }
  if (/Setting For Success - Customizing Your Demo/i.test(t)) {
    push('account-based-marketing');
    return mods;
  }

  // OBR
  if (/\/Operational Business Review/i.test(t) || /\/OBR\//i.test(t)) {
    push('operational-business-reviews');
    return mods;
  }

  // Root-level positioning battle cards
  if (/^Ethernet Battle Card FINAL\.pdf$/i.test(t)) {
    battleEthernet();
    return mods;
  }
  if (/^Fiber vs Starlink Battlecard\.pdf$/i.test(t)) {
    battleFiberStarlink();
    return mods;
  }
  if (/^Cox Acquisition Battle Card/i.test(t) || /^Omaha Metro competitive battle card/i.test(t)) {
    push('competitive-positioning');
    return mods;
  }
  if (/^UC Competitor Battle Card/i.test(t)) {
    push('competitive-positioning');
    return mods;
  }

  // Specific battlecards with product overlap
  for (const row of battleCloudWiFiSdWanFw) {
    const [re] = row;
    if (!re.test(t)) continue;
    row.slice(1).forEach((id) => push(id));
    return mods;
  }

  // SD-WAN / security product & training / DDoS
  if (
    /^Product Training\/GPC SD-WAN Sales Training/i.test(t) ||
    /^Product Training\/SD-WAN & Managed Security/i.test(t) ||
    /^Product Training\/Sales Training - DDoS/i.test(t) ||
    /\/DDoS\//i.test(t) ||
    /\/Managed Firewall & Security\//i.test(t) ||
    /\s\(4\)\/Managed Network Security\//i.test(t)
  ) {
    push('product-security-and-sd-wan');
    return mods;
  }
  // SD-WAN folder (briefs + product sheets) under extracted tree
  if (/\/SD-WAN\//i.test(t) && /^extracted\//i.test(t)) {
    push('product-security-and-sd-wan');
    return mods;
  }
  // Business Security pricing (managed security family)
  if (/\s\(4\)\/Business Security\//i.test(t)) {
    push('product-security-and-sd-wan');
    return mods;
  }

  // Connectivity: Ethernet/Fiber/DIA/SIA/off-net/WAVE/dark fiber (tech + approvals QR crossed)
  if (
    /\/Ethernet\/(?!Battle)/i.test(t) ||
    /Managed Ethernet/i.test(t) ||
    /^Product Training\/Product Training - Managed Ethernet/i.test(t)
  ) {
    push('product-connectivity');
    return mods;
  }
  if (/\/Fiber Delivery\//i.test(t)) {
    battleFiberStarlink();
    return mods;
  }
  if (/^extracted\/.*\/Fiber vs Starlink Battlecard/i.test(t)) {
    battleFiberStarlink();
    return mods;
  }
  if (/\/Fiber vs 5G one sheet/i.test(t)) {
    push('competitive-positioning', 'product-connectivity');
    return mods;
  }
  if (/\/Internet\//i.test(t) || /\/DIA & SIA\//i.test(t)) {
    push('product-connectivity');
    return mods;
  }
  if (/\/Dark Fiber Quick Reference Guide/i.test(t)) {
    push('product-connectivity', 'sales-operations-and-approvals');
    return mods;
  }
  if (/\/Off-Net Quick Reference Guide/i.test(t)) {
    push('product-connectivity');
    return mods;
  }
  if (
    /^extracted\/.*\/Wave\/WAVE Product Sheet/i.test(t) ||
    /\s\(4\)\/Wave\//i.test(t)
  ) {
    push('product-connectivity', 'product-cloud-wifi-and-backup');
    return mods;
  }
  // Network portals (access/connectivity tooling)
  if (
    /^Product Training\/Product Training - Customer Network Management Portal/i.test(t) ||
    /\/Network Monitoring Portal\//i.test(t)
  ) {
    push('product-connectivity');
    return mods;
  }

  // Wi-Fi / cloud connect / cellular backup launch material
  if (
    /Cloud Connect/i.test(t) ||
    /^Product Training\/Product Training - GPC Cloud Connect/i.test(t) ||
    /\/Managed Wi-Fi\//i.test(t) ||
    /Small Business Wi-Fi/i.test(t) ||
    /\bGPC Wireless Internet 5G/i.test(t) ||
    /Wireless Internet Backup/i.test(t)
  ) {
    push('product-cloud-wifi-and-backup');
    return mods;
  }
  if (/\/Wireless Backup & Broadband/i.test(t) || /\/WiFi\/WiFi Pricing/i.test(t)) {
    push('product-cloud-wifi-and-backup');
    return mods;
  }

  // iTV
  if (/\/GPC iTV/i.test(t) || /GPC iTV for Business/i.test(t)) {
    push('product-itv');
    return mods;
  }

  // Unified comms + Voice pricing + CCaaS
  if (
    /\/Unified Communications\//i.test(t) ||
    /^Product Training\/Internal ONLY -\s*CCaaS Sales Training/i.test(t) ||
    /^Product Training\/Internal ONLY -\s*GPC UC SKO/i.test(t) ||
    /^Product Training\/Internal ONLY -\s*UC IPN-OffNet/i.test(t) ||
    /\/Voice( - Non-UC)?\//i.test(t)
  ) {
    push('product-uc-voice-and-collaboration');
    return mods;
  }
  // Voice typo path (international)
  if (/\s\(4\)\/Voice\//i.test(t)) {
    push('product-uc-voice-and-collaboration');
    return mods;
  }

  // Salesforce procedural quick references (titles often omit the word “Salesforce”)
  if (
    /Assigning Leads Quick Reference/i.test(t) ||
    /Change Order Process - Sales Team/i.test(t) ||
    /Contact Roles Quick Reference/i.test(t) ||
    /Converted Lead Info Button Quick Reference/i.test(t) ||
    /Converting Leads to an Opportunity Quick Reference/i.test(t) ||
    /Create a Custom List View Quick Reference/i.test(t) ||
    /Dashboard Pal Quick Reference/i.test(t) ||
    /Dashboards Quick Reference Guide - Sales/i.test(t) ||
    /Disconnection Process - Sales Team/i.test(t) ||
    /Move-Add-Change Processes - Sales Team/i.test(t) ||
    /Parent Opportunity Financial Calculations Quick Reference/i.test(t) ||
    /Parent Opportunity Process Training Guide/i.test(t) ||
    /Partner Referral Program Quick Reference/i.test(t) ||
    /Pre-Approved Order Process Quick Reference/i.test(t) ||
    /Product Quick Reference Guide - DIA/i.test(t)
  ) {
    push('sales-process-and-salesforce');
    return mods;
  }

  // Salesforce & commercial motion (guides, DocuSign, Outlook, SSO, MFA, iVUE, costing, forecasting…)
  if (
    /Salesforce/i.test(t) ||
    /\/Costing Routing Quick Reference/i.test(t) ||
    /\/Forecasting Quick Reference/i.test(t) ||
    /\bDocuSign\b/i.test(t)
  ) {
    push('sales-process-and-salesforce');
    return mods;
  }

  // Ops / approvals procedural (exclusive of Salesforce-named guides already caught)
  if (
    /\/Approval (Overview|Requirements Matrix)/i.test(t) ||
    /\/Building Entry Process/i.test(t) ||
    /\/Customer Move Process/i.test(t) ||
    /\/New APNI form/i.test(t) ||
    /\/Temporary Bandwidth Upgrade/i.test(t)
  ) {
    push('sales-operations-and-approvals');
    return mods;
  }

  // Portfolio discounting collateral
  if (/Multi-Service Discount\.pdf$/i.test(t)) {
    push('portfolio-and-business-capabilities');
    return mods;
  }

  console.warn('[build-router-module-corpus] Unassigned section (file a bug / extend rules):', t);
  push('portfolio-and-business-capabilities');
  return mods;
}

function preambleForModule(moduleId) {
  const native = NATIVE_MODULE_CORPUS[moduleId];
  const sourceNote = native
    ? 'Includes live module content from Sales-Navigator (SharePoint / ZoomInfo), not only the desktop PDF extraction tree.'
    : 'Subset of docs/gpc-training-corpus-structured.md. Answers must stay grounded only in sections below.';

  return [
    `<!-- Generated for Router (${moduleId}) — regenerate with: npm run corpus:router-modules -->`,
    '',
    `# GPC training corpus excerpt (module: ${moduleId})`,
    '',
    sourceNote,
    '',
  ].join('\n');
}

async function readOptional(filePath) {
  try {
    return await fs.readFile(filePath, 'utf8');
  } catch {
    return null;
  }
}

function summarizeSharePointCapture(exportJson) {
  const pages = exportJson?.pages || [];
  if (!pages.length) return '';

  const lines = ['## SharePoint capture export (live site)', '', `Captured: ${exportJson.capturedAt || 'unknown'}`, ''];
  for (const page of pages) {
    lines.push(`### ${page.label}`, '');
    if (page.url) lines.push(`URL: ${page.url}`);
    if (page.purpose) lines.push(`Purpose: ${page.purpose}`);
    const headings = (page.profile?.headings || []).map((h) => h.text).filter(Boolean);
    if (headings.length) lines.push(`Headings: ${headings.join(' · ')}`);
    const preview = page.profile?.bodyPreview;
    if (preview) lines.push('', preview.slice(0, 1200));
    lines.push('');
  }
  return lines.join('\n').trimEnd();
}

async function buildNativeModuleCorpus(moduleId, config) {
  /** @type {string[]} */
  const parts = [];

  const moduleMd = await readOptional(config.modulePath);
  if (moduleMd) {
    parts.push('## Sales-Navigator module content', '', moduleMd.trimEnd());
  }

  if (config.capturePath) {
    const raw = await readOptional(config.capturePath);
    if (raw) {
      try {
        const summary = summarizeSharePointCapture(JSON.parse(raw));
        if (summary) parts.push(summary);
      } catch {
        /* ignore bad json */
      }
    }
  }

  if (config.supplementPath) {
    const supplement = await readOptional(config.supplementPath);
    if (supplement) {
      parts.push('## ZoomInfo job aids (SharePoint PDF text)', '', supplement.trimEnd());
    }
  }

  if (config.manifestPath) {
    const raw = await readOptional(config.manifestPath);
    if (raw) {
      try {
        const manifest = JSON.parse(raw);
        const names = (manifest.items || []).map((i) => i.name).filter(Boolean);
        if (names.length) {
          parts.push(
            '## ZoomInfo Resources library index',
            '',
            `Library: ${manifest.listTitle || 'ZoomInfo Resources'}`,
            '',
            ...names.map((n) => `- ${n}`)
          );
        }
      } catch {
        /* ignore */
      }
    }
  }

  if (!parts.length) return [corpusStubMarkdown(moduleId)];
  return parts;
}

function corpusStubMarkdown(moduleId) {
  const title = `${
    moduleId === 'map-book' ? 'Map book collateral' : 'This module'
  } has no mapped PDF excerpts in the slicer`;

  return [
    '## Corpus stub',
    '',
    title + '. Until routing rules are expanded, Router uses the fallback full corpus (see API).',
    '',
  ].join('\n');
}

async function main() {
  const manifestIds = manifestJson.modules.map((m) => m.id);

  const raw = await fs.readFile(SOURCE, 'utf8');
  const { preamble, sections } = parseSections(raw);

  console.log(`Parsed ${sections.length} PDF sections (+ preamble ${preamble ? 'yes' : 'none'})`);

  /** @type {Map<string, string[]>} */
  const buckets = new Map();

  let unassigned = 0;
  for (const s of sections) {
    const ids = assignModules(s.title);
    if (ids.size === 0) unassigned++;
    for (const mid of ids) {
      const arr = buckets.get(mid);
      const block = s.content.trimEnd();
      if (arr) arr.push(block);
      else buckets.set(mid, [block]);
    }
  }

  for (const mid of manifestIds) {
    if (!buckets.has(mid)) buckets.set(mid, [corpusStubMarkdown(mid)]);
  }

  for (const [mid, config] of Object.entries(NATIVE_MODULE_CORPUS)) {
    buckets.set(mid, await buildNativeModuleCorpus(mid, config));
  }

  await fs.mkdir(OUTDIR, { recursive: true });

  /** @type {string[]} */
  const written = [];
  for (const [mid, parts] of buckets) {
    const body = preambleForModule(mid) + '\n## Extracted content\n\n\n' + parts.join('\n\n\n');
    await fs.writeFile(path.join(OUTDIR, `${mid}.md`), body.trimEnd() + '\n');
    written.push(mid);
  }

  written.sort();

  console.log(`Wrote ${written.length} module corpora → ${OUTDIR}`);
  console.log(unassigned ? `⚠ Sections with zero rules (should not happen): ${unassigned}` : '');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
