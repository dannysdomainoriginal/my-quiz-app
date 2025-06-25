import { dom, progressBar } from '../utils/index.js';
const render = (reason, counter, array, length, handler) => {
    let question = array[counter];
    let { QUESTION, OPTIONS } = question;
    let questionEl = dom('.question');
    let nodeList = dom('.quiz-container p');
    let optionsList = Array.from(nodeList).entries();
    let chosen = dom('input[name="quiz"]:checked');
    for (const [index, el] of optionsList) {
        el.innerText = OPTIONS[index];
    }
    if (reason == "Question Render") {
        let headingEl = dom('.above-progress-bar h4');
        headingEl.innerText = `Question ${counter + 1} of ${length}`;
        progressBar([counter + 1, length]);
        if (handler)
            handler.check(counter);
    }
    else if (reason == "Test Review") {
        if (handler)
            handler.clear();
        let headingEl = dom('.main-container h1');
        headingEl.innerText = `Question ${counter + 1}`;
        if (handler)
            handler.correct(counter);
        if (handler)
            handler.chosen(counter);
    }
    questionEl.innerText = QUESTION;
};
export default render;
