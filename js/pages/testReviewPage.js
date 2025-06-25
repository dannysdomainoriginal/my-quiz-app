import { dom } from '../utils/index.js';
import { fetchTestReviewData } from '../controllers/fetch.js';
import { Paginate, scrollPagination } from '../widgets/test-review-pagination.js';
import renderQuestion from '../widgets/render-question.js';
import reviewHandler from '../utils/reviewHandler.js';
const uniqueId = parseInt(localStorage.getItem('quiz-unique-id'));
const data = fetchTestReviewData(uniqueId);
let { id, settings, questions } = data;
let quizLength = settings.noOfQuestions || questions.length;
let handler = new reviewHandler(questions);
renderQuestion("Test Review", 0, questions, settings.noOfQuestions, handler);
Paginate(20, questions, quizLength, handler);
const scrollArrows = dom('.pagination-arrow');
scrollArrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        if (arrow.classList.contains('left')) {
            return scrollPagination(-100);
        }
        else {
            return scrollPagination(100);
        }
    });
});
const nextBtn = dom('.next-btn');
const prevBtn = dom('.prev-btn');
[nextBtn, prevBtn].forEach(button => button.addEventListener('click', () => {
    let headingEl = dom('.main-container h1');
    let currentPage = parseInt(headingEl.innerText.split(' ')[1]);
    let counter = currentPage;
    if (button.classList.contains('next-btn'))
        counter;
    if (button.classList.contains('prev-btn'))
        counter -= 2;
    if (counter < quizLength && counter > -1) {
        renderQuestion("Test Review", counter, questions, quizLength, handler);
        Paginate(20, questions, quizLength, handler, counter + 1);
    }
}));
