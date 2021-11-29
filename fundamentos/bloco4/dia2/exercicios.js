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
