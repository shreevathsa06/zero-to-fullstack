var x = 1;
a();
b();
console.log(x);

function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}

// OUTPUT : 
/*
    10
    100
    1

    WHY? : Because of Hoisting
    use dev tools: keep an eye on the call stack and use debugger to understand it better.
*/
