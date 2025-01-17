/**
 * Function to get computer's selection.
 * Generates a random number 0..2 to select from rps array.
 * 
 * @function
 * @name getComputerChoice
 * @kind function
 * @returns {string}
 */
function getComputerChoice() {
    return rps[Math.floor(Math.random() * 3)];
}

/**
 * Function to determine the winner of a round.
 * Compares both player's selections and increments score variables.
 * 
 * @function
 * @name playRound
 * @kind function
 * @param {any} playerSelection
 * @param {any} computerSelection
 * @returns {string}
 */
function playRound(playerSelection, computerSelection){
    // bigger number wins
    if (playerSelection === computerSelection) {
        return `It's a tie! ${playerSelection} vs ${computerSelection}`;
    }
    // player wins
    else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") || // Rock beats Scissors
        (playerSelection === "Paper" && computerSelection === "Rock") || // Paper beats Rock
        (playerSelection === "Scissors" && computerSelection === "Paper")    // Scissors beats Paper
    ) {
        // add to playerScore
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    }
    else {
        // add to computerScore
        computerScore++;
        return `Opponent wins! ${computerSelection} beats ${playerSelection}!`;
    }
}


/**
 * Function to handle button clicks.
 * Plays rounds after player clicks his selection.
 * Updates DOM to display round results.
 * Checks for a winner each round and resets scoreboard.
 * 
 * 
 * @function
 * @name handlePlayerSelection
 * @kind function
 * @param {any} playerSelection
 * @returns {void}
 */
function handlePlayerSelection(playerSelection){
    // get computer choice and play round
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    // update results in DOM
    resultsContainer.innerHTML = `
        <p>${result}</p>
        <p>Player Score: ${playerScore}</p>
        <p>Computer Score: ${computerScore}</p>
    `;

    // check for winner
    if (playerScore === 5 || computerScore === 5){
        // if player score is 5, player=winner; else computer=winner
        const winner = playerScore === 5 ? "Player" : "Computer";
        resultsContainer.textContent = `${winner} wins the game!`
        
        // reset
        playerScore = 0;
        computerScore = 0;
    }
}

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

// Add event listeners to buttons
rockButton.addEventListener("click", () => handlePlayerSelection("Rock"));
paperButton.addEventListener("click", () => handlePlayerSelection("Paper"));
scissorsButton.addEventListener("click", () => handlePlayerSelection("Scissors"));
