// Closure: function along with lexical scope bunduled together is called closure.

/* function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z); */

// example for closure

function outer() {
    var x = 10;
    function inner() {
        console.log(x);
    }
    return inner;
}
outer()(); // () () this second paraentesis is to invoke the inner function otherwise outer will return the whole inner function.
