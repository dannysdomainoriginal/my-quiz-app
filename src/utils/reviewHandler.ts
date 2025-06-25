import dom from './dom.js'

export default class reviewHandler {
    correctArray: string[]
    userAnswersArray: string[]

    constructor (quizObject: Question[]) {
        this.correctArray = quizObject.map(item => item.answer as string)
        this.userAnswersArray = quizObject.map(item => item.chosen as string)
    }

    correct (counter: number) {
        let allLabels = dom('.quiz-container label') as NodeListOf<HTMLLabelElement>

        for (const label of allLabels) {
            let labelParagraph = label.querySelector('p') as HTMLParagraphElement

            if (labelParagraph.innerText == this.correctArray[counter]) {
                label.classList.add('correct')

                let i = document.createElement('i') as HTMLElement
                i.className = 'uis uis-check-circle'

                label.appendChild(i)
            }
        }
    }

    chosen (counter: number) {
        let correctAnswerParagraph = dom('.correct-answer') as HTMLParagraphElement
        if (this.correctArray[counter] == this.userAnswersArray[counter]) return correctAnswerParagraph.classList.add('correctly')

        let noAnswer = dom('.no-answer') as HTMLParagraphElement
        let anyAnswer = false

        let allLabels = dom('.quiz-container label') as NodeListOf<HTMLLabelElement>

        for (const label of allLabels) {
            let labelParagraph = label.querySelector('p') as HTMLParagraphElement

            if (labelParagraph.innerText == this.userAnswersArray[counter]) {
                label.classList.add('wrong')

                let i = document.createElement('i') as HTMLElement
                i.className = 'uis uis-times-circle'

                label.appendChild(i)

                anyAnswer = true
            }
        }

        if(!anyAnswer) noAnswer.classList.add('skipped')
    }

    clear () {
        let allLabels = dom('.quiz-container label') as NodeListOf<HTMLLabelElement>

        for (const label of allLabels) {
            if (label.classList.contains('correct') || label.classList.contains('wrong')){
                label.className = ''

                let i = label.querySelector('i') as HTMLElement

                if (i) i.remove()
            }

            let redParagraph = dom('.no-answer') as HTMLParagraphElement
            if(redParagraph) redParagraph.classList.remove('skipped')

            let greenParagraph = dom('.correct-answer') as HTMLParagraphElement
            if (greenParagraph) greenParagraph.classList.remove('correctly')
        }
    }
}