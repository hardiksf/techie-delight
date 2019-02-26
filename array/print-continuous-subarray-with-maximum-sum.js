const numbers = [-2, -1, -3, 4, -1, 2, -1, -5, -4];
let start = 0;
let end = 0;
let subStart = 0;
let subEnd = 0;
let maximumSumSoFar = numbers[0];
let maximumSumAtThisIndex = numbers[0];
const length = numbers.length;
for (let i = 1; i < length; i++) {
    maximumSumAtThisIndex = maximumSumAtThisIndex + numbers[i];
    if (maximumSumAtThisIndex > numbers[i]) {
        subEnd = i;
    } else {
        subStart = subEnd = i;
        maximumSumAtThisIndex = numbers[i];
    }

    if (maximumSumAtThisIndex > maximumSumSoFar) {
        start = subStart;
        end = subEnd;
    }

    maximumSumSoFar = Math.max(maximumSumSoFar, maximumSumAtThisIndex);
}
console.log(maximumSumSoFar, start, end);