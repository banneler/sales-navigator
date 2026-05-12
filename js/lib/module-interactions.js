import { awardXP } from './gamification.js';

/**
 * Wire up knowledge-check answers, scenario choices, and knowledge carousel nav.
 * Safe to call repeatedly: replaces the previous click handler on the same element.
 */

const handlerByEl = new WeakMap();
const keyHandlerByEl = new WeakMap();
const zoomOverlayByRoot = new WeakMap();
let imageLibraryDocumentHandlersBound = false;

/** @type {WeakMap<Element, (boolean | null)[]>} Last check result per question index; null = not checked yet */
const scoreStateByCarousel = new WeakMap();

function getScoreState(carousel) {
  if (!scoreStateByCarousel.has(carousel)) {
    const n = Number(carousel.getAttribute('data-kc-count')) || 0;
    scoreStateByCarousel.set(carousel, Array.from({ length: n }, () => null));
  }
  return scoreStateByCarousel.get(carousel);
}

function updateKnowledgeScoreUI(carousel) {
  const results = getScoreState(carousel);
  const total = results.length;
  const correct = results.filter((r) => r === true).length;
  const elC = carousel.querySelector('.js-kc-score-correct');
  const elT = carousel.querySelector('.js-kc-score-total');
  if (elC) elC.textContent = String(correct);
  if (elT) elT.textContent = String(total);
}

function escapeHtml(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function updateKnowledgeCarousel(root, index) {
  const count = Number(root.getAttribute('data-kc-count')) || 0;
  if (count === 0) return;
  const i = Math.max(0, Math.min(index, count - 1));
  root.setAttribute('data-kc-active', String(i));

  root.querySelectorAll('.kc-slide').forEach((el) => {
    const si = Number(el.getAttribute('data-kc-slide'));
    el.classList.toggle('hidden', si !== i);
  });

  const ind = root.querySelector('.js-kc-carousel-indicator');
  if (ind) ind.textContent = `${i + 1} / ${count}`;

  const prev = root.querySelector('.js-kc-carousel-prev');
  const next = root.querySelector('.js-kc-carousel-next');
  if (prev) prev.disabled = i === 0;
  if (next) next.disabled = i === count - 1;

  root.querySelectorAll('.js-kc-carousel-dot').forEach((dot) => {
    const di = Number(dot.getAttribute('data-kc-dot'));
    const on = di === i;
    dot.classList.toggle('bg-orange-500', on);
    dot.classList.toggle('ring-2', on);
    dot.classList.toggle('ring-orange-200', on);
    dot.classList.toggle('bg-slate-300', !on);
    dot.classList.toggle('hover:bg-slate-400', !on);
    dot.setAttribute('aria-current', on ? 'true' : 'false');
  });
}

function initKnowledgeCarousels(container) {
  container.querySelectorAll('.kc-carousel').forEach((carousel) => {
    const active = Number(carousel.getAttribute('data-kc-active')) || 0;
    updateKnowledgeCarousel(carousel, active);
    getScoreState(carousel);
    updateKnowledgeScoreUI(carousel);
  });
}

function pauseVideosInCarousel(root) {
  root.querySelectorAll('video').forEach((v) => {
    v.pause();
  });
}

function updateVideoCarousel(root, index) {
  const count = Number(root.getAttribute('data-vc-count')) || 0;
  if (count === 0) return;
  const i = Math.max(0, Math.min(index, count - 1));
  root.setAttribute('data-vc-active', String(i));

  root.querySelectorAll('.vc-slide').forEach((el) => {
    const si = Number(el.getAttribute('data-vc-slide'));
    const on = si === i;
    el.classList.toggle('hidden', !on);
    if (!on) {
      el.querySelectorAll('video').forEach((v) => v.pause());
    }
  });

  const ind = root.querySelector('.js-vc-carousel-indicator');
  if (ind) ind.textContent = `${i + 1} / ${count}`;

  const prev = root.querySelector('.js-vc-carousel-prev');
  const next = root.querySelector('.js-vc-carousel-next');
  if (prev) prev.disabled = i === 0;
  if (next) next.disabled = i === count - 1;

  root.querySelectorAll('.js-vc-carousel-dot').forEach((dot) => {
    const di = Number(dot.getAttribute('data-vc-dot'));
    const on = di === i;
    dot.classList.toggle('bg-orange-500', on);
    dot.classList.toggle('ring-2', on);
    dot.classList.toggle('ring-orange-200', on);
    dot.classList.toggle('bg-slate-300', !on);
    dot.classList.toggle('hover:bg-slate-400', !on);
    dot.setAttribute('aria-current', on ? 'true' : 'false');
  });
}

function initVideoCarousels(container) {
  container.querySelectorAll('.vc-carousel').forEach((carousel) => {
    const active = Number(carousel.getAttribute('data-vc-active')) || 0;
    pauseVideosInCarousel(carousel);
    updateVideoCarousel(carousel, active);
  });
}

function getLibraryPages(button) {
  const raw = button?.getAttribute('data-library-pages') || '';
  return raw.split('|').filter(Boolean);
}

function updateImageLibraryViewer(root, button, pageIndex) {
  if (!root || !button) return;
  const pages = getLibraryPages(button);
  if (pages.length === 0) return;
  const i = Math.max(0, Math.min(pageIndex, pages.length - 1));
  button.setAttribute('data-library-current', String(i));
  root.setAttribute('data-library-active', button.getAttribute('data-library-index') || '0');

  root.querySelectorAll('.js-image-library-open').forEach((btn) => {
    const on = btn === button;
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    btn.classList.toggle('border-orange-300', on);
    btn.classList.toggle('bg-orange-50/70', on);
    btn.classList.toggle('ring-2', on);
    btn.classList.toggle('ring-orange-200', on);
    btn.classList.toggle('border-slate-200', !on);
    btn.classList.toggle('bg-white', !on);
    btn.classList.toggle('hover:border-orange-200', !on);
    btn.classList.toggle('hover:bg-orange-50/40', !on);
  });

  const title = button.getAttribute('data-library-title') || 'Battle Card';
  const viewer = root.querySelector('.js-image-library-viewer');
  const shelf = root.querySelector('.js-image-library-shelf');
  const img = root.querySelector('.js-image-library-image');
  const titleEl = root.querySelector('.js-image-library-title');
  const pageEl = root.querySelector('.js-image-library-page-label');
  const hint = root.querySelector('.js-image-library-flip-hint');
  const prev = root.querySelector('.js-image-library-prev');
  const next = root.querySelector('.js-image-library-next');
  const zoomOverlay = getImageLibraryZoomOverlay(root);
  const zoomImg = zoomOverlay?.querySelector('.js-image-library-zoom-image');
  const zoomTitle = zoomOverlay?.querySelector('.js-image-library-zoom-title');
  const zoomLabel = zoomOverlay?.querySelector('.js-image-library-zoom-label');

  if (shelf) shelf.classList.add('hidden');
  if (viewer) viewer.classList.remove('hidden');
  if (titleEl) titleEl.textContent = title;
  if (pageEl) pageEl.textContent = `Page ${i + 1} / ${pages.length}`;
  if (zoomTitle) zoomTitle.textContent = title;
  if (zoomLabel) zoomLabel.textContent = `Page ${i + 1} / ${pages.length}`;
  if (img) {
    img.setAttribute('src', pages[i]);
    img.setAttribute('alt', `${title} page ${i + 1}`);
    img.classList.remove('opacity-0', 'scale-[0.98]');
    img.classList.add('opacity-0', 'scale-[0.98]');
    requestAnimationFrame(() => {
      img.classList.remove('opacity-0', 'scale-[0.98]');
    });
  }
  if (zoomImg) {
    zoomImg.setAttribute('src', pages[i]);
    zoomImg.setAttribute('alt', `${title} page ${i + 1} enlarged`);
  }
  if (hint) {
    hint.textContent =
      pages.length > 1 ? `Page ${i + 1} of ${pages.length}` : '';
  }
  if (prev) prev.disabled = i === 0;
  if (next) next.disabled = i === pages.length - 1;
}

function getImageLibraryZoomOverlay(root) {
  if (!root) return null;
  const cached = zoomOverlayByRoot.get(root);
  if (cached) return cached;
  const overlay = root.querySelector('.js-image-library-zoom-overlay');
  if (overlay) {
    zoomOverlayByRoot.set(root, overlay);
  }
  return overlay;
}

function setImageLibraryZoom(root, open) {
  const overlay = getImageLibraryZoomOverlay(root);
  if (!overlay) return;

  if (open && overlay.parentElement !== document.body) {
    const placeholder = document.createComment('image-library-zoom-overlay');
    overlay.parentNode.insertBefore(placeholder, overlay);
    overlay.__imageLibraryPlaceholder = placeholder;
    overlay.__imageLibraryRoot = root;
    document.body.appendChild(overlay);
  }

  overlay.classList.toggle('hidden', !open);
  document.body.style.overflow = open ? 'hidden' : '';

  if (open) {
    const close = overlay.querySelector('.js-image-library-zoom-close');
    if (close) close.focus();
  } else {
    const placeholder = overlay.__imageLibraryPlaceholder;
    if (placeholder?.parentNode) {
      placeholder.parentNode.insertBefore(overlay, placeholder);
      placeholder.remove();
    }
    delete overlay.__imageLibraryPlaceholder;
  }
}

function bindImageLibraryDocumentHandlers() {
  if (imageLibraryDocumentHandlersBound) return;
  imageLibraryDocumentHandlersBound = true;

  document.addEventListener('click', (e) => {
    const zoomClose = e.target.closest('.js-image-library-zoom-close');
    if (zoomClose) {
      const overlay = zoomClose.closest('.js-image-library-zoom-overlay');
      setImageLibraryZoom(overlay?.__imageLibraryRoot, false);
      return;
    }

    const overlay = e.target.closest('.js-image-library-zoom-overlay');
    if (overlay && e.target === overlay) {
      setImageLibraryZoom(overlay.__imageLibraryRoot, false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('.js-image-library-zoom-overlay:not(.hidden)').forEach((overlay) => {
      setImageLibraryZoom(overlay.__imageLibraryRoot, false);
    });
  });
}

function closeImageLibraryViewer(root) {
  setImageLibraryZoom(root, false);
  const viewer = root?.querySelector('.js-image-library-viewer');
  const shelf = root?.querySelector('.js-image-library-shelf');
  if (viewer) viewer.classList.add('hidden');
  if (shelf) shelf.classList.remove('hidden');
}

function initImageLibraries(container) {
  container.querySelectorAll('.js-image-library').forEach((root) => {
    closeImageLibraryViewer(root);
  });
}

function updateScenarioProgress(scenariosInner) {
  const cards = scenariosInner.querySelectorAll('.scenario-card');
  const total = cards.length;
  const done = scenariosInner.querySelectorAll('.scenario-card[data-scenario-answered="true"]').length;
  const prog = scenariosInner.querySelector('.js-scenarios-progress');
  if (prog) {
    prog.textContent = `${done} / ${total} scenario${total === 1 ? '' : 's'} reviewed`;
  }
  const completion = scenariosInner.querySelector('.js-scenarios-completion');
  if (completion) {
    const show = total > 0 && done === total;
    completion.classList.toggle('hidden', !show);
  }
}

function initScenarioProgress(container) {
  container.querySelectorAll('.module-scenarios-inner').forEach((inner) => {
    updateScenarioProgress(inner);
  });
}

function handleClick(e) {
  const prevBtn = e.target.closest('.js-kc-carousel-prev');
  if (prevBtn) {
    const root = prevBtn.closest('.kc-carousel');
    if (root) {
      const cur = Number(root.getAttribute('data-kc-active')) || 0;
      updateKnowledgeCarousel(root, cur - 1);
    }
    return;
  }

  const nextBtn = e.target.closest('.js-kc-carousel-next');
  if (nextBtn) {
    const root = nextBtn.closest('.kc-carousel');
    if (root) {
      const cur = Number(root.getAttribute('data-kc-active')) || 0;
      updateKnowledgeCarousel(root, cur + 1);
    }
    return;
  }

  const dotBtn = e.target.closest('.js-kc-carousel-dot');
  if (dotBtn) {
    const root = dotBtn.closest('.kc-carousel');
    if (root) {
      const di = Number(dotBtn.getAttribute('data-kc-dot'));
      updateKnowledgeCarousel(root, di);
    }
    return;
  }

  const vcPrev = e.target.closest('.js-vc-carousel-prev');
  if (vcPrev) {
    const root = vcPrev.closest('.vc-carousel');
    if (root) {
      const cur = Number(root.getAttribute('data-vc-active')) || 0;
      updateVideoCarousel(root, cur - 1);
    }
    return;
  }

  const vcNext = e.target.closest('.js-vc-carousel-next');
  if (vcNext) {
    const root = vcNext.closest('.vc-carousel');
    if (root) {
      const cur = Number(root.getAttribute('data-vc-active')) || 0;
      updateVideoCarousel(root, cur + 1);
    }
    return;
  }

  const vcDot = e.target.closest('.js-vc-carousel-dot');
  if (vcDot) {
    const root = vcDot.closest('.vc-carousel');
    if (root) {
      const di = Number(vcDot.getAttribute('data-vc-dot'));
      updateVideoCarousel(root, di);
    }
    return;
  }

  const libraryOpen = e.target.closest('.js-image-library-open');
  if (libraryOpen) {
    const root = libraryOpen.closest('.js-image-library');
    updateImageLibraryViewer(root, libraryOpen, 0);
    return;
  }

  const libraryClose = e.target.closest('.js-image-library-close');
  if (libraryClose) {
    const root = libraryClose.closest('.js-image-library');
    closeImageLibraryViewer(root);
    return;
  }

  const libraryZoom = e.target.closest('.js-image-library-zoom');
  if (libraryZoom) {
    const root = libraryZoom.closest('.js-image-library');
    setImageLibraryZoom(root, true);
    return;
  }

  const libraryZoomClose = e.target.closest('.js-image-library-zoom-close');
  if (libraryZoomClose) {
    const root = libraryZoomClose.closest('.js-image-library');
    setImageLibraryZoom(root, false);
    return;
  }

  const libraryZoomOverlay = e.target.closest('.js-image-library-zoom-overlay');
  if (libraryZoomOverlay && e.target === libraryZoomOverlay) {
    const root = libraryZoomOverlay.closest('.js-image-library');
    setImageLibraryZoom(root, false);
    return;
  }

  const libraryPrev = e.target.closest('.js-image-library-prev');
  if (libraryPrev) {
    const root = libraryPrev.closest('.js-image-library');
    const active = root?.querySelector('.js-image-library-open[aria-pressed="true"]');
    if (root && active) {
      const cur = Number(active.getAttribute('data-library-current')) || 0;
      updateImageLibraryViewer(root, active, cur - 1);
    }
    return;
  }

  const libraryNext = e.target.closest('.js-image-library-next');
  if (libraryNext) {
    const root = libraryNext.closest('.js-image-library');
    const active = root?.querySelector('.js-image-library-open[aria-pressed="true"]');
    if (root && active) {
      const cur = Number(active.getAttribute('data-library-current')) || 0;
      updateImageLibraryViewer(root, active, cur + 1);
    }
    return;
  }

  const checkBtn = e.target.closest('.js-kc-check');
  if (checkBtn) {
    const card = checkBtn.closest('.knowledge-check-card');
    if (!card) return;
    const correct = Number(card.getAttribute('data-kc-correct')) || 0;
    const selected = card.querySelector('input[type="radio"]:checked');
    const feedback = card.querySelector('.js-kc-feedback');
    const affirmation = card.querySelector('.js-kc-affirmation');
    const explDisplay = card.querySelector('.js-kc-explanation-display');
    if (!feedback) return;
    const explEl = card.querySelector('.js-kc-explanation-text');
    const explanation = explEl?.textContent?.trim() || '';
    if (!selected) {
      feedback.classList.remove('hidden');
      if (affirmation) affirmation.classList.add('hidden');
      feedback.innerHTML = `<p class="text-amber-800 font-medium">Pick an option, then check again.</p>`;
      return;
    }
    const picked = Number(selected.value);
    const ok = picked === correct;
    if (ok) {
      feedback.classList.add('hidden');
      if (affirmation) {
        affirmation.classList.remove('hidden');
        if (explDisplay) explDisplay.textContent = explanation;
        affirmation.classList.remove('animate-pulse');
        void affirmation.offsetWidth;
        affirmation.classList.add('animate-pulse');
        window.setTimeout(() => affirmation.classList.remove('animate-pulse'), 900);
      }
    } else {
      if (affirmation) affirmation.classList.add('hidden');
      feedback.classList.remove('hidden');
      feedback.innerHTML = `<p class="text-amber-900 font-semibold mb-1">Not quite — review the rationale below.</p><p class="text-slate-700">${escapeHtml(explanation)}</p>`;
    }

    const slide = card.closest('.kc-slide');
    const carousel = card.closest('.kc-carousel');
    if (slide && carousel) {
      const qIdx = Number(slide.getAttribute('data-kc-slide'));
      const results = getScoreState(carousel);
      if (Number.isFinite(qIdx) && qIdx >= 0 && qIdx < results.length) {
        const wasAlreadyCorrect = results[qIdx] === true;
        results[qIdx] = ok;
        updateKnowledgeScoreUI(carousel);
        
        if (ok && !wasAlreadyCorrect) {
          awardXP(20, 'Knowledge Check Passed');
        }
      }
    }
    return;
  }

  const trioTab = e.target.closest('.js-sales-trio-tab');
  if (trioTab) {
    const shell = trioTab.closest('.module-sales-trio-shell');
    const controlsId = trioTab.getAttribute('aria-controls');
    if (shell && controlsId) {
      shell.querySelectorAll('.js-sales-trio-tab').forEach((btn) => {
        const on = btn === trioTab;
        btn.setAttribute('aria-selected', on ? 'true' : 'false');
        btn.setAttribute('tabindex', on ? '0' : '-1');
        btn.classList.toggle('border-orange-500', on);
        btn.classList.toggle('text-orange-800', on);
        btn.classList.toggle('bg-white', on);
        btn.classList.toggle('border-transparent', !on);
        btn.classList.toggle('text-slate-600', !on);
        btn.classList.toggle('hover:text-slate-900', !on);
        btn.classList.toggle('hover:bg-slate-50/80', !on);
      });
      shell.querySelectorAll('.js-sales-trio-panel').forEach((panel) => {
        const show = panel.id === controlsId;
        panel.classList.toggle('hidden', !show);
      });
    }
    return;
  }

  const flipBtn = e.target.closest('.js-flip-card');
  if (flipBtn) {
    const inner = flipBtn.querySelector('.js-flip-inner');
    if (inner) {
      inner.classList.toggle('rotate-y-180');
    }
    return;
  }

  const elevatorCard = e.target.closest('.elevator-reveal-card');
  if (elevatorCard) {
    if (e.target.closest('a')) return;
    const pitch = elevatorCard.querySelector('.js-elevator-pitch');
    if (elevatorCard.classList.contains('is-open')) {
      elevatorCard.classList.remove('is-open');
    } else {
      if (pitch) void pitch.offsetWidth;
      elevatorCard.classList.add('is-open');
    }
    return;
  }

  const scBtn = e.target.closest('.js-sc-choice');
  if (scBtn) {
    const article = scBtn.closest('.scenario-card');
    const scenariosInner = scBtn.closest('.module-scenarios-inner');
    if (!article) return;
    const idx = scBtn.getAttribute('data-sc-index');

    article.querySelectorAll('.js-sc-choice').forEach((btn) => {
      const isSel = btn === scBtn;
      btn.classList.toggle('ring-2', isSel);
      btn.classList.toggle('ring-orange-500', isSel);
      btn.classList.toggle('border-orange-500', isSel);
      btn.classList.toggle('bg-orange-50', isSel);
      btn.classList.toggle('shadow-sm', isSel);
      btn.setAttribute('aria-pressed', isSel ? 'true' : 'false');
    });

    article.querySelectorAll('.js-sc-feedback').forEach((el) => {
      const match = el.getAttribute('data-sc-index') === idx;
      el.classList.toggle('hidden', !match);
    });

    article.setAttribute('data-scenario-answered', 'true');
    const badge = article.querySelector('.js-sc-reviewed-badge');
    if (badge) badge.classList.remove('hidden');

    if (scenariosInner) updateScenarioProgress(scenariosInner);
  }
}

export function bindModuleInteractions(container) {
  if (!container) return;
  bindImageLibraryDocumentHandlers();
  const prev = handlerByEl.get(container);
  if (prev) container.removeEventListener('click', prev);
  const prevKey = keyHandlerByEl.get(container);
  if (prevKey) container.removeEventListener('keydown', prevKey);
  const fn = handleClick;
  const keyFn = (e) => {
    if (e.key !== 'Escape') return;
    container.querySelectorAll('.js-image-library-zoom-overlay:not(.hidden)').forEach((overlay) => {
      const root = overlay.closest('.js-image-library');
      setImageLibraryZoom(root, false);
    });
  };
  container.addEventListener('click', fn);
  container.addEventListener('keydown', keyFn);
  handlerByEl.set(container, fn);
  keyHandlerByEl.set(container, keyFn);
  initKnowledgeCarousels(container);
  initVideoCarousels(container);
  initImageLibraries(container);
  initScenarioProgress(container);
}
