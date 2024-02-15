// parcing
const getArgument = () => {
    return process.argv.slice(2);
} 

// Fonction principale 
const minAbsoluteDifference = (array) => {
    let minDifference = Infinity;

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            const diff = Math.abs(array[i] - array[j]);
            if (diff < minDifference) {
                minDifference = diff;
            }
        }
    }

    return minDifference;
}

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
    console.log(minAbsoluteDifference(numbers));
}

applyFunction();

