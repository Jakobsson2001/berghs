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
