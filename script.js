const choices = ["rock", "paper", "scissors"];

function game() {
  //play the game
  //5 rounds
  //console based
}

function playRound() {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
}

function playerChoice() {
  let input = prompt("Please choose rock, paper or scissors");
  while (input == null) {
    input = prompt("Please choose rock, paper or scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt("Please choose rock, paper or scissors. Type in the exact spelling of these words.");
    input = input.toLowerCase();
    check = validateInput(input);
  }

}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
  return choices.includes(choice);
}

game();
