export const process = (input: string): number => {
    const lines = input.split('\n');
    const numbers = lines.map(processLine);
    return numbers.reduce((total, num) => total + num);
}
const parseColorAndCount = (colorAndCount: string): [number, string] => {
    const [count, color] = colorAndCount.trim().split(' ');
    return [parseInt(count, 10), color];
}

const processLine = (line: string): number => {
    const gameID = line.split(' ')[1]; 
    const game = line.replaceAll(";", ",").split(':')[1].split(',').map(parseColorAndCount);
    // get the maximum of each color in the game
    const max = { red: 0, blue: 0, green: 0 };
    game.forEach(([count, color]) => {
        if (color === 'red') max.red = Math.max(max.red, count);
        if (color === 'blue') max.blue = Math.max(max.blue, count);
        if (color === 'green') max.green = Math.max(max.green, count);
    });
    return max.red * max.blue * max.green;
}
