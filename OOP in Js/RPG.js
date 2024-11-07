const michael = {
    name: "Michael",
    health: 150,
    strength: 45,
    xp: 0,

    describe(){
        return `${this.name} has ${this.health} health points,${this.strength} as strength points and ${this.xp} XP points`

    }

};

// the character is shot by an arrow
michael.health -= 20;

// the character drinks a potion
michael.strength += 10;

// the character passes up a level
michael.xp += 40;

console.log(michael.describe())