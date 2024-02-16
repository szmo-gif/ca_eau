//parcing
const getArgument = () => {
    let arrayUser = process.argv.slice(2);
    return arrayUser;
};

//translate function for caractere
const translateLetterToAscii = (letter) => {
    return letter.charCodeAt(0);
};

const translateAsciiToLetter = (asciiValue) => {
    return String.fromCharCode(asciiValue);
};

//translate function for words
const translateWordToAscii = (word) => {
    let asciiArray = [];

    for (let i = 0; i < word.length; i++) {
        let asciiValue = translateLetterToAscii(word[i]);
        asciiArray.push(asciiValue);
    }

    return asciiArray;
};

const translateAsciiToWord = (asciiArray) => {
    let word = '';

    for (let i = 0; i < asciiArray.length; i++) {
        let letter = translateAsciiToLetter(asciiArray[i]);
        word += letter;
    }

    return word;
};

//sort function
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
};

//handle error 
const isNotValidArgument = () => {
    const arguments = getArgument();
    if (!arguments.length) {
        console.log("Erreur : veuillez écrire des chaines de caractères.");
        return true;
    }
    return false;
};

//apply function
const applyFunction = () => {
    if (isNotValidArgument()) {
        return;
    }

    const arguments = getArgument();
    let translateInAscii = [];
    for (let i = 0; i < arguments.length; i++) {
        translateInAscii.push(translateWordToAscii(arguments[i]));
    }

    let sort = bubbleSort(translateInAscii);

    let translateInWords = [];
    for (let i = 0; i < sort.length; i++) {
        translateInWords.push(translateAsciiToWord(sort[i]));
    }

    console.log(translateInWords.join(' '));
};

applyFunction();
