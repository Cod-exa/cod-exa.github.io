(function(){
  function render(){const raw=(new URLSearchParams(location.search).get('lang')||document.documentElement.lang||'en').toLowerCase();const isTurkish=raw==='tr'||raw.startsWith('tr-');document.querySelectorAll('.legal-body').forEach(el=>el.hidden=el.dataset.lang!==(isTurkish?'tr':'en'));}
  addEventListener('DOMContentLoaded',render);addEventListener('codexa:languagechange',render);render();
})();
