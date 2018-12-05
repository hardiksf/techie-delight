const binaryArray = [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1];
const length = binaryArray.length;
let previousZeroIndex = -1;
let maxCount = 0;
let maxIndex = 0;

let currentTotalOfOnes = 0;
for (let i = 0; i < length; i++) {
    if (binaryArray[i] === 1) {
        currentTotalOfOnes++;
    } else {
        currentTotalOfOnes = i - previousZeroIndex;
        previousZeroIndex = i;
    }
    if (currentTotalOfOnes > maxCount) {
        maxCount = currentTotalOfOnes;
        maxIndex = previousZeroIndex;
    }
}

console.log(maxIndex);