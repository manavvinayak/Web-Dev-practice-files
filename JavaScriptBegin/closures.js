function y() {
    var x = 5;
    function g(){
        console.log(x);
    }
    return g;
}
var z= y();
console.log(z)