// ============================================
// HIGH-VOLTAGE PORTFOLIO - JAVASCRIPT
// ============================================

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}


// Animate skill bars on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillProgress = entry.target.querySelector('.skill-progress');
            if (skillProgress) {
                const width = skillProgress.style.width;
                skillProgress.style.width = '0%';
                setTimeout(() => {
                    skillProgress.style.width = width;
                }, 100);
            }
        }
    });
}, observerOptions);

// Observe all skill items
document.querySelectorAll('.skill-item').forEach(item => {
    observer.observe(item);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add glow effect to project cards on hover
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 10px 30px rgba(255, 69, 0, 0.5)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
    });
});

// Navbar background on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.backgroundColor = 'rgba(11, 11, 11, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(255, 69, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(11, 11, 11, 0.95)';
        navbar.style.boxShadow = '';
    }
    
    lastScroll = currentScroll;
});

// Add typing effect to hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Cursor trail effect
const cursorTrail = [];
const trailLength = 20;

document.addEventListener('mousemove', (e) => {
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    document.body.appendChild(dot);
    
    cursorTrail.push(dot);
    
    if (cursorTrail.length > trailLength) {
        const oldDot = cursorTrail.shift();
        if (oldDot && oldDot.parentNode) {
            oldDot.parentNode.removeChild(oldDot);
        }
    }
    
    setTimeout(() => {
        if (dot && dot.parentNode) {
            dot.style.opacity = '0';
            dot.style.transform = 'scale(0)';
            setTimeout(() => {
                if (dot && dot.parentNode) {
                    dot.parentNode.removeChild(dot);
                }
            }, 300);
        }
    }, 100);
});

// Initialize animations when page loads
window.addEventListener('load', () => {
    // Add fade-in animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });
});


// Console easter egg - Konami Code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Activate easter egg
        document.body.style.animation = 'rainbow 2s infinite';
        alert('🎮 KONAMI CODE ACTIVATED! 🎮\n\nYou found the secret!');
        
        // Add rainbow animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
        
        konamiCode = [];
    }
});

