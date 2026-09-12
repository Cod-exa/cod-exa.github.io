(function () {
  window.PAGE_LANGUAGES = ['tr', 'en', 'de', 'zh', 'hi', 'es', 'fr', 'ar', 'pt', 'ru', 'id', 'bn', 'ur', 'ja', 'ko'];

  const shared = {
    all_products: {
      tr: 'Tüm ürünler ↗', en: 'All products ↗', de: 'Alle Produkte ↗', zh: '所有产品 ↗', hi: 'सभी उत्पाद ↗',
      es: 'Todos los productos ↗', fr: 'Tous les produits ↗', ar: 'جميع المنتجات ↗', pt: 'Todos os produtos ↗',
      ru: 'Все продукты ↗', id: 'Semua produk ↗', bn: 'সব পণ্য ↗', ur: 'تمام پروڈکٹس ↗', ja: 'すべての製品 ↗', ko: '모든 제품 ↗'
    },
    nav_app: {
      tr: 'Uygulama', en: 'App', de: 'App', zh: '应用', hi: 'ऐप', es: 'Aplicación', fr: 'Application',
      ar: 'التطبيق', pt: 'Aplicativo', ru: 'Приложение', id: 'Aplikasi', bn: 'অ্যাপ', ur: 'ایپ', ja: 'アプリ', ko: '앱'
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
      tr: 'Erken Yaş Eğitici Çocuk Matematiği',
      en: 'Early Childhood Educational Math Companion',
      de: 'Pädagogische Mathematik für die frühe Kindheit',
      zh: '幼儿早期数学启蒙教育',
      hi: 'प्रारंभिक बचपन शैक्षिक गणित साथी',
      es: 'Matemáticas educativas para la primera infancia',
      fr: 'Compagnon éducatif de mathématiques précoces',
      ar: 'رفيق الرياضيات التعليمي للطفولة المبكرة',
      pt: 'Matemática educativa para a primeira infância',
      ru: 'Обучающая математика для детей раннего возраста',
      id: 'Sahabat Matematika Edukatif Usia Dini',
      bn: 'শৈশবকালীন শিক্ষামূলক গণিত সঙ্গী',
      ur: 'ابتدائی بچپن کا تعلیمی ریاضی کا ساتھی',
      ja: '幼児向け早期算数学習コンパニオン',
      ko: '유아 조기 수학교육 컴패니언'
    },
    lead: {
      tr: 'Çocuklar ve aileler için müfredatla uyumlu (US CCSS & Küresel standartlar), reklamsız, %100 gizlilik odaklı ve huzurlu bir matematik öğrenme bahçesi.',
      en: 'A peaceful, curriculum-aligned (US CCSS & Global standards), 100% privacy-focused, and ad-free math learning garden for kids and families.',
      de: 'Ein ruhiger, lehrplankonformer (US CCSS & globale Standards), 100 % datenschutzorientierter und werbefreier Mathe-Lerngarten für Kinder und Familien.',
      zh: '一个专为儿童与家庭设计的宁静数学乐园：符合课程标准（美国CCSS及全球大纲），零广告，100%注重隐私。',
      hi: 'बच्चों और परिवारों के लिए पाठ्यचर्या-संरेखित (US CCSS और वैश्विक मानक), विज्ञापन-मुक्त और 100% गोपनीयता-केंद्रित गणित सीखने का शांत बगीचा।',
      es: 'Un jardín de aprendizaje de matemáticas tranquilo, alineado con el plan de estudios (US CCSS y estándares globales), sin anuncios y 100% centrado en la privacidad.',
      fr: 'Un jardin d’apprentissage des mathématiques paisible, conforme aux programmes (US CCSS et normes mondiales), sans publicité et 100 % respectueux de la vie privée.',
      ar: 'حديقة هادئة لتعلم الرياضيات للأطفال والعائلات متوافقة مع المناهج (US CCSS والمعايير العالمية)، خالية تمامًا من الإعلانات وتركز على الخصوصية 100٪.',
      pt: 'Um jardim tranquilo de aprendizado de matemática, alinhado ao currículo (US CCSS e padrões globais), sem anúncios e 100% focado na privacidade.',
      ru: 'Спокойный математический сад для детей и семей: соответствие учебным программам (US CCSS и мировые стандарты), без рекламы и со 100% конфиденциальностью.',
      id: 'Taman belajar matematika yang tenang untuk anak dan keluarga: selaras kurikulum (US CCSS & standar global), tanpa iklan, dan 100% berfokus pada privasi.',
      bn: 'শিশু ও পরিবারের জন্য পাঠ্যক্রম-সঙ্গতিপূর্ণ (US CCSS ও বৈশ্বিক মান), বিজ্ঞাপনহীন ও ১০০% গোপনীয়তা-বান্ধব গণিত বাগান।',
      ur: 'بچوں اور خاندانوں کے لیے نصاب کے مطابق (US CCSS اور عالمی معیارات)، اشتہارات سے پاک اور 100٪ رازداری پر مبنی پرسکون ریاضی سیکھنے کا باغ۔',
      ja: 'カリキュラム準拠（米国CCSS＆グローバル基準）、広告なし、100%プライバシー重視の、子どもと家庭のための穏やかな算数学習ガーデン。',
      ko: '커리큘럼 연계(US CCSS 및 글로벌 표준), 광고 없음, 100% 개인정보 보호 중심의 어린이와 가정을 위한 평화로운 수학 학습 정원.'
    },
    status: {
      tr: 'Yayın Aşamasında · Google Play',
      en: 'Release Process · Google Play',
      de: 'Veröffentlichungsprozess · Google Play',
      zh: '发布流程中 · Google Play',
      hi: 'प्रकाशन प्रक्रिया · Google Play',
      es: 'En proceso de publicación · Google Play',
      fr: 'En cours de publication · Google Play',
      ar: 'قيد النشر · Google Play',
      pt: 'Em processo de publicação · Google Play',
      ru: 'В процессе публикации · Google Play',
      id: 'Dalam Proses Rilis · Google Play',
      bn: 'প্রকাশের প্রক্রিয়ায় · Google Play',
      ur: 'اشاعت کے عمل میں · Google Play',
      ja: '配信準備中 · Google Play',
      ko: '출시 준비 중 · Google Play'
    },
    btn_explore: {
      tr: 'Özellikleri Keşfet ↓', en: 'Explore Features ↓', de: 'Funktionen entdecken ↓', zh: '探索功能 ↓', hi: 'सुविधाएं देखें ↓',
      es: 'Explorar funciones ↓', fr: 'Découvrir les fonctionnalités ↓', ar: 'استكشف الميزات ↓', pt: 'Explorar recursos ↓',
      ru: 'Узнать подробнее ↓', id: 'Jelajahi Fitur ↓', bn: 'বৈশিষ্ট্য দেখুন ↓', ur: 'خصوصیات دیکھیں ↓', ja: '特徴を見る ↓', ko: '특징 살펴보기 ↓'
    },
    btn_support: {
      tr: 'Destek ve İletişim', en: 'Support & Contact', de: 'Support & Kontakt', zh: '支持与联系', hi: 'सहायता और संपर्क',
      es: 'Soporte y contacto', fr: 'Assistance et contact', ar: 'الدعم والتواصل', pt: 'Suporte e contato',
      ru: 'Поддержка и связь', id: 'Dukungan & Kontak', bn: 'সহায়তা ও যোগাযোগ', ur: 'معاونت اور رابطہ', ja: 'サポートとお問い合わせ', ko: '지원 및 문의'
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
