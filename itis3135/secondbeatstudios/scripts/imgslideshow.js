document.addEventListener('DOMContentLoaded', function() {
    // Slideshow configuration
    const slideshowConfig = {
        slides: [
            {
                imageUrl: 'images/product1.png', 
                caption: 'Featured Product 1',
                altText: 'Description of product 1'
            },
            {
                imageUrl: 'images/product2.png', 
                caption: 'Featured Product 2',
                altText: 'Description of product 2'
            },
            {
                imageUrl: 'images/product3.png', 
                caption: 'Featured Product 3',
                altText: 'Description of product 3'
            },
            {
                imageUrl: 'images/product4.png', 
                caption: 'Featured Product 4',
                altText: 'Description of product 4'
            }
        ],
        slideInterval: 5000, // 5 seconds
        currentIndex: 0,
        autoPlay: true
    };

    // Initialize the slideshow
    const slideshow = document.getElementById('featured-slideshow');
    const prevBtn = document.querySelector('.slideshow-btn.prev');
    const nextBtn = document.querySelector('.slideshow-btn.next');
    let slideInterval;

    // Create slides
    function createSlides() {
        slideshow.innerHTML = '';
        slideshowConfig.slides.forEach((slide, index) => {
            const slideElement = document.createElement('div');
            slideElement.className = 'slide';
            slideElement.style.display = index === 0 ? 'block' : 'none';
            
            const img = document.createElement('img');
            img.src = slide.imageUrl;
            img.alt = slide.altText;
            
            const caption = document.createElement('div');
            caption.className = 'slide-caption';
            caption.textContent = slide.caption;
            
            slideElement.appendChild(img);
            slideElement.appendChild(caption);
            slideshow.appendChild(slideElement);
        });
    }

    // Show current slide
    function showSlide(index) {
        const slides = document.querySelectorAll('.slide');
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    // Next slide
    function nextSlide() {
        slideshowConfig.currentIndex = (slideshowConfig.currentIndex + 1) % slideshowConfig.slides.length;
        showSlide(slideshowConfig.currentIndex);
    }

    // Previous slide
    function prevSlide() {
        slideshowConfig.currentIndex = (slideshowConfig.currentIndex - 1 + slideshowConfig.slides.length) % slideshowConfig.slides.length;
        showSlide(slideshowConfig.currentIndex);
    }

    // Auto play
    function startAutoPlay() {
        if (slideshowConfig.autoPlay) {
            slideInterval = setInterval(nextSlide, slideshowConfig.slideInterval);
        }
    }

    // Stop auto play
    function stopAutoPlay() {
        clearInterval(slideInterval);
    }

    // Event listeners
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoPlay();
        startAutoPlay();
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoPlay();
        startAutoPlay();
    });

    // Initialize
    createSlides();
    startAutoPlay();

    // Pause on hover
    slideshow.addEventListener('mouseenter', stopAutoPlay);
    slideshow.addEventListener('mouseleave', startAutoPlay);
});