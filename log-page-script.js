const signUpButton = document.getElementById('signUP');
const signInButton = document.getElementById('signIN');
const main = document.getElementById('main');

signUpButton.addEventListener('click', () => {
    main.classList.add("right-panel-active");
});
signInButton.addEventListener('click', () => {
    main.classList.remove("right-panel-active");
});
