class Chrono {
    constructor() {
        this.counterSec = 5;
        this.counterMin = 0;
        this.intervalID = undefined;
    }

    start() {
        // controlar si ya hay uno en marcha
        if  (this.intervalID){
            clearInterval(this.interID)
        }
        this.intervalID = setInterval(() => {
            this.counterSec --;
            if (this.counterSec === 0 && this.counterMin === 0) {
                this.pause();
                document.querySelector('#timeout').innerHTML = `
                <div class="timeout-container">
                    <h2 class="timeout-title">TIMEOUT!</h2>
                    <img class="img-timeout" src="/img/timeout.png" alt="Timeout">
                    <button class="timeout-restart-button">RESTART</button>
                </div>`;
            } else if (this.counterSec === 0) {
                this.counterMin --;
                this.counterSec = 60;
                
            } else if (this.counterSec < 10) {
                this.counterSec = "0" + this.counterSec;
            }
            //console.log('timer', this.counterSec, this.counterMin)
        }, 1000);
    }

    reset() {
        clearInterval(this.intervalID);
        this.counterMin = 5;
        this.counterSec = 0;
    }

    pause() {
        clearInterval(this.intervalID);
        this.intervalID = undefined;

    }

    continue() {
        if (this.counterSec === 0 && this.counterMin === 5) {
            this.counterMin = 4;
            this.counterSec = 59;
            this.intervalID = setInterval(() => {
                this.counterSec --;
                if (this.counterSec === 0) {
                    this.counterMin --;
                    this.counterSec = 60;
                    if (this.counterSec === 0 && this.counterMin === 0) {
                        clearInterval(this.intervalID)
                        this.counterSec = 0;
                        this.counterMin = 5;
                        document.getElementById("timeout").style.display = "none";
                    }
                }
            }, 1000);
        }
        else {
            this.intervalID = setInterval(() => {
            this.counterSec --;
                if (this.counterSec === 0) {
                    this.counterMin --;
                    this.counterSec = 60;
                    if (this.counterSec === 0 && this.counterMin === 0) {
                        clearInterval(this.intervalID)
                        this.counterSec = 0;
                        this.counterMin = 5;
                    }
                }
            }, 1000);
        }

    }
}