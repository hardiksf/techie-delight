const numbers = [1, 7, 9, 5, 1, 3, 5];
const length = numbers.length;
let largerElement = numbers[length - 1];
let mainDifference = 0
for (let i = length - 2; i > -1; i--) {
    const currentElement = numbers[i];
    currentDifference = largerElement - currentElement;
    if (currentElement > largerElement) {
        largerElement = currentElement;
    }
    mainDifference = Math.max(mainDifference, currentDifference);

}

console.log(mainDifference);