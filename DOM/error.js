let age = prompt("enter your age")
age = Number.parseInt(age)
let runAgain = true;

while(runAgain) {
    let age = prompt("enter your age")
     age = Number.parseInt(age)
     if (age < 0){
        console.error("Please enter valid age! ");
        break;
     }
     const candrive =(age) => {
     return age >= 18?true:false
    
}
if(candrive(age)){
    alert("Yes you can drive")
}
else{
    alert("You cant drive")
}
}