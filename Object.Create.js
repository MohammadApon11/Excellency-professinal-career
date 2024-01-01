const topicTitle = document.querySelector("#title");
topicTitle.textContent = "Object.create()";
// Object.create();

// example 1
const ManProto = {
  ManAbout() {
    this.name + " " + this.religion;
  },
  ManDetail(name, religion, fathersName) {
    this.name = name;
    this.religion = religion;
    this.fathersName = fathersName;
  },
};

const Man1 = Object.create(ManProto);
Man1.ManDetail("apon", "islam", "late mukhlesur rahman");
console.log(Man1);

// example 2
// Prototype object
const Animal = {
  makeSound() {
    return `${this.sound}!`;
  },
  setSpecies(species) {
    this.species = species;
  },
};

// Creating a new object using Object.create() with 'Animal' as its prototype
const dog = Object.create(Animal);

// // Adding specific properties to the 'dog' object
dog.sound = 'Woof';
dog.setSpecies('Canine');

// Using methods and properties of 'dog'
console.log(dog.makeSound()); // Output: Woof!
console.log(dog.species); // Output: Canine

