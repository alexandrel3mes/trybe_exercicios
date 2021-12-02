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