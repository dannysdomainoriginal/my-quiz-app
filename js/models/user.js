export default class User {
    id;
    name;
    username;
    password;
    profilePicture;
    quizzesTaken;
    averageScore;
    completionRate;
    pastQuizzes;
    constructor(userParams) {
        const { id, name, username, password, profilePicture, quizzesTaken, averageScore, completionRate, pastQuizzes } = userParams;
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.profilePicture = profilePicture;
        this.quizzesTaken = quizzesTaken;
        this.averageScore = averageScore;
        this.completionRate = completionRate;
        this.pastQuizzes = pastQuizzes;
    }
}
