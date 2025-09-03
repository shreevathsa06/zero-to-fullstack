// Data Hiding example

/* var counter = 0; // anbody can access this counter variable.

function incrementCounter() {
    counter++;
} */

// fixed here

/* function wrapper() {
    var counter = 0; // hiding data other functions can not use it from outside
    function incrementCounter() {
        counter++;
    }
}
console.log(count); // Reference error */

function dataHiding() {
    var counter = 0;
    return function incrementCounter() {
        counter++;
        console.log(counter);
    }
}

var counter1 = dataHiding();
counter1();
counter1();
