// Reviews are from Etsy
const reviews = [
    {
        id: 1,
        reviewer: "Hannah Wisehart",
        rating: 5,
        date: "Jan 20, 2025",
        text: "The turtle is SO cute!",
        item: "Teeny Tiny Turtle",
        images: [
        "https://i.etsystatic.com/5532682449/r/il/1ab416/5532682449/il_170x135.5532682449_e7w9.jpg"
        ]
    },
    {
        id: 2,
        reviewer: "Rachel",
        rating: 5,
        date: "Dec 4, 2024",
        text: "These are going to be perfect Christmas gifts for my friend's kids. Thank You!",
        item: "Wooden Ornament Paint Kit",
        images: [
            "https://i.etsystatic.com/iap/a30b41/6481111342/iap_300x300.6481111342_q8kstmqs.jpg?version=0",
            "https://i.etsystatic.com/6486110505/r/il/56a1fe/6486110505/il_170x135.6486110505_ehy0.jpg"
        ]
    },
    {
        id: 3,
        reviewer: "Nikki",
        rating: 5,
        date: "Aug 17, 2024",
        text: "This is an awesome piece of art! The Shipping was fast. Packaged nicely. And is my new favorite piece inspiring me to try my hand at one myself! ",
        item: "Upcycled Fractured Skateboard Clock",
        images: ["https://i.etsystatic.com/6174026943/r/il/9add5b/6174026943/il_170x135.6174026943_4qob.jpg"]
    },
    {
        id: 4,
        reviewer: "Omar",
        rating: 5,
        date: "Apr 27, 2024",
        text: "Awesome product and service Love it",
        item: "Upcycled Flute Lamp",
        images: [
            "https://i.etsystatic.com/5500859513/r/il/b80d7b/5500859513/il_170x135.5500859513_trqs.jpg"
        ]
    },
    {
        id: 5,
        reviewer: "Toby",
        rating: 5,
        date: "Feb 16, 2024",
        text: "As described and shipped quickly",
        item: "Upcycled Flute Lamp",
        images: ["https://i.etsystatic.com/5500859513/r/il/b80d7b/5500859513/il_170x135.5500859513_trqs.jpg"]

        
    },
    {
        id: 6,
        reviewer: "Lisa Yvette",
        rating: 5,
        date: "Jan 25, 2024",
        text: "Love the clarinet lamp and most of all my son loves it more! Thank you, it’s great quality!",
        item: "Upcycled Clarinet Lamp",
        images: ["https://i.etsystatic.com/4650139247/r/il/7dbc0c/4650139247/il_170x135.4650139247_pgje.jpg"]
    },
    {
        id: 7,
        reviewer: "Danielle",
        rating: 5,
        date: "May 19, 2023",
        text: "I love it! Shipping was lightning fast with perfect care taken to project the lamp. I’ve gotten so many compliments on it here in my office! I recommend to any music lover!",
        item: "Upcycled Clarinet Lamp",
        images: ["https://i.etsystatic.com/iap/79ba74/4921671512/iap_300x300.4921671512_ecd8n1c1.jpg?version=0"]
    },
    {
        id: 8,
        reviewer: "Julie",
        rating: 5,
        date: "Jan 8, 2022",
        text: "I’m a middle school band director. My main instrument is clarinet. My secondary is trumpet. I had a clarinet lamp and really wanted a trumpet one too. I was so happy to find this one available. It is well-made and works perfect. If you’re a musician, these instrument lamps are wonderful. Mine is in my office/teaching studio at home. You should get one too.",
        item: "Upcycled Trumpet Lamp",
        images: ["https://i.etsystatic.com/3545374241/r/il/d280bb/3545374241/il_170x135.3545374241_2d7y.jpg"]
    },
    {
        id: 9,
        reviewer: "Christine",
        rating: 4,
        date: "Aug 21, 2023",
        text: "The seller was very willing to accept my unusual request to make a lamp out of 2 instruments. The communication was friendly and fast, the sales process uncomplicated. The package arrived very well packed. Unfortunately, the assembly of the second instrument was insufficient and had to be reworked. The promised assembly video did not reach me. All in all a very nice lamp of good quality!",
        item: "Upcycle Dual Music Instrument Lamp",
        images: ["https://i.etsystatic.com/5165481605/r/il/72b10a/5165481605/il_170x135.5165481605_7ns0.jpg"]
    },
    {
        id: 10,
        reviewer: "Julia",
        rating: 2,
        date: "Jul 14, 2024",
        text: "Shipping takes forever, shipping is much more expensive than the item plus customs...not worth it if you live in Germany. I didn't pay attention to where it came from and would definitely not order it again, although the cards are really cute and well made.",
        item: "Teeny Tiny Turtle",
        images: ["https://i.etsystatic.com/5532682449/r/il/1ab416/5532682449/il_170x135.5532682449_e7w9.jpg"]
    }
];

// Function to render stars based on rating
function renderStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? '★' : '☆';
    }
    return stars;
}

// Function to render reviews
function renderReviews() {
    const container = document.getElementById('reviews-container');
    container.innerHTML = '';
    
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review';
        
        // Create avatar (using placeholder since we don't have actual user images)
        const avatarInitial = review.reviewer.charAt(0);
        const avatarColor = `hsl(${Math.random() * 360}, 70%, 75%)`;
        
        const avatarHTML = `
            <div class="reviewer-avatar" style="background-color: ${avatarColor}; display: flex; align-items: center; justify-content: center; color: #333; font-weight: bold;">
                ${avatarInitial}
            </div>
        `;
        
        // Create images HTML if they exist
        let imagesHTML = '';
        if (review.images.length > 0) {
            imagesHTML = '<div class="review-images">';
            review.images.forEach(image => {
                imagesHTML += `<img src="${image}" alt="Review image" class="review-image">`;
            });
            imagesHTML += '</div>';
        }
        
        reviewElement.innerHTML = `
            ${avatarHTML}
            <div class="review-content">
                <div class="reviewer-name">${review.reviewer}</div>
                <div class="review-stars">${renderStars(review.rating)}</div>
                <div class="review-date">${review.date}</div>
                <div class="review-text">${review.text}</div>
                <div class="review-item">Purchased item: ${review.item}</div>
                ${imagesHTML}
            </div>
        `;
        
        container.appendChild(reviewElement);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderReviews();
});