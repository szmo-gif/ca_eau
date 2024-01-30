const userString = () =>{

    return process.argv[2];
} 

const upperCaseWords = (userInput) => {

    const userWords = userInput.split(' ');

    for (let i = 0; i < userWords.length; i++) {

        userWords[i] = userWords[i].charAt(0).toUpperCase() + userWords[i].slice(1)
    }
    return userWords.join(' ')
}

const handlingError = (userInput) => {

    if (!userInput || !isNaN(userInput)) {
        throw new Error ("Erreur : veuillez écrire une chaine de caractère.")
    }

    return userInput
}

try {
    const userInput = userString();
    const validateInput = handlingError(userInput);
    const result = upperCaseWords(validateInput);

    console.log(result);

} catch (error) {
    console.error(error.message);
}
