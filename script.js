
function getComputerChoice (min , max) {
    return Math.random () * ( max - min ) + min;
}

let ComputerNumber=getComputerChoice(0,3);

function assignValue (ComputerNumber) {
    let result;
    if (ComputerNumber < 1) {
    result = "Rock";}

    else if (ComputerNumber > 1 && ComputerNumber <= 2)
    { result = "Scissor";}

    else {result = "Paper";}
    return result;
}
let ComputerChoice= assignValue(ComputerNumber);

console.log (ComputerNumber);
console.log (ComputerChoice);

const sign = window.prompt ("What's your choice?");

function getHumanChoice (sign) {
    let result;
    if (sign === "Rock") {
    result = "Rock";}

    else if (sign === "Scissor")
    { result = "Scissor";}

    else {result = "Paper";}
    return result;
};

let HumanChoice = getHumanChoice(sign)

console.log (HumanChoice);

let humanScore = 0;
let computerScore = 0;

function playRound (HumanChoice, ComputerChoice) {
    let result;
    if (HumanChoice === "Scissor" && ComputerChoice === "Paper") {
        return "Scissor beats Paper, you won!";
    }
    else if (HumanChoice === "Rock" && ComputerChoice === "Scissor") {
        return "Rock beats Scissor, you won!";
    }
    else if (HumanChoice === "Paper" && ComputerChoice === "Rock") {
        return "Paper beats Rock, you won!";
    }
    else if (HumanChoice === "Scissor" && ComputerChoice === "Scissor") {
        return "No winner, play again!";
    }
    else if (HumanChoice === "Scissor" && ComputerChoice === "Rock") {
        return "Scissor loses against Rock, Computer wins!";
    }
    else if (HumanChoice === "Rock" && ComputerChoice === "Rock") {
        return "No winner, play again!";
    }
    else if (HumanChoice === "Rock" && ComputerChoice === "Paper") {
        return "Rock loses against Paper, Computer wins!";
    }
    else if (HumanChoice === "Paper" && ComputerChoice === "Paper") {
        return "No winner, play again!";
    }
    else if (HumanChoice === "Paper" && ComputerChoice === "Scissor") {
        return "Paper loses against Scissor, Computer wins!";
    };
}

let gameMessage = playRound (HumanChoice, ComputerChoice)

console.log (gameMessage);

function logPoints (gameMessage) {
    if (gameMessage === "Scissor beats Paper, you won!" || gameMessage === "Rock beats Scissor, you won!" || gameMessage === "Paper beats Rock, you won!") {
       ++humanScore;
    }
    else if (gameMessage === "Scissor loses against Rock, Computer wins!" || gameMessage === "Rock loses against Paper, Computer wins!" || gameMessage === "Paper loses against Scissor, Computer wins!") {
       ++computerScore;
}; }

console.log (logPoints(gameMessage));
console.log (humanScore);
console.log (computerScore);
