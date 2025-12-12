// Contact Page Script
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    // Add form validation feedback
    if (contactForm) {
        const requiredFields = contactForm.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            field.addEventListener('blur', function() {
                if (!this.value) {
                    this.style.borderColor = 'var(--red)';
                } else {
                    this.style.borderColor = 'var(--light-grey)';
                }
            });
            
            field.addEventListener('input', function() {
                if (this.value) {
                    this.style.borderColor = 'var(--light-grey)';
                }
            });
        });
    }
});

