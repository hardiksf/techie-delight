const numbers = [2, 1, -5, -4, -1, -1, 3, -3, 4, -1];
let maxSum = numbers[0];
let maxSumAtThisIndex = numbers[0];
const length = numbers.length;
let startingIndex = 0;

for (let i = 1; i < length; i++) {
    maxSumAtThisIndex = maxSumAtThisIndex + numbers[i];
    if (numbers[i] > maxSumAtThisIndex) {
        maxSumAtThisIndex = numbers[i];
        startingIndex = i;
    }
    maxSum = Math.max(maxSum, maxSumAtThisIndex);
}

for (let i = 0; i < startingIndex; i++) {
    maxSumAtThisIndex = maxSumAtThisIndex + numbers[i];
    if (numbers[i] > maxSumAtThisIndex) {
        console.log(maxSum, startingIndex);
        return;
    }
    maxSum = Math.max(maxSum, maxSumAtThisIndex);
}

console.log(maxSum, startingIndex);