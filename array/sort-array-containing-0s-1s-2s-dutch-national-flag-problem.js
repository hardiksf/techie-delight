//Solution is not in constant space
const solution = numbers => {
    const zeroElements = [];
    const oneElements = [];
    const twoElements = [];
    const length = numbers.length;
    for (let i = 0; i < length; i++) {
        if (numbers[i] === 0) {
            zeroElements.push(0);
        } else if (numbers[i] === 1) {
            oneElements.push(1);
        } else {
            twoElements.push(2);
        }
    }
    return [...zeroElements, ...oneElements, ...twoElements];
};

const numbers = [0, 1, 2, 2, 1, 0, 0, 2, 0, 1, 1, 0];
console.log(solution(numbers));