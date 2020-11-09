// 1 - get random single digit
let singleDigit = Math.floor(Math.random() * 10);
console.log("Single digit: " + singleDigit);

// 2 - get dice number between 1 and 6
let diceNo = Math.floor(Math.random() * 6) + 1;
console.log("\nDice no: " + diceNo);

// 3 - Add two random dice number
let diceNoOne = Math.floor(Math.random() * 6) + 1;
let diceNoTwo = Math.floor(Math.random() * 6) + 1;
let sumOfDiceNo = diceNoOne + diceNoTwo;
console.log("\nDiceOne: " + diceNoOne + ", DiceTwo: " + diceNoTwo)
console.log("Sum of diceOne and diceTwo: " + sumOfDiceNo);

// (4 - reads 5 random 2 digit values, find sum and average
let randomTwoDigitNo = 0;
let sum = avg = 0;
let count = 0;
for (; count < 5; count++) {
    randomTwoDigitNo = Math.floor(Math.random() * 100);
    sum += randomTwoDigitNo;
}
avg = sum / count;
console.log("\nSum is: " + sum);
console.log("Average is: " + avg);

// 5 - Unit conversion
let inch = 42;
let feet = inch / 12;
console.log("\n42 in = " + feet + " ft");

let length = 60;
let breadth = 40;
let areaInFeet = length * breadth;
let areaInMeters = areaInFeet * 0.092903;
console.log("\nArea of one rectangular plot in meters: " + areaInMeters);
let areaInAcres = areaInMeters * 0.000247105;
console.log("Area of 25 such rectangular plot in acres: " + 25 * areaInAcres);
