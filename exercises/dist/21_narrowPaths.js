"use strict";
// Create a function printLength that takes a parameter which could either be a string or an array of strings. 
// Using type narrowing, print the length of the string or the count of elements in the array to the console along 
// with what type of the element was passed in.
// Expected output for printLength("hello"):
// String length: 5
// Expected output for printLength(["hello", "world"]):
// Array count: 2
function printLength(input) {
    if (typeof input === 'string') {
        console.log(`String length: ${input.length}`);
    }
    else if (Array.isArray(input)) {
        console.log(`Array count: ${input.length}`);
    }
}
printLength("hello");
printLength(["hello", "world"]);
