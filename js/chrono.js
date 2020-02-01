class Chrono {
    constructor() {
        this.counterSec = 60;
        this.counterMin = 4;
        this.intervalID = undefined;
    }

    start() {
        this.interID = setInterval(() => {
            this.counterSec --;
            if (this.counterSec === 0 && this.counterMin === 0) {
                this.pause();
                this.counterSec = 0;
                this.counterMin = 5;
            } else if (this.counterSec === 0) {
                this.counterMin --;
                this.counterSec = 60;
            }
        }, 1000);
    }

    reset() {
        clearInterval(this.intervalID);
        this.counterMin = 4;
        this.counterSec = 60;
    }

    pause() {
        clearInterval(this.intervalID);
        this.intervalID = undefined;

    }

    continue() {
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