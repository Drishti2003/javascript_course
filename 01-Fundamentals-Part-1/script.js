// ******BASICS****** //
/*  let js = "amazing";
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
// _age = 19;     possible  */

// ******OPERATORS****** //
/*  const now = 2023;
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

console.log(ageDrishti > ageXYZ); // >, <, >=, <=  */

// ******CODING CHALLENGE ****** //
/*  let massMark = 78,
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

const avgKoala = (88 + 91 + 110) / 3;
const avgDolphin = (96 + 108 + 89) / 3;

if (avgDolphin === avgKoala) console.log("It's a Draw!");
else if (avgKoala > avgDolphin) console.log("Koala is winner!");
else console.log("Dolphin is winner!");  

// Bonus 1-2
const avgKoala = (109 + 95 + 10) / 3;
const avgDolphin = (97 + 112 + 10) / 3;
console.log(avgDolphin, avgKoala);

if (avgDolphin === avgKoala && avgDolphin >= 100 && avgKoala >= 100)
  console.log("It's a Draw!");
else if (avgKoala > avgDolphin && avgKoala >= 100)
  console.log("Koala is winner!");
else if (avgDolphin > avgKoala && avgDolphin >= 100)
  console.log("Dolphin is winner!");
else console.log("No one wins");  */

// ******STRING & TEMPLATE****** //
/*  const firstName = "Drishti",
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
Kirodiwal`);  */

// ****** IF ELSE ****** //
/*  const age = 15;
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
console.log(century);  */

// ******CONVERSION & COERCION****** //
// type conversion
/*  const inputYear = "1991";
console.log(inputYear + 18);
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("jonas"));
console.log(typeof NaN);

console.log(String(23));  

// type coercion
console.log("I am " + 20 + " years old.");
console.log("23" + "10" + 3);
console.log("23" - "10" - 3); //same for * and /  */

// ******TRUTHY & FALSY****** //
// 5 falsy values : 0, '', undefined, null, NaN
/*  console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean("Drishti"));
console.log(Boolean({}));

const money = 0;
if (money) {
  console.log("Don't spend!");
} else {
  console.log("You should get a job!");
}  */

// ******EQUALITY OPERATOR****** //
/*  // const age = 18;
const age = "18";
if (age === 18) console.log("You just became an adult!(Strict)");
if (age == 18) console.log("You just became an adult!(Loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);
if (favourite === 27) console.log("Number is 27!");
// not equal : !=(loose)  !==(strict)  */

// ****** LOGICAL OPERATOR****** //
/*  const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;
if (shouldDrive) console.log("Able to drive!");
else console.log("Not able to drive");

const ifTired = false;

if (hasDriversLicense && hasGoodVision && !ifTired)
  console.log("Able to drive!");
else console.log("Not able to drive");  */
