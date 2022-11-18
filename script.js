
const startButton = document.getElementById('start-button');
const resButton = document.getElementById('restart-button');
const scoreButton = document.getElementById('score-button');
const rockChoice = document.getElementById('rock');
const paperChoice = document.getElementById('paper');
const scissorsChoice = document.getElementById('scissors');
const roundResults = document.getElementById('round-result')
const options = ['rock', 'paper', 'scissors'];
let computerSelection = getComputerChoice();
let playerSelection = ""; 
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = options[Math.floor(Math.random() * options.length)]
    
    return choices;
};
 
rockChoice.addEventListener('click', event => {
    playerSelection = 'rock';
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    if (computerSelection == 'scissors'){
        roundResults.innerText = 'Player Wins!'
        playerScore++
        return
    }else if(computerSelection == 'paper'){
        roundResults.innerText = 'Computer Wins!';
        computerScore++
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
        roundResults.innerText = 'Computer Wins!';
        computerScore++
        return
    }else if(computerSelection == 'rock'){
        roundResults.innerText = 'Player Wins!'
        playerScore++
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
        roundResults.innerText = 'Computer Wins!';
        computerScore++
        return
    }else if(computerSelection == 'paper'){
        roundResults.innerText = 'Player Wins!'
        playerScore++
        return
    }else if(computerSelection == 'scissors'){
        roundResults.innerText = 'Draw!';
        return
    }
    
});


    startButton.addEventListener('click', playGame => {
        
    }); 

    scoreButton.addEventListener('click',event => {
        alert('Player Score:'+ " "+ playerScore + " "+ '||' + " "+ 'Computer Score:' + " "+ computerScore);
    }) 

    resButton.addEventListener('click', event => {
        playerScore = 0;
        computerScore = 0;
        alert('Player Score:'+ " "+ playerScore + " "+ '||' + " "+ 'Computer Score:' + " "+ computerScore);
        roundResults.innerText = "";
    }) 

    


