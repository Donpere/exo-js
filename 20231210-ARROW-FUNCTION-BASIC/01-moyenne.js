// 01 Calcul de la moyenne :
// Écrivez une fonction fléchée qui prend un tableau de nombres en paramètre et renvoie la moyenne de ces nombres.

const tab = [4, 8, 2, 12, 20]

const averageTab = (tab) => {
    let i = tab.length - 1;
    let nb = 0;
    while (i >= 0) {
        nb += tab[i];
        i--;
    }
    console.log(nb)
    return nb / tab.length;
};

console.log(averageTab(tab))