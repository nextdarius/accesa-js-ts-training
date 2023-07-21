// Variables
let name = 'Maria';
let age = 20;
let isEmployed = true;
let salary = null;
let address = undefined;
let person = { name: 'John', age: 20, isEmployed: true };

var a = 'var keyword';
const b = 'const keyword';
let c = 'let keyword';

// Operators and expressions
let sum = 5 + 3;
let difference = 10 - 4;
let product = 2 * 6;
let quotient = 8 / 2;
let remainder = 7 % 3;

// Comparison operators
let isEqual = 5 === 5;
let isNotEqual = 10 !== 5;
let isGreater = 8 > 3;
let isLess = 2 < 7;

// Logical operators
let result = true && false;
let outcome = true || false;
let isNegated = !true;

// Assignment operators
let count = 0;
count += 1;
count -= 1;
count *= 2;
count /= 2;

// Control flow

if (true) {
  a = 1;
  c = 2;
  var d = 'var in if block';
  let e = 'let in if block';
}

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// Equality
console.log('5 == 5', 5 == 5);
console.log("5 == '5'", 5 == '5');
console.log("5 === '5'", 5 === '5');
var something;
console.log('something === null', something === null);
console.log('something == null', something == null);

// Classes
class Robot {
  constructor(name) {
    this.name = name;
  }

  present() {
    console.log('Starting...');
    console.log(this.name + ' is ON beep boop!');
  }
}

class Drone extends Robot {
  constructor(name, speed) {
    super(name);
    this.speed = speed;
  }

  fly() {
    console.log('Flying with a speed of ' + speed);
  }
}
