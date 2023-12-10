// function Person() {
//   this.age = 0;

//   // Fonction traditionnelle
//   setInterval(function growUp() {
//     this.age++;
//     console.log(this.age); // Undefined (ou provoque une erreur)
//   }, 1000);

//   // Fonction fléchée
//   setInterval(() => {
//     this.age++;
//     console.log(this.age); // Incrémente correctement
//   }, 1000);
// }

// const person = new Person();


// function Person() {
//   var self = this; 
//   // Au moment de cette déclaration, 'self' est égal à 'this'

//   console.log(self); 
//   // Affiche l'objet actuel auquel 'this' se réfère 
//   // (initialisé à l'objet global dans ce cas)

//   this.age = 0;
//   // À partir de maintenant, 'self' continue à référencer l'objet actuel, 
//   // c'est-à-dire l'instance de 'Person'

//   setInterval(function growUp() {
//     // Utiliser 'self' au lieu de 'this' pour garantir que 'self' 
//     // pointe toujours vers l'instance de 'Person'
//     self.age++;
//     console.log(self.age); // Incrémente correctement
//   }, 1000);
// }

// const person = new Person();

// Fonction ordinaire
function RegularFunction() {
  this.name = 'Alice';
  this.sayHello = function() {
    console.log(this.name);
  };
}

const regularObj = new RegularFunction();
const regularMethod = regularObj.sayHello;

regularObj.sayHello();   // Affiche 'Alice', le 'this' fait référence à 'regularObj'
regularMethod();         // Affiche 'undefined' (ou provoque une erreur en mode strict),
                         // le 'this' est indéfini ou lié à l'objet global

// Fonction fléchée
function ArrowFunction() {
  this.name = 'Bob';
  this.sayHello = () => {
    console.log(this.name);
  };
}

const arrowObj = new ArrowFunction();
const arrowMethod = arrowObj.sayHello;

arrowObj.sayHello();     // Affiche 'Bob', le 'this' fait référence à 'arrowObj'
arrowMethod();           // Affiche 'Bob', le 'this' est capturé lexicalement et reste lié à 'arrowObj'
