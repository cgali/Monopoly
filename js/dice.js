class Dice {
    constructor() {
        this.numFaces = 8;
    }

    throw() {
        return Math.floor(Math.random() * this.numFaces) +1;
    }

}