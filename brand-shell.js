(function () {
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
    const items = products.filter(item => item[4] === status).map(item => `<a class="cx-product" href="${root}${item[3]}"><i>${item[0]}</i><span><strong>${item[1]}</strong><small>${item[2]}${status === 'soon' ? ' · Yakında' : ''}</small></span><em>→</em></a>`).join('');
    return `<div class="cx-group"><div class="cx-group-label"><span>${label}</span><b>${products.filter(item => item[4] === status).length}</b></div><div class="cx-product-list">${items}</div></div>`;
  };
  const bar = document.createElement('nav');
  bar.className = 'cx-brandbar';
  bar.setAttribute('aria-label', 'CodExa navigasyon');
  bar.innerHTML = `<div class="cx-brandbar-inner"><a class="cx-brand" href="${root}index.html"><span class="cx-mark">C</span>CodExa</a><div class="cx-nav"><a href="${root}index.html#cozumler">Çözümler</a><button class="cx-products-open" type="button">Tüm ürünler</button><a class="cx-home" href="${root}index.html">Ana sayfa</a></div></div>`;
  document.body.prepend(bar);
  document.querySelectorAll('.back-btn,.topbar,.navbar,body footer').forEach(element => element.classList.add('cx-native-back'));
  const overlay = document.createElement('div');
  overlay.className = 'cx-overlay';
  const drawer = document.createElement('aside');
  drawer.className = 'cx-drawer';
  drawer.setAttribute('aria-hidden', 'true');
  drawer.setAttribute('aria-labelledby', 'cxDrawerTitle');
  drawer.innerHTML = `<div class="cx-drawer-head"><div><span class="cx-kicker">CodExa ekosistemi</span><h2 id="cxDrawerTitle">Ürünler</h2></div><button class="cx-close" type="button" aria-label="Ürünleri kapat">×</button></div><p class="cx-intro">Öğrenme, problem çözme ve odaklanma için geliştirdiğimiz deneyimleri keşfedin.</p>${makeGroup('Yayındaki ürünler','live')}${makeGroup('Geliştirilmekte','soon')}`;
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
