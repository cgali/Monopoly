class RemainingChrono {
    constructor() {
        this.counterSeconds = 0;
        this.interID = undefined;
    }
    
    start() {
        this.counterSeconds = 10;
        this.interID = setInterval(() => {
            this.counterSeconds --;
            if (this.counterSeconds === -1) {
                this.stop();
                this.start();
            }
            else if (this.counterSeconds < 10) {
                this.counterSeconds = "0" + this.counterSeconds;
            }
        }, 1000);
    }

    stop() {
        clearInterval(this.interID);
        this.counterSeconds = 10;
    }

    pause() {
        clearInterval(this.interID);
        this.interID = undefined;
    }
    continue() {
        this.interID = setInterval(() => {
            this.counterSeconds --;
            if (this.counterSeconds === -1) {
                this.stop();
                this.start();
            }
        }, 1000);
    }
}