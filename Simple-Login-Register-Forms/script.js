document.addEventListener("DOMContentLoaded", function () {
    particlesJS.load('particles-js', 'particles.json', function () {
        console.log("Particles.js loaded");
    });

    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const loginBtn = document.getElementById("login-btn");
    const registerBtn = document.getElementById("register-btn");
    const glassBox = document.querySelector(".glass-box");

    // Add fade-in effect after a small delay
    setTimeout(() => {
        glassBox.classList.add("show");
    }, 200); // Delay for smooth appearance

    registerBtn.addEventListener("click", function () {
        registerBtn.classList.add("active");
        loginBtn.classList.remove("active");

        loginForm.classList.remove("active-form");
        registerForm.classList.add("active-form");

        glassBox.classList.remove("login-active");
        glassBox.classList.add("register-active");
    });

    loginBtn.addEventListener("click", function () {
        loginBtn.classList.add("active");
        registerBtn.classList.remove("active");

        registerForm.classList.remove("active-form");
        loginForm.classList.add("active-form");

        glassBox.classList.remove("register-active");
        glassBox.classList.add("login-active");
    });
});
