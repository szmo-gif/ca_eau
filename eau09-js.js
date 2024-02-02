const userStrings = () => {
    return [parseInt(process.argv[2]), parseInt(process.argv[3])];
}

const minMax = () => {
    const strings = userStrings();
    const userString1 = strings[0];
    const userString2 = strings[1];

    let result = '';

    if (userString1 < userString2) {
        for (let i = userString1; i < userString2; i++) {
            result += i + ' ';
        }
    } else {
        for (let i = userString2; i < userString1; i++) {
            result += i + ' ';
        }
    }

    return result;
}

const handlingError = (strings) => {
    if (!strings || isNaN(strings[0]) || isNaN(strings[1])) {
        throw new Error("Erreur : veuillez écrire deux nombres valides.");
    }
    
}

try {
    const strings = userStrings();
    handlingError(strings);
    const result = minMax(strings);

    console.log(result);
} catch (error) {
    console.error(error.message);
}
