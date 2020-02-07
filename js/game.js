// controller model

class Game{
    constructor(drawDiceResult, drawTimer, drawMoney) {
        this.dice = new Dice();
        this.drawDice = drawDiceResult;
        this.chrono = new Chrono();
        this.drawTimerCurrent = drawTimer;
        this.timerInterval = undefined;
        this.currentDice = 0;
        this.player = new Player();
        this.currentDrawMoney = drawMoney;
        this.currentMoney = 0;
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
        this.player.money = 4000;
        this.currentDice = 0;
        this.playerPosition();
        this.movePlayer();
        }

    restartGame() {
        this.chrono.restart();
        clearInterval(this.timerInterval);
        this.timerInterval = undefined;
        this.player.position = 1;
        this.player.money = 4000;
        this.currentDice = 0;
        this.playerPosition();
        this.movePlayer();
    }

    /*** DRAW TIME ***/

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

    /*** MONEY SUM AND SUBSTRACTION ***/

    // industriesBox() {
    //     const priceContainer = document.querySelector(`div[data-position='${this.player.position}'] div.price`);
    //     this.player.money = parseInt(this.player.money) + parseInt(priceContainer.dataset.price);
    //     console.log(priceContainer.dataset.price);
    //     console.log(this.player.money);
    // }

    /*** THROW DICE AND DRAW DICE RESULT ***/

    throwDice() {
        this.currentDice = this.dice.throw();
        this.drawDice(this.currentDice);
        this.playerPosition();
        this.movePlayer();
        this.currentMoney = this.player.industriesBox();
        this.currentDrawMoney(this.currentMoney);
        
    }
}