BACKTRACKING-CARRE-MAGIQUE

Fonction pour créer une matric remplie de 0
///////////////////////////////////////////

function createEmptySquare(n) {
    return Array.from({ length: n }, () => Array(n).fill(0));
}

const squareSize = 3;  // Taille du carré magique (exemple avec 3x3)
const emptySquare = createEmptySquare(squareSize);
console.log(emptySquare);



Array.from()
/////////////
Array.from() est une méthode statique de la classe Array. 
Elle crée une nouvelle instance de tableau à partir d'un objet itérable ou d'une structure semblable à un tableau.

Array(n) crée un tableau de longueur n.

fill(0) remplit chaque élément du tableau avec la valeur 0.

Ainsi, Array.from({ length: n }, () => Array(n).fill(0)) crée une matrice carrée de taille n x n remplie de zéros.


Dans Array.from(), les deux arguments attendus sont une source itérable (dans ce cas, { length: n }) 
et une fonction de mapping (dans ce cas, () => Array(n).fill(0)).


Oui, c'est correct. Dans l'expression { length: n }, length est une propriété de l'objet qui spécifie la longueur du nouveau tableau. 
Donc, si n est égal à 3, cela signifie que le tableau résultant aura une longueur de 3, 
et chaque élément du tableau sera déterminé par la fonction de mapping () => Array(n).fill(0), 
créant ainsi un tableau de 3 tableaux, chacun rempli de zéros.