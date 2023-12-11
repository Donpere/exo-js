// 04 - Tri de nombres pairs :
// Écrivez une fonction fléchée qui prend un tableau de nombres en paramètre et renvoie un nouveau tableau contenant uniquement les nombres pairs, 
// triés par ordre croissant.

let tab = [4, 9, 17, 11, 8, 23, 2, 12, 20]

const pairSort = (tab) => {
    tab.sort((a, b) => a - b);
    console.log(tab);  
    return tab.filter((nb) => nb % 2 === 0);
};

console.log(pairSort(tab))