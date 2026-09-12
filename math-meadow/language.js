/**
 * Math Meadow — Multi-language Engine & i18n Integration
 * Supports all 15 CodExa languages with seamless fallback
 */
(() => {
  const SUPPORTED_LANGS = ['tr','en','de','zh','hi','es','fr','ar','pt','ru','id','bn','ur','ja','ko'];
  const RTL_LANGS = ['ar', 'ur'];

  function normalizeLang(val) {
    if (!val) return null;
    const code = String(val).toLowerCase().split('-')[0];
    return SUPPORTED_LANGS.includes(code) ? code : null;
  }

  function getCurrentLang() {
    const urlParam = normalizeLang(new URLSearchParams(location.search).get('lang'));
    if (urlParam) return urlParam;
    try {
      const stored = normalizeLang(localStorage.getItem('preferred_lang'));
      if (stored) return stored;
    } catch (e) {}
    const nav = normalizeLang(navigator.language || (navigator.languages && navigator.languages[0]));
    if (nav) return nav;
    return 'tr';
  }

  function applyLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) lang = 'en';
    try { localStorage.setItem('preferred_lang', lang); } catch (e) {}

    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? 'rtl' : 'ltr';

    // Toggle content: 'tr' for Turkish, 'en' for all other languages as international fallback
    const targetGroup = lang === 'tr' ? 'tr' : 'en';
    document.querySelectorAll('[data-language]').forEach(el => {
      el.hidden = el.dataset.language !== targetGroup;
    });

    // Update document title & meta description
    const isEn = lang !== 'tr';
    const title = isEn ? (document.body.dataset.titleEn || document.body.dataset.titleTr) : document.body.dataset.titleTr;
    if (title) {
      document.title = `${title} — Math Meadow — CodExa`;
    }
    const desc = isEn ? (document.body.dataset.descEn || document.body.dataset.descTr) : document.body.dataset.descTr;
    if (desc) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', desc);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', desc);
    }

    // Preserve language parameter on all internal navigation links
    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
      if (link.classList.contains('i18n-item')) return;
      try {
        const url = new URL(href, location.href);
        if (url.origin === location.origin) {
          url.searchParams.set('lang', lang);
          link.href = url.href;
        }
      } catch (e) {}
    });
  }

  const initialLang = getCurrentLang();
  applyLanguage(initialLang);

  document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(getCurrentLang());
  });

  window.addEventListener('codexa:languagechange', (e) => {
    if (e && e.detail && e.detail.lang) {
      applyLanguage(e.detail.lang);
    }
  });
})();
