// 1 - store random numbers in an array and find second max and second min without sorting array
{
    let array = new Array();
    for (let count = 0; count < 10; count++)
        array.push(Math.floor(Math.random() * 900) + 100);
    console.log("Elements in tha array: " + array);
    let min = Math.min.apply(null, array);
    let secondMin = Math.min.apply(null, array.filter(num => num != min));
    console.log("Second minimum in the array is: " + secondMin);
    let max = Math.max.apply(null, array);
    let secondMax = Math.max.apply(null, array.filter(num => num != max));
    console.log("Second maximum in the array is: " + secondMax);

    // 2 - sort the above array and find 2nd largest and smallest
    let minSecond = array.sort()[1];
    let maxSecond = array.sort()[array.length - 2];
    console.log("Second minimum in the sorted array is: " + minSecond);
    console.log("Second maximum in the sorted array is: " + maxSecond);
}

// 3 - sotre prime factors of number into an array and print it
{
    let prompt = require('prompt-sync')();
    let n = Number(prompt("Enter the value of n: "));
    console.log(`Prime factors of number ${n} are: `);
    let primeFactorsArray = new Array();
    for (let num = 1; num <= Math.sqrt(n); num++) {
        if (n % num == 0) {
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
                primeFactorsArray.push(num);
            }
        }
    }
    if (primeFactorsArray.length == 0)
        console.log(`There are no prime factors for the number ${n}`);
    else {
        console.log(primeFactorsArray);
        console.log(`There are ${primeFactorsArray.length} prime factors for the number ${n}`);
    }
}

// 4 - program to find three intergers such that their sum is zero
{
    let prompt = require('prompt-sync')();
    let numArray = new Array();
    numArray.push(Number(prompt("enter the first number: ")));
    numArray.push(Number(prompt("enter the second number: ")));
    function sum(totalSum, num) {
        return totalSum + num;
    }
    console.log(`sum of two elements in array: ${numArray.reduce(sum, 0)}`);
    let numThird = 0 - numArray.reduce(sum, 0);
    numArray.push(numThird);
    console.log(`third element for the sum to be zero: ${numThird}`);
    console.log(`sum of three elements in array: ${numArray.reduce(sum, 0)}`);
}

// 5 - find and store the digits that are repeated twice in the range 0-100
{
    let array = new Array();
    for (let num = 10; num <= 100; num++) {
        if (checkPallindrome(num))
            array.push(num);
    }
    function checkPallindrome(numOne) {
        let reverseNumOne = 0;
        let utilNumber = numOne;
        let remainder;
        while (utilNumber > 0) {
            remainder = utilNumber % 10;
            reverseNumOne = reverseNumOne * 10 + remainder;
            utilNumber = Math.floor(utilNumber / 10);
        }
        if (numOne == reverseNumOne)
            return true;
        else
            return false;
    }
    console.log(`elements repeating twice: ${array}`);
}
