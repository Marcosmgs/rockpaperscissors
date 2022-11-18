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
let userScore = 0;
let compScore = 0;

startBtn.addEventListener('click', startGame);

/* Add Listeners for User Choice Buttons and pass paramenters to function gameOn */
rockButton.addEventListener('click', function() {
    gameOn("rock");
})
rockButton.addEventListener('click', function() {
    gameOn("paper");
})
rockButton.addEventListener('click', function() {
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
    compScoreSpan.innerHTML - compScore;


}

function loser(userChoice, computerChoice) {

}

function draw(userChoice, computerChoice) {
   
}