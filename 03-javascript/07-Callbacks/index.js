// What is a Callback Function in JavaScript?

/* setTimeout(function () {
    console.log('timer');
}, 5000);

function x(y) {
    console.log('x');
    y();
}
x(function y() {
    console.log('y');
});
 */

// Event listners

function addEventListner() {
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", () => {
        console.log("Button Clicked.", ++count);
    });
}

addEventListner();

// removeEventListners?
// it is good to remove event listners because they eat up lot of memory even though anything in the code is not executing.

