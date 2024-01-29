const userString = () => {
    return process.argv[2].toLowerCase();
} 

const upperCaseOneOnTwo = (inputString) => {

    const letters = inputString.split('');

    let modifiedString = '';

    let nonWhitespaceCount = '';

    for (let i = 0; i < letters.length; i++) {
        if (letters[i] !== ' ') { 
            if (nonWhitespaceCount % 2 === 0) {
            modifiedString += letters[i].toUpperCase();
            } else {
            modifiedString += letters[i];
            }
            nonWhitespaceCount++;
        } else {
            modifiedString += ' '; 
        }
    }
    return modifiedString;
    }

const errorArgument =(string) => {
    if (!string || !isNaN(string)) {
    throw new Error ("veuillez écrire une chaine sans majuscule")
}}

try {
    let userInput = userString();
    errorArgument(userInput);

    const result = upperCaseOneOnTwo(userInput);
    console.log(result);

} catch (error) {
    console.error(error.message);
}
