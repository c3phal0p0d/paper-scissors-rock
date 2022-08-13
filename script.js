function getComputerChoice(){
    let choices = ["paper", "scissors", "rock"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function getPlayerChoice(){
    let choice = "Rock";
    return choice.toLowerCase();
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "draw";
    }

    switch (playerSelection) {
        case "paper":
            if (computerSelection == "scissors"){
                return "computerWin";
            }
            else{
                return "playerWin";
            }

        case "scissors":
            if (computerSelection == "rock"){
                return "computerWin";
            }
            else{
                return "playerWin";
            }

        case "rock":
            if (computerSelection == "paper"){
                return "computerWin";
            }
            else{
                return "playerWin";
            }
    }
}

function playGame(){
    for (let i=0; i<5; i++){
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
}

playGame();