export default class User implements UserInterface {
    id;
    name;
    username;
    password;
    profilePicture;
    quizzesTaken;
    averageScore;
    completionRate;
    pastQuizzes;

    constructor(userParams: object) {
        const {id, name, username, password, profilePicture, quizzesTaken, averageScore, completionRate, pastQuizzes} = userParams as any

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

