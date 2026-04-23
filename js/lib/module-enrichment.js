import {
  escapeHtml,
  parseMarkdownToSafeHtml,
} from './markdown-config.js';

/**
 * Dark-mode reference list: icon + hyperlink per file (new tab). Two-column grid from `sm` when there are multiple links.
 * Omit `reference_files` from front matter to hide this block; use `reference_files: []` for placeholder.
 *
 * Expects meta.reference_files: Array<{ label?: string, sharepoint_url: string }>
 */
export function buildModuleReferenceFilesHtml(meta) {
  if (!('reference_files' in meta)) return '';

  const files = Array.isArray(meta.reference_files) ? meta.reference_files : [];

  const linkItems = files
    .map((f, i) => {
      const url = typeof f?.sharepoint_url === 'string' ? f.sharepoint_url.trim() : '';
      if (!url) return '';
      const label =
        typeof f?.label === 'string' && f.label.trim()
          ? f.label.trim()
          : `Reference ${i + 1}`;
      const href = escapeHtml(url);
      return `
        <a href="${href}" target="_blank" rel="noopener noreferrer" class="group ref-file-link flex min-w-0 items-start gap-2.5 rounded-lg border border-slate-700/70 bg-slate-950/40 px-2.5 py-2 transition hover:border-orange-500/35 hover:bg-slate-800/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60">
          <span class="ref-file-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-600/80 bg-gradient-to-br from-slate-800 to-slate-950 text-orange-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]" aria-hidden="true">
            <i class="fa-solid fa-file-lines text-base"></i>
          </span>
          <span class="min-w-0 flex-1 pt-1 text-[11px] font-medium leading-snug text-orange-300 underline decoration-orange-500/40 underline-offset-2 group-hover:text-orange-200 group-hover:decoration-orange-400/70">${escapeHtml(label)}</span>
        </a>`;
    })
    .filter(Boolean);
  const rows = linkItems.join('');
  const nLinks = linkItems.length;
  const gridClass =
    nLinks > 1
      ? 'module-ref-files-grid grid grid-cols-1 sm:grid-cols-2 gap-2'
      : 'module-ref-files-grid grid grid-cols-1 gap-2';

  const bodyInner = rows
    ? `<div class="p-3 ${gridClass}">${rows}</div>`
    : `<div class="p-3"><p class="text-[10px] text-slate-500 leading-relaxed">SharePoint links for this module will appear here as they are added.</p></div>`;

  return `
      <section class="module-reference-files rounded-xl border border-slate-600 bg-slate-900 text-slate-100 shadow-lg overflow-hidden" aria-labelledby="module-ref-heading">
        <div class="px-3 py-2 border-b border-slate-700 bg-slate-950/80">
          <h3 id="module-ref-heading" class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Module Reference Files</h3>
        </div>
        ${bodyInner}
      </section>`;
}

/**
 * @param {string} md
 * @returns {string[]} First-line text after `- ` for each top-level bullet line
 */
function extractDashBulletTexts(md) {
  const out = [];
  for (const line of String(md || '').split(/\r?\n/)) {
    const m = line.match(/^\s*-\s+(.+)$/);
    if (m) out.push(m[1].trim());
  }
  return out;
}

/**
 * Title-style display: capitalize lowercase letters that start a word (after start / space / hyphen / + / arrow).
 * Leaves acronyms (e.g. GPC) and numbers unchanged.
 * @param {string} s
 */
function flowDisplayTitle(s) {
  const t = String(s).trim();
  if (!t) return t;
  return t.replace(/(^|[\s\-+→])([a-z])/g, (_, delim, ch) => delim + ch.toUpperCase());
}

/**
 * Horizontal stepper with chevrons between steps. Optional `five_minute_flow` in module meta.
 * @param {Record<string, unknown>} meta
 * @param {{ introGate?: boolean }} [opts]
 */
function buildFiveMinuteFlowHtml(meta, opts = {}) {
  const introGate = Boolean(opts.introGate);
  const flow = meta.five_minute_flow;
  if (!flow || typeof flow !== 'object' || Array.isArray(flow)) return '';
  const stepsRaw = flow.steps;
  if (!Array.isArray(stepsRaw) || stepsRaw.length === 0) return '';
  const ariaRaw =
    typeof flow.aria_label === 'string' && flow.aria_label.trim()
      ? flow.aria_label.trim()
      : 'Onboarding sequence';
  const aria = escapeHtml(flowDisplayTitle(ariaRaw));

  const stepShell = introGate
    ? 'border-slate-200/95 bg-white text-slate-900 ring-slate-900/5'
    : 'border-amber-200/90 bg-white/95 text-amber-950 ring-amber-900/5';
  const capClass = introGate ? 'text-slate-600' : 'text-amber-900/70';
  const sepClass = introGate ? 'text-slate-500' : 'text-amber-800/85';

  /** @type {string[]} */
  const stepBlocks = [];
  for (const step of stepsRaw) {
    const titleRaw = typeof step?.title === 'string' ? step.title.trim() : '';
    if (!titleRaw) continue;
    const title = flowDisplayTitle(titleRaw);
    const captionRaw =
      typeof step?.caption === 'string' && step.caption.trim()
        ? step.caption.trim()
        : '';
    const caption = captionRaw ? flowDisplayTitle(captionRaw) : '';
    const capHtml = caption
      ? `<span class="mt-0.5 block text-[11px] font-medium leading-tight ${capClass}">${escapeHtml(caption)}</span>`
      : '';
    stepBlocks.push(`<div role="listitem" class="flex min-w-0 flex-1 flex-col items-center justify-center rounded-lg border px-2 py-2.5 text-center shadow-sm ring-1 sm:px-3 ${stepShell}">
            <span class="text-sm font-semibold leading-snug">${escapeHtml(title)}</span>${capHtml}
          </div>`);
  }
  if (stepBlocks.length === 0) return '';

  const sep = `<span class="flex w-6 shrink-0 items-center justify-center sm:w-8 ${sepClass}" aria-hidden="true"><i class="fa-solid fa-chevron-right text-sm font-semibold sm:text-base" aria-hidden="true"></i></span>`;
  /** @type {string[]} */
  const row = [];
  for (let i = 0; i < stepBlocks.length; i++) {
    if (i > 0) row.push(sep);
    row.push(stepBlocks[i]);
  }

  return `<div class="five-min-flow mb-4 w-full min-w-0">
          <div role="list" aria-label="${aria}" class="flex w-full min-w-0 items-stretch gap-1 sm:gap-2">
            ${row.join('')}
          </div>
        </div>`;
}

export function buildFiveMinuteSummaryHtml(meta) {
  const five = meta.five_minute_summary;
  const flowHtml = buildFiveMinuteFlowHtml(meta);
  const hasSummary = typeof five === 'string' && Boolean(five.trim());
  if (!flowHtml && !hasSummary) return '';

  const bullets = extractDashBulletTexts(hasSummary ? five : '');
  const coffeeIcon = `<span class="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center text-base" title="Coffee Summary"><i class="fa-solid fa-mug-hot" aria-hidden="true"></i></span>`;

  const compactClass =
    bullets.length >= 2 ? ' module-five-min-compact' : ' module-five-min-prose';
  const proseHtml = hasSummary ? parseMarkdownToSafeHtml(five) : '';
  const bodyInner = `${flowHtml}${proseHtml ? `<div class="module-markdown-body w-full text-amber-950/90${compactClass}">${proseHtml}</div>` : ''}`;
  return `
      <section class="module-five-min w-full border border-amber-200 bg-amber-50/80 rounded-xl p-6 shadow-sm" aria-labelledby="five-min-heading">
        <div class="flex w-full min-w-0 items-start gap-3">
          ${coffeeIcon}
          <div class="min-w-0 flex-1 w-full">
            <h3 id="five-min-heading" class="text-lg font-bold text-amber-950 mb-2">Coffee Summary</h3>
            ${bodyInner}
          </div>
        </div>
      </section>`;
}

/**
 * Coffee Summary for the module intro gate only: no amber card, no coffee icon.
 * Full module view still uses {@link buildFiveMinuteSummaryHtml}.
 */
export function buildFiveMinuteSummaryIntroGateHtml(meta) {
  const five = meta.five_minute_summary;
  const flowHtml = buildFiveMinuteFlowHtml(meta, { introGate: true });
  const hasSummary = typeof five === 'string' && Boolean(five.trim());
  if (!flowHtml && !hasSummary) return '';

  const bullets = extractDashBulletTexts(hasSummary ? five : '');

  const compactClass = bullets.length >= 2 ? ' module-five-min-compact' : '';
  const proseHtml = hasSummary ? parseMarkdownToSafeHtml(five) : '';
  const bodyInner = `${flowHtml}${proseHtml ? `<div class="module-markdown-body text-slate-700${compactClass}">${proseHtml}</div>` : ''}`;
  return `
      <section class="module-five-min-gate" aria-labelledby="five-min-heading-gate">
        <h3 id="five-min-heading-gate" class="text-lg font-bold text-slate-900 mb-2">Coffee Summary</h3>
        ${bodyInner}
      </section>`;
}

/** Coach headshots: only under `assets/training/salesforce/coaches/`. */
const SAFE_COACH_PHOTO =
  /^assets\/training\/salesforce\/coaches\/[a-zA-Z0-9._-]+\.(jpg|jpeg|png|webp)$/i;

/**
 * Optional “Your Coaches” strip below Coffee Summary.
 * Front matter:
 *   your_coaches:
 *     heading: "Your Coaches"   # optional
 *     coaches:
 *       - name: "..."
 *         email: "..."          # mailto target
 *         role: "..."           # optional line under name
 *         photo: "assets/training/salesforce/coaches/slug.png"  # optional
 */
export function buildYourCoachesHtml(meta) {
  const yc = meta.your_coaches;
  if (!yc || typeof yc !== 'object') return '';

  const coaches = Array.isArray(yc.coaches) ? yc.coaches : [];
  if (coaches.length === 0) return '';

  const heading =
    typeof yc.heading === 'string' && yc.heading.trim()
      ? yc.heading.trim()
      : 'Your Coaches';

  const cards = coaches
    .map((c, i) => {
      const name = typeof c?.name === 'string' ? c.name.trim() : '';
      const email = typeof c?.email === 'string' ? c.email.trim() : '';
      const role = typeof c?.role === 'string' ? c.role.trim() : '';
      if (!name && !email) return '';
      const mail = escapeHtml(email);
      const mailHref = email ? escapeHtml(`mailto:${email}`) : '';
      const roleLine = role
        ? `<p class="text-xs text-slate-600 mt-0.5">${escapeHtml(role)}</p>`
        : '';
      const label = name || email || `Coach ${i + 1}`;
      const photoRaw = typeof c?.photo === 'string' ? c.photo.trim() : '';
      const photoOk = Boolean(photoRaw && SAFE_COACH_PHOTO.test(photoRaw));
      const headshot = photoOk
        ? `<div class="h-14 w-14 shrink-0 rounded-full overflow-hidden border border-slate-200 shadow-sm ring-1 ring-slate-200/80 bg-slate-100">
            <img src="${escapeHtml(photoRaw)}" alt="${escapeHtml(label)}" class="h-full w-full object-cover" width="56" height="56" loading="lazy" decoding="async" />
          </div>`
        : `<div class="coach-headshot-placeholder h-14 w-14 shrink-0 rounded-full bg-gradient-to-br from-slate-100 to-slate-200/90 border-2 border-dashed border-slate-300 shadow-inner" role="img" aria-label="Headshot placeholder for ${escapeHtml(label)}"></div>`;
      return `
        <div class="flex items-center gap-4 min-w-0">
          ${headshot}
          <div class="min-w-0 flex-1">
            ${name ? `<p class="font-semibold text-slate-900 text-sm">${escapeHtml(name)}</p>` : ''}
            ${roleLine}
            ${email ? `<a href="${mailHref}" class="text-sm text-orange-600 hover:text-orange-700 underline decoration-orange-500/40 underline-offset-2 break-all">${mail}</a>` : ''}
          </div>
        </div>`;
    })
    .filter(Boolean)
    .join('');

  if (!cards.trim()) return '';

  return `
      <section class="module-your-coaches w-full border border-slate-200 bg-slate-50/90 rounded-xl p-5 md:p-6 shadow-sm" aria-labelledby="your-coaches-heading">
        <h3 id="your-coaches-heading" class="text-base font-bold text-slate-900 mb-4 tracking-tight">${escapeHtml(heading)}</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">${cards}</div>
      </section>`;
}

/**
 * Sticky right-rail: scenarios column. Empty string if no scenarios.
 */
export function buildScenariosAsideHtml(meta) {
  const scenarios = meta.scenarios;
  if (!Array.isArray(scenarios) || scenarios.length === 0) return '';

  const n = scenarios.length;
  const cards = scenarios
    .map((sc, si) => {
      const title = typeof sc?.title === 'string' ? sc.title : `Scenario ${si + 1}`;
      const situation = typeof sc?.situation === 'string' ? sc.situation : '';
      const choices = Array.isArray(sc?.choices) ? sc.choices : [];
      const situationHtml = parseMarkdownToSafeHtml(situation);
      const choiceBlocks = choices
        .map((ch, ci) => {
          const label = typeof ch?.label === 'string' ? ch.label : '';
          const feedback = typeof ch?.feedback === 'string' ? ch.feedback : '';
          return `
            <div class="space-y-1 sc-choice-row">
              <button type="button" class="js-sc-choice w-full text-left border border-slate-200 rounded-md px-2 py-1.5 text-[11px] font-medium text-slate-800 bg-white hover:border-orange-400 hover:bg-orange-50/50 transition leading-snug focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400" data-sc-index="${ci}" aria-pressed="false">
                ${escapeHtml(label)}
              </button>
              <div class="js-sc-feedback hidden rounded border border-orange-100 bg-orange-50/90 px-2 py-1.5 shadow-sm" data-sc-index="${ci}" role="region">
                <p class="text-[9px] font-bold uppercase tracking-wide text-orange-900 mb-1">Feedback</p>
                <div class="module-markdown-body text-[10px] text-slate-700 leading-snug">${parseMarkdownToSafeHtml(feedback)}</div>
              </div>
            </div>`;
        })
        .join('');
      return `
        <article class="scenario-card border border-slate-200 rounded-lg p-2.5 bg-gradient-to-b from-white to-slate-50/80 shadow-sm transition-shadow" data-scenario-index="${si}">
          <div class="flex items-start justify-between gap-1.5 mb-1">
            <h4 class="text-[11px] font-bold text-slate-900 leading-tight">${escapeHtml(title)}</h4>
            <span class="js-sc-reviewed-badge hidden shrink-0 rounded-full bg-green-100 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-green-800 border border-green-200" aria-hidden="true">Reviewed</span>
          </div>
          <div class="module-markdown-body scenario-situation-text text-slate-700 leading-snug mb-2">${situationHtml}</div>
          <p class="text-[9px] font-semibold text-slate-500 uppercase tracking-wide mb-1">Choose a response</p>
          <div class="space-y-2 sc-choices">${choiceBlocks}</div>
        </article>`;
    })
    .join('');

  return `
      <div class="module-scenarios-inner space-y-3" aria-labelledby="sc-heading" data-scenario-total="${n}">
        <h3 id="sc-heading" class="text-xs font-bold text-slate-900 border-b border-slate-200 pb-1.5">Scenarios</h3>
        <p class="js-scenarios-progress text-[10px] font-medium text-slate-600 mb-0.5" aria-live="polite">0 / ${n} scenario${n === 1 ? '' : 's'} reviewed</p>
        <div class="flex flex-col gap-3">${cards}</div>
        <div class="js-scenarios-completion hidden mt-2 rounded-xl border border-green-200 bg-green-50 px-3 py-3 text-sm text-green-950 shadow-sm" role="status" aria-live="polite">
          <p class="font-bold flex items-center gap-2">
            <i class="fa-solid fa-circle-check text-green-600" aria-hidden="true"></i>
            All scenarios reviewed
          </p>
          <p class="text-green-900/90 mt-1.5 text-xs leading-relaxed">You’ve opened feedback for each practice scenario. Revisit the main sections anytime to connect these ideas to the full narrative.</p>
        </div>
      </div>`;
}

function buildSingleKnowledgeCard(kc, slideIndex) {
  const q = typeof kc?.question === 'string' ? kc.question : '';
  const options = Array.isArray(kc?.options) ? kc.options : [];
  const correctIdx = Number.isFinite(Number(kc?.correct_index)) ? Number(kc.correct_index) : 0;
  const explanation =
    typeof kc?.explanation === 'string' ? kc.explanation : 'Review the module narrative for the full context.';
  const nameAttr = `kc-q-${slideIndex}`;
  const optsHtml = options
    .map((opt, j) => {
      const label = typeof opt === 'string' ? opt : String(opt ?? '');
      return `<label class="flex gap-3 cursor-pointer items-start rounded-lg border border-slate-200 bg-white px-3 py-2 hover:border-orange-300 transition">
              <input type="radio" name="${nameAttr}" value="${j}" class="mt-1 text-orange-600 focus:ring-orange-500">
              <span class="text-sm text-slate-800">${escapeHtml(label)}</span>
            </label>`;
    })
    .join('');
  return `
        <div class="knowledge-check-card border border-slate-200 rounded-xl p-5 md:p-6 bg-white shadow-sm max-w-3xl mx-auto" data-kc-correct="${correctIdx}" data-kc-slide="${slideIndex}">
          <p class="font-semibold text-slate-900 mb-4 text-base">${escapeHtml(q)}</p>
          <div class="space-y-2 mb-4">${optsHtml}</div>
          <button type="button" class="js-kc-check bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg text-sm transition">Check answer</button>
          <div class="js-kc-feedback hidden mt-3 text-sm text-slate-700 border-t border-slate-100 pt-3"></div>
          <div class="js-kc-affirmation hidden mt-3 rounded-xl border-2 border-emerald-400/80 bg-gradient-to-br from-emerald-50 via-white to-orange-50 px-4 py-3 text-center shadow-lg ring-2 ring-emerald-400/30" role="status" aria-live="polite">
            <p class="text-base" aria-hidden="true">✨</p>
            <p class="text-sm font-semibold text-emerald-900">Correct — nice work.</p>
            <p class="js-kc-explanation-display mt-2 text-xs text-emerald-800/90 leading-relaxed text-left sm:text-center"></p>
          </div>
          <div class="js-kc-explanation-text hidden" aria-hidden="true">${escapeHtml(explanation)}</div>
        </div>`;
}

/**
 * Inner roleplay card only (for modal or legacy inline). No section wrapper.
 * @param {Record<string, unknown>} meta
 * @returns {string}
 */
export function buildRoleplayPanelHtml(meta) {
  const rp = meta.roleplay;
  if (!rp || !rp.persona || !rp.scenario) return '';

  return `
        <div class="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col w-full" style="height: min(72vh, 720px); max-height: min(72vh, 720px);" data-roleplay-container data-persona="${escapeHtml(rp.persona)}" data-scenario="${escapeHtml(rp.scenario)}" data-goal="${escapeHtml(rp.goal)}">
          <div class="bg-slate-50 border-b border-slate-200 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
            <div>
              <p class="text-sm font-bold text-slate-900">Persona: <span class="font-normal text-slate-700">${escapeHtml(rp.persona)}</span></p>
              <p class="text-xs text-slate-600 mt-1"><strong>Scenario:</strong> ${escapeHtml(rp.scenario)}</p>
              ${rp.goal ? `<p class="text-xs text-slate-600 mt-1"><strong>Goal:</strong> ${escapeHtml(rp.goal)}</p>` : ''}
            </div>
            <button type="button" class="js-rp-start shrink-0 inline-flex items-center gap-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 text-sm shadow-sm transition">
              <i class="fa-solid fa-play" aria-hidden="true"></i> Start Roleplay
            </button>
          </div>
          <div class="js-rp-chat-area flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 hidden">
          </div>
          <div class="js-rp-input-area border-t border-slate-200 p-3 bg-white hidden shrink-0">
            <form class="js-rp-form flex gap-2">
              <input type="text" class="js-rp-input flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" placeholder="Type your response..." disabled>
              <button type="submit" class="js-rp-send inline-flex items-center justify-center rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600 disabled:opacity-50 transition" disabled>
                Send
              </button>
            </form>
          </div>
        </div>`;
}

/** @deprecated Prefer {@link buildRoleplayPanelHtml} + modal; kept for callers that need a full section. */
export function buildRoleplayHtml(meta) {
  const panel = buildRoleplayPanelHtml(meta);
  if (!panel) return '';
  return `
      <section class="module-roleplay border-t border-slate-200 pt-8 mt-2" aria-labelledby="rp-heading">
        <div class="flex items-center justify-between border-b border-slate-200 pb-2 mb-4">
          <h3 id="rp-heading" class="text-lg font-bold text-slate-900">AI Roleplay</h3>
          <span class="inline-flex items-center rounded-full bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-700/10">Beta</span>
        </div>
        ${panel}
      </section>`;
}

/** Relative MP4 under site root (internal training paths only). */
const SAFE_UC_VIDEO_SRC =
  /^assets\/(?:UC\/|training\/salesforce\/)[a-zA-Z0-9._-]+\.mp4$/;
/** Optional static poster image next to MP4s. */
const SAFE_UC_POSTER =
  /^assets\/(?:UC\/|training\/salesforce\/)[a-zA-Z0-9._-]+\.(jpg|jpeg|png|webp)$/i;

/** Matches overview-style `module-section-card` shells used for `##` sections. */
const TRAINING_SECTION_CARD_CLASSES =
  'module-training-section module-section-card rounded-2xl border p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow module-section-overview border-slate-200/90 bg-gradient-to-b from-slate-50/95 via-white to-white';

/** Teams mark for Check In / live session cards (`assets/UC/teams.png`, shared with the UC module poster). */
const TEAMS_LIVE_WATERMARK_SRC = 'assets/UC/teams.png';

/**
 * Headings like “Check In 1” or “Live session — …” get a faint Teams watermark on the card.
 * @param {string} heading
 */
function trainingSectionHeadingIsLiveTeamsStyle(heading) {
  const t = String(heading || '');
  return /\bcheck\s*in\b/i.test(t) || /\blive\s*session\b/i.test(t);
}

/**
 * @param {string} innerHtml - Heading, intro, body, carousel (no outer section)
 * @param {boolean} useWatermark
 */
function wrapTrainingCardInnerWithTeamsWatermark(innerHtml, useWatermark) {
  if (!useWatermark) return innerHtml;
  const src = escapeHtml(TEAMS_LIVE_WATERMARK_SRC);
  return `<span class="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl" aria-hidden="true">
          <img src="${src}" alt="" class="absolute -bottom-8 -right-8 h-56 w-56 max-w-[min(72%,300px)] object-contain object-bottom-right opacity-[0.1] select-none sm:h-64 sm:w-64 sm:-bottom-10 sm:-right-10" width="256" height="256" decoding="async" loading="lazy" />
        </span>
        <div class="relative z-[1]">${innerHtml}</div>`;
}

/**
 * @param {unknown[]} items
 * @returns {{ src: string; title: string; poster: string }[]}
 */
function normalizeVideoItems(items) {
  if (!Array.isArray(items)) return [];
  /** @type {{ src: string; title: string; poster: string }[]} */
  const entries = [];
  for (const it of items) {
    const src = typeof it?.src === 'string' ? it.src.trim() : '';
    if (!SAFE_UC_VIDEO_SRC.test(src)) continue;
    const title =
      typeof it?.title === 'string' && it.title.trim()
        ? it.title.trim()
        : `Video ${entries.length + 1}`;
    let poster = typeof it?.poster === 'string' ? it.poster.trim() : '';
    if (poster && !SAFE_UC_POSTER.test(poster)) poster = '';
    entries.push({ src, title, poster });
  }
  return entries;
}

function buildTrainingIntroParagraph(intro) {
  if (typeof intro !== 'string' || !intro.trim()) return '';
  return `<p class="text-sm text-slate-600 mb-4">${escapeHtml(intro.trim())}</p>`;
}

/**
 * Carousel chrome only (slides, prev/next, dots). Each slide shows a visible title above the player.
 * @param {{ src: string; title: string; poster: string }[]} entries
 */
function buildVideoCarouselChromeHtml(entries) {
  const n = entries.length;
  if (n === 0) return '';

  const slides = entries.map((e, i) => {
    const hidden = i === 0 ? '' : ' hidden';
    const srcEsc = escapeHtml(e.src);
    const posterAttr = e.poster ? ` poster="${escapeHtml(e.poster)}"` : '';
    return `<div class="vc-slide${hidden}" data-vc-slide="${i}">
          <p class="text-base font-semibold text-slate-900 mb-3 tracking-tight">${escapeHtml(e.title)}</p>
          <div class="rounded-xl border border-slate-200 bg-black/90 overflow-hidden shadow-md">
            <video class="w-full max-h-[min(56vh,520px)] object-contain"${posterAttr} controls playsinline preload="metadata" title="${escapeHtml(e.title)}">
              <source src="${srcEsc}" type="video/mp4" />
              <p class="text-slate-300 text-sm p-4">Your browser cannot play this video. <a class="text-orange-400 underline" href="${srcEsc}" target="_blank" rel="noopener">Open file</a></p>
            </video>
          </div>
        </div>`;
  });

  const dots = entries
    .map((e, i) => {
      const active =
        i === 0
          ? 'bg-orange-500 ring-2 ring-orange-200'
          : 'bg-slate-300 hover:bg-slate-400';
      return `<button type="button" class="js-vc-carousel-dot h-2.5 w-2.5 shrink-0 rounded-full transition ${active}" data-vc-dot="${i}" aria-label="Video ${i + 1} of ${n}: ${escapeHtml(e.title)}" aria-current="${i === 0 ? 'true' : 'false'}"></button>`;
    })
    .join('');

  return `
        <div class="vc-carousel rounded-xl border border-slate-200 bg-white p-3 md:p-4" data-vc-active="0" data-vc-count="${n}">
          <div class="vc-carousel-slides min-h-[200px]">${slides.join('')}</div>
          <div class="flex flex-wrap items-center justify-between gap-4 mt-4 pt-4 border-t border-slate-200">
            <button type="button" class="js-vc-carousel-prev inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none" aria-label="Previous video">
              <i class="fa-solid fa-chevron-left text-xs" aria-hidden="true"></i> Previous
            </button>
            <span class="js-vc-carousel-indicator text-sm font-semibold text-slate-600 tabular-nums">1 / ${n}</span>
            <button type="button" class="js-vc-carousel-next inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none" aria-label="Next video">
              Next <i class="fa-solid fa-chevron-right text-xs" aria-hidden="true"></i>
            </button>
          </div>
          <div class="flex flex-wrap justify-center gap-2 mt-4 px-1 max-w-full">${dots}</div>
        </div>`;
}

/**
 * One training card: heading, optional plain intro, optional markdown body, optional video carousel.
 * @param {Record<string, unknown>} section
 * @param {number} index
 */
function buildVideoSectionCardHtml(section, index) {
  const heading =
    typeof section?.heading === 'string' && section.heading.trim()
      ? section.heading.trim()
      : `Training ${index + 1}`;
  const sid = `video-section-${index}`;
  const teamsMark = trainingSectionHeadingIsLiveTeamsStyle(heading);
  const shellClasses = `${TRAINING_SECTION_CARD_CLASSES}${teamsMark ? ' relative overflow-hidden' : ''}`;
  const introHtml = buildTrainingIntroParagraph(
    typeof section?.intro === 'string' ? section.intro : ''
  );
  const entries = normalizeVideoItems(
    Array.isArray(section?.items) ? section.items : []
  );
  const bodyRaw = typeof section?.body === 'string' ? section.body : '';

  if (entries.length === 0) {
    if (!bodyRaw.trim()) return '';
    let bodyHtml;
    try {
      bodyHtml = parseMarkdownToSafeHtml(bodyRaw);
    } catch {
      bodyHtml =
        '<p class="text-sm text-red-800">Could not render section body.</p>';
    }
    const inner = `
        <h3 id="${sid}" class="text-xl font-bold text-slate-900 mb-4 tracking-tight">${escapeHtml(heading)}</h3>
        ${introHtml}
        <div class="module-markdown-body module-section-body-full w-full text-slate-800">${bodyHtml}</div>`;
    return `
      <section class="${shellClasses}" aria-labelledby="${sid}">
        ${wrapTrainingCardInnerWithTeamsWatermark(inner, teamsMark)}
      </section>`;
  }

  let bodyBeforeCarousel = '';
  if (bodyRaw.trim()) {
    try {
      bodyBeforeCarousel = `<div class="module-markdown-body module-section-body-full w-full text-slate-800 mb-4">${parseMarkdownToSafeHtml(bodyRaw)}</div>`;
    } catch {
      bodyBeforeCarousel = '';
    }
  }

  const carouselHtml = buildVideoCarouselChromeHtml(entries);
  const inner = `
        <h3 id="${sid}" class="text-xl font-bold text-slate-900 mb-4 tracking-tight">${escapeHtml(heading)}</h3>
        ${introHtml}
        ${bodyBeforeCarousel}
        ${carouselHtml}`;
  return `
      <section class="${shellClasses}" aria-labelledby="${sid}">
        ${wrapTrainingCardInnerWithTeamsWatermark(inner, teamsMark)}
      </section>`;
}

/**
 * Training blocks after Coffee Summary: either `video_sections` (multiple cards) or legacy
 * `video_carousel` + `video_carousel_intro` (single card, UC module).
 * Wired in {@link renderModuleDocumentHtml}.
 *
 * `video_sections` entries: `heading`, optional `intro` (plain text), optional `items` (same as video_carousel),
 * optional `body` (markdown for text-only cards or prose before a carousel).
 */
export function buildVideoSectionsHtml(meta) {
  if (Array.isArray(meta.video_sections) && meta.video_sections.length > 0) {
    return meta.video_sections
      .map((sec, i) => buildVideoSectionCardHtml(sec, i))
      .filter(Boolean)
      .join('');
  }

  const items = meta.video_carousel;
  if (!Array.isArray(items) || items.length === 0) return '';
  const entries = normalizeVideoItems(items);
  if (entries.length === 0) return '';

  const intro =
    typeof meta.video_carousel_intro === 'string' && meta.video_carousel_intro.trim()
      ? buildTrainingIntroParagraph(meta.video_carousel_intro)
      : '';
  const carousel = buildVideoCarouselChromeHtml(entries);
  const sid = 'video-section-legacy';
  return `
      <section class="${TRAINING_SECTION_CARD_CLASSES} module-video-carousel-legacy" aria-labelledby="${sid}">
        <h3 id="${sid}" class="text-xl font-bold text-slate-900 mb-4 tracking-tight">Training videos</h3>
        ${intro}
        ${carousel}
      </section>`;
}

/** @deprecated Use {@link buildVideoSectionsHtml}; kept for call-site compatibility. */
export function buildVideoCarouselHtml(meta) {
  return buildVideoSectionsHtml(meta);
}

export function buildKnowledgeChecksCarouselHtml(meta) {
  const checks = meta.knowledge_checks;
  if (!Array.isArray(checks) || checks.length === 0) return '';

  const n = checks.length;
  const slides = checks.map((kc, i) => {
    const hidden = i === 0 ? '' : ' hidden';
    return `<div class="kc-slide${hidden}" data-kc-slide="${i}">${buildSingleKnowledgeCard(kc, i)}</div>`;
  });

  const dots = checks
    .map((_, i) => {
      const active = i === 0 ? 'bg-orange-500 ring-2 ring-orange-200' : 'bg-slate-300 hover:bg-slate-400';
      return `<button type="button" class="js-kc-carousel-dot h-2 w-2 shrink-0 rounded-full transition ${active}" data-kc-dot="${i}" aria-label="Question ${i + 1} of ${n}" aria-current="${i === 0 ? 'true' : 'false'}"></button>`;
    })
    .join('');

  return `
      <section class="module-knowledge-checks border-t border-slate-200 pt-8 mt-2" aria-labelledby="kc-heading">
        <h3 id="kc-heading" class="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">Knowledge checks</h3>
        <div class="kc-carousel rounded-xl border border-slate-200 bg-slate-50/80 p-4 md:p-6" data-kc-active="0" data-kc-count="${n}">
          <div class="flex flex-wrap items-center justify-end gap-3 mb-4 pb-4 border-b border-slate-200/80">
            <div class="js-kc-score flex items-baseline gap-1.5 rounded-lg bg-white border border-slate-200 px-4 py-2 shadow-sm" aria-live="polite" aria-atomic="true" title="Questions answered correctly on last check, out of total">
              <span class="js-kc-score-correct text-2xl font-bold text-orange-600 tabular-nums leading-none">0</span>
              <span class="text-slate-400 text-lg font-medium">/</span>
              <span class="js-kc-score-total text-2xl font-bold text-slate-700 tabular-nums leading-none">${n}</span>
              <span class="text-xs text-slate-500 ml-1 hidden sm:inline">correct</span>
            </div>
          </div>
          <div class="kc-carousel-slides min-h-[220px]">
            ${slides.join('')}
          </div>
          <div class="flex flex-wrap items-center justify-between gap-4 mt-6 pt-4 border-t border-slate-200">
            <button type="button" class="js-kc-carousel-prev inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none" aria-label="Previous question">
              <i class="fa-solid fa-chevron-left text-xs" aria-hidden="true"></i> Previous
            </button>
            <span class="js-kc-carousel-indicator text-sm font-semibold text-slate-600 tabular-nums">1 / ${n}</span>
            <button type="button" class="js-kc-carousel-next inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none" aria-label="Next question">
              Next <i class="fa-solid fa-chevron-right text-xs" aria-hidden="true"></i>
            </button>
          </div>
          <div class="flex flex-wrap justify-center gap-1.5 mt-4 px-1 js-kc-carousel-dots-wrap max-w-full">${dots}</div>
        </div>
      </section>`;
}
