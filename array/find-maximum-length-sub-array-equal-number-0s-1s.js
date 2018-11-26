//Find maximum length sub-array having equal number of 0’s and 1’s
//Given an binary array containing 0 and 1, find maximum length sub-array having equal number of 0’s and 1’s.

//see .jpg file. Did that exercise to come up with following logic

//convert 0 to -1
//keep summing
//put sum and index in map if not in map, start map with 0 sum and -1 index
//when sum is found, we got desired subarray, starting position  is (key of sum) - 1 and current index
//get the largest subarray

const result = binaryArray => {
    const sumMap = new Map([
        [0, -1]
    ]);
    const length = binaryArray.length;
    let sum = 0;
    let startingIndexOfFinalSubArray = 0;
    let endingIndexOfFinalSubArray = 0;
    let lengthOfFinalSubArray = 0;
    for (let i = 0; i < length; i++) {
        const currentElement = binaryArray[i];
        if (currentElement === 0) {
            sum = sum - 1; //converted 0 to -1
        } else {
            sum = sum + 1;
        }
        if (!sumMap.has(sum)) {
            sumMap.set(sum, i);
        } else {
            //Defined starting and ending in such a way that they can be plugged in slice()
            //For slice(), starting index is inclusive and ending is exclusive
            const startingIndexOfSubArray = sumMap.get(sum) + 1;
            const endingIndexOfSubArray = i + 1;
            const lengthOfSubArray = endingIndexOfSubArray - startingIndexOfSubArray + 1;
            if (lengthOfSubArray > lengthOfFinalSubArray) {
                startingIndexOfFinalSubArray = startingIndexOfSubArray;
                endingIndexOfFinalSubArray = endingIndexOfSubArray;
                lengthOfFinalSubArray = lengthOfSubArray;
            }
        }
    }
    console.log(binaryArray.slice(startingIndexOfFinalSubArray, endingIndexOfFinalSubArray));
};

const binaryArray = [0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0];
result(binaryArray);