// hold rock paper and scissor into an array
const rps = ["Rock", "Paper", "Scissors"];

/**
 * Generates a random int between 0 and 3. 
 * This number gets output and used as the opponent's selection
 * 
 * @function
 * @name randomInt
 * @kind function
 * @returns {number}
 */
function randomInt() { 
    return Math.floor(Math.random() * 3);
}

/**
 * Converts user input and validates it.
 * 
 * @function
 * @name validateInput
 * @kind function
 * @param {any} user
 * @returns {boolean}
 */
function validateInput(user){
    // convert input to number and check if it's within 0..2
    return !isNaN(user) && [0,1,2].includes(Number(user));
}

/**
  * Compares user and machine numbers to determine a winner.
 * 
 * @function
 * @name findWinner
 * @kind function
 * @param {int} user
 * @param {int} machine
 * @returns {void}
 */
function printWinner(user, machine) {
    // bigger number wins
    if (user === machine) {
        console.log("It's a tie!");
    }
    // check if user's number is bigger than machine number
    // if user - machine is 2, then machine is rock and user is scissors
    else if (
        (user === 0 && machine === 2) || // Rock beats Scissors
        (user === 1 && machine === 0) || // Paper beats Rock
        (user === 2 && machine === 1)    // Scissors beats Paper
    ) {
        console.log("You win!");
    }
    else {
        console.log("Machine wins!");
    }
}

// Prompt the user
/**
 * Main algorithm.
 * Receives player input using readline.question.
 * Validates player input using validateInput.
 * Sets player and machine selections
 * Prints a winner using printWinner
 * 
 * @function
 * @name playGame
 * @kind function
 * @returns {void}
 */
function playGame() {                                                                           // TO-DO: add 5 rounds, the player with most points win
    readline.question("Your selection (0: Rock, 1: Paper, 2: Scissors): ", (input) => {
        if (validateInput(input)) {
            const user = Number(input); // Convert valid input to a number
            const machine = randomInt(); // Generate machine choice
            console.log(``);
            console.log(`Your selection: ${rps[user]}`);
            console.log(`Opponent's selection: ${rps[machine]}`);
            console.log(``);
            printWinner(user, machine);

            readline.close(); // Close the readline interface
        } else {
            console.log("Invalid input. Please enter 0, 1, or 2.");
            playGame(); // Retry input
        }
    });
}

// game intro
console.log("Welcome to Rock-Paper-Scissors!\n");
console.log("Enter a number to select your weapon:\n");

// create readline interface to receive input
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Start the game
playGame();
