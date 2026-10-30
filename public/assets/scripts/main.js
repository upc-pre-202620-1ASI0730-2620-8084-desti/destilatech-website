// Partials: the header and footer live in _header.html and _footer.html and are injected
// into every page, so they are written only once.
const PARTIALS = [
  { placeholderId: 'header-placeholder', url: '_header.html' },
  { placeholderId: 'footer-placeholder', url: '_footer.html' }
];

const loadPartial = async ({ placeholderId, url }) => {
  const placeholder = document.getElementById(placeholderId);
  if (!placeholder) return;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Could not load ${url} (${response.status})`);
  placeholder.outerHTML = await response.text();
};

// Normalizes a path so "/site/" and "/site/index.html" are treated as the same page.
const pagePath = (pathname) => pathname.replace(/index\.html$/, '');

document.addEventListener('DOMContentLoaded', async () => {
  try {
    await Promise.all(PARTIALS.map(loadPartial));
  } catch (error) {
    console.error(error);
  }
  document.dispatchEvent(new Event('partials:loaded'));
});

document.addEventListener('partials:loaded', () => {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  const closeMenu = () => {
    nav.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
  };

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (event) => {
      if (!nav.classList.contains('is-open')) return;
      if (nav.contains(event.target) || hamburger.contains(event.target)) return;
      closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  // Section links ("index.html#pricing") scroll smoothly when the section is on the current page;
  // from the legal pages they simply open the landing page at that section.
  document.querySelectorAll('a[href*="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const url = new URL(link.href);
      if (pagePath(url.pathname) !== pagePath(window.location.pathname) || !url.hash) return;
      const target = document.querySelector(url.hash);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', url.hash);
    });
  });

  const tabButtons = document.querySelectorAll('.tabs__btn');
  const tabPanels = document.querySelectorAll('.tabs__panel');

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      tabButtons.forEach((b) => {
        b.classList.toggle('is-active', b === btn);
        b.setAttribute('aria-selected', String(b === btn));
      });

      tabPanels.forEach((panel) => {
        const isTarget = panel.dataset.panel === target;
        panel.classList.toggle('is-active', isTarget);
        panel.hidden = !isTarget;
      });
    });
  });

  // Team photos: while a photo is missing, the card shows the member's initials.
  document.querySelectorAll('.team-card__photo img').forEach((img) => {
    const showInitials = () => img.parentElement.classList.add('is-empty');
    if (img.complete && img.naturalWidth === 0) showInitials();
    img.addEventListener('error', showInitials);
  });

  // Product and team videos: each one embeds its YouTube video once its ID is set in data-video-id.
  document.querySelectorAll('.video-frame[data-video-id]').forEach((videoFrame) => {
    const videoId = videoFrame.dataset.videoId.trim();
    if (!videoId) return;
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}`;
    iframe.title = videoFrame.dataset.videoTitle || 'Destilatech';
    iframe.allow = 'accelerometer; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.loading = 'lazy';
    videoFrame.replaceChildren(iframe);
  });

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Coming from another page (e.g. terms.html -> index.html#pricing): the header was injected after
  // the browser tried to scroll, so scroll to the requested section again.
  const initialTarget = window.location.hash ? document.querySelector(window.location.hash) : null;
  if (initialTarget) initialTarget.scrollIntoView({ block: 'start', behavior: 'instant' });
});