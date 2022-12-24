// Wait for the DOM to finish loading before running the game	
// Get the button elements and add event listeners to them.	
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            let computerChoice = computerChooses();
            if (this.getAttribute("data-type") === "rock") {
                userChoice = "rock";
                checkWinner(computerChoice);
            } else if (this.getAttribute("data-type") === "paper") {
                userChoice = "paper";
                checkWinner(computerChoice);
            } else if (this.getAttribute("data-type") === "scissors") {
                userChoice = "scissors";
                checkWinner(computerChoice);
            } else if (this.getAttribute("data-type") === "stop") {
                finish();
            }
        });
    }
});
// Function to generate computer choice through use of a random number 0-2	
function computerChooses() {
    let computerChoice = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    return computerChoice[randomNumber];
}
//  Function with logic to decide winner and generating alerts accordingly.	
function checkWinner(computerChoice) {
    if (userChoice === computerChoice) {
        alert("This game was a draw");
        gameCount++;
    } else if (userChoice === "rock" && computerChoice === "scissors") {
        alert("You Win.  You choice rock, the computer chose scissors");
        incrementUserScore();
        gameCount++;
    } else if (userChoice === "paper" && computerChoice === "rock") {
        alert("You Win.  You chose paper, the computer chose rock");
        incrementUserScore();
        gameCount++;
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        alert("You Win.  You chose scissors, the computer chose paper");
        incrementUserScore();
        gameCount++;
    } else {
        alert(`You loose this game. You chose "${userChoice}" and the computer chose "${computerChoice}"`);
        incrementComputerScore();
        gameCount++;
    }
    gameCounter();
}
// Increment functions borrowed from the walkthrough project.	
function incrementUserScore() {
    let oldScore = parseInt(document.getElementById("user-score").innerText);
    document.getElementById("user-score").innerText = ++oldScore;
}
// Increment functions borrowed from the walkthrough project.	
function incrementComputerScore() {
    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;
}
// gameCount is incremented eachtime a game is played to a maximum of 5 games and then	
// calls the finish() function.	
let gameCount = 0
const maxGameNumber = 5

function gameCounter() {
    if (gameCount >= maxGameNumber) {
        finish()
    }
}
//  finish() function compares user and computer scores and declares the winner.	
function finish() {
    let userFinalScore = parseInt(document.getElementById("user-score").innerText);
    let computerFinalScore = parseInt(document.getElementById("computer-score").innerText);
    if (userFinalScore === computerFinalScore) {
        alert("The Match is Drawn");
        reset();
    } else if (userFinalScore > computerFinalScore) {
        alert("You Win The Match");
        reset();
    } else {
        alert("Computer Wins The Match");
        reset();
    }
}
// reset() function resets the scores to 0 after the game	
function reset() {
    document.getElementById("user-score").innerText = "0";
    document.getElementById("computer-score").innerText = "0";
    window.location.reload();
}