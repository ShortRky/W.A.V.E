document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.querySelector(".signup-form");
    const signinForm = document.querySelector(".signin-form");
    const switchToSignIn = document.getElementById("switch-to-signin");
    const switchToSignUp = document.getElementById("switch-to-signup");

    function switchForm(showSignIn) {
        if (showSignIn) {
            signupForm.style.display = "none";
            signinForm.style.display = "block";
        } else {
            signinForm.style.display = "none";
            signupForm.style.display = "block";
        }
    }

    document.getElementById("show-signin").addEventListener("click", function () {
        switchForm(true);
    });

    document.getElementById("show-signup").addEventListener("click", function () {
        switchForm(false);
    });
});