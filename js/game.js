// controller model

class Game{
    constructor(drawDiceResult, drawTimer, drawMoney, drawRemainingChrono) {
        this.dice = new Dice();
        this.drawDice = drawDiceResult;
        this.currentDice = 0;

        this.chrono = new Chrono();
        this.drawTimerCurrent = drawTimer;
        this.timerInterval = undefined;

        this.player = new Player();
        this.currentDrawMoney = drawMoney;
        this.currentMoney = 0;

        this.remainingChrono = new RemainingChrono();
        this.remainingTime = drawRemainingChrono;
        this.remainingInterval = undefined;
    }

    /*** BUTTONS ***/

    startGame() {
        this.chrono.start();
        this.drawTimeChrono();
        this.remainingChrono.start();
        this.drawTimerRemaining();
    }

    continueGame() {
        this.chrono.continue();
        this.remainingChrono.continue();
        this.drawTimerRemaining();
    }

    pauseGame() {
        this.chrono.pause();
        this.remainingChrono.pause();
        clearInterval(this.remainingInterval);
        this.remainingInterval = undefined;
    }

    resetGame() {
        this.chrono.reset();
        this.remainingChrono.stop();
        this.player.position = 1;
        this.player.money = 8000;
        this.currentDice = 0;
        this.drawDice(this.currentDice);
        this.playerPosition();
        this.movePlayer();
        this.currentDrawMoney(this.currentMoney);
        }

    restartGame() {
        this.chrono.restart();
        this.remainingChrono.stop();
        clearInterval(this.remainingInterval);
        this.remainingInterval = undefined;
        clearInterval(this.timerInterval);
        this.timerInterval = undefined;
        this.player.position = 1;
        this.player.money = 8000;
        this.currentDice = 0;
        this.drawDice(this.currentDice);
        this.playerPosition();
        this.movePlayer();
        this.currentDrawMoney(this.currentMoney);
    }

    /*** DRAW TIME ***/

    drawTimerRemaining() {
        this.remainingInterval = setInterval(() => {
            if (this.chrono.counterSec === 0 && this.chrono.counterMin === 0) {
                this.remainingChrono.stop();
                clearInterval(this.remainingInterval);
            }
            else if (this.remainingChrono.counterSeconds === "0" + 0) {
                this.throwDice();
            }
            this.remainingTime(this.remainingChrono.counterSeconds)
        }, 1000);
    }

    drawTimeChrono() {
        this.timerInterval = setInterval(() =>{
            this.drawTimerCurrent(this.chrono.counterSec, this.chrono.counterMin);
        }, 1000);
    }

    /*** MOVE PLAYER ***/

    playerPosition() {
        this.player.position = (this.currentDice  + this.player.position) % 32;
        if (this.player.position === 0) {
            this.player.position += 1;
        } else if (this.player.position === 25) {
            this.player.position = 9;
        }
    }

    movePlayer() {
        const player = document.createElement('span');
        const playerClass = document.querySelector('span.player-position');
        playerClass.remove();
        player.classList.add('player-position');
        document.querySelector(`div[data-position='${this.player.position}'] div.container div.container-player-position`).appendChild(player);
    }

    /*** THROW DICE AND DRAW DICE RESULT ***/

    throwDice() {
        this.currentDice = this.dice.throw();
        this.drawDice(this.currentDice);
        this.playerPosition();
        this.movePlayer();
        this.currentMoney = this.player.moneySum();
        this.currentDrawMoney(this.currentMoney);
        this.remainingChrono.stop();
        this.remainingChrono.start();
    }
}