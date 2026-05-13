#!/usr/bin/env node
/**
 * Standalone screenshot runner: serves the Sales Navigator repo over HTTP,
 * mocks auth, visits each module hash route, saves multiple PNGs per module
 * (intro gate, after start, scrolled, tab states, deep dives).
 *
 * Usage:
 *   cd tools/sales-navigator-screenshots
 *   npm install && npm run install-browser
 *   # build CSS in the main repo first: from repo root, npm run build
 *   node capture.mjs --root ../..
 *
 * Options:
 *   --root <path>   Path to sales-navigator repo root (contains index.html, modules-manifest.json)
 *   --port <n>      Static server port (default 4173)
 *   --out <path>    Output directory for PNGs (default ./output next to this script)
 */

import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function parseArgs(argv) {
  const out = { root: null, port: 4173, outDir: null };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--root' && argv[i + 1]) {
      out.root = argv[++i];
    } else if (a === '--port' && argv[i + 1]) {
      out.port = Number(argv[++i]);
    } else if (a === '--out' && argv[i + 1]) {
      out.outDir = argv[++i];
    } else if (a === '--help' || a === '-h') {
      out.help = true;
    }
  }
  return out;
}

async function waitForHttp(url, timeoutMs = 90_000) {
  const t0 = Date.now();
  while (Date.now() - t0 < timeoutMs) {
    try {
      const ac = new AbortController();
      const t = setTimeout(() => ac.abort(), 2000);
      const res = await fetch(url, { signal: ac.signal });
      clearTimeout(t);
      if (res.ok) return;
    } catch {
      /* retry */
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error(`Server never became ready: ${url}`);
}

function startServe(siteRoot, port) {
  const localBin = path.join(__dirname, 'node_modules', '.bin', process.platform === 'win32' ? 'serve.cmd' : 'serve');
  const cmd = fs.existsSync(localBin) ? localBin : 'npx';
  const argv =
    fs.existsSync(localBin) ? [siteRoot, '-l', String(port), '--no-clipboard'] : ['serve', siteRoot, '-l', String(port), '--no-clipboard'];
  const child = spawn(cmd, argv, {
    cwd: __dirname,
    stdio: 'ignore',
    shell: !fs.existsSync(localBin),
  });
  child.on('error', (err) => {
    console.error('serve failed to start:', err);
  });
  return child;
}

function readModules(manifestPath) {
  const raw = fs.readFileSync(manifestPath, 'utf8');
  const manifest = JSON.parse(raw);
  const modules = Array.isArray(manifest.modules) ? manifest.modules : [];
  return [...modules].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

function moduleBaseName(mod) {
  const id = mod.id;
  return `${String(mod.order ?? 0).padStart(2, '0')}-${String(id).replace(/[^a-z0-9-]+/gi, '_')}`;
}

async function writeFullPage(page, filePath) {
  await page.screenshot({ path: filePath, fullPage: true });
  try {
    const st = fs.statSync(filePath);
    if (st.size < 2000) console.warn(`Warning: tiny file ${filePath} (${st.size} bytes)`);
  } catch {
    /* ignore */
  }
  console.log(filePath);
}

async function scrollMainPanel(page, where) {
  await page.evaluate((w) => {
    const mp = document.getElementById('main-panel');
    if (!mp) return;
    if (w === 'bottom') mp.scrollTo(0, mp.scrollHeight);
    else mp.scrollTo(0, 0);
  }, where);
  await page.waitForTimeout(where === 'bottom' ? 500 : 350);
}

/**
 * Markdown training modules: intro gate (coffee preview) → Start → main → scroll → sales trio tabs → &lt;details&gt; deep dives → suppressed trio-deep block.
 */
async function captureTrainingModuleFrames(page, outDir, baseName) {
  const intro = page.locator('#module-intro-gate-overlay');
  const hasIntro = (await intro.count()) > 0;
  if (hasIntro) {
    try {
      await intro.waitFor({ state: 'visible', timeout: 6000 });
      await writeFullPage(page, path.join(outDir, `${baseName}__00-intro-gate.png`));
    } catch {
      /* overlay may render without intersecting "visible" heuristics */
      await writeFullPage(page, path.join(outDir, `${baseName}__00-intro-gate.png`));
    }
  }

  const startBtn = page.locator('#module-intro-gate-overlay .module-intro-start');
  if ((await startBtn.count()) > 0 && (await startBtn.isVisible().catch(() => false))) {
    await startBtn.click();
    await page.locator('#module-intro-gate-overlay').waitFor({ state: 'detached', timeout: 20_000 });
    await page.waitForTimeout(400);
  }

  await writeFullPage(page, path.join(outDir, `${baseName}__01-main.png`));

  await scrollMainPanel(page, 'bottom');
  await writeFullPage(page, path.join(outDir, `${baseName}__02-scrolled.png`));

  await scrollMainPanel(page, 'top');

  const tabs = page.locator('#module-host .js-sales-trio-tab');
  const tabCount = await tabs.count();
  for (let i = 0; i < tabCount; i++) {
    await tabs.nth(i).click();
    await page.waitForTimeout(450);
    await writeFullPage(page, path.join(outDir, `${baseName}__03-tab-${i}.png`));
  }

  const deepLoc = page.locator('#module-host details.module-section-deep');
  const deepCount = await deepLoc.count();
  if (deepCount > 0) {
    for (let i = 0; i < deepCount; i++) {
      const det = deepLoc.nth(i);
      const isOpen = await det.evaluate((el) => el.open);
      if (!isOpen) {
        await det.locator('summary').first().click({ timeout: 5000 }).catch(() => {});
        await page.waitForTimeout(250);
      }
    }
    await writeFullPage(page, path.join(outDir, `${baseName}__04-deep-expanded.png`));
  }

  const suppressed = page.locator('#module-host .module-sales-trio-deep-suppressed');
  if ((await suppressed.count()) > 0) {
    await page.evaluate(() => {
      document.querySelectorAll('#module-host .module-sales-trio-deep-suppressed').forEach((el) => {
        el.classList.remove('hidden');
        el.setAttribute('aria-hidden', 'false');
      });
    });
    await page.waitForTimeout(400);
    await writeFullPage(page, path.join(outDir, `${baseName}__05-trio-deep-visible.png`));
  }
}

async function captureGettingStartedFrames(page, outDir, baseName) {
  const tour = page.locator('#getting-started-tour-overlay');
  if ((await tour.count()) > 0) {
    await tour.waitFor({ state: 'attached', timeout: 12_000 }).catch(() => {});
    await writeFullPage(page, path.join(outDir, `${baseName}__00-tour.png`));
    await page.evaluate(() => {
      document.getElementById('getting-started-tour-overlay')?.remove();
    });
    await page.waitForTimeout(350);
  }

  await writeFullPage(page, path.join(outDir, `${baseName}__01-main.png`));

  await scrollMainPanel(page, 'bottom');
  await writeFullPage(page, path.join(outDir, `${baseName}__02-scrolled.png`));

  await scrollMainPanel(page, 'top');
  const tab1 = page.locator('#module-host [data-gs-main-tabs] button[data-gs-tab="1"]');
  if ((await tab1.count()) > 0) {
    await tab1.click();
    await page.waitForTimeout(450);
    await writeFullPage(page, path.join(outDir, `${baseName}__03-tab-wayfinding.png`));
  }
}

async function captureMapBookFrames(page, outDir, baseName) {
  await writeFullPage(page, path.join(outDir, `${baseName}__00-main.png`));
  await scrollMainPanel(page, 'bottom');
  await writeFullPage(page, path.join(outDir, `${baseName}__01-scrolled.png`));
}

async function captureAllFramesForModule(page, mod, outDir, baseUrl) {
  const id = mod.id;
  if (!id || typeof id !== 'string') return;

  const baseName = moduleBaseName(mod);
  const url = `${baseUrl}/index.html#/module/${encodeURIComponent(id)}`;
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60_000 });

  await page.locator('#module-host').waitFor({ state: 'visible', timeout: 30_000 });
  await page.waitForFunction(
    () => {
      const el = document.getElementById('module-host');
      return el != null && el.innerHTML.trim().length > 20;
    },
    { timeout: 45_000 },
  );

  await page.waitForTimeout(1200);

  if (id === 'getting-started') {
    await captureGettingStartedFrames(page, outDir, baseName);
    return;
  }
  if (id === 'map-book') {
    await captureMapBookFrames(page, outDir, baseName);
    return;
  }

  await captureTrainingModuleFrames(page, outDir, baseName);
}

async function main() {
  const args = parseArgs(process.argv);
  if (args.help || !args.root) {
    console.log(`Usage: node capture.mjs --root <path-to-sales-navigator> [--port 4173] [--out ./output]

Build Tailwind in the main repo before running:
  cd <repo-root> && npm run build

Each module produces multiple files, e.g.
  01-id__00-intro-gate.png  (module preview + coffee summary, when present)
  01-id__01-main.png        (after "Start Module")
  01-id__02-scrolled.png    (main panel scrolled to bottom)
  01-id__03-tab-0.png …     (each Sales trio tab)
  01-id__04-deep-expanded.png (optional details deep sections opened)
  01-id__05-trio-deep-visible.png (optional suppressed deep block revealed)`);
    process.exit(args.help ? 0 : 1);
  }

  const siteRoot = path.resolve(args.root);
  const manifestPath = path.join(siteRoot, 'modules-manifest.json');
  if (!fs.existsSync(manifestPath)) {
    console.error(`No modules-manifest.json under ${siteRoot}`);
    process.exit(1);
  }
  if (!fs.existsSync(path.join(siteRoot, 'index.html'))) {
    console.error(`No index.html under ${siteRoot}`);
    process.exit(1);
  }

  const outDir = path.resolve(args.outDir || path.join(__dirname, 'output'));
  fs.mkdirSync(outDir, { recursive: true });

  const port = args.port;
  const base = `http://127.0.0.1:${port}`;

  let serveProc;
  try {
    serveProc = startServe(siteRoot, port);
    await waitForHttp(`${base}/index.html`);

    const modules = readModules(manifestPath);
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      serviceWorkers: 'block',
    });

    await context.route('**/api/auth/get-session', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          user: {
            id: 'screenshot-run',
            name: 'Screenshot',
            email: 'screenshots@local.invalid',
          },
          session: { id: 'mock' },
        }),
      });
    });

    const page = await context.newPage();
    try {
      for (const mod of modules) {
        await captureAllFramesForModule(page, mod, outDir, base);
      }
    } finally {
      await browser.close();
    }
  } finally {
    if (serveProc && !serveProc.killed) {
      serveProc.kill('SIGTERM');
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
