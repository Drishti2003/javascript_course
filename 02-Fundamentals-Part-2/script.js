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

////////////////////////////////////////////////////////////////////////////

/*  // Function declaration
// const age1 = calcAge1(2003); POSSIBLE : can be called before declartion

function calcAge1(birthYear) {
  return 2023 - birthYear;
}

const age1 = calcAge1(2003);
console.log(age1);
////////////////////////////////////////////////////////////////////////////

// function expression
// const age2 = calcAge2(2003); NOT POSSIBLE : cannot be called before declaration

const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};

const age2 = calcAge2(2003);
console.log(age2);  */

//////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////

// Function calling other function

const cutFruit = function (fruit) {
  return fruit * 4;
};

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruit(apples);
  const orangePieces = cutFruit(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(5, 0));
console.log(fruitProcessor(2, 4));
