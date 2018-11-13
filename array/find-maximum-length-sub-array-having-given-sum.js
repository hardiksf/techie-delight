//Find maximum length sub-array having given sum
//Given an array of integers, find maximum length sub-array having given sum.
const isSubArrayWithGivenSum = (numbers, givenSum) => {
    sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    if (sum === givenSum) {
        return true;
    } else {
        return false;
    }
};

const maxLengthSubArrayWithGivenSum = (numbers, givenSum) => {
    const numbersLength = numbers.length;
    let result = [];
    for (let i = 0; i < numbersLength; i++) {
        for (let j = 0; j < numbersLength; j++) {
            const subArray = numbers.slice(i, j);
            if (isSubArrayWithGivenSum(subArray, givenSum)) {
                if (subArray.length > result.length) {
                    result = subArray;
                }
            }
        }
    }
    console.log(result);
};


const maxLengthSubArrayWithGivenSum2 = (numbers, givenSum) => {
    let sum = 0;
    const numbersLength = numbers.length;
    let result = [];

    //initializing map with 0 sum at -1 index
    const sumMap = new Map([
        [0, -1]
    ]);

    for (let i = 0; i < numbersLength; i++) {
        sum += numbers[i];
        const currentElement = numbers[i];
        if (!sumMap.has(currentElement)) {
            sumMap.set(sum, i);
        }

        const indexOfSumMinusGivenSum = sumMap.get(sum - givenSum);
        if (sumMap.has(sum - givenSum) && result.length < i - indexOfSumMinusGivenSum) {
            result = numbers.slice(indexOfSumMinusGivenSum + 1, i + 1);
        }
    }
    console.log(result);
}

const numbers = [9, -9, 5, 6, -5, 5, 3, 5, 3, -2, 0];
const givenSum = 8;

maxLengthSubArrayWithGivenSum2(numbers, givenSum);