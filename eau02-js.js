const userString = () => {
   return process.argv.slice(2);
}


const reverseString = (string) => {
    let result =''
 for (let i = string.length - 1; i >= 0; i--) {
        result += string[i] + '\n';
        
    }
   return result
}

const inputString = userString();

console.log(reverseString(inputString));