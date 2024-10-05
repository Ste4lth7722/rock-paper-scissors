let humanScore = 0;
let computerScore = 0;
let drawCount = 0;

let userChoice;
let computerChoice;

function getComputerChoice() {
    let choice = Math.random() * 3;
    if (choice < 1) {
        return "rock";
    } else if (choice < 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Enter your choice: rock, paper, scissors.").toLowerCase();
}

function playRound() {
    userChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log(`My choice: ${computerChoice}, your choice: ${userChoice}.`)
    if (userChoice === computerChoice) {
        console.log("Draw!");
        drawCount++;
    } else if (userChoice === "rock") {
        processUserChoiceRock();
    } else if (userChoice === "paper") {
        processUserChoicePaper();
    } else if (userChoice === "scissors") {
        processUserChoiceScissors();
    } else {
        console.log("Invalid user input, processing as draw..");
        drawCount++;
    }
}

function processUserChoiceRock() {
    if (computerChoice === "paper") {
        console.log("Lost this round..");
        computerScore++;
    } else if (computerChoice === "scissors") {
        console.log("Won this round!");
        humanScore++;
    }
}

function processUserChoicePaper() {
    if (computerChoice === "rock") {
        console.log("Won this round!");
        humanScore++;
    } else if (computerChoice === "scissors") {
        console.log("Lost this round..");
        computerScore++;
    }
}

function processUserChoiceScissors() {
    if (computerChoice === "rock") {
        console.log("Lost this round..");
        computerScore++;
    } else if (computerChoice === "paper") {
        console.log("Won this round!");
        humanScore++;
    }
}

function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    console.log(`My score: ${computerScore}, your score: ${humanScore}. Draw count: ${drawCount}`)
}

playGame();