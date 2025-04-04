'use strict';

function concat(arr) {
    let result = '';

    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result
}

let names = ["Pekka", "Matti", "Simo", "Jussi", "Pena"];
let concatenatedString = concat(names)

document.getElementById("result").innerText = concatenatedString;