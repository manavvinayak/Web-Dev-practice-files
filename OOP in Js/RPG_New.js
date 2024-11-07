class Character {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.xp = 0;
    }

    describe() {
        return `${this.name} has ${this.health} health points and ${this.strength} strength with ${this.xp} xp points `;
    }

    attack(target) {
        if (this.health > 0) {
            const damage = this.strength;
            console.log(`${this.name} attacks ${target.name} and causes ${damage} damage points!`);
            target.health -= damage;
            if (target.health > 0) {
                console.log(`${target.name} survived and has ${target.health} health points`);
            } else {
                console.log(`${target.name} has been defeated!`);
            }
        } else {
            console.log(`${this.name} cannot attack because they are defeated!`);
        }
    }
}

const aurora = new Character("Aurora", 150, 45);
const travis = new Character("Travis", 100, 55);
const rarch = new Character("Rarch", 100, 55);

console.log("Welcome to the adventure, here are our heroes:");
console.log(aurora.describe());
console.log(travis.describe());
console.log(rarch.describe());

aurora.attack(travis)
console.log(travis.describe())