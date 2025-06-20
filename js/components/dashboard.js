// MODAL
const modal = document.getElementById("quizModal");

const closeBtn = document.getElementById("closeModalBtn");


closeBtn.onclick = () => modal.classList.remove("active");
window.onclick = (e) => {
    if (e.target === modal) modal.classList.remove("active");
};

let quizConfirm = document.querySelector('[quiz-app]')

// Quiz Page
if(quizConfirm){
    const allLinks = document.querySelectorAll('a')

    allLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()

            let link = e.currentTarget
            let target = link.getAttribute('href')

            let confirm = window.confirm('Would you like to quit the current quiz?')

            if(confirm && !link.classList.contains('take-quiz-btn'))location.href = target
            if(!confirm && link.classList.contains('take-quiz-btn')){
                setTimeout(() => {
                    modal.classList.remove('active');
                }, 300);
            }
        })
    });
}

// Dashboard Page
if(location.href.includes('dashboard')) {
    window.addEventListener('load', () => {
        let subjects = document.querySelectorAll('.subject .img-box')

        subjects.forEach(subject => {
            subject.style.backgroundImage = `url('./images/${subject.getAttribute('data-subject')}.png')`

            console.log('done')
        });
    })
 
    const preGenQuiz = document.getElementById("pre-gen-quiz");
    const aiQuiz = document.getElementById("ai-quiz");

    preGenQuiz.onclick = () => modal.classList.add("active");
    aiQuiz.onclick = () => modal.classList.add("active");
}

// modal
const takeQuiz = document.querySelectorAll('.take-quiz-btn')
takeQuiz.forEach(quizBtn => {
    quizBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        e.preventDefault()

        modal.classList.add("active")
    })
});

console.log(takeQuiz)