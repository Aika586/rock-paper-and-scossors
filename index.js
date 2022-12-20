const buttons = document.querySelectorAll(".buttons");
const displayUser = document.querySelector(".display-user");
const displayComputer = document.querySelector(".display-computer");
const result = document.querySelector(".result");

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choice.length);

  return choice[random];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    result.textContent = "You lose!";
  } else if (playerSelection === computerSelection) {
    return (result.textContent = "You tie!");
  } else {
    result.textContent = "You  win!";
  }
}

function onclick(e) {
  const playerSelection = e.target.value;
  displayUser.textContent = playerSelection;
  let computerSelection = getComputerChoice();
  displayComputer.textContent = computerSelection;
  playRound(playerSelection, computerSelection);
}

buttons.forEach((button) => {
  button.addEventListener("click", onclick);
});
