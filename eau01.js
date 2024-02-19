function twoElementsCombination() {
    let results = [];

    for (let i = 0; i <= 98; i++) {
        for (let j = i + 1; j <= 99; j++) {
            let firstNumber = [];
            let secondNumber = [];
            if (i < 10) {
                firstNumber = `0${i}`;
            } else {
                firstNumber = `${i}`;
            }

            if (j < 10) {
                secondNumber = `0${j}`;
            } else {
                secondNumber = `${j}`;
            }

            results.push(`${firstNumber} ${secondNumber}` + ",");
        }
    }

    return results.join(" ");
}

console.log(twoElementsCombination());
