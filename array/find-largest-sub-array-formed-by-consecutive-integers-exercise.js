//Find largest sub-array formed by consecutive integers
//Given an array of integers, find largest sub-array formed by consecutive integers. The sub-array should contain all distinct values.

const areEachElementsConsecutiveDuplicateOk = numbers => {
    const length = numbers.length;
    //copying number because we don't want to modify original array
    const numbersCopy = numbers.slice(0);
    numbersCopy.sort();
    for (let i = 0; i < length - 1; i++) {
        if (numbersCopy[i + 1] > numbersCopy[i] + 1)
            return false;
    }
    return true;
};

//check for each possible sun array
const result = numbers => {
    const length = numbers.length;
    let largestSubArray = [];
    for (let index = 0; index < length; index++) {
        for (let j = index; j < length; j++) {
            const subArray = numbers.slice(index, j + 1);
            if (areEachElementsConsecutiveDuplicateOk(subArray)) {
                if (subArray.length > largestSubArray.length) {
                    largestSubArray = subArray;
                }
            }
        }
    }
    console.log(largestSubArray);
}

const array = [0, 1, 2, 2, 0, 2, 1, 3, 4, 3, 1, 0];
result(array);