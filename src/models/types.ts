type StorageData = string | null

type AccountSettings = {
    name: string,
    username: string,
    password: string,
    profilePic: string | null // localStorage item
}

type UserDashboard = {
    name: string
}

type Subject = {
    name: string,
    image: StorageData
}

type Quote = string

type Question = {
    QUESTION: string,
    OPTIONS: string[],
    answer: string,
    chosen?: string
}

type Quiz = {
    id: number,
    settings: {
        noOfQuestions: number,
        timeLimit?: string
    }
    questions: Question[]
}

type LeaderBoard = {
    rank: number,
    accountName: string,
    averageScore: string,
    noOfQuizzesTaken: number
}

type QuizData = {
    name: string,
    score: string,
    dateTaken: string,
    timeSpent: string
}

type Results = {
    id: number,
    score: number,
    correct: number[],
    wrong: number[]
}

type Profile = {
    id: number,
    name: string,
    username: string,
    password: string,
    profilePicture: string,
    quizzesTaken: number,
    averageScore: number,
    completionRate: number,
    pastQuizzes: QuizData[] // should have a max of 10 objects, set it in backend
}