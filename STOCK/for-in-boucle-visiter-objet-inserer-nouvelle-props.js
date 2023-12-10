/* 3. Boucle for-in sur un objet :

Crée un objet avec plusieurs propriétés. Utilise une boucle for-in pour parcourir toutes les propriétés 
de l'objet et affiche-les dans la console.
*/

let obj1 = {
	jour: "lundi", 
	date: 18,
	mois: "mars"
}

let obj2 = {
	sexe: "homme",
	adresse: 6,
	rue: "emile dutrain"
}

// l'ajout d'un objet (ou variable ou autre) dans un objet est très simple : 
// nom-objet.nom-nouvelle-prop = obj-ou-variable-ainclure
obj1.cont2 = obj2;

/* ici blabla sera la clef (dans l'ordre) et obj[blabla] la valeur associée
*/

for(const blabla in obj1) {
	console.log(blabla);
	console.log(`${blabla} : ${obj1[blabla]}`);
};

