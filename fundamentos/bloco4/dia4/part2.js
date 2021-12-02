/* 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false */

function verificaPalindrome (palavra) {

    let inverted = [];
    
    inverted = palavra.split("");
    inverted = inverted.reverse()
    inverted = inverted.join("");

    if (inverted === palavra) {

        return true

    } else {
        return false
    }


}

console.log(verificaPalindrome("arara"));


/* 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 .
 */

function indiceDoMaiorValor (arrayTeste) {

    let maiorIndice = 0;

    for(let value in arrayTeste) {

        if (arrayTeste[maiorIndice] < arrayTeste[value]) {
            maiorIndice = value
        }

    }

    return maiorIndice;

}

console.log(indiceDoMaiorValor([2, 3, 6, 7, 10, 1]));


/* 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 . */

function indiceDoMenorValor (arrayTeste) {

    let menorIndice = 0;

    for(let value in arrayTeste) {

        if (arrayTeste[menorIndice] > arrayTeste[value]) {
            menorIndice = value
        }

    }

    return menorIndice;

}

console.log(indiceDoMenorValor([2, 4, 6, 7, 10, 0, -3]));



/* 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda . */


function nomeMaior (nomes) {

    let maiorNome = nomes[0];

    for (let elements in nomes) {



        if (maiorNome.length < nomes[elements].length) {
            maiorNome = nomes[elements];
        }
    }

    return maiorNome;

}


console.log(nomeMaior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));