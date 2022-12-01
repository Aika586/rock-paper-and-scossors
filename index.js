function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choice.length);

  return choice[random];
}

function playRound(playerSelection, computerSelection) {
  console.log(computerSelection);
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return "You lose!";
  } else if (playerSelection === computerSelection) {
    return "You tie!";
  } else {
    return "You  win!";
  }
}

function userChoice() {
  return window.prompt("Your choice?");
}

console.log(userChoice());
let computerChoice = getComputerChoice();

function game(callback) {
  for (let i = 1; i <= 5; i++) {
    console.log(callback(userChoice(), computerChoice));
  }
}

console.log(game(playRound));
