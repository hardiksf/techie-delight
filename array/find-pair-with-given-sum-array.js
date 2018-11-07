//Find Pair with given Sum in the Array
//Given an unsorted array of integers, find a pair with given sum in it.

//Assumption: no duplicates
const result = (arr, sum) => {
    const length = arr.length;
    const arrayToMap = new Map();
    const foundValueMap = new Map();

    for (let i = 0; i < length; i++) {
        //it doesn't matter what the value is
        arrayToMap.set(arr[i]);
    }

    for (let i = 0; i < length; i++) {
        const firstNumber = arr[i];
        const secondNumber = sum - firstNumber;
        if (firstNumber !== secondNumber) {
            if (!foundValueMap.has(firstNumber)) {
                if (arrayToMap.has(secondNumber)) {
                    foundValueMap.set(secondNumber);
                    console.log(firstNumber, secondNumber);
                }
            }
        }
    }
};

const arr = [8, 7, 2, 5, 3, 1];
const sum = 10;
result(arr, sum);