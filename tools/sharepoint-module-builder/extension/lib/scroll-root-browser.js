/**
 * SharePoint modern pages scroll inside contentScrollRegion, not window.
 * Loaded in content scripts and injected by the Playwright capture runner.
 */
(function () {
  function spGetScrollRoot() {
    const selectors = [
      '[data-automation-id="contentScrollRegion"]',
      '#spPageCanvasContent',
      '[data-automation-id="CanvasLayout"]',
      'main',
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel);
      if (!el) continue;
      const oy = getComputedStyle(el).overflowY;
      if (el.scrollHeight > el.clientHeight + 8 || /auto|scroll|overlay/.test(oy)) {
        return el;
      }
    }
    return null;
  }

  window.spGetScrollRoot = spGetScrollRoot;

  window.spContentY = function spContentY(node) {
    const root = spGetScrollRoot();
    if (!root) return node.getBoundingClientRect().top + window.scrollY;
    return node.getBoundingClientRect().top - root.getBoundingClientRect().top + root.scrollTop;
  };

  window.spScrollTo = function spScrollTo(y) {
    const target = Math.max(0, Math.floor(y));
    const root = spGetScrollRoot();
    if (root) {
      root.scrollTop = target;
      return root.scrollTop;
    }
    window.scrollTo(0, target);
    return window.scrollY;
  };

  window.spScrollHeight = function spScrollHeight() {
    const root = spGetScrollRoot();
    return root
      ? root.scrollHeight
      : Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
  };

  window.spResetScrollRoot = function spResetScrollRoot() {
    /* no-op; root is resolved live each call */
  };
})();
