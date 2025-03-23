document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;

        // Чтобы закрыть все другие ответы
        document.querySelectorAll('.faq-answer').forEach(ans => {
            if (ans !== answer) {
                ans.classList.remove('active');
            }
        });

        // Переключаем класс активности
        answer.classList.toggle('active');
    });
});