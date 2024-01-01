const topicTitle = document.querySelector("#title");
topicTitle.textContent = "call stack";
// stack overflow //////////////////////////////////
// function inception() {
//   inception();
// }
// inception();

// call stack //////////////////////////////////
const add = (a, b) => { // Last in Firt Out

  return a + b;
};

const calculate = () => { // Fisrt in Last Out

  add(1, 2);
};

calculate();

// memory leaked
// const array = [];
// for (let i = 1; i > 0; i++) {
//   array.push(i);
// }

// when happens memory leaked
// ! Global variable
// ! adding event listener without removing it.
// ! setting timer without cleanup.

setInterval(() => {
  console.log(1);
}, 1000);

let button;
button.addEventListener("click", () => {
  // reference
});