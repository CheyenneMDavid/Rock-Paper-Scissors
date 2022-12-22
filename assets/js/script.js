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
        alert("You win. You chose Rock and the Computer chose Scissors.");
        incrementUserScore();
    } else if (userChoice === "paper" && computerChoice === "rock") {
        alert("You win. You chose Paper and the Computer chose Rock.");
        incrementUserScore();
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        alert("You win. You chose Scissors and the Computer chose Paper.");
        incrementUserScore();
    } else
        alert(`You lose. You chose "${userChoice}" and the computer chose "${computerChoice}"`);
    incrementComputerScore()
}
// Increment functions borrowed from the walkthrough project.
function incrementUserScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

// Increment functions borrowed from the walkthrough project.
function incrementComputerScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}


// Loop to play five games before stop
function gameCount() {

    for (let i = 0; i < 5; i++) {

    
          
            
    

          
    
    
  
        playGame()
    }
}
gameCount()