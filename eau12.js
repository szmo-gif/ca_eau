const numberArray = () => {
    return process.argv.slice(2);
} 

const bubbleSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (parseInt(array[j]) > parseInt(array[j + 1])) {
                let change = array[j];
                array[j] = array[j + 1];
                array[j + 1] = change;
            }
        }
    }
    return console.log(array.join(' '));
}


const handleError =(array) => {
    if (!array.length || array.some(isNaN)) {
        console.log("Error : écrivez une suite de nombres");
        process.exit(1);
    }
}

handleError(numberArray());
bubbleSort(numberArray());
  
