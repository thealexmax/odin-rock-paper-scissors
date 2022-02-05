const options = [
    "Rock",
    "Paper",
    "Scissors"
];

function computerPlay() {
    const random = Math.floor(Math.random() * 3);
    return random;
}

function playRound(playerSelection, computerChoice) {
    if(playerSelection == computerChoice) {
        console.log("Draw");
        return 2;
    }
    if(playerSelection == "scissors") {
        switch(computerChoice) {
            case "paper":
                console.log("Player Wins");
                return 1;
            case "rock":
                console.log("Computer Wins");
                return 0;
        }
    } else if(playerSelection == "rock") {
        switch(computerChoice) {
            case "paper":
                console.log("Computer Wins");
                return 0;
            case "scissors":
                console.log("Player Wins");
                return 1;
        }
    } else if(playerSelection == "paper") {
        switch(computerChoice) {
            case "rock":
                console.log("Player Wins");
                return 1;
            case "scissors":
                console.log("Computer Wins");
                return 0;
        }
    }
}

function game(rounds) {
    for(i = 0; i < rounds; i++) {
        const playerSelection = prompt("Choose: ");
        const computerChoice = computerPlay();
        console.log(playRound(playerSelection.toLowerCase(), options[computerChoice].toLowerCase()));
    }
}

function playGame(playerSelection) {
    const computerChoice = computerPlay();
    document.getElementById("computerChoice").innerHTML = options[computerChoice];
    const result = playRound(playerSelection.toLowerCase(), options[computerChoice].toLowerCase());
    switch(result) {
        case 0:
            document.getElementById("resultText").innerHTML = "Computer Wins";
            break;
        case 1:
            document.getElementById("resultText").innerHTML = "Human Wins";
            break;
        case 2:
            document.getElementById("resultText").innerHTML = "Draw";
            break;
    }
}

/*const playerSelection = prompt("Choose: ");
const computerChoice = computerPlay();
console.log(playRound(playerSelection.toLowerCase(), options[computerChoice].toLowerCase()));*/
//game(5);