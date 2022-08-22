// const inputText = document.querySelectorAll("input");
// const alert = document.querySelectorAll("span");

// getting the input elements
const fname = document.getElementById("firstname");
const lname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

//getting span elements
const fError = document.querySelector(".f");
const lError = document.querySelector(".l");
const eError = document.querySelector(".e");
const pError = document.querySelector(".p");

// console.log((lError.textContent = "hello"));

function required() {
  if (fname.value.length === 0) {
    fError.textContent = "First Name cannot be empty";
    redBorder(fname);
  }
  if (lname.value.length === 0) {
    lError.textContent = "Last Name cannot be empty";
    redBorder(lname);
  }
  if (email.value.length === 0) {
    eError.textContent = "Email cannot be empty";
    redBorder(email);
  }
  if (email.value.indexOf("@") === -1) {
    eError.textContent = "Looks like this is not an email";
    redBorder(email);
  }
  if (password.value.length === 0) {
    pError.textContent = "Password cannot be empty";
    redBorder(password);
  }
}

function redBorder(item) {
  item.style.borderColor = "hsl(0, 100%, 74%)";
}
