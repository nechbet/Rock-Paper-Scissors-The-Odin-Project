const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");
const playAgainDOM = document.getElementById("playAgain");
const finalResult = document.getElementById("finalResult");
const playerScoreDOM = document.getElementById("playerScore");
const compScoreDOM = document.getElementById("compScore");

let playerScore = 0;
let compScore = 0;

function parseChoice (x) {
    if (x === 0){ return "Rock";}
    else if (x===1){ return "Paper";}
    else if (x===2){ return "Scissors";};
}

function roundStart (computer, player){
    if (computer === player) {
        finalResult.innerText = "Its a tie!";
    } else if (player == "Rock" && computer == "Paper") {
        updateScore("comp");
    } else if (player == "Rock" && computer == "Scissors") {
        updateScore("player");
    } else if (player == "Paper" && computer == "Scissors"){
        updateScore("comp");
    } else if (player == "Paper" && computer == "Rock"){
        updateScore("player");
    } else if (player == "Scissors" && computer == "Rock"){
        updateScore("comp");
    } else if (player == "Scissors" && computer == "Paper"){
        updateScore("player");
    }
}
function updateScore (winner){
    if (winner == "comp"){
        compScore++;
        finalResult.innerText = "You lose";
        compScoreDOM.innerText = compScore;
    } else {
        playerScore++;
        finalResult.innerText = "You win!";
        playerScoreDOM.innerText = playerScore;
    }
    if (playerScore === 5){
        finalResult.innerText = "Game over! You win!";
        playAgainDOM.classList.remove("disabled");
        stopGame();
    } else if (compScore === 5){
        finalResult.innerText = "Game over! Computer wins.";
        playAgainDOM.classList.remove("disabled");
        stopGame();
    }
}
function newGame() {
    playerScore = 0;
    compScore = 0;
    window.location.reload(true);
}
function stopGame() {
    buttonRock.classList.add("disabled");
    buttonRock.setAttribute("disabled","disabled");
    buttonPaper.classList.add("disabled");
    buttonPaper.setAttribute("disabled","disabled");
    buttonScissors.classList.add("disabled");
    buttonScissors.setAttribute("disabled","disabled");
}
const computerSelection  = () => {
    return Math.floor(Math.random() * 3);
}

let comp = computerSelection();
let player;

buttonRock.addEventListener("click", () => {roundStart(parseChoice(computerSelection()), "Rock")});
buttonPaper.addEventListener("click", () => {roundStart(parseChoice(computerSelection()), "Paper")});
buttonScissors.addEventListener("click", () => {roundStart(parseChoice(computerSelection()), "Scissors")});
playAgainDOM.addEventListener("click", () => {newGame(); });
