// 1 - read n from user and print powers of 2 less than n
{
    let prompt = require('prompt-sync')();
    let n = Number(prompt("Enter the value of n: "));
    let power;
    console.log(`Powers of 2 less than ${n}: `);
    for (let num = 0; Math.pow(2, num) <= n; num++) {
        power = Math.pow(2, num);
        console.log(`${power}`);
    }
}

// 2 - read n from user and print nth harmonic number
{
    let prompt = require('prompt-sync')();
    let n = Number(prompt("Enter the value of n: "));
    let harmonicNo = 0;
    for (let num = 1; num <= n; num++)
        harmonicNo = harmonicNo + 1 / num;
    console.log(`nth harmonic num is: ${harmonicNo}`);
}

// 3 - read n from user and determine prime or not
{
    let prompt = require('prompt-sync')();
    let n = Number(prompt("Enter number to check prime: "));
    if (n == 1)
        console.log(`number ${n} is not prime`);
    else {
        let isPrime = true;
        for (let num = 2; num <= Math.sqrt(n); num++) {
            if (n % num == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime)
            console.log(`number ${n} is prime`);
        else
            console.log(`number ${n} is not prime`);
    }
}

// 4 - print prime numbers in a range
{
    let prompt = require('prompt-sync')();
    let start = Number(prompt("Enter the start value: "));
    let end = Number(prompt("Enter end value: "));
    console.log(`Prime numbers in the range ${start} and ${end} are: `);
    let countPrime = 0;
    for (let num = start; num <= end; num++) {
        let isPrime = true;
        if (num == 1)
            isPrime = false;
        else {
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) {
            countPrime++;
            console.log(num);
        }
    }
    if (countPrime == 0)
        console.log(`there are no prime numbers in the range ${start} and ${end}`);
}

// 5 - read n from user and print factorial of n
{
    let prompt = require('prompt-sync')();
    let n = Number(prompt("Enter the value of n: "));
    let factorial = 1;
    for (let num = 2; num <= n; num++)
        factorial *= num;
    console.log(`factorial of ${n} is: ${factorial}`);
}

// 6 - read n from user and compute factors of n using prime factorization
{
    let prompt = require('prompt-sync')();
    let n = Number(prompt("Enter the value of n: "));
    console.log(`Prime factors of number ${n} are: `);
    let countPrime = 0;
    for (let num = 1; num <= Math.sqrt(n); num++) {
        if (n % num == 0) {
            let isPrime = true;
            if (num == 1)
                isPrime = false;
            else {
                for (let i = 2; i <=Math.sqrt(num); i++) {
                    if (num % i == 0) {
                        isPrime = false;
                        break;
                    }
                }
            }
            if (isPrime) {
                countPrime++;
                console.log(`${num}`);
            }
        }
    }
    if (countPrime == 0)
        console.log(`There are no prime factors for the number ${n}`);
    else
        console.log(`There are ${countPrime} prime factors for the number ${n}`);
}