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


/* 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2 . */

function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;


    for (let index in numeros) {
      let verificaNumero = numeros[index];

      /* Primeiro sai 2 */

      for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) {
          contNumero += 1;
        }

        /* contNumero sai 3 */

      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index;
      }
      contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
  }
console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]))

/* 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
Valor de teste: N = 5 .
Valor esperado no retorno da função: 1+2+3+4+5 = 15 . */

function somatorio (n) {

    let numero = [];
    let soma = 0;

    for (index = 0; index <= n; index += 1) {
        numero.push(n - index);
    }

    for (index2 = 0; index2 < numero.length; index2 += 1){
        soma += numero[index2]
    }

    return soma

}

console.log(somatorio(5));

/* 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
Valor de teste: 'trybe' e 'be'
Valor esperado no retorno da função: true
verificaFimPalavra('trybe', 'be') ;
Retorno esperado: true
verificaFimPalavra('joaofernando', 'fernan') ;
Retorno esperado: false
 */


function verificaFimPalavra (stringWord, stringEnd) {


    return stringWord.substring(stringWord.length - stringEnd.length) === stringEnd;

}

console.log(verificaFimPalavra("trybe", "be"));
console.log(verificaFimPalavra('joaofernando', 'fernan'));