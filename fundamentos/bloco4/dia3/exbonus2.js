//Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.

let numero = 7;
let divisores0 = [];
let divisoresNao0 = [];

for (index = 1; index <= numero; index +=1) {
    let resto = numero % index;

    if (resto === 0) {
        divisores0.push(index);
    } else {
        divisoresNao0.push(index);
    }


}

    if (divisores0.length === 2) {
        console.log( numero + " é primo");
    } else {
        console.log( numero + " não é primo")
    }
    
    
