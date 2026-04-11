import { renderModuleDocumentHtml } from '../lib/markdown-sections.js';
import { bindModuleInteractions } from '../lib/module-interactions.js';

/**
 * @param {HTMLElement} container
 * @param {string} markdownSource - Full file including optional YAML front matter
 */
export default function renderMarkdownModule(container, markdownSource) {
  container.innerHTML = renderModuleDocumentHtml(markdownSource);
  bindModuleInteractions(container);
}
