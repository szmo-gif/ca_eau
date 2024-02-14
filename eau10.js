//parcing
const getArgument = () => {
    return process.argv.slice(2);
};

//principal function
const indexWanted = (array) => {
    const lastArgument = array[array.length - 1];
    let position = -1;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === lastArgument) {
            position = i;
            break;
        }
    }
    
    //handle error
    if (position === -1) {
       console.log("-1");
       process.exit(1)
    }

    return position;
};

//apply function
const applyFunction = () => {
    const argument = getArgument();
    const principalFunction = indexWanted(argument)

    console.log(principalFunction);
}

applyFunction();