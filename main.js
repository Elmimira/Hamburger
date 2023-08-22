class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculatePrice() {
        const prices = {
            small: 50,
            big: 100,
            cheese: 10,
            salad: 20,
            potato: 15,
            seasoning: 15,
            mayo: 20,
            sauce: 15,
        };

        const basePrice = prices[this.size] + prices[this.stuffing];
        const toppingsPrice = this.toppings.reduce(
            (total, topping) => total + prices[topping],
            0
        );

        return basePrice + toppingsPrice;
    }

    calculateCalories() {
        const calories = {
            small: 20,
            big: 40,
            cheese: 20,
            salad: 5,
            potato: 10,
            seasoning: 0,
            mayo: 5,
            sauce: 0,
        };

        const baseCalories = calories[this.size] + calories[this.stuffing];
        const toppingsCalories = this.toppings.reduce(
            (total, topping) => total + calories[topping],
            0
        );

        return baseCalories + toppingsCalories;
    }
}

Hamburger.SIZE_SMALL = "small";
Hamburger.SIZE_BIG = "big";
Hamburger.STUFFING_CHEESE = "cheese";
Hamburger.STUFFING_SALAD = "salad";
Hamburger.STUFFING_POTATO = "potato";
Hamburger.TOPPING_SEASONING = "seasoning";
Hamburger.TOPPING_MAYO = "mayo";
Hamburger.TOPPING_SAUCE = "sauce";

const hamburger = new Hamburger(
    Hamburger.SIZE_SMALL,
    Hamburger.STUFFING_CHEESE
);

hamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_SAUCE);

console.log("Price with sauce: " + hamburger.calculatePrice());
