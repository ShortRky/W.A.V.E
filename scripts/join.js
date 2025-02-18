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
