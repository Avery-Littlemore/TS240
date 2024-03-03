"use strict";
// Create a type representing all property names of the existing interface UserData.
// Then write a function that takes a UserData object and a key from UserData, and prints out the value of that key from the object.
function printUserDataField(data, key) {
    console.log(data[key]);
}
const userData = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
};
printUserDataField(userData, "name");
// Output should be "Alice"
printUserDataField(userData, "age");
// Output should be 25
