//view model
let game;

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM Content loaded');
    
    /*** BUTTONS FUNCTIONS ***/

    const buttonDice = document.getElementById('throw-dice');
    buttonDice.addEventListener('click', ()=> {
        game.throwDice();
    })

    const buttonStart = document.getElementById('start');
    buttonStart.addEventListener('click', ()=> {
        game = new Game(drawDiceResult, drawTimer, drawMoney, drawRemainingChrono);
        game.startGame();
        document.getElementById("chrono-continue-button").disabled = true;
    })

    const buttonContinueCountdown = document.getElementById("chrono-continue-button");
    buttonContinueCountdown.addEventListener('click', ()=> {
        game.continueGame();
        document.getElementById("chrono-continue-button").disabled = true;
    })

    const buttonPauseCountdown = document.getElementById("chrono-pause-button");
    buttonPauseCountdown.addEventListener('click', ()=> {
        game.pauseGame();
        document.getElementById("chrono-continue-button").disabled = false;
    })

    const buttonResetCountdown = document.getElementById("chrono-reset-button");
    buttonResetCountdown.addEventListener('click', ()=> {
        game.resetGame();
        document.getElementById("chrono-continue-button").disabled = false;
    })

    const buttonRestartTimeout = document.querySelector('.timeout-restart-button');
    buttonRestartTimeout.addEventListener('click', ()=> {
        game.restartGame();
    })

    /***  DRAW FUNCTIONS ***/

    function drawMoney() {
        const moneyCount = document.getElementById("money-count");
        moneyCount.innerText = this.player.money + "€";
    }

    function drawDiceResult(result) {
        const numDice = document.getElementById('num-dice');
        numDice.innerText = result;
    }

    function drawTimer(seconds, minutes) {
        document.querySelector('.chrono-display').innerHTML = `<span class='counter'>${minutes}:${seconds}</span>`;
    }

    function drawRemainingChrono(seconds) {
        document.getElementById("remaining-sec").innerText = seconds;
    }
});