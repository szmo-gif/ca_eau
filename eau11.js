//parcing
const getArgument = () => {
    return process.argv.slice(2);
} 

//principal function
const minAbsoluteDifference = (array) => {
    let differences = "";
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            differences += Math.abs(parseInt(array[i]) - parseInt(array[j])) + " ";
        }
    }

    let result = Infinity;
    const numberArray = differences.trim().split(" ").map(Number);

    if (numberArray.length > 0) {
        result = Math.min.apply(null, numberArray);
    }

    return console.log(result);
}


const handleError = (numbers) => {
    if (!numbers.length || numbers.some(isNaN)) {
        console.log("Erreur : veuillez écrire que des nombres entiers.");
        process.exit(1);
    }
}


handleError(numberArray());
minAbsoluteDifference(numberArray());
