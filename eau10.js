const wordsArray = () => {
    return process.argv.slice(2);
};

const indexWanted = (array) => {
    const lastArgument = array[array.length - 1];
    let position = -1;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === lastArgument) {
            position = i;
            break;
        }
    }
    
    if (position === -1) {
       console.log("-1");
       process.exit(1)
    }

    return console.log(position);
};

indexWanted(wordsArray());