//parcing
const getArgument = () => {
    return process.argv.slice(2); 
} 

//principal function
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

    return array
}

//handle error 
const isNotValidNumbers = () => {
    const numbers = getArgument();
    if (!numbers.length || numbers.some(isNaN)) {
        console.log("Erreur : veuillez écrire que des nombres entiers.");
        return true;
    }
    return false;
}

// apply function
const applyFunction = () => {
    if (isNotValidNumbers()) {
        return;
    }
    
    const numbers = getArgument();
    const principalFunction = selectionSort(numbers)
    console.log(principalFunction.join(" "));
}

applyFunction();

