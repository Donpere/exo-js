// 5. Conversion de température :

// Crée une fonction qui prend une température en degrés Celsius en paramètre et 
// la convertit en degrés Fahrenheit. Utilise la formule de conversion : Fahrenheit = (Celsius * 9/5) + 32.

// celsius * 9/5 = farenheit -32

function celsToFaren(celsius) {
    let farenheit = (celsius * 9/5) + 32;
    console.log(farenheit);
    return farenheit;
}

celsToFaren(45);
celsToFaren(32);
celsToFaren(12);


