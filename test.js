// Функция для загрузки отзывов из localStorage
function loadReviews() {
    const reviewsList = document.getElementById('reviewsList');
    reviewsList.innerHTML = ''; // Очищаем список отзывов

    const reviews = localStorage.getItem('reviews');
    if (reviews) {
        const reviewsArray = JSON.parse(reviews);
        reviewsArray.forEach(review => {
            const newReview = document.createElement('li');
            newReview.textContent = review;
            reviewsList.appendChild(newReview);
        });
    }
}

// Функция для добавления отзыва
function addReview() {
    const reviewInput = document.getElementById('reviewInput');
    const reviewText = reviewInput.value.trim();
    if (reviewText) {
        const reviewsList = document.getElementById('reviewsList');
        const newReview = document.createElement('li');
        newReview.textContent = reviewText;
        reviewsList.appendChild(newReview);

        // Сохраняем отзыв в localStorage
        let reviews = localStorage.getItem('reviews');
        reviews = reviews ? JSON.parse(reviews) : [];
        reviews.push(reviewText);
        localStorage.setItem('reviews', JSON.stringify(reviews));

        reviewInput.value = '';
    }
}

// Инициализируем загрузку отзывов при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    loadReviews();
});

// Находим кнопку отправки отзыва по ID
const submitReviewButton = document.getElementById('submitReviewButton');

// Функция для обработки нажатий на кнопку отправки отзыва
submitReviewButton.addEventListener('click', addReview);
