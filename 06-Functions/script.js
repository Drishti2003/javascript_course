'use strict';

/////////////////////////////////// DEFAULT PARAMETERS///////////////////////////////////
/* 
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //   ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('KH123');
createBooking('kh123', 2, 800);
createBooking('lh123',2)
createBooking('lh123',undefined,1000)
*/

/////////////////////////////////// How Passing Arguments Works Value vs. Reference ///////////////////////////////////
/*
const flight = 'LH123'; //primitive
const drishti = {
  name: 'Drishti Kirodiwal',
  passport: 23456789123,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'Lh999';
  passenger.name = 'Mrs. ' + passenger.name;
  if (passenger.passport === 23456789123) alert('Check in');
  else alert('wrong passport');
};
checkIn(flight, drishti);
console.log(flight);
console.log(drishti);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};
newPassport(drishti);
checkIn(flight, drishti);
*/
/*
var sum = 0;
const sumAll = (...num) => {
  num.forEach(value => {
    sum+= +value
  });
  return sum;
};
console.log(sumAll('2', 3));

const sumOrMul = (x,...num)=>{
if (x)
{
    for()
}
}
*/

/////////////////////////////////// Functions Accepting Callback Functions (Higher-order Function) ///////////////////////////////////
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order Function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// js uses callbacks all the time
const high5 = function () {
  console.log('👋🏻');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
*/

/////////////////////////////////// Functions Returning Functions (Higher-order Function) ///////////////////////////////////
/*
const greet = function(greeting){
  return function(name){
    console.log(`${greeting} ${name}`)
  }
}
const greeterHey = greet('Hey')
greeterHey('Jonas')
greeterHey('Steven')

greet('Hello')('Drishti')

const greetArr = greeting => name => console.log(`${greeting} ${name}`)
greetArr('Hi')('Gungun')
*/

/////////////////////////////////// The call and apply Methods ///////////////////////////////////
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Drishti Kirodiwal');
lufthansa.book(634, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book(23,'Sarah Williams')    DOES NOT WORK

// CALL METHOD
book.call(eurowings, 23, 'Sarah Williams');
book.call(lufthansa, 239, 'Tanu Jain');
console.log(eurowings);
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'Lx',
  bookings: [],
};

book.call(swiss, 238, 'Drishti Kirodiwal');
console.log(swiss);

// APPLY METHOD : take array of arguments
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

/////////////////////////////////// The Bind Method ///////////////////////////////////

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(234, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);

bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// With Event Listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane()

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(console.log(addTax(0.1, 200)));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
*/

/////////////////////////////////// Coding Challenge #1 ///////////////////////////////////
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6] }, 'string');
*/

/////////////////////////////////// Immediately Invoked Function Expressions (IIFE) ///////////////////////////////////
/*
const runOnce = function () {
  console.log('This will never run again');
};

runOnce();

(function () {
  console.log('This will never run again');
  const isPrivate = 23; //Private
})();

// console.log(isPrivate)

(() => console.log('This will also never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate)

*/

/////////////////////////////////// Closures  ///////////////////////////////////
/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// setTimeout(function () {
//   console.log('TIMER');
// }, 1000);

const perGroup = 1000;
boardPassengers(180, 3);
*/

/////////////////////////////////// Coding Challenge #1 ///////////////////////////////////

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
