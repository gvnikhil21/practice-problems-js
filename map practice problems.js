// 1 - store the die result and no. of occurrences of result in map
{
    let dieMap = new Map();
    let count = 0;
    for (let num = 1; num <= 6; num++)
        dieMap.set(num, 0);
    while (count != 10) {
        let dieNo = Math.floor(Math.random() * 6) + 1;
        dieMap.set(dieNo, Number(dieMap.get(dieNo)) + 1);
        count = dieMap.get(dieNo);
    }
    let maxCount = Math.max.apply(null, Array.from(dieMap.values()));
    let minCount = Math.min.apply(null, Array.from(dieMap.values()));
    console.log(`number that reached max times: ${Array.from(dieMap.entries()).filter(k => k[1] == maxCount)[0][0]}`);
    console.log(`number that reached min times: ${Array.from(dieMap.entries()).filter(k => k[1] == minCount)[0][0]}`);
}

// 2 - generate birth months of 50 individuals and find birthdays in same month
{
    let monthMap = new Map();
    for (let i = 1; i <= 12; i++)
        monthMap.set(i, 0);
    for (let individual = 1; individual <= 50; individual++) {
        let monthNo = Math.floor(Math.random() * 12) + 1;
        monthMap.set(monthNo, monthMap.get(monthNo) + 1);
    }
    for (let [month, count] of monthMap.entries())
        console.log(`no. of individuals in the month: ${month} is : ${count}`);
}