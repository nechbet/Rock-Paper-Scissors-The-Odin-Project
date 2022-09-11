const choices = ["rock", "paper", "scissors"];

function game() {
  playRound();
}

function playRound() {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  console.log(winner);
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





game();
