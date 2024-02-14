//parcing
const getArgument = () => {
  return process.argv[2];
} 

//principal function
const isNaN = (array) => {

    for (let i = 0; i < array.length; i++) {
    const caractere = array[i];
    
        if (!(caractere >= '0' && caractere <= '9')) {  //(isNaN(caractere)) 
            return false;
        }
    }

return true;
}

//handle error 
const validArgument =() => {
    if (!process.argv[2]){
        console.log("Ecrivez une chaine de caractère");
        process.exit(1)
    }
}

const applyFunction = () => {
    validArgument();
    const argument = getArgument()
    const principalFunction = isNaN(argument)

    console.log(principalFunction);
}

applyFunction()