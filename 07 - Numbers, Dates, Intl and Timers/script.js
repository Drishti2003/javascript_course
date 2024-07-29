///////////////////////////////////////////////// Converting and Checking Numbers  /////////////////////////////////////////////////
/*
console.log(23 === 23.0);

// Base 10 = 0 to 9
// Binary: base 2 = 0, 1
console.log(0.1 + 0.2);

// conversion
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));
console.log(Number.parseInt('30px', 2));

console.log(Number.parseFloat('2.5rem'));
console.log(Number.parseInt('2.5rem'));

console.log(parseFloat('2.5rem'));

// check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(27 / 0));

// checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(27 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));
*/

///////////////////////////////////////////////// MATH AND ROUNDING /////////////////////////////////////////////////
/*
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 1, 2));
console.log(Math.max(5, 18, '23', 1, 2));
console.log(Math.max(5, 18, '23px', 1, 2));

console.log(Math.min(5, 18, 23, 1, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2); // AREA OF CIRCLE

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10, 20));

// Rounding integers
console.log(Math.trunc(23.3));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Rounding decimals or floating point numbers
console.log((2.7).toFixed(0))
console.log((2.7).toFixed(3))
console.log((2.743).toFixed(2))
console.log(+(2.743).toFixed(2))
*/

///////////////////////////////////////////////// The Remainder Operator /////////////////////////////////////////////////
/*
console.log(5 % 2);
console.log(5 / 2);

console.log(8 % 3);
console.log(8 / 3);

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));
*/

///////////////////////////////////////////////// Numeric Separators /////////////////////////////////////////////////
/*
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.14_15; //3_.1415  3._1415 ERROR
console.log(PI);

console.log(Number('230_000'));
console.log(parseInt('230_000'));
*/

///////////////////////////////////////////////// BigInt /////////////////////////////////////////////////
/*
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(213456678990088776853325263999465638575357n);
console.log(BigInt(2134566789));

// operations
console.log(10000n + 10000n);
console.log(12334547770828027353572492726n * 10000000n);
// console.log(Math.sqrt(16n))

const huge = 23257343529368369393962n;
const num = 23;
console.log(huge * BigInt(num));

// exception
console.log(20n > 15);
console.log(20n === 20);
console.log(20n == '20');

console.log(huge + 'is really big!!');

// division
console.log(10n / 3n);
console.log(10 / 3);
*/
