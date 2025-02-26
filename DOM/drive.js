let age = prompt("enter your age")
age = Number.parseInt(age)

const candrive =(age) => {
     return age >= 18?true:false
    
}
if(candrive(age)){
    alert("Yes you can drive")
}
else{
    alert("You cant drive")
}