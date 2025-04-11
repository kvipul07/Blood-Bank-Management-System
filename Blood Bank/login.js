// Simple hardcoded login credentials
const validCredentials = {
    username: 'admin', // Change this to whatever username you want
    password: 'password123' // Change this to whatever password you want
};

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validCredentials.username && password === validCredentials.password) {
        // Redirect to blood bank page after successful login
        window.location.href = "blood-bank.html"; // Change this to the correct file for the blood bank page
    } else {
        alert("Invalid credentials. Please try again.");
    }
});

