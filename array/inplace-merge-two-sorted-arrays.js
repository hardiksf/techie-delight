let x = [1, 4, 7, 8, 10];
let y = [2, 3, 9];
let stillSorting = true;

let indexX = 0;
let indexY = 0;
while (stillSorting) {
    if (x[indexX] === undefined) {
        stillSorting = false;
        break;
    }
    if (x[indexX] <= y[indexY]) {
        indexX++;
    } else {
        [x[indexX], y[indexY]] = [y[indexY], x[indexX]];
        let countYSwaps = 0;
        while (y[indexY] > y[indexY + 1]) {
            [y[indexY], y[indexY + 1]] = [y[indexY + 1], y[indexY]];
            indexY++;
            countYSwaps++;
        }
        indexY = indexY - countYSwaps;

    }
}

console.log(x, y);