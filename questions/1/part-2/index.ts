import * as fs from 'fs/promises';
import * as process from 'process';

const yearsBuffer = await fs.readFile(`${process.cwd()}/questions/1/input.txt`);
const years = yearsBuffer
    .toString()
    .split('\n')
    .map((year) => parseInt(year));
const sortedYears = years.sort((a, b) => a - b);
const yearsSet = new Set(sortedYears);

const sumToYear = (sumOfYears: number, firstYear: number, otherYears: Set<number>) => {
    const secondYear = sumOfYears - firstYear;
    const isSecondYearInSet = otherYears.has(secondYear);

    if (isSecondYearInSet) {
        return [firstYear, secondYear];
    }

    return null;
};

// for (const year of sortedYears) {
//     const yearPair = sumToYear(2020, year, yearsSet);

//     if (yearPair !== null) {
//         const [firstYear, secondYear] = yearPair;
        
//         console.log(`PAIR: ${firstYear} & ${secondYear}`);
//         console.log(`Multiplied together to equal: ${firstYear * secondYear}`);

//         break;
//     }
// }

for (const firstYear of sortedYears) {
    yearsSet.delete(firstYear);

    const sumOfYearsTarget = 2020 - firstYear;

    let yearsThatSumTogether: number[] = [];

    for (const secondYear of yearsSet) {
        const yearPair = sumToYear(sumOfYearsTarget, secondYear, yearsSet);

        if (yearPair !== null) {
            const [secondYear, thirdYear] = yearPair;

            console.log(`${firstYear}, ${secondYear}, and ${thirdYear} sum to 2020`);
            console.log(`Multiplied together to equal: ${firstYear * secondYear * thirdYear}`);

            yearsThatSumTogether = [firstYear, secondYear, thirdYear];

            break;
        }
    }

    if (yearsThatSumTogether.length > 0) {
        break;
    }
}

console.log('END');
