// 07 - function pour faire deviner un nombre aléatoire

const randomNb = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let nb = randomNb(0, 10);
console.log(nb)

const guessNb = () => {
    let input = prompt("Entrez un chiffre : ");

    let number = parseInt(input, 10);
    // une alternative est de multiplier par 1, il renverra NaN s'il essaie de multiplier
    // autre chose qu'un number :
    // let number = input * 1

    // if (!isNaN(number) && Number.isInteger(number)) {
    //     if (number === nb) {
    //         console.log("C'est gagné !");
    //     } else {
    //         console.log("Ce n'est pas le bon chiffre, essayez à nouveau.");
    //         guessNb();
    //     }
    // } else {
    //     console.log("Ce n'est pas un nombre entier valide. Essayez à nouveau.");
    //     guessNb();
    // }
    // };

    if (Number.isInteger(number)) {
        if (number === nb) {
            console.log("C'est gagné !");
        } else {
            console.log("Ce n'est pas le bon chiffre, essayez à nouveau.");
            guessNb();
        }
    } else {
        console.log("Ce n'est pas un nombre entier valide. Essayez à nouveau.");
        guessNb();
    }
};

guessNb();
