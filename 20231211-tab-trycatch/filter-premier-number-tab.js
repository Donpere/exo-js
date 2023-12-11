// filtrer nombre premier dans un tab

const tab = [7, 22, 3, 12, 5, 13];

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



const estPremier = (nb) => {
    let i = nb - 1;
    while (i > 1) {
        if (nb % i === 0) {
            return false;
        } else {
            i--;
        }
    }
    return true;
};

tab.forEach((nb) => {
    const isPremier = estPremier(nb);
    console.log(`${nb} ${isPremier ? 'est' : "n'est pas"} un nombre premier`);
});
