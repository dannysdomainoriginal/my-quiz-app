import { dom } from '../utils/index.js';
import { fetchLeaderboardData } from '../controllers/fetch.js';
let leaderboard = fetchLeaderboardData();
const leaderBoardRows = dom('.leaderboard tbody tr');
leaderboard.forEach((candidate, index) => {
    let row = leaderBoardRows[index];
    console.log(row);
    const rank = row.querySelector('.col-rank');
    const name = row.querySelector('.col-user');
    const score = row.querySelector('.col-score');
    const quizzes = row.querySelector('.col-quizzes');
    rank.innerText = `${candidate.rank}`;
    name.innerText = candidate.accountName;
    score.innerText = `${candidate.averageScore}%`;
    quizzes.innerText = `${candidate.noOfQuizzesTaken}`;
});
