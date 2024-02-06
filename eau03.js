const numberArray = () => {
    return process.argv[2];
}

const Fibonacci = (number) => {
    let results = [];
    let a = 0;
    let b = 1;
    for (let i = 0; i <= number; i++) {

        results.push(a);
        let c = a + b;
        a = b;
        b = c;
    }
    return results;
}

const caractereLast = (results) => {
    let indexLast = results.length - 1;
    let caractereLast = results[indexLast];
    return console.log(caractereLast);
}

const handleError = () => {
    if (!process.argv[2] || process.argv[2] < 0 || isNaN(process.argv[2])) {
        console.log("-1");
    }
    process.exit(1)
}

handleError(numberArray())
caractereLast(Fibonacci(numberArray()))