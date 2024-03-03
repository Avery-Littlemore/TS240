"use strict";
// Create two variables, computer and smartphone, using a type alias Device that requires manufacturer (string), model (string), 
// and year (number). Demonstrate TypeScript's structural compatibility by creating a variable with a shape that has compatible 
// properties with Device.
let computer = {
    manufacturer: 'Apple',
    model: 'Macbook Air',
    year: 2020
};
// let smartphone: Device & { warranty: boolean } = {
//   manufacturer: 'Apple',
//   model: 'iPhone 14',
//   year: 2022,
//   warranty: false,  
// }
let smartphone = {
    manufacturer: 'Apple',
    model: 'iPhone 14',
    year: 2022,
    warranty: false,
};
let anotherSmartphone = smartphone;
