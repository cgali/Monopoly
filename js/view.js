//view model

class View{
    constructor() {

    }

    throwDice() {
        const rollButton = document.getElementById('throw-dice');
        rollButton.addEventListener('click', start);
    }

    showNumberDice() {
        const numDice = document.getElementById('num-dice');
        numDice.innerHTML = this._rollDice();
    }
    
}