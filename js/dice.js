class Dice {
    constructor() {
        this.numFaces = 6;
        this.diceResult = 0;
    }

    _rollDice() {
        let result = Math.floor(Math.random() * this.numFaces) +1;
        this.diceResult = result;
    }
}