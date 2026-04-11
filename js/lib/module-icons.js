/**
 * Stroke icons aligned with the Executive Map Book product tiles (map-book/content.json
 * + map-book/embed.html): Heroicons-style paths, viewBox 0 0 24 24, stroke width 2.
 *
 * Product modules reuse the same `d` values as the portfolio grid where applicable.
 */

/** @type {Record<string, string>} moduleId → single path `d` (may contain multiple subpaths) */
export const MODULE_ICON_PATHS = {
  // Welcome / map
  'getting-started':
    'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 016 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25',
  'map-book':
    'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',

  // Sales (stroke style matches map book; paths are document / process / upload / globe motifs)
  'sales-rules-of-engagement':
    'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  'sales-process-and-salesforce':
    'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z',
  'sales-operations-and-approvals':
    'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12',
  'competitive-positioning':
    'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',

  // Product / portfolio (from map-book pageContent.products)
  'portfolio-and-business-capabilities':
    'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
  'product-connectivity':
    'M3 9h4v6H3z M7 10l3-1v6l-3-1 M10 10c3-3 5-4 7.5-4 M17.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0 M10 12h9 M19 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0 M10 14c3 3 5 4 7.5 4 M17.5 18a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0',
  'product-security-and-sd-wan':
    'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  'product-cloud-wifi-and-backup':
    'M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z',
  'product-uc-voice-and-collaboration':
    'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z',
};

const DEFAULT_PATH =
  'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253';

/**
 * @param {string} moduleId
 * @returns {string} path `d` attribute
 */
export function getModuleIconPath(moduleId) {
  if (!moduleId || typeof moduleId !== 'string') return DEFAULT_PATH;
  return MODULE_ICON_PATHS[moduleId] || DEFAULT_PATH;
}

/**
 * Inline SVG for nav + module headers (stroke icons, map-book style).
 * @param {string} moduleId
 * @param {string} [className] - Tailwind classes on the root &lt;svg&gt;
 */
export function getModuleIconSvgHtml(moduleId, className = 'w-6 h-6') {
  const d = getModuleIconPath(moduleId);
  const safeClass = String(className)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;');
  return `<svg class="${safeClass}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${d}"></path></svg>`;
}
