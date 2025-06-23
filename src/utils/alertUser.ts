import QuizSession from '../models/quiz.js'
import {postQuizSessions, postSettingsData} from '../controllers/post.js'
import answerHandler from './answerHandler.js'

const alertUser = (reason: string, questions : QuizSession, handler : answerHandler) => {
    
    // Confirm Quiz Submission
    if (reason == "Confirm Quiz Submission") {
        let check = window.confirm('Confirm Quiz Submission')

        if(check) submitQuiz()
    }

    // Submit Time Limit
    if (reason == 'Time Up'){
        alert('Your time has elasped\nYour test will be auto-submitted')

        submitQuiz()
    }

    // Account Settings
    if (reason == 'Setting Rest') {
        let check = window.confirm('Save changes?')
        if ( check ) postSettingsData('put data here') // pass in settings data
    }


    // Submit Quiz
    function submitQuiz () {
        localStorage.setItem('quiz-unique-id', questions.id) // store id of question in localStorage
        
        let answers = handler.send()

        if (answers.length != 0) {
            questions.setChosen(answers)
            console.log(answers, questions)

            postQuizSessions(JSON.stringify(questions))
        } else {
            console.log('Failed')
            questions.emptyAnswers()
            postQuizSessions(JSON.stringify(questions))
        }
    }
}

export default alertUser