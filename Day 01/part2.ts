
// A static lookup like this where order does not matter is a good use case for an Object over a Map.
const wordToNumber = {
    'zero': '0',
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9'
}

// a regex based approach would be better here, however it does not account for overlapping matches (e.g. 'threeight'). To avoid this we'd probably need to know all such beforehand.
// if we knew the overlapping cases beforehand, we could use a recursive function that utilizes regex, lowering the runtime complexity of the code.
const findOccurrences = (line: string) => {
    const results = [];
    for (const [key, value] of Object.entries(wordToNumber)) {
        let wordIndex = line.indexOf(key);
        while (wordIndex !== -1) {
            results.push([wordIndex, value]);
            wordIndex = line.indexOf(key, wordIndex + 1);
        }
        let numberIndex = line.indexOf(value);
        while (numberIndex !== -1) {
            results.push([numberIndex, value]);
            numberIndex = line.indexOf(value, numberIndex + 1);
        }
    }
    return results.sort((a, b) => a[0] - b[0]);
}


const processLine = (line: string) => {
    const matches = findOccurrences(line);
    const numbers = matches.map(match => match[1]);
    const first = numbers[0] as string;
    const last = numbers[numbers.length - 1] as string;
    console.log('line:', line);
    console.log('matches:', matches);
    return parseInt(first + last, 10);
}

export const process = (input: string) => {
    const lines = input.split('\n');
    const numbers = lines.map(processLine);
    return numbers.reduce((total, num) => total + num);
}