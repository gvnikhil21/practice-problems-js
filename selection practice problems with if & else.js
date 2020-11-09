// 1- read 5 random three digit number and find max and min
{
    let randomThreeDigitNo = 0;
    let count = 0;
    let max = Number.MIN_VALUE;
    let min = Number.MAX_VALUE;
    for (; count < 5; count++) {
        randomThreeDigitNo = Math.floor(Math.random() * 900) + 100;
        max = Math.max(max, randomThreeDigitNo);
        min = Math.min(min, randomThreeDigitNo);
    }
    console.log("max value: " + max + ", min value: " + min);
}

// 2 - read day and month from command line and print true if between march-20 & june-20, otherwise false
{
    const prompt = require('prompt-sync')();
    console.log("\n");
    let day = prompt("please enter day number: ");
    let month = prompt("please enter month number: ");
    let isInRange;
    if ((month == 3 && day >= 20 && day <= 31) || (month == 6 && day >= 1 && day <= 20) || (month == 4 && day >= 1 && day <= 30) || (month == 5 && day >= 1 && day <= 31))
        isInRange = true;
    else
        isInRange = false;
    console.log("is month and day in range: " + isInRange);
}

// 3 - given year find leap year or not
{
    const prompt = require('prompt-sync')();
    console.log("\n");
    let year = prompt("please enter the year: ");
    if (year >= 1000 && year <= 9999) {
        if (year % 4 == 0) {
            if (year % 100 == 0) {
                if (year % 400 == 0)
                    console.log(year + " is a leap year");
                else
                    console.log(year + " is not a leap year");
            }
            else
                console.log(year + " is a leap year");
        }
        else
            console.log(year + " is not a leap year");
    }
    else
        console.log("Invalid year enter! Enter a four digit year");
}

// 4 - toss a coin and print heads or tails
{
    console.log("\n");
    let coinFlip = Math.floor(Math.random() * 10) % 2;
    if (coinFlip == 1)
        console.log("it's HEADS!");
    else
        console.log("it's TAILS!");
}
