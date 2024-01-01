const topicTitle = document.querySelector("#title");
topicTitle.textContent = "This Keyword";
// this keyword

// // 1. Global => this = global object (Incase of browser it's Window object)
console.log(this === window); // output: In a browser environment, this would be true

// // 2. Simple function call => this = could be undefined or Global object
// "use strict";
function test1() {
  console.log(this); //output: if we use "use strict" undefined rather Global object
}
test1();

// // 3. Arrow function => this = Doesn't have "this" of it's own (Lexical this). it have lexical this

const test2 = () => {
  console.log(this); // output: window
};
test2();

// // Method => this = The  object that is calling the method

const pastFriends = {
  international: 2,
  national: 100,
  sub: function () {
    console.log(this.international + this.national); // output: 102
    console.log(this); // output: pastFriends full object with sub function
  },
};

pastFriends.sub();

const nowFriends = {
  international: 20,
  national: 1000,
  // sub: function () { output: 1020}
};

nowFriends.sub = pastFriends.sub;

nowFriends.sub();

// Event Listener => this = DOM element

const button = document.getElementById("btn");
button.addEventListener("click", function () {
  console.log(this);
});
