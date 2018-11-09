//Check if subarray with 0 sum is exists or not
//Given an array of integers, check if array contains a 

//complexity: o(n) because one for loop
const result = array => {
    const set = new Set();
    let sum = 0;
    set.add(sum);
    const length = array.length;
    for (let i = 0; i < length; i++) {
        sum = sum + array[i];
        if (set.has(sum)) {
            console.log(`it exists`);
            return;
        } else {
            set.add(sum);
        }
    }
    console.log(`it does not exist`);
};

const array = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2];
result(array);