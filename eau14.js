const wordsArray = () => {
    let user = process.argv.slice(2);
    let array = [];

    user.forEach(element => {
        let words = element.split('');
        array.push(words);
    });
    return array;
};

const translateLetterToAscii = (letter) => {
    return letter.charCodeAt(0);
};

const translateAsciiToLetter = (asciiValue) => {
    return String.fromCharCode(asciiValue);
};

const translateWordToAscii = (word) => {
    let asciiArray = [];

    word.forEach(letter => {
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

const sortWordsByAscii = (wordsArray) => {
    let asciiWords = [];

    wordsArray.forEach(word => {
        let asciiWord = translateWordToAscii(word);
        asciiWords.push(asciiWord);
    });

    asciiWords.sort();

    return asciiWords;
};

const handleError = () => {
    if (!process.argv.slice(2)) {
        console.log("Ecrivez une ou des chaines de caractères");
        process.exit(1)
    }
}

const user = wordsArray();
handleError(user)
const sortedAsciiWords = sortWordsByAscii(user);
const sortedWords = sortedAsciiWords.map(word => translateAsciiToWord(word));

console.log(sortedWords.join(' '));
