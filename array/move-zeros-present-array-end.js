const numbers = [6, 0, 8, 2, 3, 0, 4, 0, 1];
const left = [];
const right = [];
const length = numbers.length;
for (let i = 0; i < length; i++) {
    const currentElement = numbers[i];
    if (currentElement === 0) {
        right.push(currentElement);
    } else {
        left.push(currentElement);
    }
}
console.log([...left, ...right]);