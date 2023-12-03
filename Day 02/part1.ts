const parseColorAndCount = (colorAndCount: string): [number, string] => {
    const [count, color] = colorAndCount.trim().split(' ');
    return [parseInt(count, 10), color];
}
const processLine = (line: string): number => {
    const gameID = line.split(' ')[1]; 
    const game = line.replaceAll(";", ",").split(':')[1].split(',').map(parseColorAndCount);
    const isInvalid = game.some(([count, color]) => {
        if (color === 'red' && count > 12) return true;
        if (color === 'blue' && count > 14) return true;
        if (color === 'green' && count > 13) return true;
        return false;
    });
    if (isInvalid) return 0;
    return parseInt(gameID, 10);
}
export const process = (input: string): number => {
    const lines = input.split('\n');
    const numbers = lines.map(processLine);
    return numbers.reduce((total, num) => total + num);
}
