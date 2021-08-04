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
  const emailValue = email.value.trim();
  const passwordValue = pass.value.trim();

  if(emailValue == ''){
    setError(email , 'Email can not be blank !');
  } else {
    setSuccess(email);
  }

  if(passwordValue == '') {
    setError(pass , 'Please enter your password !');
  } else {
    setSuccess(pass)
  }
}

function setError(input , message){
  const formGroup = input.parentElement;
  const smallErrorMessage = formGroup.querySelector('.error-message');
  smallErrorMessage.innerText = message;
  formGroup.classList.add('error');
  formGroup.classList.remove('success');
}

function setSuccess(input){
  const formGroup = input.parentElement;
  formGroup.classList.add('success');
  formGroup.classList.remove('error');
}

