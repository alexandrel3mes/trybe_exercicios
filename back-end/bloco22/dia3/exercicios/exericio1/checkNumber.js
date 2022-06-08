const checkNumber = (num) => {
  if (typeof num === "number") {
    if(Math.sign(num) === 1) return 'positivo';
    if(Math.sign(num) === -1) return 'negativo';
    if(Math.sign(num) === 0) return 'neutro';
  } else {
    return 'o valor deve ser um número'
  }
}

module.exports = checkNumber;