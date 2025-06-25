import {dom} from '../utils/index.js'
import {fetchTestReviewData} from '../controllers/fetch.js'
import {Paginate, scrollPagination} from '../widgets/test-review-pagination.js'
import renderQuestion from '../widgets/render-question.js'
import reviewHandler from '../utils/reviewHandler.js'

const uniqueId = parseInt(localStorage.getItem('quiz-unique-id') as string)
const data = fetchTestReviewData(uniqueId)

// destructure data
let {id,  settings, questions} = data
let quizLength = settings.noOfQuestions || questions.length


let handler = new reviewHandler(questions)

// render first questions
renderQuestion("Test Review", 0, questions, settings.noOfQuestions, handler)

// render pagination
Paginate(20, questions, quizLength, handler)

// scroll Pagination function
const scrollArrows = dom('.pagination-arrow') as NodeListOf<HTMLDivElement>

scrollArrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        if(arrow.classList.contains('left')) {
            return scrollPagination(-100)
        } else{
            return scrollPagination(100)
        }
    })
});


// set nextbtn, prevtbtn function
// navigation buttons
const nextBtn = dom('.next-btn') as HTMLButtonElement
const prevBtn = dom('.prev-btn') as HTMLButtonElement

[nextBtn, prevBtn].forEach(button => button.addEventListener('click', () => {

    let headingEl = dom('.main-container h1') as HTMLHeadingElement

    let currentPage = parseInt(headingEl.innerText.split(' ')[1]) as number
    let counter = currentPage;
    
    
    if(button.classList.contains('next-btn')) counter
    if(button.classList.contains('prev-btn')) counter -= 2

    // no error
    if (counter < quizLength && counter > -1 ) {

        renderQuestion("Test Review", counter, questions, quizLength, handler)
        Paginate(20, questions, quizLength, handler, counter + 1)

        // scrollPagination per page width

    }
}))
