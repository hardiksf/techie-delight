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

    result.push(product)
}

console.log(result);