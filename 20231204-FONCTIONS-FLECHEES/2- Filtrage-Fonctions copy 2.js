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

const tabNb = [3, 2, 5, 9, 2];
const tabStr = ["Salutation", "a", "toi", "papounet"];
function Personne(nom, age) {
    this.nom = nom;
    this.age = age;
};

const maman = new Personne("regine", 70);
const papa = new Personne("Joseph", 67);

const tabObj = [maman, papa] 

console.log(Personne);



// 1 Filtrer les nombres pairs d'un tableau de nombres.

const tabRes = tabNb.filter(nb => nb % 2 === 0);
console.log(tabRes);





// 2 Filtrer les chaînes de caractères qui ont une longueur supérieure à 5 d'un tableau de chaînes.

const tabPlusFive = tabStr.filter(str => str.length > 5);

console.log(tabPlusFive);



// 3 Doubler chaque élément d'un tableau de nombres.

const tabDubb = tabNb.map(nb => nb * 2);
console.log(tabDubb);




// 4 Filtrer les personnes dont l'âge est supérieur à 17 à partir d'un tableau d'objets { nom: 'Nom', age: XX }.

const tabMaj = tabObj.filter(obj => obj.age > 17);
console.log(tabMaj);


