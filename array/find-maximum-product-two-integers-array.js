const numbers = [-10, -3, 5, 6, -2];
//sort => O(n log(n))
numbers.sort((a, b) => a - b);
const productOfFirstTwoElements = numbers[0] * numbers[1];
const productOfLastTwoElements = numbers[numbers.length - 1] * numbers[numbers.length - 2];
console.log(Math.max(productOfFirstTwoElements, productOfLastTwoElements));



//solution 2
//O(n)
const numbers2 = [-10, -3, 5, 6, -2];
let maxOne = Number.MIN_SAFE_INTEGER;
let maxTwo = Number.MIN_SAFE_INTEGER;
let minOne = Number.MAX_SAFE_INTEGER;
let minTwo = Number.MAX_SAFE_INTEGER;
const length = numbers2.length;
for (let i = 0; i < length; i++) {
    const currentNumber = numbers2[i];
    if (currentNumber > maxOne) {
        maxTwo = maxOne;
        maxOne = currentNumber;
    } else if (currentNumber > maxTwo) {
        maxTwo = currentNumber;
    }

    if (currentNumber < minOne) {
        minTwo = minOne;
        minOne = currentNumber;
    } else if (currentNumber < minTwo) {
        minTwo = currentNumber;
    }
}
console.log(Math.max(maxOne * maxTwo, minOne * minTwo));