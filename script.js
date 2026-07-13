/* ============================================================
   SoftVault — JavaScript Logic
   ============================================================ */

// ─── Program Data ───────────────────────────────────────────
const programs = [
    {
        id: 1,
        name: "Visual Studio Code",
        category: "development",
        categoryLabel: "تطوير",
        icon: "💻",
        iconBg: "linear-gradient(135deg, #0078d4, #00bcf2)",
        badge: "free",
        badgeLabel: "مجاني",
        rating: 4.9,
        downloads: "120K",
        size: "95 MB",
        version: "1.92.0",
        license: "مجاني",
        os: "Windows / Mac / Linux",
        shortDesc: "محرر أكواد متطور من مايكروسوفت مع دعم لمئات لغات البرمجة والإضافات",
        fullDesc: "محرر أكواد مجاني وقوي من مايكروسوفت يدعم مئات لغات البرمجة. يتميز بالسرعة، الإكمال التلقائي الذكي، التصحيح المدمج، ونظام إضافات ضخم يجعله الخيار الأول للمطورين حول العالم.",
        features: [
            "إكمال تلقائي ذكي بتقنية IntelliSense",
            "تصحيح أخطاء مدمج متقدم",
            "دعم Git مدمج",
            "آلاف الإضافات المتاحة",
            "دعم أكثر من 100 لغة برمجة",
            "محطة أوامر مدمجة"
        ],
        website: "https://code.visualstudio.com"
    },
    {
        id: 2,
        name: "Discord",
        category: "communication",
        categoryLabel: "تواصل",
        icon: "🎮",
        iconBg: "linear-gradient(135deg, #5865F2, #7289da)",
        badge: "free",
        badgeLabel: "مجاني",
        rating: 4.7,
        downloads: "250K",
        size: "120 MB",
        version: "1.0.9045",
        license: "مجاني",
        os: "Windows / Mac / Linux",
        shortDesc: "منصة تواصل صوتي ونصي رائدة للمجتمعات واللاعبين والفرق",
        fullDesc: "تطبيق تواصل متعدد المنصات يوفر محادثات نصية وصوتية ومرئية عالية الجودة. مثالي للمجتمعات الإلكترونية، فرق العمل، واللاعبين. يتميز بخوادم مخصصة وأدوات إدارة متقدمة.",
        features: [
            "محادثات صوتية عالية الجودة",
            "مكالمات فيديو جماعية",
            "خوادم مخصصة مع قنوات متعددة",
            "مشاركة الشاشة أثناء اللعب",
            "بوتات وأدوات تفاعلية",
            "تكامل مع الألعاب والتطبيقات"
        ],
        website: "https://discord.com"
    },
    {
        id: 3,
        name: "VLC Media Player",
        category: "media",
        categoryLabel: "وسائط",
        icon: "🎬",
        iconBg: "linear-gradient(135deg, #ff7b00, #ff5722)",
        badge: "open",
        badgeLabel: "مفتوح المصدر",
        rating: 4.8,
        downloads: "300K",
        size: "42 MB",
        version: "3.0.21",
        license: "مفتوح المصدر",
        os: "Windows / Mac / Linux",
        shortDesc: "مشغل وسائط متعددة مفتوح المصدر يدعم جميع الصيغ بدون حاجة لأكواد إضافية",
        fullDesc: "مشغل وسائط متعددة مجاني ومفتوح المصدر يدعم تشغيل أي صيغة فيديو أو صوت بدون الحاجة لتثبيت أي أكواد إضافية. يتميز بالبساطة والقوة وعدم احتوائه على إعلانات أو برامج تجسس.",
        features: [
            "يدعم جميع صيغ الفيديو والصوت",
            "بدون إعلانات أو برامج تجسس",
            "تشغيل الترجمة تلقائياً",
            "بث مباشر من الإنترنت",
            "تحويل صيغ الملفات",
            "تسجيل الشاشة"
        ],
        website: "https://www.videolan.org/vlc/"
    },
    {
        id: 4,
        name: "7-Zip",
        category: "utilities",
        categoryLabel: "أدوات",
        icon: "📦",
        iconBg: "linear-gradient(135deg, #607d8b, #455a64)",
        badge: "free",
        badgeLabel: "مجاني",
        rating: 4.6,
        downloads: "180K",
        size: "1.5 MB",
        version: "24.08",
        license: "مفتوح المصدر",
        os: "Windows",
        shortDesc: "أداة ضغط ملفات مجانية ومفتوحة المصدر بنسبة ضغط عالية جداً",
        fullDesc: "برنامج ضغط وفك ضغط الملفات الأقوى والأسرع. يدعم صيغ متعددة مثل 7z, ZIP, RAR, TAR وغيرها. يتميز بنسبة ضغط عالية جداً مع صيغة 7z الخاصة به، وهو مجاني ومفتوح المصدر بالكامل.",
        features: [
            "نسبة ضغط عالية مع صيغة 7z",
            "دعم صيغ متعددة (ZIP, RAR, TAR...)",
            "تشفير AES-256 للحماية",
            "اندماج مع قائمة النقر اليمنى",
            "مدير ملفات مدمج",
            "خفيف جداً على الموارد"
        ],
        website: "https://www.7-zip.org"
    },
    {
        id: 5,
        name: "OBS Studio",
        category: "media",
        categoryLabel: "وسائط",
        icon: "🎥",
        iconBg: "linear-gradient(135deg, #302b63, #24243e)",
        badge: "open",
        badgeLabel: "مفتوح المصدر",
        rating: 4.8,
        downloads: "90K",
        size: "115 MB",
        version: "31.0",
        license: "مفتوح المصدر",
        os: "Windows / Mac / Linux",
        shortDesc: "برنامج تسجيل الشاشة والبث المباشر الاحترافي الأول عالمياً",
        fullDesc: "برنامج تسجيل الشاشة والبث المباشر الأكثر استخداماً في العالم. يوفر أدوات احترافية لإنشاء محتوى فيديو عالي الجودة، البث على يوتيوب وتويتش، مع مشاهد وفلاتر ومصادر متعددة.",
        features: [
            "تسجيل فيديو بدقة 4K",
            "بث مباشر على يوتيوب وتويتش",
            "مشاهد ومصادر متعددة",
            "فلاتر وتأثيرات بصرية",
            "خلاط صوت متقدم",
            "إضافات من المجتمع"
        ],
        website: "https://obsproject.com"
    },
    {
        id: 6,
        name: "Notepad++",
        category: "development",
        categoryLabel: "تطوير",
        icon: "📝",
        iconBg: "linear-gradient(135deg, #8bc34a, #4caf50)",
        badge: "free",
        badgeLabel: "مجاني",
        rating: 4.7,
        downloads: "200K",
        size: "4 MB",
        version: "8.7",
        license: "مجاني",
        os: "Windows",
        shortDesc: "محرر نصوص متقدم وخفيف مع دعم لغات البرمجة وتلوين الأكواد",
        fullDesc: "محرر نصوص وأكواد خفيف وسريع يدعم أكثر من 80 لغة برمجة. يتميز بتلوين الأكواد، البحث والاستبدال المتقدم، الألسنة المتعددة، ونظام إضافات. بديل مثالي لمفكرة الويندوز.",
        features: [
            "تلوين أكواد لأكثر من 80 لغة",
            "البحث والاستبدال بالتعبيرات النمطية",
            "ألسنة متعددة",
            "سجل التعديلات والتراجع",
            "نظام إضافات واسع",
            "خفيف وسريع جداً"
        ],
        website: "https://notepad-plus-plus.org"
    },
    {
        id: 7,
        name: "Firefox",
        category: "browsers",
        categoryLabel: "متصفحات",
        icon: "🦊",
        iconBg: "linear-gradient(135deg, #ff6611, #ff3366)",
        badge: "free",
        badgeLabel: "مجاني",
        rating: 4.5,
        downloads: "150K",
        size: "55 MB",
        version: "131.0",
        license: "مفتوح المصدر",
        os: "Windows / Mac / Linux",
        shortDesc: "متصفح إنترنت سريع وآمن مع حماية خصوصية متقدمة من موزيلا",
        fullDesc: "متصفح إنترنت مفتوح المصدر من موزيلا يركز على الخصوصية والسرعة. يوفر حماية متقدمة من التتبع، حاجب إعلانات مدمج، ومزامنة عبر الأجهزة. خيار ممتاز لمن يهتم بخصوصيته.",
        features: [
            "حماية متقدمة من التتبع",
            "حاجب إعلانات مدمج",
            "مزامنة عبر الأجهزة",
            "إضافات وسمات متنوعة",
            "أدوات مطوري ويب متقدمة",
            "وضع القراءة"
        ],
        website: "https://www.mozilla.org/firefox"
    },
    {
        id: 8,
        name: "CCleaner",
        category: "utilities",
        categoryLabel: "أدوات",
        icon: "🧹",
        iconBg: "linear-gradient(135deg, #2196f3, #03a9f4)",
        badge: "paid",
        badgeLabel: "مدفوع",
        rating: 4.4,
        downloads: "100K",
        size: "38 MB",
        version: "6.27",
        license: "مجاني / مدفوع",
        os: "Windows / Mac",
        shortDesc: "أداة تنظيف وتسريع الكمبيوتر الأشهر عالمياً مع تحسين أداء النظام",
        fullDesc: "برنامج تنظيف وصيانة الكمبيوتر الأكثر شهرة. يزيل الملفات المؤقتة، ينظف سجل الويندوز، يدير برامج بدء التشغيل، ويحسّن أداء الجهاز بشكل ملحوظ. متوفر بنسخة مجانية ومدفوعة.",
        features: [
            "تنظيف الملفات المؤقتة والمخلفات",
            "تنظيف سجل الويندوز",
            "إدارة برامج بدء التشغيل",
            "حذف آمن للملفات",
            "تحديث البرامج تلقائياً",
            "فحص صحة النظام"
        ],
        website: "https://www.ccleaner.com"
    }
];

// ─── DOM Elements ───────────────────────────────────────────
const programsGrid = document.getElementById('programsGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const themeToggle = document.getElementById('themeToggle');
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTop');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const newsletterForm = document.getElementById('newsletterForm');
const categoryCards = document.querySelectorAll('.category-card');

let activeCategory = 'all';

// ─── Render Program Cards ───────────────────────────────────
function renderPrograms(filteredPrograms) {
    programsGrid.innerHTML = '';

    if (filteredPrograms.length === 0) {
        programsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                <div style="font-size: 3rem; margin-bottom: 16px;">🔍</div>
                <h3 style="margin-bottom: 8px; color: var(--text-primary);">لا توجد نتائج</h3>
                <p style="color: var(--text-secondary);">حاول البحث بكلمات مختلفة أو اختر تصنيفاً آخر</p>
            </div>
        `;
        return;
    }

    filteredPrograms.forEach((program, index) => {
        const card = document.createElement('div');
        card.className = 'program-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.dataset.programId = program.id;

        const badgeClass = program.badge === 'free' ? 'badge-free' :
                           program.badge === 'paid' ? 'badge-paid' : 'badge-open';

        card.innerHTML = `
            <div class="card-header">
                <div class="card-icon" style="background: ${program.iconBg};">
                    ${program.icon}
                </div>
                <div class="card-info">
                    <h3 class="card-title">${program.name}</h3>
                    <span class="card-category">${program.categoryLabel}</span>
                </div>
                <span class="card-badge ${badgeClass}">${program.badgeLabel}</span>
            </div>
            <div class="card-body">
                <p class="card-desc">${program.shortDesc}</p>
            </div>
            <div class="card-meta">
                <span class="meta-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    ${program.downloads}
                </span>
                <span class="meta-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 7h5M17 17h5"/></svg>
                    ${program.size}
                </span>
                <span class="meta-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                    v${program.version}
                </span>
            </div>
            <div class="card-footer">
                <div class="card-rating">
                    ${generateStars(program.rating)}
                    <span class="rating-value">${program.rating}</span>
                </div>
                <button class="card-download-btn" onclick="event.stopPropagation();">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    تحميل
                </button>
            </div>
        `;

        // Click to open modal
        card.addEventListener('click', () => openModal(program));

        programsGrid.appendChild(card);
    });
}

function generateStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    let html = '';
    for (let i = 0; i < full; i++) html += '<span class="star">★</span>';
    if (half) html += '<span class="star">★</span>';
    for (let i = 0; i < empty; i++) html += '<span class="star" style="opacity:0.3">★</span>';
    return html;
}

// ─── Category Filter ────────────────────────────────────────
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        categoryCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        activeCategory = card.dataset.category;
        filterAndRender();
    });
});

function filterAndRender() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    let filtered = programs;

    if (activeCategory !== 'all') {
        filtered = filtered.filter(p => p.category === activeCategory);
    }

    if (searchTerm) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(searchTerm) ||
            p.shortDesc.includes(searchTerm) ||
            p.categoryLabel.includes(searchTerm)
        );
    }

    renderPrograms(filtered);
}

// ─── Search ─────────────────────────────────────────────────
searchInput.addEventListener('input', debounce(filterAndRender, 300));
searchBtn.addEventListener('click', filterAndRender);

function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

// ─── Modal ──────────────────────────────────────────────────
function openModal(program) {
    document.getElementById('modalIcon').style.background = program.iconBg;
    document.getElementById('modalIcon').textContent = program.icon;
    document.getElementById('modalTitle').textContent = program.name;
    document.getElementById('modalCategory').textContent = program.categoryLabel;
    document.getElementById('modalDescription').textContent = program.fullDesc;
    document.getElementById('modalVersion').textContent = program.version;
    document.getElementById('modalSize').textContent = program.size;
    document.getElementById('modalLicense').textContent = program.license;
    document.getElementById('modalOS').textContent = program.os;
    document.getElementById('modalWebsite').href = program.website;
    document.getElementById('modalDownload').href = program.website;

    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = program.features.map(f => `<li>${f}</li>`).join('');

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ─── Theme Toggle ───────────────────────────────────────────
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('softvault-theme', theme);
}

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'light' ? 'dark' : 'light');
});

// Initialize theme
const savedTheme = localStorage.getItem('softvault-theme') || 'dark';
setTheme(savedTheme);

// ─── Mobile Menu ────────────────────────────────────────────
mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileToggle.classList.toggle('active');
});

// Close mobile menu on link click
navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.classList.remove('active');
    });
});

// ─── Navbar Scroll ──────────────────────────────────────────
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Navbar background
    if (scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Scroll-to-top button
    if (scrollY > 400) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }

    // Active nav link based on section
    updateActiveNavLink();
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

function updateActiveNavLink() {
    const sections = ['home', 'categories', 'programs', 'features'];
    const navLinksAll = document.querySelectorAll('.nav-link');
    let currentSection = 'home';

    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150) {
                currentSection = id;
            }
        }
    });

    navLinksAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ─── Animated Counter ───────────────────────────────────────
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.count);
        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);

            counter.textContent = current;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                counter.textContent = target;
            }
        }

        requestAnimationFrame(update);
    });
}

// Intersection observer for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);

// ─── Scroll Reveal Animation ────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.category-card, .feature-card, .newsletter-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(el);
});

// ─── Background Particles ───────────────────────────────────
function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 25;
    const colors = ['#6366f1', '#a855f7', '#3b82f6', '#ec4899'];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 6 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];

        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${Math.random() * 100}%;
            background: ${color};
            animation-duration: ${Math.random() * 20 + 15}s;
            animation-delay: ${Math.random() * 10}s;
        `;
        container.appendChild(particle);
    }
}

createParticles();

// ─── Newsletter Form ────────────────────────────────────────
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('emailInput');
    const btn = newsletterForm.querySelector('.btn');
    const originalText = btn.innerHTML;

    btn.innerHTML = '<span>✓ تم الاشتراك بنجاح!</span>';
    btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

    email.value = '';

    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
    }, 3000);
});

// ─── Smooth Nav Link Scroll ─────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ─── Initialize ─────────────────────────────────────────────
renderPrograms(programs);
