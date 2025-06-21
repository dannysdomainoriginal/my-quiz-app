const fetchSettingsData = () => {
    return {
        name: "John Doe",
        username: "john.doe",
        password: "johnDoe2008",
        profilePic: localStorage.getItem('imgSourceForQuiz')
    }
}

const fetchDashboardData = {
    user : () => {
        return {
            name: "John"
        }
    },

    subjects : () => {
        return [
            {name: "Mathematics", image: './images/mathematics.png'},
            {name: "Arts", image: './images/arts.png'},
            {name: "Geography", image: './images/geography.png'},
            {name: "Histroy", image: './images/histroy.png'},
            {name: "Science", image: './images/science.png'},
            {name: "Literature", image: './images/literature.png'}
        ]
    },

    quote : () => 'New Quote: The only way to do great work is to love what you do'
}

const getQuiz = () => {
    return console.log('Quiz data....')
}