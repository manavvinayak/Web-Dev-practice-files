class Character {
    constructor(name, health, strength, age) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.age = age;
        this.xp = 0; // xp is by default set to zero for new characters
    }

    // Return the character description
    describe() {
        return `${this.name} has ${this.health} health points, age ${this.age}, ${this.strength} as strength and ${this.xp} XP points`;
    }
}

const Hardy = new Character("Hardy", 120, 35, 21);
const Alice = new Character("Alice", 100, 45, 20);

Alice.strength += 25;
Alice.health -= 25;
console.log(Alice.describe());
