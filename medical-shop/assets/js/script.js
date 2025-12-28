// script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Load Data from content.js (storeData global)
    if (typeof storeData !== 'undefined') {
        loadContent(storeData);
    } else {
        console.error("storeData not found. details in content.js");
    }

    // 2. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // 3. Dynamic Copyright Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // 5. Scroll Reveal Animation
    revealOnScroll();
});

function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Animate only once
                }
            });
        }, { threshold: 0.1 });

        reveals.forEach(reveal => observer.observe(reveal));
    } else {
        reveals.forEach(reveal => reveal.classList.add('active'));
    }
}

function loadContent(data) {
    // --- Text Content Injection ---
    // Helper to safely set text content
    const setTxt = (selector, val) => {
        document.querySelectorAll(selector).forEach(el => el.textContent = val);
    };

    const info = data.info;

    // Header & Home
    setTxt('[data-content="name"]', info.name);
    setTxt('[data-content="tagline"]', info.tagline);

    // Buttons
    const whatsappUrl = `https://wa.me/${info.whatsapp}?text=Hi, I would like to order medicines.`;
    const callUrl = `tel:${info.phone}`;

    document.getElementById('hero-whatsapp').href = whatsappUrl;
    document.getElementById('order-cta-bottom').href = whatsappUrl;
    document.getElementById('hero-call').href = callUrl;

    // Show 'Call Now' in header only on mobile if needed, or always.
    const headerCta = document.getElementById('header-cta');
    headerCta.href = callUrl;
    headerCta.style.display = 'inline-flex'; // Unhide

    // About
    setTxt('[data-content="about-desc"]', data.about.description);
    setTxt('[data-content="mission"]', data.about.mission);
    setTxt('[data-content="license"]', `License: ${info.licenseNumber}`);

    // Contact Info
    setTxt('[data-content="address"]', info.address);
    setTxt('[data-content="phone"]', info.phone);
    setTxt('[data-content="hours"]', info.workingHours);
    setTxt('[data-content="pharmacist"]', info.pharmacistName);
    setTxt('[data-content="reg"]', info.pharmacistReg);

    // Map
    const mapContainer = document.getElementById('map-container');
    if (mapContainer && info.mapUrl) {
        mapContainer.innerHTML = `<iframe src="${info.mapUrl}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    }

    // --- Dynamic Lists Injection ---

    // 0. Main Shop Image (About Section)
    const mainImgContainer = document.getElementById('main-image-container');
    if (mainImgContainer && data.about.mainImage) {
        mainImgContainer.innerHTML = `
            <img src="assets/images/${data.about.mainImage}" alt="Main Shop View" style="width: 100%; height: auto; display: block;">
        `;
    }

    // 0.5 Gallery Images
    const galleryGrid = document.getElementById('gallery-grid');
    if (galleryGrid && data.about.galleryImages && data.about.galleryImages.length > 0) {
        galleryGrid.innerHTML = data.about.galleryImages.map(img => `
            <div class="gallery-img-wrapper">
                <img src="assets/images/${img}" alt="Gallery Image">
            </div>
        `).join('');
    }

    // 0.1 Licenses
    const licenseGallery = document.getElementById('license-gallery');
    if (licenseGallery && data.about.licenses && data.about.licenses.length > 0) {
        licenseGallery.innerHTML = data.about.licenses.map(img => `
            <img src="assets/images/${img}" alt="License" style="width: auto; max-width: 100%; height: 380px; object-fit: contain; background: white; border-radius: 0.5rem; box-shadow: var(--shadow-sm); cursor: pointer; border: 2px solid white;" onclick="window.open(this.src, '_blank')">
        `).join('');
    }

    // 1. Highlights (Hero)
    const highlightsContainer = document.getElementById('highlights-container');
    if (highlightsContainer && data.about.highlights) {
        highlightsContainer.innerHTML = data.about.highlights.map(item => `
            <div class="stat-item">
                <i class="${item.icon}" style="color: var(--accent-color)"></i>
                <span>${item.text}</span>
            </div>
        `).join('');
    }

    // 2. Categories
    const catGrid = document.getElementById('categories-grid');
    if (catGrid && data.categories) {
        catGrid.innerHTML = data.categories.map(cat => `
            <div class="category-card">
                <div class="cat-icon"><i class="${cat.icon}"></i></div>
                <h3 class="cat-title">${cat.title}</h3>
                <p style="color: var(--text-muted); font-size: 0.95rem;">${cat.description}</p>
                <div class="cat-note">${cat.note}</div>
            </div>
        `).join('');
    }

    // 3. Services
    const servGrid = document.getElementById('services-grid');
    if (servGrid && data.services) {
        servGrid.innerHTML = data.services.map(srv => `
            <div style="background: white; padding: 1.5rem; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);">
                <i class="${srv.icon}" style="font-size: 2rem; color: var(--primary-color); margin-bottom: 1rem;"></i>
                <h4 style="font-weight: 600;">${srv.title}</h4>
            </div>
        `).join('');
    }

    // 4. FAQs
    const faqContainer = document.getElementById('faq-container');
    if (faqContainer && data.faqs) {
        faqContainer.innerHTML = data.faqs.map((faq, index) => `
            <div class="faq-item">
                <div class="faq-question">
                    <span>${faq.question}</span>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="faq-answer">
                    <p>${faq.answer}</p>
                </div>
            </div>
         `).join('');
    }

    // Re-run FAQ setup since DOM changed
    setupFAQs();
}

function setupFAQs() {
    const questions = document.querySelectorAll('.faq-question');
    questions.forEach(q => {
        // Remove old listeners to prevent duplicates if called multiple times (though simple cloneNode replacement is better, this is fine for now)
        q.replaceWith(q.cloneNode(true));
    });

    // Re-select
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            // Close others 
            // document.querySelectorAll('.faq-item').forEach(i => {
            //     if(i !== item) i.classList.remove('active');
            // });
            item.classList.toggle('active');
        });
    });
}
