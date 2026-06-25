/**
 * Service worker: orchestrates multi-page SharePoint capture using the user's session.
 */

import { TOUR_STOPS, SCROLL_CAPTURE, SITE } from './lib/site-config.js';

/** @type {import('./lib/capture-types.js').CaptureExport | null} */
let activeExport = null;

function log(msg) {
  console.info('[sp-module-builder]', msg);
  chrome.runtime.sendMessage({ type: 'SP_LOG', message: msg }).catch(() => {});
}

function progress(update) {
  chrome.runtime.sendMessage({ type: 'SP_PROGRESS', ...update }).catch(() => {});
}

async function getActiveSharePointTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.id || !tab.url?.includes(SITE.host)) {
    throw new Error('Open a gpcom.sharepoint.com tab first (logged in).');
  }
  return tab;
}

async function sendTab(tabId, message) {
  return chrome.tabs.sendMessage(tabId, message);
}

async function navigateTab(tabId, url) {
  await chrome.tabs.update(tabId, { url });
  await waitForTabLoad(tabId);
  await sleep(1200);
}

function waitForTabLoad(tabId) {
  return new Promise((resolve) => {
    const listener = (updatedId, info) => {
      if (updatedId === tabId && info.status === 'complete') {
        chrome.tabs.onUpdated.removeListener(listener);
        resolve(undefined);
      }
    };
    chrome.tabs.onUpdated.addListener(listener);
  });
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function slug(s) {
  return String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60);
}

async function captureVisiblePng(windowId) {
  return chrome.tabs.captureVisibleTab(windowId, { format: 'png' });
}

async function profileTab(tab) {
  const res = await sendTab(tab.id, { type: 'SP_PROFILE' });
  if (!res?.ok) throw new Error(res?.error || 'Profile failed');
  return res.profile;
}

async function discoverNavUrl(tab, stop) {
  if (stop.url) return stop.url;
  if (!stop.discoverFromNav || !stop.navPatterns?.length) return null;

  const patterns = stop.navPatterns.map(String);
  let res = await sendTab(tab.id, { type: 'SP_MATCH_NAV', patterns });
  if (res?.ok && res.matches?.length) return res.matches[0].href;

  // Hub nav is often on the site home — try there before giving up.
  if (!tab.url?.startsWith(SITE.baseUrl) || tab.url !== SITE.baseUrl) {
    await navigateTab(tab.id, SITE.baseUrl);
    res = await sendTab(tab.id, { type: 'SP_MATCH_NAV', patterns });
    if (res?.ok && res.matches?.length) return res.matches[0].href;
  }

  return null;
}

async function scrollCaptureStop(tab, stopDef, pageIndex, shotIndex) {
  await sendTab(tab.id, { type: 'SP_SCROLL_TO', y: stopDef.y, settleMs: SCROLL_CAPTURE.settleMs });
  await sendTab(tab.id, { type: 'SP_HIDE_CHROME', hideSelectors: SCROLL_CAPTURE.hideChromeSelectors });
  await sleep(200);
  const dataUrl = await captureVisiblePng(tab.windowId);
  await sendTab(tab.id, { type: 'SP_RESTORE_CHROME' });
  const filename = `${String(pageIndex).padStart(2, '0')}-${slug(stopDef.label || 'section')}-${String(shotIndex).padStart(2, '0')}.png`;
  return {
    filename,
    dataUrl,
    label: stopDef.label,
    scrollY: stopDef.y,
    kind: stopDef.kind,
  };
}

async function capturePageTour(tab, tourStop, pageIndex) {
  const url = (await discoverNavUrl(tab, tourStop)) || tourStop.url;
  if (!url) {
    log(`Skipped ${tourStop.label}: no URL and no nav match.`);
    return {
      id: tourStop.id,
      label: tourStop.label,
      purpose: tourStop.purpose,
      url: null,
      skipped: true,
      skipReason: 'Could not resolve URL from site navigation.',
      profile: null,
      screenshots: [],
    };
  }

  if (tab.url !== url) {
    await navigateTab(tab.id, url);
  }

  const profile = await profileTab(tab);
  const planRes = await sendTab(tab.id, {
    type: 'SP_PLAN_STOPS',
    options: {
      maxViewportSteps: SCROLL_CAPTURE.maxViewportSteps,
      viewportStepRatio: SCROLL_CAPTURE.viewportStepRatio,
    },
  });
  const stops = planRes?.stops?.length ? planRes.stops : profile.scrollStops || [];

  /** @type {import('./lib/capture-types.js').CaptureScreenshot[]} */
  const screenshots = [];
  let shotIndex = 0;
  for (const stop of stops) {
    progress({
      phase: 'screenshot',
      page: tourStop.label,
      detail: stop.label,
      current: shotIndex + 1,
      total: stops.length,
    });
    const shot = await scrollCaptureStop(tab, stop, pageIndex, shotIndex);
    screenshots.push(shot);
    shotIndex++;
  }

  return {
    id: tourStop.id,
    label: tourStop.label,
    purpose: tourStop.purpose,
    url,
    skipped: false,
    profile: {
      title: profile.title,
      headings: profile.headings,
      quickLinks: profile.quickLinks,
      webParts: profile.webParts,
      linksSample: profile.links.slice(0, 40),
      bodyPreview: profile.bodyPreview,
    },
    screenshots,
  };
}

function initExport() {
  activeExport = {
    version: 1,
    site: SITE.baseUrl,
    capturedAt: new Date().toISOString(),
    moduleDraft: {
      id: 'sales-sharepoint-hub',
      title: 'GPC Sales SharePoint',
      category: 'Sales',
    },
    pages: [],
  };
  return activeExport;
}

function stripForStorage(exp) {
  return {
    ...exp,
    pages: (exp.pages || []).map((p) => ({
      ...p,
      screenshots: (p.screenshots || []).map(({ dataUrl, ...rest }) => rest),
    })),
  };
}

async function runFullTour() {
  const tab = await getActiveSharePointTab();
  const exp = initExport();
  progress({ phase: 'start', total: TOUR_STOPS.length });

  let pageIndex = 0;
  for (const stop of TOUR_STOPS) {
    progress({ phase: 'page', page: stop.label, current: pageIndex + 1, total: TOUR_STOPS.length });
    const pageCapture = await capturePageTour(tab, stop, pageIndex);
    exp.pages.push(pageCapture);
    pageIndex++;
  }

  await chrome.storage.local.set({ spCaptureExport: stripForStorage(exp) });
  progress({ phase: 'done', exportReady: true });
  log(`Capture complete: ${exp.pages.length} pages.`);
  return exp;
}

async function captureCurrentPageOnly() {
  const tab = await getActiveSharePointTab();
  if (!activeExport) initExport();
  const profile = await profileTab(tab);
  const stop = {
    id: slug(profile.title || 'current-page'),
    label: profile.title || 'Current page',
    purpose: 'Ad-hoc capture from the active SharePoint tab.',
    url: profile.url,
    scrollTour: true,
  };
  const pageCapture = await capturePageTour(tab, stop, activeExport.pages.length);
  activeExport.pages.push(pageCapture);
  await chrome.storage.local.set({ spCaptureExport: stripForStorage(activeExport) });
  return activeExport;
}

async function downloadExportBundle() {
  const exp = activeExport;
  if (!exp?.pages?.length) {
    throw new Error('No capture in memory. Run a tour, then download before closing the extension.');
  }

  /** @type {Record<string, string>} */
  const manifest = {
    exportJson: 'capture-export.json',
    screenshots: [],
  };

  const jsonBlob = new Blob([JSON.stringify(stripForStorage(exp), null, 2)], {
    type: 'application/json',
  });
  const jsonUrl = URL.createObjectURL(jsonBlob);
  await chrome.downloads.download({
    url: jsonUrl,
    filename: 'gpc-sharepoint-capture/capture-export.json',
    saveAs: false,
  });

  for (const page of exp.pages) {
    for (const shot of page.screenshots || []) {
      if (!shot.dataUrl) continue;
      await chrome.downloads.download({
        url: shot.dataUrl,
        filename: `gpc-sharepoint-capture/screenshots/${shot.filename}`,
        saveAs: false,
      });
      manifest.screenshots.push(`screenshots/${shot.filename}`);
    }
  }

  const manifestBlob = new Blob([JSON.stringify(manifest, null, 2)], { type: 'application/json' });
  const manifestUrl = URL.createObjectURL(manifestBlob);
  await chrome.downloads.download({
    url: manifestUrl,
    filename: 'gpc-sharepoint-capture/manifest.json',
    saveAs: false,
  });

  log('Downloaded capture bundle to ~/Downloads/gpc-sharepoint-capture/');
  return exp;
}

chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  (async () => {
    try {
      if (msg.type === 'SP_RUN_TOUR') {
        const exp = await runFullTour();
        sendResponse({ ok: true, export: exp });
        return;
      }
      if (msg.type === 'SP_CAPTURE_CURRENT') {
        const exp = await captureCurrentPageOnly();
        sendResponse({ ok: true, export: exp });
        return;
      }
      if (msg.type === 'SP_DOWNLOAD') {
        const exp = await downloadExportBundle();
        sendResponse({ ok: true, export: exp });
        return;
      }
      if (msg.type === 'SP_GET_EXPORT') {
        const { spCaptureExport } = await chrome.storage.local.get('spCaptureExport');
        sendResponse({ ok: true, export: activeExport || spCaptureExport || null });
        return;
      }
      sendResponse({ ok: false, error: 'Unknown background message' });
    } catch (e) {
      sendResponse({ ok: false, error: e instanceof Error ? e.message : String(e) });
    }
  })();
  return true;
});

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.windowId) {
    await chrome.sidePanel.open({ windowId: tab.windowId });
  }
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch(() => {});
});
