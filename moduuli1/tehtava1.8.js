'use strict';

let startYear = parseInt(prompt("Enter the start year: "));
let endYear = parseInt(prompt("Enter the end year: "));

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

let ul = document.createElement("ul");

for (let year = startYear; year <= endYear; year++) {
  if (isLeapYear(year)) {
    let li = document.createElement("li");
    li.textContent = `${year}`;  // Convert number to string
    ul.appendChild(li);
  }
}

document.body.appendChild(ul);