// 2 - Multiplication de tableau :

// Écrivez une fonction qui prend un tableau de nombres en entrée et renvoie le produit de tous ces nombres.

let tab = [2, 4, 5, 3, 8, 4, 2];

function multTab(tab) {
    let nbr = 1;
    for(i = tab.length; i >= 0; i--) {
        nbr = nbr * tab[i];
    }
    return nbr;
};

let nbr = multTab(tab);
console.log(nbr);
console.log(tab);