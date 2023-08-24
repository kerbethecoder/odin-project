console.log(`Let's go!`);

function add7(num) {
  return num + 7;
}
console.log(add7(1));

function multiply(a, b) {
  return a * b;
}
console.log(multiply(1, 2));

function capitalize(str) {
  let lowered = str.toLowerCase();
  const result = lowered.charAt(0);
  return result.toUpperCase() + lowered.slice(1);
}
console.log(capitalize('eYosSW'));

function lastLetter(str) {
  return str.slice(str.length - 1, str.length);
}
console.log(lastLetter('baby'));
