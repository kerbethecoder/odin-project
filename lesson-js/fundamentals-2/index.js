console.log(`Let's Start!`);
console.log('Exercise #1');
function troubleshooting() {
  const a = 1;
  const b = 1;
  let result;
  // Edit between these lines
  // =================================
  result = a + b;
  // =================================
  return result;
}
console.log(troubleshooting());

console.log('');
console.log('Exercise #2');
// const number = Number(prompt('enter a number'));
function numberChecker() {
  if (number === 6) {
    return true;
  } else {
    return false;
  }
}
// console.log(numberChecker()); //true

console.log('');
console.log('Exercise #3');
const a = 1 + 8;
const b = 22 * 3;
const c = 5 % 4;
const d = a - 17;
const e = a + b + c + d;
console.log(a, b, c, d, e);

console.log('');
console.log('Exercise #4');
const FIRST_NAME = 'Kerby';
const LAST_NAME = 'Cantos';
const THIS_YEAR = 2023;
const BIRTH_YEAR = 2001;
const greeting = `Konbanwa! ${FIRST_NAME} ${LAST_NAME} desu! And I'm ${
  THIS_YEAR - BIRTH_YEAR
} years old. Douzouyoroshiku!`;

console.log(greeting);
