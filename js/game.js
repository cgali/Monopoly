// controller model

class Game{
    constructor(drawResult) {
        this.dice = new Dice();
        this.draw = drawResult;
    }

    startDice() {
        const result = this.dice.throw();
        this.draw(result);
    }
}