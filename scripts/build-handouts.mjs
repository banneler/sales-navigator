/**
 * Builds print-ready PDFs from handouts/source/*.md using md-to-pdf (Chromium print pipeline).
 * Styling is shared via handouts/handout-print.css for consistent layout across modules.
 * (pdf-lib is great for programmatic PDF edits; for Markdown → PDF, HTML print is the usual path.)
 */

import { createRequire } from 'node:module';
import { readdir, mkdir } from 'node:fs/promises';

const require = createRequire(import.meta.url);
const { mdToPdf } = require('md-to-pdf');
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const sourceDir = join(root, 'handouts/source');
const pdfDir = join(root, 'handouts/pdf');
const cssPath = join(root, 'handouts/handout-print.css');
/** Base styles from md-to-pdf (tables, lists). Loaded first; handout-print.css overrides. */
const mdToPdfBaseCss = join(root, 'node_modules/md-to-pdf/markdown.css');

await mkdir(pdfDir, { recursive: true });

const files = (await readdir(sourceDir)).filter((f) => f.endsWith('.md'));

if (files.length === 0) {
  console.warn('No .md files in handouts/source');
  process.exit(0);
}

for (const file of files) {
  const base = file.replace(/\.md$/i, '');
  const src = join(sourceDir, file);
  const dest = join(pdfDir, `${base}.pdf`);
  process.stdout.write(`handouts/pdf/${base}.pdf … `);
  await mdToPdf(
    { path: src },
    {
      dest,
      stylesheet: [mdToPdfBaseCss, cssPath],
      page_media_type: 'print',
      pdf_options: {
        format: 'Letter',
        printBackground: true,
        margin: { top: '16mm', right: '14mm', bottom: '16mm', left: '14mm' },
      },
    }
  );
  console.log('ok');
}

console.log(`Built ${files.length} handout PDF(s).`);
