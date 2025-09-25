// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    }
});

// Tock button click handling
const tockButton = document.querySelector('.tock-button');
if (tockButton) {
    tockButton.addEventListener('click', function(e) {
        // Add click effect
        addClinkEffect();
        
        // Optional: Add analytics tracking here
        console.log('User clicked Tock reservation button');
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature, .menu-item, .menu-category');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.splash-image');
    if (heroImage) {
        const speed = scrolled * 0.5;
        heroImage.style.transform = `translateY(${speed}px)`;
    }
});

// Custom Cursor
let cursor = null;
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let isAnimating = false;

function createCustomCursor() {
    cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
}

function updateCursor(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    if (!isAnimating) {
        animateCursor();
    }
}

function animateCursor() {
    isAnimating = true;
    
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    
    if (cursor) {
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
    }
    
    if (Math.abs(mouseX - cursorX) > 0.1 || Math.abs(mouseY - cursorY) > 0.1) {
        requestAnimationFrame(animateCursor);
    } else {
        isAnimating = false;
    }
}

function addCursorHover() {
    if (cursor) {
        cursor.classList.add('hover');
    }
}

function removeCursorHover() {
    if (cursor) {
        cursor.classList.remove('hover');
    }
}

function addCursorClick() {
    if (cursor) {
        cursor.classList.add('click');
        setTimeout(() => {
            cursor.classList.remove('click');
        }, 150);
    }
}

// Initialize custom cursor
document.addEventListener('DOMContentLoaded', () => {
    createCustomCursor();
    
    // Track mouse movement
    document.addEventListener('mousemove', updateCursor);
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .nav-link, .menu-item, .feature, .tock-button, .cta-button');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', addCursorHover);
        element.addEventListener('mouseleave', removeCursorHover);
        element.addEventListener('click', addCursorClick);
    });
    
    // Hide cursor when mouse leaves window
    document.addEventListener('mouseleave', () => {
        if (cursor) cursor.style.opacity = '0';
    });
    
    // Show cursor when mouse enters window
    document.addEventListener('mouseenter', () => {
        if (cursor) cursor.style.opacity = '0.8';
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// CTA Button click handler
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', () => {
        const reservationsSection = document.querySelector('#reservations');
        if (reservationsSection) {
            reservationsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add hover effects to menu items
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.borderLeftColor = '#059669';
        this.style.boxShadow = '0 5px 20px rgba(16, 185, 129, 0.2)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.borderLeftColor = '#10b981';
        this.style.boxShadow = 'none';
    });
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 80);
        }, 500);
    }
});

// Add champagne bubble animation
function createBubble() {
    const bubble = document.createElement('div');
    bubble.style.position = 'fixed';
    bubble.style.width = '10px';
    bubble.style.height = '10px';
    bubble.style.background = 'rgba(16, 185, 129, 0.3)';
    bubble.style.borderRadius = '50%';
    bubble.style.left = Math.random() * window.innerWidth + 'px';
    bubble.style.bottom = '-10px';
    bubble.style.pointerEvents = 'none';
    bubble.style.zIndex = '1';
    bubble.style.animation = 'bubbleUp 8s linear infinite';
    
    document.body.appendChild(bubble);
    
    setTimeout(() => {
        bubble.remove();
    }, 8000);
}

// Add bubble animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes bubbleUp {
        0% {
            transform: translateY(0) scale(0);
            opacity: 0.7;
        }
        50% {
            opacity: 0.3;
        }
        100% {
            transform: translateY(-100vh) scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Create bubbles periodically
setInterval(createBubble, 3000);

// Add champagne glass clink sound effect (visual only)
function addClinkEffect() {
    const clink = document.createElement('div');
    clink.style.position = 'fixed';
    clink.style.top = '50%';
    clink.style.left = '50%';
    clink.style.transform = 'translate(-50%, -50%)';
    clink.style.fontSize = '2rem';
    clink.style.color = '#10b981';
    clink.style.pointerEvents = 'none';
    clink.style.zIndex = '1000';
    clink.textContent = '🥂';
    clink.style.animation = 'clinkEffect 1s ease-out forwards';
    
    document.body.appendChild(clink);
    
    setTimeout(() => {
        clink.remove();
    }, 1000);
}

// Add clink animation CSS
const clinkStyle = document.createElement('style');
clinkStyle.textContent = `
    @keyframes clinkEffect {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.8;
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
        }
    }
`;
document.head.appendChild(clinkStyle);

// Add clink effect on CTA button click
document.querySelectorAll('.cta-button, .tock-button').forEach(button => {
    button.addEventListener('click', addClinkEffect);
});
