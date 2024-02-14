//parcing
const getArgument = () => {
    return process.argv.slice(2)
}

//principal function
const minMax = () => {
    const numbers = getArgument();
    const number1 = numbers[0];
    const number2 = numbers[1];

    let result = '';

    if (number1 < number2) {
        for (let i = number1; i < number2; i++) {
            result += i + ' ';
        }
    } else {
        for (let i = number2; i < number1; i++) {
            result += i + ' ';
        }
    }

    return result;
}

//handle error 
const isValidNumbers = () => {
    if (!process.argv.slice(2) || isNaN(process.argv.slice(2)[0]) || isNaN(process.argv.slice(2)[1]) || process.argv.slice(2).length !== 2) {
         console.log("Erreur : veuillez écrire deux nombres valides.");
    }
    process.exit(1)
}

// apply function
const applyFunction = () => {
    isValidNumbers()
    const argument = getArgument()
    const principalFunction = minMax(argument)
    
    console.log(principalFunction);
}

applyFunction()