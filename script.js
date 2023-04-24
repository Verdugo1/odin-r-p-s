const getComputerChoice = () => {
    let choice;
    switch (Math.floor(Math.random()*3)) {
        case 0:
            choice = "rock"
            break;
        case 1:
            choice = "paper"
            break;
        case 2:
            choice = "scissors"
            break;
        default:
            ;
    }
    return choice;
}

const playRound =(playerSelection, computerSelection = getComputerChoice()) =>{
    switch (playerSelection.toLowerCase()) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    return "Tie game!";
                case "paper":
                    return "You Lose! Paper beats Rock";
                case "scissors":
                    return "You Win! Rock beats Scissors";
                default:
                    break;
            };
        case "paper":
            switch (computerSelection) {
                case "rock":
                    return "You Win! Paper beats Rock";
                case "paper":
                    return "Tie game!"
                case "scissors":
                    return "You Lose! Scissors beat Paper"
                default:
                    break;
            };
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    return "You Lose! Rock beats Scissors";
                case "paper":
                    return "You Win! Scissors beat Paper"
                case "scissors":
                    return "Tie game!"
                default:
                    break;
            }
        
            break;
    
        default:
            break;
    }
}

const game = () =>{
    let computerScore = 0
    let userScore = 0
    for (let count = 0; count < 5; count++) {
        result = playRound(prompt("Choose between Rock, Paper and Scissors"));
        console.log(result);
        switch (result.substring(0,8)) {
            case "You Win!":
                userScore++;
                break;
            case "You Lose":
                computerScore++;
                break;
            default:
                break;
        }
        console.log("Your Score: " + userScore)
        console.log("Computer Score: " + computerScore)
    }
    switch (userScore > computerScore) {
        case true:
            console.log("You won this game!")
            break;
        case false:
            console.log("You lost this game!")
            break;
        default:
            console.log("Tie game!")
            break;
    }
}


