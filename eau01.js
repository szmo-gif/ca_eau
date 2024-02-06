const twoElements = () => {
    let results = '';

    // Utilisation de ASCII
    for (let code = 48; code <= 57; code++) {
        for (let code2 = 48; code2 <= 57; code2++) {
            for (let code3 = 48; code3 <= 57; code3++) {
                for (let code4 = 48; code4 <= 57; code4++) {
                    if (!(code === 48 && code2 === 48 && code3 === 48 && code4 === 48) &&
                        !(code === 57 && code2 === 57 && code3 === 57 && code4 === 57)) {
                        results += String.fromCharCode(code) + String.fromCharCode(code2) + ' ' + String.fromCharCode(code3) + String.fromCharCode(code4) + ',';
                    }
                }
            }
        }
    } 

   // return results.slice(0, -1);
}

const errorWithoutArguments = () => {
    if (process.argv[2]) {
        console.log("Erreur : L'argument n'est pas nécessaire dans le script.");
    } else {
        console.log(twoElements());
    }
}

errorWithoutArguments();