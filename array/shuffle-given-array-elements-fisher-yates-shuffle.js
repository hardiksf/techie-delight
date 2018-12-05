const numbers = [-10, -3, 5, 6, -2];
const getRandomInteger = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};
const length = numbers.length;
for (let i = 0; i < length; i++) {
    const j = getRandomInteger(i, length);
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
}

console.log(numbers);