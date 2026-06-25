#!/usr/bin/env node
/**
 * Headless/headed SharePoint capture via Playwright + Chrome CDP or persistent profile.
 * Mirrors extension tour logic; writes ~/Downloads/gpc-sharepoint-capture/
 *
 * Usage:
 *   npm run sp:capture
 *   npm run sp:capture -- --register   # also assemble + register module
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { spawn } from 'node:child_process';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(SCRIPT_DIR, '..', '..', '..');
const SITE_CONFIG_URL = pathToFileURL(
  path.join(SCRIPT_DIR, '../extension/lib/site-config.js')
).href;

const OUT_DIR = path.join(
  process.env.HOME || '',
  'Downloads',
  'gpc-sharepoint-capture'
);

async function loadSiteConfig() {
  const mod = await import(SITE_CONFIG_URL);
  return { TOUR_STOPS: mod.TOUR_STOPS, SCROLL_CAPTURE: mod.SCROLL_CAPTURE, SITE: mod.SITE };
}

function slug(s) {
  return String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60);
}

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function tryCdpEndpoint() {
  try {
    const res = await fetch('http://127.0.0.1:9222/json/version');
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

function enableChromeDebugging() {
  return new Promise((resolve) => {
    const proc = spawn(
      'open',
      ['-a', 'Google Chrome', '--args', '--remote-debugging-port=9222'],
      { stdio: 'ignore' }
    );
    proc.on('close', () => resolve(undefined));
    setTimeout(resolve, 2500);
  });
}

async function connectBrowser(playwright) {
  let cdp = await tryCdpEndpoint();
  if (!cdp) {
    console.log('Enabling Chrome remote debugging on port 9222…');
    await enableChromeDebugging();
    await sleep(2000);
    cdp = await tryCdpEndpoint();
  }

  if (cdp) {
    console.log('Connected to Chrome via CDP (uses your existing login session).');
    const browser = await playwright.chromium.connectOverCDP('http://127.0.0.1:9222');
    const context = browser.contexts()[0] ?? (await browser.newContext());
    return { context, close: async () => browser.disconnect?.() ?? browser.close() };
  }

  const debugProfileDir = path.join(process.env.HOME || '', '.gpc-chrome-capture');
  const srcProfile = path.join(process.env.HOME || '', 'Library/Application Support/Google/Chrome');
  try {
    await fs.access(path.join(debugProfileDir, 'Default'));
  } catch {
    console.log('Seeding CDP profile from your Chrome login (one-time copy)…');
    await fs.mkdir(debugProfileDir, { recursive: true });
    await new Promise((resolve, reject) => {
      const child = spawn(
        'rsync',
        [
          '-a',
          '--exclude=SingletonLock',
          '--exclude=SingletonSocket',
          '--exclude=SingletonCookie',
          '--exclude=ShaderCache',
          '--exclude=GrShaderCache',
          '--exclude=Code Cache',
          '--exclude=GPUCache',
          `${srcProfile}/`,
          `${debugProfileDir}/`,
        ],
        { stdio: 'inherit' }
      );
      child.on('exit', (code) => (code === 0 ? resolve(undefined) : reject(new Error(`rsync exit ${code}`))));
    });
  }

  console.log(
    'CDP unavailable — launch Chrome with debugging, then re-run:\n' +
      `  pkill -f "Google Chrome"; sleep 2; "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" ` +
      `--remote-debugging-port=9222 --user-data-dir="${debugProfileDir}" --profile-directory=Default &`
  );

  const profileDir = path.join(SCRIPT_DIR, '../.chrome-capture-profile');
  await fs.mkdir(profileDir, { recursive: true });
  console.log(
    'CDP unavailable — launching Playwright Chrome with local profile.\n' +
      'Sign in once if prompted; cookies persist for next runs.'
  );
  const context = await playwright.chromium.launchPersistentContext(profileDir, {
    channel: 'chrome',
    headless: false,
    viewport: { width: 1440, height: 900 },
  });
  return { context, close: async () => context.close() };
}

async function getPage(context) {
  if (context.pages?.().length) return context.pages()[0];
  return context.newPage();
}

async function hideChrome(page, selectors) {
  await page.evaluate((sels) => {
    window.__spRestore = window.__spRestore || [];
    sels.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => {
        window.__spRestore.push({ el, display: el.style.display });
        el.style.display = 'none';
      });
    });
  }, selectors);
}

async function restoreChrome(page) {
  await page.evaluate(() => {
    (window.__spRestore || []).forEach(({ el, display }) => {
      el.style.display = display;
    });
    window.__spRestore = [];
  });
}

async function profilePage(page) {
  await page.waitForFunction(
    () => document.body && document.body.innerText.length > 20,
    { timeout: 60000 }
  );
  return page.evaluate(() => {
    const clean = (s) => String(s || '').replace(/\s+/g, ' ').trim().slice(0, 500);
    const main =
      document.querySelector('[data-automation-id="contentScrollRegion"]') ||
      document.querySelector('main') ||
      document.body ||
      document.documentElement;

    const headings = [...main.querySelectorAll('h1,h2,h3,h4,[role="heading"]')]
      .map((node) => ({
        text: clean(node.textContent),
        top: node.getBoundingClientRect().top + window.scrollY,
      }))
      .filter((h) => h.text.length > 1);

    const links = [...main.querySelectorAll('a[href]')]
      .map((a) => ({ text: clean(a.textContent), href: a.href }))
      .filter((l) => l.text && l.href.includes('gpcom.sharepoint.com'))
      .slice(0, 200);

    const docHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    const step = Math.floor(window.innerHeight * 0.85);
    const stops = headings.length
      ? headings.map((h) => ({
          y: Math.max(0, Math.floor(h.top - 80)),
          label: h.text,
          kind: 'heading',
        }))
      : Array.from({ length: Math.min(24, Math.ceil(docHeight / step)) }, (_, i) => ({
          y: i * step,
          label: `Section ${i + 1}`,
          kind: 'viewport',
        }));

    return {
      url: location.href,
      title: clean(document.title),
      headings,
      links,
      bodyPreview: clean(main.innerText).slice(0, 4000),
      scrollStops: stops.slice(0, 24),
    };
  });
}

async function matchNav(page, patterns) {
  return page.evaluate((pats) => {
    const clean = (s) => String(s || '').replace(/\s+/g, ' ').trim();
    const links = [...document.querySelectorAll('a[href]')]
      .map((a) => ({ text: clean(a.textContent), href: a.href }))
      .filter((l) => l.href.includes('gpcom.sharepoint.com'));
    return links.filter((l) =>
      pats.some((p) => new RegExp(p, 'i').test(l.text) || new RegExp(p, 'i').test(l.href))
    );
  }, patterns);
}

async function discoverUrl(page, stop, site) {
  if (stop.url) return stop.url;
  if (!stop.discoverFromNav) return null;
  const patterns = stop.navPatterns.map((p) => p.source || String(p));
  let matches = await matchNav(page, patterns);
  if (matches.length) return matches[0].href;
  await page.goto(site.baseUrl, { waitUntil: 'domcontentloaded', timeout: 120000 });
  await sleep(1500);
  matches = await matchNav(page, patterns);
  return matches.length ? matches[0].href : null;
}

async function ensureAuthenticated(page, site) {
  for (let i = 0; i < 90; i++) {
    let url = '';
    let title = '';
    try {
      url = page.url();
      title = await page.title();
    } catch {
      await sleep(1000);
      continue;
    }
    const onSp =
      url.includes('gpcom.sharepoint.com') && !url.includes('login.microsoftonline.com');
    if (onSp && !/sign in to your account/i.test(title)) return;

    if (i === 0) {
      console.log('\n>>> Complete Microsoft sign-in in the Chrome window (up to 3 minutes)…\n');
      if (!url.includes('gpcom.sharepoint.com')) {
        await page.goto(site.baseUrl, { waitUntil: 'domcontentloaded', timeout: 120000 });
      }
    }
    await sleep(2000);
  }
  throw new Error('SharePoint login not completed in time.');
}

async function capturePage(page, stop, pageIndex, scrollCfg, site) {
  const url = await discoverUrl(page, stop, site);
  if (!url) {
    return {
      id: stop.id,
      label: stop.label,
      purpose: stop.purpose,
      url: null,
      skipped: true,
      skipReason: 'Could not resolve URL from site navigation.',
      profile: null,
      screenshots: [],
    };
  }

  if (page.url() !== url) {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 120000 });
    await sleep(1500);
  }

  const profile = await profilePage(page);
  const stops = profile.scrollStops?.length ? profile.scrollStops : [{ y: 0, label: 'Top', kind: 'viewport' }];

  /** @type {Array<{filename:string,label:string,scrollY:number,kind:string}>} */
  const screenshots = [];
  for (let i = 0; i < stops.length; i++) {
    const s = stops[i];
    process.stdout.write(`  screenshot ${i + 1}/${stops.length}: ${s.label.slice(0, 60)}…\n`);
    await page.evaluate((y) => window.scrollTo(0, y), s.y);
    await sleep(scrollCfg.settleMs);
    await hideChrome(page, scrollCfg.hideChromeSelectors);
    await sleep(200);
    const filename = `${String(pageIndex).padStart(2, '0')}-${slug(s.label)}-${String(i).padStart(2, '0')}.png`;
    const shotPath = path.join(OUT_DIR, 'screenshots', filename);
    await page.screenshot({ path: shotPath, fullPage: false });
    await restoreChrome(page);
    screenshots.push({
      filename,
      label: s.label,
      scrollY: s.y,
      kind: s.kind,
    });
  }

  return {
    id: stop.id,
    label: stop.label,
    purpose: stop.purpose,
    url,
    skipped: false,
    profile: {
      title: profile.title,
      headings: profile.headings,
      linksSample: profile.links.slice(0, 40),
      bodyPreview: profile.bodyPreview,
    },
    screenshots,
  };
}

async function main() {
  const register = process.argv.includes('--register');
  const { TOUR_STOPS, SCROLL_CAPTURE, SITE } = await loadSiteConfig();

  let playwright;
  try {
    playwright = await import('playwright');
  } catch {
    console.error('Playwright not installed. Run: npm install -D playwright && npx playwright install chrome');
    process.exit(1);
  }

  await fs.mkdir(path.join(OUT_DIR, 'screenshots'), { recursive: true });

  const { context, close } = await connectBrowser(playwright);
  const page = await getPage(context);

  await page.goto(SITE.baseUrl, { waitUntil: 'domcontentloaded', timeout: 120000 });
  await ensureAuthenticated(page, SITE);

  const exportJson = {
    version: 1,
    site: SITE.baseUrl,
    capturedAt: new Date().toISOString(),
    moduleDraft: { id: 'sales-sharepoint-hub', title: 'GPC Sales SharePoint Hub', category: 'Sales' },
    pages: [],
  };

  let pageIndex = 0;
  for (const stop of TOUR_STOPS) {
    console.log(`\nCapturing: ${stop.label}`);
    const captured = await capturePage(page, stop, pageIndex, SCROLL_CAPTURE, SITE);
    exportJson.pages.push(captured);
    pageIndex++;
  }

  await fs.writeFile(
    path.join(OUT_DIR, 'capture-export.json'),
    `${JSON.stringify(exportJson, null, 2)}\n`
  );
  await fs.writeFile(
    path.join(OUT_DIR, 'manifest.json'),
    `${JSON.stringify({ exportJson: 'capture-export.json', screenshots: exportJson.pages.flatMap((p) => (p.screenshots || []).map((s) => `screenshots/${s.filename}`)) }, null, 2)}\n`
  );

  console.log(`\nWrote ${OUT_DIR}`);

  if (close) await close();

  const assembleArgs = [path.join(SCRIPT_DIR, 'assemble-module.mjs'), OUT_DIR];
  if (register) assembleArgs.push('--register');
  await new Promise((resolve, reject) => {
    const child = spawn('node', assembleArgs, { stdio: 'inherit', cwd: ROOT });
    child.on('exit', (code) => (code === 0 ? resolve(undefined) : reject(new Error(`assemble exit ${code}`))));
  });

  console.log('\nDone. Open #/module/sales-sharepoint-hub in Sales-Navigator.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
