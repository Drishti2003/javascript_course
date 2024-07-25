'use strict';
/* 
// ****************************************  SCOPE  ***************************************

function calcAge(birthYear){
    const age = 2024 - birthYear;

    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}.`;
        console.log(output);

        if(birthYear <= 1996 && birthYear >= 1981){
            var millenial = true;
            const str = `Oh, and you're a millenial, ${firstName}.`
            console.log(str);

            function add(a, b){
                return a + b;
            }
        }
        // console.log(str)    ERROR becoz its const
        console.log(millenial);
        // add(3,4); ERROR block scope but works when use strict is not used

    }
    printAge();
    return age;
}
const firstName = 'Drishti';
calcAge(1990);
// printAge();    ERROR
// console.log(age);   ERROR 
*/


/*
// ****************************************  HOISTING  ***************************************
// console.log(me)     O/P : undefined
// console.log(job)    O/P : ReferenceError
// console.log(year)   O/P : ReferenceError

var me = "Drishti";
let job = 'Student';
const year = 2003;

console.log(addDecl(2,3))
// console.log(addExpr(2,3))       if const O/P :ReferenceError else if var O/P :TypeError   
// console.log(addArrow(2,3))     if const O/P : ReferenceError else if var O/P : TypeError

function addDecl(a,b){
    return a+b;
}  

var addExpr = function(a,b){
    return a+b;
}
const addArrow = (a,b) => a+b;


// Example

console.log(numProducts)
if(!numProducts) deleteShoppingCart();
var numProducts = 10;
function deleteShoppingCart(){
    console.log('All products deleted!');
}

var x=1;
let y=2;
const z=3;

console.log(x === window.x)
console.log(y === window.y)
console.log(z === window.z)
*/


/*
// ****************************************  THIS  ***************************************
console.log(this)

const calcAge = function(birthYear) {
    console.log(2024-birthYear);
    console.log(this);    //uses object
};
calcAge(2003)

const calcAgeArrow = birthYear => {
    console.log(2024-birthYear)
    console.log(this)    //uses parent 
}
calcAgeArrow(2003)

const Drishti = {
    year : 2003,
    calcAge : function(){
        console.log(this)
        console.log(2024 - this.year)
    }
}
Drishti.calcAge()

const matilda = {
    year: 2015
}

matilda.calcAge = Drishti.calcAge //method borrowing -> copying calcAge() function from drishti to matilda
matilda.calcAge()

const f = Drishti.calcAge
f()


const Drishti = {
    firstName : 'Drishti',
    year : 2003,
    calcAge : function(){
        // console.log(this)
        console.log(2024 - this.year)

        // Solution 1
        // const self = this;
        // const isMillenial = function(){
        //     console.log(self)
        //     // console.log(this.year>=1981 && this.year<=1996)
        //     console.log(self.year >= 1981 && self.year <= 1996)
        // }

        // Solution 2
        const self = this;
        const isMillenial = () => {
            console.log(self)
            // console.log(this.year>=1981 && this.year<=1996)
            console.log(self.year >= 1981 && self.year <= 1996)
        }
        isMillenial()
    },
    greet : () => console.log(`Hey, ${this.firstName}`)
}

Drishti.greet()
Drishti.calcAge()

// arguments keyword
var addExpr = function(a,b){
    console.log(arguments)
    return a+b;
}
addExpr(2,3)

const addArrow = (a,b) => {
    // console.log(arguments) not available so error
    return a+b;
}
addArrow(2,3)
*/

// ****************************************  PRIMITIVES VS OBJECTS  ***************************************
/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

// const me = {
//     name: 'drishti',
//     age:21
// };
// const friend = me;
// friend.age = 22;
// console.log('Friend:',friend);
// console.log('me:',me)

// solution for copying object
const me = {
    name: 'drishti',
    age:21
};
const friend = Object.assign({},me);
friend.age = 22;
console.log("Friend:",friend);
console.log("me:",me)
*/
