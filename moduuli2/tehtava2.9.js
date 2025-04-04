'use strict';

function even(numbers) {
  let evenNumbers = numbers.filter(number => number % 2 === 0);
  return evenNumbers;
}

let originalArray = [3, 6, 9, 13, 24, 33, 46];
let newArray = even(originalArray);

console.log("Original Array: ", originalArray);
console.log("New Array: ", newArray);