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
/*
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
*/

///////////////////////////////////////////////// Static Method /////////////////////////////////////////////////
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  static hey() {
    console.log("Hey there 👋🏻");
    console.log(this);
  }
}

PersonCl.hey();
*/

///////////////////////////////////////////////// Object.create /////////////////////////////////////////////////
/*
const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__);

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1999);
sarah.calcAge();
*/

///////////////////////////////////////////////// Coding Challenge #2 /////////////////////////////////////////////////
/*
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.speed} km/hr`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(sp) {
    this.speed = sp * 1.6;
  }
}

const car1 = new Car("Ford", 120);

car1.accelerate();
car1.brake();

console.log(car1.speedUS);
car1.speedUS = 120;

console.log(car1);
*/

///////////////////////////////////////////////// Inheritance Between "Classes" : Constructor Functions /////////////////////////////////////////////////
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2038 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Liknking prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const mike = new Student("Mike", 2020, "Computer Science");
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

///////////////////////////////////////////////// Coding Challenge #3 /////////////////////////////////////////////////
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

const EV = function (make, speed, charge) {
  Cars.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Cars.prototype);

EV.prototype.chargeBttery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}.`
  );
};

const tesla = new EV("Tesla", 120, 23);
tesla.chargeBttery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
*/

///////////////////////////////////////////////// Inheritance Between "Classes" : ES6 Classes /////////////////////////////////////////////////
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2024 - this.birthYear);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}.`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }.`
    );
  }
}

// const martha = new StudentCl("Martha Jones", 2012);
const martha = new StudentCl("Martha Jones", 2012, "Computer Science");
martha.introduce();
martha.calcAge();
*/

///////////////////////////////////////////////// Inheritance Between "Classes" : Object.create /////////////////////////////////////////////////
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const drishti = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const jay = Object.create(StudentProto);
jay.init("Jay", 2010, "Computer Science");
jay.introduce();
jay.calcAge();
*/

///////////////////////////////////////////////// Another Class Example /////////////////////////////////////////////////

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // public interface
  deposit(val) {
    this.movements.push(val);
  }

  withdrawal(val) {
    this.deposit(-val);
  }

  approveLaon(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLaon(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
    }
  }
}

const acc1 = new Account("Drishti", "INR", 7777);

// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdrawal(140);
acc1.requestLoan(1000);
acc1.approveLaon(1000);

console.log(acc1);
console.log(acc1.pin);
