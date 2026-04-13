export function getXP() {
  return parseInt(localStorage.getItem('sn:xp') || '0', 10);
}

export function addXP(amount) {
  const current = getXP();
  const newTotal = current + amount;
  localStorage.setItem('sn:xp', newTotal.toString());
  return newTotal;
}

export function awardXP(amount, reason) {
  const newTotal = addXP(amount);
  showXPToast(amount, reason);
  updateXpDisplays(newTotal);
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

export function updateXpDisplays(total = getXP()) {
  document.querySelectorAll('.js-xp-display').forEach(el => {
    el.textContent = total.toLocaleString();
  });
}

// Initialize displays on load
document.addEventListener('DOMContentLoaded', () => updateXpDisplays());
