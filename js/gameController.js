//controller model

class Game {
    constructor(dice, view) {
        this.dice = dice;
        this.view = view;
        this.view.throwDice(this.rollDice.bind(this));
        this.dice._rollDice(this.showNumber.bind(this));
        
    }

    rollDice() {
        this.dice._rollDice();
    }

    showNumber(num) {
        this.view.showNumberDice(num);
    }
    

}



document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM Content loaded');

    const game = new Game(new View(), new Dice()); 
})