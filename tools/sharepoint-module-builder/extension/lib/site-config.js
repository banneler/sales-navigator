/**
 * Default URLs and labels for the GPC Sales SharePoint capture tour.
 * The extension also discovers nav links on the live site (M&Ps, Rate Cards, etc.).
 */
export const SITE = {
  host: 'gpcom.sharepoint.com',
  sitePath: '/sites/gpcSales',
  baseUrl: 'https://gpcom.sharepoint.com/sites/gpcSales',
};

/** @type {Array<{ id: string; label: string; url: string; purpose: string; scrollTour?: boolean }>} */
export const TOUR_STOPS = [
  {
    id: 'home',
    label: 'Sales home',
    url: 'https://gpcom.sharepoint.com/sites/gpcSales',
    purpose:
      'Main landing page — leadership updates, previous month results, quick links into the rest of the site.',
    scrollTour: true,
  },
  {
    id: 'sales-resources',
    label: 'Sales Resources',
    url: 'https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Sales%20Resources.aspx',
    purpose:
      'Collateral hub — battle cards, product sheets, competitive assets, and deep links by product family (long scroll).',
    scrollTour: true,
  },
  {
    id: 'mnps',
    label: 'M&Ps',
    url: 'https://gpcom.sharepoint.com/sites/gpcSales/SitePages/M%26Ps.aspx',
    purpose:
      'Methods & Procedures — operational sales playbooks, process docs, and how-to guides for reps.',
    scrollTour: true,
    discoverFromNav: true,
    navPatterns: [/m\s*&\s*p/i, /methods\s*&\s*procedures/i, /\bmnp\b/i],
  },
  {
    id: 'rate-cards',
    label: 'Rate Cards',
    url: 'https://gpcom.sharepoint.com/sites/gpcSales/SitePages/Rate%20Cards.aspx',
    purpose:
      'Pricing and rate-card library — verify market-specific rates here before quoting.',
    scrollTour: true,
    discoverFromNav: true,
    navPatterns: [/rate\s*card/i, /pricing/i, /price\s*book/i],
  },
];

export const SCROLL_CAPTURE = {
  /** ms to wait after scroll before screenshot */
  settleMs: 650,
  /** fallback viewport steps when no headings found */
  viewportStepRatio: 0.85,
  maxViewportSteps: 24,
  /** hide SharePoint chrome for cleaner training screenshots */
  hideChromeSelectors: [
    '#SuiteNavWrapper',
    '[data-automation-id="SiteHeader"]',
    '.ms-HubNav',
    '#spSiteHeader',
    'footer',
  ],
};

export const SECTION_HINTS = {
  home: [
    { pattern: /previous\s*month|last\s*month|monthly\s*results|results/i, label: 'Previous month results' },
    { pattern: /announcement|news|update/i, label: 'News & announcements' },
    { pattern: /quick\s*link|resource/i, label: 'Quick links' },
  ],
  'sales-resources': [
    { pattern: /battle\s*card|product\s*battle/i, label: 'Product battle cards' },
    { pattern: /competitive|competitor/i, label: 'Competitive battle cards' },
    { pattern: /product\s*sheet|datasheet|collateral/i, label: 'Product collateral' },
    { pattern: /rate|pricing|price/i, label: 'Pricing references' },
    { pattern: /training|enablement|video/i, label: 'Training & enablement' },
  ],
};
