//view model

class View{
    constructor() {

    }

    showNumberDice(num) {
        const numDice = document.getElementById('num-dice');
        numDice.innerHTML = num;
    }

    trowDice() {
        const rollButton = document.getElementById('throw-dice');
        rollButton.addEventListener('click', callback);
    }
}