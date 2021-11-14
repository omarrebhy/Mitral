/*=========================switch between loginform and singupForm*/
const loginForm = document.querySelector("form.login");
const signupForm = document.querySelector("form.signup");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector(".signup-link a");
const loginText = document.querySelector(".title-text .login");
const signupText = document.querySelector(".title-text .signup");
const input = document.querySelector("input");
signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%"
    loginText.style.marginLeft = "-50%"


});
loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%"
    loginText.style.marginLeft = "0%"

});
signupLink.onclick = (() => {
    signupBtn.click();
    return false;
});
input.onfocus = function () {
    window.open("confirm.html");
};


/*  end*/