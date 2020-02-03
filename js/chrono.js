class Chrono {
    constructor() {
        this.counterSec = 11;
        this.counterMin = 0;
        this.intervalID = undefined;
    }

    start() {
        // controlar si ya hay uno en marcha
        if  (this.intervalID){
            clearInterval(this.interID)
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
        this.counterSec = 0;
    }

    pause() {
        clearInterval(this.intervalID);
        this.intervalID = undefined;

    }

    continue() {
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
}