'use strict';

let studentName = prompt("Enter you name: ");
let houseNumber = Math.floor(Math.random() * 4) +1;

  let house;
  if (houseNumber === 1) {
    house = "Gryffindor";
  } else if (houseNumber === 2) {
    house = "Slytherin";
  } else if (houseNumber === 3) {
    house = "Hufflepuff";
  } else if (houseNumber === 4) {
    house = "Ravenclaw";
  }

  document.getElementById("result").innerHTML = `${studentName}, you are in ${house}!`;