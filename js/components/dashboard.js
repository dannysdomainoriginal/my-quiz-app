window.addEventListener('load', () => {
    let subjects = document.querySelectorAll('.subject .img-box')

    subjects.forEach(subject => {
        subject.style.backgroundImage = `url('./images/${subject.getAttribute('data-subject')}.png')`

        console.log('done')
    });
})


// MODAL
const modal = document.getElementById("quizModal");
const preGenQuiz = document.getElementById("pre-gen-quiz");
const aiQuiz = document.getElementById("ai-quiz");

const closeBtn = document.getElementById("closeModalBtn");
const quizTypeSelect = document.getElementById("quizType");
const difficultyGroup = document.getElementById("difficultyGroup");

preGenQuiz.onclick = () => modal.classList.add("active");
aiQuiz.onclick = () => modal.classList.add("active");

closeBtn.onclick = () => modal.classList.remove("active");
window.onclick = (e) => {
    if (e.target === modal) modal.classList.remove("active");
};

quizTypeSelect.onchange = () => {
    const value = quizTypeSelect.value;
    difficultyGroup.classList.toggle("hidden", value === "pre");
};