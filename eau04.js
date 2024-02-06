const numberArray = () => {
    return parseInt(process.argv[2]);
}

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

    return console.log(numberArray + 1);
}

const handleError = (numberArray) => {
    if (isNaN(numberArray)) {
       console.log("Erreur : veuillez choisir un nombre entier.");
    }

    if (numberArray <= 1) {
        console.log("Erreur : veuillez chosir un nombre positif et qui ne soit pas égal à 0 ou 1")
    }
    process.exit(1);
}

handleError(numberArray());
nextPrimeNumber(numberArray());
