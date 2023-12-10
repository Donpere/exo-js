// Exercice 1: Fonctions Fléchées Basiques
// Écrivez des fonctions fléchées pour effectuer les actions suivantes :

// Une fonction qui prend deux paramètres et retourne leur somme.
const sum = (a, b) => {
	if(!a || !b) {
		console.log("error input");
		return 1;
	}
	return a + b;
};


// Une fonction qui prend un nombre en paramètre et retourne son carré.
const squareNb = (nb) => {
	if(!nb) {
		console.log("error input");
		return 1;
	}
	return nb * nb;
};


// Une fonction qui prend deux chaînes de caractères en paramètres et retourne une concaténation des deux.
const strConcact = (str1, str2) => {
	if(!str1 || !str2) {
        console.log("error input");
        return 1;
    }
	return str1 + str2;
};


// Une fonction qui prend un tableau de nombres en paramètre et retourne la somme de tous les éléments.
const sumTab = (tab) => {
	if(!tab) {
		console.log("error input")
		return 1;
	}
	let totalTab = 0;
	let i = tab.length - 1;
	while(i >= 0) {
		totalTab += tab[i];
		i--;
		console.log(totalTab);
		console.log(i);

	}
	return totalTab;
};


console.log(sum(6, 12));

console.log(squareNb(6));


let strCat = strConcact("salut ", "toi");
console.log(strCat);

let tab = [2, 4, 4, 6];
console.log(sumTab(tab));