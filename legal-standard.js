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
    screenrecall:{name:'ScreenRecall',icon:'assets/app-icon.svg',colors:['#38bdf8','#8b5cf6'],bg:'#07111d'},
    stackingbalance:{name:'Stacking Balance',icon:'assets/app-icon.png',colors:['#5146e5','#7568ff'],bg:'#09091a'},
    'visual-timer':{name:'Visual Timer',icon:'assets/app-icon.jpg',colors:['#ef4444','#f97316'],bg:'#170a0a'}
  };
  const copy={
    tr:{privacy:'Gizlilik Politikası',terms:'Kullanım Koşulları',support:'Destek ve Yardım',home:'Uygulamaya dön',kicker:'CodExa · Yasal ve Destek',desc:'Şeffaf, okunabilir ve güncel uygulama bilgileri.',privacyTab:'Gizlilik',termsTab:'Koşullar',supportTab:'Destek'},
    en:{privacy:'Privacy Policy',terms:'Terms of Use',support:'Support & Help',home:'Back to app',kicker:'CodExa · Legal & Support',desc:'Clear, readable, and up-to-date information about the app.',privacyTab:'Privacy',termsTab:'Terms',supportTab:'Support'},
    de:{privacy:'Datenschutzerklärung',terms:'Nutzungsbedingungen',support:'Support & Hilfe',home:'Zurück zur App',kicker:'CodExa · Rechtliches & Support',desc:'Klare, verständliche und aktuelle Informationen zur App.',privacyTab:'Datenschutz',termsTab:'Bedingungen',supportTab:'Support'},
    zh:{privacy:'隐私政策',terms:'使用条款',support:'支持与帮助',home:'返回应用',kicker:'CodExa · 法律与支持',desc:'清晰、易读且保持更新的应用信息。',privacyTab:'隐私',termsTab:'条款',supportTab:'支持'},
    hi:{privacy:'गोपनीयता नीति',terms:'उपयोग की शर्तें',support:'सहायता और मदद',home:'ऐप पर वापस जाएँ',kicker:'CodExa · कानूनी और सहायता',desc:'ऐप के बारे में स्पष्ट, पठनीय और अद्यतन जानकारी।',privacyTab:'गोपनीयता',termsTab:'शर्तें',supportTab:'सहायता'},
    es:{privacy:'Política de privacidad',terms:'Términos de uso',support:'Soporte y ayuda',home:'Volver a la aplicación',kicker:'CodExa · Legal y soporte',desc:'Información clara, legible y actualizada sobre la aplicación.',privacyTab:'Privacidad',termsTab:'Términos',supportTab:'Soporte'},
    fr:{privacy:'Politique de confidentialité',terms:"Conditions d’utilisation",support:'Assistance et aide',home:"Retour à l’application",kicker:'CodExa · Mentions légales et assistance',desc:"Informations claires, lisibles et à jour sur l’application.",privacyTab:'Confidentialité',termsTab:'Conditions',supportTab:'Assistance'},
    ar:{privacy:'سياسة الخصوصية',terms:'شروط الاستخدام',support:'الدعم والمساعدة',home:'العودة إلى التطبيق',kicker:'CodExa · الشؤون القانونية والدعم',desc:'معلومات واضحة ومقروءة ومحدثة حول التطبيق.',privacyTab:'الخصوصية',termsTab:'الشروط',supportTab:'الدعم'},
    pt:{privacy:'Política de Privacidade',terms:'Termos de Uso',support:'Suporte e Ajuda',home:'Voltar ao aplicativo',kicker:'CodExa · Legal e Suporte',desc:'Informações claras, legíveis e atualizadas sobre o aplicativo.',privacyTab:'Privacidade',termsTab:'Termos',supportTab:'Suporte'},
    ru:{privacy:'Политика конфиденциальности',terms:'Условия использования',support:'Поддержка и помощь',home:'Вернуться в приложение',kicker:'CodExa · Правовая информация и поддержка',desc:'Понятная, удобная и актуальная информация о приложении.',privacyTab:'Конфиденциальность',termsTab:'Условия',supportTab:'Поддержка'},
    id:{privacy:'Kebijakan Privasi',terms:'Ketentuan Penggunaan',support:'Dukungan & Bantuan',home:'Kembali ke aplikasi',kicker:'CodExa · Legal & Dukungan',desc:'Informasi aplikasi yang jelas, mudah dibaca, dan terkini.',privacyTab:'Privasi',termsTab:'Ketentuan',supportTab:'Dukungan'},
    bn:{privacy:'গোপনীয়তা নীতি',terms:'ব্যবহারের শর্তাবলি',support:'সহায়তা ও সমর্থন',home:'অ্যাপে ফিরে যান',kicker:'CodExa · আইনি ও সহায়তা',desc:'অ্যাপ সম্পর্কে পরিষ্কার, পাঠযোগ্য ও হালনাগাদ তথ্য।',privacyTab:'গোপনীয়তা',termsTab:'শর্তাবলি',supportTab:'সহায়তা'},
    ur:{privacy:'رازداری کی پالیسی',terms:'استعمال کی شرائط',support:'مدد اور معاونت',home:'ایپ پر واپس جائیں',kicker:'CodExa · قانونی اور معاونت',desc:'ایپ کے بارے میں واضح، قابلِ مطالعہ اور تازہ معلومات۔',privacyTab:'رازداری',termsTab:'شرائط',supportTab:'معاونت'},
    ja:{privacy:'プライバシーポリシー',terms:'利用規約',support:'サポートとヘルプ',home:'アプリに戻る',kicker:'CodExa · 法務とサポート',desc:'アプリに関する明確で読みやすい最新情報。',privacyTab:'プライバシー',termsTab:'利用規約',supportTab:'サポート'},
    ko:{privacy:'개인정보 처리방침',terms:'이용 약관',support:'지원 및 도움말',home:'앱으로 돌아가기',kicker:'CodExa · 법률 및 지원',desc:'앱에 대한 명확하고 읽기 쉬운 최신 정보입니다.',privacyTab:'개인정보',termsTab:'약관',supportTab:'지원'}
  };
  const fallbackBodies={
    en:{privacy:'<section><h2>Privacy and data</h2><p>This app stores the information required for its core features and does not directly collect sensitive personal information. Local progress may be removed when app data is cleared.</p></section><section><h2>Third-party services</h2><p>Google Play services may process technical data for distribution, advertising, purchases, or error reporting under their own privacy policies.</p></section><section><h2>Contact</h2><p>Privacy questions can be sent to <a href="mailto:exaque2@gmail.com">exaque2@gmail.com</a>.</p></section>',terms:'<section><h2>Acceptance and use</h2><p>By downloading or using this app, you agree to these terms. The app is provided for personal, non-commercial use.</p></section><section><h2>Intellectual property</h2><p>The software, design, graphics, and other app content belong to CodExa and may not be copied, distributed, or reverse engineered without permission.</p></section><section><h2>Contact</h2><p>Questions can be sent to <a href="mailto:exaque2@gmail.com">exaque2@gmail.com</a>.</p></section>',support:'<section><h2>How can we help?</h2><p>Contact us about technical issues, feedback, or privacy and data requests related to this app.</p></section><section><h2>Contact</h2><p>Email our support team at <a href="mailto:exaque2@gmail.com">exaque2@gmail.com</a>.</p></section>'},
    de:{privacy:'<section><h2>Datenschutz und Daten</h2><p>Diese App speichert nur die für ihre Kernfunktionen erforderlichen Informationen und erhebt nicht direkt sensible personenbezogene Daten. Lokaler Spielfortschritt kann beim Löschen der App-Daten verloren gehen.</p></section><section><h2>Dienste von Drittanbietern</h2><p>Google-Play-Dienste können technische Daten für Bereitstellung, Werbung, Käufe oder Fehlerberichte gemäß ihren eigenen Datenschutzrichtlinien verarbeiten.</p></section><section><h2>Kontakt</h2><p>Datenschutzfragen können an <a href="mailto:exaque2@gmail.com">exaque2@gmail.com</a> gesendet werden.</p></section>',terms:'<section><h2>Annahme und Nutzung</h2><p>Durch das Herunterladen oder Verwenden dieser App stimmen Sie diesen Bedingungen zu. Die App wird für die persönliche, nicht kommerzielle Nutzung bereitgestellt.</p></section><section><h2>Geistiges Eigentum</h2><p>Software, Design, Grafiken und andere App-Inhalte gehören CodExa und dürfen ohne Genehmigung nicht kopiert, verbreitet oder zurückentwickelt werden.</p></section><section><h2>Kontakt</h2><p>Fragen können an <a href="mailto:exaque2@gmail.com">exaque2@gmail.com</a> gesendet werden.</p></section>',support:'<section><h2>Wie können wir helfen?</h2><p>Kontaktieren Sie uns bei technischen Problemen, Feedback sowie Datenschutz- oder Datenanfragen zu dieser App.</p></section><section><h2>Kontakt</h2><p>Unser Support-Team erreichen Sie unter <a href="mailto:exaque2@gmail.com">exaque2@gmail.com</a>.</p></section>'}
  };
  const parts=location.pathname.split('/').filter(Boolean),slug=parts.length>1?parts[parts.length-2]:'';
  const app=apps[slug]; if(!app)return;
  const file=(parts[parts.length-1]||'').toLowerCase(),type=file.startsWith('privacy')?'privacy':file.startsWith('terms')?'terms':'support';
  const contentMain=document.querySelector('main')||document.querySelector('.document')||document.querySelector('.container'),originalMain=contentMain?contentMain.innerHTML:'';
  const render=()=>{
    const requested=new URLSearchParams(location.search).get('lang');
    const lang=(requested||document.documentElement.lang||'en').toLowerCase().split('-')[0],t=copy[lang]||copy.en;
    document.documentElement.lang=lang;
    document.documentElement.dir=['ar','ur'].includes(lang)?'rtl':'ltr';
    document.querySelectorAll('[data-legal-copy]').forEach(el=>{const key=el.dataset.legalCopy;el.textContent=t[key]||copy.en[key]||''});
    const translations=window.PAGE_TRANSLATIONS;
    const hasSelectedTranslation=translations&&Object.values(translations).some(value=>value&&typeof value==='object'&&value[lang]);
    if(lang!=='tr'&&!hasSelectedTranslation){
      const main=contentMain;
      const bodyCopy=fallbackBodies[lang]||fallbackBodies.en;
      if(main&&bodyCopy[type]&&document.body.dataset.legalFallback!==lang){main.innerHTML=bodyCopy[type];document.body.dataset.legalFallback=lang;}
    }else if(contentMain&&document.body.dataset.legalFallback){
      contentMain.innerHTML=originalMain;delete document.body.dataset.legalFallback;
    }
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
