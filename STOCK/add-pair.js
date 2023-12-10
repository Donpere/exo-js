// 1. Somme des nombres pairs :

// Crée une fonction qui prend un nombre en paramètre et 
// retourne la somme de tous les nombres pairs de 0 jusqu'à ce nombre.


function sumPair(nb) {
    if(typeof nb !== 'number') {
        console.log("vous devez entrer un nombre");
        return;
    }
    let res = 0;
    console.log(nb);
    while(nb > 0) 
    {
        if(nb % 2 === 0) 
        {
            res += nb;
        }
        nb--;
    };
    console.log(res);
    return res;
};

sumPair(5);
sumPair(24);
sumPair(18);
