const testReview = (questionId: string) => {
    localStorage.setItem('quiz-unique-id', questionId)
    location.href = './test-review.html'
}

export default testReview