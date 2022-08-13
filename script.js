function getComputerChoice(){
    let choices = ["paper", "scissors", "rock"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function getPlayerChoice(){
    let choice = prompt("Choose your play");
    return choice.toLowerCase();
}

function displayPlayerMove(move){
    switch (move){
        case "paper":
            document.getElementById('player-move').src="paper.png";
            break;

        case "scissors":
            document.getElementById('player-move').src="scissors.png";
            break;

        case "rock":
            document.getElementById('player-move').src="rock.png";
            break;

    }
}

function displayComputerMove(move){
    switch (move){
        case "paper":
            document.getElementById('computer-move').src="paper.png";
            break;

        case "scissors":
            document.getElementById('computer-move').src="scissors.png";
            break;

        case "rock":
            document.getElementById('computer-move').src="rock.png";
            break;

    }
}

function displayScores(playerScore, computerScore){
    document.getElementById('player-score-text').textContent=playerScore;
    document.getElementById('computer-score-text').textContent=computerScore;
}

let gameOver = false;
let playerScore = 0;
let computerScore = 0;
let message = "Make your move to start the game";

function playRound(playerSelection, computerSelection){
    if (!gameOver){
        if (playerSelection == computerSelection){
            message = "It's a draw";
        } else {
            switch (playerSelection) {
                case "paper":
                    if (computerSelection == "scissors"){
                        computerScore++;
                        message = "You lose :(";
                    }
                    else{
                        playerScore++;
                        message = "You win!";
                    }
                    break

                case "scissors":
                    if (computerSelection == "rock"){
                        computerScore++;
                        message = "You lose :(";
                    }
                    else{
                        playerScore++;
                        message = "You win!";
                    }
                    break

                case "rock":
                    if (computerSelection == "paper"){
                        computerScore++;
                        message = "You lose :(";
                    }
                    else{
                        playerScore++;
                        message = "You win!";
                    }
                    break
            }
        }

        displayScores(playerScore, computerScore);
        displayPlayerMove(playerSelection);
        displayComputerMove(computerSelection);

        if (playerScore==5){
            gameOver = true;
            document.getElementById('results').setAttribute('style', 'font-size: 20px; color: red');
            message = "Game over! You won :)";
        } else if (computerScore>=5){
            gameOver = true;
            document.getElementById('results').setAttribute('style', 'font-size: 20px; color: red');
            message = "Game over! You lost :(";
        }
    }
    return(message);

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