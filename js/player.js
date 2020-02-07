class Player {
    constructor() {
        this.name = "player1";
        this.position = 1;
        this.money = 8000;
    }

    /*** MONEY SUM AND SUBSTRACTION ***/

    moneySum() {
        const priceContainer = document.querySelector(`div[data-position='${this.position}'] div.price`);
        this.money = parseInt(this.money) + parseInt(priceContainer.dataset.price);
        console.log(priceContainer.dataset.price);
        console.log(this.money);
    }


}