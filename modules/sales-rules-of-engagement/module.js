import renderMarkdownModule from '../../js/components/markdown-module.js';
import { mountModuleIntroGate } from '../../js/components/module-intro-gate.js';

/**
 * Trial: glass “module preview” gate (title, intro, five-minute summary) before full render.
 */
export default function renderRoeWithIntroGate(container, markdownText) {
  mountModuleIntroGate(container, markdownText, () => {
    renderMarkdownModule(container, markdownText);
  });
}
