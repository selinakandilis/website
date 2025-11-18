
const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('primær-nav');

function isDesktop() {
  return window.matchMedia('(min-width: 1024px)').matches;
}

function openNav() {
  nav.setAttribute('data-state', 'open');
  toggle.setAttribute('aria-expanded', 'true');
}

function closeNav() {
  nav.setAttribute('data-state', 'closed');
  toggle.setAttribute('aria-expanded', 'false');
}

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.getAttribute('data-state') === 'open';
    if (open) {
      closeNav();
    } else {
      openNav();
    }
  });

  nav.addEventListener('click', (e) => {
    if (!isDesktop() && e.target.closest('a')) {
      closeNav();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!isDesktop() && e.key === 'Escape') {
      closeNav();
    }
  });
}
