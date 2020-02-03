class Chrono {
    constructor() {
        this.counterSec = 60;
        this.counterMin = 4;
        this.intervalID = undefined;
    }

    start() {
        // controlar si ya hay uno en marcha
        if  (this.intervalID){
            clearInterval(this.intervalID)
        }
        document.getElementById("start-page").style.display = "none";
        document.getElementById("timeout-page").style.display = "none";
        this.intervalID = setInterval(() => {
            this.counterSec --;
            if (this.counterSec === 0 && this.counterMin === 0) {
                this.pause();
                document.getElementById("throw-dice").disabled = true;
                document.getElementById("chrono-continue-button").disabled = true;
                document.getElementById("chrono-pause-button").disabled = true;
                document.getElementById("chrono-reset-button").disabled = true;
                document.getElementById("timeout-page").style.display = "block";
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
        this.counterSec = "0" + 0;
    }

    pause() {
        clearInterval(this.intervalID);
        this.intervalID = undefined;

    }

    continue() {
        this.intervalID = setInterval(() => {
            this.counterSec --;
            if (this.counterMin === 5) {
                this.counterMin = 4;
                this.counterSec = 59;
            } else if (this.counterSec === 0 && this.counterMin === 0) {
                this.pause();
                document.getElementById("throw-dice").disabled = true;
                document.getElementById("chrono-continue-button").disabled = true;
                document.getElementById("chrono-pause-button").disabled = true;
                document.getElementById("chrono-reset-button").disabled = true;
                document.getElementById("timeout-page").style.display = "block";
            }  else if (this.counterSec === 0) {
                this.counterMin --;
                this.counterSec = 60;
                
            } else if (this.counterSec < 10) {
                this.counterSec = "0" + this.counterSec;
            }
            //console.log('timer', this.counterSec, this.counterMin)
        }, 1000);
    }

    restart() {
        document.getElementById("start-page").style.display = "block";
        document.getElementById("throw-dice").disabled = false;
        document.getElementById("chrono-continue-button").disabled = true;
        document.getElementById("chrono-pause-button").disabled = false;
        document.getElementById("chrono-reset-button").disabled = false
    }
}