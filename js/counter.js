// Animated Counter Script
(function() {
    'use strict';

    // Counter animation function
    function animateCounter(element, target, suffix, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16); // 60 FPS
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + suffix;
                clearInterval(timer);
            } else {
                element.textContent = Math.ceil(current) + suffix;
            }
        }, 16);
    }

    // Intersection Observer to trigger animation when in view
    function initCounters() {
        const counters = document.querySelectorAll('.counter');
        
        if (counters.length === 0) return;

        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-target'));
                    const suffix = counter.getAttribute('data-suffix') || '';
                    
                    // Only animate if not already animated
                    if (!counter.classList.contains('animated')) {
                        counter.classList.add('animated');
                        animateCounter(counter, target, suffix);
                    }
                    
                    // Unobserve after animation
                    observer.unobserve(counter);
                }
            });
        }, observerOptions);

        // Observe all counters
        counters.forEach(counter => {
            observer.observe(counter);
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCounters);
    } else {
        initCounters();
    }

    // Add entrance animation to stat cards
    function addStatCardAnimations() {
        const statCards = document.querySelectorAll('.stat-card');
        
        statCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100 * index);
        });
    }

    // Initialize card animations
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addStatCardAnimations);
    } else {
        addStatCardAnimations();
    }
})();
