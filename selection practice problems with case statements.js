// 1 - read single digit and write in words
{
    const prompt = require('prompt-sync')();
    let singleDigitNo = Number(prompt("Enter a single digit number :"));
    let digitInWords;
    switch (singleDigitNo) {
        case 0:
            digitInWords = "zero";
            break;
        case 1:
            digitInWords = "one";
            break;
        case 2:
            digitInWords = "two";
            break;
        case 3:
            digitInWords = "three";
            break;
        case 4:
            digitInWords = "four";
            break;
        case 5:
            digitInWords = "five";
            break;
        case 6:
            digitInWords = "six";
            break;
        case 7:
            digitInWords = "seven";
            break;
        case 8:
            digitInWords = "eight";
            break;
        case 9:
            digitInWords = "nine";
            break;
        default:
            digitInWords = "Invalid!Enter single digit number";
    }
    console.log(digitInWords);
}

//2 read number and print weekDay
{
    const prompt = require('prompt-sync')();
    let number = Number(prompt("Enter number between 0 & 6: "));
    let weekDay;
    switch (number) {
        case 0:
            weekDay = "Sunday";
            break;
        case 1:
            weekDay = "Monday";
            break;
        case 2:
            weekDay = "Tuesday";
            break;
        case 3:
            weekDay = "Wednesday";
            break;
        case 4:
            weekDay = "Thursday";
            break;
        case 5:
            weekDay = "Friday";
            break;
        case 6:
            weekDay = "Saturday";
            break;
        default:
            weekDay = "Invalid! Enter number between 0 & 6";
    }
    console.log(weekDay);
}

//3 rwad number and print position units/tens/hundreds/thousands/ten-thousands
{
    const prompt = require('prompt-sync')();
    let number = Number(prompt("Enter a number: "));
    let position;
    switch (number) {
        case 1:
            position = "units";
            break;
        case 10:
            position = "tens";
            break;
        case 100:
            position = "hundreds";
            break;
        case 1000:
            position = "thousands";
            break;
        case 10000:
            position = "ten-thousands";
            break;
        default:
            position = "Invalid!Enter valid number like 1/10/100/1000/10000";
    }
    console.log(position);
}

//4 Unit Conversions
{
    const prompt = require('prompt-sync')();
    let value = prompt("Enter the value :");
    let conversionType = Math.floor(Math.random() * 10) % 4 + 1;
    let convertedValue = 0;
    switch (conversionType) {
        case 1:
            convertedValue = value * 12;
            console.log("Feet to inch:" + convertedValue);
            break;
        case 2:
            convertedValue = value / 12;
            console.log("Inch to feet: " + convertedValue);
            break;
        case 3:
            convertedValue = value * 0.3048;
            console.log("Feet to meter: " + convertedValue);
            break;
        case 4:
            convertedValue = value / 0.3048;
            console.log("Meter to feet: " + convertedValue);
    }
}
