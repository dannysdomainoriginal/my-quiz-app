import { alertUser, dom } from '../utils/index.js';
const Timer = (quiz, handler) => {
    let time = quiz.settings.timeLimit;
    const countDown = dom('.quiz-timer');
    const updateCountDown = () => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        if (seconds < 10)
            seconds = "0" + seconds;
        if (time < 0) {
            clearInterval(timerInterval);
            return alertUser('Time Up', quiz, handler);
        }
        countDown.innerHTML = `0${minutes}:${seconds}`;
        time--;
    };
    let timerInterval = setInterval(updateCountDown, 1000);
};
export default Timer;
