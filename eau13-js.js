const userString = () => {
    return process.argv.slice(2); 
} 

const selectionSort = (userInput) => {

    for (let i = 0; i < userInput.length; i++) {
    let minIndex = i;

        for (let j = i + 1; j < userInput.length; j++) {
            if (parseInt(userInput[j]) < parseInt(userInput[minIndex])) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            let temp = userInput[i];
            userInput[i] = userInput[minIndex];
            userInput[minIndex] = temp;
        }
    }

    return userInput.join(' ')
}

const handlingError =(userInput) => {
    if (!userInput.length || userInput.some(isNaN)) {
        console.log("Error : écrivez une suite de nombres");
        process.exit(1);
    }
}
  
const userInput = userString();
handlingError(userInput);
console.log(selectionSort(userInput));