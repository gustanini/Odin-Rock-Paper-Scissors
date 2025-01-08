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
function getMachineChoice() {
    return rps[Math.floor(Math.random() * 3)];
}

// Function to determine the winner of a round

// Function to handle button clicks

// Add event listeners to buttons
