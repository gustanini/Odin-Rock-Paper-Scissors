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

2. **Select Your Weapon:**

- Enter `0`, `1`, or `2` as prompted:

```
Your selection (0: Rock, 1: Paper, 2: Scissors): 0
```

3. **View the Results:**

- The program will display both the user's and the machine's selections, followed by the result:

```
Your selection: Rock
Opponent's selection: Scissors

You win!
```

- If you enter anything other than `0`, `1`, or `2`, the program will prompt you to try again:

```
Invalid input. Please enter 0, 1, or 2.
```

## To-Do

- [x] Understand the problem (Rules of RPS)
- [x] Plan (Identify inputs and outputs)
- [x] Pseudocode the algorithm
- [x] Divide the problem and translate into code
- [] Add enhancements (e.g., multiple rounds or scoring system)
- [] Create a graphical user interface (GUI)
