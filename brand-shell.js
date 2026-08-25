(function () {
  const shellTranslations = {
    cx_solutions:{tr:'Çözümler',en:'Solutions',de:'Lösungen',zh:'解决方案',hi:'समाधान',es:'Soluciones',fr:'Solutions',ar:'الحلول',pt:'Soluções',ru:'Решения',id:'Solusi',bn:'সমাধান',ur:'حل',ja:'ソリューション',ko:'솔루션'},
    cx_all_products:{tr:'Tüm ürünler',en:'All products',de:'Alle Produkte',zh:'全部产品',hi:'सभी उत्पाद',es:'Todos los productos',fr:'Tous les produits',ar:'كل المنتجات',pt:'Todos os produtos',ru:'Все продукты',id:'Semua produk',bn:'সব পণ্য',ur:'تمام مصنوعات',ja:'すべての製品',ko:'모든 제품'},
    cx_home:{tr:'Ana sayfa',en:'Home',de:'Startseite',zh:'首页',hi:'मुखपृष्ठ',es:'Inicio',fr:'Accueil',ar:'الرئيسية',pt:'Início',ru:'Главная',id:'Beranda',bn:'হোম',ur:'صفحۂ اول',ja:'ホーム',ko:'홈'},
    cx_products:{tr:'Ürünler',en:'Products',de:'Produkte',zh:'产品',hi:'उत्पाद',es:'Productos',fr:'Produits',ar:'المنتجات',pt:'Produtos',ru:'Продукты',id:'Produk',bn:'পণ্য',ur:'مصنوعات',ja:'製品',ko:'제품'},
    cx_intro:{tr:'Öğrenme, problem çözme ve odaklanma için geliştirdiğimiz deneyimleri keşfedin.',en:'Explore experiences designed for learning, problem solving, and focus.',de:'Entdecken Sie Erlebnisse für Lernen, Problemlösung und Fokus.',zh:'探索专为学习、解决问题与专注力打造的体验。',hi:'सीखने, समस्या समाधान और फोकस के लिए बनाए अनुभव खोजें।',es:'Descubre experiencias para aprender, resolver problemas y concentrarte.',fr:'Découvrez des expériences pour apprendre, résoudre et se concentrer.',ar:'اكتشف تجارب للتعلّم وحل المشكلات والتركيز.',pt:'Explore experiências para aprender, resolver problemas e manter o foco.',ru:'Откройте решения для обучения, задач и концентрации.',id:'Jelajahi pengalaman untuk belajar, memecahkan masalah, dan fokus.',bn:'শেখা, সমস্যা সমাধান ও মনোযোগের অভিজ্ঞতা আবিষ্কার করুন।',ur:'سیکھنے، مسئلہ حل کرنے اور توجہ کے تجربات دریافت کریں۔',ja:'学習・問題解決・集中のための体験をご覧ください。',ko:'학습, 문제 해결, 집중을 위한 경험을 만나보세요.'},
    cx_published:{tr:'Yayındaki ürünler',en:'Published products',de:'Veröffentlichte Produkte',zh:'已发布产品',hi:'प्रकाशित उत्पाद',es:'Productos publicados',fr:'Produits publiés',ar:'المنتجات المنشورة',pt:'Produtos publicados',ru:'Опубликованные продукты',id:'Produk tersedia',bn:'প্রকাশিত পণ্য',ur:'شائع شدہ مصنوعات',ja:'公開中の製品',ko:'출시 제품'},
    cx_developing:{tr:'Geliştirilmekte',en:'In development',de:'In Entwicklung',zh:'开发中',hi:'विकास में',es:'En desarrollo',fr:'En développement',ar:'قيد التطوير',pt:'Em desenvolvimento',ru:'В разработке',id:'Dalam pengembangan',bn:'উন্নয়নাধীন',ur:'زیرِ تیاری',ja:'開発中',ko:'개발 중'}
  };
  window.PAGE_TRANSLATIONS = Object.assign(window.PAGE_TRANSLATIONS || {}, shellTranslations);
  const products = [
    ['2','2048 - Sayı Bulmaca Oyunu','Sayı & strateji','2048/index.html','live'],
    ['A','At Satrancı: Zeka Oyunu','Strateji & uzamsal düşünme','atsatranci/index.html','live'],
    ['Ç','Çarpım Tablosu','Matematik pratiği','carpma-oyunu/index.html','live'],
    ['+','Kakuro','Sayı bulmacası','kakuro/index.html','live'],
    ['K','KenKen Logic: Zeka Bulmaca','Matematik & mantık','kenken/index.html','live'],
    ['V','Görsel Zamanlayıcı: Odak','Odak & zaman yönetimi','visual-timer/index.html','live'],
    ['N','Nim Master','Stratejik düşünme','nimmaster/index.html','live'],
    ['M','Mangala Oyunu','Geleneksel strateji','mangala/index.html','live'],
    ['H','Hanoi Tower: Temple Puzzle','Mantık & problem çözme','hanoikulesi/index.html','live'],
    ['A','At Satrancı','Klasik strateji oyunu','atsatranci/index.html','live'],
    ['S','Stacking Balance','Fizik & denge','stackingbalance/index.html','live'],
    ['C','Classtings','Eğitim yönetimi','classtings/index.html','soon'],
    ['P','Pixel Garden','Yaratıcı deneyim','pixel-garden/index.html','soon'],
    ['R','Resonant','Odak & nefes','resonant/index.html','soon'],
    ['M','Magnetic Maze','Fizik bulmacası','magneticmaze/index.html','soon']
  ];
  const root = location.pathname.split('/').filter(Boolean).length > 1 ? '../' : '';
  const makeGroup = (label, status) => {
    const items = products.filter(item => item[4] === status).map(item => `<a class="cx-product" href="${root}${item[3]}"><i>${item[0]}</i><span><strong>${item[1]}</strong></span><em>→</em></a>`).join('');
    return `<div class="cx-group"><div class="cx-group-label"><span data-i18n="${status === 'live' ? 'cx_published' : 'cx_developing'}">${label}</span><b>${products.filter(item => item[4] === status).length}</b></div><div class="cx-product-list">${items}</div></div>`;
  };
  const bar = document.createElement('nav');
  bar.className = 'cx-brandbar';
  bar.setAttribute('aria-label', 'CodExa navigasyon');
  bar.innerHTML = `<div class="cx-brandbar-inner"><a class="cx-brand" href="${root}index.html"><span class="cx-mark">C</span>CodExa</a><div class="cx-nav"><a href="${root}index.html#cozumler" data-i18n="cx_solutions">Çözümler</a><button class="cx-products-open" type="button" data-i18n="cx_all_products">Tüm ürünler</button><a class="cx-home" href="${root}index.html" data-i18n="cx_home">Ana sayfa</a></div></div>`;
  document.body.prepend(bar);
  document.querySelectorAll('.back-btn,.topbar,.navbar,body footer').forEach(element => element.classList.add('cx-native-back'));
  const overlay = document.createElement('div');
  overlay.className = 'cx-overlay';
  const drawer = document.createElement('aside');
  drawer.className = 'cx-drawer';
  drawer.setAttribute('aria-hidden', 'true');
  drawer.setAttribute('aria-labelledby', 'cxDrawerTitle');
  drawer.innerHTML = `<div class="cx-drawer-head"><div><span class="cx-kicker">CodExa ecosystem</span><h2 id="cxDrawerTitle" data-i18n="cx_products">Ürünler</h2></div><button class="cx-close" type="button" aria-label="Close products">×</button></div><p class="cx-intro" data-i18n="cx_intro">Öğrenme, problem çözme ve odaklanma için geliştirdiğimiz deneyimleri keşfedin.</p>${makeGroup('Yayındaki ürünler','live')}${makeGroup('Geliştirilmekte','soon')}`;
  document.body.append(overlay, drawer);
  const footer = document.createElement('footer');
  footer.className = 'cx-site-footer';
  footer.innerHTML = `<div class="cx-footer-inner"><span>© ${new Date().getFullYear()} CodExa · Eğitim için tasarlandı.</span><div class="cx-footer-links"><a href="${root}index.html">Ana sayfa</a><a href="mailto:exaque2@gmail.com">İletişim</a><a href="${root}privacy_policy.html">Gizlilik</a></div></div>`;
  document.body.append(footer);
  const opener = bar.querySelector('.cx-products-open');
  const close = () => { drawer.classList.remove('cx-open'); overlay.classList.remove('cx-open'); drawer.setAttribute('aria-hidden','true'); document.body.classList.remove('cx-drawer-active'); opener.focus(); };
  opener.addEventListener('click', () => { drawer.classList.add('cx-open'); overlay.classList.add('cx-open'); drawer.setAttribute('aria-hidden','false'); document.body.classList.add('cx-drawer-active'); drawer.querySelector('.cx-close').focus(); });
  drawer.querySelector('.cx-close').addEventListener('click', close);
  overlay.addEventListener('click', close);
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && drawer.classList.contains('cx-open')) close(); });
  addEventListener('scroll', () => bar.classList.toggle('cx-scrolled', scrollY > 10), { passive: true });
})();
