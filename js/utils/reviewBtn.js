const testReview = (questionId) => {
    localStorage.setItem('quiz-unique-id', questionId);
    location.href = './test-review.html';
};
export default testReview;
