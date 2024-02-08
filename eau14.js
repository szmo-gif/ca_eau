const wordsArray = () => {
    let user = process.argv.slice(2);
    let array = [];

    user.forEach(element => {
        let words = element.split(' ');
        array.push(words);
    });
    return array;
};

const asciiComparison = (a, b) => {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
        if (a.charCodeAt(i) !== b.charCodeAt(i)) {
            return a.charCodeAt(i) - b.charCodeAt(i);
        }
    }
    return a.length - b.length;
};

const user = wordsArray();
user.forEach(array => {
    array.sort(asciiComparison);
    console.log(array); // Afficher les mots triés pour chaque tableau interne
});

console.log(user); // Afficher les tableaux de mots triés
