document.addEventListener('DOMContentLoaded', function() {
    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const submitButton = this.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            
            // Simulate form submission
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // In a real implementation, you would send the form data to your server
            setTimeout(() => {
                submitButton.textContent = 'Message Sent!';
                
                // Reset form
                setTimeout(() => {
                    this.reset();
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                    
                    // Show success message
                    alert('Thank you for your message! We will get back to you soon.');
                }, 1500);
            }, 1500);
        });
    }
    
    // Newsletter form handling
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const submitButton = this.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            
            // Validate email
            if (!emailInput.value || !emailInput.value.includes('@')) {
                emailInput.focus();
                return;
            }
            
            // Simulate form submission
            submitButton.textContent = 'Subscribing...';
            submitButton.disabled = true;
            
            // In a real implementation, you would send the email to your newsletter service
            setTimeout(() => {
                submitButton.textContent = 'Subscribed!';
                emailInput.value = '';
                
                // Reset button
                setTimeout(() => {
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                }, 1500);
            }, 1500);
        });
    }
});