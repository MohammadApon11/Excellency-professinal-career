const topicTitle = document.querySelector("#title");
topicTitle.textContent = "Class Inheritance";

const Person = function (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
};

Person.prototype.calculateAge = function (year) {
  return `My Birth Year: ${this.birthYear - year}`;
};

const result1 = new Person("Apon", 2001);

console.log(result1.calculateAge(1));

const Student = function (name, birthYear, subject) {
  Person.call(this, name, birthYear);
  this.subject = subject;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.intro = function () {
  return `My Name is: ${this.name} and my Birth Year is: ${this.birthYear}`;
};

const result2 = new Student("Mahedi", 1999, "Humanities");
console.log(result2.calculateAge(5));
console.log(result2.intro());
