// Get references to buttons and result container
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const resultsContainer = document.querySelector(".container-2");

// rps choices array
const rps = ["Rock", "Paper", "Scissors"];

// Initialize scores
let playerScore = 0;
let computerScore = 0;

// Function to get computer's selection
function getComputerChoice() {
    return rps[Math.floor(Math.random() * 3)];
}

// Function to determine the winner of a round
function playRound(playerSelection, computerSelection){
    // bigger number wins
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    }
    // player wins
    else if (
        (playerSelection === 0 && computerSelection === 2) || // Rock beats Scissors
        (playerSelection === 1 && computerSelection === 0) || // Paper beats Rock
        (playerSelection === 2 && computerSelection === 1)    // Scissors beats Paper
    ) {
        // add to playerScore
        playerScore++;
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    }
    else {
        // add to computerScore
        computerScore++;
        console.log(`Opponent wins! ${computerSelection} beats ${playerSelection}!`);
    }
}

// Function to handle button clicks

// Add event listeners to buttons
