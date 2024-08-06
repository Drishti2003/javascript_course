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
/*
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

console.log(drishti.__proto__);
console.log(drishti.__proto__.__proto__);
console.log(drishti.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);
*/

///////////////////////////////////////////////// Prototypal Inheritance on Built-In Objects /////////////////////////////////////////////////
/*
const arr = [3, 6, 6, 4, 5, 6, 9, 3, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector("h1");
console.dir(h1);
*/

///////////////////////////////////////////////// Coding Challenge #1 /////////////////////////////////////////////////
/*
const Cars = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Cars.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.speed} km/h`);
};

Cars.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.speed} km/h`);
};

const bmw = new Cars("BMW", 120);
const mercedes = new Cars("Mercedes", 95);

bmw.accelerate();
bmw.brake();

mercedes.accelerate();
mercedes.brake();
*/

///////////////////////////////////////////////// ES6 Classes /////////////////////////////////////////////////
/*
// class expression
// const PersonCl = class{}

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methos will be added to .prototype property
  calcAge() {
    console.log(2024 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}!`);
  }
}

const drishti = new PersonCl("Drishti", 2003);
console.log(drishti);
drishti.calcAge();

console.log(drishti.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}!`);
// };

drishti.greet();

// 1. Classes are not hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode
*/

///////////////////////////////////////////////// Setters and Getters /////////////////////////////////////////////////

const account = {
  owner: "drishti",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methos will be added to .prototype property
  calcAge() {
    console.log(2024 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}!`);
  }

  get age() {
    return 2024 - this.birthYear;
  }

  // set a property that already exist
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full Name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const drishti = new PersonCl("Drishti Kirodiwal", 2003);
console.log(drishti.age);
