# Odin Project - Rock Paper Scissors Documentation

## Overview

This project implements an interactive CLI game of Rock, Paper, Scissors (RPS) written in JavaScript. The game allows the user to play against the computer, following the classic rules of RPS: Rock beats Scissors, Scissors beats Paper, and Paper beats Rock. The program ensures robust input validation and provides an engaging experience for the user.

## Installation & Setup (MacOS)

Step-by-step instructions on compilation, installation, and setup:

1. Ensure Node.js is Installed:

```bash
node -v
```

If not installed, download and install Node.js from [Node.js official website](https://nodejs.org/en) or use Homebrew:

```bash
brew install node
```

2. Clone this repository:

```bash
git clone https://github.com/gustanini/Odin-Rock-Paper-Scissors.git
```

3. Navigate to the project directory:

```bash
cd Odin-Rock-Paper-Scissors
```

4. Run the script with node:

```bash 
node rps.js
```

## Usage

Detailed usage guide with examples:

1. **Launch the Game:**

- After running the script, the program will display a welcome message and the game rules:

```
Welcome to Rock-Paper-Scissors!

Your selection (0: Rock, 1: Paper, 2: Scissors): 
```

![Welcome Screen](/examples/welcome-screen.png)

2. **Select Your Weapon:**

- Enter `0`, `1`, or `2` as prompted:

```
Your selection (0: Rock, 1: Paper, 2: Scissors): 0
```

![User Input](/examples/user-input.png)

3. **View the Results:**

- The program will display both the user's and the machine's selections, followed by the result:

```
Your selection: Rock
Opponent's selection: Scissors

You win!
```

![Results](/examples/results.png)

- If you enter anything other than `0`, `1`, or `2`, the program will prompt you to try again:

![Invalid Input](/examples/invalid-input.png)

```
Invalid input. Please enter 0, 1, or 2.
```

## To-Do

- [x] Understand the problem (Rules of RPS)
- [x] Plan (Identify inputs and outputs)
- [x] Pseudocode the algorithm
- [x] Divide the problem and translate into code

### Create a graphical user interface (GUI)

- [x] Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
- [x] Add a div for displaying results and change all of your console.logs into DOM methods.
- [x] Display the running score, and announce a winner of the game once one player reaches 5 points.