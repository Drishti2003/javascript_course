'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderdelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
//////////////////////////////////// DESTRUCTURING ARRAY ////////////////////////////////////
let [first, second] = restaurant.categories;
console.log(first, second);
const [a, , c] = restaurant.categories;
console.log(a, c);

[first, second] = [second, first];  //Swapping
console.log(first, second);

const [starter,mainCourse] = restaurant.order(2,0)
console.log(starter,mainCourse)

const nested = [2,4,[5,6]]
const [i, ,[j,k]] = nested
console.log(i,j,k)
*/

/*
//////////////////////////////////// DESTRUCTURING OBJECTS ////////////////////////////////////

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

let a = 111;
let b = 999;
const obj = { a: 23, b: 45, c: 7 };
({ a, b } = obj);
console.log(a, b);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

restaurant.orderdelivery({
  time: '22:30',
  address: 'delhi',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderdelivery({
  address:'mumbai'
})
*/

/*
//////////////////////////////////// THE SPREAD OPERATOR ////////////////////////////////////
// it takes elements from one array and write it on another manually
const arr = [3, 4, 5];
const newArr1 = [1, 2, arr];
console.log(newArr1);
const newArr2 = [1, 2, ...arr];
console.log(newArr2);
console.log(...newArr2);

const newMenu = [...restaurant.mainMenu, 'Gnnoci'];
console.log(newMenu);

// copy array
const menu = [...restaurant.mainMenu];

// join array
const wholeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(wholeMenu);

const str = 'Drishti';
const name = [...str, ' ', 'K.'];
console.log(name);

const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingredients);
restaurant.orderPasta(...ingredients);

const newRestaurant = {...restaurant, founder:'Drishti', foundedIn: 2003}
console.log(newRestaurant)
*/

//////////////////////////////////// THE REST PATTERN ////////////////////////////////////
/*
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherfood);

// objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) 
  sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(2, 3, 4, 5);
add(8, 7, 6, 5, 4);
 
const x = [23,5,7]
add(...x)

restaurant.orderPizza('mushroom','onion','olives','spinach');
*/

////////////////////////////////////  AND, OR operator ////////////////////////////////////
//Use ANY data type,return ANY data type,short-circuiting

// OR
/*
console.log(3 || 'drishti');
// shortcircuiting in OR operator means if first value in truthy it returns that
console.log('' || 'drishti');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'hello' || 23 || null);

// restaurant.numGuests = 23;
// restaurant.numGuests = 0
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10
console.log(guests2)

// AND
// if first value is falsy then return that value
console.log(0 && 'drishti');
console.log(7 && 'drishti');
console.log('hello' && 23 && null && 'drishti');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');
*/

//////////////////////////////////// The Nullish Coalescing Operator () ////////////////////////////////////
// Nullish Value : null and undefined (NOT 0 or'')
/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

//////////////////////////////////// Logical Assignment Operators ////////////////////////////////////
/*
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
//  rest2.numGuests = rest2.numGuests || 10;
//  rest1.numGuests = rest1.numGuests ||10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>'
// rest2.owner = rest2.owner && '<ANONYMOUS>'

rest1.owner &&= '<ANONYMOUS>'
rest2.owner &&= '<ANONYMOUS>'

console.log(rest1);
console.log(rest2);
*/

//////////////////////////////////// Coding Challenge-1 ////////////////////////////////////
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [goalkeeper, ...filedplayers] = players1;
console.log(goalkeeper, filedplayers);

const allPLayers = [...players1, ...players2];
console.log(allPLayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

const {odds:{team1,x:draw,team2}} = game;
console.log(draw,team1,team2)

const printGoals = function (...players){
  console.log(`${players.length} goals were scored`)
}

// printGoals("Davies",'Muller','Lewandowski','Kimmich')
// printGoals('Lewandowski','Kimmich')
printGoals(...game.scored)

team1 < team2 && console.log('Team 1 is more likely to win')
team1 > team2 && console.log('Team 2 is more likely to win')
*/

//////////////////////////////////// The for-of Loop ////////////////////////////////////
// const menu = [...restaurant.starterMenu,...restaurant.mainMenu]

// for(const item of menu) console.log(item)

// for(const [i,el] of menu.entries()){
//   console.log(`${i[0] +1}:${el}`)
// }

//////////////////////////////////// Optional Chaining ////////////////////////////////////
/*
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// with optional chaining
console.log(restaurant.openingHours.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// array
const users = [{ name: 'drishti', email: 'drishti@gmail.com' }];
console.log(users[0]?.name ?? 'User array empty')
*/

//////////////////////////////////// Looping Objects object keys,Values & Entries ////////////////////////////////////
/*
// PROPERTY NAMES
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(restaurant.openingHours)) openStr += `${day}, `;

console.log(openStr);

// PROPERTY VALUES
const Values = Object.values(restaurant.openingHours);
console.log(Values);

// entire object
const entries = Object.entries(restaurant.openingHours);
for (const [key,{open,close}] of entries)
  console.log(`On ${key} we open at ${open} and close at ${close}`);
*/

//////////////////////////////////// Coding Challenge-2 ////////////////////////////////////
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// 2.
const odds = Object.values(game.odds);
let avg = 0;
for (const odd of odds) avg += odd;
console.log(avg)
avg /= odds.length;
console.log(avg);

// 3.
for(const [team,odd] of Object.entries(game.odds)){
  const teamStr = team === 'x' ? 'draw' :`victory ${game[team]}`
  console.log(`Odd of ${teamStr} ${odd}`)
}
*/

//////////////////////////////////// SETS ////////////////////////////////////
/*
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);

console.log(new Set('Jonas'));

console.log(orderSet.size);

console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
console.log(orderSet);

// orderSet.clear()
console.log(orderSet);

for (const order of orderSet) console.log(order);

const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
);
console.log(new Set('drishtikirodiwal').size)
*/

//////////////////////////////////// MAPS ////////////////////////////////////
/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon,Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We r open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'))
rest.delete(2)
rest.set([1,2],'Test')
rest.set(document.querySelector('h1'),'Heading')
console.log(rest)
console.log(rest.size)
// rest.clear

console.log(rest.get([1,2]))
*/

//////////////////////////////////// MAPS ITERATION ////////////////////////////////////
/*
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'try again'],
]);
console.log(question);

// convert object to map
console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

// quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Option ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(answer === question.get('correct')));

// convert map to array
console.log(...question)
console.log(question.entries())
console.log(...question.keys())
console.log(...question.values())
*/

//////////////////////////////////// Coding Challenge-3 ////////////////////////////////////
/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔄 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔄 Substitution'],
  [64, '🔶 Yellow Card'],
  [69, '🔴 Red card'],
  [70, '🔄 Substitution'],
  [72, '🔄 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow Card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);

// 3.
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
*/

//////////////////////////////////// STRINGS ////////////////////////////////////
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1,-1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('gungun'));
console.log(typeof new String('gungun'));
console.log(typeof new String('gungun').slice(1));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fix capitalization in name
const passenger = 'gunGun';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// comparing email
const email = 'hello@abc.com';
const loginEmail = '  Hello@Abc.Com \n';

const lowerEmail = loginEmail.toLowerCase()
const trimmedEmail = lowerEmail.trim()
console.log(trimmedEmail)

const normalizedEmail = loginEmail.toLowerCase().trim()
console.log(normalizedEmail)

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',','.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!'
console.log(announcement.replaceAll('door','gate'))
console.log(announcement.replace(/door/g,'gate'))

const plane = 'Airbus A320neo'
console.log(plane.includes('A320'))
console.log(plane.includes('Boeing'))
console.log(plane.startsWith('Air'))

if(plane.startsWith('Airbus') && plane.endsWith('neo'))
console.log('Part of the new airbus family')

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun'))
    console.log('You are not allowed on board');
  else console.log('Welcome aboard!');
};
checkBaggage('Ihave a laptop, some Food and a pocket Knife');
checkBaggage('socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// split and join
console.log('a+very+nice+string'.split('+'));
console.log('Drishti Kirodiwal'.split(' '));

const [firstName, lastName] = 'Drishti Kirodiwal'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0],n[0].toUpperCase()))
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('drishti kirodiwal');

// padding
const msg = 'Go to gate 23!';
console.log(msg.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(43378637982973939));
console.log(maskCreditCard('12345678900987654321'));

// repeat
const msg2 = 'Bad weather... All departures Delayed... ';
console.log(msg2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
*/

//////////////////////////////////// Coding Challenge-4 ////////////////////////////////////
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const names = text.split('\n');
  for (const [i,row] of names.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i+1)}`);
  }
});
*/

//////////////////////////////////// String Method Practice ////////////////////////////////////
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${from.slice(0, 3).toLocaleUpperCase()} to ${to
    .slice(0, 3)
    .toLocaleUpperCase()} (${time.replace(':', 'h')})`.padStart(44);
  console.log(output);
}
