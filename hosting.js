const topicTitle = document.querySelector("#title");
topicTitle.textContent = "Hosting";
// hoisting

// var test = undefined; // implicitly test allocated a place of memory for test

test(); //output: test

var test = () => {
  console.log("test");
};

// var movie = undefined; // implicitly movie allocated a place of memory

console.log(movie); // output: undefined

var movie = "Curulus";

console.log(movie);

// // lexical environment
const test = (a, b) => {
  //line 63 to 68 are lexical environment of add function
  let num1 = a;
  let num2 = b;
  const add = () => {
    return num1 + num2;
  };
  return add();
};

console.log(test(2, 2));
