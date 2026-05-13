import { awardXP } from './gamification.js';

const DISCOVERY_GAME_XP = 50;
const MESSAGE_TYPE = 'sn-discovery-complete';

/** @type {ReadonlySet<string>} */
const ALLOWED_GAMES = new Set(['discovery-run', 'discovery-galaxy', 'discovery-break']);

function storageKey(game, moduleId) {
  return `sn:xp:discovery:${game}:${moduleId}`;
}

/**
 * @returns {boolean} true if this completion should grant XP (and idempotency key was set)
 */
function claimDiscoveryXpAward(game, moduleId) {
  try {
    const k = storageKey(game, moduleId);
    if (localStorage.getItem(k) === '1') return false;
    localStorage.setItem(k, '1');
    return true;
  } catch {
    return true;
  }
}

function reasonForGame(game) {
  if (game === 'discovery-run') return 'Discovery Run complete';
  if (game === 'discovery-galaxy') return 'Discovery Galaxy complete';
  return 'Discovery Break complete';
}

/** Listen for iframe postMessage from embedded discovery games; award XP once per game+module. */
export function initDiscoveryGameXpBridge() {
  window.addEventListener('message', (event) => {
    if (event.source === window) return;
    if (event.origin !== window.location.origin) return;
    const data = event.data;
    if (!data || typeof data !== 'object') return;
    if (data.type !== MESSAGE_TYPE) return;

    const game = typeof data.game === 'string' ? data.game : '';
    const moduleId = typeof data.moduleId === 'string' ? data.moduleId.trim() : '';
    if (!ALLOWED_GAMES.has(game)) return;
    if (!/^[a-z0-9-]+$/.test(moduleId)) return;

    if (!claimDiscoveryXpAward(game, moduleId)) return;
    awardXP(DISCOVERY_GAME_XP, reasonForGame(game));
  });
}
