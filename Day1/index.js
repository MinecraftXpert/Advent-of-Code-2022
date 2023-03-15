// Big credit goes to Dominic R. for this. I found their github that gave the solution but I wanted it in JavaScript so I converted it to JavaScript and added some things myself. 

const fs = require("fs");

var text = fs.readFileSync("./input.txt").toString("utf-8");
let textByLine = text.split("\r\n");

const arrayOfNumbers = [[]];

textByLine.forEach(textLine => {
    if (textLine === '') {
        arrayOfNumbers.push([])
    } else {
        arrayOfNumbers[arrayOfNumbers.length - 1].push(parseInt(textLine))
    }
})

let sumsOfArray = [];

for (let i = 0; i < arrayOfNumbers.length; i++) {
    let sum = 0;
    for (let j = 0; j < arrayOfNumbers[i].length; j++) {
        sum += arrayOfNumbers[i][j];
    }
    sumsOfArray.push([sum])
}

let max = 0;

for (let i = 0; i < sumsOfArray.length; i++) {
  if (sumsOfArray[i][0] > max) {
    max = sumsOfArray[i][0];
  }
}

console.log("The maximum value is: " + max);