"use strict";
let score = 10;
document.querySelector(".score").textContent = score;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
document.querySelector(".highscore").textContent = highscore;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const changeBackground = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess || guess < 1 || guess > 20) {
    console.log("no number insert");
    displayMessage("Number insert is not between 1 and 20!");
  } else if (secretNumber === guess) {
    console.log("guess = number");
    displayMessage("Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    changeBackground("green");
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess != secretNumber) {
    console.log("guess != number");
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High!" : "Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("Your score is 0!");
      document.querySelector(".score").textContent = 0;
      changeBackground("red");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  changeBackground("grey");
  displayMessage("Start guessing...");
});
