var loginForm = document.getElementById("login-form");
var signupForm = document.getElementById("signup-form");
var loginLink = document.getElementById("login-link");
var signupLink = document.getElementById("signup-link");

// Show login form and hide signup form
function showLoginForm() {
loginForm.classList.remove("hidden");
signupForm.classList.add("hidden");
}

// Show signup form and hide login form
function showSignupForm() {
loginForm.classList.add("hidden");
signupForm.classList.remove("hidden");
}

// Switch to login form when login link is clicked
loginLink.addEventListener("click", function(event) {
event.preventDefault();
showLoginForm();
});

// Switch to signup form when signup link is clicked
signupLink.addEventListener("click", function(event) {
event.preventDefault();
showSignupForm();
});

loginForm.addEventListener("submit", function(event) {
event.preventDefault();

// Login logic
// ...
});

signupForm.addEventListener("submit", function(event) {
event.preventDefault();

// Signup logic
// ...
});

// Initially show the login form
showLoginForm();
