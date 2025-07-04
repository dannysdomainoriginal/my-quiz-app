import Switcheroo from "../widgets/login-signup-switch.js";
Switcheroo();
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        location.href = './dashboard.html';
    });
});
