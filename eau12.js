//parcing
const getArgument = () => {
    return process.argv.slice(2);
};

//principal function
const bubbleSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (parseInt(array[j]) > parseInt(array[j + 1])) {
                let change = array[j];
                array[j] = array[j + 1];
                array[j + 1] = change;
            }
        }
    }
    return array;
};

// gestion d'erreur
const isNotValidNumbers = () => {
    const numbers = getArgument();
    if (!numbers.length || numbers.some(isNaN)) {
        console.log("Erreur : veuillez écrire que des nombres entiers.");
        return true;
    }
    return false;
}

// Fonction pour appliquer les opérations
const applyFunction = () => {
    if (isNotValidNumbers()) {
        return;
    }
    
    const numbers = getArgument();
    const principalFunction = bubbleSort(numbers)
    console.log(principalFunction.join(" "));
}

applyFunction();

