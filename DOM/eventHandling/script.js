let x = function(e) {
    alert("Hello World1!")
    console.log(e.target)
}
let y = function(e) {
    alert(" helllo world2")
}
btn.addEventListener('click', x )

btn.addEventListener('click',y )

let a =prompt("whats favorite no. ?");
if ( a== "2" ){
    removeEventListener('click', x)
}
