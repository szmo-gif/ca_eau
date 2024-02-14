// Parsing des arguments de la ligne de commande
const getArgument = () => {
    return process.argv[2];
}

// Fonction principale pour capitaliser les mots
const capitalizeWords = (inputString) => {
    const words = inputString.split(' ');

    for (let i = 0; i < words.length; i++) {
        // Vérifie si le mot est vide ou non
        if (words[i]) {
            // Convertit la première lettre en majuscule en utilisant les valeurs ASCII
            const firstCharCode = words[i].charCodeAt(0);
            if (firstCharCode >= 97 && firstCharCode <= 122) {
                // Si la première lettre est en minuscule
                const capitalizedCharCode = firstCharCode - 32;
                words[i] = String.fromCharCode(capitalizedCharCode) + words[i].slice(1);
            }
        }
    }

    return words.join(' ');
}

// Gestion des erreurs
const validArgument = () => {
    if (!process.argv[2] || !isNaN(process.argv[2])) {
        console.log("Erreur : Veuillez fournir une chaîne de caractères en argument.");
        process.exit(1);
    }
}

// Applique la fonction principale et gère les erreurs
const applyFunction = () => {
    // Vérifie la validité de l'argument
    validArgument();

    // Obtient l'entrée de la ligne de commande
    const userInput = getArgument();

    // Capitalise les mots
    const capitalizedWords = capitalizeWords(userInput);

    console.log(capitalizedWords);
}

applyFunction();
