import renderMarkdownModule from '../../js/components/markdown-module.js';
import { mountModuleIntroGate } from '../../js/components/module-intro-gate.js';

/**
 * Full module renders first (visible under glass); preview gate covers main panel only.
 */
export default function renderRoeWithIntroGate(container, markdownText) {
  renderMarkdownModule(container, markdownText);
  mountModuleIntroGate(container, markdownText);
}
