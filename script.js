//create a function that randomly returns "rock", "paper" or "scissors".
function getComputerChoice() {
    let i = Math.floor(Math.random() * 3);
    if (i === 0) {
        console.log("rock");
    } else if (i === 1) {
        console.log("paper");
    } else {
        console.log("scissors");
    }
}

//create a function that takes user choice and returns it.
function getHumanChoice () {
    let choice = prompt("Enter your choice: ");
    return choice.toLowerCase();
}

//declare two variables to keep track of the players score.
let humanScore = 0;
let computerScore = 0;

