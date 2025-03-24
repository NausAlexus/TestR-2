let currentSlide3 = 0;

function showSlide2(index) {
    const slides3 = document.querySelectorAll('.RummyZion-info-slide');
    const totalSlides3 = slides3.length;

    if (index >= totalSlides3) {
        currentSlide3 = 0;
    } else if (index < 0) {
        currentSlide3 = totalSlides3 - 1;
    } else {
        currentSlide3 = index;
    }

    const slider3 = document.querySelector('.RummyZion-info-slider');
    slider3.style.transform = `translateX(-${currentSlide3 * 100}%)`;
}

function changeSlide2(direction) {
    showSlide2(currentSlide3 + direction);
}

// Add event listeners to the buttons
document.querySelector('.RummyZion-info-prev').addEventListener('click', () => changeSlide2(-1));
document.querySelector('.RummyZion-info-next').addEventListener('click', () => changeSlide2(1));

// Show the first slide on page load
showSlide2(currentSlide3);