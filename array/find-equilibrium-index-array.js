const numbers = [0, -3, 5, -4, -2, 3, 1, 0];
const length = numbers.length;
for (let i = 0; i < length; i++) {
    let leftSum = 0;
    let leftIndex = i;
    while (leftIndex > 0) {
        leftSum = leftSum + numbers[leftIndex - 1];
        leftIndex--;
    }
    let rightSum = 0;
    let rightIndex = i;
    while (rightIndex < length - 1) {
        rightSum = rightSum + numbers[rightIndex + 1];
        rightIndex++;
    }

    if (leftSum === rightSum) {
        console.log(i);
    }
}