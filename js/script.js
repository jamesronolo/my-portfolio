// =====================
// Hamburger Menu Toggle
// =====================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// =====================
// Smooth Scroll for Navigation Links
// =====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// =====================
// Active Navigation Link Highlighting
// =====================

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// =====================
// Intersection Observer for Animations
// =====================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and elements
document.querySelectorAll('.skill-card, .project-card, .education-card, .about-text').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// =====================
// Contact Form Handler (if you add a form later)
// =====================

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// =====================
// Dark Mode Toggle (Optional)
// =====================

const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function toggleDarkMode() {
    const root = document.documentElement;
    
    if (prefersDarkScheme.matches) {
        root.style.setProperty('--bg-primary', '#1a1a1a');
        root.style.setProperty('--bg-secondary', '#242424');
        root.style.setProperty('--text-primary', '#ffffff');
        root.style.setProperty('--text-secondary', '#b0b0b0');
    }
}

// Check user's system preference on load
if (prefersDarkScheme.matches) {
    // Uncomment the line below to enable dark mode by default for dark scheme users
    // toggleDarkMode();
}

// =====================
// Console Message
// =====================

console.log('%cWelcome to James Ronolo\'s Portfolio! 🚀', 'font-size: 20px; font-weight: bold; color: #0066cc;');
console.log('%cFeel free to explore the code and reach out for opportunities!', 'font-size: 14px; color: #666;');