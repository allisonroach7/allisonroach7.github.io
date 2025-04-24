/**
 * Past Products Page Interactivity
 * Implements three dynamic functionalities:
 * 1. Dynamic header/footer loading
 * 2. Product filtering system
 * 3. Interactive product slideshow
 */

// 1. Dynamic Header and Footer Loading
document.addEventListener('DOMContentLoaded', function() {
    // Load header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('dynamic-header').innerHTML = data;
        });
    
    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('dynamic-footer').innerHTML = data;
        });
    
    // Initialize other functionalities
    initProductFilter();
    initSlideshow();
});

// 2. Product Filtering System
function initProductFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productGrid = document.getElementById('products-grid');
    
    // Sample product data (in real implementation, this might come from an API)
    const products = [
        { id: 1, name: 'Product 1', category: 'category1', description: 'Description...', image: 'product1.jpg' },
        { id: 2, name: 'Product 2', category: 'category2', description: 'Description...', image: 'product2.jpg' },
        // More products...
    ];
    
    // Render all products initially
    renderProducts(products);
    
    // Add event listeners to filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            const category = this.dataset.category;
            const filteredProducts = category === 'all' 
                ? products 
                : products.filter(p => p.category === category);
            
            renderProducts(filteredProducts);
        });
    });
    
    function renderProducts(productsToRender) {
        productGrid.innerHTML = '';
        
        productsToRender.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product-card';
            productElement.innerHTML = `
                <img src="images/${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <button class="details-btn" data-id="${product.id}">View Details</button>
            `;
            productGrid.appendChild(productElement);
        });
        
        // Add event listeners to detail buttons
        document.querySelectorAll('.details-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = this.dataset.id;
                showProductDetails(productId);
            });
        });
    }
    
    function showProductDetails(productId) {
        // Implementation for showing product details modal
        console.log(`Showing details for product ${productId}`);
    }
}

// 3. Interactive Product Slideshow
function initSlideshow() {
    const slideshow = document.getElementById('featured-slideshow');
    const prevBtn = document.querySelector('.slideshow-btn.prev');
    const nextBtn = document.querySelector('.slideshow-btn.next');
    
    // Sample slideshow items (could also come from an API)
    const slides = [
        { image: 'slide1.jpg', title: 'Featured Product 1', description: 'Description...' },
        { image: 'slide2.jpg', title: 'Featured Product 2', description: 'Description...' },
        { image: 'slide3.jpg', title: 'Featured Product 3', description: 'Description...' },
    ];
    
    let currentSlide = 0;
    
    // Render slides
    function renderSlides() {
        slideshow.innerHTML = '';
        
        slides.forEach((slide, index) => {
            const slideElement = document.createElement('div');
            slideElement.className = `slide ${index === currentSlide ? 'active' : ''}`;
            slideElement.innerHTML = `
                <img src="images/${slide.image}" alt="${slide.title}">
                <div class="slide-caption">
                    <h3>${slide.title}</h3>
                    <p>${slide.description}</p>
                </div>
            `;
            slideshow.appendChild(slideElement);
        });
    }
    
    // Navigation functions
    function goToPrevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        renderSlides();
    }
    
    function goToNextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        renderSlides();
    }
    
    // Event listeners
    prevBtn.addEventListener('click', goToPrevSlide);
    nextBtn.addEventListener('click', goToNextSlide);
    
    // Auto-advance slides every 5 seconds
    setInterval(goToNextSlide, 5000);
    
    // Initial render
    renderSlides();
}