// PRIME NUMBER
//--------------

// filtrer nombre premier dans un tab

const tab0 = [7, 22, 3, 12, 5, 13];

// let nb = 13
// let i = nb - 1

// console.log(nb % i)
// console.log(nb % 1)


// detectPremier()
// tab.forEach((nb) => {
// 		let i = nb
// 		while (i > 1) {
// 			if (nb % i === 0) {
// 				console.log(nb, " n'est pas un nombre premier")
// 				return
// 			}
// 			else {
// 				i--;
// 			}
// 			console.log("nb % i : ", nb%i)
// 			console.log(i)
// 		}
// 		console.log(nb, "est un nombre premier")
// 		return
// 	}
// );



// const estPremier = (nb) => {
//     let i = nb - 1;
//     while (i > 1) {
//         if (nb % i === 0) {
//             return false;
//         } else {
//             i--;
//         }
//     }
//     return true;
// };

// tab.forEach((nb) => {
//     const isPremier = estPremier(nb);
//     console.log(`${nb} ${isPremier ? 'est' : "n'est pas"} un nombre premier`);
// });


// detectPremier = (nb) => {
// 		let i = nb - 1
// 		while (i > 1) {
// 			if (nb % i === 0) {	
// 				console.log(nb, " n'est pas un nombre premier")
// 				return
// 			}
// 			else {
// 				i--;
// 			}
// 		}
// 		console.log(nb, "est un nombre premier")
// 		return
// 	}

	
// for(let nb of tab) {
// 	detectPremier(nb)
// }
	

// detectPremier2 = (nb) => {
// 	let i = nb - 1
// 	while (i > 1) {
// 		if (nb % i === 0) {	
// 			return false
// 		}
// 		else {
// 			i--;
// 		}
// 	}
// 	return true
// }


// for(let nb of tab) {
// 	const isPrime = detectPremier2(nb)
// 	console.log(`${nb} ${isPrime ? "est" : "n'est pas"} un nombre premier`);
// }

// const detPrime = (nb) => {
// 	let i = nb - 1;
// 	while(i > 1) {
// 	if(nb % i === 0) {
// 		return false;
// 	}
// 	else {
// 		i--;
// 	}
// };
// 	return true;
// };

// for(let nb of tab) {
// 	isPrime = detPrime(nb);
// 	console.log(`${nb} ${isPrime ? "est" : "n'est pas"} un nombre premier`);
// };

// const tab1 = ["salut", "a"]
// const tab2 = ["toi"]
// const tab3 = [...tab1, ...tab2]

// console.log(tab3)

// let tab1 = ["salut", "toi", "a"]
// let tab2 = tab1.sort()
// console.log(tab2)

// let tab11 = [22, 1000, 8, 66, 230]

// let tab12 = tab11.filter((nb) => nb % 2 !== 0)
// tab12 = tab12.sort((a, b) => a - b)
// console.log(tab12)

// const a = "3" 
// const b = 3

// if(a === b) {
// 	console.log("true")
// }
// else {
// 	console.log("false")
// }

let tab1 = [1, 3, 6]
let tab2 = tab1
let tab3 = [...tab2]
tab2[2] = 18
console.log(tab1)
console.log(tab2)
console.log(tab3)

