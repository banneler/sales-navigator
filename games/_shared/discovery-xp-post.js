/**
 * Notify the Sales-Navigator parent window that an embedded discovery game was completed.
 * Used only when the iframe URL includes `?embed=1&module=<id>` (see module iframes).
 */

/** @param {'discovery-run' | 'discovery-galaxy' | 'discovery-break'} gameKey */
export function notifyDiscoveryGameComplete(gameKey) {
  try {
    const p = new URLSearchParams(window.location.search);
    if (p.get('embed') !== '1') return;
    const moduleId = (p.get('module') || '').trim();
    if (!/^[a-z0-9-]+$/.test(moduleId)) return;
    if (!window.parent || window.parent === window) return;
    window.parent.postMessage(
      {
        type: 'sn-discovery-complete',
        game: gameKey,
        moduleId,
      },
      window.location.origin
    );
  } catch {
    /* ignore */
  }
}
