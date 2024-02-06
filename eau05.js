const userArray = () => {
    return [process.argv[2], process.argv[3]];
}

const stringInString = () => {
    let strings = userArray();
    let string1 = strings[0];
    let string2 = strings[1];

    for (let i = 0; i <= string1.length - string2.length; i++) {
        if (string1.slice(i, i + string2.length) === string2) {
            return true;
        }
    }
    
    return false;
}

const handleError = (strings) => {
    if (!strings || strings.some(str => typeof str !== 'string')) {
        console.log("Veuillez entrer deux chaînes de caractères.");
        process.exit(1)
    }
}

handleError(userArray());
console.log(stringInString(userArray()));