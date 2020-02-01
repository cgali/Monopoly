// controller model

class Game{
    constructor(drawDiceResult, drawTimer) {
        this.dice = new Dice();
        this.drawDiceResult = drawDiceResult;
        this.chrono = new Chrono();
        this.showChrono = drawTimer;
                                        //game necesita una propiedad a la que llamar para pintar el tiempo
    }

                                        // game necesita metodo para iniciar juego
    startGame() {
        this.chrono.start();
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
        const seconds = this.chrono.start(this.counterSec);
        const minutes = this.chrono.start(this.counterMin);
        this.drawTimer(this.seconds, this.minutes)
    }
//crear metodo para pintar el tiempo del crono

    throwDice() {
        const result = this.dice.throw();
        this.drawDiceResult(result);
    }
}