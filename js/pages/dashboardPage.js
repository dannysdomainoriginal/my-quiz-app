import { dom } from '../utils/index.js';
import { fetchDashboardData } from '../controllers/fetch.js';
let { user, subjects, quote } = fetchDashboardData;
const setDashboardValues = () => {
    const username = dom('.main-container .welcome-msg');
    const quoteText = dom('.main-container .quote');
    username.innerText = `Welcome, ${user().name}!`;
    quoteText.innerText = quote();
    const subjectsContainer = dom('.subjects-container');
    let subjectsArray = subjects();
    subjectsContainer.innerHTML = '';
    for (const subject of subjectsArray) {
        let html = `
            <div class="subject">
                <div class="img-box" data-subject="${subject.name.toLowerCase()}"></div>
                <h4>${subject.name}</h4>
            </div>
        `;
        subjectsContainer.innerHTML += html;
    }
};
setDashboardValues();
