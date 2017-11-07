for (var i=1; i<101; i++) {

    m3 = i % 3;
    m5 = i % 5;

    if (m3 === 0 && m5 === 0) {
        console.log("FizzBuzz");
    }
    else if (m3 === 0) {
        console.log("Fizz");
    }
    else if (m5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}