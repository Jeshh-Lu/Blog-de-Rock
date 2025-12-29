document.addEventListener('DOMContentLoaded', () => {
    
    // Intersection Observer for Fade In Animations
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Target elements
    const animatedElements = document.querySelectorAll('.fade-in');
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });

});
