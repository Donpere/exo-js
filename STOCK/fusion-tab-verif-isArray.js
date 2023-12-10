// 3. Fusion de tableaux :

// Crée une fonction qui prend deux tableaux en paramètres et 
// renvoie un nouveau tableau qui est la fusion des deux tableaux.

function fuseTab(tab1, tab2) {
    // verif qu'il y a bien deux arguments, inutile si on fait !Array.isArray... etc
    // if(!tab1 || !tab2) {
    //     console.log("la fonction attend deux tableaux");
    //     return 1;
    // }


    // verif qu'on a bien reçu 2 tableaux
    if (!Array.isArray(tab1) || !Array.isArray(tab2)) {
        console.log("La fonction attend deux tableaux en entrée.");
        return 1;
    };
    
    return (tab1.concat(tab2));
}

let tab1 = ["salut", 5, "papa"];
let tab2 = [ 44, "chaud"]

let tab = fuseTab(tab1, tab2);
console.log(tab);