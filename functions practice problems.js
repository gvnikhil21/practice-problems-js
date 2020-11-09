// 1 - find degF or degC based on conversion selection
function degreeConversion() {
    let prompt = require('prompt-sync')();
    let choice = Number(prompt("press 1 to get degC or 2 to get degF: "));
    switch (choice) {
        case 1:
            let degF = Number(prompt("Enter degF(between 32 and 212) to convert to degC: "));
            console.log(getDegC(degF));
            break;
        case 2:
            let degC = Number(prompt("Enter degC(between 0 and 32) to convert to degF: "));
            console.log(getDegF(degC));
            break;
        default:
            console.log("Invalid choice!");
    }
}
function getDegC(degF) {
    let degC = (degF - 32) * (5 / 9);
    return degC;
}

function getDegF(degC) {
    let degF = (degC * 9 / 5) + 32;
    return degF;
}

degreeConversion();

// 2 - check if two numbers are pallindrome
function checkForPallindrome() {
    let prompt = require('prompt-sync')();
    let numOne = Number(prompt("Enter number one: "));
    let numTwo = Number(prompt("Enter number two: "));
    let arePallindrome = checkPallindrome(numOne, numTwo);

    if (arePallindrome)
        console.log(`the two numbers ${numOne} and ${numTwo} are pallindrome`);
    else
        console.log(`the two numbers ${numOne} and ${numTwo} are not pallindrome`);
}

function checkPallindrome(numOne, numTwo) {
    let reverseNumOne = 0;
    let utilNumber = numOne;
    let remainder;
    while (utilNumber > 0) {
        remainder = utilNumber % 10;
        reverseNumOne = reverseNumOne * 10 + remainder;
        utilNumber = Math.floor(utilNumber / 10);
    }
    if (numTwo == reverseNumOne)
        return true;
    else
        return false;
}

checkForPallindrome();

// 3 - read number from user and check prime or not, if prime check for pallindrome
function checkPrimeAndPallindrome() {
    let prompt = require('prompt-sync')();
    let n = Number(prompt("Enter a number: "));
    let isPrime = checkPrime(n);
    if (isPrime) {
        console.log(`The number ${n} is prime, checking prime for its pallindrome`);
        let pallindrome = getPallindrome(n);
        console.log(`The pallindrome of the number ${n} is: ${pallindrome}`);
        let isPallindromPrime = checkPrime(pallindrome);
        if (isPallindromPrime)
            console.log(`The pallindrome of ${n}: ${pallindrome} is prime`);
        else
            console.log(`The pallindrome of ${n}: ${pallindrome} is not prime`);
    }
    else
        console.log(`The number ${n} is not prime, thus, not checking prime for its pallindrome`);
}

function checkPrime(num) {
    if (num == 1)
        return false;
    else {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime)
            return true;
        else
            return false;
    }
}

function getPallindrome(num) {
    let reverseNum = 0;
    let remainder;
    while (num > 0) {
        remainder = num % 10;
        reverseNum = reverseNum * 10 + remainder;
        num = Math.floor(num / 10);
    }
    return reverseNum;
}

checkPrimeAndPallindrome();