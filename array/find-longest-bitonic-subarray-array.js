{
    const numbers = [3, 5, 8, 4, 5, 9, 10, 8, 5, 3, 4];
    const length = numbers.length;
    const lengthsOfIncreasingSubArray = [0];
    const lengthOfDecreasingSubArray = [];
    lengthOfDecreasingSubArray[length - 1] = 0;

    for (let i = 1; i < length; i++) {
        if (numbers[i] > numbers[i - 1]) {
            lengthsOfIncreasingSubArray[i] = lengthsOfIncreasingSubArray[i - 1] + 1;
        } else {
            lengthsOfIncreasingSubArray[i] = 0;
        }
    }

    for (let i = length - 2; i > -1; i--) {
        if (numbers[i] > numbers[i + 1]) {
            lengthOfDecreasingSubArray[i] = lengthOfDecreasingSubArray[i + 1] + 1;
        } else {
            lengthOfDecreasingSubArray[i] = 0;
        }
    }

    let maxLength = 1;
    let indexAtMaxLength = 0;
    let start = 0;
    let end = 0
    for (let i = 0; i < length; i++) {
        const length = lengthsOfIncreasingSubArray[i] + lengthOfDecreasingSubArray[i] + 1;
        if (length > maxLength) {
            maxLength = length;
            indexAtMaxLength = i;
            start = i - lengthsOfIncreasingSubArray[i];
            end = i + lengthOfDecreasingSubArray[i]
        }
    }
    console.log(`maxLength, start, end, subArray`);
    console.log(maxLength, start, end, numbers.slice(start, end + 1));
}

{
    const numbers = [3, 5, 8, 4, 5, 9, 10, 8, 5, 3, 4];
    const length = numbers.length;
    let maxBitonicLength = 0;
    let i = 1;
    let endingIndex = 0;
    while (i < length) {
        let currentBitonicLength = 1;
        while (i < length && numbers[i] > numbers[i - 1]) {
            i++;
            currentBitonicLength++;
        }
        while (i < length && numbers[i] < numbers[i - 1]) {
            i++;
            currentBitonicLength++;
        }
        if (currentBitonicLength > maxBitonicLength) {
            maxBitonicLength = currentBitonicLength;
            endingIndex = i;
        }
    }
    console.log(maxBitonicLength, endingIndex, numbers.slice(endingIndex - maxBitonicLength, endingIndex));

}