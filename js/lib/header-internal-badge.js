const BADGE_ID = 'header-internal-badge';

/**
 * Show or hide the "Internal" pill in the app chrome (#main-header).
 * @param {boolean} visible
 */
export function setMainHeaderInternalBadge(visible) {
  const el = document.getElementById(BADGE_ID);
  if (!el) return;
  el.classList.toggle('hidden', !visible);
  el.setAttribute('aria-hidden', visible ? 'false' : 'true');
}
