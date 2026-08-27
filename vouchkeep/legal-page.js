(function () {
  function render() {
    const raw = (new URLSearchParams(location.search).get('lang') || document.documentElement.lang || 'en').toLowerCase();
    const language = raw === 'tr' || raw.startsWith('tr-') ? 'tr' : 'en';
    document.querySelectorAll('.legal-body').forEach((element) => {
      element.hidden = element.dataset.lang !== language;
    });
  }

  addEventListener('DOMContentLoaded', render);
  addEventListener('codexa:languagechange', render);
  render();
})();
