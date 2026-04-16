import { parseFrontMatter } from '../../js/lib/front-matter.js';

const EXPECTED = 5;

/**
 * Fetch a module's content.md and read `discovery_questions` from YAML front matter.
 * Embed games require exactly five strings (current game mechanics).
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
          'Module front matter must define discovery_questions as a YAML list of exactly five strings.',
      };
    }
    const questions = dq.map((q) => String(q ?? '').trim()).filter(Boolean);
    if (questions.length !== EXPECTED) {
      return {
        ok: false,
        error: 'bad_count',
        questions,
        message: `discovery_questions must have exactly ${EXPECTED} items (found ${questions.length}).`,
      };
    }
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
