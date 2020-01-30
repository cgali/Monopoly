class Chrono {
    constructor() {
        this.counterSec = 59;
        this.counterMin = 4;
        this.intervalID = undefined;
    }

    startCountdown() {
        this.intervalID = setInterval(() => {
            this.counterSec --;
            if (this.counterSec === 0) {
                this.counterMin --;
                this.counterSec == 60;
                if (this.counterSec === 0 && this.counterMin === 0) {
                    clearInterval(this.intervalID)
                    this.counterSec = 0;
                    this.counterMin = 5;
                }
            }
        return this.counterSec, this.counterMin;
        }, 1000);
    }

    stopCountdown() {
        clearInterval(this.intervalID)
    }



    
}