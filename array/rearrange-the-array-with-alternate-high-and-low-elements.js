const numbers = [9, 6, 8, 3, 7];
const length = numbers.length;

for (let i = 1; i < length; i = i + 2) {
    if (numbers[i - 1] > numbers[i]) {
        [numbers[i - 1], numbers[i]] = [numbers[i], numbers[i - 1]];
    }
    if (numbers[i + 1] > numbers[i]) {
        [numbers[i + 1], numbers[i]] = [numbers[i], numbers[i + 1]];
    }
}

console.log(numbers);