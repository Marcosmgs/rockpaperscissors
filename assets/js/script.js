const startBtn = document.getElementById("start-btn");
const scoreAreaDiv = document.getElementById("score-area");
const resultAreaDiv = document.getElementById("results-area");
const moveCallText = document.getElementById("call-move");
const buttonsUserOptions = document.getElementById("game-control");
const resetBtn = document.getElementById("reset-btn");


startBtn.addEventListener('click', gameOn);


function gameOn() {
    startBtn.classList.add('hide');
    scoreAreaDiv.classList.remove('hide');
    resultAreaDiv.classList.remove('hide');
    moveCallText.classList.remove('hide');
    buttonsUserOptions.classList.remove('hide');
    resetBtn.classList.remove('hide');
}