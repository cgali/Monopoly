class Dice {
    constructor() {
        this.numFaces = 6;
    }

    throw() {
        return Math.floor(Math.random() * this.numFaces) +1;
    }

}