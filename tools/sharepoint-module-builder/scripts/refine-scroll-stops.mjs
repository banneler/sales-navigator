/**
 * Collapse near-duplicate SharePoint scroll stops after browser profiling.
 * @param {Array<{ y: number; label: string; kind?: string }>} stops
 * @param {{ viewport?: { height?: number }; minScrollGapRatio?: number; maxStops?: number; skipHeadingMinLength?: number }} cfg
 * @param {string} [pageId]
 */
export function refineScrollStops(stops, cfg = {}, pageId = '') {
  const viewportH = cfg.viewport?.height ?? 1200;
  const minGap = Math.floor(viewportH * (cfg.minScrollGapRatio ?? 0.42));
  const maxStops = cfg.maxStops ?? 14;
  const skipLong = cfg.skipHeadingMinLength ?? 96;

  /** @type {Array<{ y: number; label: string; kind?: string }>} */
  let list = (stops || [])
    .filter((s) => Number.isFinite(s.y) && s.y >= 0 && String(s.label || '').trim())
    .map((s) => ({ ...s, label: String(s.label).replace(/\s+/g, ' ').trim() }));

  // One hero / quick-link stop at the top.
  const topBand = list.filter((s) => s.y <= 24);
  if (topBand.length) {
    const hero =
      topBand.find((s) => /quick link|tools to support|banner/i.test(s.label)) || topBand[0];
    list = list.filter((s) => s.y > 24);
    list.unshift({
      y: 0,
      label: /quick link|tools to support/i.test(hero.label)
        ? hero.label.replace(/^top of page — /i, '')
        : 'Quick links — Tools to support every deal',
      kind: 'banner',
    });
  }

  list = list.filter((s) => {
    if (s.kind === 'heading' && s.label.length > skipLong) return false;
    if (s.kind === 'heading' && /^(sales resources|sales - home|sales - methods|sales - rate)/i.test(s.label))
      return false;
    if (s.kind === 'heading' && /^welcome to your one-stop/i.test(s.label)) return false;
    return true;
  });

  const seenLabels = new Set();
  list = list.filter((s) => {
    const key = s.label.toLowerCase().slice(0, 90);
    if (seenLabels.has(key)) return false;
    seenLabels.add(key);
    return true;
  });

  list.sort((a, b) => a.y - b.y);

  if (pageId === 'sales-resources') {
    // Quick-link tiles can produce false "ZoomInfo" banner stops near the page top.
    list = list.filter((s) => !(s.kind === 'banner' && /zoominfo/i.test(s.label)));
  }

  const canonical = CANONICAL_SECTIONS[pageId];
  if (canonical) {
    const picked = pickCanonicalSections(list, canonical);
    if (picked.length) return picked.slice(0, maxStops);
  }

  /** @type {typeof list} */
  const out = [];
  for (const s of list) {
    if (out.length && s.y - out[out.length - 1].y < minGap) continue;
    out.push(s);
  }

  return out.slice(0, maxStops);
}

/** @type {Record<string, Array<{ pattern: RegExp; label: string }>>} */
const CANONICAL_SECTIONS = {
  home: [
    { pattern: /quick link|tools to support/i, label: 'Quick links — Tools to support every deal' },
    { pattern: /sales results|month.*results|april|previous month/i, label: 'Monthly sales results' },
    { pattern: /sales events/i, label: 'Sales events' },
  ],
  'sales-resources': [
    { pattern: /quick link|tools to support/i, label: 'Quick links — Tools to support every deal' },
    { pattern: /proposal engine/i, label: 'Proposal Engine' },
    { pattern: /product collateral/i, label: 'Product Collateral' },
    { pattern: /product battle cards/i, label: 'Battle Cards' },
    { pattern: /^uc demos/i, label: 'UC Demos' },
    { pattern: /^zoominfo resources/i, label: 'ZoomInfo Resources' },
    { pattern: /^product training for sales/i, label: 'Product Training for Sales' },
  ],
  mnps: [
    { pattern: /quick link|tools to support/i, label: 'Quick links — Tools to support every deal' },
    { pattern: /sales processes|rules of engagement|training resources|methods|procedures/i, label: 'M&Ps overview' },
  ],
  'sales-processes': [
    { pattern: /sales process|all documents/i, label: 'Sales Process library' },
    { pattern: /account based marketing|\babm\b/i, label: 'Account Based Marketing folder' },
    { pattern: /operational business review|\bobr\b/i, label: 'Operational Business Review folder' },
  ],
  'rate-cards': [
    { pattern: /quick link|tools to support|rate cards/i, label: 'Rate Cards overview' },
    { pattern: /retail rate cards/i, label: 'Retail Rate Cards' },
    { pattern: /wholesale rate cards/i, label: 'Wholesale Rate Cards' },
  ],
};

/**
 * @param {Array<{ y: number; label: string; kind?: string }>} stops
 * @param {Array<{ pattern: RegExp; label: string }>} sections
 */
function pickCanonicalSections(stops, sections) {
  /** @type {typeof stops} */
  const picked = [];
  for (const sec of sections) {
    const matches = stops.filter((s) => sec.pattern.test(s.label));
    const match =
      matches.find((s) => s.kind === 'heading') ||
      [...matches].filter((s) => s.kind !== 'banner').sort((a, b) => a.y - b.y)[0] ||
      [...matches].sort((a, b) => a.y - b.y)[0];
    if (match) {
      picked.push({ ...match, label: sec.label });
    }
  }
  return picked.sort((a, b) => a.y - b.y);
}
