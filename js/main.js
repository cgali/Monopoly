//view model
let game;

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM Content loaded');
    
    const buttonDice = document.getElementById('throw-dice');
    buttonDice.addEventListener('click', ()=> {
        game.throwDice();
    })

    const buttonStart = document.getElementById('start');
    buttonStart.addEventListener('click', ()=> {
        const startPage = document.getElementById('start-page');
        while (startPage.firstChild) {
            startPage.removeChild(startPage.firstChild);
          }
          game = new Game(drawDiceResult, drawTimer);
          game.startGame();
          game.drawTimeChrono();
          document.getElementById("chrono-continue-button").disabled = true;
                                            // Game tiene que saber a quien llamar para pintar el tiempo
          // Game tiene que arranca
    })

    const buttonContinueCountdown = document.getElementById("chrono-continue-button");
    buttonContinueCountdown.addEventListener('click', ()=> {
        game.continueGame();
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

    function drawDiceResult(result) {
        const numDice = document.getElementById('num-dice');
        numDice.innerText = result;
    }

    function drawTimer(seconds, minutes) {
        setInterval(() => {
            const sec = document.getElementById("sec");
            const min = document.getElementById("min");
            sec.innerText = seconds;
            min.innerText = minutes;
        }, 1000);
        
    }


});
