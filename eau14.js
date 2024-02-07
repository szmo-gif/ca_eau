const wordsArray = () => {
    return process.argv.slice(2);
};

const translateWordInAscii = (wordsArray) => {
    let array = [];
    for (let i = 0; i < wordsArray.length; i++) {
        let asciiValue = wordsArray[i].charCodeAt(0) + wordsArray[i].slice(1);
        array.push(asciiValue);
    }
    return array;
};

const translateAsciiInWord = (asciiArray) => {
    let array = [];
    for (let i = 0; i < asciiArray.length; i++) {
        let wordValue = String.fromCharCode(asciiArray[i]) + asciiArray[i].slice(1);
        array.push(wordValue);
    }
    return array;
};

const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (parseInt(array[j]) < parseInt(array[minIndex])) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }
    return array;
};

const words = wordsArray();
const asciiValues = translateWordInAscii(words);
const sortedAsciiValues = selectionSort(asciiValues);
const sortedWords = translateAsciiInWord(asciiValues);
console.log(words);
console.log(asciiValues);
console.log(sortedWords);
//console.log(sortedAsciiValues);
//console.log(sortedWords.join(' '));
