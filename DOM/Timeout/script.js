document.getElementById('content').textContent = "hey there this is content";
let a =setTimeout(() => {
  alert("I am inside of set timeout")  
},3000 );
// to delay any task,timeout is used 
console.log(a)


let b= prompt("do u want timeout? ")
if("n" === b) {
    clearTimeout(a)
}
// clear timeout is used to clear the execution, setinterval executes after every given interval of time like an infinite while loop
console.log(a)