const userString = () => {
  return process.argv[2];
} 

const numeriqueOnly = (userInput) => {

    for (let i = 0; i < userInput.length; i++) {
    const caractere = userInput[i];
    
        if (isNaN(caractere)) {
            return false;
        }
    }

return true;
};

const userInput = userString();

console.log(numeriqueOnly(userInput));