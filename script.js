// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Form Submission Interactive Message
    const form = document.getElementById('subscribeForm');
    const message = document.getElementById('formMessage');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload
            
            // Hide form and show success message with animation
            form.style.display = 'none';
            message.style.display = 'block';

            // Reset after 3 seconds for demo purposes
            setTimeout(() => {
                form.reset();
                form.style.display = 'flex';
                message.style.display = 'none';
            }, 3000);
        });
    }

    // Gentle scroll for nav links (Vanilla Native Smooth Scroll handled by CSS)
    // Mobile Hamburger Menu simple visual toggle (does not open full menu in this MVP)
    const hamburger = document.querySelector('.hamburger');
    if(hamburger) {
        hamburger.addEventListener('click', () => {
            alert('Mobile menu is clicked! (Can be expanded further)');
        });
    }
});
