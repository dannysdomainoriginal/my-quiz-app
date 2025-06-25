import { dom } from '../utils/index.js';
import renderQuestion from './render-question.js';
export const Paginate = (totalNumber, arr, noOfQuestions, handler, currentQuestion) => {
    let currentPage = currentQuestion || 1;
    console.log(currentPage);
    const renderPaginationBtns = () => {
        const paginationContainer = dom('#pagination');
        paginationContainer.innerHTML = '';
        for (let i = 1; i <= totalNumber; i++) {
            const paginationBtn = document.createElement('button');
            paginationBtn.textContent = `${i}`;
            paginationBtn.classList.add('pagination-btn');
            if (i === currentPage)
                paginationBtn.classList.add('active');
            paginationBtn.onclick = () => {
                currentPage = i;
                renderPaginationBtns();
                renderQuestion("Test Review", i - 1, arr, noOfQuestions, handler);
            };
            paginationContainer.appendChild(paginationBtn);
        }
    };
    renderPaginationBtns();
};
export const scrollPagination = (amount) => {
    const wrapper = dom('#paginationWrapper');
    wrapper.scrollBy({
        left: amount,
        behavior: "smooth"
    });
};
