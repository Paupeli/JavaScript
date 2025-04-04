'use strict';

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function main() {
  const rolls = [];

  let result;
  do {
    result = rollDice();
    rolls.push(result);
  } while (result !== 6);

  const ul = document.createElement("ul");

  rolls.forEach(roll => {
    const li = document.createElement("li");
    li.textContent = roll;
    ul.appendChild(li);
  });

  document.body.appendChild(ul);
}
main();
