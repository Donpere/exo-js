/* 1. Concaténation d'objets :

// Crée deux objets représentant des personnes avec des propriétés telles que 
// "nom", "âge" et "ville". 
// Concatène ces deux objets pour créer un nouvel objet représentant une troisième personne.
*/

let obj1 = {
    nom: "mar",
    prenom: "dom",
    age: 28
}

let obj2 = {
    ville: "paris",
    emploi: "cadre",
    vehicule: true
}

let tab1 = ["salut", "toi"];
let tab2 = ["tu", "vas", "bien"];

let tab3 = tab1.concat(tab2);

console.log(tab3);

// spread : ... + var

let obj3 = {...obj1, ...obj2};

console.log("objet 3 : ", obj3);

let obj4 = Object.assign( {}, obj1, obj2 );

console.log("objet 4 : ", obj4);

