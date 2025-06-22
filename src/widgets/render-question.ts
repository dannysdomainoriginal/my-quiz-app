import { answerHandler, dom, progressBar } from '../utils/index.js'

const render = (counter: number, array: Question[], length: number, handler?: answerHandler) => {
    let question = array[counter]

    let {QUESTION, OPTIONS} = question

    let questionEl = dom('.question') as HTMLElement
    let nodeList = dom('.quiz-container p') as NodeListOf<HTMLElement>
    let optionsList = Array.from(nodeList).entries()
    let chosen = dom('input[name="quiz"]:checked') as HTMLInputElement | null;
    let headingEl = dom('.above-progress-bar h4') as HTMLElement

    // render options
    for (const [index, el] of optionsList) {
        el.innerText = OPTIONS[index]
    }

    questionEl.innerText = QUESTION
    headingEl.innerText = `Question ${counter + 1} of ${length}`
    progressBar([counter + 1, length])

    if (handler) handler.check(counter)
}

export default render 