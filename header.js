let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    // Проверяем ширину экрана
    const screenWidth = window.innerWidth;

    // Если ширина экрана больше 730 пикселей, управляем скрытием хедера
    if (screenWidth > 730) {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Прокрутка вниз
            header.classList.add('hide');
        } else {
            // Прокрутка вверх
            header.classList.remove('hide');
        }
        lastScrollTop = scrollTop;
    } else {
        // Убираем класс hide, если ширина экрана 730 пикселей или меньше
        header.classList.remove('hide');
    }
});