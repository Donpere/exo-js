function createEmptySquare(n) {
    return Array.from({ length: n }, () => Array(n).fill(0));
}

const squareSize = 3;  // Taille du carré magique (exemple avec 3x3)
const emptySquare = createEmptySquare(squareSize);
console.log(emptySquare);