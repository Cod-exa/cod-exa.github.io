(function(){
  window.PAGE_LANGUAGES=['tr','en','es','de','fr','it','pt-br','ru','ar','hi','id','ja','ko','zh','zh-tw','nl','pl','vi','th','uk','fa'];
  const shared={
    page_title:{tr:'ScreenRecall — CodExa',en:'ScreenRecall — CodExa'},
    back:{tr:'← Portala dön',en:'← Back to portal'},
    privacy:{tr:'Gizlilik Politikası',en:'Privacy Policy'},terms:{tr:'Kullanım Koşulları',en:'Terms of Use'},support:{tr:'Destek ve Yardım',en:'Support & Help'},deletion:{tr:'Hesap ve Veri Silme',en:'Account & Data Deletion'},
    home:{tr:'Uygulamaya dön',en:'Back to app'},legal_kicker:{tr:'CodExa · Yasal ve Destek',en:'CodExa · Legal & Support'},
    legal_desc:{tr:'Şeffaf, okunabilir ve güncel ScreenRecall bilgileri.',en:'Clear, readable, and up-to-date ScreenRecall information.'},
    effective:{tr:'Yürürlük tarihi: 26 Ağustos 2026',en:'Effective date: August 26, 2026'},
    send_email:{tr:'E-posta gönder',en:'Send email'}
  };
  window.PAGE_TRANSLATIONS=Object.assign(shared,window.PAGE_TRANSLATIONS||{});
  function preserveLanguage(){
    const lang=new URLSearchParams(location.search).get('lang'); if(!lang)return;
    document.querySelectorAll('a[href]').forEach(a=>{const href=a.getAttribute('href');if(!href||href.startsWith('#')||href.startsWith('mailto:')||href.startsWith('http'))return;const url=new URL(href,location.href);url.searchParams.set('lang',lang);a.href=url.href;});
  }
  addEventListener('DOMContentLoaded',preserveLanguage);addEventListener('codexa:languagechange',preserveLanguage);
})();
