interface QuizInterface {
    id: number,
    settings: {
        quizType: string,
        noOfQuestions: number,
        // category: string,
        // difficulty: string,
        timeLimit: string
    },
    questions: {
        QUESTION: "string",
        OPTIONS: string[],
        chosen: string,
        answer: string
    }[],
    setChosen: (
        array: {id: number, value: string}[]
    ) => void, // sets chosen to each object in questions array with the done array from quiz Gen widget
    correct: number[],
    wrong: number[],
    score: number
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