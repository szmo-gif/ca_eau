// parcing
const getArgument = () => {
    return process.argv.slice(2);
}

// Fonction principale 
const minMax = (number1, number2) => {
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

// gestion d'erreur 
const isValidNumbers = () => {
    const numbers = process.argv.slice(2);
    if (numbers.length !== 2 || isNaN(numbers[0]) || isNaN(numbers[1])) {
        return false;
    }
    return true;
}

// Fonction pour appliquer les opérations
const applyFunction = () => {
    if (!isValidNumbers()) {
        console.log("Erreur : veuillez écrire deux nombres valides.");
        return;
    }

    const numbers = getArgument();
    const number1 = parseInt(numbers[0]);
    const number2 = parseInt(numbers[1]);
    const result = minMax(number1, number2);

    console.log(result);
}

applyFunction();
