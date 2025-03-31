
// Array of images to randomly choose from
const images = [
    'images/about1.jpg', // replace with actual paths to your images
    'images/about2.jpg',
    'images/about3.jpg',
    'images/about4.jpg',
    'images/about5.jpg'
];

// Function to change the image in the About section
function changeAboutImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const aboutImg = document.getElementById('about-img');
    aboutImg.src = images[randomIndex]; // Change the image source
}

// Change the image when the page loads
window.onload = changeAboutImage;

// Change the image every 6 seconds
setInterval(changeAboutImage, 6000);

// JavaScript to handle star selection
const stars = document.querySelectorAll('.star'); // Select all the star elements
let selectedRating = 0; // Variable to hold the selected rating

// Function to highlight stars based on the selected rating
function highlightStars(rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

// Add click event to each star
stars.forEach(star => {
    star.addEventListener('click', () => {
        selectedRating = parseInt(star.getAttribute('data-value')); // Get the rating value of the clicked star
        highlightStars(selectedRating); // Highlight the stars based on the selected rating
    });

    // Optional: Highlight stars on hover
    star.addEventListener('mouseover', () => {
        const rating = parseInt(star.getAttribute('data-value'));
        highlightStars(rating);
    });

    // Reset the star color on mouseout
    star.addEventListener('mouseout', () => {
        highlightStars(selectedRating);
    });
});

// Handle form submission (optional)
document.getElementById('reviewForm').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (name && message && selectedRating > 0) {
        alert(`Review Submitted! \nName: ${name} \nMessage: ${message} \nRating: ${selectedRating} stars`);
    } else {
        alert('Please fill out all fields and select a rating.');
    }
});
