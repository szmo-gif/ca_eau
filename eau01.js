function twoElementsCombination() {
    let results = [];

    for (let i = 0; i <= 98; i++) {
        for (let j = i + 1; j <= 99; j++) {
            // Formatage pour ajouter un zéro devant les nombres < 10
            let firstNumber = i < 10 ? `0${i}` : `${i}`;
            let secondNumber = j < 10 ? `0${j}` : `${j}`;
            results.push(`${firstNumber} ${secondNumber}` + ',');
        }
    }

    return results.join(" ") ;
}

console.log(twoElementsCombination());