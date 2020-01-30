//view model
let game;

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM Content loaded');
    
    const buttonDice = document.getElementById('throw-dice');
    buttonDice.addEventListener('click', ()=> {
        game = new Game(drawResult);
        game.startDice();

    })

    const buttonStart = document.getElementById('start');
    buttonStart.addEventListener('click', ()=> {
        const startPage = document.getElementById('start-page');
        while (startPage.firstChild) {
            startPage.removeChild(startPage.firstChild);
          }
    })

    const buttonStartCountdown = document.getElementById("chrono-start-button");
    buttonStartCountdown.addEventListener('click', ()=> {
        game = new Game(showTimer);
        game.startChrono();
    })

    const buttonStopCountdown = document.getElementById("chrono-stop-button");
    buttonStopCountdown.addEventListener('click', ()=> {
        game = new Game(showTimer);
        game.stopChrono();
    })

    function drawResult(result) {
        const numDice = document.getElementById('num-dice');
        numDice.innerText = result;
    }

    function showTimer(time) {
        const min = document.getElementById("min");
        const sec = document.getElementById("sec");
        min.innerText = time;
        sec.innerText = time;
    }


});
