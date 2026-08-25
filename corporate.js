const nav = document.getElementById('nav');
const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 12), { passive: true });
menuButton.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Menüyü kapat' : 'Menüyü aç');
});
navLinks.addEventListener('click', event => {
  if (event.target.tagName === 'A') {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});
document.getElementById('year').textContent = new Date().getFullYear();

const drawer = document.getElementById('productDrawer');
const drawerOverlay = document.getElementById('drawerOverlay');
const drawerClose = document.getElementById('drawerClose');
let drawerOpener = null;

function openProducts(event) {
  drawerOpener = event.currentTarget;
  drawerOverlay.hidden = false;
  requestAnimationFrame(() => {
    drawer.classList.add('open');
    drawerOverlay.classList.add('open');
  });
  drawer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('drawer-active');
  drawerClose.focus();
}

function closeProducts() {
  drawer.classList.remove('open');
  drawerOverlay.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('drawer-active');
  setTimeout(() => { drawerOverlay.hidden = true; }, 300);
  if (drawerOpener) drawerOpener.focus();
}

document.querySelectorAll('.product-trigger').forEach(button => button.addEventListener('click', openProducts));
drawerClose.addEventListener('click', closeProducts);
drawerOverlay.addEventListener('click', closeProducts);
document.addEventListener('keydown', event => { if (event.key === 'Escape' && drawer.classList.contains('open')) closeProducts(); });
