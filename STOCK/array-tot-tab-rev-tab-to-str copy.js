// 5. Manipulation de chaînes de caractères :

// Crée une fonction qui prend une phrase en paramètre et retourne la phrase inversée. 
// Par exemple, si la phrase est "Bonjour le monde", la fonction doit retourner "ednom el ruojnoB".

const str = "Salut à toi"

const strRv = (str) => {
    let strRev = [];
    let i = str.length - 1;
    let j = 0;

    while (i >= 0) {
        strRev[j] = str[i];
        i--;
        j++;
    }
    return strRev.join("");
};

let strReversed = strRv(str);
console.log(strReversed);
console.log(typeof(strReversed));