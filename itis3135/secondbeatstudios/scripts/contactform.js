document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Form validation
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset previous error messages
            clearErrorMessages();
            
            // Validate form fields
            const isNameValid = validateName();
            const isEmailValid = validateEmail();
            const isPhoneValid = validatePhone();
            const isSubjectValid = validateSubject();
            const isMessageValid = validateMessage();
            
            // If all validations pass
            if (isNameValid && isEmailValid && isPhoneValid && isSubjectValid && isMessageValid) {
                // For security reasons, and because I do not know how to implement this yet, this does not yet send to a real email. This is because I do not know how to prevent spam/other attacks that could be vunerable to my client right now.
                // For this example, we'll just show a success message
                
                successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
                successMessage.style.display = 'block';
                
                // Reset the form
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            }
        });
    }

    // Validation functions
    function validateName() {
        const nameInput = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            nameError.style.display = 'block';
            nameInput.focus();
            return false;
        }
        
        if (nameInput.value.trim().length < 2) {
            nameError.textContent = 'Name must be at least 2 characters';
            nameError.style.display = 'block';
            nameInput.focus();
            return false;
        }
        
        return true;
    }
    
    function validateEmail() {
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required';
            emailError.style.display = 'block';
            emailInput.focus();
            return false;
        }
        
        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address';
            emailError.style.display = 'block';
            emailInput.focus();
            return false;
        }
        
        return true;
    }
    
    function validatePhone() {
        const phoneInput = document.getElementById('phone');
        const phoneError = document.getElementById('phoneError');
        
        // Phone is optional, but if provided, validate it
        if (phoneInput.value.trim() !== '') {
            const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
            
            if (!phoneRegex.test(phoneInput.value)) {
                phoneError.textContent = 'Please enter a valid phone number';
                phoneError.style.display = 'block';
                phoneInput.focus();
                return false;
            }
        }
        
        return true;
    }
    
    function validateSubject() {
        const subjectInput = document.getElementById('subject');
        const subjectError = document.getElementById('subjectError');
        
        if (subjectInput.value === '') {
            subjectError.textContent = 'Please select a subject';
            subjectError.style.display = 'block';
            subjectInput.focus();
            return false;
        }
        
        return true;
    }
    
    function validateMessage() {
        const messageInput = document.getElementById('message');
        const messageError = document.getElementById('messageError');
        
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required';
            messageError.style.display = 'block';
            messageInput.focus();
            return false;
        }
        
        if (messageInput.value.trim().length < 10) {
            messageError.textContent = 'Message must be at least 10 characters';
            messageError.style.display = 'block';
            messageInput.focus();
            return false;
        }
        
        return true;
    }
    
    function clearErrorMessages() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => {
            error.textContent = '';
            error.style.display = 'none';
        });
        
        if (successMessage) {
            successMessage.style.display = 'none';
        }
    }

    // Add real-time validation for better UX
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    if (nameInput) nameInput.addEventListener('blur', validateName);
    if (emailInput) emailInput.addEventListener('blur', validateEmail);
    if (phoneInput) phoneInput.addEventListener('blur', validatePhone);
    if (subjectInput) subjectInput.addEventListener('change', validateSubject);
    if (messageInput) messageInput.addEventListener('blur', validateMessage);
});