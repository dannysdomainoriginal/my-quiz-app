export const postLoginData = () => {
    alert('Log In Successful');
    location.href = './dashboard.html';
};
export const postSignInData = () => {
    alert('Sign In Successful');
    location.href = './dashboard.html';
};
export const postSettingsData = (data) => {
    alert('Settings saved');
    location.href = './settings.html';
};
export const postQuizSettings = () => {
    alert('Quiz Data sent successfully');
    location.href = './quiz.html';
};
export const postQuizSessions = (data) => {
    alert('Quiz has been logged successfully');
    location.href = './your-results.html';
};
export const logOut = () => {
    console.log('Logs has been deleted');
    alert('Log Out Successful');
    location.href = './get-started.html';
};
