// A function which takes another funciton as an argument or return a function from it is known as Higher order function.

function x() {
    console.log("Hello from x");
}
// y is an higher order function here and x is the callback function
function y(x) {
    x();
}