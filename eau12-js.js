const userStrings = process.argv.slice(2);

for (let i = 0; i < userStrings.length; i++) {
    for (let j = 0; j < userStrings.length - i - 1; j++) {
        if (userStrings[j] > userStrings[j + 1]) {
            // Échange des éléments si ils sont dans le mauvais ordre
            let temp = userStrings[j];
            userStrings[j] = userStrings[j + 1];
            userStrings[j + 1] = temp;
        }
    }
}

console.log(userStrings);
