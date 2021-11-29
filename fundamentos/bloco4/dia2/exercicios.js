///Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:


// Exercicio 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


for (let number of numbers) {
    console.log(number);
}

// Exercicio 2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

console.log(numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4]+numbers[5]+numbers[6]+numbers[7]+numbers[8]+numbers[9]);

// Exercicio 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

console.log((numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4]+numbers[5]+numbers[6]+numbers[7]+numbers[8]+numbers[9])/numbers.length);

// Exercicio 4

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

let soma = (numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4]+numbers[5]+numbers[6]+numbers[7]+numbers[8]+numbers[9])/numbers.length;

if (soma > 20){
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20")
}

// Exercicio 5

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = numbers [0]

for (let i = 1; i < numbers.length; i += 1) {

  if (maior < numbers[i]) {

    maior = numbers[i];

  }

}

console.log(maior);


// Exercicio 6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numerosImpares;

let numero;

for (i = 0; i < numbers.length; i += 1) {
  numero = numbers[i];

  if (numero % 2 != 0) {
    numerosImpares += 1;

    }



}

console.log(numerosImpares);

// Exercicio 7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = numbers [0]

for (let i = 1; i < numbers.length; i += 1) {

  if (maior > numbers[i]) {

    maior = numbers[i];

  }

}

console.log(maior);


// Exercicio 8

let array = [];

for (index = 1; index < 26; index += 1) {
  array.push(index)

}

console.log(array);



// Exercicio 9

let array = [1, 2 , 3, 4,  5,  6,  7,  8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25 ];

let divisao = [];

for (index = 0; index < array.length; index += 1) {
divisao.push(array[index] / 2);
}

console.log(divisao);

