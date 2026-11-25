/**
 * KARIMOVACODER — Main Application Script (V2 Ultra Edition)
 * Features:
 *  - Real-time 3-Language Switcher (UZ / RU / EN) with LocalStorage
 *  - Futuristic Digital Preloader
 *  - Interactive Constellation Particle Canvas
 *  - Dynamic Role Typewriter Effect
 *  - Floating Island Navbar & Smooth Scrollspy
 *  - 3D Interactive Tilt & Mouse Spotlight Tracking
 *  - Portfolio Filter System
 *  - Interactive Project Preview & CV Modals
 *  - Validated Contact Form with Toast Alerts
 *  - Back-to-Top Floating Trigger
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Language Initialization
  initLanguage();

  // 2. Preloader
  initPreloader();

  // 3. Ambient Canvas Particles
  initParticleCanvas();

  // 4. Typewriter Effect
  initTypewriter();

  // 5. Navbar & Scrollspy
  initNavbar();

  // 6. Interactive 3D Tilt & Spotlights
  initCardInteractions();

  // 7. Portfolio Filter
  initProjectFilter();

  // 8. Modals (Projects & CV)
  initModals();

  // 9. Contact Form Handling
  initContactForm();

  // 10. Back to Top Button
  initBackToTop();

  // 11. Scroll Reveal Animations
  initScrollReveal();
});

/* ==========================================================================
   1. Multilingual Translation Engine
   ========================================================================== */
let currentLang = 'uz';

function initLanguage() {
  const savedLang = localStorage.getItem('karimovacoder_lang');
  if (savedLang && ['uz', 'ru', 'en'].includes(savedLang)) {
    currentLang = savedLang;
  } else {
    currentLang = 'uz';
  }

  // Language Dropdown elements
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const langWrapper = document.querySelector('.lang-dropdown-wrapper');
  const langItems = document.querySelectorAll('.lang-item');

  if (langToggleBtn && langWrapper) {
    langToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langWrapper.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!langWrapper.contains(e.target)) {
        langWrapper.classList.remove('open');
      }
    });

    langItems.forEach(item => {
      item.addEventListener('click', () => {
        const selectedLang = item.getAttribute('data-lang');
        if (selectedLang) {
          setLanguage(selectedLang);
          langWrapper.classList.remove('open');
        }
      });
    });
  }

  // Apply initial language
  setLanguage(currentLang);
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('karimovacoder_lang', lang);
  document.documentElement.lang = lang;

  // Update UI Elements with data-i18n
  const translatables = document.querySelectorAll('[data-i18n]');
  translatables.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update Attributes with data-i18n-attr (e.g. placeholder:form_name_ph)
  const attrTranslatables = document.querySelectorAll('[data-i18n-attr]');
  attrTranslatables.forEach(el => {
    const raw = el.getAttribute('data-i18n-attr');
    const pairs = raw.split(';');
    pairs.forEach(pair => {
      const [attr, key] = pair.split(':').map(s => s.trim());
      if (attr && key && translations[lang][key] !== undefined) {
        el.setAttribute(attr, translations[lang][key]);
      }
    });
  });

  // Update Language Button Label
  const currentLangLabel = document.getElementById('current-lang-label');
  if (currentLangLabel) {
    currentLangLabel.textContent = lang.toUpperCase();
  }

  // Update active state in menu
  document.querySelectorAll('.lang-item').forEach(item => {
    if (item.getAttribute('data-lang') === lang) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Update dynamic document title
  const titles = {
    uz: "KARIMOVACODER — Full Stack Dasturchi Portfoliosi",
    ru: "KARIMOVACODER — Портфолио Full Stack Разработчика",
    en: "KARIMOVACODER — Premium Full Stack Developer Portfolio"
  };
  document.title = titles[lang] || titles.uz;

  // Restart typewriter with new language roles
  if (window.typewriterReset) {
    window.typewriterReset();
  }
}

/* ==========================================================================
   2. Preloader Animation
   ========================================================================== */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  const progressBar = document.querySelector('.loader-progress');
  const progressText = document.querySelector('.loader-text');

  if (!preloader || !progressBar) return;

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 12;
    if (progress > 100) progress = 100;

    progressBar.style.width = progress + '%';
    if (progressText) {
      progressText.textContent = `${progress}% SYSTEM READY`;
    }

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        preloader.classList.add('hidden');
      }, 250);
    }
  }, 35);
}

/* ==========================================================================
   3. Interactive Ambient Particle Canvas
   ========================================================================== */
function initParticleCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = window.innerWidth < 768 ? 40 : 85;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 2 + 0.8,
      alpha: Math.random() * 0.55 + 0.2
    });
  }

  let mouseX = -1000;
  let mouseY = -1000;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function draw() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
      ctx.fill();

      // Connect near particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 115) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.14 * (1 - dist / 115)})`;
          ctx.lineWidth = 0.85;
          ctx.stroke();
        }
      }

      // Connect to mouse gently
      const mouseDist = Math.hypot(p.x - mouseX, p.y - mouseY);
      if (mouseDist < 130) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouseX, mouseY);
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.28 * (1 - mouseDist / 130)})`;
        ctx.lineWidth = 1.1;
        ctx.stroke();
      }
    }

    requestAnimationFrame(draw);
  }

  draw();
}

/* ==========================================================================
   4. Typewriter Dynamic Roles
   ========================================================================== */
function initTypewriter() {
  const typeTarget = document.getElementById('typewriter-text');
  if (!typeTarget) return;

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 85;
  let timeoutId = null;

  function type() {
    const roles = (translations[currentLang] && translations[currentLang].type_roles) 
      ? translations[currentLang].type_roles 
      : ["Full Stack Dasturchi", "Python & Django Mutaxassisi"];

    const currentRole = roles[roleIndex % roles.length];

    if (isDeleting) {
      typeTarget.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 40;
    } else {
      typeTarget.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 85;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 1900; // Pause at full word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex++;
      typingSpeed = 380; // Pause before new word
    }

    timeoutId = setTimeout(type, typingSpeed);
  }

  type();

  // Reset function called on language change
  window.typewriterReset = () => {
    clearTimeout(timeoutId);
    isDeleting = false;
    charIndex = 0;
    roleIndex = 0;
    typeTarget.textContent = '';
    type();
  };
}

/* ==========================================================================
   5. Floating Island Navbar & Smooth Scrollspy
   ========================================================================== */
function initNavbar() {
  const navbar = document.querySelector('.custom-navbar');
  const toggler = document.querySelector('.navbar-toggler-kc');
  const collapseMobile = document.querySelector('.navbar-collapse-mobile');
  const navLinks = document.querySelectorAll('.custom-navbar .nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Scroll styling
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      if (navbar) navbar.classList.add('scrolled');
    } else {
      if (navbar) navbar.classList.remove('scrolled');
    }

    // Scrollspy active link
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 130;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile drawer toggle
  if (toggler && collapseMobile) {
    toggler.addEventListener('click', (e) => {
      e.stopPropagation();
      collapseMobile.classList.toggle('show');
      const icon = toggler.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        collapseMobile.classList.remove('show');
        const icon = toggler.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!collapseMobile.contains(e.target) && !toggler.contains(e.target)) {
        collapseMobile.classList.remove('show');
        const icon = toggler.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      }
    });
  }
}

/* ==========================================================================
   6. 3D Card Tilt & Spotlight Tracking
   ========================================================================== */
function initCardInteractions() {
  // Spotlight tracking on cards
  const spotlightCards = document.querySelectorAll('.spotlight-card, .skill-card, .service-card, .project-card, .contact-method-item');
  spotlightCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // 3D Tilt on Hero Photo Terminal Window
  const photoCard = document.querySelector('.photo-terminal-window, .photo-cyber-card');
  if (photoCard) {
    photoCard.addEventListener('mousemove', (e) => {
      const rect = photoCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      photoCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    photoCard.addEventListener('mouseleave', () => {
      photoCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }
}

/* ==========================================================================
   7. Portfolio Category Filter
   ========================================================================== */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue || category === 'fullstack') {
          card.style.display = 'flex';
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.transition = 'all 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   8. Modals (Project Overview & CV Preview)
   ========================================================================== */
function initModals() {
  const projectModal = document.getElementById('project-modal');
  const cvModal = document.getElementById('cv-modal');
  const closeBtns = document.querySelectorAll('.modal-close-trigger');

  // Open Project Modal
  const projectViewBtns = document.querySelectorAll('.btn-project-view');
  projectViewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      populateProjectModal(projectId);
      if (projectModal) {
        projectModal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Open CV Modal
  const cvBtns = document.querySelectorAll('.btn-open-cv');
  cvBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (cvModal) {
        cvModal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close Modals
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      closeAllModals();
    });
  });

  // Close when clicking backdrop
  [projectModal, cvModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeAllModals();
        }
      });
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  function closeAllModals() {
    if (projectModal) projectModal.classList.remove('open');
    if (cvModal) cvModal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Populate Project Modal Data
function populateProjectModal(projectId) {
  const titleEl = document.getElementById('modal-project-title');
  const badgeEl = document.getElementById('modal-project-badge');
  const descEl = document.getElementById('modal-project-desc');
  const imgEl = document.getElementById('modal-project-img');
  const techEl = document.getElementById('modal-project-tech');
  const liveBtn = document.getElementById('modal-project-live');
  const githubBtn = document.getElementById('modal-project-github');

  const projectDetails = {
    'store': {
      titleKey: 'p1_title',
      badgeKey: 'p1_badge',
      descKey: 'p1_desc',
      img: 'assets/images/project-ecommerce.svg',
      tech: ['Python', 'Django', 'JavaScript', 'Bootstrap 5', 'SQLite', 'REST API'],
      liveUrl: 'https://karimovacoder.uz/demo/store',
      githubUrl: 'https://github.com/karimovacoder/online-store-django'
    },
    'biomaster': {
      titleKey: 'p2_title',
      badgeKey: 'p2_badge',
      descKey: 'p2_desc',
      img: 'assets/images/project-biomaster.svg',
      tech: ['Python', 'Django', 'JavaScript (ES6)', 'HTML5/CSS3', 'Analytics ORM'],
      liveUrl: 'https://karimovacoder.uz/demo/biomaster',
      githubUrl: 'https://github.com/karimovacoder/biomaster-edu-platform'
    },
    'ishtop': {
      titleKey: 'p3_title',
      badgeKey: 'p3_badge',
      descKey: 'p3_desc',
      img: 'assets/images/project-ishtop.svg',
      tech: ['Python', 'Django', 'JavaScript', 'Bootstrap 5', 'PostgreSQL', 'Full Stack'],
      liveUrl: 'https://karimovacoder.uz/demo/ishtop',
      githubUrl: 'https://github.com/karimovacoder/ishtop-job-portal'
    }
  };

  const data = projectDetails[projectId] || projectDetails['store'];

  if (titleEl) titleEl.textContent = translations[currentLang][data.titleKey] || data.titleKey;
  if (badgeEl) badgeEl.textContent = translations[currentLang][data.badgeKey] || data.badgeKey;
  if (descEl) descEl.textContent = translations[currentLang][data.descKey] || data.descKey;
  if (imgEl) imgEl.src = data.img;

  if (techEl) {
    techEl.innerHTML = '';
    data.tech.forEach(t => {
      const tag = document.createElement('span');
      tag.className = 'tech-tag';
      tag.textContent = t;
      techEl.appendChild(tag);
    });
  }

  if (liveBtn) liveBtn.href = data.liveUrl;
  if (githubBtn) githubBtn.href = data.githubUrl;
}

/* ==========================================================================
   9. Contact Form Handling & Validation
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const alertBox = document.getElementById('contact-form-alert');
  const submitBtn = document.getElementById('contact-submit-btn');

  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !subject || !message || !emailRegex.test(email) || message.length < 5) {
      showAlert(translations[currentLang].form_error_msg, 'error');
      return;
    }

    // Submit state
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${translations[currentLang].form_sending}`;

    // Simulate async request (ready for Django backend)
    setTimeout(() => {
      showAlert(translations[currentLang].form_success_msg, 'success');
      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }, 1200);
  });

  function showAlert(msg, type) {
    if (!alertBox) return;
    alertBox.className = `form-alert ${type}`;
    alertBox.innerHTML = `
      <i class="${type === 'success' ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-exclamation'}"></i>
      <span>${msg}</span>
    `;
    alertBox.style.display = 'flex';

    setTimeout(() => {
      alertBox.style.display = 'none';
    }, 6000);
  }
}

/* ==========================================================================
   10. Back to Top Button
   ========================================================================== */
function initBackToTop() {
  const backBtn = document.getElementById('back-to-top');
  if (!backBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
      backBtn.classList.add('show');
    } else {
      backBtn.classList.remove('show');
    }
  });

  backBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   11. Scroll Reveal Animations
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  revealElements.forEach(el => observer.observe(el));
}
