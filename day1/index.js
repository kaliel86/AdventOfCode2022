import fs from 'fs';


const data = fs.readFileSync('data.txt', 'utf8');
const elves = data

    // remplace les fins de ligne par des virgules
    .replace(/(?:\r\n|\r|\n)/g, ',')

    // remplace les virgules sans valeur entre les deux avec un tiret
    .replace(/,,/g, '-')

    // split la chaine en tableaux
    .split('-')

    // split chaque tableau en tableaux
    .map(caloriesString => caloriesString.split(','))

    // cast les strings en integers
    .map(strings => strings.map(str => parseInt(str)))

    // reduit chaque tableau à la somme de ses entiers
    .map(integers => integers.reduce((acc, item) => acc + item, 0));



// valeur max
const partOne = Math.max(...elves);

console.log('soluce 1', partOne);

const partTwo = elves.sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, item) => acc + item, 0);

console.log('soluce 2', partTwo);