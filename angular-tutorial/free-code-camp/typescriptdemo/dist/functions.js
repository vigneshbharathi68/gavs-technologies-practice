"use strict";
// Generic Functions
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 10));
// Arrow Functions
const sub = (num1, num2) => num1 - num2;
console.log(sub(5, 10));
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(5, 10));
// Write function with optional parameter
function add2(num1, num2) {
    return num2 ? num1 + num2 : num1;
}
console.log(add2(5, 10));
console.log(add2(5));
// Rest Parameters 
function add3(num1, num2, ...nums) {
    return num1 + num2 + nums.reduce((a, b) => a + b);
}
console.log(add3(5, 10, 15, 20, 25, 30));
function getItems(items) {
    return new Array().concat(items);
}
console.log(getItems([1, 2, 3, 4, 5]));
console.log(getItems(["a", "b", "c", "d", "e"]));
//# sourceMappingURL=functions.js.map