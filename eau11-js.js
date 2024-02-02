const userStrings = () => {
    return process.argv.slice(2);
} 

const minAbsoluteDifference = (userStrings) => {
    let differences = "";
    for (let i = 0; i < userStrings.length; i++) {
        for (let j = i + 1; j < userStrings.length; j++) {
            differences += Math.abs(parseInt(userStrings[i]) - parseInt(userStrings[j])) + " ";
        }
    }

    let result = Infinity;
    const numberArray = differences.trim().split(" ").map(Number);

    if (numberArray.length > 0) {
        result = Math.min.apply(null, numberArray);
    }

    return result;
}

const handlingError = (userInput) => {
    if (!userInput.length || userInput.some(isNaN)) {
        console.log("Erreur : veuillez écrire que des nombres entiers.");
        process.exit(1);
    }
    return userInput;
}

const userInput = userStrings();
handlingError(userInput);
console.log(minAbsoluteDifference(userInput));
