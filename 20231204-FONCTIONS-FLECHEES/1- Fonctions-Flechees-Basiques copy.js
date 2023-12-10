// Exercice 1: Fonctions Fléchées Basiques
// Écrivez des fonctions fléchées pour effectuer les actions suivantes :

// 1 - Une fonction qui prend deux paramètres et retourne leur somme.

const SumDub = (a, b) => {
	return a + b;
}

const sumDub2 = (a, b) => a + b;

console.log("Somme : ", SumDub(6, 8));



// 2 - Une fonction qui prend un nombre en paramètre et retourne son carré.

const squareNb = (nb) => {
	return nb * nb;
};

const squareNb2 = nb => nb * nb;

console.log("carre : ", squareNb(6));



// 3 - Une fonction qui prend deux chaînes de caractères en paramètres et retourne une concaténation des deux.

const concatStr = (str1, str2) => {
	return str1 + str2;
};

const concatStr2 = (str1, str2) => str1 + str2;

console.log("Concat chaines : ", concatStr("Salut ", "toi"));



// 4 - Une fonction qui prend un tableau de nombres en paramètre et retourne la somme de tous les éléments.

const tabNb = [2, 4, 1, 5];

const sumTab = (tab) => {
	let i = tab.length - 1;
	let nb = 0;

	while(i >= 0) {
		nb += tab[i];
		i--;
	}
	return nb;
};

const sumTab2 = tab => tab.reduce((acc, curr) => acc + curr, 0);

console.log("Somme du tab :", sumTab(tabNb));

