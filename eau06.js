const wordArray = () => {
    return process.argv[2].toLowerCase();
} 

const upperCaseOneOnTwo = (array) => {

    const letters = array.split('');

    let modifiedWord = '';

    let nonWhitespaceCount = '';

    for (let i = 0; i < letters.length; i++) {
        if (letters[i] !== ' ') { 
            if (nonWhitespaceCount % 2 === 0) {
            modifiedWord += letters[i].toUpperCase();
            } 
            else {
            modifiedWord += letters[i];
            }
            nonWhitespaceCount++;
        } 
        else {
            modifiedWord += ' '; 
        }
    }
    return console.log(modifiedWord);
    }

const errorArgument =() => {
    if (!process.argv[2] || !isNaN(process.argv[2])) {
    console.log("veuillez écrire une chaine sans nombre");
    process.exit(1)
    }
}

errorArgument();
upperCaseOneOnTwo(wordArray());