// Object literal
// const person = {
//     name: 'John',
//     age: 30,
//     greet() {
//       console.log(`Hello, my name is ${this.name}`);
//     },
//   };

// // Constructor function
// function Person(name, age) {
//     this.name = name;
//     console.log(this.name);
//     this.age = age;
//     this.greet = function() {
//       console.log(`Hello, my name is ${this.name,12}`);
//     };
//   }

//   const john = new Person('apon', 24);

//   console.log(john);
//   john.greet(); // Output: Hello, my name is apon

// my first constructor function
const Man = function (name, hand, leg, eye, religion) {
  (this.name = name),
    (this.hand = hand),
    (this.leg = leg),
    (this.eye = eye),
    (this.religion = religion);
};

//* step 1. create a object {} the "new" keyword
//* step 2. Function is called and, this = {}
//* step 3. Empty object is linked to prototype
//* step 4. Object is returned

const apon = new Man("Apon", 2, 2, 2, "Islam");
const mitun = new Man("Mithun", 2, 2, 2, "Hindu");

Man.prototype.nameAndReligion = function () {
  return this.name + " " + this.religion;
};

console.log(apon); // output: Man {name: 'Apon', hand: 2, leg: 2, eye: 2, religion: 'Islam'}
console.log(mitun); // output: Man {name: 'Mithun', hand: 2, leg: 2, eye: 2, religion: 'Hindu'}

console.log(Man.prototype); // output: {nameAndReligion: ƒ, constructor: ƒ}
console.log(apon.__proto__); // output {nameAndReligion: ƒ, constructor: ƒ}

console.log(apon.nameAndReligion()); // output: Apon Islam
console.log(mitun.nameAndReligion()); // output: Mithun Hindu

const arr = [1, 2, 3, 3, 4, 45, 5];
const obj = { name: "Apon" };
console.log(arr.__proto__); //output: [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
console.log(obj.__proto__); // output: {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}


// MCQ Test

// console.log("Task 1");
// setTimeout(() => {
//  console.log("Task 2");
// }, 5000);
// console.log("Task 3");
// setTimeout(() => {
//  console.log("Task 4");
// }, 0);
// console.log("Task 5");

// "use strict";

// const func = () => {
//  console.log(this);
// };
// func()

// var name = "Hero";
// function changeName() {
//  console.log(name);
//  var name = "Alam";
// }
// changeName()

// const count = () => {
//     for (var i = 1; i < 5; i++) {}
//     console.log(i);
//    };
//    count();

//    const car = {
//     imported: 250,
//     price: 26500000,
//     calc: function () {
//      console.log(this.price * this.imported);
//     },
//    };
//    const bike = {
//     imported: 150,
//     price: 2200000,
//    };
   
// //    bike.calc();

//    const b = 5;
// function calc(num1, num2) {
//  const a = num1;
//  const b = 2;
//  function sum() {
//   return a + b;
//  }
//  function sub() {
//   return a - b;
//  }
//  var summationResult = sum();
//  var subtractionResult = sub();
//  return { summationResult, subtractionResult };
// }
// const result = calc(5, 15);
// console.log(result);