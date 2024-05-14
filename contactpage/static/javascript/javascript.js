// JavaScript code for form submission and handling
document.getElementById("contact-form").addEventListener("submit", function(event) {
event.preventDefault();
var form = this;

// Display a loading message
document.getElementById("contact-form-status").textContent = "Submitting...";

// Perform the form submission asynchronously
var xhr = new XMLHttpRequest();
xhr.open(form.method, form.action, true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    form.reset();
    document.getElementById("contact-form-status").innerHTML = "<span class='success-message'>Thank you! Your message has been sent successfully.</span>";
    } else {
    document.getElementById("contact-form-status").innerHTML = "<span class='error-message'>Sorry, an error occurred while submitting the form. Please try again later.</span>";
    }
};

// Prepare the form data
var formData = new FormData(form);
xhr.send(new URLSearchParams(formData));
});
