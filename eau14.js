const wordsArray = () => {
    let arrayUser = process.argv.slice(2);
    return arrayUser;
};

const translateLetterToAscii = (letter) => {
    return letter.charCodeAt(0);
};

const translateAsciiToLetter = (asciiValue) => {
    return String.fromCharCode(asciiValue);
};

const translateWordToAscii = (word) => {
    let asciiArray = [];

    word.split('').forEach(letter => {
        let asciiValue = translateLetterToAscii(letter);
        asciiArray.push(asciiValue);
    });

    return asciiArray;
};

const translateAsciiToWord = (asciiArray) => {
    let word = '';

    asciiArray.forEach(asciiValue => {
        let letter = translateAsciiToLetter(asciiValue);
        word += letter;
    });

    return word;
};

const bubbleSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (parseInt(array[j]) > parseInt(array[j + 1])) {
                let change = array[j];
                array[j] = array[j + 1];
                array[j + 1] = change;
            }
        }
    }
    return array;
}

const handleError = () => {
    if (!process.argv.slice(2)) {
        console.log("Ecrivez une ou des chaines de caractères");
        process.exit(1)
    }
}


const arrayUser = wordsArray();
handleError(arrayUser);

// Convertir les mots en ASCII
const translateInAscii = arrayUser.map(word => translateWordToAscii(word));

// Trier les valeurs ASCII
const sort = bubbleSort(translateInAscii);

// Reconvertir les valeurs ASCII en mots
const translateInWords = sort.map(asciiArray => translateAsciiToWord(asciiArray));

console.log(translateInWords.join(' '));