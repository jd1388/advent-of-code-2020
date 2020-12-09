import * as fs from 'fs/promises';
import * as process from 'process';

const passwordsBuffer = await fs.readFile(`${process.cwd()}/questions/2/input.txt`);
const passwords = passwordsBuffer
    .toString()
    .split('\n')
    .map((passwordEntry) => {
        const [
            minLetterCount,
            maxLetterCount,
            securityLetter,
            password
        ] = passwordEntry
            .split(/[\s-:]/)
            .filter((passwordEntryPart) => passwordEntryPart.trim().length > 0);

        return {
            minLetterCount,
            maxLetterCount,
            securityLetter,
            password
        };
    });
