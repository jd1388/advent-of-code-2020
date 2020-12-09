import * as fs from 'fs/promises';
import * as process from 'process';

const yearsBuffer = await fs.readFile(`${process.cwd()}/questions/1/input.txt`);
const years = yearsBuffer
    .toString()
    .split('\n')
    .map((year) => parseInt(year));
const sortedYears = years.sort((a, b) => a - b);
const yearsSet = new Set(sortedYears);

for (const year of sortedYears) {
    const otherYearInPair = 2020 - year;
    const isOtherYearInSet = yearsSet.has(otherYearInPair);

    if (isOtherYearInSet) {
        console.log(`PAIR: ${year} & ${otherYearInPair}`);
        console.log(`Multiplied together to equal: ${year * otherYearInPair}`);

        break;
    }
}

console.log('END');
