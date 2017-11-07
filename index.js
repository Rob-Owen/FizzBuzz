let  maxNumber = process.argv[2];
if (maxNumber === undefined) {
    maxNumber = 100;
}

const mapping = {
    3 : 'Fizz',
    5 : 'Buzz',
    7 : "Bang",
}

for (let number=1; number<=maxNumber; number++) {
    let outputBuffer = [];

    // build fizz/buzz/bong
    for (let v in mapping) {
        if ((number % v) === 0) outputBuffer.push(mapping[v]);
    }

    // overwrite with 'bong' if multiple of 11
    if ((number % 11) === 0) outputBuffer = ['Bong'];

    // "Fezz" if multiple of 13
    if ((number % 13) === 0) {
        if (outputBuffer.length === 0) outputBuffer.push('Fezz');
        else {
            // get the position where 'Fezz' should go (j)
            let j = 0;
            while (j < outputBuffer.length) {
                if (outputBuffer[j][0] === 'B') break;
                j++;
            }
            // splice 'Fezz' in at position j
            outputBuffer.splice(j, 0, 'Fezz');
        }
    }

    if ((number % 17) === 0) outputBuffer.reverse();

    // if no criteria have been met, set outputBuffer = number
    if (outputBuffer.length === 0) outputBuffer.push(number);

    // output the result
    console.log(number + "\t" + outputBuffer.join(''));
}