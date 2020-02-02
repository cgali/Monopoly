// controller model

class Game{
    constructor(drawDiceResult, drawTimer) {
        this.dice = new Dice();
        this.drawDice = drawDiceResult;
        this.chrono = new Chrono();
        this.drawTimer = drawTimer;
        this.timerInterval = undefined;
    }

    startGame() {
        this.chrono.start();
        this.drawTimeChrono();
    }

    continueGame() {
        this.chrono.continue();
    }

    pauseGame() {
        this.chrono.pause();
    }

    resetGame() {
        this.chrono.reset();
    }

    drawTimeChrono() {
        this.timerInterval = setInterval(() =>{
            this.drawTimer(this.chrono.counterSec, this.chrono.counterMin);
        }, 1000);
    }
//crear metodo para pintar el tiempo del crono

    throwDice() {
        const result = this.dice.throw();
        this.drawDice(result);
    }
}