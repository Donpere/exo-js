// 4 - Table de multiplication :

// Écrivez une fonction qui prend un nombre en entrée et affiche la table de multiplication de ce nombre de 1 à 10.


function multTab(nbr) {
    for (let i = 1; i <= 10; i++) {
        console.log(nbr * i);
    }
}

multTab(12);
