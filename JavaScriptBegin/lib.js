const fs = require("fs");
// fs is external library that stands for file system

const contents = fs.readFileSync("a.txt", 'utf-8')
// the object fs is reading the file "a.txt" synchronously by importing the file 
// here fs has key named readFileSync
console.log(contents);