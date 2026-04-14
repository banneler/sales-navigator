import { awardXP } from './gamification.js';

/**
 * Wire up knowledge-check answers, scenario choices, and knowledge carousel nav.
 * Safe to call repeatedly: replaces the previous click handler on the same element.
 */

const handlerByEl = new WeakMap();

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
    if (dot.classList.contains('vc-thumb-btn')) {
      dot.classList.toggle('ring-2', on);
      dot.classList.toggle('ring-orange-400', on);
      dot.classList.toggle('border-orange-500', on);
      dot.classList.toggle('border-slate-200', !on);
      dot.classList.toggle('opacity-100', on);
      dot.classList.toggle('opacity-90', !on);
    } else {
      dot.classList.toggle('bg-orange-500', on);
      dot.classList.toggle('ring-2', on);
      dot.classList.toggle('ring-orange-200', on);
      dot.classList.toggle('bg-slate-300', !on);
      dot.classList.toggle('hover:bg-slate-400', !on);
    }
    dot.setAttribute('aria-current', on ? 'true' : 'false');
  });
}

/**
 * Grab first decoded frame from MP4 (same-origin) for thumbnail strip + optional video poster.
 */
function captureThumbFromMp4(relativePath, imgEl, videoEl) {
  const abs = new URL(relativePath, window.location.href).href;
  const video = document.createElement('video');
  video.muted = true;
  video.playsInline = true;
  video.preload = 'metadata';
  video.src = abs;

  const done = () => {
    video.removeAttribute('src');
    video.load();
  };

  const applyDataUrl = (dataUrl) => {
    if (imgEl && !imgEl.getAttribute('src')) {
      imgEl.src = dataUrl;
    }
    if (
      videoEl &&
      !videoEl.getAttribute('poster') &&
      dataUrl &&
      dataUrl.startsWith('data:')
    ) {
      videoEl.setAttribute('poster', dataUrl);
    }
  };

  video.addEventListener(
    'loadeddata',
    () => {
      const d = video.duration;
      const t =
        d && !Number.isNaN(d)
          ? Math.max(0.05, Math.min(0.75, d * 0.03))
          : 0.1;
      try {
        video.currentTime = t;
      } catch {
        video.currentTime = 0.1;
      }
    },
    { once: true }
  );

  video.addEventListener(
    'seeked',
    () => {
      try {
        const w = video.videoWidth;
        const h = video.videoHeight;
        if (!w || !h) {
          done();
          return;
        }
        const canvas = document.createElement('canvas');
        const maxW = 176;
        const scale = Math.min(1, maxW / w);
        canvas.width = Math.round(w * scale);
        canvas.height = Math.round(h * scale);
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          done();
          return;
        }
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.82);
        applyDataUrl(dataUrl);
      } catch (e) {
        console.warn('Video thumbnail capture failed', relativePath, e);
      }
      done();
    },
    { once: true }
  );

  video.addEventListener(
    'error',
    () => {
      done();
    },
    { once: true }
  );
}

function hydrateVideoCarouselThumbnails(carousel) {
  if (carousel.getAttribute('data-vc-thumbs-done') === '1') return;
  carousel.setAttribute('data-vc-thumbs-done', '1');

  carousel.querySelectorAll('.vc-thumb-btn').forEach((btn) => {
    const idx = Number(btn.getAttribute('data-vc-dot'));
    const mp4 = btn.getAttribute('data-vc-mp4-src');
    const staticPoster = btn.getAttribute('data-vc-has-static-poster') === '1';
    const img = btn.querySelector('.js-vc-thumb-img');
    if (!mp4 || !img || staticPoster) return;
    if (img.getAttribute('src')) return;

    const slide = carousel.querySelector(`.vc-slide[data-vc-slide="${idx}"]`);
    const videoEl = slide?.querySelector('video') ?? null;

    captureThumbFromMp4(mp4, img, videoEl);
  });
}

function initVideoCarousels(container) {
  container.querySelectorAll('.vc-carousel').forEach((carousel) => {
    const active = Number(carousel.getAttribute('data-vc-active')) || 0;
    pauseVideosInCarousel(carousel);
    updateVideoCarousel(carousel, active);
    hydrateVideoCarouselThumbnails(carousel);
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

  const flipBtn = e.target.closest('.js-flip-card');
  if (flipBtn) {
    const inner = flipBtn.querySelector('.js-flip-inner');
    if (inner) {
      inner.classList.toggle('rotate-y-180');
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
  const prev = handlerByEl.get(container);
  if (prev) container.removeEventListener('click', prev);
  const fn = handleClick;
  container.addEventListener('click', fn);
  handlerByEl.set(container, fn);
  initKnowledgeCarousels(container);
  initVideoCarousels(container);
  initScenarioProgress(container);
}
