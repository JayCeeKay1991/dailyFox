"use strict";

// Daily Fox

const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");

const containerApp = document.querySelector(".app");
const logo = document.querySelector(".logo");
const containerImage = document.getElementById("foxImage");
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
    account1?.pin === inputLoginPin.value &&
    account1?.userName === inputLoginUsername.value
  ) {
    labelWelcome.textContent = "Dein täglicher Fuchscontent.";
    containerApp.style.opacity = 100;
  }
  // Find random image

  const imageNumber = Math.floor(Math.random() * 123);
  console.log(imageNumber);
  containerImage.src = `https:\/\/randomfox.ca\/images\/${imageNumber}.jpg`;
  console.log(containerImage);

  // Set date
  const date = new Date();
  labelDate.textContent = Intl.DateTimeFormat("en-GB").format(date);

  // Clear input fields
  inputLoginUsername.value = inputLoginPin.value = "";
  inputLoginPin.blur(); // removes the focus

  // Hide logo & Login fields
  login.style.opacity = 0;
  foxText.style.opacity = 1;
});
