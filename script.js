"use strict";

// Daily Fox

const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");

const containerApp = document.querySelector(".app");
const logo = document.querySelector(".logo");
const containerImage = document.querySelector(".image");
const foxText = document.querySelector(".foxText");

const login = document.querySelector(".login");
const btnLogin = document.querySelector(".login__btn");
const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");

// Data
const account1 = {
  userName: "1",
  pin: "1",
};

// Login

btnLogin.addEventListener("click", function (e) {
  e.preventDefault(); // stops the button in a form from submitting

  // check if the credentials are correct
  if (
    account1?.pin === inputLoginPin.value ||
    account1?.userName === inputLoginUsername.value
  ) {
    labelWelcome.textContent = "Dein täglicher Fuchscontent.";
    //labelWelcome.style.marginleft = 2rem;
    containerApp.style.opacity = 100;
  }
  // Clear input fields
  inputLoginUsername.value = inputLoginPin.value = "";
  inputLoginPin.blur(); // removes the focus

  // Hide logo & Login fields
  logo.style.opacity = login.style.opacity = 0;
  foxText.style.opacity = 1;

  // Set date
  const date = new Date();
  labelDate.textContent = Intl.DateTimeFormat("en-GB").format(date);
});
