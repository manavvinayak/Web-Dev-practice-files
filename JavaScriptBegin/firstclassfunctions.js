// a(); hositing is possible here
// b(); hoisting isn't applicable here and the function won't run without its declaration
// function statement aka function declaration
function a () {
    console.log("a called");
}

// function Expression
var b = function(param1, param2) {

    console.log(param2 );
}
a();
b(1,2);


// anonymous function
// function() {

// }