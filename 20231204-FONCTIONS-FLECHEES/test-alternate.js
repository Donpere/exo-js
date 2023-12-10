// Récupération des éléments du DOM
const xxxInp = document.getElementById("xxx-nb");
const xxxBtn = document.getElementById("xxx-valid");
const xxxRslt = document.getElementById("xxx-result");

// Fonction fléchée pour calculer le carré d'un nombre envoyé
const squareNb = (nb) => {
	return nb * nb;
}

// Fonction pour gérer le clic sur le bouton
const appCalc = () => {
	// Récupérer la valeur de l'input
	const xxxVal = parseFloat(xxxInp.value);
  
	// Vérifier si la valeur est un nombre
	if (!isNaN(xxxVal)) {
		// Appliquer votre fonction à la valeur
		const result = squareNb(xxxVal);

		// Mettre à jour la div de résultat
		xxxRslt.textContent = `Résultat : ${result}`;
	} 
	
	else {
		// Afficher un message d'erreur si la valeur n'est pas un nombre
		xxxRslt.textContent = 'Veuillez entrer un nombre valide.';
	}
};

// Gestionnaire d'événement pour le clic sur le bouton
xxxBtn.addEventListener('click', appCalc);
