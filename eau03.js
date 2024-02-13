const getArgument = () => {
    return process.argv.slice(2);
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

const validArgument = (argument) => {
    if (argument.length > 0 && !isNaN(argument) && parseInt(argument) >= 0) {
        return caractereLast(Fibonacci(parseInt(argument)));
    } else {
        return -1;
    }
}

const applyFunction = () => {
    const argument = getArgument();
    const validResult = validArgument(argument);
    console.log(validResult);
}

applyFunction();
