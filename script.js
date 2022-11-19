
const roundButton = document.getElementById('round-button');
const resButton = document.getElementById('restart-button');
const scoreButton = document.getElementById('score-button');
const rockChoice = document.getElementById('rock');
const paperChoice = document.getElementById('paper');
const scissorsChoice = document.getElementById('scissors');
const roundResults = document.getElementById('round-result');
const pScore = document.getElementById('p-score');
const cScore = document.getElementById('c-score');
const options = ['rock', 'paper', 'scissors'];
let computerSelection = getComputerChoice();
let playerSelection = ""; 
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = options[Math.floor(Math.random() * options.length)]
    
    return choices;
};
function playGame() {
    if(playerScore == 5 && computerScore < 5){
        roundResults.innerText = 'Game Over. Player Wins!'
    }else if(computerScore == 5 && playerScore < 5){
        roundResults.innerText = 'Game Over. Computer Wins!'
    }
};

pScore.innerText = playerScore;
cScore.innerText = computerScore;

rockChoice.addEventListener('click', event => {
    playerSelection = 'rock';
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    if (computerSelection == 'scissors'){
        roundResults.innerText = 'Player Wins! Rock beats Scissors.'
        playerScore++
        pScore.innerText = playerScore;
        cScore.innerText = computerScore;
        return
    }else if(computerSelection == 'paper'){
        roundResults.innerText = 'Computer Wins! Paper beats Rock.';
        computerScore++
        pScore.innerText = playerScore;
        cScore.innerText = computerScore;
        return
    }else if(computerSelection == 'rock'){
        roundResults.innerText = 'Draw!';
        return
    }
});
paperChoice.addEventListener('click', event => {
    playerSelection = 'paper';
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    if (computerSelection == 'scissors'){
        roundResults.innerText = 'Computer Wins! Scissors beats Paper.';
        computerScore++
        pScore.innerText = playerScore;
        cScore.innerText = computerScore;
        return
    }else if(computerSelection == 'rock'){
        roundResults.innerText = 'Player Wins! Paper beats Rock.'
        playerScore++
        pScore.innerText = playerScore;
        cScore.innerText = computerScore;
        return
    }else if (computerSelection == 'paper'){
        roundResults.innerText = 'Draw!';
        return
    }
    
});
scissorsChoice.addEventListener('click', event => {
    playerSelection = 'scissors';
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    if(computerSelection == 'rock') {
        roundResults.innerText = 'Computer Wins! Rock beats Scissors.';
        computerScore++
        pScore.innerText = playerScore;
        cScore.innerText = computerScore;
        return
    }else if(computerSelection == 'paper'){
        roundResults.innerText = 'Player Wins! Scissors beats Paper.'
        playerScore++
        pScore.innerText = playerScore;
        cScore.innerText = computerScore;
        return
    }else if(computerSelection == 'scissors'){
        roundResults.innerText = 'Draw!';
        return
    }
    
});




    scoreButton.addEventListener('click',event => {
        alert('Player Score:'+ " "+ playerScore + " "+ '||' + " "+ 'Computer Score:' + " "+ computerScore);
    }) 

    resButton.addEventListener('click', event => {
        playerScore = 0;
        computerScore = 0;
        pScore.innerText = playerScore;
        cScore.innerText = computerScore;
        // alert('Player Score:'+ " "+ playerScore + " "+ '||' + " "+ 'Computer Score:' + " "+ computerScore);
        roundResults.innerText = ""; 
    }) 


    


