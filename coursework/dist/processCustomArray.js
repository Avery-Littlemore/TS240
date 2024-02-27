"use strict";
function processCustomArray(arr) {
    if (Array.isArray(arr)) {
        return arr.filter(element => typeof element === 'string').map(element => element.toUpperCase());
    }
}
const customArray = ["apple", 42, "banana"];
