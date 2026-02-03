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