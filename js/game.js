// controller model

class Game{
    constructor(drawDiceResult, drawTimer) {
        this.dice = new Dice();
        this.drawDice = drawDiceResult;
        this.chrono = new Chrono();
        this.drawTimer = drawTimer;
        this.timerInterval = undefined;
        this.currentDice = 0;
        //this.currentPosition = position;
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

    restartGame() {
        this.chrono.restart();
        clearInterval(this.timerInterval);
        this.timerInterval = undefined;
    }

    drawTimeChrono() {
        this.timerInterval = setInterval(() =>{
            this.drawTimer(this.chrono.counterSec, this.chrono.counterMin);
        }, 1000);
    }

    movePlayer() {
        const player = document.createElement('span');
        const playerClass = document.querySelector('span.player-position');
        const container = document.querySelector('.container-player-position');
        console.log(container);
        console.log(playerClass);
        container.removeChild(playerClass);
        player.classList.add('player-position');
        document.querySelector(`div[data-position='${this.currentDice}'] div.container div.container-player-position`).appendChild(player);
        
    }

    throwDice() {
        this.currentDice = this.dice.throw();
        this.drawDice(this.currentDice);
        this.movePlayer();
    }
}