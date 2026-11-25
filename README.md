# 🚀 KARIMOVACODER — Premium Full Stack Developer Portfolio

Professional, modern, and futuristic personal developer portfolio created for **Nigina Karimova** (`KARIMOVACODER`).

---

## 🎨 Dizayn & Texnologiyalar (Design & Tech Stack)

- **Design Philosophy**: Dark Cyberpunk / Futuristic Minimalism, Glassmorphism, Neon Blue Glow, Ambient Constellation Particles.
- **Ranglar Palitrasi (Color Palette)**:
  - Asosiy fon: `#070B14`
  - Ikkinchi fon: `#0D1424`
  - Kartochkalar (Cards): `#111C30` with `backdrop-filter: blur(16px)`
  - Asosiy ko‘k: `#2563EB`
  - Neon ko‘k: `#38BDF8`
  - Oq matn: `#F8FAFC`
  - Ikkinchi darajali matn: `#94A3B8`
- **Frontend Stack**:
  - HTML5 (Semantic & SEO-friendly)
  - CSS3 (Custom Design Tokens, Keyframe Animations, Glassmorphism)
  - Bootstrap 5.3.3 (Responsive Grid Architecture)
  - JavaScript ES6+ (Modular, Async, Canvas API)
  - Font Awesome 6.5.1
  - Google Fonts (`Plus Jakarta Sans` & `JetBrains Mono`)

---

## 🌐 3 Tilli Tizim (Trilingual Engine: UZ / RU / EN)

- 🇺🇿 **O‘zbek tili** (birlamchi / default)
- 🇷🇺 **Русский язык**
- 🇬🇧 **English**
- Sahifani qayta yuklamasdan real vaqt rejimida (`localStorage` orqali saqlanuvchi) to‘liq tarjima.
- Barcha sarlavhalar, izohlar, tugmalar, placeholderlar, modal oynalar va alertlar tarjima qilingan.

---

## 📁 Loyiha Strukturasi (Project Structure)

```
karimovacoder/
├── index.html                   # Asosiy semantik sahifa
├── css/
│   └── style.css                # To'liq dizayn tizimi, neon va glassmorphism
├── js/
│   ├── translations.js          # UZ, RU, EN tillar lug'ati
│   └── main.js                  # Canvas, scrollspy, preloader, modal va form mantiqi
├── assets/
│   ├── images/
│   │   ├── favicon.svg          # Neon KC logotipi
│   │   ├── avatar.svg           # Nigina Karimova cyber profil illyustratsiyasi
│   │   ├── project-ecommerce.svg# Online Store mockup
│   │   ├── project-biomaster.svg# BioMaster ta'lim platformasi mockup
│   │   └── project-ishtop.svg   # IshTop bandlik portali mockup
│   └── docs/
│       └── Nigina_Karimova_CV.html # Interaktiv va chop etiladigan rezyume (CV)
└── README.md
```

---

## ⚡ Asosiy Bo'limlar & Funksiyalar

1. **Preloader**: Tizim ishga tushish progress bari bilan neon loading.
2. **Navbar**: Shaffof shisha (glassmorphic), aylantirilganda yopishuvchi (sticky), 3 tilli menyu va mobil drawer.
3. **Hero**: Typewriter roli yozilishi ("Full Stack Dasturchi", "Python & Django Mutaxassisi"), ijtimoiy havolalar, suzuvchi texnologiya nishonlari (HTML, CSS, JS, Python, Django, Bootstrap).
4. **Men haqimda**: 2 ustunli profil ma'lumotlari, statistik hisoblagichlar (2+ yil, 15+ loyiha, 9+ texnologiya, 100% sifat) va CV ko'rish modali.
5. **Ko‘nikmalar**: FRONTEND, BACKEND va DASTURCHILIK VOSITALARI bo'yicha toza kartochkalar (soxta foizlarsiz).
6. **Loyihalar**:
   - `Online Store` (Internet-do‘kon va savdo)
   - `BioMaster` (Biologiya test va ta'lim)
   - `IshTop` (Ish qidirish va vakansiyalar)
   - Loyiha modal tafsilotlari, jonli ko'rish va GitHub havolalari.
7. **Xizmatlar**: 4 ta xizmat (Frontend, Backend, Full Stack, Responsive UI).
8. **Bog‘lanish**: Aloqa ma'lumotlari va to'liq validatsiyali interaktiv xabar formasi (Django REST API ga ulashga to'liq tayyor).
9. **Footer**: Mualliflik huquqi va yuqoriga qaytish tugmasi.

---

## 🚀 Qanday Ishga Tushirish Mumkin? (How to Run)

Oddiy brauzerda ochish kifoya:
- `index.html` faylini istalgan brauzerda (Chrome, Edge, Firefox, Safari) oching.
- Yoki Python orqali lokal serverda ishga tushiring:
  ```bash
  python -m http.server 8000
  ```
  So'ng brauzerda: `http://localhost:8000` manziliga kiring.

---

## ☁️ Deploy Qilish Qo‘llanmasi (Deployment Guide)

Loyiha **Vercel** va **Railway** platformalariga 100% to‘liq moslashtirilgan va barcha kerakli konfiguratsiya fayllari (`vercel.json`, `Dockerfile`, `nginx.conf.template`, `Procfile`, `server.py`) tayyorlangan.

### 1. Vercel orqali Deploy qilish (Tavsiya etiladi — 1 daqiqada bepul):
1. Ushbu papkani GitHub profilingizga push qiling (`git init`, `git add .`, `git commit`, `git push`).
2. [vercel.com](https://vercel.com) saytiga kiring va GitHub orqali ro'yxatdan o'ting.
3. **"Add New Project"** tugmasini bosing va ushbu repozitoriyani tanlang.
4. Hech qanday qo‘shimcha sozlash shart emas (`vercel.json` avtomatik ishlaydi).
5. **"Deploy"** tugmasini bosing. 30 soniyada saytingiz jonli efirga chiqadi (masalan: `karimovacoder.vercel.app`)!

### 2. Railway orqali Deploy qilish:
1. Loyihani GitHub-ga push qiling.
2. [railway.app](https://railway.app) saytiga kiring va GitHub orqali kiring.
3. **"New Project"** ➔ **"Deploy from GitHub repo"** ni tanlang va repozitoriyani ko'rsating.
4. Railway avtomatik ravishda `Dockerfile` (Nginx) yoki `Procfile` ni aniqlaydi va dynamic `$PORT` orqali ishga tushiradi.
5. Sozlamalarda (Settings ➔ Networking) **"Generate Domain"** tugmasini bosing — tayyor bepul domen olasiz!

