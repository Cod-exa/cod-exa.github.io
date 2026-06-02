# CodExa — Eğitim Odaklı Mobil Oyunlar

**CodExa** tarafından geliştirilen, çocuklar ve öğrenciler için tasarlanmış eğitsel mobil oyunların resmi tanıtım, gizlilik politikası, kullanım koşulları ve destek sayfalarını barındıran web sitesidir.

🌐 **Canlı site:** [cod-exa.github.io](https://cod-exa.github.io)

---

## 🎮 Oyunlar

| Oyun | Açıklama | Sayfa |
|------|----------|-------|
| **Hanoi Kulesi** | Klasik Hanoi Kulesi bulmacası ile mantıksal düşünme ve problem çözme. | [hanoikulesi/](hanoikulesi/) |
| **At Satrancı** | Satranç atının hareketleriyle strateji ve planlama becerileri. | [atsatranci/](atsatranci/) |
| **KenKen** | Aritmetik işlemlerle mantık bulmacası; zihinden hesaplama pratiği. | [kenken/](kenken/) |
| **Nim Master** | Matematiksel oyun teorisine dayalı strateji oyunu. | [nimmaster/](nimmaster/) |
| **Çarpma Oyunu** | Çarpım tablosunu eğlenceli ve etkileşimli şekilde öğreten oyun. | [carpma-oyunu/](carpma-oyunu/) |

---

## 📁 Proje Yapısı

Her oyun kendi klasöründe, tutarlı bir yapıda düzenlenmiştir:

```
cod-exa.github.io/
├── index.html              # Ana portal sayfası (tüm oyunların vitrini)
├── i18n.js                 # 10 dilli çeviri motoru
├── app-ads.txt             # Reklam doğrulama (AdMob)
│
├── atsatranci/             # At Satrancı
│   ├── index.html          #   Tanıtım sayfası
│   ├── privacy.html        #   Gizlilik Politikası
│   ├── support.html        #   Destek
│   └── terms.html          #   Kullanım Koşulları
│
├── hanoikulesi/            # Hanoi Kulesi   (aynı yapı)
├── kenken/                 # KenKen          (aynı yapı)
├── nimmaster/              # Nim Master      (aynı yapı)
└── carpma-oyunu/           # Çarpma Oyunu
```

---

## 🌍 Çoklu Dil Desteği

Tüm yasal sayfalar ve ana portal **10 dilde** sunulmaktadır:

🇹🇷 Türkçe · 🇬🇧 İngilizce · 🇩🇪 Almanca · 🇫🇷 Fransızca · 🇪🇸 İspanyolca · 🇵🇹 Portekizce · 🇷🇺 Rusça · 🇸🇦 Arapça · 🇨🇳 Çince · 🇮🇳 Hintçe

Çeviriler `i18n.js` dosyası üzerinden yönetilir ve sayfa içindeki `data-i18n` etiketlerine otomatik olarak uygulanır.

---

## ⚖️ Yasal Uyumluluk

Gizlilik politikaları **GDPR** (Avrupa) ve **KVKK** (Türkiye) düzenlemelerine uygun olarak hazırlanmıştır. Her uygulamanın kendi gizlilik politikası, kullanım koşulları ve destek sayfası bulunmaktadır.

---

## 📬 İletişim

Sorularınız, geri bildirimleriniz veya destek talepleriniz için:

**E-posta:** [exaque2@gmail.com](mailto:exaque2@gmail.com)

---

## 🛠️ Teknolojiler

- Saf **HTML5**, **CSS3** ve **JavaScript** (çerçeve bağımlılığı yok)
- **GitHub Pages** üzerinde barındırma
- Hafif, hızlı ve responsive tasarım

---

<sub>© CodExa (Erdinç Topal). Tüm hakları saklıdır.</sub>
