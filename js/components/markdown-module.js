import { renderModuleDocumentHtml } from '../lib/markdown-sections.js';
import { bindModuleInteractions } from '../lib/module-interactions.js';
import { initScrollAnimations } from '../lib/scroll-animations.js';
import { mountModuleIntroGate } from './module-intro-gate.js';
import { bindRoleplayInteractions, initRoleplayModal } from './ai-roleplay.js';

/**
 * @param {HTMLElement} container
 * @param {string} markdownSource - Full file including optional YAML front matter
 * @param {string} [moduleId]
 */
export default function renderMarkdownModule(container, markdownSource, moduleId) {
  container.innerHTML = renderModuleDocumentHtml(markdownSource);
  container.dataset.scrollAnimationsInit = '';
  bindModuleInteractions(container);
  bindRoleplayInteractions(container);
  initRoleplayModal(container);
  mountModuleIntroGate(container, markdownSource, () => {
    initScrollAnimations(container);
  }, moduleId);
}
