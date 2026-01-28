// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');

// Theme Management
const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    document.body.classList.add(savedTheme);
    updateThemeIcon(savedTheme);
};

const toggleTheme = () => {
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    if (isDarkMode) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
        updateThemeIcon('light-mode');
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        updateThemeIcon('dark-mode');
    }
};

const updateThemeIcon = (theme) => {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark-mode') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
};

// Mobile Menu Toggle
const toggleMobileMenu = () => {
    navMenu.classList.toggle('active');
};

const closeMobileMenu = () => {
    navMenu.classList.remove('active');
};

// Event Listeners - Theme
themeToggle.addEventListener('click', toggleTheme);

// Event Listeners - Mobile Menu
hamburger.addEventListener('click', toggleMobileMenu);
navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        closeMobileMenu();
    }
});

// Form Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }

    // Simulate form submission
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    setTimeout(() => {
        showNotification('Message sent successfully! Thank you for reaching out.', 'success');
        contactForm.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 1500);
});

// Notification System
const showNotification = (message, type = 'info') => {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        font-weight: 500;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        ${type === 'success' ? 'background-color: #28a745; color: white;' : ''}
        ${type === 'error' ? 'background-color: #dc3545; color: white;' : ''}
        ${type === 'info' ? 'background-color: #007bff; color: white;' : ''}
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
};

// Smooth Scroll Enhancement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .project-card, .info-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Initialize theme on page load
window.addEventListener('DOMContentLoaded', () => {
    initTheme();
});

// Add missing CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);