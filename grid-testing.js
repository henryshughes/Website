var computerCount = 0;
var personCount = 0;
var tieCount = 0;

function game(playerSelection){
    playRound(playerSelection, computerPlay())
}
function computerPlay(){
    var plays = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * (2-0+1)) + 0;
    const computerSelection = plays[randomNumber]
    return computerSelection
}

function reset() {
    document.getElementById("playerScore").innerHTML = ('Player Score: ' + personCount)
    document.getElementById("computerScore").innerHTML = ('Computer Score: ' + computerCount)
    document.getElementById("ties").innerHTML = ('Ties: ' + tieCount)
    document.getElementById("result").innerHTML = ('Game Result')
    document.getElementById("gameResult").innerHTML = ('Play Again!')
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock" & computerSelection == "scissors"){
        document.getElementById("gameResult").innerHTML = 'Player Wins the Round'
        personCount += 1;
        document.getElementById("playerScore").innerHTML = ('Player Score: ' + personCount)
    }
    else if (playerSelection == "scissors" & computerSelection == "paper"){
        document.getElementById("gameResult").innerHTML = 'Player Wins the Round'
        personCount += 1;
        document.getElementById("playerScore").innerHTML = ('Player Score: ' + personCount)
    }
    else if (playerSelection == "paper" & computerSelection == "rock"){
        document.getElementById("gameResult").innerHTML = 'Player Wins the Round'
        personCount += 1;
        document.getElementById("playerScore").innerHTML = ('Player Score: ' + personCount)
    }
    else if (playerSelection == "rock" & computerSelection == "paper"){
        document.getElementById("gameResult").innerHTML = 'Computer Wins the Round'
        computerCount += 1;
        document.getElementById("computerScore").innerHTML = ('Computer Score: ' + computerCount)
    }
    else if (playerSelection == "scissors" & computerSelection == "rock"){
        document.getElementById("gameResult").innerHTML = 'Computer Wins the Round'
        computerCount += 1;
        document.getElementById("computerScore").innerHTML = ('Computer Score: ' + computerCount)
    }
    else if (playerSelection == "paper" & computerSelection == "scissors"){
        document.getElementById("gameResult").innerHTML = 'Computer Wins the Round'
        computerCount += 1;
        document.getElementById("computerScore").innerHTML = ('Computer Score: ' + computerCount)
    }
    else if (playerSelection == computerSelection){
        document.getElementById("gameResult").innerHTML = 'It was a tie'
        tieCount += 1;
        document.getElementById("ties").innerHTML = ('Ties: ' + tieCount)
    }

    if (computerCount == 5){
        document.getElementById("result").innerHTML = ('Computer Wins the Game');
        computerCount = 0;
        personCount = 0;
        tieCount = 0;
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        document.getElementById("gameResult").innerHTML = 'Click "Reset" to play again';
    }
    else if (personCount == 5){
        document.getElementById("result").innerHTML = ('Player Wins the Game');
        computerCount = 0;
        personCount = 0;
        tieCount = 0;
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        document.getElementById("gameResult").innerHTML = 'Click "Reset" to play again';
    }

    
}

/*Game 2 */

function block1(){
    document.getElementById("block-1").innerHTML = "O";
    console.log('Hello');
}