// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simple scroll reveal animation for elements
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards and section titles that aren't already animated
    document.querySelectorAll('.card, .section-title, .contact').forEach((el) => {
        // Only observe if it doesn't already have the animate class from initial load
        if (!el.classList.contains('animate')) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            observer.observe(el);
            
            // Add a small helper function to apply the animation when intersected
            el.addEventListener('transitionend', function(e) {
                if(e.propertyName === 'opacity') {
                    this.style.transition = ''; // Clean up inline styles
                }
            });
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
