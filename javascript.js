const getComputerChoice = () => {
    const randomNumber =  Math.floor(Math.random() * 3 + 1);
    switch (randomNumber) {
        case 1: 
        return "rock";
        case 2:
        return "paper";
        case 3:
        return "scissor";
    }
}


const getHumanChoice = () => {
    const humanChoice = prompt("Enter your choice: rock, paper, or scissor");
    console.log(`Human player chose ${humanChoice}`);
    return humanChoice;
}


let humanScore = 0;
let computerScore = 0;


const playRound = (humanChoice, computerChoice) => {
    if (humanChoice.toLowerCase() === computerChoice) {
        return "It's a tie!";
    }
    else if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissor") {
        humanScore++;
        return "You win! Rock beats Scissor";
    }
    else if (humanChoice.toLowerCase() === "rock" && computerChoice === "paper") {
        computerScore++;
        return "You lose! Paper beats Rock";
    }
    else if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win! Paper beats Rock";
    }
    else if (humanChoice.toLowerCase() === "paper" && computerChoice === "scissor") {
        computerScore++;
        return "You lose! Scissor beats Paper";
    }
    else if (humanChoice.toLowerCase() === "scissor" && computerChoice === "rock") {
        computerScore++;
        return "You lose! Rock beats Scissor";
    }
    else if (humanChoice.toLowerCase() === "scissor" && computerChoice === "paper") {
        humanScore++;
        return "You win! Scissor beats Paper";
    }
}



const playGame = () => {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
       
        console.log(`The score in round ${i + 1} is ${humanScore} for human to ${computerScore} for computer`);
    }
}

playGame();