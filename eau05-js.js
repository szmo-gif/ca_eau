const userStrings = () => {
    return [process.argv[2], process.argv[3]];
}

const stringInString = () => {
    let strings = userStrings();
    let string1 = strings[0];
    let string2 = strings[1];

    for (let i = 0; i <= string1.length - string2.length; i++) {
        if (string1.slice(i, i + string2.length) === string2) {
            return true;
        }
    }
    
    return false;
}

const errorNotString = (strings) => {
    if (!strings || strings.some(str => typeof str !== 'string')) {
        throw new Error("Veuillez entrer deux chaînes de caractères.");
    }
}

try {
    const userInput = userStrings();
    errorNotString(userInput);

    const result = stringInString(userInput);
    console.log(result);

} catch (error) {
    console.error(error.message);
}
