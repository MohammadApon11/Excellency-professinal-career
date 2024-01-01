const topicTitle = document.querySelector("#title");
topicTitle.textContent = "call() and apply()";
// call
const ana = {
  company: "Ana",
  serialCode: "AN",
  bookings: [],
  bookingNow(name, id) {
    console.log(
      `${name} Booking a seat number in ${this.company} ${this.serialCode}${id}`
    );
    this.bookings.push({
      name,
      bus: `${this.company} ${this.serialCode}${id}`,
    });
  },
};
ana.bookingNow("apon", 1111);
console.log(ana.bookings);

const book = ana.bookingNow;

book.call(ana, "Mahid", 3333);

const shahJalal = {
  company: "shah jalalal",
  serialCode: "SJ",
  bookings: [],
};

const arrayForApply = ["Abid Mahmud with Apply method", 4242];

book.call(shahJalal, ["Abid Mahmud with Apply method", 4242]);
book.call(shahJalal, ...arrayForApply);
book.apply(shahJalal, ["Abid Mahmud with Apply method", 4242]);
console.log(shahJalal.bookings);

// apply to related ana objects

// array like object
const arrayLike = {
  0: "apple",
  1: "banana",
  2: "orange",
  3: "dragon",
  length: 4, // It has a length property indicating the number of elements
};

console.log(arrayLike[3]); // Output: 'apple'
console.log(arrayLike.length); // Output: 3
