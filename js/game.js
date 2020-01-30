// controller model

class Game{
    constructor(drawResult, showTimer) {
        this.dice = new Dice();
        this.draw = drawResult;
        this.chrono = new Chrono();
        this.showChrono = showTimer;
    }

    startDice() {
        const result = this.dice.throw();
        this.draw(result);
    }

    startChrono() {
        const time = this.chrono.startCountdown();
        this.showChrono(time);

    }

    stopChrono() {
        const stopTime = this.chrono.stopCountdown();
        this.showChrono(stopTime);
    }
}