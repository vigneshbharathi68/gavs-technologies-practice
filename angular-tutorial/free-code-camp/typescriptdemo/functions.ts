// Generic Functions
function add (num1: number, num2: number): number {
    return num1 + num2;
}
console.log(add(5, 10));

// Arrow Functions
const sub = (num1: number, num2: number): number => num1 - num2;
console.log(sub(5, 10));
const mult = function (num1: number, num2: number): number {
    return num1 * num2;
}
console.log(mult(5, 10));

// Write function with optional parameter
function add2 (num1: number, num2?: number) {
    return num2 ? num1 + num2 : num1;
}
console.log(add2(5, 10));
console.log(add2(5));

// Rest Parameters 
function add3 (num1: number, num2: number, ...nums: number[]) : number{
    return num1 + num2 + nums.reduce((a, b) => a + b);
}

console.log(add3(5, 10, 15, 20, 25, 30));


function getItems<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

console.log(getItems<number>([1, 2, 3, 4, 5]));

console.log(getItems<string>(["a", "b", "c", "d", "e"]));
