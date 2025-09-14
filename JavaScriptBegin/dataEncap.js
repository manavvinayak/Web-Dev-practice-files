

function counter1() {
     var counter = 0;
 return function incrementCounter () { 
    counter++;
     console.log(counter);
}
   
    
}

// console.log(counter);
// it'll throw an error dataEncap.js:12 Uncaught ReferenceError: counter is not defined at dataEncap.js
// to resolve it,call using another var
var counter2 = counter1();
counter2();