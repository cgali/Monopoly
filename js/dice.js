class Dice {
    constructor() {
        this.diceResult = this.diceResult;
    }

    _rollDice() {
        this.diceResult = Math.floor(Math.random() * 6) +1;
        return this.diceResult;
}
}