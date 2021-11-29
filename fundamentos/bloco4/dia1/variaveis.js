
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


//// Exercicio 8

const num1;
const num2;
const num3;

if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
    console.log(true)
} else {
    console.log(false)
}

//// Exercicio 9

const num4;
const num5;
const num6;

if (num4 % 2 != 0 || num5 % 2 != 0 || num6 % 2 != 0) {
    console.log(true)
} else {
    console.log(false)
}

//// Exercicio 10

const custo = null;
const imposto = custo *0.2;
const custoTotal = custo + imposto;
const valorDeVenda = null;

let lucro = valorDeVenda - custoTotal;

console.log(lucro * 1000);

//// Exercicio 11

const salarioBruto = null;
let salarioBase = undefined;
let ir = undefined;



if (salarioBruto <= 1556.94) {

    let salarioBase = salarioBruto - (salarioBruto * 0.08);
    if (salarioBase <= 1903.98) {

        let ir = 0;
        console.log(salarioBase - ir);
    
    
    } else if (salarioBase >= 1903.99 || salarioBase <= 2826.65) {
    
        let ir = (salarioBase * 0.075) - 142.80;
        console.log(salarioBase - ir);
     
    
    } else if (salarioBase >= 2826.66 || salarioBase <= 3751.05) {
    
        let ir = (salarioBase * 0.15) - 354.80;
        console.log(salarioBase - ir);
        
    } else if (salarioBase >= 3751.06 || salarioBase <= 4664.68) {
    
        let ir = (salarioBase * 0.22) - 636.13;
        console.log(salarioBase - ir);
      
    
    } else if (salarioBase > 4664.68) {
    
        let ir = (salarioBase * 0.275) - 869.36;
        console.log(salarioBase - ir);
    
    }
    


} else if (salarioBruto >= 1556.95 || salarioBruto <= 2594.92) {

    let salarioBase = salarioBruto - (salarioBruto * 0.09);
    if (salarioBase <= 1903.98) {

        let ir = 0;
        console.log(salarioBase - ir);
    
    
    } else if (salarioBase >= 1903.99 || salarioBase <= 2826.65) {
    
        let ir = (salarioBase * 0.075) - 142.80;
        console.log(salarioBase - ir);
     
    
    } else if (salarioBase >= 2826.66 || salarioBase <= 3751.05) {
    
        let ir = (salarioBase * 0.15) - 354.80;
        console.log(salarioBase - ir);
        
    } else if (salarioBase >= 3751.06 || salarioBase <= 4664.68) {
    
        let ir = (salarioBase * 0.22) - 636.13;
        console.log(salarioBase - ir);
      
    
    } else if (salarioBase > 4664.68) {
    
        let ir = (salarioBase * 0.275) - 869.36;
        console.log(salarioBase - ir);
    
    }



} else if (salarioBruto >= 2594.93 || salarioBruto <= 5189.82) {

    let salarioBase = salarioBruto - (salarioBruto * 0.11);
    if (salarioBase <= 1903.98) {

        let ir = 0;
        console.log(salarioBase - ir);
    
    
    } else if (salarioBase >= 1903.99 || salarioBase <= 2826.65) {
    
        let ir = (salarioBase * 0.075) - 142.80;
        console.log(salarioBase - ir);
     
    
    } else if (salarioBase >= 2826.66 || salarioBase <= 3751.05) {
    
        let ir = (salarioBase * 0.15) - 354.80;
        console.log(salarioBase - ir);
        
    } else if (salarioBase >= 3751.06 || salarioBase <= 4664.68) {
    
        let ir = (salarioBase * 0.22) - 636.13;
        console.log(salarioBase - ir);
      
    
    } else if (salarioBase > 4664.68) {
    
        let ir = (salarioBase * 0.275) - 869.36;
        console.log(salarioBase - ir);
    
    }


} else if (salarioBruto > 5189.82) {

    let salarioBase = salarioBruto - 570.88;
    if (salarioBase <= 1903.98) {

        let ir = 0;
        console.log(salarioBase - ir);
    
    
    } else if (salarioBase >= 1903.99 || salarioBase <= 2826.65) {
    
        let ir = (salarioBase * 0.075) - 142.80;
        console.log(salarioBase - ir);
     
    
    } else if (salarioBase >= 2826.66 || salarioBase <= 3751.05) {
    
        let ir = (salarioBase * 0.15) - 354.80;
        console.log(salarioBase - ir);
        
    } else if (salarioBase >= 3751.06 || salarioBase <= 4664.68) {
    
        let ir = (salarioBase * 0.22) - 636.13;
        console.log(salarioBase - ir);
      
    
    } else if (salarioBase > 4664.68) {
    
        let ir = (salarioBase * 0.275) - 869.36;
        console.log(salarioBase - ir);
    
    }
  

}

