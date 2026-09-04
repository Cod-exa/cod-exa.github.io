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

// Portfolio filter interaction with smooth transitions
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    document.querySelectorAll('.filter-btn').forEach(b => {
      const isActive = b === btn;
      b.classList.toggle('active', isActive);
      b.setAttribute('aria-pressed', String(isActive));
    });
    document.querySelectorAll('.showcase-card').forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      if (match) {
        card.style.display = '';
        requestAnimationFrame(() => {
          card.classList.add('is-revealed');
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        });
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// 3D Perspective Tilt & Golden Spotlight Tracking on Cards
function init3DTilt() {
  const cards = document.querySelectorAll('.tilt-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--spot-x', `${x}px`);
      card.style.setProperty('--spot-y', `${y}px`);

      // Gentle luxury tilt
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5.5;
      const rotateY = ((x - centerX) / centerX) * 5.5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// Staggered Scroll Reveal System (IntersectionObserver)
function initScrollReveals() {
  const reveals = document.querySelectorAll('.reveal-item');
  if (!('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.08
  });

  reveals.forEach(el => observer.observe(el));
}

// Metric Number Counter Animation
function initMetricCounters() {
  const metrics = document.querySelectorAll('.trust-inner .metric b');
  if (!metrics.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const text = el.textContent.trim();
        const match = text.match(/\d+/);
        if (match) {
          const targetNum = parseInt(match[0], 10);
          const prefix = text.slice(0, match.index);
          const suffix = text.slice(match.index + match[0].length);
          let current = 0;
          const step = Math.max(1, Math.floor(targetNum / 20));
          const interval = setInterval(() => {
            current += step;
            if (current >= targetNum) {
              current = targetNum;
              clearInterval(interval);
            }
            el.textContent = `${prefix}${current}${suffix}`;
          }, 35);
        }
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  metrics.forEach(m => observer.observe(m));
}

// Initialize on DOM Ready or immediately if already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    init3DTilt();
    initScrollReveals();
    initMetricCounters();
  });
} else {
  init3DTilt();
  initScrollReveals();
  initMetricCounters();
}



