class Animal {
    constructor(name, legs, color) {
        this.name = name;
        this.legs = legs;
        this.color = color;
    }
    colors() {
        console.log("hi there " + this.color);
    }
}

let dog = new Animal ("dog", 4, "Varies") // this is creating object of a class ,blueprint
let cat = new Animal ("cat", 4, "Varies") // this is creating object of a class ,blueprint
cat.colors()
