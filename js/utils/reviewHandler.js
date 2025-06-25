import dom from './dom.js';
export default class reviewHandler {
    correctArray;
    userAnswersArray;
    constructor(quizObject) {
        this.correctArray = quizObject.map(item => item.answer);
        this.userAnswersArray = quizObject.map(item => item.chosen);
    }
    correct(counter) {
        let allLabels = dom('.quiz-container label');
        for (const label of allLabels) {
            let labelParagraph = label.querySelector('p');
            if (labelParagraph.innerText == this.correctArray[counter]) {
                label.classList.add('correct');
                let i = document.createElement('i');
                i.className = 'uis uis-check-circle';
                label.appendChild(i);
            }
        }
    }
    chosen(counter) {
        let correctAnswerParagraph = dom('.correct-answer');
        if (this.correctArray[counter] == this.userAnswersArray[counter])
            return correctAnswerParagraph.classList.add('correctly');
        let noAnswer = dom('.no-answer');
        let anyAnswer = false;
        let allLabels = dom('.quiz-container label');
        for (const label of allLabels) {
            let labelParagraph = label.querySelector('p');
            if (labelParagraph.innerText == this.userAnswersArray[counter]) {
                label.classList.add('wrong');
                let i = document.createElement('i');
                i.className = 'uis uis-times-circle';
                label.appendChild(i);
                anyAnswer = true;
            }
        }
        if (!anyAnswer)
            noAnswer.classList.add('skipped');
    }
    clear() {
        let allLabels = dom('.quiz-container label');
        for (const label of allLabels) {
            if (label.classList.contains('correct') || label.classList.contains('wrong')) {
                label.className = '';
                let i = label.querySelector('i');
                if (i)
                    i.remove();
            }
            let redParagraph = dom('.no-answer');
            if (redParagraph)
                redParagraph.classList.remove('skipped');
            let greenParagraph = dom('.correct-answer');
            if (greenParagraph)
                greenParagraph.classList.remove('correctly');
        }
    }
}
