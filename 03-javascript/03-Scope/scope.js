/* Scopes means where you can access specific variable of function in the code.
    you can think of it like is b inside of scope c? i.e can i access b inside c
    */
// example 1
function a() {
    var b = 10;
    c();
    function c() {
        console.log(b);
    }
}

a(); // here you can access the b which inside c

// example 2
function a2() {
    var b = 10;
    c2();
    function c2() {

    }
}

a2();
console.log(b); // but here you cannot acess b because it is inside the scope of a2

// scopes are directly depends on the lexical environment 
// lexical environment are like the heirarchy which contains it local memory + lexical environment of its parent
// in the example 1,
// lexical envirnoment of c = local memory of c + lexical environment of its parent which is a + lexical environment of a's parent which is the global execution context
// and global execution context points ot its parent lexical envrironment which is "null"