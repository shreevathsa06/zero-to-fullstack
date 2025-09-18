// map() in js is used to do transformaton on the array(it applies the transformation logic which is passed and apply it to each element of the array)

const arr = [2, 4, 7, 9];

function binary(x) {
    return x.toString(2);
}

const output = arr.map(binary);

console.log(output);

