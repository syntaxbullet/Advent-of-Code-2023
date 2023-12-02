const processLine = (line: string): number => {
    const chars = line.split('');
    const numbers = chars.filter((char: string) => !isNaN(parseInt(char, 10)));
    const first = numbers[0];
    const last = numbers[numbers.length - 1];
    //console.log('first:', first, 'last:', last);
    return parseInt(first + last, 10);
}
export const process = (input: string): number => {
    const lines = input.split('\n');
    const numbers = lines.map(processLine);
    return numbers.reduce((total, num) => total + num);
}