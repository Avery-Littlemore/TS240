"use strict";
// Implement a function assertNever that takes a value of type never and throws an error. 
// Refactor the solution we had in the last exercise to add exhaustiveness checking to the 
// getArea function above to ensure all cases are handled.
function getArea2(shape) {
    if (shape.kind === "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    else if (shape.kind === 'square') {
        return Math.pow(shape.sideLength, 2);
    }
    else {
        return assertNever(shape);
    }
}
function assertNever(value) {
    throw new Error(`Unhandled value: ${value}`);
}
