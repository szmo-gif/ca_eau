const threeDigitCombination = () => {
    let result = '';

    // Utilisation des codes ASCII
    for (let code = 48; code <= 57; code++) {
        for (let code2 = code + 1; code2 <= 57; code2++) {
            for (let code3 = code2 + 1; code3 <= 57; code3++) {
                result += String.fromCharCode(code, code2, code3) + ',';
            }
        }
    }

    return result.slice(0, -1); // Retire la virgule à la fin
}

const errorWithoutArguments = () => {

if (process.argv[2]) {
    console.log("Erreur : L'argument n'est pas nécessaire pour ce script.");
    
} else {
    console.log(threeDigitCombination());
}
}

errorWithoutArguments();