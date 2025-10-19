// Intro to Imperative Programming
const n = 10;
const fruits = "banana";
const obj = {
    myprop: 2
};
const animals = ["Elephant", "Lion"]

obj.myprop = 3 // Mutating the object is ok for const object
animals.push ("Gorilla"); // updating a content is ok even for const array

n++; // Illegal
fruits = "orange" // Illegal
obj = {}; // Illegal
animals = ["Yawk"] // Illegal

