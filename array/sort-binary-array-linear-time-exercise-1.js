//1. Modify the solution so that all 1’s would come first.

//Sort Binary Array in Linear Time
//Given an binary array, sort it in linear time and constant space. Output should print contain all zeroes followed by all ones.

//time complexity: O(n)
const sortBinaryArray = array => {
    const length = array.length;
    let numberOfZero = 0;

    //We will count number of zero and then in result add 0 for that many times and 1 for remaining times
    for (let index = 0; index < length; index++) {
        if (array[index] === 0) {
            numberOfZero++;
        }
    }

    const sortedArray = [];
    for (let index = length - 1; index >= 0; index--) {
        if (index < numberOfZero) {
            sortedArray.push(0);
        } else {
            sortedArray.push(1);
        }
    }

    console.log(sortedArray);
};

const array = [0, 1, 0, 1, 1];
sortBinaryArray(array);