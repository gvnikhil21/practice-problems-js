// 1 - read n from user and print powers of 2 less than n
{
    let prompt = require('prompt-sync')();
    let n = Number(prompt("Enter the value of n: "));
    let power;
    console.log(`Powers of 2 less than or equal to ${n}: `);
    let num = 0;
    while (Math.pow(2, num) <= n) {
        power = Math.pow(2, num);
        console.log(`${power}`);
        num++;
    }
}

// 2 - find the magic number
{
    let prompt = require('prompt-sync')();
    let magicNumber = 50;
    console.log("There is a magic number between 1 to 100! Can you guess it?");
    let n = Number(prompt("Think of a number between 1 to 100: "));
    while (n != magicNumber) {
        if (n < magicNumber)
            n = Number(prompt("Magic number is greater than yours! Think of greater number: "));
        if (n > magicNumber)
            n = Number(prompt("Magic number is smaller than yours! Think of smaller number: "));
    }
    console.log("You have guessed the magic number! Congrats");
}

// 3 - flip coint till either heads or tails come 11 times
{
    let head = 0;
    let headCount = 0;
    let tailCount = 0;
    while (headCount != 11 && tailCount != 11) {
        let flip = Math.floor(Math.random() * 10) % 2;
        if (flip == head)
            headCount++;
        else
            tailCount++;
    }
    if (tailCount == 11)
        console.log("Winner is tails");
    else
        console.log("Winner is heads");
}

// 4 - program for gambler
{
    let base = 100;
    let win = 0;
    let betCount = 0;
    let winCount = 0;
    while (base != 0 && base != 200) {
        betCount++;
        let gamble = Math.floor(Math.random() * 10) % 2;
        if (gamble == win) {
            base += 1;
            winCount++;
        }
        else
            base -= 1;
    }
    console.log(`gambler gamble statistics:`);
    console.log(`final money: ${base}`);
    console.log(`no. of bets: ${betCount}`);
    console.log(`no. of bets won: ${winCount}`);
}