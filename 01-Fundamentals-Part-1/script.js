// ******BASICS******
let js = "amazing";
if (js === "amazing") alert("JavaScript is FUN!");
console.log(20 + 4 - 10);
console.log("Drishti");
console.log(23);

let $age = 18;
// $age = 19;     possible

const $birthYear = 2003;
// $birthYear = 2002;     Not possible
// const $birthMonth;     Not possible

var _age = 18;
// _age = 19;     possible

// ******OPERATORS******
const now = 2023;
const ageDrishti = now - 2003;
const ageXYZ = now - 2002;
console.log(ageDrishti, ageXYZ);
console.log(ageDrishti * 2, ageDrishti / 2, 2 ** 3); // multiply,division,power

const $firstName = "Drishti";
const lastName = "kirodiwal";
console.log($firstName + " " + lastName); //concatenation

let x = 10 + 5;
console.log(x);
x += 10; // x = x + 10      +=, -=, /=, *=
console.log(x);
x = x++; // ++x, x--, --x
console.log(x);

console.log(ageDrishti > ageXYZ); // >, <, >=, <=

// ******CODING CHALLENGE ******
let massMark = 78,
  heightMark = 1.69,
  massJohn = 92,
  heightJohn = 1.95;

// let massMark = 95,
//   heightMark = 1.88,
//   massJohn = 85,
//   heightJohn = 1.76;

BMI_Mark = massMark / heightMark ** 2;
BMI_John = massJohn / (heightJohn * heightJohn);

if (BMI_John > BMI_Mark) {
  console.log(`John's BMI${BMI_John} is higher than Mark's${BMI_Mark}!`);
} else {
  console.log(`Mark's BMI${BMI_Mark} is higher than John's${BMI_John}!`);
}

markHigherBMI = BMI_Mark > BMI_John;

console.log(BMI_John, BMI_Mark, markHigherBMI);

// ******STRING & TEMPLATE******
const firstName = "Drishti",
  job = "Student",
  _birthYear = 2003,
  year = 2023;

const drishti =
  "I'm " + firstName + ", a " + (year - _birthYear) + " years old " + job + "!";
console.log(drishti);

const drishtiNew = `I'm ${firstName}, a ${year - _birthYear} years old ${job}!`;
console.log(drishtiNew);

console.log("Drishti\nKirodiwal");
console.log(`Drishti
Kirodiwal`);

// ****** IF ELSE ******
const age = 15;
if (age >= 18) {
  console.log("He/She can start driving 🚗");
} else {
  const yearLeft = 18 - age;
  console.log(`He/She is too young. Wait another ${yearLeft} years :) .`);
}

let century;
const BirthYear = 2003;
if (BirthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// CONVERSION & COERCION
const birthYear = "";
