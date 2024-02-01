const userStrings = () => {
    return process.argv.slice(2);
};

const indexWanted = (userInput) => {
    const lastArgument = userInput[userInput.length - 1];
    let position = -1;
    for (let i = 0; i < userInput.length - 1; i++) {
        if (userInput[i] === lastArgument) {
            position = i;
            break;
        }
    }

    if (position === -1) {
        throw new Error("-1");
    }

    return position;
};

try {
    const userInput = userStrings();
    const result = indexWanted(userInput);

    console.log(result);
} catch (error) {
    console.error(error.message);
}