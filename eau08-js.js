const userString = () => {
  return process.argv[2];
} 

const numeriqueOnly = (userInput) => {

    for (let i = 0; i < userInput.length; i++) {
    const caractere = userInput[i];
    
        if (!(caractere >= '0' && caractere <= '9')) {  //(isNaN(caractere)) 
            return false;
        }
    }

return true;
};

const handlingError =(userInput) => {
    if (!userInput){
        throw new Error ("Ecrivez une chaine de caractère");
    }
    return userInput;
}
try {
    const userInput = userString();
    handlingError(userInput);

    console.log(numeriqueOnly(userInput));

} catch (error) {
    console.error(error.message);
}
