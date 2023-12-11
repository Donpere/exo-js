// 03 - Concaténation de prénoms :
// Écrivez une fonction fléchée qui prend un tableau de prénoms en paramètre et 
// renvoie une seule chaîne de prénoms concaténés, séparés par des virgules.

const tab = ["Salutation", "à", "toi", "grandissime", "papounet"]

const catTab = (tab) => tab.join(",");

console.log(catTab(tab))