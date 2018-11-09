//Print all sub-arrays with 0 sum
//Given an array of integers, print all sub-arrays with 0 sum.

//multimap
//map of map
const result = array => {
    let sum = 0;
    //in addition of condition listed next to for loop below, when sum is zero we want to print all elements,
    //that is why value of sum === 0 with index ===- 1 is listed here
    let myObject = { 0: [-1] }; //
    let result = [];
    const length = array.length;
    //keep summing all the elements and create a map for same and index, when sum is found again, total is zero
    for (let index = 0; index < length; index++) {
        sum = sum + array[index];
        result = [];
        if (myObject.hasOwnProperty(sum)) {
            const valueOfSum = myObject[sum];
            //push element to value array when sum is found
            valueOfSum.push(index);
            //print sub array
            const keyValueOfCurrentSum = myObject[sum];
            const numberOfSameSum = keyValueOfCurrentSum.length;
            const inclusiveUpperIndex = keyValueOfCurrentSum[numberOfSameSum - 1];
            let exclusiveLowerIndex = keyValueOfCurrentSum[numberOfSameSum - 2];
            for (let j = inclusiveUpperIndex; j > exclusiveLowerIndex; j--) {
                result.push(array[j]);
            }
            console.log(result);
            //when sum is 0 again and it is happening for second time, we also need to print
            //all elements 
            if (sum === 0 && numberOfSameSum === 3) {
                result = [];
                exclusiveLowerIndex = -1;
                for (let j = inclusiveUpperIndex; j > exclusiveLowerIndex; j--) {
                    result.push(array[j]);
                }
                console.log(result);
            }
        }
        //create new key value only if an element was not pushed to value array 
        if (result.length === 0) {
            myObject[sum] = [index];
        }
    }
};

const array = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2];
result(array);