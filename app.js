let form = document.querySelector(".my-form ");
const logBtn = document.querySelector(".confirm");
const loginForm = document.querySelector(".login-form");
const formGroup = document.querySelector(".form-group");
const email = document.getElementById("email");
const pass = document.getElementById("password");

document.addEventListener("DOMContentLoaded", () => {
  loginForm.classList.add("appear-form");
});

// when form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});

function checkInput(){
  const emailValue = email.value;
  const passwordValue = pass.value;
}
