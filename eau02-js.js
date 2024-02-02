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


console.log(reverseString(userString()));