import { parseFrontMatter } from '../../js/lib/front-matter.js';

/** Discovery embed games use five prompts per run. */
const NEED = 5;

/**
 * Fisher–Yates shuffle (copy).
 * @param {string[]} arr
 * @returns {string[]}
 */
function shuffleCopy(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Fetch a module's content.md and read `discovery_questions` from YAML front matter.
 * Embed games need {@link NEED} prompts. If the module lists more, a random subset of five is chosen each load.
 * @param {string | null} moduleId
 * @returns {Promise<{ ok: boolean; error?: string; questions: string[]; message: string }>}
 */
export async function loadDiscoveryQuestionsFromModule(moduleId) {
  if (!moduleId || String(moduleId).trim() === '') {
    return {
      ok: false,
      error: 'missing_module',
      questions: [],
      message:
        'Missing module query parameter. Iframe src should include ?embed=1&module=your-module-id (see docs/module-authoring.md).',
    };
  }
  const id = String(moduleId).trim();
  if (!/^[a-z0-9-]+$/.test(id)) {
    return {
      ok: false,
      error: 'invalid_module',
      questions: [],
      message: 'Invalid module id in URL (use lowercase letters, digits, and hyphens only).',
    };
  }

  const url = `../../modules/${id}/content.md`;
  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) {
      return {
        ok: false,
        error: 'fetch_failed',
        questions: [],
        message: `Could not load module content (${res.status} for ${url}).`,
      };
    }
    const raw = await res.text();
    const { meta } = parseFrontMatter(raw);
    const dq = meta.discovery_questions;
    if (!Array.isArray(dq)) {
      return {
        ok: false,
        error: 'no_array',
        questions: [],
        message:
          'Module front matter must define discovery_questions as a YAML list of strings (at least five; if there are more, five are chosen at random each time the game loads).',
      };
    }
    const pool = dq.map((q) => String(q ?? '').trim()).filter(Boolean);
    if (pool.length < NEED) {
      return {
        ok: false,
        error: 'bad_count',
        questions: pool,
        message: `discovery_questions must have at least ${NEED} items (found ${pool.length}).`,
      };
    }
    const questions =
      pool.length === NEED ? pool : shuffleCopy(pool).slice(0, NEED);
    return { ok: true, questions, message: '' };
  } catch (e) {
    const detail = e instanceof Error ? e.message : String(e);
    return {
      ok: false,
      error: 'exception',
      questions: [],
      message: detail.includes('Invalid YAML') ? detail : `Could not load discovery questions: ${detail}`,
    };
  }
}
