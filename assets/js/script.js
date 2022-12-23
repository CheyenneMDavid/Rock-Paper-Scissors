// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them.

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            let computerChoice = computerChooses();
            if (this.getAttribute("data-type") === "rock") {
                userChoice = "rock"
                checkWinner(computerChoice);
            } else if (this.getAttribute("data-type") === "paper") {
                userChoice = "paper"
                checkWinner(computerChoice);
            } else if (this.getAttribute("data-type") === "scissors") {
                userChoice = "scissors"
                checkWinner(computerChoice);
            } else if (this.getAttribute("data-type") === "stop") {
                finish()
            }
        })
    }
})

// Function to generate computer choice through use of a random number 0-2
function computerChooses() {
    let computerChoice = ["rock", "paper", "scissors"]
    let randomNumber = Math.floor(Math.random() * 3)
    return computerChoice[randomNumber]
}

//  Function with logic to decide winner and generating alerts accordingly.
function checkWinner(computerChoice) {
    if (userChoice === computerChoice) {
        alert("This game was a draw");
        gameCounter();
    } else if (userChoice === "rock" && computerChoice === "scissors") {
        alert("You win. You chose Rock and the Computer chose Scissors");
        incrementUserScore();
        gameCounter();
    } else if (userChoice === "paper" && computerChoice === "rock") {
        alert("You win. You chose Paper and the Computer chose Rock");
        incrementUserScore();
        gameCounter();
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        alert("You win. You chose Scissors and the Computer chose Paper");
        incrementUserScore();
        gameCounter();
    } else {
        alert(`You chose "${userChoice}" and the computer choice "${computerChoice}", which means you loose!`);
        incrementComputerScore();
        gameCounter();
    }
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
// calls the finish() function.  "i" is the number of games.
function gameCounter() {
    let gameCount = i
    for (let i = 0; i <= 5; i++) {
        checkWinner()
    }
    finish()
}

//  finish() function compares user and computer scores and declares winner.
function finish() {
    let userFinalScore = parseInt(document.getElementById("user-score").value);
    let computerFinalScore = parseInt(document.getElementById("computer-score").value);

    if (userFinalScore === computerFinalScore) {
        alert("Draw!");
        reset();
    } else if (userFinalScore < computerFinalScore) {
        alert("Computer wins the match");
        reset();
    } else {
        alert("You Win!");
        reset()
    }
}

function reset() {
    document.getElementById("user-score").value = "0";
    document.getElementById("computer-score").value = "0";
}