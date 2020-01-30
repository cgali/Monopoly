//view model
let game;

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM Content loaded');
    
    const buttonDice = document.getElementById('throw-dice');
    buttonDice.addEventListener('click', ()=>{
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

    function drawResult(result) {
        const numDice = document.getElementById('num-dice');
        numDice.innerText = result;
    }


});
