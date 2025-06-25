import reviewHandler from 'utils/reviewHandler.js'
import { answerHandler, dom, progressBar } from '../utils/index.js'

const render = (reason: string, counter: number, array: Question[], length: number, handler?: answerHandler | any) => {
    let question = array[counter]

    let {QUESTION, OPTIONS} = question

    let questionEl = dom('.question') as HTMLElement
    let nodeList = dom('.quiz-container p') as NodeListOf<HTMLElement>
    let optionsList = Array.from(nodeList).entries()
    let chosen = dom('input[name="quiz"]:checked') as HTMLInputElement | null;

    // render options
    for (const [index, el] of optionsList) {
        el.innerText = OPTIONS[index]
    }

    // render questions or render test review
    if (reason == "Question Render") {

        let headingEl = dom('.above-progress-bar h4') as HTMLElement
        headingEl.innerText = `Question ${counter + 1} of ${length}`
        progressBar([counter + 1, length])
        if (handler) handler.check(counter)

    } else if (reason == "Test Review"){

        if (handler) handler.clear() // clear previous review

        let headingEl = dom('.main-container h1') as HTMLHeadingElement

        headingEl.innerText = `Question ${counter + 1}`

        if (handler) handler.correct(counter)
        if (handler) handler.chosen(counter)
    }

    questionEl.innerText = QUESTION
    
}

export default render 