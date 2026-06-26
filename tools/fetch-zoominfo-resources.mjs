#!/usr/bin/env node
/**
 * List and download non-video files from gpcSales ZoomInfo Resources via SharePoint REST.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = 'https://gpcom.sharepoint.com/sites/gpcSales';
const LIST_TITLE = 'ZoomInfo Resources';
const OUT_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '.zoominfo-corpus');
const VIDEO_EXT = new Set(['.mp4', '.mov', '.avi', '.wmv', '.webm', '.m4v']);

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  const playwright = await import('playwright');
  const browser = await playwright.chromium.connectOverCDP('http://127.0.0.1:9222');
  const context = browser.contexts()[0];
  const page = context.pages()[0] || (await context.newPage());

  await page.goto(`${SITE}/SitePages/Home.aspx`, { waitUntil: 'domcontentloaded', timeout: 120000 });
  await sleep(2000);

  const files = await page.evaluate(async ({ site, listTitle }) => {
    const clean = (s) => String(s || '').replace(/\s+/g, ' ').trim();
    const headers = { Accept: 'application/json;odata=nometadata' };

    async function getJson(url) {
      const res = await fetch(url, { credentials: 'include', headers });
      if (!res.ok) throw new Error(`${url} → HTTP ${res.status}`);
      return res.json();
    }

    const lists = await getJson(`${site}/_api/web/lists?$filter=Hidden eq false&$top=500`);
    const list =
      (lists.value || []).find((l) => clean(l.Title).toLowerCase() === listTitle.toLowerCase()) ||
      (lists.value || []).find((l) => /zoominfo/i.test(l.Title));

    if (!list) {
      return { error: 'List not found', lists: (lists.value || []).map((l) => l.Title).slice(0, 40) };
    }

    /** @type {Array<{name:string,serverRelativeUrl:string,url:string,ext:string}>} */
    const items = [];
    let next = `${site}/_api/web/lists(guid'${list.Id}')/items?$select=FileLeafRef,FileRef,EncodedAbsUrl,File/Name,File/ServerRelativeUrl,File/Length&$expand=File&$top=500`;

    while (next) {
      const res = await fetch(next, { credentials: 'include', headers });
      if (!res.ok) throw new Error(`items HTTP ${res.status}`);
      const data = await res.json();
      for (const row of data.value || []) {
        const name = clean(row.FileLeafRef || row.File?.Name);
        if (!name) continue;
        const serverRelativeUrl = row.File?.ServerRelativeUrl || row.FileRef || '';
        const url = row.EncodedAbsUrl || (serverRelativeUrl ? `${location.origin}${serverRelativeUrl}` : '');
        const ext = (name.match(/\.[a-z0-9]+$/i) || [''])[0].toLowerCase();
        items.push({ name, serverRelativeUrl, url, ext });
      }
      next = data['odata.nextLink'] || null;
    }

    return { listTitle: list.Title, listId: list.Id, items };
  }, { site: SITE, listTitle: LIST_TITLE });

  await fs.mkdir(OUT_DIR, { recursive: true });

  if (files.error) {
    console.error(files.error);
    console.error('Available lists sample:', files.lists?.join(', '));
    process.exit(1);
  }

  await fs.writeFile(path.join(OUT_DIR, 'manifest.json'), JSON.stringify(files, null, 2));
  console.log(`List: ${files.listTitle} (${files.items.length} items)`);

  const toDownload = files.items.filter((f) => !VIDEO_EXT.has(f.ext));
  for (const f of toDownload) console.log(`  - ${f.name}`);

  for (const f of toDownload) {
    const safe = f.name.replace(/[/\\?%*:|"<>]/g, '-');
    const dest = path.join(OUT_DIR, safe);
    try {
      await fs.access(dest);
      const st = await fs.stat(dest);
      if (st.size > 500) {
        console.log(`skip (exists): ${safe}`);
        continue;
      }
    } catch {
      /* new */
    }

    const downloadUrl = f.url || `${SITE}/_layouts/15/download.aspx?SourceUrl=${encodeURIComponent(f.serverRelativeUrl)}`;
    console.log(`download: ${safe}`);

    const bytes = await page.evaluate(async (url) => {
      const res = await fetch(url, { credentials: 'include' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const ab = await res.arrayBuffer();
      return [...new Uint8Array(ab)];
    }, downloadUrl);

    await fs.writeFile(dest, Buffer.from(bytes));
    await sleep(300);
  }

  console.log(`\nWrote ${OUT_DIR}`);
  if (typeof browser.disconnect === 'function') await browser.disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
