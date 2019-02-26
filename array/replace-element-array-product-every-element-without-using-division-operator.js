{
    const numbers = [1, 2, 3, 4, 5];
    const length = numbers.length;
    const result = [];
    for (let i = 0; i < length; i++) {
        let product = 1;
        for (j = 0; j < length; j++) {

            if (i !== j) {
                product = product * numbers[j];
            }
        }

        result.push(product);
    }

    console.log(result);
}

//another approach
{
    const numbers = [1, 2, 3, 4, 5];
    const length = numbers.length;
    const result = [];
    let leftProduct = 1;
    const left = [];
    let rightProduct = 1;
    const right = [];
    for (let i = 0; i < length; i++) {
        left.push(leftProduct);
        leftProduct = leftProduct * numbers[i];
    }
    for (let j = length - 1; j > -1; j--) {
        right.push(rightProduct);
        rightProduct = rightProduct * numbers[j];
    }
    for (let k = 0; k < length; k++) {
        result.push(left[k] * right[length - 1 - k]);
    }
    console.log(result);
}