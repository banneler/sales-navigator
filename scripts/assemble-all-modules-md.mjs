/**
 * Writes docs/sales-navigator-all-modules.md from modules-manifest.json order.
 * Verbatim module bodies are wrapped in prettier-ignore ranges so editors do not
 * reflow YAML front matter as Markdown lists.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function anchorId(title, id) {
  return (
    title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-') +
    '-' +
    id
  );
}

const manifest = JSON.parse(
  fs.readFileSync(path.join(root, 'modules-manifest.json'), 'utf8')
);
const mods = [...manifest.modules].sort((a, b) => (a.order || 0) - (b.order || 0));

const lines = [];
lines.push('# Sales-Navigator — consolidated module content');
lines.push('');
lines.push(
  'Single export in manifest order. **Canonical training source for each module is `modules/<id>/content.md`** (or the paths noted for special modules). Regenerate this file with `npm run docs:assemble-modules`. Verbatim sections are wrapped for Prettier so YAML indentation is preserved.'
);
lines.push('');
lines.push('## Table of contents');
lines.push('');
for (const m of mods) {
  const a = anchorId(m.title, m.id);
  lines.push(`- [${m.title} (\`${m.id}\`)](#${a})`);
}
lines.push('');
lines.push('---');
lines.push('');

for (const m of mods) {
  const a = anchorId(m.title, m.id);
  lines.push(`<a id="${a}"></a>`);
  lines.push('');
  lines.push(`# ${m.title} (\`${m.id}\`)`);
  lines.push('');
  const mdPath = path.join(root, 'modules', m.id, 'content.md');
  if (fs.existsSync(mdPath)) {
    lines.push('<!-- prettier-ignore-start -->');
    lines.push(fs.readFileSync(mdPath, 'utf8').trimEnd());
    lines.push('<!-- prettier-ignore-end -->');
    lines.push('');
  } else if (m.id === 'getting-started') {
    lines.push(
      '_No `modules/getting-started/content.md`. Excerpts from `js/components/getting-started.js`._'
    );
    lines.push('');
    const src = fs.readFileSync(
      path.join(root, 'js/components/getting-started.js'),
      'utf8'
    );
    const start = src.indexOf('const steps = [');
    const end = start >= 0 ? src.indexOf('];', start + 50) : -1;
    const slice = start >= 0 && end > start ? src.slice(start, end + 2) : '';
    lines.push('## Onboarding tour — `steps`');
    lines.push('');
    lines.push('```javascript');
    lines.push(slice);
    lines.push('```');
    lines.push('');
    lines.push('## Welcome demo — `buildDemoMarkup()` template');
    lines.push('');
    const bm = src.indexOf('function buildDemoMarkup()');
    const ret = bm >= 0 ? src.indexOf('return `', bm) : -1;
    const close = ret >= 0 ? src.indexOf('`;', ret + 8) : -1;
    const tmpl =
      ret >= 0 && close > ret ? src.slice(ret + 8, close) : '';
    lines.push('```html');
    lines.push(tmpl);
    lines.push('```');
    lines.push('');
  } else if (m.id === 'map-book') {
    lines.push(
      '_No `modules/map-book/content.md`. Map book uses `map-book/embed.html` and `map-book/content.json`._'
    );
    lines.push('');
    lines.push('## `map-book/content.json`');
    lines.push('');
    lines.push('```json');
    lines.push(
      fs.readFileSync(path.join(root, 'map-book', 'content.json'), 'utf8').trimEnd()
    );
    lines.push('```');
    lines.push('');
  } else {
    lines.push('_No content file found._');
    lines.push('');
  }
  lines.push('---');
  lines.push('');
}

const outPath = path.join(root, 'docs', 'sales-navigator-all-modules.md');
fs.writeFileSync(outPath, lines.join('\n'), 'utf8');
console.log('Wrote', outPath, fs.statSync(outPath).size, 'bytes');
