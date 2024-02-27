"use strict";
function getProperty(obj, key) {
    return obj[key];
}
const obj = {
    name: "John",
    age: 30,
};
const x1 = getProperty(obj, "name");
const y1 = getProperty(obj, "age");
