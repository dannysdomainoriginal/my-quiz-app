import {dom} from '../utils/index.js'
import {fetchProfileData} from '../controllers/fetch.js'

const { id, name, username, password, profilePicture, quizzesTaken, averageScore, completionRate, pastQuizzes, dateJoined} = fetchProfileData()

let nameHeading = dom('.profile-text h4') as HTMLHeadingElement
let dateJoinedText = dom('.profile-text small') as HTMLElement
let quizTakenText = dom('.quizzes-taken') as HTMLHeadingElement
let avgScoreText = dom('.avg-score') as HTMLHeadingElement
let compRateText = dom('.comp-rate') as HTMLHeadingElement
let usernameText = dom('.account-username p') as HTMLParagraphElement
let resultRows = dom('.results-table tbody tr') as NodeListOf<HTMLTableRowElement>

// set values
nameHeading.innerText = name
dateJoinedText.innerText = `Joined ${dateJoined}`
quizTakenText.innerText = `${quizzesTaken}`
avgScoreText.innerText = `${averageScore}%`
compRateText.innerText = `${completionRate}%`
usernameText.innerText = username

var array = ['you', 'me']
array.forEach((i, value) => {
    console.log(i + ' ' + value)
});

pastQuizzes.forEach((quiz, index) => {
    let quizRow = resultRows[index]

    // get columns
    const quizName = quizRow.querySelector('.col-name') as HTMLTableCellElement
    const quizScore = quizRow.querySelector('.col-score') as HTMLTableCellElement
    const quizDate = quizRow.querySelector('.col-date') as HTMLTableCellElement
    const quizTime = quizRow.querySelector('.col-time') as HTMLTableCellElement

    // set values
    quizName.innerText = quiz.name
    quizScore.innerText = quiz.score
    quizDate.innerText = quiz.dateTaken
    quizTime.innerText = quiz.timeSpent
});