//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let n = 4;
let str = "*";


if (n > 1) {
    
    for (index = 1; index <= n; index += 1){ 

        console.log(str.repeat(n));

    }


}