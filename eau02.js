const wordArray = () => {
   return process.argv.slice(2);
}


const reverseArray = (array) => {
    let result =''
 for (let i = array.length - 1; i >= 0; i--) {
        result += array[i] + '\n';
        
    }
   return console.log(result);
}

const handleError = (array) => {
   if (!array) {
      console.log("Erreur : écrivez une chaine de caractère.");
   }
}

handleError(wordArray())
reverseArray(wordArray())