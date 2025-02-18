document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.querySelector(".signup-form");
    const signinForm = document.querySelector(".signin-form");
    const authContainer = document.querySelector(".auth-container");
    const showSignIn = document.getElementById("show-signin");
    const showSignUp = document.getElementById("show-signup");

    // Switch to Sign In
    showSignIn.addEventListener("click", function () {
        signupForm.style.transform = "translateX(-100%)";
        signinForm.style.transform = "translateX(0)";
    });

    // Switch to Sign Up
    showSignUp.addEventListener("click", function () {
        signupForm.style.transform = "translateX(0)";
        signinForm.style.transform = "translateX(100%)";
    });
});

document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Stop normal submission

    // Create the welcome message UI
    const container = document.querySelector(".signup-container");
    container.innerHTML = `
        <h2>Welcome to W.A.V.E</h2>
        <p>You're now part of the future.</p>
        <p>Redirecting you to the homepage...</p>
    `;

    container.style.boxShadow = "0 0 30px rgba(255, 215, 0, 0.7)"; // Gold glow effect

    // Delay before redirecting
    setTimeout(() => {
        window.location.href = "../index.html"; // Redirect home
    }, 3000); // 3-second delay
});
