(function () {
  window.PAGE_LANGUAGES = ['tr', 'en', 'de', 'zh', 'hi', 'es', 'fr', 'ar', 'pt', 'ru', 'id', 'bn', 'ur', 'ja', 'ko'];

  const shared = {
    all_products: {
      tr: 'Tüm ürünler ↗', en: 'All products ↗', de: 'Alle Produkte ↗', zh: '所有产品 ↗', hi: 'सभी उत्पाद ↗',
      es: 'Todos los productos ↗', fr: 'Tous les produits ↗', ar: 'جميع المنتجات ↗', pt: 'Todos os produtos ↗',
      ru: 'Все продукты ↗', id: 'Semua produk ↗', bn: 'সব পণ্য ↗', ur: 'تمام پروڈکٹس ↗', ja: 'すべての製品 ↗', ko: '모든 제품 ↗'
    },
    nav_app: {
      tr: 'Oyun', en: 'Game', de: 'Spiel', zh: '游戏', hi: 'गेम', es: 'Juego', fr: 'Jeu',
      ar: 'اللعبة', pt: 'Jogo', ru: 'Игра', id: 'Game', bn: 'গেম', ur: 'کھیل', ja: 'ゲーム', ko: '게임'
    },
    nav_privacy: {
      tr: 'Gizlilik', en: 'Privacy', de: 'Datenschutz', zh: '隐私', hi: 'गोपनीयता', es: 'Privacidad', fr: 'Confidentialité',
      ar: 'الخصوصية', pt: 'Privacidade', ru: 'Конфиденциальность', id: 'Privasi', bn: 'গোপনীয়তা', ur: 'رازداری', ja: 'プライバシー', ko: '개인정보'
    },
    nav_terms: {
      tr: 'Koşullar', en: 'Terms', de: 'Bedingungen', zh: '条款', hi: 'शर्तें', es: 'Términos', fr: 'Conditions',
      ar: 'الشروط', pt: 'Termos', ru: 'Условия', id: 'Ketentuan', bn: 'শর্তাবলি', ur: 'شرائط', ja: '利用規約', ko: '약관'
    },
    nav_support: {
      tr: 'Destek', en: 'Support', de: 'Support', zh: '支持', hi: 'सहायता', es: 'Soporte', fr: 'Assistance',
      ar: 'الدعم', pt: 'Suporte', ru: 'Поддержка', id: 'Dukungan', bn: 'সহায়তা', ur: 'معاونت', ja: 'サポート', ko: '지원'
    },
    nav_deletion: {
      tr: 'Veri ve ilerleme sıfırlama', en: 'Data & progress reset', de: 'Daten & Fortschritt zurücksetzen', zh: '数据与进度重置', hi: 'डेटा और प्रगति रीसेट',
      es: 'Restablecer datos y progreso', fr: 'Réinitialisation des données', ar: 'إعادة ضبط البيانات والتقدم', pt: 'Redefinição de dados e progresso',
      ru: 'Сброс данных и прогресса', id: 'Reset data & progres', bn: 'ডেটা ও অগ্রগতি রিসেট', ur: 'ڈیٹا اور پیش رفت ری سیٹ', ja: 'データと進行状況のリセット', ko: '데이터 및 진행 상황 재설정'
    },
    eyebrow: {
      tr: '✨ Mantık ve Matematik Bulmacası',
      en: '✨ Logic & Math Puzzle Game',
      de: '✨ Logik- und Matherätsel',
      zh: '✨ 逻辑与数学益智游戏',
      hi: '✨ तर्क और गणित पहेली खेल',
      es: '✨ Juego de lógica y puzles matemáticos',
      fr: '✨ Jeu de logique et casse-tête mathématique',
      ar: '✨ لغز الرياضيات والمنطق',
      pt: '✨ Jogo de lógica e puzzles matemáticos',
      ru: '✨ Математическая и логическая головоломка',
      id: '✨ Game Teka-Teki Logika & Matematika',
      bn: '✨ যুক্তি ও গণিত ধাঁধা খেলা',
      ur: '✨ منطق اور ریاضی کی پہیلی',
      ja: '✨ ロジック＆数学パズルゲーム',
      ko: '✨ 논리 & 수학 퍼즐 게임'
    },
    chip_privacy: {
      tr: 'Gizlilik Politikası', en: 'Privacy Policy', de: 'Datenschutzerklärung', zh: '隐私政策', hi: 'गोपनीयता नीति',
      es: 'Política de Privacidad', fr: 'Politique de Confidentialité', ar: 'سياسة الخصوصية', pt: 'Política de Privacidade',
      ru: 'Политика конфиденциальности', id: 'Kebijakan Privasi', bn: 'গোপনীয়তা নীতি', ur: 'رازداری کی پالیسی', ja: 'プライバシーポリシー', ko: '개인정보 처리방침'
    },
    chip_terms: {
      tr: 'Kullanım Koşulları', en: 'Terms of Use', de: 'Nutzungsbedingungen', zh: '使用条款', hi: 'उपयोग की शर्तें',
      es: 'Términos de Uso', fr: 'Conditions d’Utilisation', ar: 'شروط الاستخدام', pt: 'Termos de Uso',
      ru: 'Условия использования', id: 'Ketentuan Penggunaan', bn: 'ব্যবহারের শর্তাবলি', ur: 'استعمال کی شرائط', ja: '利用規約', ko: '이용 약관'
    },
    chip_support: {
      tr: 'Destek ve Yardım', en: 'Support & Help', de: 'Support & Hilfe', zh: '支持与帮助', hi: 'सहायता और मदद',
      es: 'Soporte y Ayuda', fr: 'Assistance et Aide', ar: 'الدعم والمساعدة', pt: 'Suporte e Ajuda',
      ru: 'Поддержка и помощь', id: 'Dukungan & Bantuan', bn: 'সহায়তা ও সাহায্য', ur: 'مدد اور معاونت', ja: 'サポートとヘルプ', ko: '지원 및 도움말'
    },
    chip_deletion: {
      tr: 'Veri Sıfırlama Rehberi', en: 'Data Reset Guide', de: 'Leitfaden zum Daten-Reset', zh: '数据重置指南', hi: 'डेटा रीसेट गाइड',
      es: 'Guía de restablecimiento de datos', fr: 'Guide de réinitialisation', ar: 'دليل إعادة ضبط البيانات', pt: 'Guia de redefinição de dados',
      ru: 'Руководство по сбросу данных', id: 'Panduan Reset Data', bn: 'ডেটা রিসেট নির্দেশিকা', ur: 'ڈیٹا ری سیٹ گائیڈ', ja: 'データリセットガイド', ko: '데이터 재설정 가이드'
    },
    footer_portal: {
      tr: '← CodExa Portal', en: '← CodExa Portal', de: '← CodExa Portal', zh: '← CodExa 门户', hi: '← CodExa पोर्टल',
      es: '← Portal CodExa', fr: '← Portail CodExa', ar: '← بوابة CodExa', pt: '← Portal CodExa',
      ru: '← Портал CodExa', id: '← Portal CodExa', bn: '← CodExa পোর্টাল', ur: '← CodExa پورٹل', ja: '← CodExa ポータル', ko: '← CodExa 포털'
    },
    footer_all_products: {
      tr: 'Tüm ürünler', en: 'All products', de: 'Alle Produkte', zh: '所有产品', hi: 'सभी उत्पाद',
      es: 'Todos los productos', fr: 'Tous les produits', ar: 'جميع المنتجات', pt: 'Todos os produtos',
      ru: 'Все продукты', id: 'Semua produk', bn: 'সব পণ্য', ur: 'تمام پروڈکٹس', ja: 'すべての製品', ko: '모든 제품'
    }
  };

  window.PAGE_TRANSLATIONS = shared;
})();
