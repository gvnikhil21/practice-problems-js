// 1 - read a single digit and write in word
{
    let prompt = require('prompt-sync')();
    let singleDigit = prompt("Enter single digit number: ");
    let digitInWord;
    if (singleDigit == 0)
        digitInWord = "zero";
    else if (singleDigit == 1)
        digitInWord = "one";
    else if (singleDigit == 2)
        digitInWord = "two";
    else if (singleDigit == 3)
        digitInWord = "three";
    else if (singleDigit == 4)
        digitInWord = "four";
    else if (singleDigit == 5)
        digitInWord = "five";
    else if (singleDigit == 6)
        digitInWord = "six";
    else if (singleDigit == 7)
        digitInWord = "seven";
    else if (singleDigit == 8)
        digitInWord = "eight";
    else if (singleDigit == 9)
        digitInWord = "nine";
    else
        digitInWord = "Invalid! Enter single digit value";
    if (singleDigit >= 0 && singleDigit <= 9)
        console.log(`single digit number ${singleDigit} in words is ${digitInWord}`);
    else
        console.log(digitInWord);
}


// 2 - read a number and display weekDay
{
    let prompt = require('prompt-sync')();
    let weekDay;
    console.log("\n");
    let number = prompt("Enter number between 0 & 7: ");
    if (number == 0)
        weekDay = "Sunday";
    else if (number == 1)
        weekDay = "Monday";
    else if (number == 2)
        weekDay = "Tuesday";
    else if (number == 3)
        weekDay = "Wednesday";
    else if (number == 4)
        weekDay = "Thursday";
    else if (number == 5)
        weekDay = "Friday";
    else if (number == 6)
        weekDay = "Saturday";
    else
        weekDay = "Invalid! Enter valid number between 0 & 7";
    if (number >= 0 && number <= 6)
        console.log(`it's ${weekDay}`);
    else
        console.log(weekDay);
}

// 3 - read and dsiplay unit,tens,hundreds,thousands
{
    let prompt = require('prompt-sync')();
    console.log("\n");
    let number = prompt("Enter a number :");
    if (number == 1)
        console.log("units");
    else if (number == 10)
        console.log("tens");
    else if (number == 100)
        console.log("hundreds");
    else if (number == 1000)
        console.log("thousands");
    else if (number == 10000)
        console.log("ten-thousands");
    else
        console.log("Invalid! Enter proper number(1,10,100,1000,10000)")
}

// 4 - Arithmetic operation and find max and min
{
    let prompt = require('prompt-sync')();
    console.log("\n");
    let numOne = Number(prompt("Enter number one: "));
    let numTwo = Number(prompt("Enter number two: "));
    let numThree = Number(prompt("Enter number three: "));

    let opOne = numOne + numTwo * numThree;
    let opTwo = numOne % numTwo + numThree;
    let opThree = numThree + numOne / numTwo;
    let opFour = numOne * numTwo + numThree;

    let max = Math.max(opOne, Math.max(opTwo, Math.max(opThree, opFour)));
    let min = Math.min(opOne, Math.min(opTwo, Math.min(opThree, opFour)));
    console.log("Max is : " + max);
    console.log("Min is: " + min);

}