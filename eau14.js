const wordsArray = () => {
    return process.argv.slice(2);
} 

const translateWordInAscii = (wordsArray) => {
    let array = [];
    for (let i = 0; i < wordsArray.length; i++) {
        const asciivalue = wordsArray[i].charCodeAt(0);
        array.push(asciivalue);
    }
    return array
}

const translateAsciiInWord = (AsciiArray) => {
    let array = [];
    for (let i = 0; i < AsciiArray.length; i++) {
        const wordValue = String.fromCharCode(AsciiArray[i]);
        array.push(wordValue);
    }
    return array
}

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

    return console.log(array.join(' '))
}


translateAsciiInWord(selectionSort(translateAsciiInWord(wordsArray())));