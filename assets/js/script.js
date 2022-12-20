// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    
    let userChoice = ""


    for (let button of buttons) {
        button.addEventListener("click", function () {

            if (this.getAttribute("data-type") === "rock") {
                // userChoice = rock;
                alert("you clicked ROCK.")
                checkWinner()
            } else if (this.getAttribute("data-type") === "paper") {
                // userChoice = paper;
                alert("You clicked PAPER.")
                checkWinner()
            } else if (this.getAttribute("data-type") === "scissors") {
                // userChoice = scissors;
                alert("You clicked SCISSORS.")
                checkWinner()
            } else if (this.getAttribute("data-type") === "stop") {
                alert("You clicked STOP")
                finish()
            }
        })
    }
})
