// Big credit goes to Dominic R for this (https://github.com/jD2R). Without their solution I wouldn't have been able to make this one with JavaScript. 

// Allows the program to read the input.txt file
const fs = require("fs");

// Converts it into an array of strings
var text = fs.readFileSync("./input.txt").toString("utf-8");
// Gets rid of all the special characters
let textByLine = text.split("\r\n");

// All this does is create an array of arrays to seperate each elf's inventory. Each array inside one main array cooresponds to each elf's invertory and number of calories.
const arrayOfNumbers = [[]];

// Creates a for loop that will loop through the array of arrays and find anything that has an empty string and creates a new array
textByLine.forEach(textLine => {
    // If the array has an empty array, push in a new array
    if (textLine === '') {
        // Adds a new array to the arrayOfNumbers array.
        arrayOfNumbers.push([])
    } else {
        // Otherwise, keep adding in a new element into the array (and convert it into a string)
        arrayOfNumbers[arrayOfNumbers.length - 1].push(parseInt(textLine))
    }
})

// Creates a sum of arrays so that we can add up all the arrays within the array (I'm using array a lot lol)
let sumsOfArray = [];

// This sumsOfArrays is a 2D array so we need to make 2 for loops inside each other
for (let i = 0; i < arrayOfNumbers.length; i++) {
    // Honestly there's no negative numbers in the array so setting it equal to zero doesn't matter, but if there were negative numbers in the array, it would be a problem. But this just intializes the sum to be zero.
    let sum = 0;
    for (let j = 0; j < arrayOfNumbers[i].length; j++) {
        // Adds to the sum whatever the numbers are in each array
        sum += arrayOfNumbers[i][j];
    }
    // adds an array of the sum of all the other arrays
    sumsOfArray.push([sum])
}

// Allows us to try to find the max number in the new sumsOfArrays array. This initializes the max to be zero because once again, no negative numbers.
let max = 0;

// Makes a for loop that loops through the sumOfArrays array and outputs the max number
for (let i = 0; i < sumsOfArray.length; i++) {
  if (sumsOfArray[i][0] > max) {
    max = sumsOfArray[i][0];
  }
}

// Displays the max number which gives us the answer to which elf has the most calories
console.log("The maximum value is: " + max);

// For part 2 I just consoled the sumOfArrays and sorted them, then took the biggest three and added it on a calculator.