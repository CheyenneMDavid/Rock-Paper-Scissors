// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

for (let button of buttons) {
    button.addEventListener("click", function () {

        if (this.getAttribute("data-type") === "rock") {
            userChoice = "rock"
            console.log(userChoice);
            checkWinner();
        } else if (this.getAttribute("data-type") === "paper") {
            userChoice = "paper"
            console.log(userChoice);
            checkWinner();
        } else if (this.getAttribute("data-type") === "scissors") {
            userChoice = "scissors"
            console.log(userChoice);
            checkWinner();
        } else if (this.getAttribute("data-type") === "stop") {
            finish()
        }

    })
}

})

function computerChoice() {
    let rpsChoices = ["rock", "paper", "scissors"]
    let computerChoice = rpsChoices[Math.floor(Math.random() * 3)]
    return computerChoice
}

function checkWinner() {
    if (userChoice === computerChoice) {
        alert("This game was a draw");


    } else if (userChoice === "rock" && computerChoice === "scissors") {
        alert("Welldone! You chose Rock and the Computer chose Scissors, which mans YOU WIN!");
        incrementUserScore();

    } else if (userChoice === "paper" && computerChoice === "rock") {
        alert("Welldone! You chose Paper and the Computer chose Rock, which mans YOU WIN!");
        incrementUserScore();

    } else if (userChoice === "scissors" && computerChoice === "paper") {
        alert("Welldone! You chose Scissors and the Computer chose Paper, which mans YOU WIN!");
        incrementUserScore();

    } else
        alert(`Unlucky!  You chose "${userChoice}" and the computer choice "${computerChoice}", which means you loose!`);
    incrementComputerScore()
}

// Increment functions borrowed from the walkthrough project.
function incrementUserScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
    gameCount()
}

// Increment functions borrowed from the walkthrough project.
function incrementComputerScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
    gameCount()
}


// Loop to play five games before stopping
function gameCount() {

    for (let i = 0; i < 5; i++) {
        playGame()
    }
}
gameCount()