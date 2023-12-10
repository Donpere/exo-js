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

const tabNb = [2, 14, 3, 9, 23, 4];

const tabStr = ["salutation", "tu", "vas", "bien", "fripouille"];

function Personne(nom, age) {
  this.nom = nom;
  this.age = age;
}

// version en TS : function Personne2(nom: any, age: any): void;

const maman = new Personne("regine", 74);
const papa = new Personne("joseph", 73);
const frereUn = new Personne("christophe", 48);
const frereDeux = new Personne("yoann", 74);
const cherie = new Personne("anne", 43);
const fiston = new Personne("gabin", 8);
const voisine = new Personne("stephanie", 22);


const tabPers = [maman, papa, frereUn, frereDeux, cherie, fiston, voisine];

console.log(tabNb);
console.log(tabStr);
console.log(tabPers);

// 1 Filtrer les nombres pairs d'un tableau de nombres.

const tabFtwo = tabNb.filter(nb => nb % 2 === 0);






// 2 Filtrer les chaînes de caractères qui ont une longueur supérieure à 5 d'un tableau de chaînes.

const tabFiveStr = tabStr.filter(str => str.length > 5);




// 3 Doubler chaque élément d'un tableau de nombres.

const tabDouble = tabNb.map(nb => nb * 2);





// 4 Filtrer les personnes dont l'âge est supérieur à 30 à partir d'un tableau d'objets { nom: 'Nom', age: XX }.

const objThirty = tabPers.filter(obj => obj.age > 30);



console.log(tabFtwo);
console.log(tabFiveStr);
console.log(tabDouble);

console.log(objThirty);