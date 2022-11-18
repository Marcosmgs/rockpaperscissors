const startBtn = document.getElementById("start-btn");
const scoreAreaDiv = document.getElementById("score-area");
const resultAreaDiv = document.getElementById("results-area");
const moveCallText = document.getElementById("call-move");
const buttonsUserOptions = document.getElementById("game-control");
const resetBtn = document.getElementById("reset-btn");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("comp-score");
const resultText = document.getElementById("result-text");
const resultCompImage = document.getElementById("comp-image");
const resultUserImage = document.getElementById("user-image");

let userScore = 0;
let compScore = 0;

startBtn.addEventListener('click', startGame);

/* Add Listeners for User Choice Buttons and pass paramenters to function gameOn */
rockButton.addEventListener('click', function() {
    gameOn("rock");
})
paperButton.addEventListener('click', function() {
    gameOn("paper");
})
scissorsButton.addEventListener('click', function() {
    gameOn("scissors");
})

/* Set Initial Game Screen  */
function startGame() {
    startBtn.classList.add('hide');
    scoreAreaDiv.classList.remove('hide');
    resultAreaDiv.classList.remove('hide');
    moveCallText.classList.remove('hide');
    buttonsUserOptions.classList.remove('hide');
    resetBtn.classList.remove('hide');
}

/* Generates an random choice every time the fuctions is called */
function createCompChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let randomOption = (Math.floor(Math.random() * 3));
    return options[randomOption];
}

/* Set game choices to respective fuctions for each game senario based on user and comp choices */
function gameOn(userChoice) {
    let computerChoice = createCompChoice();
    switch (userChoice + computerChoice) {
        case "paperrock":
        case "scissorspaper":
        case "rockscissors":
            winner(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            loser(userChoice, computerChoice);
            break;
        case "paperpaper":
        case "scissorsscissors":
        case "rockrock":
            draw(userChoice, computerChoice);
            break;
    }
}

/* Generate different text results and images based on different win scenarios and also increments user score*/
function winner(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;

    if (userChoice === "paper" && computerChoice === "rock") {
        resultUserImage.src = `assets/images/${userChoice}.png`
        resultCompImage.src = `assets/images/${computerChoice}.png`
        paperButton.classList.add('correct-green');
        setTimeout(function() { paperButton.classList.remove('correct-green') }, 350);
    }
    if (userChoice === "rock" && computerChoice === "scissors") {  
        resultUserImage.src = `assets/images/${userChoice}.png`
        resultCompImage.src = `assets/images/${computerChoice}.png`
        rockButton.classList.add('correct-green');
        setTimeout(function() { rockButton.classList.remove('correct-green') }, 350);           
    }
    if (userChoice === "scissors" && computerChoice === "paper") {     
        resultUserImage.src = `assets/images/${userChoice}.png`
        resultCompImage.src = `assets/images/${computerChoice}.png`   
        scissorsButton.classList.add('correct-green');
        setTimeout(function() { scissorsButton.classList.remove('correct-green') }, 350);  
    }

    resultText.innerHTML = "You Win";
}

/* Generate different text results and images based on different user lost scenarios and also increments computer score */
function loser(userChoice, computerChoice) {
    compScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    
    if (userChoice === "rock" && computerChoice === "paper") {
        resultUserImage.src = `assets/images/${userChoice}.png`
        resultCompImage.src = `assets/images/${computerChoice}.png`
    }
    if (userChoice === "scissors" && computerChoice === "rock") {  
        resultUserImage.src = `assets/images/${userChoice}.png`
        resultCompImage.src = `assets/images/${computerChoice}.png`           
    }
    if (userChoice === "paper" && computerChoice === "scissors") {     
        resultUserImage.src = `assets/images/${userChoice}.png`
        resultCompImage.src = `assets/images/${computerChoice}.png`     
    }

    resultText.innerHTML = "You Lost";
}


/* Generate different images based on different game draw scenarios */
function draw(userChoice, computerChoice) {

    if (userChoice === "rock" && computerChoice === "rock") {
        resultUserImage.src = `assets/images/${userChoice}.png`
        resultCompImage.src = `assets/images/${computerChoice}.png`
    }
    if (userChoice === "paper" && computerChoice === "paper") {  
        resultUserImage.src = `assets/images/${userChoice}.png`
        resultCompImage.src = `assets/images/${computerChoice}.png`           
    }
    if (userChoice === "scissors" && computerChoice === "scissors") {     
        resultUserImage.src = `assets/images/${userChoice}.png`
        resultCompImage.src = `assets/images/${computerChoice}.png`     
    }

    resultText.innerHTML = "It's a Draw";
}