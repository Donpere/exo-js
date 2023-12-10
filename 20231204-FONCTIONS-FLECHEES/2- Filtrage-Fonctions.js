// Exercice 2: Filtrage avec des Fonctions Fléchées
// Utilisez des fonctions fléchées avec des méthodes de tableau pour effectuer les actions suivantes :

// Fonction ternaire : 
// L'opérateur (ternaire) conditionnel est le seul opérateur JavaScript qui comporte trois opérandes. 
// Cet opérateur est fréquemment utilisé comme raccourci pour la déclaration de Instructions/if...else.

// function getFee(isMember) {
//     return isMember ? '$2.00' : '$10.00';
//   }
  
//   console.log(getFee(true));
//   // Expected output: "$2.00"
  
//   console.log(getFee(false));
//   // Expected output: "$10.00"
  
//   console.log(getFee(null));
//   // Expected output: "$10.00"



// 1 Filtrer les nombres pairs d'un tableau de nombres.

const tab = [1, 4, 5, 7, 5, 6, 8, 9];
console.log(tab);


// const filtPair = (nb) => {
// 		if(nb % 2 === 0) {
// 			return nb;
// 		}
// 		else {
// 			return;
// 		}
// };

// const tabRes = tab.filter(filtPair);


// const tabRes = tab.filter((nb) => {
// 	if(nb % 2 === 0) {
// 		return nb;
// 	}
// 	else {
// 		return;
// 	}
// });


// REPONSE GPT :
// 
// Votre approche est correcte, mais vous pouvez simplifier davantage votre fonction fléchée. 
// La méthode filter attend simplement que la fonction de filtrage retourne true pour inclure 
// l'élément dans le tableau résultant, et false pour l'exclure. Vous n'avez pas besoin d'un bloc if/else dans ce cas.

const tabRes = tab.filter(nb => nb % 2 === 0);

console.log(tabRes);



// 2 Filtrer les chaînes de caractères qui ont une longueur supérieure à 5 d'un tableau de chaînes.

const tabStr = ["salutation", "tu", "vas", "bien", "fripouille"];

const filterFive = tabStr.filter(str => str.length > 5);

console.log(filterFive);


// 3 Doubler chaque élément d'un tableau de nombres.
const tabTwice = tab.map(x => x * 2);
console.log(tabTwice);


// 4 Filtrer les personnes dont l'âge est supérieur à 30 à partir d'un tableau d'objets { nom: 'Nom', age: XX }.

function Personne(nom, age) {
	this.nom = nom;
	this.age = age;
  };

  const marie = new Personne ("marie", 27);
  const roger = new Personne ("roger", 48);
  const francois = new Personne ("francois", 16);
  const josiane = new Personne ("josiane", 72);
  const christophe = new Personne ("christophe", 33);
  const jeanne = new Personne ("jeanne", 22);
	  

const tabPersonne = [marie, roger, francois, josiane, christophe, jeanne];

console.log(tabPersonne);

const tabAgeThirty = tabPersonne.filter(obj => obj.age > 30);

console.log(tabAgeThirty);


