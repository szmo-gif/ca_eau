const numberArray = () => {
  return process.argv[2];
} 

const numeriqueOnly = (array) => {

    for (let i = 0; i < array.length; i++) {
    const caractere = array[i];
    
        if (!(caractere >= '0' && caractere <= '9')) {  //(isNaN(caractere)) 
            return false;
        }
    }

return true;
}

const handleError =() => {
    if (!process.argv[2]){
        console.log("Ecrivez une chaine de caractère");
        process.exit(1)
    }
}

handleError();
console.log(numeriqueOnly(numberArray()));