class Dice {
    constructor() {
        this.numFaces = 6;
        this.diceResult = 0;
    }

    _rollDice() {
        let result = Math.floor(Math.random() * this.numFaces) +1;
        this.diceResult = result;
    }

    // _rollDice() {
    //     let result = Math.floor(Math.random() * numFaces) +1;
    //     this.diceResult = result;
    //     const numDice = document.getElementById('num-dice');
    //     numDice.innerHTML = this.diceResult;
    // }
}