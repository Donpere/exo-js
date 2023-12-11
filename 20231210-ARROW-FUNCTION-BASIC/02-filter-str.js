// 02 - Filtrage des chaînes :
// Écrivez une fonction fléchée qui prend un tableau de chaînes en paramètre et 
// renvoie un nouveau tableau contenant uniquement les chaînes de longueur supérieure à 5 caractères.

const tab = ["Salutation", "à", "toi", "grandissime", "papounet"]

let fTab = []

const strFive = (tab) => {
    return tab.filter((b) => b.length > 5)
}

fTab = strFive(tab)
console.log(fTab)

// idem sans variable :

// const tab = ["Salutation", "à", "toi", "grandissime", "papounet"];

// const strFive = (tab) => tab.filter((b) => b.length > 5);

// console.log(strFive(tab));
