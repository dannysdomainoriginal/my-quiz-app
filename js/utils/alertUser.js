import { postQuizSessions, postSettingsData } from '../controllers/post.js';
const alertUser = (reason, questions, handler) => {
    if (reason == "Confirm Quiz Submission") {
        let check = window.confirm('Confirm Quiz Submission');
        if (check)
            submitQuiz();
    }
    if (reason == 'Time Up') {
        alert('Your time has elasped\nYour test will be auto-submitted');
        submitQuiz();
    }
    if (reason == 'Setting Rest') {
        let check = window.confirm('Save changes?');
        if (check)
            postSettingsData('put data here');
    }
    function submitQuiz() {
        localStorage.setItem('quiz-unique-id', questions.id);
        let answers = handler.send();
        if (answers.length != 0) {
            questions.setChosen(answers);
            console.log(answers, questions);
            postQuizSessions(JSON.stringify(questions));
        }
        else {
            console.log('Failed');
            questions.emptyAnswers();
            postQuizSessions(JSON.stringify(questions));
        }
    }
};
export default alertUser;
