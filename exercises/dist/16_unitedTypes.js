"use strict";
// Create a function named wrapInArray that takes a parameter that could either be a string or a number, 
// and returns an array containing just that value.
// Expected output:
// ["hello"]
// [100]
// function wrapInArray(input: string | number): string[] | number[] {
//   if (typeof input === 'string') {
//     return [input];
//   } else {
//     return [input];
//   }
// }
function wrapInArray(value) {
    return [value];
}
console.log(wrapInArray("hello"));
console.log(wrapInArray(100));
