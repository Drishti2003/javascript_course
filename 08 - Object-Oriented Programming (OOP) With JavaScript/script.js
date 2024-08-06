"use strict";

///////////////////////////////////////////////// Constructor Functions and the New Operator /////////////////////////////////////////////////
/*
const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

//   Never do this
//   this.calcAge = function () {
//     console.log(2037 - this.birthYear);
//   };
};

const drishti = new Person("drishti", 2003);
console.log(drishti);

// 1. New empty object {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4.function automatically return {}

const tanu = new Person("Tanu", 2002);
console.log(tanu);

console.log(drishti instanceof Person);
*/

///////////////////////////////////////////////// Prototypes /////////////////////////////////////////////////

const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const drishti = new Person("drishti", 2003);

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

drishti.calcAge();

console.log(drishti.__proto__);
console.log(drishti.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(drishti));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "Homo Sapiens";
console.log(drishti);

console.log(drishti.hasOwnProperty("firstName"));
console.log(drishti.hasOwnProperty("species"));
