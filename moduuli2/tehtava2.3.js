'use strict';

let dogNames = [];

for (let i = 0; i < 6; i++) {
    let dogName = prompt(`Enter the name of the dog ${i + 1}: `);
    dogNames.push(dogName);
}

dogNames.sort().reverse();

let ul = document.getElementById("dogList");

dogNames.forEach(function(dog) {
  let li = document.createElement("li");
  li.textContent = dog;
  ul.appendChild(li);
});