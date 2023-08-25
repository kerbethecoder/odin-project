// TODO: write a program that takes user's input and prints numbers from 1 - (user input)
// For multiples of 3, replace word by FIZZ
// For multiple of 5, replace word by BUZZ
// For multiples of both 3 and 5, replace word by FIZZ BUZZ

// - User input a number
// - Loops from 1 - (number input)
// - If current number is divisible by 3 -> 'FIZZ'
// - If current number is divisible by 5 -> 'BUZZ'
// - If current number is divisible by 3 and 5 -> 'FIZZ BUZZ'
// - Else print the current number

const userInput = parseInt(prompt('Enter a positive number: '));

for (let i = 1; i <= userInput; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FIZZ BUZZ');
  } else if (i % 3 === 0) {
    console.log('FIZZ');
  } else if (i % 5 === 0) {
    console.log('BUZZ');
  } else {
    console.log(i);
  }
}
