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
      tr: 'Hesap ve veri silme', en: 'Account & data deletion', de: 'Konto- & Datenlöschung', zh: '帐户和数据删除', hi: 'खाता और डेटा हटाना',
      es: 'Eliminación de cuenta y datos', fr: 'Suppression de compte et données', ar: 'حذف الحساب والبيانات', pt: 'Exclusão de conta e dados',
      ru: 'Удаление аккаунта и данных', id: 'Penghapusan akun & data', bn: 'অ্যাকাউন্ট ও ডেটা মোছা', ur: 'اکاؤنٹ اور ڈیٹا کا خاتمہ', ja: 'アカウントとデータの削除', ko: '계정 및 데이터 삭제'
    },
    eyebrow: {
      tr: 'Taktik blok bulmacası', en: 'Tactical block puzzle', de: 'Taktisches Blockrätsel', zh: '战术方块解谜', hi: 'रणनीतिक ब्लॉक पहेली',
      es: 'Puzle táctico de bloques', fr: 'Puzzle tactique de blocs', ar: 'لغز الكتل التكتيكي', pt: 'Quebra-cabeça tático de blocos',
      ru: 'Тактическая головоломка с блоками', id: 'Teka-teki balok taktis', bn: 'কৌশলী ব্লক ধাঁধা', ur: 'حکمت عملی بلاک پزل', ja: 'タクティカル・ブロックパズル', ko: '택티컬 블록 퍼즐'
    },
    lead: {
      tr: 'Blokları yerleştir. Doğru hatla çekirdeği onar.',
      en: 'Place the blocks. Complete the right line. Repair the core.',
      de: 'Platziere Blöcke. Vervollständige die richtige Linie. Repariere den Kern.',
      zh: '放置方块。消除正确线条。修复核心。',
      hi: 'ब्लॉक रखें। सही रेखा पूरी करें। कोर की मरम्मत करें।',
      es: 'Coloca los bloques. Completa la línea correcta. Repara el núcleo.',
      fr: 'Placez les blocs. Complétez la bonne ligne. Réparez le cœur.',
      ar: 'ضع الكتل. أكمل الخط الصحيح. أصلح النواة.',
      pt: 'Posicione os blocos. Complete a linha certa. Repare o núcleo.',
      ru: 'Размещайте блоки. Заполняйте нужную линию. Восстанавливайте ядро.',
      id: 'Tempatkan balok. Selesaikan baris yang tepat. Perbaiki inti.',
      bn: 'ব্লক বসান। সঠিক লাইন পূর্ণ করুন। কোর মেরামত করুন।',
      ur: 'بلاکس رکھیں۔ صحیح لائن مکمل کریں۔ کور کی مرمت کریں۔',
      ja: 'ブロックを配置。ラインを揃えてコアを修復。',
      ko: '블록을 배치하세요. 라인을 완성하고 코어를 복구하세요.'
    },
    status: {
      tr: 'Geliştirilmekte', en: 'In Development', de: 'In Entwicklung', zh: '开发中', hi: 'विकास जारी',
      es: 'En desarrollo', fr: 'En développement', ar: 'قيد التطوير', pt: 'Em desenvolvimento',
      ru: 'В разработке', id: 'Dalam Pengembangan', bn: 'উন্নয়নাধীন', ur: 'زیرِ تکمیل', ja: '開発中', ko: '개발 중'
    },
    how_to_play: {
      tr: 'Nasıl oynanır? ↓', en: 'How to play ↓', de: 'Spielanleitung ↓', zh: '如何游玩 ↓', hi: 'कैसे खेलें ↓',
      es: 'Cómo jugar ↓', fr: 'Comment jouer ↓', ar: 'كيف تلعب ↓', pt: 'Como jogar ↓', ru: 'Как играть ↓',
      id: 'Cara bermain ↓', bn: 'কীভাবে খেলবেন ↓', ur: 'کیسے کھیلیں ↓', ja: '遊び方 ↓', ko: '플레이 방법 ↓'
    },
    support_action: {
      tr: 'Destek ve geri bildirim', en: 'Support & feedback', de: 'Support & Feedback', zh: '支持与反馈', hi: 'सहायता और प्रतिक्रिया',
      es: 'Soporte y comentarios', fr: 'Assistance et avis', ar: 'الدعم والملاحظات', pt: 'Suporte e feedback', ru: 'Поддержка и отзывы',
      id: 'Dukungan & umpan balik', bn: 'সহায়তা ও প্রতিক্রিয়া', ur: 'معاونت اور تاثرات', ja: 'サポートとフィードバック', ko: '지원 및 피드백'
    },
    chip_privacy: {
      tr: 'Gizlilik Politikası', en: 'Privacy Policy', de: 'Datenschutzerklärung', zh: '隐私政策', hi: 'गोपनीयता नीति',
      es: 'Política de Privacidad', fr: 'Politique de Confidentialité', ar: 'سياسة الخصوصية', pt: 'Política de Privacidade',
      ru: 'Политика конфиденциальности', id: 'Kebijakan Privasi', bn: 'গোপনীয়তা নীতি', ur: 'رازداری کی پالیسی', ja: 'プライバシーポリシー', ko: '개인정보 처리방침'
    },
    chip_terms: {
      tr: 'Kullanım Koşulları', en: 'Terms of Use', de: 'Nutzungsbedingungen', zh: '使用条款', hi: 'उपयोग की शर्तें',
      es: 'Términos de Uso', fr: 'Conditions d’utilisation', ar: 'شروط الاستخدام', pt: 'Termos de Uso',
      ru: 'Условия использования', id: 'Ketentuan Penggunaan', bn: 'ব্যবহারের শর্তাবলি', ur: 'استعمال کی شرائط', ja: '利用規約', ko: '이용 약관'
    },
    chip_support: {
      tr: 'Destek ve Yardım', en: 'Support & Help', de: 'Support & Hilfe', zh: '支持与帮助', hi: 'सहायता और मदद',
      es: 'Soporte y Ayuda', fr: 'Assistance et Aide', ar: 'الدعم والمساعدة', pt: 'Suporte e Ajuda',
      ru: 'Поддержка и помощь', id: 'Dukungan & Bantuan', bn: 'সহায়তা ও সাহায্য', ur: 'مدد اور معاونت', ja: 'サポートとヘルプ', ko: '지원 및 도움말'
    },
    chip_deletion: {
      tr: 'Hesap ve Veri Silme', en: 'Account & Data Deletion', de: 'Konto- & Datenlöschung', zh: '帐户和数据删除', hi: 'खाता और डेटा हटाना',
      es: 'Eliminación de Cuenta y Datos', fr: 'Suppression de Compte et Données', ar: 'حذف الحساب والبيانات', pt: 'Exclusão de Conta e Dados',
      ru: 'Удаление аккаунта и данных', id: 'Penghapusan Akun & Data', bn: 'অ্যাকাউন্ট ও ডেটা মোছা', ur: 'اکاؤنٹ اور ڈیٹا کا خاتمہ', ja: 'アカウントとデータの削除', ko: '계정 및 데이터 삭제'
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
