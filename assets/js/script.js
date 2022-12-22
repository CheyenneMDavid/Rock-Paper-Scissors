// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
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




function computerChooses() {
    let computerChoice = ["rock", "paper", "scissors"]
    let randomNumber = Math.floor(Math.random() * 3)
    return computerChoice[randomNumber]
}




function checkWinner(computerChoice) {
    if (userChoice === computerChoice) {
        alert("This game was a draw");
    } else if (userChoice === "rock" && computerChoice === "scissors") {
        alert("You win. You chose Rock and the Computer chose Scissors, which mans YOU WIN!");
        incrementUserScore();
    } else if (userChoice === "paper" && computerChoice === "rock") {
        alert("You win. You chose Paper and the Computer chose Rock, which mans YOU WIN!");
        incrementUserScore();
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        alert("You win. You chose Scissors and the Computer chose Paper.");
        incrementUserScore();
    } else {
        incrementComputerScore()

        alert(`Unlucky!  You chose "${userChoice}" and the computer choice "${computerChoice}", which means you loose!`);
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


// Loop to play five games before stop
// function gameCount() {

//     for (let i = 0; i < 5; i++) {

//         playGame()
//     }
// }
// gameCount()