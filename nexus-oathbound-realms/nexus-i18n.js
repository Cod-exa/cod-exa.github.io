(function () {
  window.PAGE_LANGUAGES = ['tr', 'en', 'de', 'zh', 'hi', 'es', 'fr', 'ar', 'pt', 'ru', 'id', 'bn', 'ur', 'ja', 'ko'];

  const shared = {
    all_products: {
      tr: 'Tüm ürünler ↗',
      en: 'All products ↗',
      de: 'Alle Produkte ↗',
      zh: '所有产品 ↗',
      hi: 'सभी उत्पाद ↗',
      es: 'Todos los productos ↗',
      fr: 'Tous les produits ↗',
      ar: 'جميع المنتجات ↗',
      pt: 'Todos os produtos ↗',
      ru: 'Все продукты ↗',
      id: 'Semua produk ↗',
      bn: 'সব পণ্য ↗',
      ur: 'تمام پروڈکٹس ↗',
      ja: 'すべての製品 ↗',
      ko: '모든 제품 ↗'
    },
    nav_game: {
      tr: 'Oyun', en: 'Game', de: 'Spiel', zh: '游戏', hi: 'गेम', es: 'Juego', fr: 'Jeu',
      ar: 'اللعبة', pt: 'Jogo', ru: 'Игра', id: 'Game', bn: 'খেলা', ur: 'گیم', ja: 'ゲーム', ko: '게임'
    },
    nav_privacy: {
      tr: 'Gizlilik Politikası', en: 'Privacy Policy', de: 'Datenschutzerklärung', zh: '隐私政策', hi: 'गोपनीयता नीति',
      es: 'Política de Privacidad', fr: 'Politique de Confidentialité', ar: 'سياسة الخصوصية', pt: 'Política de Privacidade',
      ru: 'Политика конфиденциальности', id: 'Kebijakan Privasi', bn: 'গোপনীয়তা নীতি', ur: 'رازداری کی پالیسی', ja: 'プライバシーポリシー', ko: '개인정보 처리방침'
    },
    nav_terms: {
      tr: 'Kullanım Koşulları', en: 'Terms of Use', de: 'Nutzungsbedingungen', zh: '使用条款', hi: 'उपयोग की शर्तें',
      es: 'Términos de Uso', fr: 'Conditions d’utilisation', ar: 'شروط الاستخدام', pt: 'Termos de Uso',
      ru: 'Условия использования', id: 'Ketentuan Penggunaan', bn: 'ব্যবহারের শর্তাবলি', ur: 'استعمال کی شرائط', ja: '利用規約', ko: '이용 약관'
    },
    nav_support: {
      tr: 'Destek ve Yardım', en: 'Support & Help', de: 'Support & Hilfe', zh: '支持与帮助', hi: 'सहायता और मदद',
      es: 'Soporte y Ayuda', fr: 'Assistance et Aide', ar: 'الدعم والمساعدة', pt: 'Suporte e Ajuda',
      ru: 'Поддержка и помощь', id: 'Dukungan & Bantuan', bn: 'সহায়তা ও সাহায্য', ur: 'مدد اور معاونت', ja: 'サポートとヘルプ', ko: '지원 및 도움말'
    },
    nav_deletion: {
      tr: 'Hesap ve Veri Silme', en: 'Account & Data Deletion', de: 'Konto- & Datenlöschung', zh: '帐户和数据删除', hi: 'खाता और डेटा हटाना',
      es: 'Eliminación de Cuenta y Datos', fr: 'Suppression de Compte et Données', ar: 'حذف الحساب والبيانات', pt: 'Exclusão de Conta e Datos',
      ru: 'Удаление аккаунта и данных', id: 'Penghapusan Akun & Data', bn: 'অ্যাকাউন্ট ও ডেটা মোছা', ur: 'اکاؤنٹ اور ڈیٹا کا خاتمہ', ja: 'アカウントとデータの削除', ko: '계정 및 데이터 삭제'
    },
    eyebrow: {
      tr: 'Fantastik Kart Stratejisi', en: 'Fantasy Card Strategy', de: 'Fantasy-Kartenstrategie', zh: '奇幻卡牌策略', hi: 'फैंटेसी कार्ड रणनीति',
      es: 'Estrategia de Cartas de Fantasía', fr: 'Stratégie de Cartes Fantastique', ar: 'استراتيجية بطاقات فانتازيا', pt: 'Estratégia de Cartas de Fantasia',
      ru: 'Фэнтези карточная стратегия', id: 'Strategi Kartu Fantasi', bn: 'ফ্যান্টাসি কার্ড কৌশল', ur: 'فینٹسی کارڈ حکمت عملی', ja: 'ファンタジー・カードストラテジー', ko: '판타지 카드 전략'
    },
    lead: {
      tr: 'Rünik bağlar kur, desteni yönet ve kadim alemlerin kaderini belirle.',
      en: 'Forge runic oaths, command your deck, and shape the fate of ancient realms.',
      de: 'Schmiede runische Schwüre, führe dein Deck und bestimme das Schicksal uralter Reiche.',
      zh: '缔结符文契约，统御你的卡组，主宰古老国度的命运。',
      hi: 'रूणिक प्रतिज्ञाएँ गढ़ें, अपने डेक का संचालन करें और प्राचीन लोकों का भाग्य तय करें।',
      es: 'Forja juramentos rúnicos, dirige tu mazo y define el destino de reinos ancestrales.',
      fr: 'Forgez des serments runiques, commandez votre deck et façonnez le destin de royaumes antiques.',
      ar: 'اصنع العهود الرونية، وقُد مجموعتك، وحدد مصير العوالم القديمة.',
      pt: 'Forje juramentos rúnicos, comande seu baralho e decida o destino de reinos ancestrais.',
      ru: 'Скрепляйте рунические клятвы, управляйте колодой и определяйте судьбу древних королевств.',
      id: 'Jalin sumpah rahasia kuno, pimpin dek kartu Anda, dan tentukan takdir dunia kuno.',
      bn: 'রুনিক শপথ তৈরি করুন, আপনার ডেক পরিচালনা করুন এবং প্রাচীন রাজ্যের ভাগ্য নির্ধারণ করুন।',
      ur: 'رونک عہد باندھیں، اپنے ڈیک کی کمان سنبھالیں اور قدیم جہانوں کی تقدیر بدلیں۔',
      ja: 'ルーンの誓いを結び、デッキを指揮して古の領域の運命を切り拓け。',
      ko: '룬 서약을 맺고 덱을 지휘하여 고대 왕국의 운명을 개척하세요.'
    },
    status: {
      tr: 'Geliştirilmekte', en: 'In Development', de: 'In Entwicklung', zh: '开发中', hi: 'विकास जारी',
      es: 'En desarrollo', fr: 'En développement', ar: 'قيد التطوير', pt: 'Em desenvolvimento',
      ru: 'В разработке', id: 'Dalam Pengembangan', bn: 'উন্নয়নাধীন', ur: 'زیرِ تکمیل', ja: '開発中', ko: '개발 중'
    },
    footer_portal: {
      tr: '← CodExa Portal', en: '← CodExa Portal', de: '← CodExa Portal', zh: '← CodExa 门户', hi: '← CodExa पोर्टल',
      es: '← Portal CodExa', fr: '← Portail CodExa', ar: 'بوابة CodExa ←', pt: '← Portal CodExa', ru: '← Портал CodExa',
      id: '← Portal CodExa', bn: '← CodExa পোর্টাল', ur: 'CodExa پورٹل ←', ja: '← CodExa ポータル', ko: '← CodExa 포털'
    },
    footer_all_products: {
      tr: 'Tüm ürünler', en: 'All products', de: 'Alle Produkte', zh: '所有产品', hi: 'सभी उत्पाद',
      es: 'Todos los productos', fr: 'Tous les produits', ar: 'جميع المنتجات', pt: 'Todos os produtos', ru: 'Все продукты',
      id: 'Semua produk', bn: 'সব পণ্য', ur: 'تمام پروڈکٹس', ja: 'すべての製品', ko: '모든 제품'
    }
  };

  window.PAGE_TRANSLATIONS = Object.assign(shared, window.PAGE_TRANSLATIONS || {});
})();
