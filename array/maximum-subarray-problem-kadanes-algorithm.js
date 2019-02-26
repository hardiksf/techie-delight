const numbers = [-2, 1, -3, 4, 1, -2, -1, -5, -4];
let maximumSumSoFar = numbers[0];
let maximumSumAtThisIndex = numbers[0];
const length = numbers.length;
for (let i = 1; i < length; i++) {
    maximumSumAtThisIndex = maximumSumAtThisIndex + numbers[i];
    maximumSumAtThisIndex = Math.max(maximumSumAtThisIndex, numbers[i]);
    maximumSumSoFar = Math.max(maximumSumSoFar, maximumSumAtThisIndex);
}
console.log(maximumSumSoFar);