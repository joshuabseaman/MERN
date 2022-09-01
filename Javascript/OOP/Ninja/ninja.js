class Ninja {
    constructor(name, health) {
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3
    }
    sayName() {
        console.log(`Ninja's name is ${this.name}.`);
    }
    showStats() {
        console.log(`Ninja's Stats: ${this.name}, ${this.strength}, ${this.speed}, ${this.health}.`);
    }
    drinkSake() {
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
