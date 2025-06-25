import {dom} from '../utils/index.js'
import {fetchLeaderboardData} from '../controllers/fetch.js'

let leaderboard = fetchLeaderboardData() as LeaderBoard[]

const leaderBoardRows = dom('.leaderboard tbody tr') as NodeListOf<HTMLTableRowElement>

// set the values
leaderboard.forEach((candidate, index) => {
    let row = leaderBoardRows[index] as HTMLTableRowElement

    console.log(row)

    // get columns
    const rank = row.querySelector('.col-rank') as HTMLTableColElement
    const name = row.querySelector('.col-user') as HTMLTableColElement
    const score = row.querySelector('.col-score') as HTMLTableColElement
    const quizzes = row.querySelector('.col-quizzes') as HTMLTableColElement

    // console.log(rank, name, score, quizzes)

    // set values
    rank.innerText = `${candidate.rank}`
    name.innerText = candidate.accountName
    score.innerText = `${candidate.averageScore}%`
    quizzes.innerText = `${candidate.noOfQuizzesTaken}`

});