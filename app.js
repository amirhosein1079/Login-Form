let form = document.querySelector(".my-form ");
const loginForm = document.querySelector(".login-form");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const forgetPassLink = document.querySelector(".forget-pass");
const modalBg = document.querySelector(".modal-message-container");
const recoverPassBtn = document.querySelector(".recover-pass-btn");
const closeBtn = document.querySelector(".close-btn");
const modalForm = document.querySelector(".recover-pass");

document.addEventListener("DOMContentLoaded", () => {
  loginForm.classList.add("appear-form");
});

// when form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});

function checkInput() {
  const emailValue = email.value.trim();
  const passwordValue = pass.value.trim();

  if (emailValue == "") {
    setError(email, "Email can not be blank !");
  } else {
    setSuccess(email);
  }

  if (passwordValue == "") {
    setError(pass, "Please enter your password !");
  } else {
    setSuccess(pass);
  }
}

function setError(input, message) {
  const formGroup = input.parentElement;
  const smallErrorMessage = formGroup.querySelector(".error-message");
  smallErrorMessage.innerText = message;
  formGroup.classList.add("error");
  formGroup.classList.remove("success");
}

function setSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.classList.add("success");
  formGroup.classList.remove("error");
}

forgetPassLink.addEventListener("click", (e) => {
  e.preventDefault();
  modalBg.classList.add("bg-active");
  loginForm.style.display = "none";
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modalBg.classList.remove("bg-active");
  loginForm.style.display = "block";
});
