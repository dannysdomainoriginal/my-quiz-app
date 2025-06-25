import {dom, testReview} from '../utils/index.js'
import {fetchResultsData} from '../controllers/fetch.js'

const data = fetchResultsData()

const { id, score, correct, wrong } = data

const scoreHeading = dom('.score h2') as HTMLHeadingElement
scoreHeading.innerText = `${score}%`

const answerContainer = dom('.answers-container') as HTMLDivElement
const correctBoxes = dom('.correct-boxes') as HTMLDivElement
const wrongBoxes = dom('.wrong-boxes') as HTMLDivElement

wrongBoxes.innerHTML = ''
correctBoxes.innerHTML = ''

const tabs = dom('.tab h4') as NodeListOf<HTMLDivElement>

// correct answers
correct.forEach(value => {
    let box = 
    `
        <div class="box correct">
            <div class="check-box">
                <i class="uil uil-check-circle"></i>
            </div>
            <div class="text-box">
                <h3>Correct Answer</h3>
                <h4>Question ${value}</h4>
            </div>
        </div>
    `

    correctBoxes.innerHTML += box
});

// wrong answers
wrong.forEach(value => {
    let box = 
    `
        <div class="box wrong">
            <div class="check-box">
                <i class="uil uil-times-circle"></i>
            </div>
            <div class="text-box">
                <h3>Incorrect Answer</h3>
                <h4>Question ${value}</h4>
            </div>
        </div>
    `

    wrongBoxes.innerHTML += box
});

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        if(tab.classList.contains('active')) return

        for (const i of tabs) {
            i.classList.toggle('active')
        }

        let classes = ['correct', 'wrong'];
        let extra = classes.filter(item => !answerContainer.classList.contains(item))
        let current = classes.filter(item => answerContainer.classList.contains(item))

        answerContainer.classList.replace(current[0], extra[0]) 
    })
});

// review button
const reviewBtn = dom('.review-test-btn') as HTMLButtonElement
reviewBtn.addEventListener('click', () => testReview(id as string))