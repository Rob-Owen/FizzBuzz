const mapping = {
    3 : 'Fizz',
    5 : 'Buzz',
    7 : "Bang",
}

for (let i=1; i<301; i++) {
    let o = [];

    // build fizz/buzz/bong
    for (let v in mapping) {
        if ((i % v) === 0) o.push(mapping[v]);
    }

    // overwrite with 'bong' if multiple of 11
    if ((i % 11) === 0) o = ['Bong'];

    // "Fezz" if multiple of 13
    if ((i % 13) === 0) {
        if (o.length === 0) o.push('Fezz');
        else {
            // get the position where Fezz should go
            let j = 0;
            while (j < o.length) {
                if (o[j][0] === 'B') break;
                j++;
            }
            o.splice(j, 0, 'Fezz');
        }
    }

    if ((i % 17) === 0) o.reverse();

    // if no criteria have been met, set o = i
    if (o.length === 0) o.push(i);

    // output the result
    console.log(i + "\t" + o.join(''));
}