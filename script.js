// script.js
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const switchToLogin = document.getElementById('switch-to-login');
    const switchToSignup = document.getElementById('switch-to-signup');

    switchToLogin.addEventListener('click', function(e) {
        e.preventDefault();
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });

    switchToSignup.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    });
});

// verify password
const createPassword = document.getElementById(`signup-password`);
const confirmPassword = document.getElementById(`signup-confirmpassword`);

function verifyPassword() {
    setInterval (function() {
        const createPassword = document.getElementById(`signup-password`);
        const confirmPassword = document.getElementById(`signup-confirmpassword`);

        if (createPassword.value != confirmPassword.value) {
            confirmPassword.style.borderColor = 'red'
            confirmPassword.style.background = '#ffdddd'
        }

        else {
            confirmPassword.style.borderColor = 'green';
            confirmPassword.style.background = '#ddffdd'
        }
    }, 1000);
}