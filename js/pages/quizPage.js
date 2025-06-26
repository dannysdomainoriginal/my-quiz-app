import { fetchQuestionsData } from '../controllers/fetch.js';
import QuizSession from '../models/quiz.js';
import { dom, answerHandler, alertUser } from '../utils/index.js';
import render from '../widgets/render-question.js';
import quizTimer from '../widgets/quiz-timer.js';
import bigData from '../models/localStorageData.js';
bigData();
const data = fetchQuestionsData();
const Session = new QuizSession(data);
const quizLength = Session.questions.length || Session.settings.noOfQuestions;
const nextBtn = dom('.next-btn');
const prevBtn = dom('.prev-btn');
const questions = Session.questions;
let counter = 0;
let handler = new answerHandler();
render("Question Render", counter, questions, quizLength);
[nextBtn, prevBtn].forEach(button => button.addEventListener('click', () => {
    if (counter == quizLength - 1 && button.classList.contains('next-btn'))
        return alertUser('Confirm Quiz Submission', Session, handler);
    handler.pass(counter);
    if (button.classList.contains('next-btn') && counter <= quizLength)
        counter++;
    if (button.classList.contains('prev-btn') && counter >= 1)
        counter--;
    render("Question Render", counter, questions, quizLength, handler);
    console.log(counter);
    if (counter == quizLength - 1) {
        nextBtn.innerText = 'Submit';
    }
    else {
        nextBtn.innerText = 'Next';
    }
}));
quizTimer(Session, handler);
