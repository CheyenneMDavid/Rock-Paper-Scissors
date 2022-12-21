// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    let userChoice = ""

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
