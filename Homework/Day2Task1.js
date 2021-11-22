function findPrime(...numbers) {
    numbers.map(number => {
        let prime = findPrimeOrNot(number)
        console.log(prime ?  `${number} sayısı asal bir sayıdır` : `${number} sayısı asal bir sayı değildir`);
    })
}
console.log("-".repeat(85));
findPrime(5,1,3,6);


function  findFriendNumber(a,b) {
    let aNum = 0, bNum = 0
    for (let i = 0; i < a; i++) {
        if(a % i == 0)
        aNum = aNum + i
    }
    for (let i = 0; i < b; i++) {
        if(b % i == 0)
        bNum = bNum + i
    }
    let isFriend = (aNum == b && bNum == a)
    console.log(isFriend ? `${a} ve ${b} sayıları arkadaş sayıdır` : `${a} ve ${b} sayıları arkadaş sayı değildir`)
}
console.log("-".repeat(85));
findFriendNumber(220,284);
findFriendNumber(300,584);


function findPerfectNumbers() {
    let perfetcNumbers = []
    for (let i = 0; i <= 1000; i++) {
        let dividers = [i]
        for (let j= 0; j < i; j++) {
            if(i % j == 0)
            dividers.push(j)
        }
        if(dividers.reduce((x,y) => x + y, 0) / 2 == i)
        perfetcNumbers.push(i)
    }
    console.log(`1000'e kadar olan mükemmel sayılar: ${perfetcNumbers}`)
}
console.log("-".repeat(85));
findPerfectNumbers();


function findPrimeNumbers() {
    let primes = []
    for (let i = 0; i <= 1000; i++) {
        if(findPrimeOrNot(i))
        primes.push(i)
    }
    console.log(`1000'e kadar olan asal sayılar: ${primes}`)
}

console.log("-".repeat(85));
findPrimeNumbers();


function findPrimeOrNot(number) {
    let prime = true
    for (let i = 2; i < number; i++) {
        if(number % i == 0)
        prime = false;
    }
    return prime
}

    

