const userStrings = () => {
    return process.argv.slice(2);
} 

const bubbleSort = (userInput) => {
    for (let i = 0; i < userInput.length - 1; i++) {
        for (let j = 0; j < userInput.length - i - 1; j++) {
            if (parseInt(userInput[j]) > parseInt(userInput[j + 1])) {
                let change = userInput[j];
                userInput[j] = userInput[j + 1];
                userInput[j + 1] = change;
            }
        }
    }
    return userInput.join(' ');
}


const handlingError =(userInput) => {
    if (!userInput.length || userInput.some(isNaN)) {
        console.log("Error : écrivez une suite de nombres");
        process.exit(1);
    }
    }
  

const userInput = userStrings();
handlingError(userInput);
console.log(bubbleSort(userInput));