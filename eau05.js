const getArgument = () => {
    return process.argv.slice(2);
}

const stringInString = (string1, string2) => {
    for (let i = 0; i <= string1.length - string2.length; i++) {
        let match = true;
        for (let j = 0; j < string2.length; j++) {
            if (string1[i + j] !== string2[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            return true;
        }
    }
    
    return false;
}

const validTwoStrings = (strings) => {
    if (strings.length === 2 && strings.every(str => typeof str === 'string')) {
        return strings;
    } else {
        console.log("Veuillez entrer deux chaînes de caractères.");
        process.exit(1);
    }
}

const applyFunction = () => {
    const userArguments = getArgument();
    const validArguments = validTwoStrings(userArguments);
    const includes = stringInString(validArguments[0], validArguments[1]);

    console.log(includes);
}

applyFunction();
