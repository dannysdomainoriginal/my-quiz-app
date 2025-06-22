import QuizSession from "models/quiz"
import { alertUser, answerHandler, dom } from '../utils/index.js'

const Timer = (quiz: QuizSession, handler: answerHandler) => {
    let time = quiz.settings.timeLimit
    const countDown = dom('.quiz-timer') as HTMLSpanElement

    const updateCountDown = () => {
        let minutes : number = Math.floor( time / 60 )
        let seconds : string | number = time % 60

        if (seconds < 10) seconds = "0" + seconds

        // Time Up
        if ( time < 0 ) {
            clearInterval(timerInterval)
            return alertUser('Time Up', quiz, handler) 
        }
        
        countDown.innerHTML = `0${minutes}:${seconds}`
        time--
    }

    let timerInterval = setInterval(updateCountDown, 1000)
}

export default Timer