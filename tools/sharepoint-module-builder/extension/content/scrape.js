/**
 * Content script: page structure extraction and scroll-stop planning for SharePoint modern pages.
 */

const SCRAPE = {
  headingSelector: 'h1, h2, h3, h4, [role="heading"]',
  linkSelector: 'a[href]',
  mainSelectors: [
    '[data-automation-id="contentScrollRegion"]',
    'main',
    '[data-sp-feature-tag="CanvasZone"]',
    '.CanvasZone',
    '#spPageCanvasContent',
  ],
};

function getMainRoot() {
  for (const sel of SCRAPE.mainSelectors) {
    const el = document.querySelector(sel);
    if (el && el.innerText?.trim().length > 40) return el;
  }
  return document.body;
}

function cleanText(s) {
  return String(s || '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 500);
}

function pageMeta() {
  return {
    url: location.href,
    title: cleanText(document.title),
    capturedAt: new Date().toISOString(),
    pathname: location.pathname,
  };
}

function collectHeadings(root) {
  const nodes = root.querySelectorAll(SCRAPE.headingSelector);
  /** @type {Array<{ level: string; text: string; top: number; id: string | null }>} */
  const out = [];
  nodes.forEach((node) => {
    const text = cleanText(node.textContent);
    if (!text || text.length < 2) return;
    const rect = node.getBoundingClientRect();
    if (rect.height === 0 && rect.width === 0) return;
    const tag = node.tagName?.toLowerCase() || 'heading';
    out.push({
      level: tag,
      text,
      top: rect.top + window.scrollY,
      id: node.id || null,
    });
  });
  return out;
}

function collectLinks(root) {
  const links = root.querySelectorAll(SCRAPE.linkSelector);
  /** @type {Array<{ text: string; href: string }>} */
  const out = [];
  const seen = new Set();
  links.forEach((a) => {
    const href = a.href;
    const text = cleanText(a.textContent);
    if (!href || !text) return;
    if (!href.includes('gpcom.sharepoint.com')) return;
    const key = `${text}::${href}`;
    if (seen.has(key)) return;
    seen.add(key);
    out.push({ text, href });
  });
  return out.slice(0, 200);
}

function collectQuickLinks(root) {
  /** @type {Array<{ text: string; href: string | null }>} */
  const items = [];
  root.querySelectorAll('[data-sp-feature-tag*="QuickLinks"] a, .ms-QuickLinks a').forEach((a) => {
    items.push({ text: cleanText(a.textContent), href: a.href || null });
  });
  return items;
}

function collectWebPartTitles(root) {
  /** @type {string[]} */
  const titles = [];
  root.querySelectorAll('[data-sp-feature-tag]').forEach((wp) => {
    const tag = wp.getAttribute('data-sp-feature-tag') || '';
    const h = wp.querySelector('h2, h3, h4, [role="heading"]');
    const t = h ? cleanText(h.textContent) : '';
    if (t) titles.push(t);
    else if (tag && !tag.includes('Canvas')) titles.push(tag.replace(/WebPart\./g, '').trim());
  });
  return [...new Set(titles)].slice(0, 80);
}

function collectBannerStops(root) {
  /** @type {Array<{ y: number; label: string; kind: 'banner' | 'viewport' }>} */
  const stops = [];

  stops.push({ y: 0, label: 'Top of page — quick links', kind: 'viewport' });

  const bannerSelectors = [
    '[data-sp-feature-tag*="QuickLinks"]',
    '[data-automation-id*="QuickLinks"]',
    '[data-sp-feature-tag*="Hero"]',
    '.ms-QuickLinks',
  ];
  for (const sel of bannerSelectors) {
    root.querySelectorAll(sel).forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.height < 24 || rect.width < 120) return;
      const y = Math.max(0, Math.floor(rect.top + window.scrollY - 24));
      const links = [...el.querySelectorAll('a')]
        .map((a) => cleanText(a.textContent))
        .filter(Boolean);
      const label =
        links.length > 0
          ? `Quick links — ${links.slice(0, 5).join(', ')}`
          : cleanText(el.textContent).slice(0, 120) || 'Quick links banner';
      stops.push({ y, label, kind: 'banner' });
    });
  }

  if (stops.length === 1) {
    for (const el of root.querySelectorAll('div, section, article')) {
      const text = cleanText(el.textContent);
      if (!/tools to support every deal|now live/i.test(text)) continue;
      const rect = el.getBoundingClientRect();
      if (rect.height < 40 || rect.height > 700) continue;
      const y = Math.max(0, Math.floor(rect.top + window.scrollY - 24));
      stops.push({
        y,
        label: 'Tools to support every deal — quick links',
        kind: 'banner',
      });
      break;
    }
  }

  return stops;
}

function planScrollStops(root, options = {}) {
  const maxSteps = options.maxViewportSteps ?? 24;
  const ratio = options.viewportStepRatio ?? 0.85;
  const headings = collectHeadings(root).filter((h) => h.top > 40);

  /** @type {Array<{ y: number; label: string; kind: 'heading' | 'viewport' | 'banner' }>} */
  const stops = [...collectBannerStops(root)];
  const usedY = new Set(stops.map((s) => Math.floor(s.y / 40) * 40));

  for (const h of headings) {
    const y = Math.max(0, Math.floor(h.top - 80));
    const bucket = Math.floor(y / 40) * 40;
    if (usedY.has(bucket)) continue;
    usedY.add(bucket);
    stops.push({ y, label: h.text, kind: 'heading' });
  }

  if (stops.length < 2) {
    const docHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body?.scrollHeight || 0
    );
    const step = Math.floor(window.innerHeight * ratio);
    for (let y = 0, n = 0; y < docHeight && n < maxSteps; y += step, n++) {
      stops.push({ y, label: `Section ${n + 1}`, kind: 'viewport' });
    }
  }

  stops.sort((a, b) => a.y - b.y);
  return stops.slice(0, maxSteps);
}

function matchNavLinks(links, patterns) {
  return links.filter((l) => patterns.some((re) => re.test(l.text) || re.test(l.href)));
}

function profilePage() {
  const root = getMainRoot();
  const headings = collectHeadings(root);
  const links = collectLinks(root);
  const quickLinks = collectQuickLinks(root);
  const webParts = collectWebPartTitles(root);
  const bodyPreview = cleanText(root.innerText).slice(0, 4000);

  return {
    ...pageMeta(),
    headings,
    links,
    quickLinks,
    webParts,
    bodyPreview,
    scrollStops: planScrollStops(root),
  };
}

function scrollToY(y) {
  window.scrollTo({ top: y, left: 0, behavior: 'auto' });
}

/** @type {(() => void) | null} */
let restoreChromeFn = null;

function applyChromeHide(selectors) {
  if (restoreChromeFn) restoreChromeFn();
  /** @type {Array<{ el: Element; prev: string }>} */
  const touched = [];
  selectors.forEach((sel) => {
    document.querySelectorAll(sel).forEach((el) => {
      touched.push({ el, prev: el.style.display });
      el.style.display = 'none';
    });
  });
  restoreChromeFn = () => {
    touched.forEach(({ el, prev }) => {
      el.style.display = prev;
    });
    restoreChromeFn = null;
  };
  return restoreChromeFn;
}

chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  (async () => {
    try {
      if (msg.type === 'SP_PROFILE') {
        sendResponse({ ok: true, profile: profilePage() });
        return;
      }

      if (msg.type === 'SP_MATCH_NAV') {
        const root = getMainRoot();
        const links = collectLinks(root).concat(collectQuickLinks(root).filter((q) => q.href));
        const patterns = (msg.patterns || []).map((p) => new RegExp(p, 'i'));
        sendResponse({ ok: true, matches: matchNavLinks(links, patterns) });
        return;
      }

      if (msg.type === 'SP_SCROLL_TO') {
        scrollToY(msg.y ?? 0);
        await new Promise((r) => setTimeout(r, msg.settleMs ?? 400));
        sendResponse({ ok: true, y: window.scrollY });
        return;
      }

      if (msg.type === 'SP_HIDE_CHROME') {
        applyChromeHide(msg.hideSelectors || []);
        sendResponse({ ok: true });
        return;
      }

      if (msg.type === 'SP_RESTORE_CHROME') {
        if (restoreChromeFn) restoreChromeFn();
        sendResponse({ ok: true });
        return;
      }

      if (msg.type === 'SP_PLAN_STOPS') {
        const root = getMainRoot();
        sendResponse({
          ok: true,
          stops: planScrollStops(root, msg.options || {}),
        });
        return;
      }

      sendResponse({ ok: false, error: 'Unknown message type' });
    } catch (e) {
      sendResponse({ ok: false, error: e instanceof Error ? e.message : String(e) });
    }
  })();
  return true;
});
