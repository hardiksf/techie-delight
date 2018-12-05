const numbers = [2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2];
const elementOccurrenceMap = new Map();
const length = numbers.length;

for (let i = 0; i < length; i++) {
    const currentElement = numbers[i];
    if (elementOccurrenceMap.has(currentElement)) {
        elementOccurrenceMap.set(currentElement, elementOccurrenceMap.get(currentElement) + 1);
    } else {
        elementOccurrenceMap.set(currentElement, 1);
    }
    if (elementOccurrenceMap.get(currentElement) > length / 2) {
        console.log(currentElement);
    }
}