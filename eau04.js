//parsing
const getArgument = () => {
    return parseInt(process.argv[2]);
}

//fonction principal 
const isPrimeNumber = (number) => {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

const nextPrimeNumber = (numberArray) => { 
    while (!isPrimeNumber(numberArray + 1)) {
        numberArray++;
    }

    return numberArray + 1;
}

//gestion d'erreur 
const validArgumentIsNumber = () => {
    if (!isNaN(process.argv[2])) {
        return nextPrimeNumber(getArgument())
    }
    else{
        console.log("Erreur : veuillez choisir un nombre entier.");
        process.exit(1)
    }
}

const validNumber =() => {
    if (process.argv[2] >= 1) {
       return nextPrimeNumber(getArgument())
    }
    else{
        console.log("Erreur : veuillez chosir un nombre positif et qui ne soit pas égal à 0 ou 1")
        process.exit(1)
    }
}

//résolution
const applyFunction = () => {
    const argument = getArgument();
    const validArgument = validNumber(validArgumentIsNumber(argument));

    return console.log(validArgument);

}

applyFunction()
