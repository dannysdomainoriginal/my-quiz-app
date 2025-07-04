import Switcheroo from "../widgets/login-signup-switch.js";

// the login and signup switcher
Switcheroo()

const forms = document.querySelectorAll('form') as NodeListOf<HTMLFormElement>

forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        location.href ='./dashboard.html'
    })
});