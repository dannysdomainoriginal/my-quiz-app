import { fetchQuestionsData } from '../controllers/fetch.js'
import QuizSession from '../models/quiz.js'
import {dom, answerHandler, alertUser } from '../utils/index.js'
import render from '../widgets/render-question.js'
import quizTimer from '../widgets/quiz-timer.js'
import bigData from '../models/localStorageData.js'


// stores big data
if(!localStorage.getItem('QUESTIONSData')) bigData()


const data = fetchQuestionsData()

const Session = new QuizSession(data)

// number of questions
const quizLength = Session.questions.length || Session.settings.noOfQuestions

// navigation buttons
const nextBtn = dom('.next-btn') as HTMLButtonElement
const prevBtn = dom('.prev-btn') as HTMLButtonElement

const questions = Session.questions
let counter = 0;
let handler = new answerHandler();

render(counter, questions, quizLength);

[nextBtn, prevBtn].forEach(button => button.addEventListener('click', () => {

    if(counter == quizLength - 1 && button.classList.contains('next-btn')) return alertUser('Confirm Quiz Submission', Session, handler)

    
    handler.pass(counter)
    if (button.classList.contains('next-btn') && counter <= quizLength) counter++ // next
    if (button.classList.contains('prev-btn') && counter >= 1) counter-- // prev
    
    render(counter, questions, quizLength, handler)
    console.log(counter)

    if (counter == quizLength - 1) {
        nextBtn.innerText = 'Submit'
    } else {
        nextBtn.innerText = 'Next'
    }
}))

quizTimer(Session, handler)