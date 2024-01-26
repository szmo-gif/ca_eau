const twoElements = () => {

    let results = '';

    // utilisation de ASCII
    for (let code = 48; code <= 57; code++) {
        for (let code2 = 48; code2 <= 57; code2++) {
            results += String.fromCharCode(code, code2) + ',';
        }
    } 

return results.slice(0, -1);

}

const errorWithoutArguments = () => {

    if (process.argv[2]) {
        console.log("erreur : l'argument n'est pas nécessaire dans le script. ");
    } else {
        console.log(twoElements());
    }
}

errorWithoutArguments();