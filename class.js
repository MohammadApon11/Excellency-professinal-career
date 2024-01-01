
const topicTitle = document.querySelector("#title");
topicTitle.textContent = "class define";
// * class decralation
class Man{

}

// * class expression
const Man = class {
  constructor(name, age, religion) {
    this.name = name;
    this.age = age;
    this.religion = religion;
  }
  // instance method
  addTwo() {
    return this.name + this.religion;
  }

  // static method
  static Hello(name, grade) {
    return name + " SCC Result" + grade;
  }
  static multiply(x, y) {
    return x * y;
  }
};

const Man1 = new Man("apon", 24, "islam");
const Man2 = new Man("mithin", 24, "hindu");
console.log(Man1.addTwo());
console.log(Man2.__proto__);
//* static function call
Man.Hello("apon", 4.59);
const product = Man.multiply(4, 6); // Calling the 'multiply' static method
console.log('Product:', product); // Output: Product: 24