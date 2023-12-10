// 5. Manipulation de chaînes de caractères :

// Crée une fonction qui prend une phrase en paramètre et retourne la phrase inversée. 
// Par exemple, si la phrase est "Bonjour le monde", la fonction doit retourner "ednom el ruojnoB".

function revers(str) {
	let i = 0;
	let tmp = 0;
	
	let tab = [...str];
	// console.log(tab);
	let j = tab.length - 1;
	// console.log(j);

	while(i < j) {
		tmp = tab[i];
		tab[i] = tab[j];
		tab[j] = tmp;
		i++;
		j--;
		// console.log(i, j, tab);
	}

	let str2 = tab.join("");
	console.log("str :", str);
	console.log("tab :", tab);
	console.log("string :", str2);
}

revers("salut");
// revers("jeanjean");
// revers("hippopotame");

// VERSION GPT :

function reverseString(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
      result += str[i];
    }
    return result;
  }
  
  let reversed = reverseString("salut");
  let tip = typeof(reversed);
  console.log("tip :", tip);
  console.log(reversed); // tulas