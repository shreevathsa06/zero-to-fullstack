// funciton statement aka function declaration

function a() {
    console.log("Hi from a");
}
a();

// function expression
// functions in javascript acts as a value 

var b = function () {
    console.log("Hi from b");
}
b();

// anonymous functions - a function without a name.
/* 
function () {

} */

// Named function expressions
// - a function with a name which assigned to a variable 

var d = function xyz() {
    console.log("hello!");
}

// Difference between Parameters & Arguments?

function greet(parameter) {
    console.log('hello, ' + parameter);
}

greet("Ram"); // greet(Arguments)

// First Class Functions
// - the ability of functions to be used as values and can be passed as arguments to another functions are called first class functions.

var x = function (param1) {
    return function () {

    }
}

console.log(x());