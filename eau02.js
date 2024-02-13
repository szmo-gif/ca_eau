const getArgument = () => {
   const argument = process.argv.slice(2);
   return argument;
}

const reverseArgument = (argument) => {
    let reversed = [];
    for (let i = argument.length - 1; i >= 0; i--) {
        reversed.push(argument[i]);
    }
    return reversed;
}

const checkEmptyArgument = (argument) => {
   if (argument.length) {
      return reverseArgument(argument);
   } else {
      console.log("Erreur : écrivez une chaîne de caractères");
   }
}

const applyFunction = () => {
   const argument = getArgument();
   const reversed = checkEmptyArgument(argument);
   if (reversed) {
      console.log(reversed.join(' '));
   }
}

applyFunction()