/**
 * Wire up knowledge-check and scenario buttons inside a module (or admin preview) root.
 * Safe to call repeatedly: replaces the previous click handler on the same element.
 */

const handlerByEl = new WeakMap();

function handleClick(e) {
  const checkBtn = e.target.closest('.js-kc-check');
  if (checkBtn) {
    const card = checkBtn.closest('.knowledge-check-card');
    if (!card) return;
    const correct = Number(card.getAttribute('data-kc-correct')) || 0;
    const selected = card.querySelector('input[type="radio"]:checked');
    const feedback = card.querySelector('.js-kc-feedback');
    if (!feedback) return;
    const explEl = card.querySelector('.js-kc-explanation-text');
    const explanation = explEl?.textContent?.trim() || '';
    feedback.classList.remove('hidden');
    if (!selected) {
      feedback.innerHTML = `<p class="text-amber-800 font-medium">Pick an option, then check again.</p>`;
      return;
    }
    const picked = Number(selected.value);
    const ok = picked === correct;
    feedback.innerHTML = ok
      ? `<p class="text-green-800 font-semibold mb-1">Correct.</p><p class="text-slate-700">${escapeHtml(explanation)}</p>`
      : `<p class="text-amber-900 font-semibold mb-1">Not quite — review the rationale below.</p><p class="text-slate-700">${escapeHtml(explanation)}</p>`;
    return;
  }

  const scBtn = e.target.closest('.js-sc-choice');
  if (scBtn) {
    const article = scBtn.closest('.scenario-card');
    if (!article) return;
    const idx = scBtn.getAttribute('data-sc-index');
    article.querySelectorAll('.js-sc-feedback').forEach((el) => {
      el.classList.toggle('hidden', el.getAttribute('data-sc-index') !== idx);
    });
  }
}

function escapeHtml(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function bindModuleInteractions(container) {
  if (!container) return;
  const prev = handlerByEl.get(container);
  if (prev) container.removeEventListener('click', prev);
  const fn = handleClick;
  container.addEventListener('click', fn);
  handlerByEl.set(container, fn);
}
