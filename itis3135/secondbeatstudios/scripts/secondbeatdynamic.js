// Function to load HTML components
function loadComponent(componentId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(componentId).innerHTML = data;
            
            // After loading, initialize any necessary functionality
            if (componentId === 'dynamic-header') {
                initializeHeader();
            }
        })
        .catch(error => console.error('Error loading component:', error));
}

// Initialize header functionality
function initializeHeader() {
    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('#nav-menu a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (currentPage === linkPage || 
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Load components when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('dynamic-header', 'secondbeatheader.html');
    loadComponent('dynamic-footer', 'secondbeatfooter.html');
    
    // Add Font Awesome for icons
    const faScript = document.createElement('script');
    faScript.src = 'https://kit.fontawesome.com/a076d05399.js';
    faScript.crossOrigin = 'anonymous';
    document.head.appendChild(faScript);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Validation links
document.getElementById("validation_link_html").setAttribute("href",
    "https://validator.w3.org/check?uri=" + location.href);
document.getElementById("validation_link_css").setAttribute("href",
    "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);