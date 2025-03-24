let currentIndex2 = 0;
const slides2 = document.querySelectorAll('.reviews-slide');

function showSlide(index) {
    slides2.forEach((slide, i) => {
        slide.classList.remove('reviews-active');
        if (i === index) {
            slide.classList.add('reviews-active');
        }
    });
}

function nextSlide() {
    currentIndex2 = (currentIndex2 + 1) % slides2.length;
    showSlide(currentIndex2);
}

setInterval(nextSlide, 3000);