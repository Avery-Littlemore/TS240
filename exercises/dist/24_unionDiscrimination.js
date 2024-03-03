"use strict";
// Define a discriminated union Shape that can be either a Circle with kind: "circle" and radius properties, or a Square with 
// kind: "square" and sideLength properties. Then write a function getArea that calculates the area of the given shape.
function getArea(shape) {
    if (shape.kind === 'circle') {
        console.log(Math.PI * Math.pow(shape.radius, 2));
    }
    else {
        console.log(Math.pow(shape.sideLength, 2));
    }
}
getArea({ kind: "circle", radius: 10 });
getArea({ kind: "square", sideLength: 10 });
