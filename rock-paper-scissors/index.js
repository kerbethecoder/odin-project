console.log(`Eveybody Ready?! Let's play! Rock, Paper, Scissors, Shoot!`);
console.log(`Waiting for the player's choice...`);
console.log('');
// rock-paper-scissor

//pseudocode
//function getComputerChoice
//make a list of choices
//get the index = mathrandom * choice list -> round off
//return the choice

function getComputerChoice() {
  const CHOICES = ['rock', 'paper', 'scissors'];

  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

// console.log(getComputerChoice());

//pseudocode
//function playGame
//takes 2 parameters, computerchoice and player choice
//user input for rock, paper, or scissors
//lowercase the user input

//if computerchoice == paper && playerchoice == paper; draw
//if computerchoice == paper && playerchoice == rock; computer wins
//if computerchoice == paper && playerchoice == scissor; player wins

//if computerchoice == scissor && playerchoice == paper; computer wins
//if computerchoice == scissor && playerchoice == rock; player wins
//if computerchoice == scissor && playerchoice == scissor; draw

//if computerchoice == rock && playerchoice == paper; player wins
//if computerchoice == rock && playerchoice == rock; draw
//if computerchoice == rock && playerchoice == scissor; computer wins

let playerScore = 0;
let computerScore = 0;

function playGame(comp, player) {
  if (comp == 'paper' && player == 'paper') {
    return `---It's a DRAW! Let's go again! Hiyaaah!---`;
  } else if (comp == 'paper' && player == 'rock') {
    computerScore++;
    return `---Computer wins!---`;
  } else if (comp == 'paper' && player == 'scissors') {
    playerScore++;
    return `---Player wins!---`;
  } else if (comp == 'scissors' && player == 'paper') {
    computerScore++;
    return `---Computer wins!---`;
  } else if (comp == 'scissors' && player == 'rock') {
    playerScore++;
    return `---Player wins!---`;
  } else if (comp == 'scissors' && player == 'scissors') {
    return `---It's a DRAW! Let's go again! Hiyaaah!---`;
  } else if (comp == 'rock' && player == 'paper') {
    playerScore++;
    return `---Player wins!---`;
  } else if (comp == 'rock' && player == 'rock') {
    return `---It's a DRAW! Let's go again! Hiyaaah!---`;
  } else if (comp == 'rock' && player == 'scissors') {
    computerScore++;
    return `---Computer wins!---`;
  } else return '---What the dUcK?? Wrong spelling tHeMasS!---';
}

// const playerChoice = 'paper';

//final game
//make a variable that stores a game score between the player and the computer
//for loop 5 games
//after looping, deduce the results and declare the winner
for (let rounds = 1; rounds <= 5; rounds++) {
  const playerChoice = prompt(`Would you please enter you choice?^^`);
  const computerChoice = getComputerChoice();
  if (playerChoice == null) {
    console.log('The game is closing! Thank You! ^^');
    console.log('');
    break;
  } else if (
    playerChoice == 'paper' ||
    playerChoice == 'rock' ||
    playerChoice == 'scissors'
  ) {
    console.log(`PLAYER: '${playerChoice}'`);
    console.log(`COMPUTER: '${computerChoice}'`);
    console.log('');
    console.log(`${playGame(computerChoice, playerChoice)}`);
    console.log('');
  } else {
    console.log('Beach, wrong answer! Try again next game!');
    console.log('');
    break;
  }
}
console.log(`Score: 
PLAYER: ${playerScore} COMPUTER: ${computerScore} `);
if (playerScore > computerScore) {
  console.log('Congratulations! The PLAYER wins!');
} else if (computerScore > playerScore) {
  console.log('Too bad! The Computer wins!');
} else console.log('Yoink! DRAW! ^^');

// if playerchoice is null; break
// if playerchoice is paper, rock, scissors; loop
// else try again
