class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        if (target instanceof Unit) {
            console.log(`${this.name} attacked ${target.name} for ${this.power}pts of damage!`);
            target.res -= this.power;
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        if (target instanceof Unit) {
            if (this.stat == "power") {
                console.log(`| ${this.name} | ${this.stat} | ${this.magnitude} | *was played on ${target.name}*`);
                target.power += this.magnitude;
            }
            else if (this.stat == "res") {
                console.log(`| ${this.name} | ${this.stat} | ${this.magnitude} | *was played on ${target.name}*`);
                target.res += this.magnitude;
            }
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}


const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const hardAlgorithm = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "res", 3);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "res", -2);
const pairProgramming = new Effect("Pair Programming", 3, "Increase target's power by 2", "power", 2);


hardAlgorithm.play(redBeltNinja);
console.log(redBeltNinja);

unhandledPromiseRejection.play(blackBeltNinja);
console.log(blackBeltNinja);

pairProgramming.play(redBeltNinja);
console.log(redBeltNinja);

redBeltNinja.attack(blackBeltNinja);
console.log(blackBeltNinja);