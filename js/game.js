// controller model

class Game{
    constructor(drawDiceResult, drawTimer) {
        this.dice = new Dice();
        this.drawDice = drawDiceResult;
        this.chrono = new Chrono();
        this.drawTimer = drawTimer;
        this.timerInterval = undefined;
        this.currentDice = 0;
        this.player = new Player();
    }

    /*** BUTTONS ***/

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
        this.player.position = 1;
        this.currentDice = 0;
        this.playerPosition();
        this.movePlayer();
        }

    restartGame() {
        this.chrono.restart();
        clearInterval(this.timerInterval);
        this.timerInterval = undefined;
        this.player.position = 1;
        this.currentDice = 0;
        this.playerPosition();
        this.movePlayer();
    }

    /*** DRAW TIME ***/

    drawTimeChrono() {
        this.timerInterval = setInterval(() =>{
            this.drawTimer(this.chrono.counterSec, this.chrono.counterMin);
        }, 1000);
    }

    /*** MOVE PLAYER ***/

    playerPosition() {
        if (this.player.position > 32) {
            this.player.position = this.player.position % 32;
        } else {
            this.player.position += this.currentDice;
        }
        
        console.log(this.player.position);
    }

    movePlayer() {
        const player = document.createElement('span');
        const playerClass = document.querySelector('span.player-position');
        //console.log(playerClass);
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
        
    }
}