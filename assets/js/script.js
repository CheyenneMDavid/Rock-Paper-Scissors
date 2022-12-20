// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");


    let userChoice = ""


    for (let button of buttons) {
        button.addEventListener("click", function () {

            if (this.getAttribute("data-type") === "rock") {

                checkWinner()
            } else if (this.getAttribute("data-type") === "paper") {

                checkWinner()
            } else if (this.getAttribute("data-type") === "scissors") {

                checkWinner()
            } else if (this.getAttribute("data-type") === "stop") {

                finish()
            }
        })
    }
})


function computerChooses() {
    let rpsChoices = ['Rock', 'Paper', 'Scissors']
    let computerChoice = rpsChoices[Math.floor(Math.random() * 3)]
    return computerChoice
}