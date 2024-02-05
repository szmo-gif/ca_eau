const numberArray = () => {
    return process.argv.slice(2); 
} 

const selectionSort = (array) => {

    for (let i = 0; i < array.length; i++) {
    let minIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            if (parseInt(array[j]) < parseInt(array[minIndex])) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }

    return console.log(array.join(' '))
}

const handleError =(array) => {
    if (!array.length || array.some(isNaN)) {
        console.log("Error : écrivez une suite de nombres");
        process.exit(1);
    }
}

handleError(numberArray());
//console.log(selectionSort(numberArray()));
selectionSort(numberArray())