const threeDigitCombination = () => {
    let result = [];

    for (let code = 0; code <= 9; code++) {
        for (let code2 = code + 1; code2 <= 9; code2++) {
            for (let code3 = code2 + 1; code3 <= 9; code3++) {

                result += `${code}` + `${code2}` + `${code3}` + ' '
            }
        }
    }

    return result
}

console.log(threeDigitCombination())