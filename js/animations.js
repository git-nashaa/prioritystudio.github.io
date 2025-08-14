document.addEventListener('DOMContentLoaded', function() {
    // Animate stats counters
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsSection = document.querySelector('.stats');
    
    function animateCounters() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const suffix = stat.getAttribute('data-suffix') || '';
            let count = 0;
            const duration = 2000; // Animation duration in ms
            const increment = target / (duration / 16); // 60fps
            
            const updateCount = () => {
                count += increment;
                if (count < target) {
                    stat.textContent = Math.floor(count) + suffix;
                    requestAnimationFrame(updateCount);
                } else {
                    stat.textContent = target + suffix;
                    stat.classList.add('animated');
                }
            };
            
            updateCount();
        });
    }
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate stats when stats section is visible
                if (entry.target === statsSection) {
                    animateCounters();
                }
                
                // Add animate class to elements with data-animate
                const animatableElements = entry.target.querySelectorAll('[data-animate]');
                animatableElements.forEach(el => {
                    el.classList.add('animate');
                });
                
                // Unobserve after animating to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Initial animations for elements above the fold
    document.querySelectorAll('.fade-in').forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
});