let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.RummyZion-info-slide');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const slider = document.querySelector('.RummyZion-info-slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Show the first slide on page load
showSlide(currentSlide);