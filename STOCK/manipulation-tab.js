// 4. Tableau de nombres pairs :

// Crée une fonction qui prend un nombre en paramètre et 
// retourne un tableau contenant les nombres pairs de 0 
// jusqu'à ce nombre.

function pairTab(nb) {
    if(!nb || typeof(nb) !== 'number') {
        console.log("vous devez entrer un nombre");
        return;
    }
    
    // attention de declarer un tableau vide et non une variable en faisant bien = []
    let tab = [];
    let j = 0;

    while(nb >= 0) {
        if(nb % 2 === 0) {
            tab[j] = nb;
            j++;
        };
        nb--;
    };



    return tab.reverse();
};

console.log("77 : ", pairTab(77));