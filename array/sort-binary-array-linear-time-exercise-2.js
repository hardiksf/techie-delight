//2. Rearrange even and odd numbers in an array in linear time such that all even numbers comes before all odd numbers.

const evensFirstThenOdds = array => {
    const evens = [];
    const odds = [];
    const length = array.length;
    for (let index = 0; index < length; index++) {
        const currentElement = array[index];
        if (currentElement % 2 === 0) {
            evens.push(currentElement);
        } else {
            odds.push(currentElement);
        }
    }
    return [...evens, ...odds];
};

const array = [5, 3, 5, 6, 1, 8, 34, 8, 2, 4];
console.log(evensFirstThenOdds(array));