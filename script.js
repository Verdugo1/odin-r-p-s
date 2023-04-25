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
const container = document.querySelector('#container');

const createButtons = () =>{
    const rock = document.createElement("button");
    rock.classList.add("buttons");
    rock.textContent = "Rock";
    rock.id = "rock";
    container.appendChild(rock);

    const paper = document.createElement("button");
    paper.classList.add("buttons");
    paper.textContent = "Paper";
    paper.id = "paper";
    container.appendChild(paper);

    const scissors = document.createElement("button");
    scissors.classList.add("buttons");
    scissors.textContent = "Scissors";
    scissors.id = "scissors";
    container.appendChild(scissors);
}
const createCounters = () =>{
    const roundCounter = document.createElement("div");
    roundCounter.classList.add("counters");
    roundCounter.id = "roundCounter";
    roundCounter.textContent = "Round: 0";
    container.appendChild(roundCounter);

    const userScoreCounter = document.createElement("div");
    userScoreCounter.classList.add("counters");
    userScoreCounter.id = "userScoreCounter";
    userScoreCounter.textContent = "User Score: 0";
    container.appendChild(userScoreCounter);


    const computerScoreCounter = document.createElement("div");
    computerScoreCounter.classList.add("counters");
    computerScoreCounter.id = "computerScoreCounter";
    computerScoreCounter.textContent = "Computer Score: 0";
    container.appendChild(computerScoreCounter);

}
const button = document.querySelector("button")
button.addEventListener('click', ()=>{
    newGame();
    container.removeChild(button)
})

const newGame = () =>{
    createButtons();
    createCounters();
    let round = 0;
    let userScore = 0;
    let computerScore = 0;
    const buttons = document.querySelectorAll(".buttons");
    buttons.forEach((playButton)=> {
        playButton.addEventListener("click", () => {
            let resulto = playRound(playButton.id);            
            ((result)=>{
                if (userScore < 5 && computerScore<5){
                    console.log(result);
                    round++;
                    console.log(round);
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
                    roundCounter.textContent = `Round : ${round}`
                    userScoreCounter.textContent = `Your Score: ${userScore}`
                    computerScoreCounter.textContent = `Computer Score: ${computerScore}`
                }
                if (userScore===5 || computerScore===5) {


                    let endResult = document.createElement("h1");
                    container.appendChild(endResult)
                    switch (true) {
                        case (userScore > computerScore):
                          endResult.textContent = "You won this game!";
                          break;
                        case (userScore < computerScore):
                          endResult.textContent = "You lost this game!";
                          break;
                        case (userScore === computerScore):
                          endResult.textContent = "Tie game!";
                          break;
                }
                buttons.forEach((playButton)=> {
                    container.removeChild(playButton)})}
            })(resulto);
        })
    });
}