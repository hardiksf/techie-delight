//Find a duplicate element in a limited range array
//Given a limited range array of size n where array contains elements between 1 to n-1 with one element repeating, find the duplicate number in it.

//create map, loop through array, check if element exist and map, 
//if not put it it. If yes, found duplicate, break the loop

//time and space: O(n)
const findADuplicate = array => {
    const myMap = new Map();
    const length = array.length;
    for (let index = 0; index < length; index++) {
        const currentElement = array[index];
        if (myMap.has(currentElement)) {
            console.log(currentElement);
            break;
        } else {
            myMap.set(currentElement);
        }
    }
}

//time: O(n)
//and O(1) 
const findADuplicateUsingXor = array => {
    let xOr = 0;
    const length = array.length;
    for (let index = 0; index < length; index++) {
        xOr ^= array[index];
    }
    for (let index = 1; index < length; index++) {
        xOr ^= index;
    }
    console.log(xOr);
}

const array = [1, 2, 3, 4, 4];
findADuplicateUsingXor(array);