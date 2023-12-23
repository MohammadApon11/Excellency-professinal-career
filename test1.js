// Object literal
const person = {
    name: 'John',
    age: 30,
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    },
  };

// Constructor function
function Person(name, age) {
    this.name = name;
    console.log(this.name);
    this.age = age;
    this.greet = function() {
      console.log(`Hello, my name is ${this.name,12}`);
    };
  }
  
  const john = new Person('apon', 24);

  console.log(john);
  john.greet(); // Output: Hello, my name is apon