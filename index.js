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
            return 'scissors'
    }
};

