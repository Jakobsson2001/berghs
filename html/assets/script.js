(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    links.classList.toggle('is-open', open);
  }

  toggle.addEventListener('click', function () {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    setOpen(open);
  });

  // Close menu when a link is clicked (mobile)
  links.addEventListener('click', function (ev) {
    if (ev.target && ev.target.matches('a')) {
      setOpen(false);
    }
  });
})();

// Live HTML demo (html.html)
(function () {
  const input = document.getElementById('live-html-input');
  const frame = document.getElementById('live-html-preview');
  const resetBtn = document.getElementById('live-html-reset');
  const copyBtn = document.getElementById('live-html-copy');
  const status = document.getElementById('live-html-status');
  if (!input || !frame) return;

  const starter = input.value.trim();

  function wrap(html) {
    return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Preview</title>
    <style>
      :root { color-scheme: light dark; }
      body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, 'Helvetica Neue', Arial, 'Apple Color Emoji', 'Segoe UI Emoji'; line-height: 1.5; padding: 16px; }
      img, video { max-width: 100%; height: auto; }
      * { box-sizing: border-box; }
    </style>
  </head>
  <body>
    ${html}
  </body>
</html>`;
  }

  let timer = null;
  function render() {
    try {
      if (status) status.textContent = 'Rendering…';
      frame.srcdoc = wrap(input.value);
      if (status) status.textContent = 'Updated';
    } catch (e) {
      if (status) status.textContent = 'Error rendering';
    }
  }

  function debounceRender() {
    clearTimeout(timer);
    timer = setTimeout(render, 150);
  }

  input.addEventListener('input', debounceRender);
  render();

  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      input.value = starter + '\n';
      render();
      if (status) status.textContent = 'Reset to example';
    });
  }

  if (copyBtn && navigator.clipboard) {
    copyBtn.addEventListener('click', async function () {
      try {
        await navigator.clipboard.writeText(input.value);
        if (status) status.textContent = 'Copied to clipboard';
      } catch (_) {
        if (status) status.textContent = 'Copy failed';
      }
    });
  }
})();

// Smooth scroll for in-page TOC links with easing slowdown
(function () {
  const toc = document.querySelector('.prose .toc');
  if (!toc) return;

  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  function getOffsetTop(el) {
    const rect = el.getBoundingClientRect();
    return rect.top + window.scrollY;
  }

  function scrollToTarget(targetEl) {
    const header = document.querySelector('.navbar .container');
    const headerH = header ? header.offsetHeight : 64;
    const start = window.scrollY;
    const dest = Math.max(0, getOffsetTop(targetEl) - headerH - 8);
    const distance = dest - start;
    const duration = Math.min(1000, Math.max(400, Math.abs(distance) * 0.5));
    let startTime = null;

    function step(ts) {
      if (startTime === null) startTime = ts;
      const t = Math.min(1, (ts - startTime) / duration);
      const eased = easeOutCubic(t);
      window.scrollTo(0, start + distance * eased);
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  toc.addEventListener('click', function (e) {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    scrollToTarget(target);
    history.replaceState(null, '', `#${id}`);
  });
})();
