// stack overflow //////////////////////////////////
// function inception() {
//   inception();
// }
// inception();

// call stack //////////////////////////////////
// const add = (a, b) => { // Last in Firt Out

//   return a + b;
// };

// const calculate = () => { // Fisrt in Last Out

//   add(1, 2);
// };

// calculate();

// memory leaked
// const array = [];
// for (let i = 1; i > 0; i++) {
//   array.push(i);
// }

// when happens memory leaked
//! Global variable
//! adding event listener without removing it.
//! setting timer without cleanup.

// setInterval(() => {
//   console.log(1);
// }, 1000);

// let button;
// button.addEventListener("click", () => {
//   // reference
// });

// hoisting

// var test = undefined; // implicitly test allocated a place of memory for test

// test(); //output: test

// var test = () => {
//   console.log("test");
// };

// var movie = undefined; // implicitly movie allocated a place of memory

// console.log(movie); // output: undefined

// var movie = "Curulus";

// console.log(movie);

// // lexhical environment
// const test = (a, b) => {
// //line 63 to 68 are lexical environment of add function
//   let num1 = a;
//   let num2 = b;
//   const add = () => {
//     return num1 + num2;
//   };
//   return add();
// };

// console.log(test(2, 2));

// scope

// this keyword

// // 1. Global => this = global object (Incase of browser it's Window object)
// console.log(this === window); // output: In a browser environment, this would be true

// // 2. Simple function call => this = could be undefined or Global object
// // "use strict";
// function test1() {
//   console.log(this); //output: if we use "use strict" undefined rather Global object
// }
// test1();

// // 3. Arrow function => this = Doesn't have "this" of it's own (Lexical this). it have lexical this

// const test2 = () => {
//   console.log(this); // output: window
// };
// test2();

// // Method => this = The  object that is calling the method

// const pastFriends = {
//   international: 2,
//   national: 100,
//   sub: function () {
//     console.log(this.international + this.national); // output: 102
//     console.log(this); // output: pastFriends full object with sub function
//   },
// };

// pastFriends.sub();

// const nowFriends = {
//   international: 20,
//   national: 1000,
//   // sub: function () { output: 1020}
// };

// nowFriends.sub = pastFriends.sub;

// nowFriends.sub();

// // Event Listener => this = DOM element

// const button = document.getElementById("btn");
// button.addEventListener("click", function () {
//   console.log(this);
// });
