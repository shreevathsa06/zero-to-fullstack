// print numbers from 1 to 5 but after printing each number it should wait for that number of seconds.

/* function x() {
    for(let i = 1; i <= 5; i++) {
        setTimeout(function() {
        console.log(i);
    }, i * 1000);
    }
    console.log("Hello Mannnn");
}
x(); */

// how to do the same without using let

function x () {
    for(var i = 1; i <=5; i++) {
        function close(x) {
            setTimeout(function() {
                console.log(x);
            }, x * 1000);
        }
        close(i);
    }

    console.log("hello world!");
}
x();