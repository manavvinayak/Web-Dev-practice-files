// function x() {
//     setTimeout(() => {
//         var a = 9;
//         console.log(a);
//     }, 3000);
// }
// x();

function x() { // use of let here 
    for(let i=0; i <= 5 ; i++ ){
      setTimeout(() => {
         console.log(i);
             console.log("Hey there")
 // separate copy of i is referred ,as in the case of var,i was referring to same memory space

      }, i * 1000);
    }
}


// we can use var with the help of closures property

function p() {
  for(var i=1; i <= 7; i++){
     function close(c) {
        setTimeout(() => {
          console.log(c);
        }, c * 1000);
      }
      close(i); // supply i with a new copy! without calling like this,the program wont work
  }
}
p();
let c = 90;
console.log(c)
// in conflicting situation, even though variable is printed ,and at topmost too!