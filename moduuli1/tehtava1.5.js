'use strict';

function checkLeapYear() {
      const year = document.getElementById("yearInput").value
      const resultElement = document.getElementById("result");

      if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        resultElement.textContent = year + " is a leap year.";
      } else {
        resultElement.textContent = +year + " is not a leap year.";
      }
    }