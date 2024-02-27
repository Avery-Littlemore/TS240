"use strict";
function isNumber(value) {
    return (typeof value === 'number');
}
// example 1
let x = "Launch School";
if (isNumber(x)) {
    const y = x;
    console.log(y);
}
else {
    console.log('x is not a number');
}
// example 2
if (isNumber(x)) {
    let a = "Launch School";
    const b = x;
}
