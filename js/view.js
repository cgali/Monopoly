//view model

class View{
    constructor() {

    }

    throwDice(callback) {
        const rollButton = document.getElementById('throw-dice');
        rollButton.addEventListener('click', callback);
    }

    showNumberDice(num) {
        const numDice = document.getElementById('num-dice');
        numDice.innerHTML = num;
    }
    
}