//parsing
const getArgument = () => {
    const argument = process.argv.slice(2).join(' ').toLowerCase();
    return argument;
}

//principal function
const upperCaseOneOnTwo = (array) => {
    const caractere = array.split('');
    let modifiedWord = '';
    let nonWhitespaceCount = 0;

    for (let i = 0; i < caractere.length; i++) {
        if (caractere[i] !== ' ') { // Vérifie si le caractère n'est pas un espace
            // Vérifie si c'est le tour de capitaliser
            if (nonWhitespaceCount % 2 === 0) {
                // Si oui, convertit le caractère en majuscule en utilisant les valeurs ASCII
                const charCode = caractere[i].charCodeAt(0);
                if (charCode >= 97 && charCode <= 122) {
                    // Si le caractère est une lettre minuscule
                    modifiedWord += String.fromCharCode(charCode - 32);
                } else {
                    modifiedWord += caractere[i];
                }
            } else {
                modifiedWord += caractere[i];
            }
            nonWhitespaceCount++;
        } else {
            modifiedWord += ' '; 
        }
    }
    return modifiedWord;
}

//handle error 
const errorArgument = () => {
    if (!process.argv[2] || !isNaN(process.argv[2])) {
        console.log("Erreur : Veuillez écrire une chaîne sans nombre.");
        process.exit(1)
    }
}

const applyFunction = () => {
    errorArgument();
    const argument = getArgument();
    const principalFunction = upperCaseOneOnTwo(argument)

    console.log(principalFunction);
}

applyFunction()

