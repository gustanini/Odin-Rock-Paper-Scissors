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
    return Math.floor(Math.random() * (2 - 0 + 1) + 0);
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
    return !isNaN(user) && [0,1,2].includes(Number(input));
}

/**
 * Main algorithm. 
 * Compares user and machine numbers to determine a winner using simple arithmetics.
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
    else if (user >= machine && user - machine != 2) {
        console.log("You win!");
    }
    else {
        console.log("Machine wins!");
    }
}

// prompt user to input a number from 0-2
console.log("Welcome! Select your weapon:");
console.log("Rock         =       0");
console.log("Paper        =       1");
console.log("Scissor      =       2");

// input user choice
let user; // read from input
// loop until user understands that only 0,1,2 are valid inputs
while (true) {
    user = prompt("Make your selection."); 
    if (validateInput(user)) {
        user = Number(user); // Convert valid input to a number
        break;
    }
    else {
        console.log("Invalid input. Enter 0, 1, or 2.");
    }
}
// generate machine choice
const machine = randomInt(); 
// print selections
console.log(`Your selection: ${rps[user]}`);
console.log(`Opponent's selection: ${rps[machine]}`);

printWinner(user, machine);