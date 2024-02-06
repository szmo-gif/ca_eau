const numberArray = () => {
    return [parseInt(process.argv[2]), parseInt(process.argv[3])];
}

const minMax = () => {
    const numbers = numberArray();
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

    return console.log(result);
}

const handleError = (numbers) => {
    if (!numbers || isNaN(numbers[0]) || isNaN(numbers[1])) {
        console.log("Erreur : veuillez écrire deux nombres valides.");
    }
    
}

handleError(numberArray());
minMax(numberArray());