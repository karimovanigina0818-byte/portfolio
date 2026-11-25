/**
 * KARIMOVACODER — Multilingual Translations System
 * Supports: Uzbek (uz), Russian (ru), English (en)
 */

const translations = {
  uz: {
    // Nav
    nav_home: "Bosh sahifa",
    nav_about: "Men haqimda",
    nav_skills: "Ko‘nikmalar",
    nav_projects: "Loyihalar",
    nav_services: "Xizmatlar",
    nav_contact: "Bog‘lanish",
    nav_contact_btn: "Bog‘lanish",
    nav_lang: "UZ",

    // Hero
    hero_greeting: "Salom, men Nigina Karimova",
    hero_title_prefix: "Zamonaviy raqamli tajribalarni yaratuvchi ",
    hero_desc: "Men zamonaviy, tezkor, moslashuvchan va funksional web ilovalar yaratishga qiziqaman. Frontend va Backend texnologiyalari orqali g‘oyalarni haqiqiy loyihalarga aylantiraman.",
    hero_btn_projects: "Loyihalarimni ko‘rish",
    hero_btn_cv: "CV yuklab olish",
    hero_status: "⚡ Yangi loyihalar uchun ochiqman",
    hero_badge_experience: "Full Stack Tajriba",
    hero_badge_clean_code: "Toza & Xavfsiz Kod",
    hero_badge_live: "Faol Dasturchi",

    // Typewriter roles
    type_roles: [
      "Full Stack Dasturchi",
      "Python & Django Mutaxassisi",
      "Frontend Web Dasturchi",
      "UI/UX Ishqibozi"
    ],

    // About
    about_tag: "01. HAQIMDA",
    about_title: "MEN HAQIMDA",
    about_subtitle: "Kod yozish san'ati va innovatsion raqamli yechimlar",
    about_p1: "Salom! Men Nigina Karimova — yuqori unumdorlikka ega, qulay va xavfsiz veb-ilovalar ishlab chiquvchi Full Stack dasturchiman. Dasturlashga bo‘lgan kuchli ishtiyoqim va doimiy o‘rganishga intilishim har bir loyihaga ijodiy va mustahkam muhandislik yondashuvini kiritishimga yordam beradi.",
    about_p2: "Frontend qismida HTML5, CSS3, Bootstrap 5 va zamonaviy JavaScript yordamida barcha ekranlarda mukammal ko‘rinadigan responsiv interfeyslar qursam, Backend qismida Python va Django vositasida barqaror ma'lumotlar bazasi va tezkor REST API arxitekturasini barpo etaman.",
    about_p3: "Mening asosiy maqsadim — shunchaki kod yozish emas, balki biznes ehtiyojlariga mos keladigan, foydalanuvchilar mehrini qozonadigan va real natija keltiradigan raqamli mahsulotlarni yaratishdir.",
    about_btn_cv: "Rezyumeni ko‘rish (CV)",
    about_stat1_num: "2+",
    about_stat1_lbl: "Yillik Amaliy Tajriba",
    about_stat2_num: "15+",
    about_stat2_lbl: "Muvaffaqiyatli Loyiha",
    about_stat3_num: "9+",
    about_stat3_lbl: "O‘zlashtirilgan Texnologiya",
    about_stat4_num: "100%",
    about_stat4_lbl: "Mas'uliyat va Sifat",

    // Skills
    skills_tag: "02. KO‘NIKMALAR",
    skills_title: "MENING KO‘NIKMALARIM",
    skills_subtitle: "Zamonaviy veb-ilovalarni yaratishda foydalanadigan asosiy texnologiyalar to‘plami",
    skills_cat_frontend: "FRONTEND TEXNOLOGIYALARI",
    skills_cat_backend: "BACKEND TEXNOLOGIYALARI",
    skills_cat_tools: "DASTURCHILIK VOSITALARI",
    
    // Skill items
    skill_html_desc: "Semantik, qulay va SEO talablariga to‘liq mos keluvchi mustahkam veb-tuzilmalar yaratish.",
    skill_css_desc: "Flexbox, CSS Grid, Glassmorphism, neon animatsiyalar va zamonaviy dizayn uslublari.",
    skill_bs_desc: "Tezkor, mobil qurilmalarga to‘liq moslashuvchan va chiroyli responsive layoutlar yaratish.",
    skill_js_desc: "Dinamik interfeyslar, ES6+ sintaksis, DOM manipulyatsiyasi va asinxron AJAX/Fetch so‘rovlar.",
    skill_py_desc: "Toza, tushunarli va kuchli arxitekturaga ega algoritmik hamda backend dasturlash.",
    skill_dj_desc: "Tezkor ishlab chiqish, mustahkam ORM, xavfsiz autentifikatsiya va REST API xizmatlari.",
    skill_git_desc: "Versiyalarni professional boshqarish, branchlar bilan ishlash va o‘zgarishlar tarixi nazorati.",
    skill_gh_desc: "Jamoaviy kod integratsiyasi, repository boshqaruvi va loyihalarni ommaga taqdim etish.",
    skill_vsc_desc: "Optimallashtirilgan dasturlash muhiti, samarali plaginlar va tezkor debagging jarayoni.",

    // Projects
    projects_tag: "03. PORTFOLIO",
    projects_title: "MENING LOYIHALARIM",
    projects_subtitle: "Amaliyotda yaratilgan va real natija keltiradigan eng yaxshi ishlarim",
    filter_all: "Barchasi",
    filter_fullstack: "Full Stack",
    filter_frontend: "Frontend",
    filter_backend: "Backend",
    project_btn_view: "Loyihani ko‘rish",
    project_btn_github: "GitHub Kodi",
    project_live_demo: "Jonli Demo",

    // Project 1
    p1_title: "Online Store",
    p1_badge: "E-Commerce / Full Stack",
    p1_desc: "Internet-do‘kon va mahsulotlar savdosi platformasi. Foydalanuvchilar uchun qulay savatcha tizimi, toifalar bo‘yicha filtrlash, xavfsiz to‘lov/buyurtma mexanizmi hamda qulay admin boshqaruv paneli.",
    
    // Project 2
    p2_title: "BioMaster",
    p2_badge: "EduTech / Full Stack",
    p2_desc: "Biologiya fanidan testlar va o‘quv materiallari platformasi. Talabalar va o‘quvchilar uchun interaktiv test sinovlari, natijalarni avtomatik hisoblash, statistik reyting va elektron darsliklar kutubxonasi.",

    // Project 3
    p3_title: "IshTop",
    p3_badge: "Platform / Full Stack",
    p3_desc: "Ish beruvchilar va ish qidiruvchilar uchun zamonaviy platforma. Rezyume topshirish tizimi, sohalar, maosh va hududlar bo‘yicha qulay filtrlash hamda kompaniyalar bilan to‘g‘ridan-to‘g‘ri aloqa.",

    // Coming Soon State
    projects_coming_label: "Loyihalar qo'shilmoqda",
    projects_coming_sub: "Yangi loyihalar tez orada bu yerda paydo bo'ladi",

    // Services
    services_tag: "04. XIZMATLAR",
    services_title: "MENING XIZMATLARIM",
    services_subtitle: "Sizning loyihangiz uchun individual va professional dasturlash yechimlari",
    
    srv1_title: "Frontend dasturlash",
    srv1_desc: "Foydalanuvchilar uchun jozibador, qulay, tezkor va interaktiv veb-interfeyslarni zamonaviy standartlar asosida noldan yaratish.",
    srv1_f1: "Semantik HTML5 & Zamonaviy CSS3",
    srv1_f2: "Interaktiv JavaScript (ES6+)",
    srv1_f3: "Glassmorphism va neon animatsiyalar",

    srv2_title: "Backend dasturlash",
    srv2_desc: "Python va Django asosida ishonchli, xavfsiz, ma'lumotlar bazasi bilan mustahkam ishlaydigan server arxitekturasi va RESTful API.",
    srv2_f1: "Django ORM va ma'lumotlar modeli",
    srv2_f2: "Xavfsiz autentifikatsiya & ruxsatlar",
    srv2_f3: "RESTful API integratsiyasi",

    srv3_title: "Full Stack dasturlash",
    srv3_desc: "G‘oyadan to‘liq tayyor veb-ilovagacha bo‘lgan kompleks yechim — frontend dizayndan tortib, backend mantig‘i va ma'lumotlar bazasigacha.",
    srv3_f1: "To‘liq siklli web dasturlash",
    srv3_f2: "Tezkor va xavfsiz server integratsiyasi",
    srv3_f3: "Birlashtirilgan arxitektura",

    srv4_title: "Responsive web saytlar yaratish",
    srv4_desc: "Smartfonlar, planshetlar, noutbuklar va katta monitorlarda birdek benuqson va tez ishlaydigan moslashuvchan dizayn.",
    srv4_f1: "100% Mobile-Friendly adaptatsiya",
    srv4_f2: "Kross-brauzer moslashuvchanlik",
    srv4_f3: "Yuqori tezlik va optimallashgan kod",

    // Contact
    contact_tag: "05. ALOQA",
    contact_title: "KELING, BIRGALIKDA LOYIHA YARATAMIZ!",
    contact_subtitle: "Yangi g‘oyangiz bormi yoki professional dasturchi kerakmi? Menga yozing, tez orada javob beraman.",
    contact_info_title: "Aloqa ma'lumotlari",
    contact_info_desc: "Men yangi loyihalar, frilans hamkorlik yoki to‘liq bandlik takliflarini muhokama qilishdan mamnunman.",
    contact_tg_lbl: "Telegram orqali yozish",
    contact_insta_lbl: "Instagram sahifam",
    contact_email_lbl: "Elektron pochta",
    contact_loc_lbl: "Manzil",
    contact_loc_val: "Samarqand, O‘zbekiston",
    contact_status_lbl: "Ish vaqti",
    contact_status_val: "Dushanba - Shanba (09:00 - 20:00)",
    
    // Form
    form_name_lbl: "Ismingiz",
    form_name_ph: "Masalan: Aziza Karimova",
    form_email_lbl: "Elektron pochtangiz",
    form_email_ph: "aziza@example.com",
    form_subject_lbl: "Mavzu",
    form_subject_ph: "Loyiha bo‘yicha taklif",
    form_msg_lbl: "Xabaringiz",
    form_msg_ph: "Loyihangiz va talablaringiz haqida batafsil yozing...",
    form_btn_submit: "Xabar yuborish",
    form_sending: "Yuborilmoqda...",
    form_success_msg: "Rahmat! Xabaringiz muvaffaqiyatli yuborildi. Tez orada javob qaytaraman.",
    form_error_msg: "Iltimos, barcha maydonlarni to‘g‘ri to‘ldiring!",

    // Footer
    footer_desc: "Zamonaviy raqamli tajribalarni yaratuvchi Full Stack dasturchi. Frontend va Backend texnologiyalari orqali g‘oyalarni real loyihalarga aylantiraman.",
    footer_nav_title: "Tezkor havolalar",
    footer_social_title: "Ijtimoiy tarmoqlar",
    footer_rights: "© 2026 KARIMOVACODER. Barcha huquqlar himoyalangan.",
    footer_made_with: "Sifat va ishtiyoq bilan yaratildi",
    back_to_top: "Yuqoriga",

    // Modals
    modal_preview_title: "Loyiha Tafsilotlari",
    modal_close: "Yopish",
    modal_cv_title: "Nigina Karimova — CV Ko‘rish",
    modal_cv_print: "Chop etish / PDF",
    modal_cv_open_new: "Alohida oynada ochish"
  },

  ru: {
    // Nav
    nav_home: "Главная",
    nav_about: "Обо мне",
    nav_skills: "Навыки",
    nav_projects: "Проекты",
    nav_services: "Услуги",
    nav_contact: "Контакты",
    nav_contact_btn: "Связаться",
    nav_lang: "RU",

    // Hero
    hero_greeting: "Привет, я Нигина Каримова",
    hero_title_prefix: "Создаю современные цифровые решения как ",
    hero_desc: "Увлекаюсь созданием современных, быстрых, адаптивных и функциональных веб-приложений. Превращаю идеи в надежные проекты с помощью передовых технологий Frontend и Backend.",
    hero_btn_projects: "Посмотреть проекты",
    hero_btn_cv: "Скачать резюме",
    hero_status: "⚡ Открыта для новых проектов",
    hero_badge_experience: "Опыт Full Stack",
    hero_badge_clean_code: "Чистый & Надежный Код",
    hero_badge_live: "Активный Разработчик",

    // Typewriter roles
    type_roles: [
      "Full Stack Разработчик",
      "Специалист по Python и Django",
      "Frontend Веб-разработчик",
      "Энтузиаст UI/UX"
    ],

    // About
    about_tag: "01. ОБО МНЕ",
    about_title: "ОБО МНЕ",
    about_subtitle: "Искусство создания кода и цифровых инноваций",
    about_p1: "Здравствуйте! Я Нигина Каримова — увлеченный Full Stack разработчик, создающий высокопроизводительные, удобные и надежные веб-приложения. Моя страсть к технологиям и стремление к совершенству помогают мне внедрять творческий и основательный инженерный подход в каждый проект.",
    about_p2: "Во Frontend части я создаю безупречные адаптивные интерфейсы с помощью HTML5, CSS3, Bootstrap 5 и современного JavaScript. В Backend направлении строю стабильные базы данных и надежную архитектуру REST API на базе Python и Django.",
    about_p3: "Моя главная цель — не просто писать код, а создавать качественные цифровые продукты, которые решают бизнес-задачи, приносят реальную пользу и радуют пользователей.",
    about_btn_cv: "Посмотреть резюме (CV)",
    about_stat1_num: "2+",
    about_stat1_lbl: "Года Практического Опыта",
    about_stat2_num: "15+",
    about_stat2_lbl: "Завершенных Проектов",
    about_stat3_num: "9+",
    about_stat3_lbl: "Освоенных Технологий",
    about_stat4_num: "100%",
    about_stat4_lbl: "Ответственность и Качество",

    // Skills
    skills_tag: "02. НАВЫКИ",
    skills_title: "МОИ НАВЫКИ",
    skills_subtitle: "Стек технологий, используемый для создания современных веб-приложений",
    skills_cat_frontend: "FRONTEND ТЕХНОЛОГИИ",
    skills_cat_backend: "BACKEND ТЕХНОЛОГИИ",
    skills_cat_tools: "ИНСТРУМЕНТЫ РАЗРАБОТКИ",
    
    // Skill items
    skill_html_desc: "Семантическая, доступная и SEO-оптимизированная веб-структура страниц.",
    skill_css_desc: "Flexbox, CSS Grid, Glassmorphism, неоновые анимации и современная стилизация.",
    skill_bs_desc: "Быстрое создание адаптивных, мобильных и красивых макетов с помощью Bootstrap 5.",
    skill_js_desc: "Динамичные интерфейсы, стандарты ES6+, манипуляции с DOM и асинхронные запросы AJAX/Fetch.",
    skill_py_desc: "Чистый, понятный и мощный язык программирования для серверной логики и алгоритмов.",
    skill_dj_desc: "Быстрая разработка, мощный ORM, безопасная аутентификация и масштабируемый REST API.",
    skill_git_desc: "Профессиональный контроль версий, управление ветками и отслеживание изменений.",
    skill_gh_desc: "Командная работа над кодом, управление репозиториями и публикация проектов.",
    skill_vsc_desc: "Оптимизированная среда разработки, продуктивные расширения и отладка кода.",

    // Projects
    projects_tag: "03. ПОРТФОЛИО",
    projects_title: "МОИ ПРОЕКТЫ",
    projects_subtitle: "Практические проекты, демонстрирующие надежность и внимание к деталям",
    filter_all: "Все",
    filter_fullstack: "Full Stack",
    filter_frontend: "Frontend",
    filter_backend: "Backend",
    project_btn_view: "Посмотреть проект",
    project_btn_github: "Код на GitHub",
    project_live_demo: "Демонстрация",

    // Project 1
    p1_title: "Online Store",
    p1_badge: "E-Commerce / Full Stack",
    p1_desc: "Платформа электронной коммерции и онлайн-магазина. Реализована интерактивная корзина покупок, интеллектуальная фильтрация товаров, безопасное оформление заказов и панель администратора.",

    // Project 2
    p2_title: "BioMaster",
    p2_badge: "EduTech / Full Stack",
    p2_desc: "Образовательная платформа тестирования и учебных материалов по биологии. Интерактивные тесты для студентов, автоматический подсчет баллов, статистика успеваемости и библиотека конспектов.",

    // Project 3
    p3_title: "IshTop",
    p3_badge: "Platform / Full Stack",
    p3_desc: "Современная площадка для работодателей и соискателей. Удобная система подачи резюме, поиск вакансий по категориям, заработной плате и городам, а также профили компаний.",

    // Coming Soon State
    projects_coming_label: "Проекты добавляются",
    projects_coming_sub: "Новые проекты скоро появятся здесь",

    // Services
    services_tag: "04. УСЛУГИ",
    services_title: "МОИ УСЛУГИ",
    services_subtitle: "Индивидуальные и профессиональные решения для разработки вашего продукта",

    srv1_title: "Frontend разработка",
    srv1_desc: "Создание привлекательных, удобных, быстрых и интерактивных веб-интерфейсов с нуля по современным стандартам.",
    srv1_f1: "Семантический HTML5 и современный CSS3",
    srv1_f2: "Интерактивный JavaScript (ES6+)",
    srv1_f3: "Glassmorphism и плавные неоновые эффекты",

    srv2_title: "Backend разработка",
    srv2_desc: "Надежная, безопасная серверная архитектура, работа с базами данных и разработка RESTful API на базе Python и Django.",
    srv2_f1: "Django ORM и проектирование моделей БД",
    srv2_f2: "Безопасная авторизация и права доступа",
    srv2_f3: "Разработка и интеграция REST API",

    srv3_title: "Full Stack разработка",
    srv3_desc: "Комплексное создание веб-приложений под ключ — от продуманного UI/UX до производительной серверной логики.",
    srv3_f1: "Полный цикл веб-разработки",
    srv3_f2: "Быстрая и защищенная интеграция",
    srv3_f3: "Единая гармоничная архитектура",

    srv4_title: "Создание адаптивных сайтов",
    srv4_desc: "Адаптивный дизайн, одинаково безупречно и плавно работающий на смартфонах, планшетах, ноутбуках и больших экранах.",
    srv4_f1: "100% Mobile-Friendly верстка",
    srv4_f2: "Кросс-браузерная совместимость",
    srv4_f3: "Высокая скорость загрузки страниц",

    // Contact
    contact_tag: "05. КОНТАКТЫ",
    contact_title: "ДАВАЙТЕ СОЗДАДИМ ПРОЕКТ ВМЕСТЕ!",
    contact_subtitle: "Есть интересная идея или нужен надежный разработчик? Напишите мне, и я отвечу в ближайшее время.",
    contact_info_title: "Контактная информация",
    contact_info_desc: "Я открыта для предложений о сотрудничестве, фриланс-проектах или работе в команде.",
    contact_tg_lbl: "Написать в Telegram",
    contact_insta_lbl: "Мой Instagram",
    contact_email_lbl: "Электронная почта",
    contact_loc_lbl: "Локация",
    contact_loc_val: "Самарканд, Узбекистан",
    contact_status_lbl: "График работы",
    contact_status_val: "Понедельник - Суббота (09:00 - 20:00)",

    // Form
    form_name_lbl: "Ваше имя",
    form_name_ph: "Например: Азиза Каримова",
    form_email_lbl: "Ваш Email",
    form_email_ph: "aziza@example.com",
    form_subject_lbl: "Тема сообщения",
    form_subject_ph: "Предложение по проекту",
    form_msg_lbl: "Ваше сообщение",
    form_msg_ph: "Расскажите подробнее о вашем проекте и задачах...",
    form_btn_submit: "Отправить сообщение",
    form_sending: "Отправка...",
    form_success_msg: "Спасибо! Ваше сообщение успешно отправлено. Я свяжусь с вами в ближайшее время.",
    form_error_msg: "Пожалуйста, заполните все обязательные поля корректно!",

    // Footer
    footer_desc: "Full Stack разработчик, создающий современные цифровые решения. Превращаю идеи в надежные проекты с помощью передовых веб-технологий.",
    footer_nav_title: "Навигация",
    footer_social_title: "Социальные сети",
    footer_rights: "© 2026 KARIMOVACODER. Все права защищены.",
    footer_made_with: "Создано со страстью и вниманием к деталям",
    back_to_top: "Наверх",

    // Modals
    modal_preview_title: "Детали Проекта",
    modal_close: "Закрыть",
    modal_cv_title: "Нигина Каримова — Просмотр Резюме",
    modal_cv_print: "Печать / Сохранить в PDF",
    modal_cv_open_new: "Открыть в новой вкладке"
  },

  en: {
    // Nav
    nav_home: "Home",
    nav_about: "About Me",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_services: "Services",
    nav_contact: "Contact",
    nav_contact_btn: "Get in Touch",
    nav_lang: "EN",

    // Hero
    hero_greeting: "Hello, I'm Nigina Karimova",
    hero_title_prefix: "Crafting modern digital experiences as a ",
    hero_desc: "Passionate about building fast, responsive, and functional web applications. Transforming ambitious ideas into impactful digital products through cutting-edge Frontend and robust Backend engineering.",
    hero_btn_projects: "Explore Projects",
    hero_btn_cv: "Download CV",
    hero_status: "⚡ Available for new projects",
    hero_badge_experience: "Full Stack Experience",
    hero_badge_clean_code: "Clean & Secure Architecture",
    hero_badge_live: "Active Developer",

    // Typewriter roles
    type_roles: [
      "Full Stack Developer",
      "Python & Django Specialist",
      "Frontend Web Developer",
      "UI/UX Enthusiast"
    ],

    // About
    about_tag: "01. ABOUT ME",
    about_title: "ABOUT ME",
    about_subtitle: "The art of clean coding and innovative digital craftsmanship",
    about_p1: "Hello! I am Nigina Karimova — a dedicated Full Stack Developer specializing in crafting high-performance, secure, and user-centric web applications. My genuine passion for technology and continuous learning drives me to deliver solid engineering combined with aesthetic design in every project.",
    about_p2: "On the Frontend, I leverage HTML5, CSS3, Bootstrap 5, and modern JavaScript to build pixel-perfect responsive interfaces that shine across all screen sizes. On the Backend, I engineer scalable databases and secure RESTful APIs powered by Python and Django.",
    about_p3: "My mission goes beyond merely writing code — it is about delivering meaningful digital solutions that solve real business problems, delight end users, and drive tangible results.",
    about_btn_cv: "View Resume (CV)",
    about_stat1_num: "2+",
    about_stat1_lbl: "Years Practical Experience",
    about_stat2_num: "15+",
    about_stat2_lbl: "Completed Projects",
    about_stat3_num: "9+",
    about_stat3_lbl: "Core Technologies Mastered",
    about_stat4_num: "100%",
    about_stat4_lbl: "Commitment & Quality",

    // Skills
    skills_tag: "02. SKILLS",
    skills_title: "MY TECH STACK",
    skills_subtitle: "Core technologies and modern tools I utilize to engineer outstanding web products",
    skills_cat_frontend: "FRONTEND TECHNOLOGIES",
    skills_cat_backend: "BACKEND TECHNOLOGIES",
    skills_cat_tools: "DEVELOPER TOOLS",

    // Skill items
    skill_html_desc: "Semantic, accessible, and SEO-optimized foundational markup structures.",
    skill_css_desc: "Flexbox, CSS Grid, Glassmorphism, neon glows, and sophisticated modern animations.",
    skill_bs_desc: "Rapid, mobile-first responsive layout architecture using Bootstrap 5.",
    skill_js_desc: "Dynamic interactivity, modern ES6+ features, DOM manipulation, and asynchronous APIs.",
    skill_py_desc: "Readable, clean, and powerful programming language for server logic and algorithms.",
    skill_dj_desc: "Rapid delivery, robust ORM, bulletproof authentication, and scalable RESTful API design.",
    skill_git_desc: "Professional version control, branch management, and collaborative revision tracking.",
    skill_gh_desc: "Remote repository management, team collaboration, and open-source contributions.",
    skill_vsc_desc: "High-productivity editor setup, tailored development extensions, and rapid debugging.",

    // Projects
    projects_tag: "03. PORTFOLIO",
    projects_title: "FEATURED PROJECTS",
    projects_subtitle: "Real-world web solutions engineered with passion, precision, and performance",
    filter_all: "All",
    filter_fullstack: "Full Stack",
    filter_frontend: "Frontend",
    filter_backend: "Backend",
    project_btn_view: "View Project",
    project_btn_github: "GitHub Code",
    project_live_demo: "Live Preview",

    // Project 1
    p1_title: "Online Store",
    p1_badge: "E-Commerce / Full Stack",
    p1_desc: "Modern digital storefront and e-commerce shopping platform. Features an interactive cart, instant search & product filtering, secure checkout flow, and an intuitive administration dashboard.",

    // Project 2
    p2_title: "BioMaster",
    p2_badge: "EduTech / Full Stack",
    p2_desc: "Comprehensive biology test and learning platform. Equips students with interactive timed quizzes, automatic grading, real-time score analytics, and a rich digital textbook library.",

    // Project 3
    p3_title: "IshTop",
    p3_badge: "Platform / Full Stack",
    p3_desc: "Career recruitment and job hunting portal. Streamlines applicant resume submissions, smart filtering across industries and salary ranges, employer profiles, and seamless hiring communication.",

    // Coming Soon State
    projects_coming_label: "Projects coming soon",
    projects_coming_sub: "New projects will appear here very soon",

    // Services
    services_tag: "04. SERVICES",
    services_title: "WHAT I OFFER",
    services_subtitle: "Tailored and professional full stack development services for your vision",

    srv1_title: "Frontend Development",
    srv1_desc: "Crafting engaging, responsive, fast, and interactive user interfaces from scratch adhering to modern standards.",
    srv1_f1: "Semantic HTML5 & Modern CSS3",
    srv1_f2: "Interactive JavaScript (ES6+)",
    srv1_f3: "Glassmorphism & Neon Visuals",

    srv2_title: "Backend Development",
    srv2_desc: "Reliable, robust server-side architecture, data management, and RESTful APIs powered by Python & Django.",
    srv2_f1: "Django ORM & Database Design",
    srv2_f2: "Secure Authentication & Permissions",
    srv2_f3: "High-speed REST API Integration",

    srv3_title: "Full Stack Development",
    srv3_desc: "End-to-end web product development — from intuitive client UI to powerful server logic and database storage.",
    srv3_f1: "End-to-end Web Engineering",
    srv3_f2: "Seamless Frontend-Backend Bridge",
    srv3_f3: "Unified Scalable Architecture",

    srv4_title: "Responsive Web Design",
    srv4_desc: "Pixel-perfect, fluid layouts optimized to deliver a fast and flawless experience across mobile, tablet, and desktop.",
    srv4_f1: "100% Mobile-Friendly Experience",
    srv4_f2: "Cross-Browser Compatibility",
    srv4_f3: "Lightning-Fast Page Load Speed",

    // Contact
    contact_tag: "05. CONTACT",
    contact_title: "LET'S BUILD SOMETHING GREAT TOGETHER!",
    contact_subtitle: "Have an exciting project idea or looking to hire a dedicated developer? Send me a message, and I will get back to you promptly.",
    contact_info_title: "Contact Details",
    contact_info_desc: "I am always open to exploring new freelance collaborations, freelance projects, or full-time opportunities.",
    contact_tg_lbl: "Message on Telegram",
    contact_insta_lbl: "My Instagram",
    contact_email_lbl: "Email Address",
    contact_loc_lbl: "Location",
    contact_loc_val: "Samarkand, Uzbekistan",
    contact_status_lbl: "Working Hours",
    contact_status_val: "Monday - Saturday (09:00 - 20:00)",

    // Form
    form_name_lbl: "Your Name",
    form_name_ph: "e.g. Aziza Karimova",
    form_email_lbl: "Your Email",
    form_email_ph: "aziza@example.com",
    form_subject_lbl: "Subject",
    form_subject_ph: "Project Collaboration Proposal",
    form_msg_lbl: "Your Message",
    form_msg_ph: "Describe your project, timeline, and key requirements...",
    form_btn_submit: "Send Message",
    form_sending: "Sending...",
    form_success_msg: "Thank you! Your message has been sent successfully. I will get back to you shortly.",
    form_error_msg: "Please fill in all required fields correctly!",

    // Footer
    footer_desc: "Full Stack Developer creating modern digital experiences. Bridging visionary concepts into reliable web solutions through Frontend & Backend mastery.",
    footer_nav_title: "Navigation",
    footer_social_title: "Social Connect",
    footer_rights: "© 2026 KARIMOVACODER. All rights reserved.",
    footer_made_with: "Crafted with passion for engineering excellence",
    back_to_top: "Back to top",

    // Modals
    modal_preview_title: "Project Overview",
    modal_close: "Close",
    modal_cv_title: "Nigina Karimova — Resume Preview",
    modal_cv_print: "Print / Save as PDF",
    modal_cv_open_new: "Open in New Tab"
  }
};

// Export for usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = translations;
}
