// 02 - Changez la couleur du texte ou le fond d'un élément lorsque l'utilisateur clique dessus.
// Ajout et suppression de classes :

const colorTxt = document.getElementsByClassName("ex1")[0]

colorTxt.style.color = "red"

// La méthode getElementsByClassName renvoie une collection HTML, qui se comporte un peu comme un tableau (array-like), mais n'est pas exactement un tableau JavaScript.

// La collection HTML est une liste d'éléments HTML qui partage certaines similitudes avec un tableau, mais elle n'a pas toutes les méthodes et propriétés d'un tableau. Cependant, elle possède une propriété length qui indique le nombre d'éléments dans la collection.

// Pour accéder à un élément spécifique dans la collection, vous utilisez un index, comme avec un tableau. C'est pourquoi vous ajoutez [0] pour obtenir le premier élément de la collection retournée par getElementsByClassName.

// Si vous souhaitez travailler avec un véritable tableau, vous pouvez convertir la collection en tableau à l'aide de la méthode Array.from ou en utilisant le spread operator ([...collection]). Cela vous donnera un tableau avec lequel vous pouvez travailler plus facilement.

document.getElementsByClassName("ex1")[0].style.color = "green"

document.getElementsByClassName("ex1")[0].style.color = "white"
document.getElementsByClassName("ex1")[0].style.textShadow = "2px 2px 3px black";
document.getElementsByClassName("ex1")[0].style.color = "black"

document.getElementsByClassName("ex1")[0].style.fontSize = "50px";

colorTxt.addEventListener("click", function() {
    colorTxt.style.backgroundColor = "red";
});

const myDiv = document.getElementsByClassName("changeCol")[0];
const colors = ["red", "blue", "green", "yellow"]; // Ajoutez autant de couleurs que vous le souhaitez
let currentColorIndex = 0;

myDiv.addEventListener("click", function() {
    // Change la couleur de fond à la prochaine couleur de la liste
    myDiv.style.backgroundColor = colors[currentColorIndex];

    // Passe à la couleur suivante dans la liste
    // % (modulo) permet de revenir à 0
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    console.log(currentColorIndex);
});


// document.getElementsByClassName("ex1")[0].style.backgroundColor = "red"