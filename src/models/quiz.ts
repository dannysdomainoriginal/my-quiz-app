export default class Quiz implements QuizInterface {
    id;
    settings;
    questions;
    correct;
    wrong;
    score;

    constructor (quizParams: object) {
        const { id, settings, questions, correct, wrong, score } =  quizParams as any

        this.id = id
        this.settings = settings
        this.questions = questions
        this.correct = correct
        this.wrong = wrong
        this.score = score
    }

    setChosen (updates: {id: number, value: string}[]) {
        for (const update of updates) {
            const {id, value} = update

            if (this.questions[id]) this.questions[id].chosen = value
        }
    }
}