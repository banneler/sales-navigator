export function getXP() {
  return parseInt(localStorage.getItem('sn:xp') || '0', 10);
}

export function addXP(amount) {
  const current = getXP();
  const newTotal = current + amount;
  localStorage.setItem('sn:xp', newTotal.toString());
  return newTotal;
}

/** Clears stored XP (header updates on next updateXpDisplays / reload). */
export function resetXP() {
  localStorage.removeItem('sn:xp');
}

export function awardXP(amount, reason) {
  const previousTotal = getXP();
  const newTotal = addXP(amount);
  showXPToast(amount, reason);
  updateXpDisplays(newTotal);
  showLevelUpCelebrationIfNeeded(previousTotal, newTotal);
}

function showXPToast(amount, reason) {
  const toast = document.createElement('div');
  toast.className = 'fixed bottom-4 right-4 z-50 animate-fade-in-up';
  toast.innerHTML = `
    <div class="rounded-xl border border-orange-200 bg-white p-4 shadow-lg flex items-center gap-3">
      <div class="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
        <i class="fa-solid fa-star" aria-hidden="true"></i>
      </div>
      <div>
        <p class="text-sm font-bold text-slate-900">+${amount} XP</p>
        <p class="text-xs text-slate-600">${reason}</p>
      </div>
    </div>
  `;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('opacity-0', 'transition-opacity', 'duration-500');
    setTimeout(() => toast.remove(), 500);
  }, 3000);
}

function showLevelUpCelebrationIfNeeded(previousTotal, newTotal) {
  const previousLevel = Math.floor(previousTotal / 250);
  const newLevel = Math.floor(newTotal / 250);
  if (newLevel <= previousLevel) return;
  showLevelUpCelebration(newLevel);
}

function showLevelUpCelebration(level) {
  document.querySelector('.js-level-up-celebration')?.remove();

  const overlay = document.createElement('div');
  overlay.className = 'js-level-up-celebration level-up-celebration';
  overlay.setAttribute('role', 'status');
  overlay.setAttribute('aria-live', 'polite');
  overlay.innerHTML = `
    <div class="level-up-burst" aria-hidden="true">
      <span>🔥</span><span>🔥</span><span>🔥</span><span>🔥</span><span>🔥</span>
    </div>
    <div class="level-up-card">
      <div class="level-up-emoji" aria-hidden="true">🔥</div>
      <p class="level-up-kicker">Level Up</p>
      <p class="level-up-title">You hit Level ${level}</p>
      <p class="level-up-subtitle">${level * 250} XP and climbing</p>
    </div>
  `;
  document.body.appendChild(overlay);

  setTimeout(() => {
    overlay.classList.add('level-up-celebration-out');
    setTimeout(() => overlay.remove(), 650);
  }, 2600);
}

export function updateXpDisplays(total = getXP()) {
  document.querySelectorAll('.js-xp-display').forEach(el => {
    el.textContent = total.toLocaleString();
  });
}

// Initialize displays on load
document.addEventListener('DOMContentLoaded', () => updateXpDisplays());
