const formElem = document.getElementById("contactForm");
const firstNameElem = document.getElementById("firstName");
const lastNameElem = document.getElementById("lastName");
const emailElem = document.getElementById("email");
const messageElem = document.getElementById("message");
const validForm = document.querySelector(".form-valid");
const invalidForm = document.querySelectorAll(".form-error");

formElem.addEventListener("submit", function(event) {
  event.preventDefault();

  const firstNameValue = firstNameElem.value;
  const lastNameValue = lastNameElem.value;
  const emailValue = emailElem.value;
  const messageValue = message.value;

  let isValid = true;

  if (validateNotEmpty(firstNameValue) === false) {
    invalidForm[0].style.display = "block";
    isValid = false;
  } else {
    invalidForm[0].style.display = "none";
  }

  if (validateNotEmpty(lastNameValue) === false) {
    invalidForm[1].style.display = "block";
    isValid = false;
  } else {
    invalidForm[1].style.display = "none";
  }

  if (validateEmail(emailValue) === false) {
    invalidForm[2].style.display = "block";
    isValid = false;
  } else {
    invalidForm[2].style.display = "none";
  }

  if (validateNotEmpty(emailValue) === false) {
    invalidForm[3].style.display = "block";
    isValid = false;
  } else {
    invalidForm[3].style.display = "none";
  }

  if (validateLength(messageValue)) {
    invalidForm[4].style.display = "block";
    isValid = false;
  } else {
    invalidForm[4].style.display = "none";
  }

  for (let index = 0; index < invalidForm.length; index++) {
    if (isValid === true) {
      validForm.style.display = "block";
      invalidForm[index].style.display = "none";
    } else {
      validForm.style.display = "none";
    }
  }
});

// Functions to check validation
function validateLength(value) {
  if (value.length < 10) {
    return true;
  } else {
    return false;
  }
}

function validateNotEmpty(value) {
  trimmedValue = value.trim();

  if (trimmedValue.length > 0) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  let regEx = /\S+@\S+\.\S+/;
  let checkMail = regEx.test(email);
  return checkMail;
}
