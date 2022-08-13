function getComputerChoice(){
    let choices = ["paper", "scissors", "rock"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function getPlayerChoice(){
    let choice = prompt("Choose your play");
    return choice.toLowerCase();
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "It's a draw";
    }

    switch (playerSelection) {
        case "paper":
            if (computerSelection == "scissors"){
                return "You lose :(";
            }
            else{
                return "You win!";
            }

        case "scissors":
            if (computerSelection == "rock"){
                return "You lose :(";
            }
            else{
                return "You win!";
            }

        case "rock":
            if (computerSelection == "paper"){
                return "You lose :(";
            }
            else{
                return "You win!";
            }
    }
}

const results = document.querySelector('#results');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        results.textContent = playRound(button.getAttribute('id'), getComputerChoice());
    });
});

/*
function playGame(){
    for (let i=0; i<5; i++){
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
}

playGame();
 */