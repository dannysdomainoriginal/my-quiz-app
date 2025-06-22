export default class QuizSession {
    id;
    settings;
    questions;
    correct;
    wrong;
    score;
    constructor(quizParams) {
        const { id, settings, questions, correct, wrong, score } = quizParams;
        this.id = id;
        this.settings = settings;
        this.questions = questions;
        this.correct = correct;
        this.wrong = wrong;
        this.score = score;
    }
    setChosen(updates) {
        for (const update of updates) {
            const { id, value } = update;
            if (this.questions[id])
                this.questions[id].chosen = value;
        }
    }
    emptyAnswers() {
        for (const question of this.questions) {
            question.chosen = null;
        }
    }
}
