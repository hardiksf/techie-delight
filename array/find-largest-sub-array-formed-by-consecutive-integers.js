//Find largest sub-array formed by consecutive integers
//Given an array of integers, find largest sub-array formed by consecutive integers. The sub-array should contain all distinct values.

const areEachElementsConsecutiveAndUnique = array => {
    const length = array.length;
    const set = new Set(array);
    if (length !== set.size) { //checking unique
        return false;
    } else { //checking consecutive
        const largestInteger = Math.max(...array);
        const smallestInteger = Math.min(...array);
        if (largestInteger - smallestInteger === length - 1) {
            return true;
        } else {
            return false;
        }
    }
};

//check for each possible sun array
const result = array => {
    const length = array.length;
    let largestSubArray = [];
    for (let index = 0; index < length; index++) {
        for (let j = index; j < length; j++) {
            const subArray = array.slice(index, j + 1);
            if (areEachElementsConsecutiveAndUnique(subArray)) {
                if (subArray.length > largestSubArray.length) {
                    largestSubArray = subArray;
                }
            }
        }
    }
    console.log(largestSubArray);
}

const array = [2, 0, 2, 1, 4, 3, 1, 0];
result(array);