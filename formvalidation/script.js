const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateForm();
});

function validateForm() {
  let usernameValue = username.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let cpasswordValue = cpassword.value.trim();

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }

  if (cpasswordValue === "") {
    setError(cpassword, "Please confirm your password");
  } else if (cpasswordValue !== passwordValue) {
    setError(cpassword, "Passwords doesn't match");
  } else {
    setSuccess(cpassword);
  }

  if (usernameValue == "") {
    setError(username, "username is required");
  } else {
    setSuccess(username);
  }
}

function setError(ele, msg) {
  let formField = ele.parentElement;
  let errorShow = formField.querySelector(".error");

  errorShow.innerText = msg;
  formField.classList.add("error");
  formField.classList.remove("success");
}

function setSuccess(ele) {
  let formField = ele.parentElement;
  let errorShow = formField.querySelector(".error");

  errorShow.innerText = "";
  formField.classList.add("success");
  formField.classList.remove("error");
}

function isValidEmail(e) {
  var reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(e);
}
