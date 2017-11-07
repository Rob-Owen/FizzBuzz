const mapping = {
    3 : 'Fizz',
    5 : 'Buzz',
    7 : "Bang",
}

for (let i=1; i<101; i++) {
    let o = "";
    for (let v in mapping) {
        if ((i % v) === 0) {
            o += mapping[v];
        }
    }
    if (o === "") {
        o = i;
    }
    console.log(o);
}