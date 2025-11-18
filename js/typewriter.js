// Simple typewriter effect for the hero headline
(function() {
    'use strict';

    const phrases = [
        'Building the future of AI.',
        'Designing full-stack products.',
        'Shipping research-driven solutions.'
    ];

    const target = document.getElementById('typewriter');
    if (!target) return;

    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function nextTick(delay) {
        setTimeout(type, delay);
    }

    function type() {
        const phrase = phrases[phraseIndex];

        if (!deleting) {
            charIndex++;
            target.textContent = phrase.slice(0, charIndex);
            if (charIndex === phrase.length) {
                deleting = true;
                return nextTick(1400); // Pause at full phrase
            }
        } else {
            charIndex--;
            target.textContent = phrase.slice(0, charIndex);
            if (charIndex === 0) {
                deleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }
        }

        const speed = deleting ? 45 : 85;
        nextTick(speed);
    }

    nextTick(400);
})();
