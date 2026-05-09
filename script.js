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
    // Mobile Hamburger Menu visual toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if(hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // WhatsApp Order Functionality
    const whatsappButtons = document.querySelectorAll('.btn-whatsapp');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            const price = button.getAttribute('data-price');
            // Change the phone number to your shop's WhatsApp number
            const phoneNumber = '919876543210'; 
            const message = `Hello Kabir Toy Studio! I would like to order the ${product} (₹${price}). Please let me know how to proceed with the payment and delivery.`;
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            
            window.open(whatsappUrl, '_blank');
        });
    });
});
