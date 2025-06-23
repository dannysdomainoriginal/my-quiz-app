export const fetchAccountSettings = () => {
    let settings : AccountSettings = {
        name: "John Doe",
        username: "john.doe",
        password: "johnDoe2008",
        profilePic: localStorage.getItem('imgSourceForQuiz')
    }

    return settings
}

export const fetchDashboardData = {
    user : () => {
        let user : UserDashboard = {name: "John"}
        return user
    },

    subjects : () => {
        let subjects : Subject[] = [
            {name: "Mathematics", image: './images/mathematics.png'},
            {name: "Arts", image: './images/arts.png'},
            {name: "Geography", image: './images/geography.png'},
            {name: "History", image: './images/history.png'},
            {name: "Science", image: './images/science.png'},
            {name: "Literature", image: './images/literature.png'}
        ]

        return subjects
    },

    quote : () =>  {
        let Quote : Quote = 'New Quote: The only way to do great work is to love what you do'

        return Quote
    }
}

export const fetchQuestionsData = (questionId?: number) => {
    let data: StorageData = localStorage.getItem('QUESTIONSData') || '[]'
    let QUESTIONS : Question[] = JSON.parse(data)

    let quiz : Quiz = {
        id: 2008,
        settings: {
            noOfQuestions: 20,
            timeLimit: 3 * 60,
        },
        questions: QUESTIONS
    }

    return quiz
}

export const fetchResultsData = () => {
    let results : Results = {
        id: 2008,
        score: 90,
        correct: [2, 4, 5, 7, 9, 10, 13, 15, 16, 19],
        wrong: [1, 3, 6, 8, 11, 12, 14, 17, 18, 20]
    }

    return results
}

export const fetchTestReviewData = (id: number) => {
    let data: StorageData = localStorage.getItem('TESTREVIEWData') || '[]'
    let QUESTIONS : Question[] = JSON.parse(data)

    let quiz : Quiz = {
        id: 2008,
        settings: {
            noOfQuestions: 20,
        },
        questions: QUESTIONS
    } 

    return quiz
}

export const fetchLeaderboardData = () => {
    let data : StorageData = localStorage.getItem('LEADERBOARDData') || '[]'

    let LeaderBoard : LeaderBoard[] = JSON.parse(data)

    return LeaderBoard
}

export const fetchProfileData = () => {
    let data : string = localStorage.getItem('PROFILEData') || '{}'

    let profile : Profile = JSON.parse(data)

    return profile
}