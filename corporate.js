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

// Portfolio filter interaction with smooth morphing transitions
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.showcase-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      filterBtns.forEach(b => {
        const isActive = b === btn;
        b.classList.toggle('active', isActive);
        b.setAttribute('aria-pressed', String(isActive));
      });

      cards.forEach((card, idx) => {
        const match = filter === 'all' || card.dataset.category === filter;
        if (match) {
          card.classList.remove('filtering-out');
          card.style.display = '';
          card.classList.add('filtering-in');
          card.style.animationDelay = `${(idx % 6) * 0.05}s`;
        } else {
          card.classList.remove('filtering-in');
          card.classList.add('filtering-out');
          setTimeout(() => {
            if (card.classList.contains('filtering-out')) {
              card.style.display = 'none';
            }
          }, 200);
        }
      });
    });
  });
}

// 3D Perspective Tilt & Specular Golden Spotlight on Cards
function init3DTilt() {
  const cards = document.querySelectorAll('.tilt-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--spot-x', `${x}px`);
      card.style.setProperty('--spot-y', `${y}px`);

      // Specular glare highlight (inverts across surface)
      const glareX = rect.width - x;
      const glareY = rect.height - y;
      card.style.setProperty('--glare-x', `${glareX}px`);
      card.style.setProperty('--glare-y', `${glareY}px`);

      // Gentle luxury tilt
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6.5;
      const rotateY = ((x - centerX) / centerX) * 6.5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
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
          const step = Math.max(1, Math.floor(targetNum / 22));
          const interval = setInterval(() => {
            current += step;
            if (current >= targetNum) {
              current = targetNum;
              clearInterval(interval);
            }
            el.textContent = `${prefix}${current}${suffix}`;
          }, 32);
        }
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  metrics.forEach(m => observer.observe(m));
}

// Interactive Scroll Progress Bar (Top Gold Beam)
function initScrollProgress() {
  const bar = document.getElementById('scrollProgressBar');
  if (!bar) return;
  const updateBar = () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
    bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  };
  window.addEventListener('scroll', updateBar, { passive: true });
  updateBar();
}

// Luxury Custom Cursor & Aura Follower
function initLuxuryCursor() {
  const dot = document.getElementById('cursorDot');
  const aura = document.getElementById('cursorAura');
  if (!dot || !aura || window.matchMedia('(hover: none)').matches) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let auraX = mouseX;
  let auraY = mouseY;
  let isMoving = false;

  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    if (!isMoving) {
      isMoving = true;
      dot.style.opacity = '1';
      aura.style.opacity = '1';
    }
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    aura.style.opacity = '0';
  });

  // Smooth lerp loop for aura
  function animateAura() {
    auraX += (mouseX - auraX) * 0.18;
    auraY += (mouseY - auraY) * 0.18;
    aura.style.transform = `translate(${auraX}px, ${auraY}px)`;
    requestAnimationFrame(animateAura);
  }
  requestAnimationFrame(animateAura);

  // Magnetic & Hover expansion
  const hoverables = document.querySelectorAll('a, button, .filter-btn, .showcase-card, .system-card');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => aura.classList.add('hovered'));
    el.addEventListener('mouseleave', () => aura.classList.remove('hovered'));
  });
}

// Magnetic Button Physics
function initMagneticButtons() {
  if (window.matchMedia('(hover: none)').matches) return;
  const magnetics = document.querySelectorAll('.magnetic-elem');
  magnetics.forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

// Interactive Click Ripple Effect
function initClickRipple() {
  document.addEventListener('click', e => {
    const ripple = document.createElement('span');
    ripple.className = 'click-ripple';
    const size = 60;
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - size / 2}px`;
    ripple.style.top = `${e.clientY - size / 2}px`;
    ripple.style.position = 'fixed';
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 650);
  });
}

// Hero Interactive Gold Particle Constellation Canvas
function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const particleCount = 38;
  let mouse = { x: -1000, y: -1000, radius: 120 };

  function resize() {
    const parent = canvas.parentElement;
    width = canvas.width = parent.offsetWidth;
    height = canvas.height = parent.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    heroSection.addEventListener('mousemove', e => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });
    heroSection.addEventListener('mouseleave', () => {
      mouse.x = -1000;
      mouse.y = -1000;
    });
  }

  // Particle Class
  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 2 + 1.2;
      this.baseAlpha = Math.random() * 0.45 + 0.25;
      this.alpha = this.baseAlpha;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;

      // Mouse interaction
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius) {
        const force = (mouse.radius - dist) / mouse.radius;
        this.x -= (dx / dist) * force * 2.5;
        this.y -= (dy / dist) * force * 2.5;
        this.alpha = Math.min(1, this.baseAlpha + 0.4);
      } else {
        this.alpha = this.baseAlpha;
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(197, 160, 89, ${this.alpha})`;
      ctx.shadowColor = 'rgba(223, 186, 115, 0.6)';
      ctx.shadowBlur = 6;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  let isVisible = true;
  if ('IntersectionObserver' in window && heroSection) {
    const obs = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    obs.observe(heroSection);
  }

  function loop() {
    if (isVisible) {
      ctx.clearRect(0, 0, width, height);

      // Connect lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * 0.16;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(197, 160, 89, ${lineAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Update & draw particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });
    }
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

// Initialize on DOM Ready or immediately if already loaded
function initAll() {
  initPortfolioFilter();
  init3DTilt();
  initScrollReveals();
  initMetricCounters();
  initScrollProgress();
  initLuxuryCursor();
  initMagneticButtons();
  initClickRipple();
  initHeroCanvas();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}




