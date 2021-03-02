const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
  e.preventDefault();

  checkInputs();
});

const checkInputs = () => {
  let firstNameValue = firstName.value.trim();
  let lastNameValue = lastName.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (firstNameValue === "") {
    showError(firstName, "El nombre no puede estar vacío");
  } else {
    removeError(firstName);
  }

  if (lastNameValue === "") {
    showError(lastName, "El apellido no puede estar vacío");
  } else {
    removeError(lastName);
  }

  if (emailValue === "" || !regEx.test(emailValue)) {
    showError(email, "Parece que esto no es un correo electrónico");
  } else {
    removeError(email);
  }

  if (passwordValue === "") {
    showError(password, "La contraseña no puede estar vacía");
  } else {
    removeError(password);
  }
}  
  
const showError = (input, message) => {
  let formInput = input.parentElement;
  let msgError = formInput.querySelector(".msg-error");
  let iconError = formInput.querySelector(".icon-error");
  input.style.borderColor = "hsl(0, 100%, 74%)"; 
  msgError.style.visibility = "visible";
  msgError.innerText = message;
  iconError.style.visibility = "visible";
}

const removeError = (input) => {
  let formInput = input.parentElement;
  let msgError = formInput.querySelector(".msg-error");
  let iconError = formInput.querySelector(".icon-error");
  input.style.borderColor = "hsl(246, 25%, 77%)";
  msgError.style.visibility = "hidden";
  iconError.style.visibility = "hidden";
}