import { dom, progressBar } from '../utils/index.js';
const render = (counter, array, length, handler) => {
    let question = array[counter];
    let { QUESTION, OPTIONS } = question;
    let questionEl = dom('.question');
    let nodeList = dom('.quiz-container p');
    let optionsList = Array.from(nodeList).entries();
    let chosen = dom('input[name="quiz"]:checked');
    let headingEl = dom('.above-progress-bar h4');
    for (const [index, el] of optionsList) {
        el.innerText = OPTIONS[index];
    }
    questionEl.innerText = QUESTION;
    headingEl.innerText = `Question ${counter + 1} of ${length}`;
    progressBar([counter + 1, length]);
    if (handler)
        handler.check(counter);
};
export default render;
