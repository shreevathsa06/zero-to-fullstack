// this is not a good way to write code because we are violating the DRY principle and the codes are not re-usable.

/* const radius = [2, 3, 5, 1];

const calculateArea = function (radius) {
    const output = [];
    for(let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
};

console.log(calculateArea(radius));

const calculateCircumference = function (radius) {
    const output = [];
    for(let i = 0; i < radius.length; i++) {
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
}

console.log(calculateCircumference(radius));

const calculateDiameter =  function (radius) {
    const output = [];
    for(let i = 0; i < radius.length; i++) {
        output.push(2 * radius[i]);
    }
    return output;
}

console.log(calculateDiameter(radius)); */


// Better way of writing it

const radius = [2, 3, 1, 6];

const area = function (radius) {
    return Math.PI * radius * radius;
};

const circumference = function (radius) {
    return 2 * Math.PI * radius;
};

const diameter = function (radius) {
    return 2 * radius;
};

const calculate = function (radius, logic) {
    const output = [];
    for(let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}; // map function in js is almost similar to this

console.log(radius.map(area));
console.log(calculate(radius, area));
