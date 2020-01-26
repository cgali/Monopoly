//controller model

class Game {
    constructor() {
        this.dice = 0;
    }

    _rollDice() {
            this.dice = Math.floor(Math.random()*6) +1;
            return this.dice;
    }
}



