interface QuizInterface {
    id: number,
    settings: {
        quizType: string,
        noOfQuestions: number,
        // category: string,
        // difficulty: string,
        timeLimit: number
    },
    questions: {
        QUESTION: "string",
        OPTIONS: string[],
        chosen: string,
        answer: string
    }[],
    setChosen: (array: Selected[]) => void, // sets chosen to each object in questions array with the done array from quiz Gen widget
    correct: number[],
    wrong: number[],
    score: number,
    emptyAnswers : () => void
}

interface UserInterface {
    id: number,
    name: string,
    username: string,
    password: string,
    profilePicture: string,
    quizzesTaken: number,
    averageScore: number,
    completionRate: number,
    pastQuizzes: { 
        // should have a max of 10 objects, set it in backend
        name: string,
        score: string,
        dateTaken: string,
        timeSpent: string
    }[] 
}

interface answerHandlerType {
    array: Selected[]
    pass: (id:number) => void
    push: (params: Selected) => void
    edit: (params: Selected) => void
    check: (counter: number) => void
    highlight: (target: HTMLParagraphElement) => void
    send: () => Selected[]
}