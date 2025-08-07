// Hoisting in javascript is a phenomenon in which we can access the var and functions even before we initialize them

getName();
console.log(x);
console.log(getName); // here we dont get undefined like x instead we can see the whole getName() function printed as it is because this has been defined and assigned during the memory allocation phase of this code

var x = 7;

function getName() {
    console.log('hello');
}

// But when we define the getName() as a arrow function like this 
// var getName() = () => { 
//              console.log('Hello'); 
//                }
// now the getName() will be assigned with a undefined not the whole function and js throw an error for invoking it before
