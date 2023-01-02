const form = document.querySelector(".form");

const fName = document.querySelector("#fname");
const lName = document.querySelector("#lname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener("submit", handleForm);

function handleForm(e) {
  e.preventDefault();

  if (notEmpty(fName)) validationSuccess(fName);
  else validationError(fName, "First Name cannot be empty");

  if (notEmpty(lName)) validationSuccess(lName);
  else validationError(lName, "Last Name cannot be empty");

  if (notEmpty(email)) {
    //Check the formatting of the email if field is not empty
    const mailFormat =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (email.value.match(mailFormat)) validationSuccess(email);
    else validationError(email, "Looks like this is not an email");
  } else validationError(email, "Email cannot be empty");

  if (notEmpty(password)) validationSuccess(password);
  else validationError(password, "Password cannot be empty");
}

function notEmpty(input) {
  if (input.value.length === 0) return false;
  else return true;
}

function validationError(input, message) {
  if (input.classList.contains("error")) {
    //Deals with the case where email goes from invalid to empty
    if (input.nextElementSibling.textContent.length != 0) {
      input.nextElementSibling.textContent = message;
    }
    //Do nothing if the input already has the error class
    return;
  } else {
    //Add .error intot the input element for styling
    input.classList.add("error");
    //Clear out the placeholder text
    input.placeholder = "";
    //clear field
    input.value = "";
    //Add the error message to the span after the input
    input.nextElementSibling.textContent = message;
  }
}

function validationSuccess(input, message) {
  if (input.classList.contains("error")) {
    //Remove .error intot the input element for styling
    input.classList.remove("error");
    //Remove the error message to the span after the input
    input.nextElementSibling.textContent = "";
  } else {
    //Do nothing if the input has no error class
    return;
  }
}
