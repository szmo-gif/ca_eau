const userString = () => {
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

const nextPrimeNumber = (userNumber) => { 
    while (!isPrimeNumber(userNumber + 1)) {
        userNumber++;
    }

    return userNumber + 1;
}

const errorNotNumber = (userString) => {
    if (isNaN(userString)) {
        throw new Error ("Erreur : veuillez choisir un nombre entier.");
    }

    if (userString <= 1) {
        throw new Error ("Erreur : veuillez chosir un nombre positif et qui ne soit pas égal à 0 ou 1")
    }

}

    const userInput = userString();
    errorNotNumber(userInput);
    const result = nextPrimeNumber(userInput);
    console.log(result);


