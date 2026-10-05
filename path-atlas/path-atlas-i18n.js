(function () {
  window.PAGE_LANGUAGES = ['tr', 'en', 'de', 'zh', 'hi', 'es', 'fr', 'ar', 'pt', 'ru', 'id', 'bn', 'ur', 'ja', 'ko'];

  const shared = {
    all_products: {
      tr: 'Tüm ürünler ↗', en: 'All products ↗', de: 'Alle Produkte ↗', zh: '所有产品 ↗', hi: 'सभी उत्पाद ↗',
      es: 'Todos los productos ↗', fr: 'Tous les produits ↗', ar: 'جميع المنتجات ↗', pt: 'Todos os produtos ↗',
      ru: 'Все продукты ↗', id: 'Semua produk ↗', bn: 'সব পণ্য ↗', ur: 'تمام پروڈکٹس ↗', ja: 'すべての製品 ↗', ko: '모든 제품 ↗'
    },
    nav_game: {
      tr: 'Oyun', en: 'Game', de: 'Spiel', zh: '游戏', hi: 'गेम', es: 'Juego', fr: 'Jeu',
      ar: 'اللعبة', pt: 'Jogo', ru: 'Игра', id: 'Game', bn: 'খেলা', ur: 'کھیل', ja: 'ゲーム', ko: '게임'
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
      tr: 'Veri silme', en: 'Data deletion', de: 'Datenlöschung', zh: '数据删除', hi: 'डेटा हटाना',
      es: 'Eliminación de datos', fr: 'Suppression des données', ar: 'حذف البيانات', pt: 'Exclusão de dados',
      ru: 'Удаление данных', id: 'Penghapusan data', bn: 'ডেটা মোছা', ur: 'ڈیٹا کا خاتمہ', ja: 'データの削除', ko: '데이터 삭제'
    },
    footer_portal: {
      tr: '← CodExa Portal', en: '← CodExa Portal', de: '← CodExa Portal', zh: '← CodExa 门户', hi: '← CodExa पोर्टल',
      es: '← Portal CodExa', fr: '← Portail CodExa', ar: '← بوابة CodExa', pt: '← Portal CodExa',
      ru: '← Портал CodExa', id: '← Portal CodExa', bn: '← CodExa পোর্টাল', ur: '← CodExa پورٹل', ja: '← CodExa ポータル', ko: '← CodExa 포털'
    },
    footer_all_products: {
      tr: 'Tüm ürünler', en: 'All products', de: 'Alle Produkte', zh: '全部产品', hi: 'सभी उत्पाद',
      es: 'Todos los productos', fr: 'Tous les produits', ar: 'جميع المنتجات', pt: 'Todos os produtos',
      ru: 'Все продукты', id: 'Semua produk', bn: 'সব পণ্য', ur: 'تمام مصنوعات', ja: 'すべての製品', ko: '모든 제품'
    },
    path_atlas_legal_marker: {
      tr: 'Path Atlas: Matematik Bulmaca', en: 'Path Atlas: Math & Logic', de: 'Path Atlas: Mathe & Logik',
      zh: 'Path Atlas: 数学与逻辑', hi: 'Path Atlas: गणित और तर्क', es: 'Path Atlas: Matemáticas y Lógica',
      fr: 'Path Atlas: Mathématiques et Logique', ar: 'Path Atlas: رياضيات ومنطق', pt: 'Path Atlas: Matemática e Lógica',
      ru: 'Path Atlas: Математика и Логика', id: 'Path Atlas: Matematika & Logika', bn: 'Path Atlas: গণিত ও যুক্তি',
      ur: 'Path Atlas: ریاضی اور منطق', ja: 'Path Atlas: 数学＆ロジックパズル', ko: 'Path Atlas: 수학 & 논리 퍼즐'
    }
  };

  window.PAGE_TRANSLATIONS = window.PAGE_TRANSLATIONS || {};
  Object.assign(window.PAGE_TRANSLATIONS, shared);
})();
