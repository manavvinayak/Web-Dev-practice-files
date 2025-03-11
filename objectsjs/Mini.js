const john = {
    Stamina: "high",
    Speed: "Mid",
    Damage: '40',
 
describe() {
 return `John has stamina  ${this.Stamina} with speed ${this.Speed} and damage ${this.Damage};`
 //You see a new keyword at line 8: this. This is automatically set by JavaScript inside a method and represents the object on which the method was called. In this case, it’s aurora.

// The describe() method doesn’t take any parameters. It uses this to access the properties of the object on which it is called.
}
};
console.log(john.describe())
//console.log(`John has stamina ${john.Stamina} with speed ${john.Speed} and damage ${john.Damage}`)
// To call a method named myMethod() on an object myObject, the syntax is myObject.myMethod().

