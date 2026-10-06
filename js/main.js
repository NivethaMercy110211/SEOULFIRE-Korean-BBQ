/* SEOULFIRE Korean BBQ — shared shell & behaviors */
'use strict';

/* ---------- icon library (professional inline SVG, no emojis) ---------- */
const I = {
  fire: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c1 3.5-.5 5-2 6.5C8.5 10 7 11.5 7 14a5 5 0 0 0 10 0c0-2-.8-3.4-1.8-4.7-.5 1-1.2 1.7-2.2 2.2.4-2.7-.2-6.5-1-9.5z"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
  lang: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 4 5.6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-5.6-4-9s1.5-6.4 4-9z"/></svg>',
  burger: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5V21H3z"/><path d="M9 21v-7h6v7"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/></svg>',
  list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"/></svg>',
  menuIco: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2h7l2 4h9v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M14 2v4h6"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.1 6.3 7 1-5 4.9 1.2 6.9L12 17.8 5.7 21l1.2-6.9-5-4.9 7-1z"/></svg>',
  wallet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M16 15h2"/></svg>',
  history: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v6h6"/><path d="M3.05 13a9 9 0 1 0 2.1-6.4L3 9"/><path d="M12 7v5l4 2"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a7 7 0 0 1 16 0v1"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.5 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
  logout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5M21 12H9"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l5 5L20 7"/></svg>',
  receipt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3v18l2-1.5L9 21l2-1.5L13 21l2-1.5L17 21l2-1.5V3z"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>',
  gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4"/><path d="M5 12v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8M12 8v14M12 8s-4.5.5-5.5-2C5.7 4 7.5 2.5 9 3.4c1.6.9 3 4.6 3 4.6zM12 8s4.5.5 5.5-2c.8-2-1-3.5-2.5-2.6C13.4 4.3 12 8 12 8z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10z"/><path d="M9 11.5l2 2 4-4"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 8-3 8h18s-3-1-3-8"/><path d="M10.3 21a2 2 0 0 0 3.4 0"/></svg>',
  chev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" stroke-width="1.8" r="9"/><path d="M12 8h.01M11 12h1v4h1"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6L22 7"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 12.8 12.8 0 0 0 .7 2.8 2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5 12.8 12.8 0 0 0 2.8.7 2 2 0 0 1 1.8 2.1z"/></svg>',
  google: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 2M12 3a9 9 0 0 1 9 9" stroke-linecap="round"/></svg>',
  apple: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.7 12.9c0-2.4 2-3.6 2.1-3.7a4.6 4.6 0 0 0-3.6-2c-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9a4.8 4.8 0 0 0-4.1 2.5c-1.7 3-.4 7.5 1.2 9.9.8 1.2 1.8 2.5 3.1 2.5 1.2-.1 1.7-.8 3.2-.8s1.9.8 3.2.8c1.3 0 2.2-1.2 3-2.4a10 10 0 0 0 1.4-2.8 4.5 4.5 0 0 1-2.4-4zm-2.5-7.3A4.5 4.5 0 0 0 15.3 2a4.6 4.6 0 0 0-3 1.6 4.3 4.3 0 0 0-1.1 3.2 3.9 3.9 0 0 0 3-1.2z"/></svg>',
  googleG: '<svg viewBox="0 0 24 24"><path fill="#EA4335" d="M12 11v3.6h5.1a4.4 4.4 0 0 1-1.9 2.9v2.4h3.1c1.8-1.7 2.9-4.2 2.9-7.1 0-.7-.1-1.3-.2-1.8z"/><path fill="#34A853" d="M12 21c2.6 0 4.8-.9 6.3-2.3l-3.1-2.4c-.8.6-1.9 1-3.2 1a5.6 5.6 0 0 1-5.3-3.9H3.5v2.5A9 9 0 0 0 12 21z"/><path fill="#FBBC05" d="M6.7 13.4a5.7 5.7 0 0 1 0-3.6V7.3H3.5a9 9 0 0 0 0 8.2z"/><path fill="#4285F4" d="M12 6.6c1.3 0 2.5.5 3.4 1.3L18 5.3A9 9 0 0 0 3.5 7.3l3.2 2.5A5.6 5.6 0 0 1 12 6.6z"/></svg>',
  appleB: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 12.54c0-2.4 1.96-3.55 2.05-3.6a4.54 4.54 0 0 0-3.58-1.94c-1.5-.15-2.96.9-3.73.9-.77 0-1.95-.88-3.22-.85A4.77 4.77 0 0 0 4.5 9.6c-1.72 2.98-.44 7.4 1.24 9.82.82 1.18 1.8 2.5 3.09 2.45 1.24-.05 1.7-.8 3.2-.8 1.48 0 1.9.8 3.2.78 1.32-.02 2.16-1.2 2.97-2.4a10.4 10.4 0 0 0 1.34-2.77 4.4 4.4 0 0 1-2.49-4.14zM14.6 5.36A4.4 4.4 0 0 0 15.6 2a4.5 4.5 0 0 0-2.9 1.52 4.2 4.2 0 0 0-1.05 3.26 3.9 3.9 0 0 0 2.95-1.42z"/></svg>',
};

/* ---------- storage helpers ---------- */
const store = {
  get(k, d) { try { const v = localStorage.getItem('sf:' + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem('sf:' + k, JSON.stringify(v)); } catch { } },
};

/* ---------- shell injection ---------- */
const PAGES = [
  ['index.html', 'Home 1'], ['home2.html', 'Home 2'], ['about.html', 'About'],
  ['menu.html', 'Menu'], ['reservations.html', 'Reservations'],
  ['experience.html', 'BBQ Experience'], ['gallery.html', 'Gallery'],
  ['contact.html', 'Contact'],
];
const path = location.pathname.split('/').pop() || 'index.html';

const brandHTML = `<a class="brand" href="index.html"><span class="brand-mark">${I.fire}</span><span class="brand-text">SEOULFIRE<small>Korean BBQ</small></span></a>`;

function buildHeader() {
  return `<header class="nav" id="siteNav">
  <div class="container">
    ${brandHTML}
    <nav class="links" id="navLinks" aria-label="Primary">
      ${PAGES.map(([p, l]) => `<a class="${path === p ? 'active' : ''}" href="${p}">${l}</a>`).join('')}
      <div class="mobile-menu-actions">
        <a class="mobile-login" href="login.html">Login</a>
        <a class="btn btn-primary btn-sm" href="dashboard.html">My Table</a>
        <button class="lang-pill mobile-rtl-toggle" aria-label="Toggle RTL/LTR" title="Toggle RTL layout"><span>RTL</span></button>
        <button class="icon-btn mobile-theme-toggle" aria-label="Toggle theme">${I.sun}</button>
      </div>
    </nav>
    <div class="actions">
      <a class="login-link" href="login.html">Login</a>
      <a class="btn btn-primary btn-sm" href="dashboard.html">My Table</a>
      <button class="lang-pill" id="rtlBtn" aria-label="Toggle RTL/LTR" title="Toggle RTL layout"><span>RTL</span></button>
      <button class="icon-btn" id="themeBtn" aria-label="Toggle theme">${I.sun}</button>
      <button class="icon-btn menu-btn" id="menuBtn" aria-label="Menu">${I.burger}</button>
    </div>
  </div>
</header>`;
}

function buildFooter() {
  return `<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        ${brandHTML}
        <p class="f-tag">Grill. Share. Seoul.<br>A table built around good fire and even better company.</p>
        <div class="f-socials" aria-label="Follow SEOULFIRE">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="SEOULFIRE on Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="SEOULFIRE on Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v2H6v4h3v7h4v-7h3.3l.7-4h-4V9c0-.7.3-1 1-1z"/></svg></a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="SEOULFIRE on YouTube"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2.5" y="5" width="19" height="14" rx="4"/><path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none"/></svg></a>
        </div>
        <form class="f-news" data-validate data-success="You are on the list. See you at the grill.">
          <input type="email" required placeholder="Email for dinner news" aria-label="Email">
          <button class="btn btn-primary" type="submit">${I.arrow}</button>
        </form>
      </div>
      <div><h4>Explore</h4><a href="about.html">About</a><a href="menu.html">Menu</a><a href="menu.html#banchan">Banchan Explorer</a><a href="experience.html">The BBQ Experience</a><a href="gallery.html">Gallery</a></div>
      <div><h4>Your table</h4><a href="reservations.html">Reserve a table</a><a href="dashboard.html">My Table</a><a href="dashboard.html#loyalty">Grill Club</a><a href="login.html">Guest login</a></div>
      <div><h4>Visit</h4><a href="contact.html">Location &amp; hours</a><a href="contact.html#groups">Group dining</a><a href="contact.html#faq">FAQ</a><a href="contact.html#access">Accessibility</a></div>
    </div>
    <div class="fine">
      <span>© 2026 SEOULFIRE Korean BBQ — Grill. Share. Seoul.</span>
      <span>Demonstration site · all data shown is sample content.</span>
    </div>
  </div>
  <button class="to-top" id="toTop" aria-label="Back to top">${I.chev.replace('M6 9l6 6 6-6', 'M6 15l6-6 6 6')}</button>
<div class="toast-wrap" id="toasts"></div>`;
}

if (!document.body.classList.contains('auth-page') && !document.body.classList.contains('dash-page')) {
  document.body.insertAdjacentHTML('afterbegin', buildHeader());
  document.body.insertAdjacentHTML('beforeend', buildFooter());
} else if (document.body.classList.contains('auth-page')) {
  // Auth pages keep only a floating theme control; branding belongs with the form.
  document.body.insertAdjacentHTML('afterbegin', `<div class="auth-controls" aria-label="Display controls">
    <button class="lang-pill" id="rtlBtn" aria-label="Toggle RTL/LTR" title="Toggle RTL layout"><span>RTL</span></button>
    <button class="icon-btn auth-theme-btn" id="themeBtn" aria-label="Toggle theme">${I.sun}</button>
  </div><div class="toast-wrap" id="toasts"></div>`);
  document.querySelector('.auth-main')?.insertAdjacentHTML('afterbegin', `<div class="auth-form-brand">${brandHTML}</div>`);
}

/* dashboard sidebar is rendered by each dashboard view inline (see dashboard.html) */

/* ---------- theme ---------- */
const themeBtns = document.querySelectorAll('#themeBtn, .mobile-theme-toggle');
function applyThemeBtn() {
  themeBtns.forEach(btn => {
    btn.innerHTML = document.body.classList.contains('dark') ? I.sun : I.moon;
  });
}
themeBtns.forEach(btn => btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  store.set('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  applyThemeBtn();
}));
if (store.get('theme', null) === 'dark' ||
  (store.get('theme', null) === null && matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.body.classList.add('dark');
}
applyThemeBtn();

/* ---------- RTL toggle & state sync ---------- */
function syncRtlUI(dir) {
  const isRtl = dir === 'rtl';
  document.querySelectorAll('#rtlBtn, .mobile-rtl-toggle').forEach(btn => {
    btn.classList.toggle('active', isRtl);
    btn.setAttribute('aria-pressed', isRtl ? 'true' : 'false');
  });
  const setRtlInput = document.querySelector('#setRtl');
  if (setRtlInput) setRtlInput.checked = isRtl;
}

window.syncRtlUI = syncRtlUI;
window.setRtl = function (dir) {
  const html = document.documentElement;
  html.dir = dir;
  store.set('dir', dir);
  syncRtlUI(dir);
};

document.addEventListener('click', e => {
  const btn = e.target.closest('#rtlBtn, .mobile-rtl-toggle');
  if (!btn) return;
  const next = document.documentElement.dir === 'rtl' ? 'ltr' : 'rtl';
  window.setRtl(next);
});

if (store.get('dir', null) === 'rtl') {
  document.documentElement.dir = 'rtl';
}
syncRtlUI(document.documentElement.dir || 'ltr');

/* ---------- mobile nav ---------- */
document.querySelector('#menuBtn')?.addEventListener('click', () => {
  document.querySelector('#navLinks')?.classList.toggle('open');
});

/* ---------- nav scroll state + progress ---------- */
const navEl = document.querySelector('#siteNav');
const prog = document.createElement('div');
prog.id = 'scrollProgress';
document.body.prepend(prog);
function onScroll() {
  const y = scrollY;
  navEl?.classList.toggle('scrolled', y > 24);
  const max = document.documentElement.scrollHeight - innerHeight;
  prog.style.width = max > 0 ? ((y / max) * 100).toFixed(2) + '%' : '0%';
  const t = document.querySelector('#toTop');
  t?.classList.toggle('show', y > 600);
}
addEventListener('scroll', onScroll, { passive: true });
onScroll();
document.querySelector('#toTop')?.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

/* ---------- reveal on scroll ----------
   Content is visible by default; only elements sitting fully below the fold
   get pre-hidden, so JS-rendered or mid-page content can never be lost. */
const io = new IntersectionObserver((es) => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.remove('pre'); e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .12 });
function sfPrepareReveals() {
  document.querySelectorAll('.reveal:not(.in)').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.top > innerHeight * 0.9) el.classList.add('pre');
    io.observe(el);
  });
}
sfPrepareReveals();
addEventListener('load', sfPrepareReveals);
new MutationObserver(muts => muts.forEach(m => m.addedNodes.forEach(n => {
  if (n.nodeType === 1) {
    if (n.classList?.contains('reveal')) sfPrepareReveals();
    else if (n.querySelector?.('.reveal')) sfPrepareReveals();
  }
}))).observe(document.documentElement, { childList: true, subtree: true });

/* ---------- toasts ---------- */
function toast(msg) {
  const w = document.querySelector('#toasts');
  if (!w) return alert(msg);
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = msg;
  w.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity .3s'; setTimeout(() => t.remove(), 320); }, 3400);
}

/* ---------- generic filters ---------- */
document.querySelectorAll('[data-filter]').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll(`[data-filter]`).forEach(x => x.classList.remove('active'));
  b.classList.add('active');
  const f = b.dataset.filter;
  document.querySelectorAll('[data-category]').forEach(c => {
    c.classList.toggle('hidden', f !== 'all' && c.dataset.category !== f);
  });
}));
/* menu category nav active state */
document.querySelectorAll('.menu-cat-nav a, .xp-progress a').forEach(a => a.addEventListener('click', () => {
  document.querySelectorAll('.menu-cat-nav a, .xp-progress a').forEach(x => x.classList.remove('active'));
  a.classList.add('active');
}));

/* ---------- lightbox ---------- */
const lb = document.querySelector('#lightbox');
if (lb) {
  const lbImg = lb.querySelector('img'), lbCap = lb.querySelector('figcaption span');
  document.querySelectorAll('.gallery-item').forEach(it => it.addEventListener('click', () => {
    const img = it.querySelector('img');
    lbImg.src = img.src; lbImg.alt = img.alt || '';
    lbCap.textContent = it.dataset.title || '';
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }));
  lb.addEventListener('click', e => { if (e.target === lb || e.target.closest('.lightbox-close')) { lb.classList.remove('open'); document.body.style.overflow = ''; } });
  addEventListener('keydown', e => { if (e.key === 'Escape' && lb.classList.contains('open')) { lb.classList.remove('open'); document.body.style.overflow = ''; } });
}

/* ---------- form validation ---------- */
document.querySelectorAll('form[data-validate]').forEach(form => form.addEventListener('submit', e => {
  e.preventDefault();
  form.querySelectorAll('.error').forEach(x => x.remove());
  let ok = true;
  form.querySelectorAll('[required]').forEach(inp => {
    if (!inp.value.trim() || (inp.type === 'email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(inp.value))) {
      ok = false;
      inp.closest('.field')?.insertAdjacentHTML('beforeend', '<span class="error">Please complete this field.</span>');
    }
  });
  if (ok) {
    const msg = form.dataset.success || 'Thanks — your request has been received.';
    toast(msg);
    if (form.dataset.redirect) setTimeout(() => location.href = form.dataset.redirect, 500);
  }
}));

/* favorites helpers used across menu + dashboard */
window.sfFavs = {
  has: id => (store.get('favs', SF.DATA.favorites) || []).includes(id),
  toggle(id) {
    let f = store.get('favs', SF.DATA.favorites) || [];
    f = f.includes(id) ? f.filter(x => x !== id) : [...f, id];
    store.set('favs', f);
    return f.includes(id);
  },
};

/* menu card renderer shared by menu page + dashboard explorer */
window.sfCard = (item, opts = {}) => `
  <article class="card menu-card" data-category="${item.cat}">
    <div class="card-media">
      <img src="${item.img}" alt="${item.name}" loading="lazy">
      ${opts.favToggle !== false ? `<button class="fav-toggle ${sfFavs.has(item.id) ? 'on' : ''}" data-fav="${item.id}" aria-label="Save ${item.name}">${I.heart}</button>` : ''}
      ${(item.badges || []).map(b => `<span class="badge">${b}</span>`).join('')}
    </div>
    <div class="card-body">
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      ${item.serve ? `<span class="hint" style="font-size:12.5px;color:var(--muted)">${item.serve}</span>` : ''}
      <div class="diet-row ${(item.diet || []).length ? '' : 'diet-row-empty'}">${(item.diet || []).map(d => `<span class="badge badge-neutral">${d}</span>`).join('')}</div>
      <a class="btn btn-outline btn-sm card-reserve-cta" href="reservations.html">Reserve a table</a>
      <div class="card-meta"><span class="price">$${item.price}</span><a class="arrow-link" href="menu.html#${item.id}">View ${I.arrow}</a></div>
    </div>
  </article>`;

/* ---------- Table Comes Alive Ritual Step Switcher ---------- */
(() => {
  const sec = document.querySelector('#table-alive-section');
  if (!sec) return;
  const ritualImg = sec.querySelector('#table-alive-img');
  const ritualBadge = sec.querySelector('#table-alive-badge');
  const ritualCaption = sec.querySelector('#table-alive-caption');

  const stepDescriptions = {
    '01 · Choose Your Cuts': 'Select prime cuts with your server while the cast iron grates heat.',
    '02 · Grill on the Fire': 'Sizzle marbled beef and thick-cut pork over glowing charcoal embers.',
    '03 · Build Your Ssam': 'Fresh red leaf or perilla, a spoonful of rice, grilled cut, and kimchi.',
    '04 · House Dipping Sauces': 'Ssamjang, roasted sesame oil with sea salt, or bright citrus soy.',
    '05 · Share the Feast': 'Pass the plates, refill the banchan, and toast with cold drinks.'
  };

  const chips = sec.querySelectorAll('.step-chip');
  chips.forEach(chip => {
    const activate = () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const targetImg = chip.dataset.img;
      const badgeText = chip.dataset.badge;
      if (ritualImg && targetImg && ritualImg.getAttribute('src') !== targetImg) {
        ritualImg.style.opacity = '0.35';
        ritualImg.style.transform = 'scale(1.02)';
        setTimeout(() => {
          ritualImg.src = targetImg;
          ritualImg.style.opacity = '1';
          ritualImg.style.transform = 'scale(1)';
        }, 140);
      }
      if (ritualBadge && badgeText) ritualBadge.textContent = badgeText;
      if (ritualCaption && stepDescriptions[badgeText]) {
        ritualCaption.textContent = stepDescriptions[badgeText];
      }
    };
    chip.addEventListener('mouseenter', activate);
    chip.addEventListener('click', activate);
    chip.addEventListener('focus', activate);
  });
})();

/* ---------- Password visibility ---------- */
document.querySelectorAll('[data-password-toggle]').forEach(button => {
  button.addEventListener('click', () => {
    const input = document.getElementById(button.dataset.passwordToggle);
    if (!input) return;
    const visible = input.type === 'password';
    input.type = visible ? 'text' : 'password';
    button.classList.toggle('is-visible', visible);
    button.setAttribute('aria-pressed', String(visible));
    button.setAttribute('aria-label', visible ? 'Hide password' : 'Show password');
  });
});

/* ---------- Evening Journey Carousel ---------- */
(() => {
  const rail = document.querySelector('#journeyRail');
  const prev = document.querySelector('#journeyPrev');
  const next = document.querySelector('#journeyNext');
  if (!rail || !prev || !next) return;

  const scrollAmount = () => {
    const card = rail.querySelector('.card');
    const gap = parseFloat(getComputedStyle(rail).columnGap) || 0;
    return card ? card.getBoundingClientRect().width + gap : rail.clientWidth;
  };

  const updateControls = () => {
    const maxScroll = rail.scrollWidth - rail.clientWidth;
    prev.disabled = rail.scrollLeft <= 2;
    next.disabled = rail.scrollLeft >= maxScroll - 2;
  };

  prev.addEventListener('click', () => rail.scrollBy({ left: -scrollAmount(), behavior: 'smooth' }));
  next.addEventListener('click', () => rail.scrollBy({ left: scrollAmount(), behavior: 'smooth' }));
  rail.addEventListener('scroll', updateControls, { passive: true });
  window.addEventListener('resize', updateControls);
  updateControls();
})();
