/* Breakdown
Set a getComputerChoice function that randomly returns 'Rock,' 'Paper,' or 'Scissors'
Write a function that plays one round of Rock Paper Scissors
Set two parameters for playerSelection and computerSelection and return a string that declares the winner
Make inputs case-insensitive ie. Rock, rock, Rock, or any other variations
Write a function called game() that uses a previous function to play a 5 round game that keeps score and reports a winner and loser at the end
Use a prompt to get input from the user*/

/* Plan
First set up a prompt to get input from user
Set getComputerChoice function
Set variables 
Figure out if else statements and use ||
Write and test functions with console.log

*/


const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Error, please type: rock, paper, or scissors.');
    }
}

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

let userScore = 0
let compScore = 0
let drawScore = 0
let draw = "This round is a tie!"
let compWin = "Sorry, computer won!"
let userWin = "Congratulations, you won!"

const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice) {
        return draw
    }
    if (userChoice === 'rock') {
        if(computerChoice === 'paper') {
            return compWin
        } else {
            return userWin
        }
    }
    if (userChoice === 'paper') {
        if(computerChoice === 'scissors') {
            return compWin
        } else {
            return userWin
        }
    }
    if (userChoice === 'scissors') {
        if(computerChoice === 'rock') {
            return compWin
        } else {
            return userWin
        }
    }
};


const playRound = () => {
    //let player = prompt("Rock, Paper, or Scissors?")
    const userChoice = getComputerChoice('paper');
    const computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);

    console.log(determineWinner(userChoice, computerChoice));
}


const game = () => {
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
    let result = playRound()
    if(result === compWin) {
        compScore++;
    } else if(result === userWin) {
        userScore++;
    } else {
        drawScore++;
    }

    if(userScore >= 3) {
        console.log("Player Wins Game!")
    }
    if(compScore >= 3) {
        console.log("Computer Wins Game!")
    }
}

game()