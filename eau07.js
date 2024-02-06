const wordArray = () =>{

    return process.argv[2];
} 

const upperCaseWords = (array) => {

    const userWords = array.split(' ');

    for (let i = 0; i < userWords.length; i++) {

        userWords[i] = userWords[i].charAt(0).toUpperCase() + userWords[i].slice(1)
    }
    return console.log(userWords.join(' '));
}

const handleError = () => {

    if (!process.argv[2] || !isNaN(process.argv[2])) {
        console.log("Erreur : veuillez écrire une chaine de caractère.")
        process.exit(1)
    }
}

handleError();
upperCaseWords(wordArray());