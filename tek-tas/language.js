/**
 * Tek Taş page language behavior.
 * The shared picker dispatches `codexa:languagechange`; this file applies page-local content and metadata.
 */
(() => {
  const SUPPORTED_LANGS = ['tr', 'en', 'de', 'zh', 'hi', 'es', 'fr', 'ar', 'pt', 'ru', 'id', 'bn', 'ur', 'ja', 'ko'];
  const RTL_LANGS = new Set(['ar', 'ur']);
  const HOME_PATH = /\/tek-tas\/(?:index\.html)?$/;

  function normalizeLang(value) {
    if (!value) return null;
    const code = String(value).toLowerCase().replace('_', '-').split('-')[0];
    return SUPPORTED_LANGS.includes(code) ? code : null;
  }

  function getCurrentLang() {
    const requested = normalizeLang(new URLSearchParams(location.search).get('lang'));
    if (requested) return requested;
    try {
      const saved = normalizeLang(localStorage.getItem('preferred_lang'));
      if (saved) return saved;
    } catch (error) {}
    return normalizeLang(navigator.language || navigator.languages?.[0]) || 'tr';
  }

  function syncLanguagePicker() {
    const button = document.querySelector('.i18n-btn');
    const menu = document.querySelector('.i18n-menu');
    if (!button || !menu) return;

    if (!menu.id) menu.id = 'tek-tas-language-menu';
    button.setAttribute('aria-haspopup', 'menu');
    button.setAttribute('aria-controls', menu.id);
    button.setAttribute('aria-expanded', String(menu.classList.contains('show')));
    menu.setAttribute('role', 'menu');
    menu.setAttribute('aria-label', document.documentElement.lang === 'tr' ? 'Dil seçimi' : 'Choose a language');
    menu.querySelectorAll('.i18n-item').forEach(item => {
      item.setAttribute('role', 'menuitemradio');
      item.setAttribute('aria-checked', String(item.classList.contains('active')));
    });
  }

  function installLanguagePickerAccessibility() {
    const button = document.querySelector('.i18n-btn');
    const menu = document.querySelector('.i18n-menu');
    if (!button || !menu) return;

    syncLanguagePicker();
    new MutationObserver(syncLanguagePicker).observe(menu, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ['class']
    });
    button.addEventListener('click', () => requestAnimationFrame(syncLanguagePicker));
    menu.addEventListener('click', () => requestAnimationFrame(syncLanguagePicker));
    document.addEventListener('keydown', event => {
      if (event.key !== 'Escape' || !menu.classList.contains('show')) return;
      menu.classList.remove('show');
      syncLanguagePicker();
      button.focus();
    });
  }

  function applyLanguage(value) {
    const lang = normalizeLang(value) || 'en';
    try { localStorage.setItem('preferred_lang', lang); } catch (error) {}

    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.has(lang) ? 'rtl' : 'ltr';

    const targetGroup = lang === 'tr' ? 'tr' : 'en';
    document.querySelectorAll('[data-language]').forEach(element => {
      element.hidden = element.dataset.language !== targetGroup;
    });

    const productNames = window.PAGE_TRANSLATIONS?.tek_tas_legal_marker || {};
    const productName = productNames[lang] || productNames.en || 'Peg Solitaire Maht Game';
    const pageName = lang === 'tr'
      ? document.body.dataset.titleTr
      : document.body.dataset.titleEn;
    const title = HOME_PATH.test(location.pathname)
      ? `${productName} — CodExa`
      : `${pageName || productName} — ${productName} — CodExa`;
    document.title = title;

    const isTurkish = lang === 'tr';
    const description = isTurkish
      ? (document.body.dataset.descTr || document.body.dataset.descEn)
      : (document.body.dataset.descEn || document.body.dataset.descTr);
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description);
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    }
    if (HOME_PATH.test(location.pathname)) {
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    }

    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || link.classList.contains('i18n-item')) return;
      try {
        const url = new URL(href, location.href);
        if (url.origin === location.origin) {
          url.searchParams.set('lang', lang);
          link.href = url.href;
        }
      } catch (error) {}
    });

    syncLanguagePicker();
  }

  applyLanguage(getCurrentLang());
  document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(getCurrentLang());
    installLanguagePickerAccessibility();
  });
  window.addEventListener('codexa:languagechange', event => {
    if (event.detail?.lang) applyLanguage(event.detail.lang);
  });
})();
