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
// const createPassword = document.getElementById("signup-password");
// const confirmPassword = document.getElementById("signup-confirmpassword");

// function verifyPassword() {
//     setInterval (function() {
//         const createPassword = document.getElementById("signup-password");
//         const confirmPassword = document.getElementById("signup-confirmpassword");

//         if (createPassword.value != confirmPassword.value) {
//             confirmPassword.style.borderColor = 'red'
//             confirmPassword.style.background = '#ffdddd'
//         }

//         else {
//             confirmPassword.style.borderColor = 'green';
//             confirmPassword.style.background = '#ddffdd'
//         }
//     }, 1000);
// }

// document.getElementById('signup-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission until checks are passed

//     var password = document.getElementById('signup-password').value;
//     var confirmPassword = document.getElementById('signup-confirmpassword').value;

//     // Check if passwords match
//     if (password !== confirmPassword) {
//         alert('Passwords do not match.');
//         confirmPassword.style.borderColor = 'red'
//         return; // Stop the form submission
//     }

//     // Regular expression to check password complexity
//     var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

//     // Test the password against the regex
//     if (!passwordRegex.test(password)) {
//         alert('Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, and one number.');
//         return; // Stop the form submission
//     }

//     // If all checks are passed, submit the form
//     this.submit();
// });

// Select the password and confirm password input fields
var passwordInput = document.getElementById('signup-password');
var confirmPasswordInput = document.getElementById('signup-confirmpassword');

// Function to check password validity
function checkPasswordValidity() {
    var password = passwordInput.value;
    var confirmPassword = confirmPasswordInput.value;

    // Regular expression to check password complexity
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    // Remove previous validation classes
    passwordInput.classList.remove('valid', 'invalid');
    confirmPasswordInput.classList.remove('valid', 'invalid');

    // Check if both passwords are the same and meet the regex criteria
    if (password === confirmPassword && passwordRegex.test(password)) {
        passwordInput.classList.add('valid');
        confirmPasswordInput.classList.add('valid');
    } else {
        passwordInput.classList.add('invalid');
        confirmPasswordInput.classList.add('invalid');
    }
}

// Event listeners for real-time validation
passwordInput.addEventListener('input', checkPasswordValidity);
confirmPasswordInput.addEventListener('input', checkPasswordValidity);
