/**
 * Premium i18n Internationalization Framework
 * Developed for Erdinç TOPAL (CodExa)
 * Supports 15 languages: EN, TR, ZH, HI, ES, FR, AR, PT, RU, DE, ID, BN, UR, JA, KO
 */

(function () {
  const LANGUAGES = {
    'tr': { name: 'Türkçe', flag: '🇹🇷', dir: 'ltr' },
    'en': { name: 'English', flag: '🇺🇸', dir: 'ltr' },
    'de': { name: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
    'zh': { name: '简体中文', flag: '🇨🇳', dir: 'ltr' },
    'hi': { name: 'हिन्दी', flag: '🇮🇳', dir: 'ltr' },
    'es': { name: 'Español', flag: '🇪🇸', dir: 'ltr' },
    'fr': { name: 'Français', flag: '🇫🇷', dir: 'ltr' },
    'ar': { name: 'العربية', flag: '🇸🇦', dir: 'rtl' },
    'pt': { name: 'Português', flag: '🇵🇹', dir: 'ltr' },
    'ru': { name: 'Русский', flag: '', dir: 'ltr' },
    'id': { name: 'Bahasa Indonesia', flag: '', dir: 'ltr' },
    'bn': { name: 'বাংলা', flag: '', dir: 'ltr' },
    'ur': { name: 'اردو', flag: '', dir: 'rtl' },
    'ja': { name: '日本語', flag: '', dir: 'ltr' },
    'ko': { name: '한국어', flag: '', dir: 'ltr' }
    ,'it': { name: 'Italiano', flag: '', dir: 'ltr' }
    ,'pt-br': { name: 'Português (Brasil)', flag: '', dir: 'ltr' }
    ,'zh-tw': { name: '繁體中文', flag: '', dir: 'ltr' }
    ,'nl': { name: 'Nederlands', flag: '', dir: 'ltr' }
    ,'pl': { name: 'Polski', flag: '', dir: 'ltr' }
    ,'vi': { name: 'Tiếng Việt', flag: '', dir: 'ltr' }
    ,'th': { name: 'ไทย', flag: '', dir: 'ltr' }
    ,'uk': { name: 'Українська', flag: '', dir: 'ltr' }
    ,'fa': { name: 'فارسی', flag: '', dir: 'rtl' }
  };

  function normalizeLanguage(value) {
    const code = String(value || '').toLowerCase().replace('_', '-');
    if (code === 'pt-br') return 'pt-br';
    if (code === 'zh-tw' || code === 'zh-hant' || code.startsWith('zh-hant-')) return 'zh-tw';
    return code.split('-')[0];
  }

  // 1. Language Detection & Initialization
  function getPreferredLanguage() {
    const requested = new URLSearchParams(window.location.search).get('lang');
    if (requested) {
      const normalized = normalizeLanguage(requested);
      if (LANGUAGES[normalized]) return normalized;
    }
    // Check saved choice
    const saved = localStorage.getItem('preferred_lang');
    if (saved && LANGUAGES[saved]) {
      return saved;
    }

    // Check browser language
    const browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage || 'en'];
    for (const candidate of browserLanguages) {
      const browserLang = normalizeLanguage(candidate);
      if (LANGUAGES[browserLang]) return browserLang;
    }

    return 'en'; // Global fallback
  }

  let currentLang = getPreferredLanguage();

  // 2. CSS Injector for the Premium Floating Widget
  function injectWidgetStyles() {
    const css = `
      .i18n-widget-container {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        font-family: 'Outfit', 'Inter', sans-serif;
      }
      .i18n-widget-container.in-nav { position: static; }
      .i18n-dropdown {
        position: relative;
        display: inline-block;
      }
      .i18n-btn {
        background: rgba(18, 17, 36, 0.85);
        border: 1.5px solid rgba(212, 160, 23, 0.4);
        color: #e8d7b3;
        padding: 8px 16px;
        border-radius: 12px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 8px;
        backdrop-filter: blur(10px);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
      }
      .i18n-btn:hover {
        border-color: #F0C040;
        color: #ffffff;
        box-shadow: 0 6px 20px rgba(212, 160, 23, 0.25);
        transform: translateY(-1px);
      }
      .i18n-menu {
        position: absolute;
        top: calc(100% + 8px);
        right: 0;
        background: #121124;
        border: 1.5px solid rgba(212, 160, 23, 0.3);
        border-radius: 14px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
        width: 170px;
        max-height: 320px;
        overflow-y: auto;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-10px);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        padding: 6px;
      }
      .i18n-menu.show {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
      .i18n-menu::-webkit-scrollbar {
        width: 6px;
      }
      .i18n-menu::-webkit-scrollbar-thumb {
        background: rgba(212, 160, 23, 0.2);
        border-radius: 10px;
      }
      .i18n-menu::-webkit-scrollbar-thumb:hover {
        background: rgba(212, 160, 23, 0.4);
      }
      .i18n-item {
        width: 100%;
        background: transparent;
        border: none;
        color: #9ca3af;
        padding: 8px 12px;
        text-align: left;
        border-radius: 8px;
        font-size: 13.5px;
        font-weight: 500;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 10px;
        transition: all 0.2s ease;
      }
      .i18n-item:hover {
        background: rgba(212, 160, 23, 0.08);
        color: #F0C040;
      }
      .i18n-item.active {
        background: rgba(212, 160, 23, 0.15);
        color: #ffffff;
        font-weight: 700;
        border: 1px solid rgba(212, 160, 23, 0.25);
      }
      
      /* RTL overrides for layout */
      html[dir="rtl"] .i18n-widget-container {
        right: auto;
        left: 20px;
      }
      html[dir="rtl"] .i18n-menu {
        right: auto;
        left: 0;
      }
      html[dir="rtl"] .i18n-item {
        text-align: right;
        flex-direction: row-reverse;
      }

      /* Translation Transition Fade */
      .i18n-fade {
        transition: opacity 0.25s ease-in-out;
        opacity: 0;
      }
    `;
    const style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);
  }

  // 3. Translate Dynamic Elements
  function applyTranslations(lang) {
    const translations = window.PAGE_TRANSLATIONS;
    const config = LANGUAGES[lang];
    document.documentElement.dir = config.dir;
    document.documentElement.lang = lang;
    if (!translations) return;

    // Smooth transition
    document.body.style.opacity = '0.9';
    
    // 1. Text elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[key]) {
        el.innerHTML = translations[key][lang] || translations[key].en || translations[key].tr || el.innerHTML;
      }
    });

    // 2. Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[key]) {
        el.setAttribute('placeholder', translations[key][lang] || translations[key].en || translations[key].tr || el.getAttribute('placeholder'));
      }
    });

    // 3. Document Title
    if (translations['page_title']) {
      document.title = translations['page_title'][lang] || translations['page_title'].en || translations['page_title'].tr || document.title;
    }

    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 100);
  }

  // 4. Widget Builder
  function createWidget() {
    const container = document.createElement('div');
    container.className = 'i18n-widget-container';

    const dropdown = document.createElement('div');
    dropdown.className = 'i18n-dropdown';

    const btn = document.createElement('button');
    btn.className = 'i18n-btn';
    btn.innerHTML = `<span>${LANGUAGES[currentLang].name}</span>`;
    dropdown.appendChild(btn);

    const menu = document.createElement('div');
    menu.className = 'i18n-menu';

    // Populate Menu
    const enabledLanguages = Array.isArray(window.PAGE_LANGUAGES) ? window.PAGE_LANGUAGES.map(normalizeLanguage).filter(code => LANGUAGES[code]) : Object.keys(LANGUAGES);
    enabledLanguages.forEach(langCode => {
      const item = document.createElement('button');
      item.className = `i18n-item ${langCode === currentLang ? 'active' : ''}`;
      item.textContent = LANGUAGES[langCode].name;
      item.onclick = function (e) {
        e.stopPropagation();
        if (langCode === currentLang) return;
        
        currentLang = langCode;
        localStorage.setItem('preferred_lang', langCode);
        const url = new URL(window.location.href);
        url.searchParams.set('lang', langCode);
        history.replaceState(null, '', url);
        
        // Update widget button
        btn.innerHTML = `<span>${LANGUAGES[langCode].name}</span>`;
        
        // Update active class
        menu.querySelectorAll('.i18n-item').forEach(btn => btn.classList.remove('active'));
        item.classList.add('active');
        
        // Apply translations
        applyTranslations(langCode);
        window.dispatchEvent(new CustomEvent('codexa:languagechange', { detail: { lang: langCode } }));
        
        // Close menu
        menu.classList.remove('show');
      };
      menu.appendChild(item);
    });

    dropdown.appendChild(menu);
    container.appendChild(dropdown);
    const navHost = document.querySelector('.cx-nav') || document.querySelector('.nav-inner');
    if (navHost) {
      container.classList.add('in-nav');
      navHost.appendChild(container);
    } else {
      document.body.appendChild(container);
    }

    // Toggle menu dropdown
    btn.onclick = function (e) {
      e.stopPropagation();
      menu.classList.toggle('show');
    };

    // Close when clicking outside
    document.addEventListener('click', function () {
      menu.classList.remove('show');
    });
  }

  // 5. Initialize i18n
  document.addEventListener('DOMContentLoaded', () => {
    // Force transition styling on body
    document.body.style.transition = 'opacity 0.25s ease-in-out';
    
    injectWidgetStyles();
    createWidget();
    applyTranslations(currentLang);
  });
})();
