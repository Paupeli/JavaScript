'use strict';

let num1 = parseInt(prompt("Enter the first integer: "));
let num2 = parseInt(prompt("Enter the second integer: "));
let num3 = parseInt(prompt("Enter the third integer: "));

let sum = num1 + num2 + num3;
let product = num1 * num2 * num3;
let average = sum / 3;

document.body.innerHTML += `<p>Sum: ${sum}</p>`
document.body.innerHTML += `<p>Product: ${product}</p>`
document.body.innerHTML += `<p>Average: ${average}</p>`