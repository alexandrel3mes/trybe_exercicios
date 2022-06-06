const operations = require('./operacoes');
const realine = require('readline-sync');
console.log('Calculadora Simples');

const num1 = realine.questionInt('Digite o primeiro número: ');
const oper = realine.question('Digite a operação: (+, -, *, /)');
const num2 = realine.questionInt('Digite o segundo número: ');

switch(oper) {
  case '+':
    operations.sum(num1, num2)
    break;
  case '-':
    operations.sub(num1, num2)
    break;
  case '*':
    operations.mul(num1, num2)
    break;
  case '/':
    operations.div(num1, num2)
    break;
  default:
    console.log('Opa! A operação é desconhecida ou não foi implementada.')
}