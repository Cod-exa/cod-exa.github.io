(function(){
  const apps={
    '2048':{name:'2048 Hex',icon:'app_icon.jpg',colors:['#eab308','#f97316'],bg:'#17130c'},
    atsatranci:{name:'Knight Tour',icon:'assets/app-icon.jpg',colors:['#f59e0b','#ef4444'],bg:'#120e09'},
    'carpma-oyunu':{name:'Multiplication Game',icon:'assets/app-icon.png',colors:['#14b8a6','#22c55e'],bg:'#071613'},
    classtings:{name:'Classtings',icon:'assets/app-icon.svg',colors:['#6366f1','#10b981'],bg:'#0a1020'},
    'hanoi-kulesi':{name:'Hanoi Tower',icon:'assets/app-icon.jpg',colors:['#d946ef','#f43f5e'],bg:'#160918'},
    hanoikulesi:{name:'Hanoi Tower',icon:'assets/app-icon.jpg',colors:['#d946ef','#f43f5e'],bg:'#160918'},
    kakuro:{name:'Kakuro',icon:'assets/app-icon.jpg',colors:['#10b981','#22c55e'],bg:'#071510'},
    kenken:{name:'KenKen',icon:'assets/app-icon.png',colors:['#6366f1','#a855f7'],bg:'#0b0d1a'},
    magneticmaze:{name:'Magnetic Maze',icon:'assets/app-icon.png',colors:['#37b7ff','#7c3aed'],bg:'#07111d'},
    mangala:{name:'Mangala',icon:'assets/app-icon.svg',colors:['#f59e0b','#ea580c'],bg:'#120d08'},
    nimmaster:{name:'Nim Master',icon:'assets/app-icon.jpg',colors:['#8b5cf6','#d946ef'],bg:'#100a1b'},
    'pixel-garden':{name:'Pixel Garden',icon:'assets/app-icon.svg',colors:['#10b981','#f59e0b'],bg:'#07140f'},
    resonant:{name:'Resonant',icon:'assets/app-icon.jpg',colors:['#38bdf8','#6366f1'],bg:'#07121b'},
    stackingbalance:{name:'Stacking Balance',icon:'assets/app-icon.png',colors:['#5146e5','#7568ff'],bg:'#09091a'},
    'visual-timer':{name:'Visual Timer',icon:'assets/app-icon.jpg',colors:['#ef4444','#f97316'],bg:'#170a0a'}
  };
  const copy={
    tr:{privacy:'Gizlilik Politikası',terms:'Kullanım Koşulları',support:'Destek ve Yardım',home:'Uygulamaya dön',kicker:'CodExa · Yasal ve Destek',desc:'Şeffaf, okunabilir ve güncel uygulama bilgileri.',privacyTab:'Gizlilik',termsTab:'Koşullar',supportTab:'Destek'},
    en:{privacy:'Privacy Policy',terms:'Terms of Use',support:'Support & Help',home:'Back to app',kicker:'CodExa · Legal & Support',desc:'Clear, readable, and up-to-date information about the app.',privacyTab:'Privacy',termsTab:'Terms',supportTab:'Support'}
  };
  const parts=location.pathname.split('/').filter(Boolean),slug=parts.length>1?parts[parts.length-2]:'';
  const app=apps[slug]; if(!app)return;
  const file=(parts[parts.length-1]||'').toLowerCase(),type=file.startsWith('privacy')?'privacy':file.startsWith('terms')?'terms':'support';
  const render=()=>{
    const requested=new URLSearchParams(location.search).get('lang');
    const lang=(requested||document.documentElement.lang||'en').toLowerCase().split('-')[0],t=copy[lang]||copy.en;
    document.querySelectorAll('[data-legal-copy]').forEach(el=>{const key=el.dataset.legalCopy;el.textContent=t[key]||copy.en[key]||''});
  };
  document.body.classList.add('legal-standard');
  document.documentElement.style.setProperty('--legal-accent',app.colors[0]);
  document.documentElement.style.setProperty('--legal-accent-2',app.colors[1]);
  document.documentElement.style.setProperty('--legal-bg',app.bg);
  const css=document.createElement('link');css.rel='stylesheet';css.href='../legal-standard.css?v=20260826';document.head.appendChild(css);
  const hero=document.createElement('header');hero.className='legal-hero';
  hero.innerHTML=`<nav class="legal-nav"><a class="legal-brand" href="index.html"><img src="${app.icon}" alt=""><span>${app.name}</span></a><a class="legal-home" href="index.html" data-legal-copy="home"></a></nav><div class="legal-heading"><div><span class="legal-kicker" data-legal-copy="kicker"></span><h1 data-legal-copy="${type}"></h1><p data-legal-copy="desc"></p></div><div class="legal-app-badge"><span>CodExa application</span><strong>${app.name}</strong></div></div><div class="legal-tabs"><a class="legal-tab ${type==='privacy'?'active':''}" href="privacy.html" data-legal-copy="privacyTab"></a><a class="legal-tab ${type==='terms'?'active':''}" href="terms.html" data-legal-copy="termsTab"></a><a class="legal-tab ${type==='support'?'active':''}" href="support.html" data-legal-copy="supportTab"></a></div>`;
  document.body.prepend(hero);render();
  document.addEventListener('DOMContentLoaded',render);
  addEventListener('codexa:languagechange',render);
})();
