import yaml from 'https://esm.sh/js-yaml@4.1.0';

/**
 * Parse YAML front matter between --- delimiters (CommonMark-style).
 * @param {string} raw
 * @returns {{ meta: Record<string, unknown>, body: string }}
 */
export function parseFrontMatter(raw) {
  const text = raw ?? '';
  if (!text.startsWith('---')) {
    return { meta: {}, body: text };
  }
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return { meta: {}, body: text };
  }
  const [, fm, body] = match;
  let meta = {};
  try {
    meta = yaml.load(fm) || {};
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    throw new Error(`Invalid YAML in front matter: ${msg}`);
  }
  return { meta, body: body.trimStart() };
}
