// reduce is used to iterate over all the element in an aray and find/get a particular value.

const arr = [4, 6, 2, 6];

// getting max elem in array using reduce
const output = arr.reduce(function(acc, curr) {
    if(curr > acc) {
        acc = curr;
    } 
    return acc;
}, 0);

console.log(output);