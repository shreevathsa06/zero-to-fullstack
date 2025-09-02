// let and const declarations are hoisted but different than the var

console.log(b); // we can access b even before we initalize it, we get a spatial variable: undefined (Hoisting)
console.log(a); // But if we try to Hoist the a we get a reference error 
let a = 10;
console.log(a); // here we can access a (initialized)
var b = 100;

// unlike var, let and const are allocated memory in different memory space not in the global memory space
// we cannot access that memory space before initializing them

// TEMPORAL DEAD ZONE: It is the time since when this let variable was hoisted and till it is initialized.

// let is more strict than var
let c = 10;
// let c = 100; // we can not do this also This will throw ans SYNTAX ERROR

// const

const x = 1000; // acts as a constant variable which can not be changed later.
// const variable should be initialized during declaration only.

// x = 10; // we can not do this also  TYPE ERROR