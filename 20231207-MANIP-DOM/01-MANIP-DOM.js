// Changement de texte :

// 1 - Sélectionnez un paragraphe dans votre HTML et changez son texte à l'aide de JavaScript.
// Changement de style :

const bal = document.getElementsByClassName("ex1")[0];
const t1 = "Nouveau texte 1";
const t2 = "NEW TEXT 2";

console.log(bal);

let isT1Visible = true;

// la fonction est appelée toutes les 2 secondes et bascule (toggle) un booleen
// sur isT1Visbible
// Si t1 est true alors elle modifie le texte, puis met t1 à false
// puis setInterval rappelle la fonction et fait l'inverse
const aternateText = () => {
    if (isT1Visible) {
        bal.innerText = t1;
    } else {
        bal.innerHTML = t2;
    }
    isT1Visible = !isT1Visible;
};

// Appeler toggleText toutes les 5 secondes en boucle
setInterval(aternateText, 2000);
