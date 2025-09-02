// if(true) { // block - grouping together multiple statements
//     // compound statement
//     var a = 10;
//     console.log(a);
// }
var a = 100;
{
    var a = 10; // shadows a = 100;
    let b = 20;
    const c = 30;
    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30
}
// console.log(a); // 10 
// console.log(b); // error
// console.log(c);