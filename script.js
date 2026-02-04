//create a function that randomly returns "rock", "paper" or "scissors".
function getComputerChoice() {
    let computerChoice = "";
    let i = Math.floor(Math.random() * 3);
    if (i === 0) {
        computerChoice = "rock";
    } else if (i === 1) {
        computerChoice ="paper";
    } else {
        computerChoice = "scissors";
    } 
    return computerChoice;
}

//create a function that takes user choice and returns it.
function getHumanChoice () {
    let choice = prompt("Enter your choice: ");
    return choice.toLowerCase();
}

//declare a function that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.
function playGame () {
    //declare two variables to keep track of the players score.
    let humanScore = 0;
    let computerScore = 0;
    for (let i=0; i < 5; i++) {
        //create a function that takes human and computer choices as arguments, plays a single round, increments the round winner's score and logs a winner announcement.
        function playRound(humanChoice, computerChoice) {
            if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
                humanScore++;
                console.log("You win! " + humanChoice + " beats " + computerChoice);
            } else if ((computerChoice === "rock" && humanChoice === "scissors") || (computerChoice === "paper" && humanChoice === "rock") || (computerChoice === "scissors" && humanChoice === "paper")) {
                computerScore++;
                console.log("You lose! " + computerChoice + " beats " + humanChoice);
            }
        }

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }
    //print the winner
    (humanScore > computerScore) ? console.log("Congratulations! you are the winner.") : console.log("Hard luck! I hope you do better next time.");
}

playGame();