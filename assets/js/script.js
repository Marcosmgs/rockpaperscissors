const startBtn = document.getElementById("start-btn");
const scoreAreaDiv = document.getElementById("score-area");
const resultAreaDiv = document.getElementById("results-area");
const moveCallText = document.getElementById("call-move");
const buttonsUserOptions = document.getElementById("game-control");
const resetBtn = document.getElementById("reset-btn");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

startBtn.addEventListener('click', startGame);

rockButton.addEventListener('click', function() {
    gameOn(rock);
})
rockButton.addEventListener('click', function() {
    gameOn(paper);
})
rockButton.addEventListener('click', function() {
    gameOn(scissors);
})

function startGame() {
    startBtn.classList.add('hide');
    scoreAreaDiv.classList.remove('hide');
    resultAreaDiv.classList.remove('hide');
    moveCallText.classList.remove('hide');
    buttonsUserOptions.classList.remove('hide');
    resetBtn.classList.remove('hide');
}

