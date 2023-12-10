// Exercice 10: Gestion d'une Bibliothèque
// Créez des classes pour modéliser une bibliothèque avec des livres, des auteurs, et des emprunteurs. 
// Implémentez des méthodes pour ajouter des livres, gérer les emprunts, etc.

On peut créer un "objet littéral" :

// Création d'un objet littéral représentant une personne
let personne = {
  nom: "Doe",
  prenom: "John",
  afficherNomComplet: function() {
    console.log(`${this.prenom} ${this.nom}`);
  }
};

// Dans cet exemple, personne est un objet littéral avec des propriétés telles que nom et prenom, 
// ainsi qu'une méthode afficherNomComplet pour afficher le nom complet. Les valeurs des propriétés et 
// la définition de la méthode sont fournies directement dans la syntaxe de l'objet littéral.

// L'utilisation de classes est souvent préférée lorsque vous avez besoin de créer plusieurs objets du même type 
// avec une structure et un comportement similaires. Les classes offrent une manière plus formelle de définir des objets, 
// avec des constructeurs et des méthodes spécifiques à la classe.

// Cependant, pour des cas simples ou ponctuels, créer des objets littéraux peut être une approche rapide et directe. 
// Les classes deviennent plus utiles lorsque la logique de votre programme devient plus complexe et 
// que vous avez besoin d'une approche plus organisée et réutilisable.

// Appel de la méthode pour afficher le nom complet
personne.afficherNomComplet();  // Affiche "John Doe"

// Dans le contexte de la programmation orientée objet en JavaScript, vous pouvez certainement créer des instances d'objets sans avoir une classe explicite.

// En JavaScript, un objet littéral peut être considéré comme une instance unique d'un "objet anonyme", 
// et vous pouvez créer autant de ces objets que nécessaire. 
// Cependant, lorsque votre application devient plus complexe et que vous avez besoin de créer plusieurs objets avec la même structure et les mêmes méthodes, 
// l'utilisation de classes devient une pratique plus organisée.


// La création d'une classe et d'un objet est une partie fondamentale de la programmation orientée objet (POO). 
// Voici la différence entre la création d'une classe et d'un objet en POO :

// Classe :
// Définition : Une classe est une structure qui définit un type d'objet. 

// Elle spécifie les propriétés (attributs) et les méthodes (comportements) que les objets de cette classe auront.

// Rôle : La classe agit comme un modèle ou un plan pour créer des objets. Elle définit la structure générale, 
// les caractéristiques et les comportements que les instances de la classe auront.

// Exemple (JavaScript) :

class Personne {
  constructor(nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
  }

  afficherNomComplet() {
    console.log(`${this.prenom} ${this.nom}`);
  }
}

// Objet :
// Définition : Un objet est une instance spécifique d'une classe. 
// C'est une occurrence concrète basée sur le modèle fourni par la classe.

// Rôle : Les objets sont des entités réelles qui peuvent être créées et manipulées dans le programme. 
// Ils héritent des propriétés et des méthodes définies par leur classe parente.

// Création (JavaScript) :

// javascript
// Copy code
// let personne1 = new Personne("Doe", "John");
// let personne2 = new Personne("Smith", "Jane");
// Utilisation : Les objets sont utilisés pour représenter des instances spécifiques avec des valeurs distinctes pour leurs attributs. 
// Vous pouvez appeler les méthodes de la classe à partir de ces objets.

// javascript
// Copy code
// personne1.afficherNomComplet();  // Affiche "John Doe"
// personne2.afficherNomComplet();  // Affiche "Jane Smith"
// En résumé, une classe définit un modèle ou une structure, tandis qu'un objet est une instance spécifique de cette classe. 
// La classe est comme un plan de construction, et les objets sont les constructions réelles créées en suivant ce plan. 
// La classe est statique, tandis que l'objet est dynamique et peut contenir des données spécifiques à son instance.

// on crée une class Personne, dedans on aura

class Personne {
    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }

    afficherNomComplet() {
        console.log(`${this.prenom} ${this.nom}`);
    }
}


function creerObjet() {
  let proprietePrivee = 42;

  return {
    obtenirProprietePrivee: function() {
      return proprietePrivee;
    }
  };
}

let monObjet = creerObjet();
console.log(monObjet.obtenirProprietePrivee());  // 42
