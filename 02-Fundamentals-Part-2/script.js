"use strict";

/*  function logger() {
  console.log("My name is Drishti.");
}

// calling/running/invoking function
logger();  

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));
console.log(fruitProcessor(2, 4));  */

/////////////////////////////////////////////////////////////////////////////////////////////////////

/*  // Function declaration
// const age1 = calcAge1(2003); POSSIBLE : can be called before declartion

function calcAge1(birthYear) {
  return 2023 - birthYear;
}

const age1 = calcAge1(2003);
console.log(age1);

/////////////////////////////////////////////////////////////////////////////////////////////////////

// function expression
// const age2 = calcAge2(2003); NOT POSSIBLE : cannot be called before declaration

const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};

const age2 = calcAge2(2003);
console.log(age2);  */

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Arrow function
/*  const calcAge3 = (birthYear) => 2023 - birthYear;
console.log(calcAge3(2003));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years.`;
};
console.log(yearsUntilRetirement(2003, "Drishti"));  */

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Function calling other function

/*  const cutFruit = function (fruit) {
  return fruit * 4;
};

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruit(apples);
  const orangePieces = cutFruit(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(5, 0));
console.log(fruitProcessor(2, 4));  */

//////////////////////////////////////////CODING CHALLENGE///////////////////////////////////////////

/* const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = function (avgDolhins, avgKoalas) {
  if (avgDolhins >= 2 * avgKoalas)
    console.log(`Dolphins win (${avgDolhins} vs ${avgKoalas})`);
  else if (avgKoalas >= 2 * avgDolhins)
    console.log(`Koalas win (${avgKoalas} vs ${avgDolhins})`);
  else console.log(`No one wins...`);
};

const avgDolhins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

const avgDolhins1 = calcAverage(85, 54, 41);
const avgKoalas1 = calcAverage(23, 34, 27);

checkWinner(avgDolhins, avgKoalas);
checkWinner(avgDolhins1, avgKoalas1);  */

/*  const bills = [125, 555, 44];
let tips = [],
  total = [];
const calctip = (bill) => {
  if (bill <= 300 && bill >= 50) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

for (let i = 0; i < bills.length; i++) {
  tips[i] = calctip(bills[i]);
  total[i] = tips[i] + bills[i];
}
console.log(tips);
console.log(total);  */

/*
const John = {
  FullName: "John Smith",
  Height: 1.95,
  Weight: 92,
  calcBMI: function () {
    this.BMI = this.Weight / (this.Height * this.Height);
    return this.BMI;
  },
};

const Mark = {
  FullName: "Mark Miller",
  Height: 1.69,
  Weight: 78,
  calcBMI: function () {
    this.BMI = this.Weight / (this.Height * this.Height);
    return this.BMI;
  },
};

if (John.calcBMI() > Mark.calcBMI()) {
  console.log(
    `${John.FullName}'s BMI(${John.calcBMI()}) is higher than ${
      Mark.FullName
    }'s BMI(${Mark.calcBMI()})`
  );
} else {
  console.log(
    `${Mark.FullName}'s BMI(${Mark.calcBMI()}) is higher than ${
      John.FullName
    }'s BMI(${John.calcBMI()})`
  );
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////
// ARRAYS

/*
const friends = ["Michael", "Steven", "John"];
console.log(friends);
const y = new Array(1991, 1998, 2020, 2003, 2002);
console.log(y);

console.log(friends[0]);

console.log(years.length);
console.log(years[years.length - 1]); // to get last element of array

friends[2] = "Jay";
console.log(friends);
// friends = ['Bob','Alice'] NOT POSSIBLE

const firstName = "Drishti";
const drishti = [firstName, "Kirodiwal", 2023 - 2003, "Student", friends];
console.log(drishti);

//add elements
const newLenght = friends.push("Drishti");
console.log(friends);
console.log(newLenght);

friends.unshift("Peter");
console.log(friends);

//remove elements
friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Drishti"));

console.log(friends.includes("Steven"));
console.log(friends.includes("Drishti"));
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////
// OBJECTS

/*
const dk = {
  FirstName: "Drishti",
  LastName: "Kirodiwal",
  Age: 20,
  Job: "Student",
  Friends: ["Yana", "Riya", "Tanu"],
};
console.log(dk);

console.log(dk.LastName);
console.log(dk["LastName"]);

const nameKey = "Name";
console.log(dk["First" + nameKey]);
// console.log(dk.'First'+nameKey) NOT POSSIBLE

// EXAMPLE
const interestedIn = prompt(
  "What do you want to know about Drishti? Choose between FirstName, LastName, Age, Job and Friends."
);
if (dk[interestedIn]) {
  console.log(dk[interestedIn]);
} else {
  console.log(
    "Wrong Request! Choose between FirstName, LastName, Age, Job and Friends."
  );
}

dk["Location"] = "Alwar";
dk.phnNo = 1234567890;
console.log(dk);

// Challenge
console.log(
  `${dk.FirstName} has ${dk.Friends.length} friends, and his best friend is called ${dk.Friends[0]}`
  );
*/

/*
const dk = {
  FirstName: "Drishti",
  LastName: "Kirodiwal",
  BirthYear: 2003,
  Job: "Student",
  Friends: ["Yana", "Riya", "Tanu"],
  hasDriversLicense: false,

  // calcAge: function (BirthYear) {
  //   return 2023 - BirthYear;
  // },

  // calcAge: function () {
  //   return 2023 - this.BirthYear;
  // },

  calcAge: function () {
    this.Age = 2023 - this.BirthYear;
    return this.Age;
  },

  getSummary: function () {
    return `${this.FirstName} is a ${this.calcAge()}-year old ${
      this.Job
    }, and she has ${this.hasDriversLicense ? "a" : "no"} driving license.`;
  },
};
// console.log(dk.calcAge(2003));
// console.log(dk["calcAge"](2003));

// console.log(dk.calcAge());
// console.log(dk.Age);

console.log(dk.getSummary());
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////
// ITERATION
