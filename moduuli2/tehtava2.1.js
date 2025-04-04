'use strict';

let numbers = []

for (let i = 0; i < 5; i++) {
  let number = parseFloat(prompt(`Enter number ${i + 1}: `));
  numbers.push(number);
}

console.log("The numbers in reverse order are: ");
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}