// Nested functions scope
// ----------------------
// let a = 10;
// function outer() {
//   let b = 20;
//   function inner() {
//     let c = 30;
//     console.log(a, b, c);
//   }
//   inner();
// }
// outer();
// ----------------------

// Closures
// ----------------------
// function outer() {
//     let counter = 0;
//     function inner () {
//         counter++;
//         console.log(counter)
//     }
//     return inner
// }

// const fn = outer()
// fn()
// fn()
// ----------------------

// Currying
// ----------------------
// function curry(fn) {
//     return function (a) {
//         return function (b) {
//             return function (c) {
//                 return fn(a, b, c);
//             }
//         }
//     }
// }
// const curriedSum = curry(sum);
// console.log(curriedSum(2)(3)(5));
// const add2 = curriedSum(2);
// const add3 = add2(3);
// const add5 = add3(5);
// console.log(add5)
// ----------------------

// this keyword
// ----------------------
// Set name property globally to access with this keyword
// globalThis.name = 'Super Man'
// function sayMyName() {
//     console.log(`My name is ${this.name}`);
// }

// sayMyName('Vignesh');
// sayMyName('Bharathi');

// Implicit Binding

// const person = {
//     name: 'Vignesh',
//     sayMyName: function () {
//         console.log(`My name is ${this.name}`);
//     }
// }

// person.sayMyName();

// Explicit Binding
// function sayMyName() {
//   console.log(`My name is ${this.name}`);
// }

// sayMyName.call({ name: "Vignesh" });

// Default Binding
// Constructor Function
// function Person (name) {
//     // this = {}
//     this.name = name;
// }

// const p1 = new Person('Vignesh');
// const p2 = new Person('Bharathi');
// console.log(p1.name,p2.name);

// sayMyName()
// ----------------------


// Prototype
// ----------------------
// function Person (fName, LName) {
//     this.firstName = fName
//     this.lastName = LName
// }

// const Person1 = new Person('Bruce', 'Wayne')
// const Person2 = new Person('Clark', 'Kent')

// Person.prototype.getFullName = function () {
//     return this.firstName + ' ' + this.lastName
// }

// console.log(Person1.getFullName())
// console.log(Person2.getFullName())
// ----------------------

// Prototype Inheritance
// ----------------------


// function SuperHero (fName, lName) {
//     // this = {}
//     Person.call(this, fName, lName)
//     this.isSuperHero = true
// }

// SuperHero.prototype.fightCrime = function () {
//     console.log('Fighting Crime')
// }

// SuperHero.prototype = Object.create(Person.prototype)
// SuperHero.prototype.constructor = SuperHero
// const batman = new SuperHero('Bruce', 'Wayne');

// console.log(batman);

// ----------------------

// ES6 Classes
// ----------------------

// class Person {
//     constructor (fName, lName) {
//         this.firstName = fName
//         this.lastName = lName
//     }

//     sayMyName () {
//         return this.firstName + ' ' + this.lastName;
//     }
// }

// const classP1 = new Person('Bruce', 'Wayne');
// console.log(classP1.sayMyName());

// class SuperHero extends Person {
//     constructor (fName, lName) {
//         super(fName, lName)
//         this.isSuperHero = true
//     }

//     fightCrime () {
//         console.log('Fighting Crime')
//     }
// }

// const batman = new SuperHero('Bruce', 'Wayne');
// console.log(batman.sayMyName());
// batman.fightCrime();

// ----------------------


// Iterables and Iterators
Iteration in Javascript

