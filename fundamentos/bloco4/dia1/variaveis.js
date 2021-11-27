
//// Exercicio 1

const a = 9;
const b = 30;
const c = 20;

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

//// Exercicio 2

if (a > b) {
    console.log(a)
} else {
    console.log(b)
}

//// Exercicio 3


if (a > b && a > c) {
    console.log(a)
} else if (b > a && b > c) {
    console.log(b)
} else if (c > a && c > b) {
    console.log(c)
}

//// Exercicio 4

const num = null;

if (num > 0) {
    console.log("positive");
} else if (num < 0) {
    console.log("negative");
} else if (num === 0) {
    console.log("zero")
}

//// Exercicio 5

const ang1 = null;
const ang2 = null;
const ang3 = null;

if (ang1 + ang2 + ang3 == 180) {
    console.log(true);
} else {
    console.log(false);
}

//// Exercicio 6

const piece = null;

if (piece.toLowerCase() === "pawn") {
    console.log("forward, one square");
} else if (piece.toLowerCase() === "knight") {
    console.log("diagonal from one corner of any two-by-three rectangle of squares to the farthest opposite corner.")
} else if (piece.toLowerCase() === "rook") {
    console.log("any number of vacant squares forwards, backwards, left, or right in a straight line.")
} else if (piece.toLowerCase() === "bishop") {
    console.log("any number of vacant squares diagonally in a straight line.")
} else if (piece.toLowerCase() === "king") {
    console.log("one vacant square in any direction: forwards, backwards, left, right, or diagonally;")
} else if (piece.toLowerCase() === "queen") {
    console.log("any number of vacant squares in any direction: forwards, backwards, left, right, or diagonally, in a straight line.")
}

//// Exercicio 7

const nota = null;

if (nota >= 90) {
    console.log("A")
} else if (nota >= 80) {
    console.log("B");
} else if (nota >= 70) {
    console.log("C");
} else if (nota >= 60) {
    console.log("D");
} else if (nota >= 50) {
    console.log("E");
} else if (nota < 50) {
    console.log("F");
} else if (nota > 100 || nota < 0) {
    console.log("error");
} 