'use strict';

let numbers = [];

while (true) {
  let input = parseFloat(prompt("Enter a number or enter 0 to stop: "));
  if (input === 0) {
    break;
  }
  numbers.push(input);
}

numbers.sort((a,b) => b - a);

console.log("Numbers in descending order: ");
for (let number of numbers) {
    console.log(number);
}
