const userString = () => {
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
    return caractereLast;
}

const error = () => {
    if (!process.argv[2] || process.argv[2] < 0 || isNaN(process.argv[2])) {
        console.log("-1");
    } else {
        let inputString = parseInt(userString());
        let FibonacciSequence = Fibonacci(inputString);
        console.log(caractereLast(FibonacciSequence));
    }
}

error();