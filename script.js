const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
  for(let i = 0; i <=5; i++) {
   playRound();
}
document.querySelector("button").textContent = "Start a new game";
logWins();
}

function playRound() {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner);
}

function playerChoice() {
  let input = prompt("Please choose rock, paper or scissors");
  while (input == null) {
    input = prompt("Please choose rock, paper or scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt(
      "Please choose rock, paper or scissors. Type in the exact spelling of these words."
      );
    while (input == null) {
        input = prompt("Please choose rock, paper or scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
  return choices.includes(choice);
}

function checkWinner(playerChoice, computerChoice) {

  if(playerChoice === computerChoice) {
  return "Tie";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") || 
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
    ) {
    return "players wins!";
  } else {
    return "Computer wins!";
  }
}

function logWins() {
  let playerWins = winners.filter((winner) => item == "Player wins!").length;
  let computerWins = winners.filter((winner) => item == "Computer wins!").length;
  let tie = winners.filter((winner) => item == "Tie!").length;
  console.log("Results:");
  console.log("Player Wins:", playerWins);
  console.log("Computer Wins:", computerWins);
  console.log("Tie:", tie);
}

function logRound(playerChoice, computerChoice, winner) {
  console.log("Player:", playerChoice);
  console.log("Computer:", computerChoice);
  console.log(winner);
}
