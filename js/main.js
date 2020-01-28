//view model
let game;

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM Content loaded');
    
    const buttonDice = document.getElementById('throw-dice');
    buttonDice.addEventListener('click', ()=>{
        game = new Game(drawResult);
        game.startDice();

    })


    function drawResult(result) {
        const numDice = document.getElementById('num-dice');
        numDice.innerText = result;
    }









});
