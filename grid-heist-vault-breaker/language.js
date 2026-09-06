/* Progressive enhancement: both language versions remain readable without JS. */
(() => {
  const lang = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'tr';
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-language]').forEach(element => {
    element.hidden = element.dataset.language !== lang;
  });
  document.querySelectorAll('.languages a').forEach(link => {
    if (link.lang === lang) link.setAttribute('aria-current', 'true');
  });
  document.querySelectorAll('a[href]').forEach(link => {
    if (link.closest('.languages') || link.getAttribute('href').startsWith('#')) return;
    const url = new URL(link.getAttribute('href'), location.href);
    if (url.origin === location.origin && url.pathname.endsWith('.html')) {
      url.searchParams.set('lang', lang);
      link.href = url.href;
    }
  });
  const title = lang === 'en' ? document.body.dataset.titleEn : document.body.dataset.titleTr;
  document.title = `${title} — Grid Heist Vault Breaker — CodExa`;
})();
